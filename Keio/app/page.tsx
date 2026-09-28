// app/page.tsx
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
  OBJECTIVES, COURSES, SERVICES, WHY_CHOOSE_US, EXAMS, STATS,
  INTAKES, CITIES, REQUIREMENTS, FAQS, HERO_IMAGES,
} from '@/lib/home/content';


// ✅ Use the shared API layer
import { fetchPosts } from '@/lib/api/posts';
import { fetchPopupAnnouncement } from '@/lib/api/popup';
import { HeroSlider } from '@/components/Pages-Components/Home/HeroSlider';
import { PopupModal } from '@/components/Pages-Components/Home/PopopModal';
import { StatsSection } from '@/components/Pages-Components/Home/StatsSection';
import { AboutSection } from '@/components/Pages-Components/Home/AboutSection';
import { ObjectivesSection } from '@/components/Pages-Components/Home/ObjectiveSection';
import { CoursesSection } from '@/components/Pages-Components/Home/CourseSection';
import { ServicesSection } from '@/components/Pages-Components/Home/ServiceSection';
import { WhyChooseUsSection } from '@/components/Pages-Components/Home/WhyChooseUsSection';
import { ExamPrepSection } from '@/components/Pages-Components/Home/ExamPrepSection';
import { IntakesSection } from '@/components/Pages-Components/Home/IntakeSection';
import { GallerySection } from '@/components/GallerySection';
import { NewsNoticesSection } from '@/components/Pages-Components/Home/NewsNoticeSection';
import { TestimonialList } from '@/components/Pages-Components/Home/TestimonialList';
import { FaqSection } from '@/components/Pages-Components/Home/FAQSection';
import { FinalCtaSection } from '@/components/Pages-Components/Home/FinalCtaSection';
import { TESTIMONIALS } from '@/lib/home/Testimonial';

// … all your Home component imports …

export const revalidate = 300;

export default async function HomePage() {
  // ✅ Both fetches go through lib/api/* which:
  //    - Uses API_BASE_URL (server-side env var, never leaks)
  //    - Applies consistent ISR caching
  //    - Returns null/[] gracefully on failure
  const [popup, paginated] = await Promise.all([
    fetchPopupAnnouncement(),
    fetchPosts({ page: 1 }).catch(() => null),
  ]);

  const posts = paginated?.results.slice(0, 6) ?? [];

  return (
    <div className="min-h-screen bg-white w-full max-w-full overflow-x-hidden">
      <Navbar />
      <HeroSlider images={[...HERO_IMAGES]} />
      {popup && <PopupModal popup={popup} />}
      <StatsSection stats={STATS} />
      <AboutSection />
      <ObjectivesSection objectives={OBJECTIVES} />
      <CoursesSection courses={COURSES} />
      <ServicesSection services={SERVICES} />
      <WhyChooseUsSection reasons={WHY_CHOOSE_US} />
      <ExamPrepSection exams={EXAMS} />
      <IntakesSection
        intakes={[...INTAKES]}
        cities={[...CITIES]}
        requirements={[...REQUIREMENTS]}
      />
      <GallerySection />
      <NewsNoticesSection initialPosts={posts} />
      <TestimonialList testimonials={TESTIMONIALS} />
      <FaqSection faqs={FAQS} />
      <FinalCtaSection />
      <Footer />
    </div>
  );
}