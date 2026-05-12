import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, X, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-keio-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-keio-red rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold">KEIO</span>
                <span className="text-xs text-gray-400">Educational Consultancy</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Your gateway to study and career opportunities in Japan
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-keio-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-keio-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-keio-red transition-colors">
                <X size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-keio-red transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-keio-red transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-keio-red transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-keio-red transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-keio-red transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-keio-red transition-colors text-sm">
                  Basic Japanese
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-keio-red transition-colors text-sm">
                  Intermediate Japanese
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-keio-red transition-colors text-sm">
                  Advanced Japanese
                </Link>
              </li>
              <li>
                <Link href="/exam-preparation" className="text-gray-400 hover:text-keio-red transition-colors text-sm">
                  Exam Preparation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin size={18} className="text-keio-red mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">123 Education Street, Tokyo, Japan</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone size={18} className="text-keio-red flex-shrink-0" />
                <span className="text-gray-400">+81 3-1234-5678</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail size={18} className="text-keio-red flex-shrink-0" />
                <span className="text-gray-400">info@keioconsultancy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2026 KEIO Educational Consultancy. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-keio-red transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-keio-red transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
