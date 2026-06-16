'use client';

import Link from 'next/link';
import { Clock, BookOpen, Award, Check, ArrowRight, Users, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function Courses() {
  const courses = [
    {
      title: 'Basic Japanese Language Course',
      level: 'Beginner',
      duration: '3 Months',
      price: '$299',
      image: 'https://images.unsplash.com/photo-1631599575881-556a8c416881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      description: 'Perfect for absolute beginners with no prior knowledge of Japanese. Learn hiragana, katakana, basic grammar, and everyday conversation.',
      outcomes: [
        'Master hiragana and katakana writing systems',
        'Build vocabulary of 500+ common words',
        'Understand basic grammar structures',
        'Hold simple conversations about daily life',
        'Introduce yourself and describe your background',
      ],
      curriculum: [
        'Japanese writing systems (Hiragana & Katakana)',
        'Basic grammar and sentence structure',
        'Numbers, time, and dates',
        'Greetings and self-introduction',
        'Shopping and dining vocabulary',
        'Basic kanji (50 characters)',
      ],
    },
    {
      title: 'Intermediate Japanese Course',
      level: 'Intermediate',
      duration: '4 Months',
      price: '$399',
      image: 'https://images.unsplash.com/photo-1751704623306-fefadee241a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      description: 'Build on your foundation and develop conversational fluency. Equivalent to JLPT N4-N3 level preparation.',
      outcomes: [
        'Communicate confidently in everyday situations',
        'Read and write 300+ kanji characters',
        'Understand complex grammar patterns',
        'Discuss opinions and express preferences',
        'Comprehend simple newspaper articles',
      ],
      curriculum: [
        'Intermediate grammar structures',
        'Kanji study (300 characters)',
        'Keigo (polite language) basics',
        'Reading comprehension practice',
        'Listening and speaking drills',
        'Cultural context and expressions',
      ],
    },
    {
      title: 'Advanced Japanese Course',
      level: 'Advanced',
      duration: '6 Months',
      price: '$599',
      image: 'https://images.unsplash.com/photo-1617721928610-4d953b81bba8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      description: 'Master complex grammar, business Japanese, and achieve near-native proficiency. Prepare for JLPT N2-N1 levels.',
      outcomes: [
        'Achieve business-level Japanese proficiency',
        'Master 1000+ kanji characters',
        'Use advanced keigo in professional settings',
        'Read novels and technical documents',
        'Participate in formal meetings and presentations',
      ],
      curriculum: [
        'Advanced grammar and syntax',
        'Business Japanese (keigo mastery)',
        'Kanji study (1000+ characters)',
        'Academic and professional writing',
        'News and media comprehension',
        'Specialized vocabulary by field',
      ],
    },
    {
      title: 'JLPT/NAT/JFT Exam Preparation',
      level: 'All Levels',
      duration: '2-6 Months',
      price: '$349',
      image: 'https://images.unsplash.com/photo-1631599143468-b7d2d09820b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      description: 'Intensive preparation for Japanese language certification exams. Choose from JLPT N5 to N1, NAT, or JFT levels.',
      outcomes: [
        'Master exam format and strategies',
        'Improve test-taking skills',
        'Practice with authentic exam questions',
        'Achieve target certification level',
        'Build confidence for exam day',
      ],
      curriculum: [
        'Exam-specific vocabulary and grammar',
        'Listening comprehension training',
        'Reading speed and accuracy',
        'Mock tests and timed practice',
        'Kanji memorization techniques',
        'Test-taking strategies',
      ],
    },
  ];

  const enrollmentSteps = [
    {
      step: 1,
      title: 'Free Consultation',
      description: 'Discuss your goals and get a level assessment',
    },
    {
      step: 2,
      title: 'Choose Your Course',
      description: 'Select the program that fits your needs',
    },
    {
      step: 3,
      title: 'Register & Pay',
      description: 'Complete enrollment and secure your spot',
    },
    {
      step: 4,
      title: 'Start Learning',
      description: 'Begin your Japanese language journey',
    },
  ];

  const features = [
    {
      icon: Users,
      title: 'Small Class Sizes',
      description: 'Maximum 12 students per class for personalized attention',
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Materials',
      description: 'Textbooks, workbooks, and digital resources included',
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Weekday, weekend, and evening classes available',
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Receive course completion certificate',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative h-[400px] mt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1711335792531-6835a885681e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Cherry blossoms"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-yokohama-red/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Courses</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Comprehensive Japanese language courses for every proficiency level
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="w-12 h-12 bg-yokohama-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold mb-2 text-yokohama-dark-text">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="space-y-20">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="h-[400px] lg:h-auto">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-yokohama-red text-white px-4 py-1 rounded-full text-sm font-semibold shadow-sm">
                        {course.level}
                      </span>
                      <div className="text-3xl font-bold text-yokohama-red">{course.price}</div>
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-yokohama-dark-text">
                      {course.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{course.description}</p>
                    <div className="flex items-center space-x-6 mb-6 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-yokohama-red" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-5 h-5 text-yokohama-red" />
                        <span>Max 12 students</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-bold mb-3 text-yokohama-dark-text">Learning Outcomes</h3>
                      <ul className="space-y-2">
                        {course.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start space-x-2 text-sm text-gray-600">
                            <div className="w-5 h-5 bg-yokohama-red rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5 text-white" />
                            </div>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-bold mb-3 text-yokohama-dark-text">Curriculum Highlights</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {course.curriculum.map((item, i) => (
                          <div key={i} className="flex items-start space-x-2 text-sm text-gray-600">
                            <div className="w-4 h-4 bg-yokohama-red rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                              <BookOpen className="w-3 h-3 text-white" />
                            </div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center bg-yokohama-blue text-white px-6 py-3 rounded-lg hover:bg-yokohama-blue-dark transition-all shadow-lg hover:shadow-xl font-semibold"
                    >
                      Enroll Now <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-yokohama-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-yokohama-dark-text">
              Enrollment Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple steps to start your Japanese learning journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enrollmentSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-16 h-16 bg-yokohama-red text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4 shadow-md">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2 text-yokohama-dark-text">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yokohama-blue rounded-2xl p-12 text-center text-white shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Award className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Not Sure Which Course is Right for You?
              </h2>
              <p className="text-xl mb-8 text-white max-w-2xl mx-auto">
                Schedule a free consultation with our expert counselors to find the perfect course for your goals
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-yokohama-blue px-8 py-4 rounded-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl font-semibold"
              >
                Book Free Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
