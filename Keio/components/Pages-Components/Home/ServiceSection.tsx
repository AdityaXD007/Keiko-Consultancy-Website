// components/home/ServicesSection.tsx
import { SectionHeader } from './SectionHeader';
import { FadeIn } from './FadeIn';
import type { Service } from '@/lib/home/content';

interface ServicesSectionProps {
  services: readonly Service[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Services"
          subtitle="Comprehensive support services for your journey to Japan"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={index * 0.1}>
                <article className="bg-white rounded-xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 h-full">
                  <div className="w-12 h-12 bg-yokohama-blue rounded-lg flex items-center justify-center mb-3 sm:mb-4 shadow-md">
                    <Icon
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-yokohama-dark-text">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    {service.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}