import { SectionHeader } from './SectionHeader';
import { Testimonial } from '../../../lib/home/Testimonial';
import { TestimonialCard } from './TestimonialCard';
import { MessageSquare } from 'lucide-react';


export function TestimonialList({ testimonials }: { testimonials: readonly Testimonial[] }) {
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-yokohama-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="See Feedbacks From Our Successful Students"
          subtitle="Real stories from our alumni who achieved their dreams in Japan"
          eyebrow={
            <div className="inline-flex items-center gap-2 bg-yokohama-red/10 text-yokohama-red px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold">
              <MessageSquare className="w-4 h-4" />
              Student Voices
            </div>
          }
        />
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}