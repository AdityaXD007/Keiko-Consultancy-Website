'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  GraduationCap,
  FileText,
  Users,
  Globe,
  BookOpen,
  Award,
  MessageSquare,
  Briefcase,
  Star,
  ChevronRight,
  ChevronLeft,
  TrendingUp,
  CheckCircle2,
  X,
  MapPin,
  Calendar,
  GraduationCap as GradCap2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GallerySection } from '@/components/GallerySection';
import { NewsNoticesSection } from '@/components/NewsNoticesSection';
import type { PopupAnnouncement } from '@/lib/api/types';


interface Testimonial {
  name: string;
  location: string;
  year: string;
  credential: string;
  image: string;
  reviewJa: string;
  reviewEn: string;
}

function StudentTestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const [lang, setLang] = useState<'en' | 'ja'>('en');
  const [isExpanded, setIsExpanded] = useState(false);

  const review = lang === 'ja' ? testimonial.reviewJa : testimonial.reviewEn;
  const paragraphs = review.split('\n').filter(Boolean);
  const previewParagraphs = paragraphs.slice(0, 3);
  const hasMore = paragraphs.length > 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Left: Photo + Info */}
        <div className="lg:w-72 flex-shrink-0 bg-gradient-to-br from-yokohama-blue to-yokohama-blue-dark p-6 lg:p-8 flex flex-col items-center justify-center text-center text-white">
          <div className="relative w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-4 border-white/20 shadow-xl mb-4">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
              sizes="112px"
            />
          </div>
          <h3 className="font-bold text-lg mb-1">{testimonial.name}</h3>
          <div className="flex items-center gap-1.5 text-white/70 text-xs mb-1">
            <MapPin className="w-3 h-3" />
            <span>{testimonial.location}</span>
          </div>
          <div className="flex items-center gap-1.5 text-white/70 text-xs mb-1">
            <Calendar className="w-3 h-3" />
            <span>{testimonial.year}</span>
          </div>
          <div className="flex items-center gap-1.5 text-white/60 text-xs mt-1">
            <GradCap2 className="w-3 h-3" />
            <span className="leading-tight">{testimonial.credential}</span>
          </div>
          <div className="flex mt-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>

        {/* Right: Testimonial text */}
        <div className="flex-1 p-6 lg:p-8">
          {/* Language Toggle */}
          <div className="flex items-center gap-2 mb-5">
            <button
              onClick={() => setLang('en')}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${lang === 'en'
                ? 'bg-yokohama-red text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              English
            </button>
            <button
              onClick={() => setLang('ja')}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${lang === 'ja'
                ? 'bg-yokohama-red text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              日本語
            </button>
          </div>

          {/* Quote */}
          <div className="text-yokohama-red text-4xl font-serif leading-none mb-2">&ldquo;</div>
          <div className={`space-y-3 text-gray-600 text-sm leading-relaxed ${!isExpanded && hasMore ? 'line-clamp-none' : ''}`}>
            {(isExpanded ? paragraphs : previewParagraphs).map((p, i) => (
              <p key={`${lang}-${i}`}>{p}</p>
            ))}
          </div>
          {hasMore && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 text-yokohama-red text-sm font-semibold hover:underline"
            >
              {isExpanded ? 'Show Less ↑' : 'Read Full Story →'}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [popupData, setPopupData] = useState<PopupAnnouncement | null>(null);
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const heroImages = [
    '/banners/Banner1.jpeg',
    '/banners/Banner2.jpeg',
    '/banners/Banner3.jpeg',
  ];

  useEffect(() => {
    async function loadPopup() {
      try {
        const res = await fetch('/api/popup');
        const data = await res.json();
        if (data.popup && data.popup.is_active) {
          setPopupData(data.popup);
          setIsBannerVisible(true);
        }
      } catch (err) {
        console.error('Failed to load popup:', err);
      }
    }
    loadPopup();
  }, []);


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: 'Students Guided', value: '500+', icon: Users },
    { label: 'Visa Success', value: '95%', icon: CheckCircle2 },
    { label: 'Exam Programs', value: '10+', icon: Award },
    { label: 'Years Experience', value: '20+', icon: TrendingUp },
  ];

  const objectives = [
    {
      title: 'Language Proficiency',
      description: 'Master Japanese from beginner to advanced levels',
      icon: BookOpen,
    },
    {
      title: 'Exam Preparation',
      description: 'Comprehensive preparation for JLPT, NAT, JFT and more',
      icon: Award,
    },
    {
      title: 'Interview Preparation',
      description: 'Professional coaching for Japanese job interviews',
      icon: MessageSquare,
    },
    {
      title: 'Documentation Services',
      description: 'Complete assistance with visa and application documents',
      icon: FileText,
    },
    {
      title: 'Translation Services',
      description: 'Professional Japanese-English translation services',
      icon: Globe,
    },
    {
      title: 'Career Counseling',
      description: 'Expert guidance for career opportunities in Japan',
      icon: Briefcase,
    },
  ];

  const courses = [
    {
      title: 'Basic Japanese Language Course',
      description: 'Beginner-level classes focusing on Hiragana, Katakana, vocabulary, grammar, pronunciation and basic communication strategies.',
      duration: '3 Months',
      level: 'Beginner',
      image: '/home/Home1.jpeg',
    },
    {
      title: 'Advanced Japanese Language Course',
      description: 'Advanced-level classes targeting fluency and proficiency in Japanese, with an emphasis on specialized vocabulary, Kanji and complex grammar structures.',
      duration: '6 Months',
      level: 'Advanced',
      image: '/home/Home3.jpeg',
    },
    {
      title: 'Exam Preparation Course',
      description: 'Intensive courses designed to prepare students for exams like JLPT, NAT-TEST, J-TEST, JLCT, J-Cert, Top-J, Skill Test-JFT Basic.',
      duration: '2-6 Months',
      level: 'All Levels',
      image: '/home/Home4.jpeg',
    },
    {
      title: 'Interview Skills Workshop',
      description: 'Practical workshops providing guidance on interview etiquette, communication techniques, and confidence-building strategies.',
      duration: '1-2 Weeks',
      level: 'All Levels',
      image: '/home/Home5.jpeg',
    },
  ];

  const services = [
    {
      title: 'Japanese Language Proficiency',
      description: 'High-quality Japanese language instruction tailored to your needs.',
      icon: BookOpen,
    },
    {
      title: 'Japanese Language Exam Preparation',
      description: 'Prepare for JLPT, NAT-TEST, J-TEST, JLCT, J-Cert, Top-J, and JFT Basic.',
      icon: Award,
    },
    {
      title: 'School & College Interview Preparation',
      description: 'Comprehensive guidance for admissions interviews in Japan.',
      icon: MessageSquare,
    },
    {
      title: 'Documentation Assistance',
      description: 'Customized support for visa and academic applications.',
      icon: FileText,
    },
    {
      title: 'Translation Services',
      description: 'Accurate translation between English, Nepali, and Japanese.',
      icon: Globe,
    },
    {
      title: 'Pre-departure Orientation',
      description: 'Essential guidance on airport transit, culture, and accommodation.',
      icon: GraduationCap,
    },
    {
      title: 'Career Counselling',
      description: 'Personalized advice and networking for your career path in Japan.',
      icon: Briefcase,
    },
    {
      title: 'Post-arrival Support',
      description: 'Assistance with college transfers and part-time jobs in Japan.',
      icon: Users,
    },
  ];

  const whyChooseUs = [
    {
      title: 'Experienced Instructors',
      description: 'Native speakers and certified Japanese language teachers',
    },
    {
      title: 'Personalized Guidance',
      description: 'Individual attention and customized learning plans',
    },
    {
      title: 'Practical Learning',
      description: 'Focus on real-world Japanese communication skills',
    },
    {
      title: 'Japan-focused Career Support',
      description: 'Direct connections with Japanese employers and universities',
    },
    {
      title: 'Modern Teaching Methods',
      description: 'Interactive lessons with latest educational technology',
    },
  ];

  const exams = [
    { name: 'JLPT', description: 'Japanese Language Proficiency Test' },
    { name: 'NAT', description: 'Nihongo Ability Test' },
    { name: 'JFT', description: 'Japanese Foundation Test' },
    { name: 'J-Cert', description: 'J.Test Certification' },
    { name: 'Top-J', description: 'Top-J Japanese Exam' },
  ];


  const testimonials = [
    {
      name: 'Madan Nepali (マダン・ネパール)',
      location: 'Takamatsu, Kagawa Prefecture',
      year: 'April 2014 — Japan',
      credential: 'Anabuki Gakuen / Anabuki Vocational School Graduate',
      image: '/Testimonials/Madan Nepali.jpeg',
      reviewJa: '日本留学を目指す皆様へ\n私は、ネパール・ポカラのチプレドゥンガにある Yokohama Consultancy のサポートを受け、2014年4月に日本へ留学しました。\n渡日前には約1年間、日本語をはじめ、日本のルールやマナー、文化、生活習慣について学びました。この研修のおかげで、日本での生活や学習をスムーズにスタートすることができました。\n来日後は、香川県高松市の穴吹学園に入学し、日本語や日本社会について学びました。その後、2016年に穴吹専門学校ビジネス学科へ進学し、ホテル業界に関する専門知識や接客サービスについて学ぶ機会をいただきました。\n現在はホテル業界で客室管理業務に携わっており、日本での留学経験や学校で学んだ知識を活かしながら日々仕事に取り組んでいます。\n振り返ると、Yokohama Consultancyでの事前研修は、私の日本留学、そしてその後のキャリアの基礎となりました。日本への留学を目指している方や、将来日本で活躍したいと考えている方に、心からおすすめしたい教育機関です。\n正しい指導と強い意志、そして努力があれば、夢や目標は必ず実現できると信じています。\nこれから日本留学を目指す皆様のご成功とご活躍を心よりお祈り申し上げます。',
      reviewEn: 'To everyone aiming to study in Japan,\nWith the support of Yokohama Consultancy in Chipledhunga, Pokhara, Nepal, I went to Japan to study in April 2014.\nBefore going to Japan, I spent about one year learning Japanese, as well as Japanese rules, manners, culture, and lifestyle. Thanks to this training, I was able to smoothly start my life and studies in Japan.\nAfter arriving in Japan, I enrolled at Anabuki Gakuen in Takamatsu, Kagawa Prefecture, where I studied Japanese and Japanese society. Then, in 2016, I advanced to the Business Department at Anabuki Vocational School, where I had the opportunity to learn specialized knowledge about the hotel industry and hospitality services.\nCurrently, I am involved in room management in the hotel industry, applying the experience from studying in Japan and the knowledge I gained at school in my daily work.\nLooking back, the pre-departure training at Yokohama Consultancy became the foundation of my study abroad experience in Japan and my subsequent career. I wholeheartedly recommend this institution to anyone aiming to study in Japan or wanting to build a future career in Japan.\nI believe that with proper guidance, strong determination, and effort, dreams and goals can always be achieved.\nI sincerely wish success and prosperity to everyone aiming to study in Japan.',
    },
    {
      name: 'Bimal Gurung (ビマル・グルン)',
      location: 'Fukuoka, Japan',
      year: 'April 2018 — Japan',
      credential: 'Kurume Seminar Language School / Japanese University of Economics Graduate',
      image: '/Testimonials/Bimal Gurung.jpeg',
      reviewJa: '日本への旅 🇯🇵\n私は幼い頃から、留学生として海外で学ぶことを夢見ていました。+2課程を修了した後、さらに勉強を続けるために日本へ来ることを決意しました。\n日本へ来る前、私はポカラにある信頼できる教育機関の一つ、横浜日本語学習学院に入学しました。横浜を通して、多くのサポートを受けました。福岡でも有数の日本語学校として久留米ゼミナール日本語学校を紹介していただきました。また、面接対策も丁寧にサポートしていただき、日本人の先生方の指導のおかげで無事に面接に合格することができました。\n2018年4月13日、私は留学生として日本に来ました。\n最初の日本での生活は簡単ではありませんでした。自炊もできず、勉強、仕事、日常生活、そして規則正しい生活を両立することはとても大変でした。しかし、私は諦めず、常に努力を続けました。\n日本での生活を通して、規律の大切さ、時間の価値、そして困難が人を強く成長させることを学びました。その経験が今の私を作ってくれました。\n日本語学校卒業後、日本経済大学に進学しました。2020年に大学生活をスタートしました。大学生活も決して簡単ではありませんでしたが、自分で学費を払いながら家族の支援も続け、一生懸命努力しました。\nそして2024年3月10日、大学を卒業し、その後日本企業から内定をいただきました。現在は正社員として働いています。\n以前の自分と同じような悩みや苦労を抱える留学生を見ると、支えたい、応援したいという気持ちになります。一緒に働き、共に成長できることをとても嬉しく思っています。\n横浜日本語学習学院皆様へ――私の人生の大切な旅路を支え、夢を叶える手助けをしてくださり、本当にありがとうございました。\n心より感謝申し上げます。',
      reviewEn: 'My Journey to Japan 🇯🇵\nSince I was young, I always dreamed of going abroad as an international student. After finishing my +2, I decided to come to Japan to continue my studies.\nBefore coming to Japan, I joined Yokohama Language and Training Consultancy in Pokhara, one of the most trusted institutions. Through Yokohama, I received a lot of support. They recommended Kurume Seminar Language School, which they said was one of the best language schools in Fukuoka. They also helped me prepare for my interview, and with their support and guidance from Japanese teachers, I successfully passed the interview.\nOn April 13, 2018, I came to Japan as an international student.\nLife in Japan was not easy for me at first. I didn\'t even know how to cook for myself. Managing studies, work, daily life, and following a strict schedule was very difficult. However, I kept doing my best and never gave up.\nDuring my journey in Japan, I also learned the importance of discipline, the value of time, and how struggles can help us grow stronger. Those experiences shaped me into the person I am today.\nAfter graduating from Japanese language school, I applied to the Japanese University of Economics. In 2020, I started university. University life was also challenging, but I worked hard and paid my tuition fees by myself while also supporting my family.\nFinally, on March 10, 2024, I graduated from university and later received a job offer from a Japanese company. Now, I am working as a full-time employee.\nWhen I see international students facing the same struggles I had before, I feel motivated to support and encourage them. It makes me happy to work and grow together with them.\nTo Yokohama Language and Training Consultancy — thank you for being part of my entire journey and for helping make my dream possible.\nThank you from the bottom of my heart.',
    },
  ];

  const faqs = [
    {
      question: 'How long does it take to learn Japanese?',
      answer: 'The time required varies based on your goals and dedication. Our basic course is 3 months, intermediate is 4 months, and advanced is 6 months. With consistent practice, you can achieve basic conversational fluency in 6-12 months.',
    },
    {
      question: 'Do you help with visa applications?',
      answer: 'Yes! We provide comprehensive visa guidance and documentation assistance. Our team has a 95% success rate in helping students secure Japanese student and work visas.',
    },
    {
      question: 'What is the JLPT and do I need it?',
      answer: 'The Japanese Language Proficiency Test (JLPT) is the most widely recognized Japanese language certification. It\'s often required for university admission, job applications, and visa applications in Japan.',
    },
    {
      question: 'Can I get a job in Japan after completing the course?',
      answer: 'We provide career counseling and job placement assistance. Many of our students have successfully secured positions in Japanese companies. Your success will depend on your language level, qualifications, and the job market.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative h-[300px] sm:h-[400px] lg:h-[700px] mt-20 flex flex-col lg:block overflow-hidden bg-gray-900 group">
        {/* Background Image */}
        <div className="absolute inset-y-0 right-0 left-0 lg:left-[400px] z-0 bg-gray-900">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={heroImages[currentSlide]}
              alt="Hero Image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover lg:object-center opacity-80 lg:opacity-100"
            />
          </AnimatePresence>
          {/* Mobile dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50 lg:hidden z-10 pointer-events-none"></div>
        </div>

        {/* Left Red Semi-Circle Background */}
        <div className="hidden lg:block absolute z-10 inset-0 lg:auto lg:top-1/2 lg:-translate-y-1/2 lg:-left-[550px] lg:w-[1100px] lg:h-[1100px] lg:rounded-full bg-yokohama-red shadow-2xl pointer-events-none"></div>

        {/* Content Container */}
        <div className="flex absolute z-20 inset-0 w-full h-full lg:left-0 flex-col justify-center px-6 sm:px-10 lg:pl-24 lg:pr-8 lg:w-[550px] pointer-events-none text-center lg:text-left items-center lg:items-start">
          <div className="w-full pointer-events-auto pt-0 text-white flex flex-col items-center lg:items-start">
            {/* Admission Open Pill */}
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-3 py-1 mb-4 border border-white/20">
              <GraduationCap className="w-3.5 h-3.5 text-white" />
              <span className="text-xs font-semibold tracking-wide">Admission Open</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight text-white"
            >
              Your Journey to<br />Japan Starts Here
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 text-white/90 max-w-sm lg:max-w-none"
            >
              Learn Japanese, receive expert guidance, and secure admission to top institutions in Japan.
            </motion.p>

            <div className="flex flex-wrap gap-3 lg:gap-4 justify-center lg:justify-start">
              <Link href="/courses" className="bg-white text-yokohama-red px-5 py-2.5 lg:px-6 lg:py-3 rounded text-sm lg:text-base font-bold hover:bg-gray-100 transition-colors shadow-lg">
                Explore Courses
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-5 py-2.5 lg:px-6 lg:py-3 rounded text-sm lg:text-base font-bold hover:bg-white/10 transition-colors shadow-lg">
                Free Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-colors z-30 opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-colors z-30 opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2.5 rounded-full transition-all duration-300 shadow-sm ${i === currentSlide ? 'bg-white w-8' : 'bg-white/50 w-2.5'}`}
            />
          ))}
        </div>

        {/* 20+ Years Icon on right edge of red circle */}
        <div className="hidden lg:flex absolute top-2 left-2 lg:top-35 lg:-translate-y-1/2 lg:left-[320px] z-40 pointer-events-none">
          <div className="relative pointer-events-auto">
            <div className="flex flex-col items-center justify-center bg-[#0B1A30] rounded-full border-[3px] border-white shadow-xl w-30 h-30">
              <Award className="w-6 h-6 text-yellow-400" />
              <div className="text-2xl font-black text-white leading-none drop-shadow-md">20+</div>
              <div className="text-[10px] font-bold text-yellow-400 text-center uppercase tracking-wider leading-tight mt-0.5">Years of<br />Excellence</div>
            </div>
            {/* Yellow Star Badge */}
            <div className="absolute top-1.5 -right-0.5 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center shadow-md border-[1.5px] border-white">
              <Star className="w-2 h-2 text-[#0B1A30] fill-[#0B1A30]" />
            </div>
          </div>
        </div>

        {/* Centered Advertisement Modal */}
        <AnimatePresence>
          {isBannerVisible && popupData && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden max-w-[400px] w-full"
              >
                {popupData.badge_text && (
                  <div className="absolute top-0 left-0 bg-yokohama-red text-white text-xs font-bold px-4 py-1.5 rounded-br-lg">
                    {popupData.badge_text}
                  </div>
                )}
                <button
                  onClick={() => setIsBannerVisible(false)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 transition-colors z-50 p-1 bg-gray-100 hover:bg-gray-200 rounded-full"
                  aria-label="Close banner"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex flex-col items-center text-center mt-6 mb-6">
                  {popupData.image ? (
                    <div className="relative w-full h-44 mb-4 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                      <img
                        src={popupData.image.startsWith('http') ? popupData.image : `http://127.0.0.1:8000${popupData.image}`}
                        alt={popupData.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-yokohama-blue rounded-full flex items-center justify-center mb-4 shadow-inner">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                  )}
                  <h3 className="font-extrabold text-yokohama-dark-text leading-tight text-2xl mb-2">
                    {popupData.title}
                  </h3>

                  {popupData.description && (
                    <p className="text-base text-gray-700 font-medium leading-relaxed mb-2">
                      {popupData.description}
                    </p>
                  )}
                  {popupData.highlight_text && (
                    <p className="text-base font-bold text-yokohama-red">
                      {popupData.highlight_text}
                    </p>
                  )}
                </div>
                <Link
                  href={popupData.button_link || '/contact'}
                  onClick={() => setIsBannerVisible(false)}
                  className="block text-center bg-yokohama-red text-white py-3.5 rounded-xl text-base font-bold hover:bg-red-700 transition-colors shadow-lg w-full"
                >
                  {popupData.button_text || 'Start Application'}
                </Link>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>


      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yokohama-red rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-md">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-yokohama-red mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-yokohama-dark-text font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-yokohama-dark-text">
                About YOKOHAMA LANGUAGE & TRAINING CONSULTANCY (P) LTD.
              </h2>
              <p className="text-gray-600 mb-4">
                Yokohama Language & Training Consultancy (P) Ltd. (横浜日本語学習学院) is a leading and promising institution providing Japanese language courses along with counselling students for student visa to study in Japan since 20 years+ in Pokhara. It is one of the oldest consultancy of Pokhara.
              </p>
              <p className="text-gray-600 mb-6">
                Initially found in 2005 A.D. and registered locally in Pokhara, and later in 2009 A.D. registered as a Private Limited. We are a renowned institution registered under the Act of the Nepal Government, certified by Ministry of Education, Nepal Government having TITI Certified Counselor, specializing in Japanese language education.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-yokohama-red hover:underline"
              >
                Learn More About Us <ChevronRight size={20} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <img
                src="/brand/Icon.jpeg"
                alt="YOKOHAMA LANGUAGE & TRAINING CONSULTANCY (P) LTD. Icon"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-yokohama-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-yokohama-dark-text">
              Our Objectives
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              Comprehensive services to support your Japanese language learning and career goals
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="w-14 h-14 bg-yokohama-red rounded-xl flex items-center justify-center mb-4 shadow-md">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-yokohama-dark-text">
                    {objective.title}
                  </h3>
                  <p className="text-gray-700">{objective.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-yokohama-dark-text">
              Featured Courses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our range of Japanese language courses designed for all proficiency levels
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs bg-yokohama-red text-white px-3 py-1 rounded-full font-semibold shadow-sm">
                      {course.level}
                    </span>
                    <span className="text-xs text-gray-700 font-medium">{course.duration}</span>
                  </div>
                  <h3 className="font-bold mb-2 text-yokohama-dark-text">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                  <Link
                    href="/courses"
                    className="text-yokohama-blue text-sm hover:text-yokohama-blue-dark font-semibold inline-flex items-center transition-colors"
                  >
                    Learn More <ChevronRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-yokohama-dark-text">
              Our Services
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              Comprehensive support services for your journey to Japan
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="w-12 h-12 bg-yokohama-blue rounded-lg flex items-center justify-center mb-4 shadow-md">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-yokohama-dark-text">
                    {service.title}
                  </h3>
                  <p className="text-gray-700">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-yokohama-dark-text">
              Why Choose Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border-2 border-yokohama-blue shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-yokohama-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-yokohama-dark-text">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-gray-700">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-yokohama-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Japanese Exam Preparation
            </h2>
            <p className="text-white max-w-2xl mx-auto text-lg">
              Comprehensive preparation programs for all major Japanese language certification exams
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {exams.map((exam, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
              >
                <div className="text-2xl font-bold mb-2 text-white">{exam.name}</div>
                <div className="text-sm text-white">{exam.description}</div>
              </motion.div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yokohama-blue" />
              </div>
              <h3 className="font-bold mb-2 text-white">Mock Tests</h3>
              <p className="text-sm text-white">Regular practice tests to track your progress</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-yokohama-blue" />
              </div>
              <h3 className="font-bold mb-2 text-white">Practice Sessions</h3>
              <p className="text-sm text-white">Interactive sessions with expert instructors</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-yokohama-blue" />
              </div>
              <h3 className="font-bold mb-2 text-white">Interview Coaching</h3>
              <p className="text-sm text-white">Personalized coaching for speaking tests</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-yokohama-light-bg rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-yokohama-dark-text border-b-2 border-yokohama-red pb-2 inline-block">Apply Intakes</h3>
              <div className="flex flex-wrap gap-3">
                {['April', 'July', 'October', 'January'].map((intake, i) => (
                  <span key={i} className="bg-white text-yokohama-blue px-4 py-2 rounded-lg font-semibold shadow-sm border border-gray-100">{intake}</span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }} className="bg-yokohama-light-bg rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-yokohama-dark-text border-b-2 border-yokohama-red pb-2 inline-block">Apply Cities</h3>
              <div className="flex flex-wrap gap-2">
                {['Tokyo', 'Yokohama', 'Funabashi', 'Narita', 'Fukuoka', 'Nagoya', 'Hiroshima', 'Osaka', 'Kobe', 'Kyoto', 'Okinawa', 'Sendai'].map((city, i) => (
                  <span key={i} className="bg-white text-gray-700 px-3 py-1.5 rounded-md text-sm shadow-sm border border-gray-100">{city}</span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="bg-yokohama-blue rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6 border-b-2 border-white/20 pb-2 inline-block">Our Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2"><CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" /><span className="text-sm">Minimum 10+2 pass or equivalent</span></li>
                <li className="flex items-start space-x-2"><CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" /><span className="text-sm">Basic Japanese (N5 level or equivalent)</span></li>
                <li className="flex items-start space-x-2"><CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" /><span className="text-sm">Financial capability proof</span></li>
                <li className="flex items-start space-x-2"><CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" /><span className="text-sm">Clean academic and personal records</span></li>
                <li className="flex items-start space-x-2"><CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" /><span className="text-sm">Gap below 5 years & GPA 2 or above</span></li>
                <li className="flex items-start space-x-2"><CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" /><span className="text-sm">Age below 30</span></li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <GallerySection />

      <NewsNoticesSection />

      <section className="py-20 bg-yokohama-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yokohama-red/10 text-yokohama-red px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <MessageSquare className="w-4 h-4" />
              Student Voices
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-yokohama-dark-text">
              See Feedbacks From Our Successful Students
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories from our alumni who achieved their dreams in Japan
            </p>
          </div>
          <div className="space-y-10">
            {testimonials.map((testimonial, index) => (
              <StudentTestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-yokohama-light-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-yokohama-dark-text">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <summary className="font-bold text-yokohama-dark-text cursor-pointer">
                  {faq.question}
                </summary>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-yokohama-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Start Your Journey to Japan Today
            </h2>
            <p className="text-xl mb-8 text-white max-w-2xl mx-auto">
              Take the first step towards your Japanese dreams with YOKOHAMA LANGUAGE & TRAINING CONSULTANCY (P) LTD.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-yokohama-red px-8 py-4 rounded-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl font-semibold"
              >
                Contact Us
              </Link>
              <Link
                href="/contact"
                className="bg-yokohama-blue text-white px-8 py-4 rounded-lg hover:bg-yokohama-blue-dark transition-all shadow-xl hover:shadow-2xl font-semibold"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
