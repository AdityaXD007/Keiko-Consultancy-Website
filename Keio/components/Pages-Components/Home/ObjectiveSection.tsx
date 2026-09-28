// components/home/ObjectivesSection.tsx
import { FadeIn } from './FadeIn';
import { SectionHeader } from './SectionHeader';

import type { Objective } from '@/lib/home/content';

export function ObjectivesSection({ objectives }: { objectives: readonly Objective[] }) {
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-yokohama-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Objectives"
          subtitle="Comprehensive services to support your Japanese language learning and career goals"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {objectives.map(({ title, description, icon: Icon }, i) => (
            <FadeIn key={title} delay={i * 0.1}>
              <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yokohama-red rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-md">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-yokohama-dark-text">{title}</h3>
                <p className="text-sm sm:text-base text-gray-700">{description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}