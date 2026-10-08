// lib/home/content.ts
import {
  GraduationCap, BookOpen, Award, MessageSquare, FileText, Globe, Briefcase,
  Users, CheckCircle2, TrendingUp,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Objective   { title: string; description: string; icon: LucideIcon }
export interface Course      { title: string; description: string; duration: string; level: string; image: string }
export interface Service     { title: string; description: string; icon: LucideIcon }
export interface Reason      { title: string; description: string }
export interface Exam        { name: string; description: string }
export interface Faq         { question: string; answer: string }

export const HERO_IMAGES = [
  '/banners/Banner1.webp',
  '/banners/Banner2.webp',
  '/banners/Banner3.webp',
] as const;

export const STATS: ReadonlyArray<{ label: string; value: string; icon: LucideIcon }> = [
  { label: 'Students Guided', value: '500+', icon: Users },
  { label: 'Visa Success',    value: '95%',  icon: CheckCircle2 },
  { label: 'Exam Programs',   value: '10+',  icon: Award },
  { label: 'Years Experience',value: '20+',  icon: TrendingUp },
];

export const OBJECTIVES: readonly Objective[] = [
  { title: 'Language Proficiency',    description: 'Master Japanese from beginner to advanced levels',            icon: BookOpen },
  { title: 'Exam Preparation',        description: 'Comprehensive preparation for JLPT, NAT, JFT and more',      icon: Award },
  { title: 'Interview Preparation',   description: 'Professional coaching for Japanese job interviews',           icon: MessageSquare },
  { title: 'Documentation Services',  description: 'Complete assistance with visa and application documents',     icon: FileText },
  { title: 'Translation Services',    description: 'Professional Japanese-English translation services',          icon: Globe },
  { title: 'Career Counseling',       description: 'Expert guidance for career opportunities in Japan',           icon: Briefcase },
];

export const COURSES: readonly Course[] = [
  { title: 'Basic Japanese Language Course', description: 'Beginner-level classes focusing on Hiragana, Katakana, vocabulary, grammar, pronunciation and basic communication strategies.', duration: '3 Months', level: 'Beginner', image: '/home/Home1.webp' },
  { title: 'Advanced Japanese Language Course', description: 'Advanced-level classes targeting fluency and proficiency in Japanese, with an emphasis on specialized vocabulary, Kanji and complex grammar structures.', duration: '6 Months', level: 'Advanced', image: '/home/Home3.webp' },
  { title: 'Exam Preparation Course', description: 'Intensive courses designed to prepare students for exams like JLPT, NAT-TEST, J-TEST, JLCT, J-Cert, Top-J, Skill Test-JFT Basic.', duration: '2-6 Months', level: 'All Levels', image: '/home/Home4.webp' },
  { title: 'Interview Skills Workshop', description: 'Practical workshops providing guidance on interview etiquette, communication techniques, and confidence-building strategies.', duration: '1-2 Weeks', level: 'All Levels', image: '/home/Home5.webp' },
];

export const SERVICES: readonly Service[] = [
  { title: 'Japanese Language Proficiency', description: 'High-quality Japanese language instruction tailored to your needs.', icon: BookOpen },
  { title: 'Japanese Language Exam Preparation', description: 'Prepare for JLPT, NAT-TEST, J-TEST, JLCT, J-Cert, Top-J, and JFT Basic.', icon: Award },
  { title: 'School & College Interview Preparation', description: 'Comprehensive guidance for admissions interviews in Japan.', icon: MessageSquare },
  { title: 'Documentation Assistance', description: 'Customized support for visa and academic applications.', icon: FileText },
  { title: 'Translation Services', description: 'Accurate translation between English, Nepali, and Japanese.', icon: Globe },
  { title: 'Pre-departure Orientation', description: 'Essential guidance on airport transit, culture, and accommodation.', icon: GraduationCap },
  { title: 'Career Counselling', description: 'Personalized advice and networking for your career path in Japan.', icon: Briefcase },
  { title: 'Post-arrival Support', description: 'Assistance with college transfers and part-time jobs in Japan.', icon: Users },
];

export const WHY_CHOOSE_US: readonly Reason[] = [
  { title: 'Experienced Instructors',        description: 'Native speakers and certified Japanese language teachers' },
  { title: 'Personalized Guidance',          description: 'Individual attention and customized learning plans' },
  { title: 'Practical Learning',             description: 'Focus on real-world Japanese communication skills' },
  { title: 'Japan-focused Career Support',   description: 'Direct connections with Japanese employers and universities' },
  { title: 'Modern Teaching Methods',        description: 'Interactive lessons with latest educational technology' },
];

export const EXAMS: readonly Exam[] = [
  { name: 'JLPT',  description: 'Japanese Language Proficiency Test' },
  { name: 'NAT',   description: 'Nihongo Ability Test' },
  { name: 'JFT',   description: 'Japanese Foundation Test' },
  { name: 'J-Cert',description: 'J.Test Certification' },
  { name: 'Top-J', description: 'Top-J Japanese Exam' },
];

export const INTAKES = ['April', 'July', 'October', 'January'] as const;
export const CITIES = [
  'Tokyo', 'Yokohama', 'Funabashi', 'Narita', 'Fukuoka', 'Nagoya',
  'Hiroshima', 'Osaka', 'Kobe', 'Kyoto', 'Okinawa', 'Sendai',
] as const;
export const REQUIREMENTS = [
  'Minimum 10+2 pass or equivalent',
  'Basic Japanese (N5 level or equivalent)',
  'Financial capability proof',
  'Clean academic and personal records',
  'Gap below 5 years & GPA 2 or above',
  'Age below 30',
] as const;

export const FAQS: readonly Faq[] = [
  { question: 'How long does it take to learn Japanese?', answer: 'The time required varies based on your goals and dedication. Our basic course is 3 months, intermediate is 4 months, and advanced is 6 months. With consistent practice, you can achieve basic conversational fluency in 6-12 months.' },
  { question: 'Do you help with visa applications?', answer: 'Yes! We provide comprehensive visa guidance and documentation assistance. Our team has a 95% success rate in helping students secure Japanese student and work visas.' },
  { question: 'What is the JLPT and do I need it?', answer: "The Japanese Language Proficiency Test (JLPT) is the most widely recognized Japanese language certification. It's often required for university admission, job applications, and visa applications in Japan." },
  { question: 'Can I get a job in Japan after completing the course?', answer: 'We provide career counseling and job placement assistance. Many of our students have successfully secured positions in Japanese companies. Your success will depend on your language level, qualifications, and the job market.' },
];