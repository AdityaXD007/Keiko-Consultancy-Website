'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const heroImages = [
    '/banners/Banner1.jpeg',
    '/banners/Banner2.jpeg',
    '/banners/Banner3.jpeg',
  ];

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
      name: 'Sarah Johnson',
      review: 'YOKOHAMA helped me achieve N2 level in just 8 months. The instructors are amazing and the study materials are comprehensive!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
    {
      name: 'Michael Chen',
      review: 'Thanks to YOKOHAMA\'s visa guidance, I successfully got my student visa and am now studying in Tokyo. Highly recommended!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    },
    {
      name: 'Priya Sharma',
      review: 'The career counseling service was invaluable. I landed a job in Osaka within 3 months of completing my course!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
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

      <section className="relative h-[600px] lg:h-[700px] mt-20 flex flex-col lg:block overflow-hidden bg-gray-900 group">
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
        </div>

        {/* Left Red Semi-Circle Background */}
        <div className="absolute z-10 inset-0 lg:auto lg:top-1/2 lg:-translate-y-1/2 lg:-left-[550px] lg:w-[1100px] lg:h-[1100px] lg:rounded-full bg-yokohama-red shadow-2xl pointer-events-none"></div>

        {/* Content Container */}
        <div className="relative lg:absolute z-20 w-full h-full lg:inset-y-0 lg:left-0 flex flex-col justify-center px-6 lg:pl-16 lg:pr-8 lg:w-[550px] pointer-events-none">
          <div className="w-full pointer-events-auto pt-16 lg:pt-0 text-white">
            {/* Admission Open Pill */}
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-3 py-1 mb-4 border border-white/20">
              <GraduationCap className="w-3.5 h-3.5 text-white" />
              <span className="text-xs font-semibold tracking-wide">Admission Open</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight text-white"
            >
              Your Journey to<br />Japan Starts Here
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg lg:text-xl mb-8 text-white/90"
            >
              Learn Japanese, receive expert guidance, and secure admission to top institutions in Japan.
            </motion.p>

            <div className="flex flex-wrap gap-4">
              <Link href="/courses" className="bg-white text-yokohama-red px-6 py-3 rounded text-sm lg:text-base font-bold hover:bg-gray-100 transition-colors shadow-lg">
                Explore Courses
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-6 py-3 rounded text-sm lg:text-base font-bold hover:bg-white/10 transition-colors shadow-lg">
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

        {/* Top Left 20+ Years Icon */}
        <div className="hidden lg:flex absolute top-2 left-2 lg:top-4 lg:left-4 z-40 pointer-events-none">
          <div className="relative pointer-events-auto">
            <div className="flex flex-col items-center justify-center bg-[#0B1A30] rounded-full border-[3px] border-white shadow-xl w-24 h-24">
              <Award className="w-4 h-4 text-yellow-400" />
              <div className="text-2xl font-black text-white leading-none drop-shadow-md">20+</div>
              <div className="text-[6px] font-bold text-yellow-400 text-center uppercase tracking-widest leading-tight mt-0.5">Years of<br />Experience</div>
            </div>
            {/* Yellow Star Badge */}
            <div className="absolute top-1.5 -right-0.5 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center shadow-md border-[1.5px] border-white">
              <Star className="w-2 h-2 text-[#0B1A30] fill-[#0B1A30]" />
            </div>
          </div>
        </div>

        {/* Right Side Advertisement Banner */}
        <AnimatePresence>
          {isBannerVisible && (
            <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 mt-12 z-40 max-w-[300px]">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50, transition: { duration: 0.3 } }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border-l-4 border-yokohama-red relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-yokohama-red text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg pr-8">ADMISSION OPEN</div>
                <button 
                  onClick={() => setIsBannerVisible(false)}
                  className="absolute top-1 right-1 text-white hover:text-gray-200 transition-colors z-50 p-1"
                  aria-label="Close banner"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
                <div className="flex items-center space-x-3 mb-4 mt-2">
                  <div className="w-12 h-12 bg-yokohama-blue rounded-full flex items-center justify-center shrink-0 shadow-inner">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-extrabold text-yokohama-dark-text leading-tight text-lg">April Session 2027</h3>
                </div>
                <p className="text-sm text-gray-700 font-medium leading-relaxed mb-1">
                  Secure your spot in many of Japan's top language schools and colleges.
                </p>
                <p className="text-sm font-bold text-yokohama-red">
                  Apply now for Student Visa!
                </p>
                <Link href="/contact" className="mt-5 block text-center bg-yokohama-red text-white py-2.5 rounded-lg text-sm font-bold hover:bg-red-700 transition-colors shadow-md">
                  Start Application
                </Link>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="w-12 h-12 bg-yokohama-red rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-yokohama-red mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-yokohama-dark-text font-medium">{stat.label}</div>
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
                Yokohama Language & Training Consultancy (P) Ltd. (横浜日本語学習学秋院) is a leading and promising institution providing Japanese language courses along with counselling students for student visa to study in Japan since 20 years+ in Pokhara. It is one of the oldest consultancy of Pokhara.
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

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-yokohama-dark-text">
              Student Testimonials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear what our successful students have to say
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-yokohama-dark-text">{testimonial.name}</h3>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.review}</p>
              </motion.div>
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
