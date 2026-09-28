'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, X } from 'lucide-react';
import type { PopupAnnouncement } from '@/lib/api/types';

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? '';

export function PopupModal({ popup }: { popup: PopupAnnouncement }) {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden max-w-[400px] w-full"
          >
            {popup.badge_text && (
              <div className="absolute top-0 left-0 bg-yokohama-red text-white text-xs font-bold px-4 py-1.5 rounded-br-lg">
                {popup.badge_text}
              </div>
            )}
            <button
              type="button"
              onClick={() => setVisible(false)}
              aria-label="Close banner"
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 transition-colors z-50 p-1 bg-gray-100 hover:bg-gray-200 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center mt-6 mb-6">
              {popup.image ? (
                <div className="relative w-full h-44 mb-4 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                  <img
                    src={popup.image.startsWith('http') ? popup.image : `${API_BASE}${popup.image}`}
                    alt={popup.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-16 h-16 bg-yokohama-blue rounded-full flex items-center justify-center mb-4 shadow-inner">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
              )}
              <h3 className="font-extrabold text-yokohama-dark-text leading-tight text-2xl mb-2">
                {popup.title}
              </h3>
              {popup.description && (
                <p className="text-base text-gray-700 font-medium leading-relaxed mb-2">
                  {popup.description}
                </p>
              )}
              {popup.highlight_text && (
                <p className="text-base font-bold text-yokohama-red">{popup.highlight_text}</p>
              )}
            </div>

            <Link
              href={popup.button_link || '/contact'}
              onClick={() => setVisible(false)}
              className="block text-center bg-yokohama-red text-white py-3.5 rounded-xl text-base font-bold hover:bg-red-700 transition-colors shadow-lg w-full"
            >
              {popup.button_text || 'Start Application'}
            </Link>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}