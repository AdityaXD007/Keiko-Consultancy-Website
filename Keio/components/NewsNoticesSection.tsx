'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Newspaper, ArrowRight, AlertCircle, Loader2 } from 'lucide-react';
import { NewsCard } from './NewsCard';
import type { Post, PaginatedResponse } from '@/lib/api/types';

export function NewsNoticesSection() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    async function loadPosts() {
      try {
        setIsLoading(true);
        setIsError(false);
        const res = await fetch('/api/posts?page=1');
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const data: PaginatedResponse<Post> = await res.json();
        if (isMounted) {
          setPosts(data.results ? data.results.slice(0, 6) : []);
        }
      } catch (err) {
        console.error('[NewsNoticesSection] Fetch error:', err);
        if (isMounted) {
          setIsError(true);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadPosts();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="py-20 bg-yokohama-light-bg border-t border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-yokohama-red/10 text-yokohama-red px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Newspaper className="w-4 h-4" />
              Latest Updates
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-yokohama-dark-text tracking-tight">
              News & Official Notices
            </h2>
            <p className="text-gray-600 mt-2 max-w-xl text-base">
              Stay updated with recent announcements, intake deadlines, exam schedules, and student updates.
            </p>
          </div>

          <Link
            href="/news"
            className="inline-flex items-center gap-2 bg-yokohama-blue text-white px-6 py-3 rounded-xl hover:bg-yokohama-blue-dark transition-all font-semibold shadow-md hover:shadow-lg self-start md:self-auto"
          >
            View All News & Notices
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Content Grid / States */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 animate-pulse h-64 flex flex-col justify-between">
                <div>
                  <div className="h-5 bg-gray-200 rounded-full w-24 mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-gray-150 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-150 rounded w-5/6"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-28 mt-4"></div>
              </div>
            ))}
          </div>
        ) : isError ? (
          <div className="bg-white rounded-2xl p-10 text-center border border-dashed border-gray-300 max-w-2xl mx-auto shadow-sm">
            <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
              <AlertCircle className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Updates Coming Soon</h3>
            <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
              Our announcement system is being synchronized. Please check back shortly or explore our full news directory.
            </p>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-yokohama-red font-semibold hover:underline text-sm"
            >
              Explore News Section <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : posts.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center border border-gray-200 max-w-md mx-auto">
            <p className="text-gray-600 text-base font-medium">No announcements published yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <NewsCard key={post.id} post={post} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
