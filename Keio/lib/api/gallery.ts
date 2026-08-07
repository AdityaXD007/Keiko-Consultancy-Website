import type { GalleryAlbum } from './types';

function getBaseUrl(): string {
  const url = process.env.API_BASE_URL;
  if (!url) {
    return 'http://127.0.0.1:8000';
  }
  return url.replace(/\/+$/, '');
}

export async function fetchGalleryAlbums(): Promise<GalleryAlbum[]> {
  try {
    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/api/gallery/`, {
      headers: { Accept: 'application/json' },
      cache: 'no-store',
    });

    if (!response.ok) {
      return [];
    }

    const data = await response.json();
    return Array.isArray(data) ? data : (data.results || []);
  } catch (error) {
    console.error('[lib/api/gallery] Failed to fetch gallery albums:', error);
    return [];
  }
}

export async function fetchGalleryAlbumBySlug(slug: string): Promise<GalleryAlbum | null> {
  try {
    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/api/gallery/${encodeURIComponent(slug)}/`, {
      headers: { Accept: 'application/json' },
      cache: 'no-store',
    });


    if (!response.ok) {
      return null;
    }

    return (await response.json()) as GalleryAlbum;
  } catch (error) {
    console.error(`[lib/api/gallery] Failed to fetch album ${slug}:`, error);
    return null;
  }
}
