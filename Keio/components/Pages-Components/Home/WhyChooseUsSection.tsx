// components/home/WhyChooseUsSection.tsx
import { CheckCircle2 } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { FadeIn } from './FadeIn';
import type { Reason } from '@/lib/home/content';

interface WhyChooseUsSectionProps {
  reasons: readonly Reason[];
}

export function WhyChooseUsSection({ reasons }: WhyChooseUsSectionProps) {
  return (
    <section className="py-10 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Why Choose Us" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reasons.map((reason, index) => (
            <FadeIn key={reason.title} delay={index * 0.1}>
              <article className="bg-white rounded-xl p-5 sm:p-6 border-2 border-yokohama-blue shadow-md hover:shadow-xl transition-shadow h-full">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-yokohama-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2
                      className="w-5 h-5 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1.5 sm:mb-2 text-yokohama-dark-text text-base sm:text-lg">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-gray-700">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}