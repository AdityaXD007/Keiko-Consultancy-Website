// components/home/FadeIn.tsx
'use client';
import { motion } from 'motion/react';
export function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }} viewport={{ once: true }}>
      {children}
    </motion.div>
  );
}