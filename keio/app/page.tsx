'use client';

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
  TrendingUp,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function Home() {
  const stats = [
    { label: 'Students Guided', value: '500+', icon: Users },
    { label: 'Visa Success', value: '95%', icon: CheckCircle2 },
    { label: 'Exam Programs', value: '10+', icon: Award },
    { label: 'Years Experience', value: '5+', icon: TrendingUp },
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
      title: 'Basic Japanese Language',
      description: 'Perfect for beginners starting their Japanese learning journey',
      duration: '3 Months',
      level: 'Beginner',
      image: 'https://images.unsplash.com/photo-1631599575881-556a8c416881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      title: 'Intermediate Japanese',
      description: 'Build on your foundation and achieve conversational fluency',
      duration: '4 Months',
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1751704623306-fefadee241a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      title: 'Advanced Japanese',
      description: 'Master complex grammar and business Japanese communication',
      duration: '6 Months',
      level: 'Advanced',
      image: 'https://images.unsplash.com/photo-1617721928610-4d953b81bba8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      title: 'JLPT/NAT/JFT Preparation',
      description: 'Specialized courses for Japanese language certification exams',
      duration: '2-6 Months',
      level: 'All Levels',
      image: 'https://images.unsplash.com/photo-1631599143468-b7d2d09820b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
  ];

  const services = [
    {
      title: 'Translation Services',
      description: 'Professional document translation between Japanese and English',
      icon: Globe,
    },
    {
      title: 'Documentation Assistance',
      description: 'Complete support for visa and university applications',
      icon: FileText,
    },
    {
      title: 'Visa Guidance',
      description: 'Expert assistance with Japanese visa application process',
      icon: CheckCircle2,
    },
    {
      title: 'Interview Preparation',
      description: 'Mock interviews and coaching for job and university admissions',
      icon: MessageSquare,
    },
    {
      title: 'Career Counseling',
      description: 'Personalized guidance for career paths in Japan',
      icon: Briefcase,
    },
    {
      title: 'Pre-departure Support',
      description: 'Essential information and guidance before moving to Japan',
      icon: GraduationCap,
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
      review: 'KEIO helped me achieve N2 level in just 8 months. The instructors are amazing and the study materials are comprehensive!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
    {
      name: 'Michael Chen',
      review: 'Thanks to KEIO\'s visa guidance, I successfully got my student visa and am now studying in Tokyo. Highly recommended!',
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

      <section className="relative h-[600px] lg:h-[700px] mt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1593512949430-7521ca744857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Tokyo skyline"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-keio-red/95 via-keio-red/85 to-keio-red-dark/75" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Your Gateway to Study & Career Opportunities in Japan
            </h1>
            <p className="text-lg lg:text-xl mb-8 text-gray-200">
              Professional Japanese language training, exam preparation, documentation support, and career guidance for your future in Japan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/courses"
                className="bg-white text-keio-red px-8 py-4 rounded-lg hover:bg-gray-100 transition-all text-center font-semibold shadow-xl hover:shadow-2xl"
              >
                Explore Courses
              </Link>
              <Link
                href="/contact"
                className="bg-keio-blue text-white px-8 py-4 rounded-lg hover:bg-keio-blue-dark transition-all text-center font-semibold shadow-xl hover:shadow-2xl"
              >
                Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
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
                  <div className="w-12 h-12 bg-keio-red rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-keio-red mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-keio-dark-text font-medium">{stat.label}</div>
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-keio-dark-text">
                About KEIO Educational Consultancy
              </h2>
              <p className="text-gray-600 mb-4">
                KEIO Educational Consultancy is your trusted partner for pursuing education and career opportunities in Japan. With over 5 years of experience, we have successfully guided 500+ students in their journey to Japan.
              </p>
              <p className="text-gray-600 mb-6">
                We offer comprehensive Japanese language courses, exam preparation programs, documentation services, and career counseling to ensure your success in achieving your Japanese dreams.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-keio-red hover:underline"
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
                src="https://images.unsplash.com/photo-1631599143468-b7d2d09820b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Students learning"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-keio-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-keio-dark-text">
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
                  <div className="w-14 h-14 bg-keio-red rounded-xl flex items-center justify-center mb-4 shadow-md">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-keio-dark-text">
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-keio-dark-text">
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
                    <span className="text-xs bg-keio-red text-white px-3 py-1 rounded-full font-semibold shadow-sm">
                      {course.level}
                    </span>
                    <span className="text-xs text-gray-700 font-medium">{course.duration}</span>
                  </div>
                  <h3 className="font-bold mb-2 text-keio-dark-text">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                  <Link
                    href="/courses"
                    className="text-keio-blue text-sm hover:text-keio-blue-dark font-semibold inline-flex items-center transition-colors"
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-keio-dark-text">
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
                  <div className="w-12 h-12 bg-keio-blue rounded-lg flex items-center justify-center mb-4 shadow-md">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-keio-dark-text">
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-keio-dark-text">
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
                className="bg-white rounded-xl p-6 border-2 border-keio-blue shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-keio-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-keio-dark-text">
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

      <section className="py-20 bg-keio-blue text-white">
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
                <Award className="w-8 h-8 text-keio-blue" />
              </div>
              <h3 className="font-bold mb-2 text-white">Mock Tests</h3>
              <p className="text-sm text-white">Regular practice tests to track your progress</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-keio-blue" />
              </div>
              <h3 className="font-bold mb-2 text-white">Practice Sessions</h3>
              <p className="text-sm text-white">Interactive sessions with expert instructors</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-keio-blue" />
              </div>
              <h3 className="font-bold mb-2 text-white">Interview Coaching</h3>
              <p className="text-sm text-white">Personalized coaching for speaking tests</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-keio-dark-text">
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
                    <h3 className="font-bold text-keio-dark-text">{testimonial.name}</h3>
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

      <section className="py-20 bg-keio-light-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-keio-dark-text">
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
                <summary className="font-bold text-keio-dark-text cursor-pointer">
                  {faq.question}
                </summary>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-keio-red text-white">
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
              Take the first step towards your Japanese dreams with KEIO Educational Consultancy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-keio-red px-8 py-4 rounded-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl font-semibold"
              >
                Contact Us
              </Link>
              <Link
                href="/contact"
                className="bg-keio-blue text-white px-8 py-4 rounded-lg hover:bg-keio-blue-dark transition-all shadow-xl hover:shadow-2xl font-semibold"
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
