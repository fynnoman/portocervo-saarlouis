'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-gray-100">
      <div className="relative min-h-[50vh] md:min-h-[60vh]">
        <div className="absolute inset-0 md:w-1/2">
          <div className="relative w-full h-full">
            <Image
              src="/438D327C-7C97-4A6F-B0A5-FC52BBA8F8E9.jpeg"
              alt="Restaurant Atmosphere"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-100 opacity-40 md:opacity-70"></div>
          </div>
        </div>

        <div className="relative md:ml-[50%] min-h-[50vh] md:min-h-[60vh] flex items-center px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
          <div className="max-w-xl">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 mb-6 md:mb-8"
            >
              Ein kulinarisches
              <span className="block text-[#c9a961] mt-2">Erlebnis</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed mb-6 md:mb-8"
            >
              Genießen Sie authentische italienische Küche in elegantem Ambiente. 
              Jedes Gericht wird mit Liebe und traditionellen Rezepten zubereitet.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
