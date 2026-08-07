import type { PopupAnnouncement } from './types';

function getBaseUrl(): string {
  const url = process.env.API_BASE_URL;
  if (!url) {
    // Fallback for client side or unconfigured local env
    return 'http://127.0.0.1:8000';
  }
  return url.replace(/\/+$/, '');
}

export async function fetchPopupAnnouncement(): Promise<PopupAnnouncement | null> {
  try {
    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/api/popup/`, {
      headers: { Accept: 'application/json' },
      next: { revalidate: 10, tags: ['popup'] },
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    if (!data || !data.is_active) {
      return null;
    }

    return data as PopupAnnouncement;
  } catch (error) {
    console.error('[lib/api/popup] Failed to fetch popup announcement:', error);
    return null;
  }
}
