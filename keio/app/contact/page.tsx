'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Education Street', 'Shibuya-ku, Tokyo 150-0001', 'Japan'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+81 3-1234-5678', '+81 90-8765-4321', 'Mon-Sat: 9AM - 6PM JST'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@keioconsultancy.com', 'admissions@keioconsultancy.com', 'support@keioconsultancy.com'],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative h-[400px] mt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1712725256207-e15286c6ede3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
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
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Get in touch with us to start your journey to Japan
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-keio-dark-text">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-keio-dark-text">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-keio-red bg-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-keio-dark-text">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-keio-red bg-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-keio-dark-text">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-keio-red bg-white"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block mb-2 text-keio-dark-text">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-keio-red bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="basic-japanese">Basic Japanese Course</option>
                    <option value="intermediate-japanese">Intermediate Japanese Course</option>
                    <option value="advanced-japanese">Advanced Japanese Course</option>
                    <option value="exam-prep">Exam Preparation</option>
                    <option value="translation">Translation Services</option>
                    <option value="visa">Visa Guidance</option>
                    <option value="career">Career Counseling</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-keio-dark-text">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-keio-red bg-white resize-none"
                    placeholder="Tell us about your goals and how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-keio-red text-white px-6 py-4 rounded-lg hover:bg-keio-red-dark transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl font-semibold"
                >
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-keio-dark-text">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mb-8">
                  Have questions about our courses or services? We're here to help! Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-keio-blue rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-2 text-keio-dark-text">{info.title}</h3>
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-sm text-gray-600">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-green-500 shadow-lg">
                <MessageSquare className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="font-bold mb-2 text-keio-dark-text">WhatsApp Chat</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Connect with us instantly on WhatsApp for quick inquiries
                </p>
                <a
                  href="https://wa.me/81312345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all text-sm font-semibold shadow-md hover:shadow-lg"
                >
                  Start WhatsApp Chat
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-keio-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-keio-dark-text">
              Visit Our Office
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find us in the heart of Tokyo
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="h-[400px] bg-gray-200 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.747389438728!2d139.69952931525867!3d35.659515580199576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca9d8c38f2f%3A0x7e2bb2f2b4e4a1a7!2sShibuya%2C%20Tokyo%2C%20Japan!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KEIO Educational Consultancy Location"
              />
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-bold mb-2 text-keio-dark-text">Address</h3>
                  <p className="text-sm text-gray-600">
                    123 Education Street<br />
                    Shibuya-ku, Tokyo 150-0001<br />
                    Japan
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-keio-dark-text">Directions</h3>
                  <p className="text-sm text-gray-600">
                    5 min walk from Shibuya Station<br />
                    (JR, Tokyo Metro, Private lines)<br />
                    Exit A3
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-keio-dark-text">Parking</h3>
                  <p className="text-sm text-gray-600">
                    Limited parking available<br />
                    Nearby public parking lots<br />
                    Public transport recommended
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 text-white max-w-2xl mx-auto">
              Book a free consultation today and take the first step towards your Japanese dreams
            </p>
            <a
              href="mailto:info@keioconsultancy.com"
              className="inline-block bg-white text-keio-red px-8 py-4 rounded-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl font-semibold"
            >
              Schedule Free Consultation
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
