'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useContent } from '@/hooks/useContent';

export default function AnnouncementBanner() {
  const content = useContent();
  const enabled = content.announcement?.enabled ?? false;
  const text = content.announcement?.text ?? '';

  if (!enabled || !text.trim()) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-gradient-to-r from-[#c9a961] via-[#d4b76e] to-[#c9a961] text-white overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-4 py-3 text-center">
          <p className="text-sm md:text-base font-medium whitespace-pre-line leading-relaxed">
            {text}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
