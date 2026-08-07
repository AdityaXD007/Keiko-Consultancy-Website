import { NextResponse } from 'next/server';
import { fetchPopupAnnouncement } from '@/lib/api/popup';

export async function GET() {
  try {
    const popup = await fetchPopupAnnouncement();
    return NextResponse.json({ popup });
  } catch (error) {
    console.error('[API Route /api/popup] Error proxying to backend:', error);
    return NextResponse.json({ popup: null });
  }
}
