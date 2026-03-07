'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useContent } from '@/hooks/useContent';

export default function Experience() {
  const content = useContent();
  const images = content.experience.images;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);
  return (
    <section id="experience" className="relative overflow-hidden bg-gray-100">
      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.08, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 w-64 h-64 bg-[#c9a961] rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 0.1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-0 right-1/4 w-1 h-32 bg-[#c9a961]"
      />

      {/* Mobile: stack vertically. Desktop: side-by-side */}
      <div className="flex flex-col md:flex-row md:min-h-[60vh]">
        {/* Left Side - Image with elegant frame */}
        <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-auto p-8 md:p-12 lg:p-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-full group"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-4 border-2 border-[#c9a961] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="absolute -inset-2 border border-[#c9a961] opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            
            {/* Corner accents */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-[#c9a961] z-10"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-[#c9a961] z-10"
            />

            {/* Image Slideshow */}
            <div className="relative w-full h-full overflow-hidden rounded-sm shadow-2xl">
              <AnimatePresence mode="wait">
                {images[currentIndex] && (
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[currentIndex]}
                      alt={`Italienische Küche ${currentIndex + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      priority={currentIndex === 0}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#c9a961]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Dot indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      i === currentIndex ? 'bg-white w-5' : 'bg-white/50'
                    }`}
                    aria-label={`Bild ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 flex items-center px-6 md:px-12 lg:px-16 py-10 md:py-16 lg:py-20">
          <div className="max-w-xl">
            {/* Decorative Quote Mark */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[#c9a961] text-6xl md:text-7xl lg:text-8xl font-serif leading-none mb-4 md:mb-6 opacity-30"
            >
              "
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 mb-6 md:mb-8"
            >
              {content.experience.title}
              <span className="block text-[#c9a961] mt-2">{content.experience.titleAccent}</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed mb-6 md:mb-8"
            >
              {content.experience.text}
            </motion.p>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-px bg-gradient-to-r from-[#c9a961] to-transparent w-full md:w-3/4 origin-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
