// components/home/FaqSection.tsx
import { SectionHeader } from './SectionHeader';
import type { Faq } from '@/lib/home/content';

export function FaqSection({ faqs }: { faqs: readonly Faq[] }) {
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-yokohama-light-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Frequently Asked Questions" />
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="bg-white rounded-xl p-5 sm:p-6 shadow-sm">
              <summary className="font-bold text-yokohama-dark-text cursor-pointer text-sm sm:text-base">
                {faq.question}
              </summary>
              <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}