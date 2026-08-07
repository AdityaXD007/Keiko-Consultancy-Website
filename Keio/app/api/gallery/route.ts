import { NextResponse } from 'next/server';
import { fetchGalleryAlbums } from '@/lib/api/gallery';

export async function GET() {
  try {
    const albums = await fetchGalleryAlbums();
    return NextResponse.json({ albums });
  } catch (error) {
    console.error('[API Route /api/gallery] Error proxying to backend:', error);
    return NextResponse.json({ albums: [] });
  }
}
