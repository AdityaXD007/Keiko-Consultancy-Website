'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

// Force Turbopack recompile
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Read EmailJS IDs from environment variables
      // You can get them by creating a free account at https://www.emailjs.com/
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

      const templateParams = {
        name: formData.name,        // Maps to {{name}}
        email: formData.email,      // Maps to {{email}}
        title: formData.service || 'General Inquiry', // Maps to {{title}}
        phone: formData.phone,      // You can add {{phone}} to your Content
        service: formData.service,  // You can add {{service}} to your Content
        message: formData.message,  // You can add {{message}} to your Content
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast.success('Thank you for your message! We will get back to you within 24 hours.');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again or contact us directly on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative h-[400px] mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-yokohama-blue/90" />
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
              <h2 className="text-3xl font-bold mb-6 text-yokohama-dark-text">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-yokohama-dark-text">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yokohama-red bg-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-yokohama-dark-text">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yokohama-red bg-white"
                    placeholder="yourname@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-yokohama-dark-text">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yokohama-red bg-white"
                    placeholder="+977 "
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block mb-2 text-yokohama-dark-text">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yokohama-red bg-white"
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
                  <label htmlFor="message" className="block mb-2 text-yokohama-dark-text">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yokohama-red bg-white resize-none"
                    placeholder="Tell us about your goals and how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yokohama-red text-white py-3 px-6 rounded-lg font-semibold hover:bg-yokohama-red-dark transition-all flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
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
                <h2 className="text-3xl font-bold mb-6 text-yokohama-dark-text">
                  Contact Info
                </h2>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-yokohama-red flex-shrink-0 mt-0.5" />
                      <p className="text-sm">Chipledhunga, Lalchan Plaza 3F, Pokhara, Nepal </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-yokohama-red flex-shrink-0 mt-0.5" />
                      <p className="text-sm">061-585559</p>
                      <p className="text-sm">061-584887</p>
                      <p className="text-sm">9812644017</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-yokohama-red flex-shrink-0 mt-0.5" />
                      <p className="text-sm">pkryokohama@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-green-500 shadow-lg">
                <MessageSquare className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="font-bold mb-2 text-yokohama-dark-text">WhatsApp Chat</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Connect with us instantly on WhatsApp for quick inquiries
                </p>
                <a
                  href="https://wa.me/9779856029972"
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

      <section className="py-20 bg-yokohama-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-yokohama-dark-text">
              Visit Our Office
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find us in Pokhara
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="h-[400px] bg-gray-200 relative">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251.41692494306318!2d83.98904848955186!3d28.22403114923647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39959584e644c301%3A0x4e1e7be2858d2583!2zWW9rb2hhbWEgTGFuZ3VhZ2UgYW5kIFRyYWluaW5nIENvbnN1bHRhbmN5IFBva2hhcmEg5qiq5rWc5pel5pys6Kqe5a2m57-S5a2m6Zmi!5e0!3m2!1sen!2snp!4v1781592643759!5m2!1sen!2snp" width="100%" height="100%" style={{ border: '0' }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-bold mb-2 text-yokohama-dark-text">Head Office</h3>
                  <p className="text-sm text-gray-600">
                    Pokhara<br />
                    Nepal
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-yokohama-dark-text">Branch Office</h3>
                  <p className="text-sm text-gray-600">
                    Bagbazar<br />
                    Kathmandu, Nepal
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-yokohama-dark-text">Parking</h3>
                  <p className="text-sm text-gray-600">
                    Available at both locations<br />
                    Please call ahead for assistance
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 text-white max-w-2xl mx-auto">
              Book a free consultation today and take the first step towards your Japanese dreams
            </p>
            <a
              href="mailto:info@yokohamaconsultancy.com"
              className="inline-block bg-white text-yokohama-red px-8 py-4 rounded-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl font-semibold"
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
