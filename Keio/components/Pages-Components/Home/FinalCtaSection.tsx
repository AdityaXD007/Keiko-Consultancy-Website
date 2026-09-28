// components/home/FinalCtaSection.tsx
import Link from 'next/link';
import { FadeIn } from './FadeIn';

export function FinalCtaSection() {
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-yokohama-red text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-6">
            Start Your Journey to Japan Today
          </h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 text-white max-w-2xl mx-auto">
            Take the first step towards your Japanese dreams with YOKOHAMA
            LANGUAGE &amp; TRAINING CONSULTANCY (P) LTD.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-yokohama-red px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl font-semibold text-sm sm:text-base"
            >
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="bg-yokohama-blue text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-yokohama-blue-dark transition-all shadow-xl hover:shadow-2xl font-semibold text-sm sm:text-base"
            >
              Book Consultation
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}