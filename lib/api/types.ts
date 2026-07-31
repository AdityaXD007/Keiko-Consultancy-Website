// ---------------------------------------------------------------------------
// lib/api/types.ts — Shared TypeScript types for the News & Notices CMS API.
//
// These mirror the Django REST Framework PostPublicSerializer output and
// DRF's PageNumberPagination envelope. Kept in a separate module so both
// the fetch layer and consuming Server Components import from one source
// of truth.
// ---------------------------------------------------------------------------

/** Valid post type discriminator, matching Post.TYPE_CHOICES on the backend. */
export type PostType = 'news' | 'notice';

/** Shape returned by PostPublicSerializer (public endpoints only). */
export interface Post {
  id: number;
  title: string;
  slug: string;
  /** HTML string, pre-sanitized via bleach on the backend — safe to render directly with dangerouslySetInnerHTML. */
  content: string;
  type: PostType;
  is_featured: boolean;
  /** ISO-8601 datetime string. */
  created_at: string;
  /** ISO-8601 datetime string. */
  updated_at: string;
}

/**
 * Generic wrapper matching DRF's PageNumberPagination response envelope.
 *
 * Example:
 * ```json
 * { "count": 42, "next": "…?page=3", "previous": "…?page=1", "results": [...] }
 * ```
 */
export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

/** Query parameters accepted by GET /api/posts/. */
export interface PostListParams {
  /** Filter by post type. Backend validates against TYPE_CHOICES; invalid values return 400. */
  type?: PostType;
  /** Filter by featured flag. Backend accepts 'true'/'false'/'1'/'0'; invalid values return 400. */
  featured?: boolean;
  /** 1-indexed page number for DRF pagination. */
  page?: number;
}

/**
 * Typed error thrown on any non-2xx API response.
 *
 * Preserves the HTTP status code and the parsed response body (JSON when
 * available, raw text as fallback) so callers can inspect backend
 * validation errors (e.g. {"type": "Invalid type '...'..."}) without
 * losing context.
 */
export class ApiError extends Error {
  public readonly status: number;
  public readonly body: unknown;

  constructor(message: string, status: number, body?: unknown) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.body = body;
  }
}
