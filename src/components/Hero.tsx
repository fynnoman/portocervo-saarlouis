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
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  
  return (
    <section 
      ref={ref} 
      className="relative min-h-screen flex items-center justify-center pt-10"
      style={{
        backgroundImage: `url(${content.hero.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Content Section */}
      <div className="max-w-4xl mx-auto text-center px-4 py-6 md:py-10 relative z-10 -mt-20 md:-mt-32 lg:-mt-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <motion.div 
            style={{ y, scale }}
            className="relative mb-2"
          >
            <Image
              src="/5B1A6C9C-63E8-41CF-9807-EB9CC5DCA576.png"
              alt="Portocervo Logo"
              width={4000}
              height={4000}
              priority
              className="w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[560px] md:h-[560px] lg:w-[720px] lg:h-[720px] xl:w-[900px] xl:h-[900px] object-contain"
              style={{ filter: 'invert(1)' }}
            />
          </motion.div>
            
          {/* Text Content */}
          <div className="space-y-3 md:space-y-4">
            <p className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-white px-4"
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}>
              {content.hero.subtitle}
            </p>
            <div className="w-12 md:w-16 h-px bg-[#c9a961] mx-auto"></div>
            <p className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl text-white px-4"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}>
              {content.hero.address}
            </p>
            <p className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl px-4"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}>
              <a href={`tel:${content.hero.phone.replace(/\s/g, '')}`} className="text-white hover:text-[#c9a961] transition-colors">
                {content.hero.phone}
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
