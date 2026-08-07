import { NextResponse } from 'next/server';
import { fetchPosts } from '@/lib/api/posts';
import type { PostType } from '@/lib/api/types';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const typeParam = searchParams.get('type') || undefined;
  const pageParam = searchParams.get('page');

  const type = (typeParam === 'news' || typeParam === 'notice') ? (typeParam as PostType) : undefined;
  const page = pageParam ? parseInt(pageParam, 10) : 1;

  try {
    const data = await fetchPosts({ type, page });
    return NextResponse.json(data);
  } catch (error) {
    console.error('[API Route /api/posts] Error proxying to backend:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts from backend server' },
      { status: 502 }
    );
  }
}
