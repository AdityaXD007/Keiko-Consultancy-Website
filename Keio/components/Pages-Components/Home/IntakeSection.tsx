// components/home/IntakesSection.tsx
import { CheckCircle2 } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface IntakesSectionProps {
  intakes: readonly string[];
  cities: readonly string[];
  requirements: readonly string[];
}

export function IntakesSection({
  intakes,
  cities,
  requirements,
}: IntakesSectionProps) {
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Intakes */}
          <FadeIn>
            <div className="bg-yokohama-light-bg rounded-2xl p-5 sm:p-6 lg:p-8 border border-gray-100 shadow-sm h-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-yokohama-dark-text border-b-2 border-yokohama-red pb-2 inline-block">
                Apply Intakes
              </h3>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {intakes.map((intake) => (
                  <span
                    key={intake}
                    className="bg-white text-yokohama-blue px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold text-sm sm:text-base shadow-sm border border-gray-100"
                  >
                    {intake}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Cities */}
          <FadeIn delay={0.1}>
            <div className="bg-yokohama-light-bg rounded-2xl p-5 sm:p-6 lg:p-8 border border-gray-100 shadow-sm h-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-yokohama-dark-text border-b-2 border-yokohama-red pb-2 inline-block">
                Apply Cities
              </h3>
              <div className="flex flex-wrap gap-2">
                {cities.map((city) => (
                  <span
                    key={city}
                    className="bg-white text-gray-700 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md text-xs sm:text-sm shadow-sm border border-gray-100"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Requirements */}
          <FadeIn delay={0.2}>
            <div className="bg-yokohama-blue rounded-2xl p-5 sm:p-6 lg:p-8 text-white shadow-xl h-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 border-b-2 border-white/20 pb-2 inline-block">
                Our Requirements
              </h3>
              <ul className="space-y-2.5 sm:space-y-3">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start space-x-2">
                    <CheckCircle2
                      className="w-5 h-5 text-white shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-xs sm:text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}