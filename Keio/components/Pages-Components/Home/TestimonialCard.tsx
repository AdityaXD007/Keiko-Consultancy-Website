'use client';
import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Calendar, GraduationCap } from 'lucide-react';
import { Testimonial } from '../../../lib/home/Testimonial';


export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [lang, setLang] = useState<'en' | 'ja'>('en');
  const [isExpanded, setIsExpanded] = useState(false);

  const review = lang === 'ja' ? testimonial.reviewJa : testimonial.reviewEn;
  const paragraphs = review.split('\n').filter(Boolean);
  const preview = paragraphs.slice(0, 3);
  const hasMore = paragraphs.length > 3;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-72 flex-shrink-0 bg-gradient-to-br from-yokohama-blue to-yokohama-blue-dark p-6 lg:p-8 flex flex-col items-center justify-center text-center text-white">
          <div className="relative w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-4 border-white/20 shadow-xl mb-4">
            <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" sizes="112px" />
          </div>
          <h3 className="font-bold text-lg mb-1">{testimonial.name}</h3>
          <div className="flex items-center gap-1.5 text-white/70 text-xs mb-1">
            <MapPin className="w-3 h-3" /><span>{testimonial.location}</span>
          </div>
          <div className="flex items-center gap-1.5 text-white/70 text-xs mb-1">
            <Calendar className="w-3 h-3" /><span>{testimonial.year}</span>
          </div>
          <div className="flex items-center gap-1.5 text-white/60 text-xs mt-1">
            <GraduationCap className="w-3 h-3" />
            <span className="leading-tight">{testimonial.credential}</span>
          </div>
        </div>

        <div className="flex-1 p-6 lg:p-8">
          <div className="flex items-center gap-2 mb-5">
            {(['en','ja'] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  lang === l ? 'bg-yokohama-red text-white shadow-sm'
                             : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {l === 'en' ? 'English' : '日本語'}
              </button>
            ))}
          </div>

          <div className="text-yokohama-red text-4xl font-serif leading-none mb-2">&ldquo;</div>
          <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
            {(isExpanded ? paragraphs : preview).map((p, i) => (
              <p key={`${lang}-${i}`}>{p}</p>
            ))}
          </div>
          {hasMore && (
            <button
              type="button"
              onClick={() => setIsExpanded((v) => !v)}
              className="mt-3 text-yokohama-red text-sm font-semibold hover:underline"
            >
              {isExpanded ? 'Show Less ↑' : 'Read Full Story →'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}