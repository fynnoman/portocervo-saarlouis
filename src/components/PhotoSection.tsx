'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PhotoSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl shadow-2xl"
        >
          <Image
            src="/PHOTO-2026-05-12-16-23-24.jpg"
            alt="Restaurant Portocervo"
            width={1200}
            height={900}
            className="w-full h-auto"
            quality={90}
          />
        </motion.div>
      </div>
    </section>
  );
}
