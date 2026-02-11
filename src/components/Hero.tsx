'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
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
        backgroundImage: 'url(/A35107A5-F986-4680-A2F5-C34B2B38507A.png)',
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
              className="w-[400px] h-[400px] md:w-[640px] md:h-[640px] lg:w-[800px] lg:h-[800px] xl:w-[960px] xl:h-[960px] object-contain"
              style={{ filter: 'invert(1)' }}
            />
          </motion.div>
            
          {/* Text Content */}
          <div className="space-y-3 md:space-y-4">
            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-white px-4">
              Italienische Küche in Saarlouis
            </p>
            <div className="w-12 md:w-16 h-px bg-[#c9a961] mx-auto"></div>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white px-4">
              Lothringer Str. 1, 66740 Saarlouis
            </p>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl px-4">
              <a href="tel:068312747" className="text-white hover:text-[#c9a961] transition-colors">
                06831 2747
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
