// components/home/AboutSection.tsx
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

export function AboutSection() {
  return (
    <section className="py-10 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Copy */}
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-yokohama-dark-text">
              About YOKOHAMA LANGUAGE &amp; TRAINING CONSULTANCY (P) LTD.
            </h2>
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
              Yokohama Language &amp; Training Consultancy (P) Ltd.
              (横浜日本語学習学院) is a leading and promising institution
              providing Japanese language courses along with counselling
              students for student visa to study in Japan since 20 years+ in
              Pokhara. It is one of the oldest consultancy of Pokhara.
            </p>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Initially found in 2005 A.D. and registered locally in Pokhara,
              and later in 2009 A.D. registered as a Private Limited. We are a
              renowned institution registered under the Act of the Nepal
              Government, certified by Ministry of Education, Nepal Government
              having TITI Certified Counselor, specializing in Japanese
              language education.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-yokohama-red hover:underline font-semibold text-sm sm:text-base"
            >
              Learn More About Us
              <ChevronRight size={20} aria-hidden="true" />
            </Link>
          </FadeIn>

          {/* Image */}
          <FadeIn>
            <div className="relative h-[260px] sm:h-[340px] lg:h-[400px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/brand/Icon.webp"
                alt="YOKOHAMA LANGUAGE & TRAINING CONSULTANCY (P) LTD. Icon"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 584px"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}