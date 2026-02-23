'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function RestaurantImage() {
  return (
    <section id="restaurant-image" className="py-12 md:py-16 lg:py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-3 md:mb-4">
            Unser Lokal
          </h2>
          <div className="w-12 md:w-16 h-px bg-[#c9a961] mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl"
        >
          <Image
            src="/CB84CBAC-E6CB-4FD3-B0CE-51D412FA2AF9_1_105_c.jpeg"
            alt="Restaurant Portocervo"
            fill
            className="object-cover"
            quality={90}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
