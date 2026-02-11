'use client';

import { motion } from 'framer-motion';

export default function Divider() {
  return (
    <section className="py-16 px-6 bg-gray-100 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="flex items-center justify-center"
        >
          {/* Left line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-px bg-gradient-to-r from-transparent via-[#c9a961] to-[#c9a961] flex-1 origin-right"
          />
          
          {/* Center ornament */}
          <motion.div
            initial={{ rotate: 0, scale: 0 }}
            whileInView={{ rotate: 360, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="mx-8 relative"
          >
            <div className="w-3 h-3 bg-[#c9a961] rotate-45" />
            <div className="absolute -top-2 -left-2 w-7 h-7 border border-[#c9a961] rotate-45 opacity-30" />
          </motion.div>
          
          {/* Right line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-px bg-gradient-to-l from-transparent via-[#c9a961] to-[#c9a961] flex-1 origin-left"
          />
        </motion.div>
        
        {/* Subtle quote or tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-2xl md:text-3xl text-gray-400 mt-8 italic"
        >
          Tradizione & Passione
        </motion.p>
      </div>
    </section>
  );
}
