'use client';

import Link from 'next/link';
import { Award, BookOpen, Target, TrendingUp, CheckCircle2, Clock, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function ExamPreparation() {
  const exams = [
    {
      name: 'JLPT',
      fullName: 'Japanese Language Proficiency Test',
      levels: ['N5', 'N4', 'N3', 'N2', 'N1'],
      description: 'The most widely recognized Japanese language certification worldwide',
      features: [
        'Accepted by universities and employers globally',
        'Tests vocabulary, grammar, reading, and listening',
        'Held twice a year (July and December)',
        'Essential for study and work in Japan',
      ],
      preparation: '2-6 months depending on level',
      successRate: '92%',
    },
    {
      name: 'NAT-TEST',
      fullName: 'Nihongo Ability Test',
      levels: ['5級', '4級', '3級', '2級', '1級'],
      description: 'Alternative to JLPT with similar format and difficulty',
      features: [
        'Held 6 times per year (every 2 months)',
        'Results available within 3 weeks',
        'Recognized by Japanese immigration',
        'More frequent testing opportunities',
      ],
      preparation: '2-6 months depending on level',
      successRate: '90%',
    },
    {
      name: 'JFT-Basic',
      fullName: 'Japanese Foundation Test',
      levels: ['A1', 'A2'],
      description: 'Required for Specified Skilled Worker visa applicants',
      features: [
        'Computer-based test',
        'Tests basic communication skills',
        'Mandatory for SSW visa',
        'Focus on practical workplace Japanese',
      ],
      preparation: '2-4 months',
      successRate: '88%',
    },
    {
      name: 'J.TEST',
      fullName: 'Practical Japanese Test',
      levels: ['A-C', 'D-E', 'F-G'],
      description: 'Practical Japanese proficiency test for business',
      features: [
        'Held 6 times per year',
        'Focuses on real-world Japanese',
        'Popular with corporations',
        'Quick result turnaround',
      ],
      preparation: '2-4 months',
      successRate: '89%',
    },
    {
      name: 'Top-J',
      fullName: 'Top-J Japanese Test',
      levels: ['初級', '中級', '上級'],
      description: 'Comprehensive Japanese language assessment',
      features: [
        'Tests all four skills comprehensively',
        'Recognized by many educational institutions',
        'Flexible testing schedule',
        'Detailed feedback provided',
      ],
      preparation: '2-5 months',
      successRate: '87%',
    },
  ];

  const preparationRoadmap = [
    {
      phase: 'Assessment',
      duration: 'Week 1',
      activities: [
        'Initial level assessment',
        'Goal setting and exam selection',
        'Study plan creation',
      ],
    },
    {
      phase: 'Foundation',
      duration: 'Weeks 2-6',
      activities: [
        'Core grammar review',
        'Vocabulary building',
        'Kanji memorization',
      ],
    },
    {
      phase: 'Practice',
      duration: 'Weeks 7-12',
      activities: [
        'Past paper practice',
        'Timed mock tests',
        'Weak area focus',
      ],
    },
    {
      phase: 'Mastery',
      duration: 'Weeks 13-16',
      activities: [
        'Full-length mock exams',
        'Test-taking strategies',
        'Final review sessions',
      ],
    },
  ];

  const mockTestBenefits = [
    'Familiarize with exam format and timing',
    'Identify knowledge gaps',
    'Build test-taking confidence',
    'Improve time management',
    'Track progress over time',
    'Reduce exam day anxiety',
  ];

  const successStories = [
    {
      name: 'Lisa Wong',
      exam: 'JLPT N2',
      score: '165/180',
      story: 'Passed N2 on first attempt after 4 months of intensive preparation',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
    {
      name: 'Ahmed Hassan',
      exam: 'JFT-Basic',
      score: 'A2 Level',
      story: 'Successfully qualified for SSW visa after 3 months of focused study',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    },
    {
      name: 'Maria Garcia',
      exam: 'JLPT N1',
      score: '155/180',
      story: 'Achieved highest level certification and secured dream job in Tokyo',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative h-[400px] mt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1712244782568-b13ee6d7d2d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Cherry blossoms"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-keio-red/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Exam Preparation</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Comprehensive preparation programs for all major Japanese language certification exams
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-keio-dark-text">
              Japanese Language Certification Exams
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the right exam for your goals and prepare with our expert guidance
            </p>
          </div>
          <div className="space-y-8">
            {exams.map((exam, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1 text-keio-dark-text">
                          {exam.name}
                        </h3>
                        <p className="text-sm text-gray-600">{exam.fullName}</p>
                      </div>
                      <Award className="w-12 h-12 text-keio-red" />
                    </div>
                    <p className="text-gray-600 mb-4">{exam.description}</p>
                    <div className="mb-4">
                      <h4 className="font-bold mb-2 text-keio-dark-text">Key Features:</h4>
                      <ul className="space-y-2">
                        {exam.features.map((feature, i) => (
                          <li key={i} className="flex items-start space-x-2 text-sm text-gray-600">
                            <div className="w-5 h-5 bg-keio-red rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-keio-light-bg rounded-xl p-6">
                    <h4 className="font-bold mb-3 text-keio-dark-text">Levels Offered</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exam.levels.map((level, i) => (
                        <span
                          key={i}
                          className="bg-keio-red-light text-keio-red px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {level}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-keio-red" />
                        <div>
                          <div className="font-medium text-keio-dark-text">Preparation Time</div>
                          <div className="text-gray-600">{exam.preparation}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-keio-red" />
                        <div>
                          <div className="font-medium text-keio-dark-text">Our Success Rate</div>
                          <div className="text-keio-red font-bold">{exam.successRate}</div>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="mt-6 block text-center bg-keio-blue text-white px-4 py-3 rounded-lg hover:bg-keio-blue-dark transition-all shadow-lg hover:shadow-xl font-semibold"
                    >
                      Start Preparation
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-keio-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-keio-dark-text">
              Preparation Roadmap
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our structured approach to exam success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preparationRoadmap.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-12 h-12 bg-keio-blue text-white rounded-lg flex items-center justify-center font-bold text-xl mb-4 shadow-md">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2 text-keio-dark-text">{phase.phase}</h3>
                <p className="text-sm text-keio-blue font-bold mb-3">{phase.duration}</p>
                <ul className="space-y-2">
                  {phase.activities.map((activity, i) => (
                    <li key={i} className="flex items-start space-x-2 text-sm text-gray-600">
                      <div className="w-4 h-4 bg-keio-red rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-12 h-12 text-keio-red" />
                <h2 className="text-3xl lg:text-4xl font-bold text-keio-dark-text">
                  Mock Tests & Practice
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                Our comprehensive mock test program simulates real exam conditions, helping you build confidence and improve performance.
              </p>
              <div className="space-y-3">
                {mockTestBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-keio-red rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-keio-blue rounded-2xl p-8 text-white shadow-2xl"
            >
              <BookOpen className="w-16 h-16 mb-6" />
              <h3 className="text-2xl font-bold mb-4">What's Included</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-keio-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Weekly Mock Tests</h4>
                    <p className="text-sm text-white">Full-length practice exams every week</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-keio-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Detailed Feedback</h4>
                    <p className="text-sm text-white">Personalized analysis of your performance</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-keio-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Practice Materials</h4>
                    <p className="text-sm text-white">Extensive question banks and study resources</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-keio-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Interview Coaching</h4>
                    <p className="text-sm text-white">Speaking practice for oral exam sections</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-keio-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-keio-dark-text">
              Student Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real results from our exam preparation programs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm text-center"
              >
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold text-lg mb-1 text-keio-dark-text">{story.name}</h3>
                <div className="text-keio-red font-bold mb-2">{story.exam}</div>
                <div className="text-2xl font-bold text-keio-dark-text mb-3">{story.score}</div>
                <p className="text-sm text-gray-600">{story.story}</p>
              </motion.div>
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
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Ace Your Exam?
            </h2>
            <p className="text-xl mb-8 text-white max-w-2xl mx-auto">
              Start your exam preparation journey with KEIO's proven methods and expert instructors
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-keio-red px-8 py-4 rounded-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl font-semibold"
            >
              Enroll in Exam Prep
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
