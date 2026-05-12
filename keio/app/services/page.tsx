'use client';

import Link from 'next/link';
import { Globe, FileText, CheckCircle2, MessageSquare, Briefcase, Plane, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function Services() {
  const services = [
    {
      title: 'Translation Services',
      icon: Globe,
      description: 'Professional translation between Japanese and English for all your documentation needs.',
      features: [
        'Academic transcripts and diplomas',
        'Legal documents and contracts',
        'Business correspondence',
        'Personal letters and certificates',
        'Medical records',
        'Immigration documents',
      ],
      pricing: 'Starting from $50',
    },
    {
      title: 'Documentation Assistance',
      icon: FileText,
      description: 'Complete support in preparing and organizing documents for university and job applications.',
      features: [
        'Statement of Purpose writing',
        'Resume/CV preparation',
        'Recommendation letter guidance',
        'Portfolio organization',
        'Document verification',
        'Application form assistance',
      ],
      pricing: 'Starting from $100',
    },
    {
      title: 'Visa Guidance',
      icon: CheckCircle2,
      description: 'Expert assistance with Japanese visa application process with 95% success rate.',
      features: [
        'Student visa (COE) application',
        'Work visa consultation',
        'Dependent visa support',
        'Visa extension guidance',
        'Document checklist preparation',
        'Embassy interview preparation',
      ],
      pricing: 'Starting from $200',
    },
    {
      title: 'Interview Preparation',
      icon: MessageSquare,
      description: 'Mock interviews and professional coaching for university admissions and job interviews.',
      features: [
        'University admission interviews',
        'Japanese company job interviews',
        'Common question practice',
        'Cultural etiquette training',
        'Body language coaching',
        'Confidence building sessions',
      ],
      pricing: 'Starting from $75',
    },
    {
      title: 'Career Counseling',
      icon: Briefcase,
      description: 'Personalized guidance for finding and securing career opportunities in Japan.',
      features: [
        'Career path consultation',
        'Job market analysis',
        'Company research assistance',
        'Networking strategies',
        'Salary negotiation tips',
        'Resume optimization',
      ],
      pricing: 'Starting from $150',
    },
    {
      title: 'Pre-departure Orientation',
      icon: Plane,
      description: 'Essential information and preparation for living and studying in Japan.',
      features: [
        'Cultural orientation sessions',
        'Accommodation guidance',
        'Banking and mobile services',
        'Healthcare system overview',
        'Transportation tips',
        'Essential Japanese phrases',
      ],
      pricing: 'Starting from $80',
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Discuss your needs and goals with our expert consultants',
    },
    {
      step: 2,
      title: 'Service Plan',
      description: 'Receive a customized plan and timeline for your requirements',
    },
    {
      step: 3,
      title: 'Document Preparation',
      description: 'Work with our team to gather and prepare necessary materials',
    },
    {
      step: 4,
      title: 'Review & Refinement',
      description: 'Multiple review rounds to ensure perfection',
    },
    {
      step: 5,
      title: 'Final Delivery',
      description: 'Receive polished documents and comprehensive guidance',
    },
    {
      step: 6,
      title: 'Follow-up Support',
      description: 'Ongoing assistance until your goal is achieved',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative h-[400px] mt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1711335792538-b94118b70ecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
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
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Comprehensive support services to make your Japan journey smooth and successful
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-keio-red transition-all"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-keio-red rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2 text-keio-dark-text">
                        {service.title}
                      </h2>
                      <p className="text-sm text-keio-red font-bold">{service.pricing}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <h3 className="font-bold mb-3 text-keio-dark-text">What We Offer:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm text-gray-600">
                          <div className="w-5 h-5 bg-keio-red rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                        </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-keio-blue hover:text-keio-blue-dark font-semibold transition-colors"
                  >
                    Request This Service <ArrowRight className="ml-2" size={18} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-keio-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-keio-dark-text">
              Our Service Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic approach to ensure your success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-12 h-12 bg-keio-red text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-md">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2 text-keio-dark-text">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-keio-red-light to-white rounded-2xl p-12 border-2 border-keio-red-light">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-keio-dark-text">
                  Why Choose Our Services?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-keio-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                    <div>
                      <h3 className="font-bold text-keio-dark-text">Expert Team</h3>
                      <p className="text-sm text-gray-600">
                        Native Japanese speakers and certified translators
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-keio-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                    <div>
                      <h3 className="font-bold text-keio-dark-text">Proven Track Record</h3>
                      <p className="text-sm text-gray-600">
                        95% visa success rate and 500+ successful placements
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-keio-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                    <div>
                      <h3 className="font-bold text-keio-dark-text">Personalized Approach</h3>
                      <p className="text-sm text-gray-600">
                        Customized solutions tailored to your specific needs
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-keio-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                    <div>
                      <h3 className="font-bold text-keio-dark-text">End-to-End Support</h3>
                      <p className="text-sm text-gray-600">
                        Comprehensive assistance from start to finish
                      </p>
                    </div>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-2xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1648871647634-0c99b483cb63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Tokyo skyline"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-white max-w-2xl mx-auto">
              Book a consultation to discuss how we can help you achieve your goals
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-keio-red px-8 py-4 rounded-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl font-semibold"
            >
              Schedule Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
