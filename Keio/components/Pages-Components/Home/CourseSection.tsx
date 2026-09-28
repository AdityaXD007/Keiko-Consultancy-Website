// components/home/CoursesSection.tsx
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { FadeIn } from './FadeIn';
import type { Course } from '@/lib/home/content';

interface CoursesSectionProps {
  courses: readonly Course[];
}

export function CoursesSection({ courses }: CoursesSectionProps) {
  return (
    <section className="py-10 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Featured Courses"
          subtitle="Choose from our range of Japanese language courses designed for all proficiency levels"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {courses.map((course, index) => (
            <FadeIn key={course.title} delay={index * 0.1}>
              <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 h-full flex flex-col">
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-3 gap-2">
                    <span className="text-xs bg-yokohama-red text-white px-3 py-1 rounded-full font-semibold shadow-sm whitespace-nowrap">
                      {course.level}
                    </span>
                    <span className="text-xs text-gray-700 font-medium whitespace-nowrap">
                      {course.duration}
                    </span>
                  </div>
                  <h3 className="font-bold mb-2 text-yokohama-dark-text text-base sm:text-lg">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 flex-1">
                    {course.description}
                  </p>
                  <Link
                    href="/courses"
                    className="text-yokohama-blue text-sm hover:text-yokohama-blue-dark font-semibold inline-flex items-center transition-colors self-start"
                  >
                    Learn More
                    <ChevronRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}