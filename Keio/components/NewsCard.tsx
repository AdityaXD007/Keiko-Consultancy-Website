'use client';

import Link from 'next/link';
import { Calendar, ChevronRight, Bell, Newspaper } from 'lucide-react';
import { motion } from 'motion/react';
import type { Post } from '@/lib/api/types';

interface NewsCardProps {
  post: Post;
  index?: number;
}

/**
 * Strip HTML tags and normalize whitespace to create a plain text excerpt.
 */
function getExcerpt(html: string, maxLength: number = 150): string {
  if (!html) return '';
  const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '…';
}

/**
 * Format ISO date string into readable format (e.g. "Oct 24, 2024").
 */
function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return dateString;
  }
}

export function NewsCard({ post, index = 0 }: NewsCardProps) {
  const isNotice = post.type === 'notice';
  const excerpt = getExcerpt(post.content);
  const formattedDate = formatDate(post.created_at);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      viewport={{ once: true }}
      className={`group relative bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden ${
        isNotice
          ? 'border-l-4 border-l-yokohama-blue border-gray-100 hover:border-yokohama-blue/30'
          : 'border-l-4 border-l-yokohama-red border-gray-100 hover:border-yokohama-red/30'
      }`}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          {/* Optional Image Header */}
          {post.image && (
            <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-gray-100 border-b border-gray-100">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          )}

          <div className="p-6">
            {/* Header: Type Badge & Date */}
            <div className="flex items-center justify-between mb-4 gap-2 flex-wrap">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${
                  isNotice
                    ? 'bg-yokohama-blue-light text-yokohama-blue'
                    : 'bg-yokohama-red-light text-yokohama-red'
                }`}
              >
                {isNotice ? (
                  <Bell className="w-3.5 h-3.5" />
                ) : (
                  <Newspaper className="w-3.5 h-3.5" />
                )}
                {post.type}
              </span>

              <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium ml-auto">
                <Calendar className="w-3.5 h-3.5 text-gray-400" />
                <time dateTime={post.created_at}>{formattedDate}</time>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-yokohama-dark-text group-hover:text-yokohama-red transition-colors line-clamp-2 mb-3 leading-snug">
              <Link href={`/news/${post.slug}`} className="focus:outline-none">
                {post.title}
              </Link>
            </h3>

            {/* Excerpt */}
            <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
              {excerpt}
            </p>
          </div>
        </div>

        {/* Read More Link */}
        <div className="px-6 pb-6 pt-0 mt-auto">
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <Link
              href={`/news/${post.slug}`}
              className="inline-flex items-center gap-1 text-sm font-semibold text-yokohama-blue group-hover:text-yokohama-red transition-colors"
            >
              Read Full Details
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
