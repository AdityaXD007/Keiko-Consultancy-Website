import type { Metadata } from 'next';
import Link from 'next/link';
import { Newspaper, ChevronLeft, ChevronRight, AlertTriangle } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { NewsCard } from '@/components/NewsCard';
import { NewsFilterTabs } from '@/components/NewsFilterTabs';
import { fetchPosts } from '@/lib/api/posts';
import type { PostType, Post, PaginatedResponse } from '@/lib/api/types';

export const metadata: Metadata = {
  title: 'News & Official Notices',
  description: 'Stay updated with the latest news, admission notices, exam schedules, and announcements from Yokohama Language & Training Consultancy.',
};

interface NewsPageProps {
  searchParams: Promise<{
    type?: string;
    page?: string;
  }>;
}

export default async function NewsPage({ searchParams }: NewsPageProps) {
  const resolvedParams = await searchParams;
  const rawType = resolvedParams.type;
  const validTypes: PostType[] = ['news', 'notice'];
  const typeFilter: PostType | undefined = validTypes.includes(rawType as PostType)
    ? (rawType as PostType)
    : undefined;

  const page = parseInt(resolvedParams.page || '1', 10);

  let data: PaginatedResponse<Post> | null = null;
  let fetchError = false;

  try {
    data = await fetchPosts({
      type: typeFilter,
      page: page > 0 ? page : 1,
    });
  } catch (err) {
    console.error('[NewsPage] Error fetching posts:', err);
    fetchError = true;
  }

  const posts = data?.results || [];
  const hasNext = Boolean(data?.next);
  const hasPrev = Boolean(data?.previous);
  const totalCount = data?.count || 0;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 mt-20">
        {/* Banner Section */}
        <section className="bg-yokohama-blue text-white py-16 lg:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-4 border border-white/20">
              <Newspaper className="w-4 h-4 text-yokohama-gold" />
              <span className="text-sm font-semibold tracking-wide">Announcements & Updates</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
              News & Official Notices
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto font-medium">
              Keep track of Japanese language courses, test registration dates, scholarship info, and Yokohama Consultancy news.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter Tabs */}
            <NewsFilterTabs currentType={typeFilter} />

            {/* Error or Empty or Grid */}
            {fetchError ? (
              <div className="bg-yokohama-light-bg rounded-2xl p-12 text-center border border-gray-200 max-w-xl mx-auto shadow-sm">
                <AlertTriangle className="w-12 h-12 text-yokohama-red mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-yokohama-dark-text mb-2">Unable to Load Updates</h2>
                <p className="text-gray-600 text-base mb-6">
                  We are unable to reach the announcements server at this moment. Please try refreshing or check back later.
                </p>
              </div>
            ) : posts.length === 0 ? (
              <div className="bg-yokohama-light-bg rounded-2xl p-12 text-center border border-gray-200 max-w-md mx-auto">
                <p className="text-gray-600 font-semibold text-lg">No posts found in this category.</p>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {posts.map((post, idx) => (
                    <NewsCard key={post.id} post={post} index={idx} />
                  ))}
                </div>

                {/* Pagination Controls */}
                {(hasNext || hasPrev) && (
                  <div className="flex items-center justify-center gap-4 pt-8 border-t border-gray-100">
                    {hasPrev ? (
                      <Link
                        href={`/news?${new URLSearchParams({
                          ...(typeFilter ? { type: typeFilter } : {}),
                          page: String(page - 1),
                        }).toString()}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-300 text-sm font-bold text-yokohama-dark-text hover:bg-gray-50 transition-colors shadow-sm"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        Previous Page
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-bold text-gray-400 cursor-not-allowed"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        Previous Page
                      </button>
                    )}

                    <span className="text-sm font-semibold text-gray-600 px-2">
                      Page {page}
                    </span>

                    {hasNext ? (
                      <Link
                        href={`/news?${new URLSearchParams({
                          ...(typeFilter ? { type: typeFilter } : {}),
                          page: String(page + 1),
                        }).toString()}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-300 text-sm font-bold text-yokohama-dark-text hover:bg-gray-50 transition-colors shadow-sm"
                      >
                        Next Page
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-bold text-gray-400 cursor-not-allowed"
                      >
                        Next Page
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
