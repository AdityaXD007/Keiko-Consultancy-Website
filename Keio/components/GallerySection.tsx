'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Camera, ArrowRight } from 'lucide-react';
import { galleryCategories } from '@/lib/galleryData';

export function GallerySection() {
  // Show only the first 4 categories on the homepage
  const featured = galleryCategories.slice(0, 4);

  return (
    <section className="py-20 bg-yokohama-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-yokohama-dark-text">
            Our Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore memories and moments from our events, activities, and celebrations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/gallery/${category.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={category.coverImage}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5">
                    <Camera className="w-3 h-3" />
                    {category.images.length}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-yokohama-dark-text text-sm group-hover:text-yokohama-red transition-colors line-clamp-1">
                    {category.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-yokohama-red text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-yokohama-red-dark transition-all shadow-md hover:shadow-lg"
          >
            View All Albums
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
