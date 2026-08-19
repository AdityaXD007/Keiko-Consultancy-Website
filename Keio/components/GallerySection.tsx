'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Camera, ArrowRight } from 'lucide-react';
import { galleryCategories, GalleryCategory } from '@/lib/galleryData';

export function GallerySection() {
  const [categories, setCategories] = useState<GalleryCategory[]>(galleryCategories);

  useEffect(() => {
    async function loadAlbums() {
      try {
        const res = await fetch('/api/gallery');
        const data = await res.json();
        if (data.albums && data.albums.length > 0) {
          const mapped: GalleryCategory[] = data.albums.map((item: any) => {
            const staticItem = galleryCategories.find((c) => c.slug === item.slug);
            const photosList = item.photos && item.photos.length > 0
              ? item.photos.map((p: any) => (p.image.startsWith('http') ? p.image : `http://127.0.0.1:8000${p.image}`))
              : (staticItem ? staticItem.images : []);

            let cover = staticItem ? staticItem.coverImage : '/banners/Banner1.jpeg';
            if (item.cover_image_url || item.cover_image) {
              const rawCover = item.cover_image_url || item.cover_image;
              cover = rawCover.startsWith('http') ? rawCover : `http://127.0.0.1:8000${rawCover}`;
            } else if (photosList.length > 0) {
              cover = photosList[0];
            }

            return {
              id: String(item.id),
              slug: item.slug,
              title: item.title,
              description: item.description,
              coverImage: cover,
              images: photosList,
            };
          });
          const backendSlugs = new Set(mapped.map((m) => m.slug));
          const missingStatic = galleryCategories.filter((cat) => !backendSlugs.has(cat.slug));
          setCategories([...mapped, ...missingStatic]);
        }
      } catch (err) {
        console.error('Failed to load dynamic gallery section albums:', err);
      }

    }
    loadAlbums();
  }, []);

  // Show only the first 4 categories on the homepage
  const featured = categories.slice(0, 4);


  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-yokohama-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 text-yokohama-dark-text">
            Our Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Explore memories and moments from our events, activities, and celebrations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
                    unoptimized={category.coverImage.includes('http')}
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
