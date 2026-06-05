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
    <section id="experience" className="relative overflow-hidden bg-paper-deep">
      {/* Atmosphere */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.45, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(closest-side, rgba(201,169,97,0.55), transparent)' }}
      />
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 0.35, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(closest-side, rgba(196,98,58,0.5), transparent)' }}
      />

      <div className="flex flex-col md:flex-row md:min-h-[72vh] relative z-10">
        {/* Image */}
        <div className="w-full md:w-1/2 h-72 sm:h-96 md:h-auto p-8 md:p-14 lg:p-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative w-full h-full group"
          >
            {/* Frames */}
            <div className="absolute -inset-4 border border-[var(--ochre)]/40 group-hover:border-[var(--ochre)]/70 transition-colors duration-500" />
            <div className="absolute -inset-2 border border-[var(--terracotta)]/30 group-hover:border-[var(--terracotta)]/60 transition-colors duration-500" />

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[var(--terracotta)] z-10"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[var(--terracotta)] z-10"
            />

            <div className="relative w-full h-full overflow-hidden shadow-[0_40px_70px_-20px_rgba(30,26,20,0.55)]">
              <AnimatePresence mode="wait">
                {images[currentIndex] && (
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[currentIndex]}
                      alt={`Italienische Küche ${currentIndex + 1}`}
                      fill
                      className="object-cover"
                      priority={currentIndex === 0}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/45 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === currentIndex ? 'bg-[var(--shell)] w-6' : 'bg-[var(--shell)]/45 w-1.5'
                    }`}
                    aria-label={`Bild ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 flex items-center px-6 md:px-12 lg:px-20 py-12 md:py-20">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 font-sans text-[0.65rem] tracking-villa uppercase text-[var(--terracotta-deep)] mb-6"
            >
              <span className="h-px w-10 bg-[var(--ochre)]" />
              Esperienza Culinaria
            </motion.span>

            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-serif text-[6rem] md:text-[8rem] text-[var(--terracotta)]/25 leading-none mb-2"
              aria-hidden
            >
              &ldquo;
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[var(--ink)] leading-tight mb-6"
            >
              {content.experience.title}
              <span className="block italic text-[var(--terracotta)] mt-2">{content.experience.titleAccent}</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="font-sans text-base md:text-lg lg:text-xl text-[var(--stone)] leading-relaxed mb-8"
            >
              {content.experience.text}
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
              className="h-px bg-gradient-to-r from-[var(--terracotta)] via-[var(--ochre)] to-transparent w-full md:w-4/5 origin-left"
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="font-script text-2xl md:text-3xl text-[var(--ochre-deep)] mt-6"
            >
              Con amore, dalla cucina
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
