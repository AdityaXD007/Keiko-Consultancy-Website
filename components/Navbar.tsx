'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Services', path: '/services' },

    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0">
              <Image src="/brand/Logo.png" alt="Yokohama Logo" fill className="object-contain" quality={100} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-yokohama-dark-text text-base sm:text-lg">YOKOHAMA LANGUAGE</span>
              <span className="text-xs text-gray-600">& TRAINING CONSULTANCY (P) LTD.</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`transition-colors hover:text-yokohama-red ${pathname === link.path
                  ? 'text-yokohama-red'
                  : 'text-yokohama-dark-text'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-yokohama-red text-white px-6 py-2.5 rounded-lg hover:bg-yokohama-red-dark transition-all shadow-md hover:shadow-lg font-medium"
            >
              Apply Now
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-yokohama-dark-text"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 transition-colors hover:text-yokohama-red ${pathname === link.path
                  ? 'text-yokohama-red'
                  : 'text-yokohama-dark-text'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-yokohama-red text-white px-6 py-2.5 rounded-lg text-center hover:bg-yokohama-red-dark transition-all font-medium"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
