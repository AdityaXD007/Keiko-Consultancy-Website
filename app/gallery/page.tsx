'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Search, Camera, Images } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { galleryCategories } from '@/lib/galleryData';

export default function GalleryPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return galleryCategories;
    const q = searchQuery.toLowerCase();
    return galleryCategories.filter(
      (cat) =>
        cat.title.toLowerCase().includes(q) ||
        cat.description.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const totalPhotos = galleryCategories.reduce((sum, cat) => sum + cat.images.length, 0);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[400px] mt-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/banners/Banner2.jpeg"
            alt="Gallery Banner"
            fill
            priority
            className="object-cover brightness-50"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-yokohama-blue/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-yokohama-red rounded-lg flex items-center justify-center">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <span className="text-white/80 text-sm font-medium uppercase tracking-wider">Photo Gallery</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">Our Gallery</h1>
            <p className="text-xl text-white/90 max-w-2xl mb-6">
              Explore memories and moments from our events, activities, and celebrations
            </p>
            <div className="flex gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <Images className="w-4 h-4" />
                <span>{galleryCategories.length} Albums</span>
              </div>
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4" />
                <span>{totalPhotos} Photos</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search albums..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yokohama-red/30 focus:border-yokohama-red transition-all text-sm"
            />
          </div>
        </div>
      </section>

      {/* Category Cards Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-20">
              <Images className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-500 mb-2">No albums found</h3>
              <p className="text-gray-400">Try a different search term</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {filteredCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/gallery/${category.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200"
                  >
                    {/* Cover Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <Image
                        src={category.coverImage}
                        alt={category.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {/* Photo count badge */}
                      <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5">
                        <Camera className="w-3 h-3" />
                        {category.images.length}
                      </div>
                      {/* View text on hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="bg-white text-yokohama-dark-text px-5 py-2 rounded-full text-sm font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          View Album →
                        </span>
                      </div>
                    </div>

                    {/* Card Info */}
                    <div className="p-5">
                      <h3 className="font-bold text-yokohama-dark-text mb-1.5 group-hover:text-yokohama-red transition-colors line-clamp-2 text-sm md:text-base">
                        {category.title}
                      </h3>
                      <p className="text-xs text-gray-500 line-clamp-2">
                        {category.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
