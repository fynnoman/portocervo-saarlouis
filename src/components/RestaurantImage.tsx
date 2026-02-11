'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function RestaurantImage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/438D327C-7C97-4A6F-B0A5-FC52BBA8F8E9.jpeg',
    '/12B48618-D797-4C33-ACA2-2BD49B53FC17.jpeg',
    '/31E95561-7DC1-48BB-B3B3-C4AC8BB9FE15.jpeg',
    '/53A6F3F3-A872-45EF-87C8-AC5B166221AE.jpeg',
    '/71FE268D-039F-4DA8-8769-D039A41C68E6.jpeg',
    '/96DF95DE-5093-406C-99FE-1C45D0B3DDCE.jpeg',
    '/F5892CC4-1749-422C-A801-52DEA1CAE8DA.jpeg',
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="restaurant-image" className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] overflow-hidden bg-gray-100">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full"
        >
          <Image
            src={images[currentIndex]}
            alt={`Restaurant Portocervo ${currentIndex + 1}`}
            fill
            className="object-cover object-[center_30%]"
            quality={90}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#c9a961]/90 hover:bg-[#c9a961] text-white w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg"
        aria-label="Vorheriges Bild"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#c9a961]/90 hover:bg-[#c9a961] text-white w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg"
        aria-label="Nächstes Bild"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-[#c9a961] w-8' : 'bg-[#c9a961]/50'
            }`}
            aria-label={`Bild ${index + 1}`}
          />
        ))}
      </div>

      {/* Text Overlay */}
    </section>
  );
}
