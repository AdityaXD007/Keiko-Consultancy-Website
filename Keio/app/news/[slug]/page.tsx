import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, ArrowLeft, Bell, Newspaper, Tag, Share2 } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { fetchPostBySlug } from '@/lib/api/posts';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await fetchPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: 'Post Not Found | Yokohama Consultancy',
    };
  }

  // Generate plain-text excerpt for meta description
  const cleanExcerpt = post.content
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 160);

  return {
    title: `${post.title} | Yokohama Consultancy`,
    description: cleanExcerpt,
    openGraph: {
      title: post.title,
      description: cleanExcerpt,
      type: 'article',
      publishedTime: post.created_at,
      modifiedTime: post.updated_at,
    },
  };
}

export default async function PostDetailPage({ params }: PostPageProps) {
  const resolvedParams = await params;
  const post = await fetchPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const isNotice = post.type === 'notice';
  const formattedDate = new Date(post.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 mt-20 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Breadcrumbs & Back Link */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-yokohama-red transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to News & Notices
            </Link>

            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${
                isNotice
                  ? 'bg-yokohama-blue-light text-yokohama-blue'
                  : 'bg-yokohama-red-light text-yokohama-red'
              }`}
            >
              {isNotice ? <Bell className="w-3.5 h-3.5" /> : <Newspaper className="w-3.5 h-3.5" />}
              {post.type}
            </span>
          </div>

          {/* Article Header */}
          <header className="mb-10 border-b border-gray-100 pb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-yokohama-dark-text tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-medium mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-yokohama-red" />
                <time dateTime={post.created_at}>Published on {formattedDate}</time>
              </div>
            </div>

            {post.image && (
              <div className="relative w-full max-h-[480px] overflow-hidden rounded-2xl shadow-md border border-gray-100 bg-gray-50">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover max-h-[480px]"
                />
              </div>
            )}
          </header>

          {/* Article HTML Content */}
          <article
            className="prose-post text-gray-800 text-base lg:text-lg leading-relaxed mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Article Footer & CTA */}
          <footer className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
              <Tag className="w-4 h-4 text-yokohama-blue" />
              <span>Category: Yokohama Language & Training Consultancy Updates</span>
            </div>

            <Link
              href="/contact"
              className="bg-yokohama-red text-white px-6 py-3 rounded-xl font-bold hover:bg-yokohama-red-dark transition-all shadow-md hover:shadow-lg text-sm"
            >
              Contact Us Regarding This Announcement
            </Link>
          </footer>
        </div>
      </main>

      <Footer />
    </div>
  );
}
