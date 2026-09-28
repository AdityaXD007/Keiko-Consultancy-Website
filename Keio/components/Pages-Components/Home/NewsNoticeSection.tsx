// components/NewsNoticesSection.tsx
import Link from 'next/link';
import { Newspaper, ArrowRight } from 'lucide-react';

import type { Post } from '@/lib/api/types';
import { NewsCard } from '@/components/NewsCard';

export function NewsNoticesSection({ initialPosts }: { initialPosts: Post[] }) {
  const posts = initialPosts.slice(0, 6);

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-yokohama-light-bg border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 lg:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-yokohama-red/10 text-yokohama-red px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              <Newspaper className="w-4 h-4" />
              Latest Updates
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yokohama-dark-text tracking-tight">
              News &amp; Official Notices
            </h2>
            <p className="text-gray-600 mt-2 max-w-xl text-sm sm:text-base">
              Stay updated with recent announcements, intake deadlines, exam schedules, and student updates.
            </p>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 bg-yokohama-blue text-white px-6 py-3 rounded-xl hover:bg-yokohama-blue-dark transition-all font-semibold shadow-md hover:shadow-lg self-start md:self-auto"
          >
            View All News &amp; Notices <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {posts.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center border border-gray-200 max-w-md mx-auto">
            <p className="text-gray-600 text-base font-medium">No announcements published yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <NewsCard key={post.id} post={post} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}