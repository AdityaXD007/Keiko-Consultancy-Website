// components/home/ExamPrepSection.tsx
import { Award, BookOpen, MessageSquare } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { FadeIn } from './FadeIn';
import type { Exam } from '@/lib/home/content';

const PREP_FEATURES: ReadonlyArray<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: 'Mock Tests',
    description: 'Regular practice tests to track your progress',
    icon: Award,
  },
  {
    title: 'Practice Sessions',
    description: 'Interactive sessions with expert instructors',
    icon: BookOpen,
  },
  {
    title: 'Interview Coaching',
    description: 'Personalized coaching for speaking tests',
    icon: MessageSquare,
  },
];

interface ExamPrepSectionProps {
  exams: readonly Exam[];
}

export function ExamPrepSection({ exams }: ExamPrepSectionProps) {
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-yokohama-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
            Japanese Exam Preparation
          </h2>
          <p className="text-white max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Comprehensive preparation programs for all major Japanese language
            certification exams
          </p>
        </div>

        {/* Exam tiles */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-6 sm:mb-12">
          {exams.map((exam, index) => (
            <FadeIn key={exam.name} delay={index * 0.1}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center border border-white/20 h-full">
                <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-white">
                  {exam.name}
                </div>
                <div className="text-xs sm:text-sm text-white">
                  {exam.description}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Prep feature cards */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {PREP_FEATURES.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 text-center border border-white/20"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Icon
                  className="w-6 h-6 sm:w-8 sm:h-8 text-yokohama-blue"
                  aria-hidden="true"
                />
              </div>
              <h3 className="font-bold mb-1.5 sm:mb-2 text-white text-base sm:text-lg">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-white">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}