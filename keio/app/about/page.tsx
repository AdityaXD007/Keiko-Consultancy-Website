'use client';

import Link from 'next/link';
import { Target, Eye, Award, Users, Globe, TrendingUp, Heart, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function About() {
  const objectives = [
    {
      title: 'Excellence in Education',
      description: 'Providing world-class Japanese language education with modern teaching methodologies',
      icon: Award,
    },
    {
      title: 'Student Success',
      description: 'Ensuring every student achieves their academic and career goals in Japan',
      icon: Users,
    },
    {
      title: 'Cultural Bridge',
      description: 'Building connections between international students and Japanese culture',
      icon: Globe,
    },
    {
      title: 'Career Development',
      description: 'Supporting students in finding rewarding career opportunities in Japan',
      icon: TrendingUp,
    },
  ];

  const whyJapan = [
    {
      title: 'World-Class Education',
      description: 'Japan is home to prestigious universities and cutting-edge research institutions',
    },
    {
      title: 'Career Opportunities',
      description: 'Growing demand for international talent in Japanese companies',
    },
    {
      title: 'Rich Culture',
      description: 'Experience traditional culture while living in modern, safe cities',
    },
    {
      title: 'Quality of Life',
      description: 'Excellent healthcare, public transport, and infrastructure',
    },
  ];

  const team = [
    {
      name: 'Dr. Tanaka Hiroshi',
      role: 'Chief Academic Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
      credentials: 'Ph.D. in Japanese Linguistics, 15+ years teaching experience',
    },
    {
      name: 'Sarah Mitchell',
      role: 'International Student Coordinator',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
      credentials: 'M.A. in International Education, JLPT N1 certified',
    },
    {
      name: 'Yamamoto Kenji',
      role: 'Career Counselor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      credentials: '10+ years experience in Japanese recruitment industry',
    },
    {
      name: 'Emily Chen',
      role: 'Visa & Documentation Specialist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      credentials: 'Immigration consultant, 500+ successful visa applications',
    },
  ];

  const successSteps = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Meet with our counselors to discuss your goals and assess your Japanese level',
    },
    {
      step: 2,
      title: 'Personalized Plan',
      description: 'Receive a customized study and career plan tailored to your objectives',
    },
    {
      step: 3,
      title: 'Language Training',
      description: 'Begin intensive Japanese language courses with expert instructors',
    },
    {
      step: 4,
      title: 'Exam Preparation',
      description: 'Prepare for JLPT or other certification exams with our specialized programs',
    },
    {
      step: 5,
      title: 'Application Support',
      description: 'Get assistance with university/job applications and visa documentation',
    },
    {
      step: 6,
      title: 'Success in Japan',
      description: 'Achieve your dream of studying or working in Japan',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative h-[400px] mt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1579833472711-fd404a240be7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Cherry blossoms"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-keio-blue/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Empowering dreams through Japanese language education and career guidance since 2019
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-keio-dark-text">
                Who We Are
              </h2>
              <p className="text-gray-600 mb-4">
                KEIO Educational Consultancy was founded in 2019 with a simple yet powerful vision: to make Japanese language education and career opportunities accessible to ambitious students worldwide.
              </p>
              <p className="text-gray-600 mb-4">
                We are a team of experienced educators, native Japanese speakers, career counselors, and immigration specialists dedicated to your success. Our comprehensive approach combines language training, cultural education, and practical career support.
              </p>
              <p className="text-gray-600">
                With a proven track record of 95% visa success rate and 500+ students successfully placed in Japanese universities and companies, we continue to be the trusted choice for those pursuing their Japanese dreams.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1751704623306-fefadee241a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Our classroom"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1588486691401-93624c48459b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Tokyo"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-10 h-10 text-keio-red" />
                <h2 className="text-3xl lg:text-4xl font-bold text-keio-dark-text">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                To provide comprehensive, high-quality Japanese language education and career guidance that empowers international students to achieve their academic and professional goals in Japan. We strive to bridge cultures, create opportunities, and transform lives through education.
              </p>
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="w-10 h-10 text-keio-red" />
                <h2 className="text-3xl lg:text-4xl font-bold text-keio-dark-text">
                  Our Vision
                </h2>
              </div>
              <p className="text-gray-600">
                To be the world's leading Japanese language consultancy, recognized for excellence in education, student success, and creating meaningful connections between international talent and Japanese opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-keio-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-keio-dark-text">
              Our Core Objectives
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guiding principles that drive everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center border border-gray-100"
                >
                  <div className="w-16 h-16 bg-keio-red rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold mb-2 text-keio-dark-text">
                    {objective.title}
                  </h3>
                  <p className="text-sm text-gray-600">{objective.description}</p>
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
              Why Study in Japan?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the advantages of pursuing your education and career in Japan
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {whyJapan.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 border-2 border-keio-blue shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-keio-blue rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-keio-dark-text">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600">{reason.description}</p>
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
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert professionals dedicated to your success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-1 text-keio-dark-text">
                    {member.name}
                  </h3>
                  <p className="text-keio-red text-sm mb-3">{member.role}</p>
                  <p className="text-xs text-gray-600">{member.credentials}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-keio-dark-text">
              Your Success Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our proven step-by-step approach to achieving your Japanese dreams
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {successSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-keio-blue">
                  <div className="w-12 h-12 bg-keio-red text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-md">
                    {item.step}
                  </div>
                  <h3 className="font-bold mb-2 text-keio-dark-text">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
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
            <BookOpen className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 text-white max-w-2xl mx-auto">
              Join hundreds of successful students who have achieved their dreams with KEIO
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-keio-red px-8 py-4 rounded-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl font-semibold"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
