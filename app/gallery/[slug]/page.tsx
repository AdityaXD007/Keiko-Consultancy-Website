'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ChevronRight, Camera, ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GalleryLightbox } from '@/components/GalleryLightbox';
import { getCategoryBySlug } from '@/lib/galleryData';

export default function GalleryCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const category = getCategoryBySlug(slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  if (!category) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <div className="max-w-md mx-auto px-4">
            <Camera className="w-20 h-20 text-gray-200 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-yokohama-dark-text mb-4">Album Not Found</h1>
            <p className="text-gray-500 mb-8">The album you are looking for does not exist or has been removed.</p>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-yokohama-red text-white px-6 py-3 rounded-xl font-semibold hover:bg-yokohama-red-dark transition-colors shadow-md"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Gallery
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero with cover image */}
      <section className="relative h-[350px] md:h-[400px] mt-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={category.coverImage}
            alt={category.title}
            fill
            priority
            className="object-cover brightness-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm text-white/70 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white font-medium truncate max-w-[200px]">{category.title}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              {category.title}
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mb-3">
              {category.description}
            </p>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Camera className="w-4 h-4" />
              <span>{category.images.length} Photos</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back button bar */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-yokohama-red transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Gallery
          </Link>
        </div>
      </div>

      {/* Image Grid */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {category.images.map((imgSrc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(idx * 0.05, 0.4), duration: 0.4 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group bg-gray-100"
                onClick={() => openLightbox(idx)}
              >
                {/* Skeleton loader */}
                {!loadedImages.has(idx) && (
                  <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Camera className="w-8 h-8 text-gray-200" />
                    </div>
                  </div>
                )}

                <Image
                  src={imgSrc}
                  alt={`${category.title} - Photo ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                  onLoad={() => handleImageLoad(idx)}
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <Camera className="w-5 h-5 text-yokohama-dark-text" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <GalleryLightbox
        images={category.images}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

      <Footer />
    </div>
  );
}
