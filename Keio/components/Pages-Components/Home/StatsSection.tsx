// components/home/StatsSection.tsx
import type { LucideIcon } from 'lucide-react';

export function StatsSection({
  stats,
}: { stats: ReadonlyArray<{ label: string; value: string; icon: LucideIcon }> }) {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yokohama-red rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-md">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-yokohama-red mb-1">{value}</div>
              <div className="text-xs sm:text-sm text-yokohama-dark-text font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}