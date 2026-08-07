// ---------------------------------------------------------------------------
// lib/api/posts.ts — Server-side fetch layer for the News & Notices CMS API.
//
// All functions use native fetch with Next.js caching extensions (revalidate
// + tags) so responses are ISR-cached and individually purgeable via
// revalidateTag() from a Server Action or Route Handler.
//
// Designed for Server Components only — API_BASE_URL is a server-side env
// var (no NEXT_PUBLIC_ prefix) and is never exposed to the browser bundle.
// ---------------------------------------------------------------------------

import type { Post, PaginatedResponse, PostListParams } from './types';
import { ApiError } from './types';

// ---------------------------------------------------------------------------
// Base URL resolution
// ---------------------------------------------------------------------------

/**
 * Read once at module load. Throws immediately if unset so the build/dev
 * server fails fast with a clear message, rather than silently fetching
 * "undefined/api/posts" and producing a cryptic network error at runtime.
 */
function getBaseUrl(): string {
  const url = process.env.API_BASE_URL;
  if (!url) {
    throw new Error(
      '[lib/api/posts] API_BASE_URL environment variable is not set. ' +
        'Add it to .env.local for local dev or to your Vercel project settings for production.'
    );
  }
  // Strip trailing slash to avoid double-slash when concatenating paths.
  return url.replace(/\/+$/, '');
}

// ---------------------------------------------------------------------------
// Internal fetch wrapper
// ---------------------------------------------------------------------------

/**
 * Shared fetch helper that:
 * 1. Resolves the full URL against API_BASE_URL.
 * 2. Applies Next.js ISR caching via `next.revalidate` and `next.tags`.
 * 3. On non-2xx responses, throws an ApiError with the parsed JSON body
 *    (or raw text fallback) attached — this preserves the backend's
 *    structured validation error messages (e.g. {"type": "Invalid type..."})
 *    for upstream error handling.
 */
async function apiFetch<T>(
  path: string,
  options: {
    revalidate: number;
    tags: string[];
  }
): Promise<T> {
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}${path}`;

  const response = await fetch(url, {
    headers: { Accept: 'application/json' },
    next: {
      revalidate: options.revalidate,
      tags: options.tags,
    },
  });

  if (!response.ok) {
    // Attempt to parse the error body as JSON (DRF returns structured
    // validation errors). Fall back to raw text if parsing fails (e.g.
    // an upstream nginx HTML 502 page).
    let body: unknown;
    try {
      body = await response.json();
    } catch {
      body = await response.text();
    }

    throw new ApiError(
      `API request failed: ${response.status} ${response.statusText} — ${url}`,
      response.status,
      body
    );
  }

  return (await response.json()) as T;
}

// ---------------------------------------------------------------------------
// Public API functions
// ---------------------------------------------------------------------------

/**
 * Fetch a paginated list of published posts.
 *
 * Caching strategy:
 * - `revalidate: 60` — ISR-cached for 60 seconds. Balances freshness
 *   (admin publishes new content) with performance (avoids hitting the
 *   Django backend on every page view).
 * - `tags: ['posts']` — allows bulk cache invalidation of all post list
 *   pages via `revalidateTag('posts')` from a webhook or Server Action
 *   when content is updated in Django admin.
 *
 * @param params - Optional filters for type, featured, and page number.
 */
export async function fetchPosts(
  params: PostListParams = {}
): Promise<PaginatedResponse<Post>> {
  const searchParams = new URLSearchParams();

  if (params.type !== undefined) {
    searchParams.set('type', params.type);
  }
  if (params.page !== undefined) {
    searchParams.set('page', String(params.page));
  }

  const query = searchParams.toString();
  const path = `/api/posts/${query ? `?${query}` : ''}`;

  return apiFetch<PaginatedResponse<Post>>(path, {
    revalidate: 60,
    tags: ['posts'],
  });
}

/**
 * Fetch a single published post by its slug.
 *
 * Returns `null` on 404 specifically — this is intentional so that
 * Server Components can call `notFound()` cleanly:
 *
 * ```ts
 * const post = await fetchPostBySlug(params.slug);
 * if (!post) notFound();
 * ```
 *
 * IMPORTANT: Only 404 is converted to null. Any other error status (400,
 * 500, etc.) is rethrown as an ApiError so it surfaces in error boundaries
 * rather than silently rendering a "not found" page for server errors.
 * Do NOT "simplify" this to catch-all → null, or real failures will be
 * masked as missing content.
 *
 * Caching strategy:
 * - `revalidate: 60` — same ISR window as the list endpoint.
 * - `tags: ['posts', 'post:${slug}']` — the slug-specific tag enables
 *   surgical cache invalidation of a single post detail page without
 *   busting the entire posts cache.
 */
export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  try {
    return await apiFetch<Post>(`/api/posts/${encodeURIComponent(slug)}/`, {
      revalidate: 60,
      tags: ['posts', `post:${slug}`],
    });
  } catch (error) {
    // Convert 404 → null so the calling page can trigger notFound().
    // Rethrow everything else (400 validation errors, 500 server errors)
    // so they propagate to the nearest error boundary.
    if (error instanceof ApiError && error.status === 404) {
      return null;
    }
    throw error;
  }
}
