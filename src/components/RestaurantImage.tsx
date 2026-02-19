'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function RestaurantImage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/68A7E866-182F-4531-9864-52187EC82259.jpeg',
    '/6AE92497-B1FD-4998-BE03-EA2CA8C66CC7_1_105_c.jpeg',
    '/02F7DCDA-A9F8-463E-985A-E0D9FD7E15A0_1_105_c.jpeg',
    '/6DB5E1CD-2EA4-44FC-AB11-FF7347432EA1_1_105_c.jpeg',
    '/597CB459-217A-4171-AB66-7D5696079126_1_105_c.jpeg',
    '/DCFC96B7-9A74-4723-8B60-C7362473FBE0_1_105_c.jpeg',
    '/E1221841-182B-4E47-A91D-F09D649F6AF8_1_105_c.jpeg',
    '/F6BFF748-F85C-410C-A4CE-DEEACE507257.jpeg',
    '/F9D3D711-BFB5-46E1-8B05-906A0467FFE0_1_105_c.jpeg',
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="restaurant-image" className="py-12 md:py-16 lg:py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl"
            >
              <Image
                src={images[currentIndex]}
                alt={`Restaurant Portocervo ${currentIndex + 1}`}
                fill
                className="object-cover"
                quality={90}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[#c9a961] w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
            aria-label="Vorheriges Bild"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[#c9a961] w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
            aria-label="Nächstes Bild"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#c9a961] w-8' : 'bg-gray-400'
                }`}
                aria-label={`Bild ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
