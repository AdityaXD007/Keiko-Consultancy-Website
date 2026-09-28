'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, BookOpen, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSliderProps {
  images: string[];
}

export function HeroSlider({ images }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(
    () => setCurrentSlide((p) => (p === images.length - 1 ? 0 : p + 1)),
    [images.length],
  );
  const prevSlide = useCallback(
    () => setCurrentSlide((p) => (p === 0 ? images.length - 1 : p - 1)),
    [images.length],
  );

  useEffect(() => {
    const t = setInterval(nextSlide, 5000);
    return () => clearInterval(t);
  }, [nextSlide]);

  return (
    <section className="relative h-[660px] sm:h-[720px] lg:h-[700px] mt-20 flex flex-col lg:block overflow-hidden bg-gray-900 group w-full max-w-full">
      <div className="absolute inset-y-0 right-0 left-0 lg:left-[400px] z-0 bg-gray-900">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={images[currentSlide]}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover lg:object-center opacity-65 lg:opacity-100"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/60 lg:hidden z-10 pointer-events-none" />
      </div>

      <div className="hidden lg:block absolute z-10 top-1/2 -translate-y-1/2 -left-[550px] w-[1100px] h-[1100px] rounded-full bg-yokohama-red shadow-2xl pointer-events-none" />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-6 sm:gap-8 px-5 sm:px-10 lg:block lg:px-0 lg:w-full pointer-events-none overflow-hidden">
        <div className="flex-shrink-0 pointer-events-auto lg:absolute lg:top-45 lg:-translate-y-1/2 lg:left-[250px] lg:z-30">
          <Image
            src="/banners/20years_Logo.png"
            alt="20+ Years Logo"
            width={700}
            height={700}
            className="w-40 sm:w-52 md:w-56 lg:w-55 h-auto object-contain drop-shadow-2xl"
            priority
          />
        </div>

        <div className="w-full max-w-[20rem] sm:max-w-md pointer-events-auto text-white flex flex-col items-center text-center lg:absolute lg:inset-0 lg:flex lg:flex-col lg:justify-center lg:pl-24 lg:pr-8 lg:w-[550px] lg:max-w-none lg:items-start lg:text-left">
          <div className="inline-flex items-center space-x-2 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 sm:px-5 sm:py-2.5 lg:px-4 lg:py-1.5 mb-3.5 sm:mb-4 border border-white/20">
            <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-white whitespace-nowrap">
              Admission Open
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight text-white drop-shadow-md text-center lg:text-left"
          >
            Your Journey to<br />Japan Starts Here
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base lg:text-xl mb-5 sm:mb-6 lg:mb-8 text-white/95 drop-shadow text-center lg:text-left leading-snug"
          >
            Learn Japanese, receive expert guidance, and secure admission to top institutions in Japan.
          </motion.p>

          <div className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 lg:gap-4">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 bg-yokohama-red hover:bg-yokohama-red-dark text-white px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-lg sm:rounded-xl text-sm sm:text-base font-bold transition-colors shadow-lg"
            >
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span className="whitespace-nowrap">Explore Courses</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-yokohama-red px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-lg sm:rounded-xl text-sm sm:text-base font-bold transition-colors shadow-lg"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span className="whitespace-nowrap">Free Consultation</span>
            </Link>
          </div>
        </div>
      </div>

      <button
        type="button" onClick={prevSlide} aria-label="Previous slide"
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-colors z-30 opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        type="button" onClick={nextSlide} aria-label="Next slide"
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-colors z-30 opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="hidden lg:flex absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 space-x-3 z-30">
        {images.map((_, i) => (
          <button
            key={i} type="button" aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrentSlide(i)}
            className={`h-2.5 rounded-full transition-all duration-300 shadow-sm ${
              i === currentSlide ? 'bg-white w-8' : 'bg-white/50 w-2.5'
            }`}
          />
        ))}
      </div>
    </section>
  );
}