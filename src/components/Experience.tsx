'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Experience() {
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

      <div className="relative min-h-[50vh] md:min-h-[60vh]">
        {/* Left Side - Image with elegant frame */}
        <div className="absolute inset-0 md:w-1/2 p-8 md:p-12 lg:p-16">
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

            {/* Image */}
            <div className="relative w-full h-full overflow-hidden rounded-sm shadow-2xl">
              <Image
                src="/96DF95DE-5093-406C-99FE-1C45D0B3DDCE.jpeg"
                alt="Italienische Küche"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#c9a961]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        </div>

        {/* Right Side - Content */}
        <div className="relative md:ml-[50%] min-h-[50vh] md:min-h-[60vh] flex items-center px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
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
