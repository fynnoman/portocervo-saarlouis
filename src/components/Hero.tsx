'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { useContent } from '@/hooks/useContent';

export default function Hero() {
  const ref = useRef(null);
  const content = useContent();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.55, 0.85]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-10 overflow-hidden"
      style={{
        backgroundImage: `url(${content.hero.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Warm cinematic overlay — sunset terracotta + Mediterranean ink */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 z-[1]"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 80% at 80% 0%, rgba(201,169,97,0.30) 0%, transparent 55%), radial-gradient(120% 80% at 10% 100%, rgba(196,98,58,0.32) 0%, transparent 55%), linear-gradient(180deg, rgba(15,10,5,0.55) 0%, rgba(15,10,5,0.20) 35%, rgba(15,10,5,0.75) 100%)',
          }}
        />
      </motion.div>

      {/* Sun glow above the wordmark */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        className="pointer-events-none absolute z-[2] top-[18%] left-1/2 -translate-x-1/2 w-[60vw] max-w-[700px] h-[60vw] max-h-[700px] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(255,210,140,0.55), rgba(255,170,90,0.25) 45%, transparent 70%)',
        }}
      />

      {/* Vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            'radial-gradient(120% 80% at 50% 50%, transparent 55%, rgba(0,0,0,0.55) 100%)',
        }}
      />

      {/* Top eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="absolute top-[14%] left-1/2 -translate-x-1/2 z-10 flex items-center gap-4 text-[0.7rem] md:text-xs tracking-villa uppercase text-[#f3e4c2]"
      >
        <span className="h-px w-12 md:w-20 bg-[#c9a961]/70" />
        <span className="font-sans">Saarlouis · Lothringer Str.</span>
        <span className="h-px w-12 md:w-20 bg-[#c9a961]/70" />
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center px-4 py-6 md:py-10 relative z-10 -mt-20 md:-mt-32 lg:-mt-44">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <motion.div style={{ y, scale }} className="relative mb-3">
            <Image
              src="/5B1A6C9C-63E8-41CF-9807-EB9CC5DCA576.png"
              alt="Portocervo Logo"
              width={4000}
              height={4000}
              priority
              className="w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[560px] md:h-[560px] lg:w-[720px] lg:h-[720px] xl:w-[900px] xl:h-[900px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
              style={{ filter: 'invert(1)' }}
            />
          </motion.div>

          <div className="space-y-4 md:space-y-5">
            {/* Italian whisper */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55 }}
              className="font-script text-2xl sm:text-3xl md:text-4xl text-[#f6e6c0] text-shadow-warm"
            >
              Benvenuti
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white text-shadow-warm leading-tight px-4"
            >
              {content.hero.subtitle}
            </motion.h1>

            {/* Ornamental rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, delay: 0.9, ease: 'easeOut' }}
              className="flex items-center justify-center gap-3 origin-center"
            >
              <span className="h-px w-10 md:w-14 bg-[#c9a961]" />
              <span className="rotate-45 w-2.5 h-2.5 border border-[#c9a961]" />
              <span className="h-px w-10 md:w-14 bg-[#c9a961]" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.05 }}
              className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl text-[#f3e4c2] tracking-wide px-4 text-shadow-warm"
            >
              {content.hero.address}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.15 }}
              className="text-base sm:text-lg md:text-xl px-4"
            >
              <a
                href={`tel:${content.hero.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-3 font-sans text-white/95 hover:text-[#f1c97a] transition-colors text-shadow-warm"
              >
                <svg className="w-4 h-4 text-[#c9a961]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372a1.125 1.125 0 00-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a.75.75 0 01-.83.273 12.054 12.054 0 01-5.83-5.831.75.75 0 01.273-.829l1.293-.971a1.125 1.125 0 00.417-1.173L6.328 4.677A1.125 1.125 0 005.237 3.825H3.864a2.25 2.25 0 00-2.25 2.25v.675z" />
                </svg>
                <span className="tracking-wider">{content.hero.phone}</span>
              </a>
            </motion.p>

            {/* CTA pair */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-3"
            >
              <a
                href="/speisekarten"
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#c9a961] text-[#1e1a14] hover:bg-[#f1c97a] transition-all duration-300 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.6)] uppercase tracking-[0.28em] text-xs font-medium"
              >
                Speisekarte
                <span className="w-2 h-2 bg-[#1e1a14] rotate-45 group-hover:rotate-[135deg] transition-transform duration-500" />
              </a>
              <a
                href={`tel:${content.hero.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-3 px-7 py-3.5 border border-[#c9a961]/70 text-[#f3e4c2] hover:bg-[#c9a961]/15 transition-all duration-300 uppercase tracking-[0.28em] text-xs"
              >
                Reservieren
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[0.65rem] tracking-villa uppercase text-[#f3e4c2]/80"
      >
        <span>Scorri</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="block w-px h-10 bg-gradient-to-b from-[#c9a961] to-transparent"
        />
      </motion.div>
    </section>
  );
}
