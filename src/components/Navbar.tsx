'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 lg:gap-8">
          <button
            onClick={() => scrollToSection('restaurant-image')}
            className="text-gray-700 hover:text-[#c9a961] transition-colors font-light text-xs md:text-sm lg:text-base uppercase tracking-wide whitespace-nowrap"
          >
            Restaurant
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-gray-700 hover:text-[#c9a961] transition-colors font-light text-xs md:text-sm lg:text-base uppercase tracking-wide whitespace-nowrap"
          >
            Erlebnis
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-gray-700 hover:text-[#c9a961] transition-colors font-light text-xs md:text-sm lg:text-base uppercase tracking-wide whitespace-nowrap"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-[#c9a961] transition-colors font-light text-xs md:text-sm lg:text-base uppercase tracking-wide whitespace-nowrap"
          >
            Über Uns
          </button>
          <button
            onClick={() => scrollToSection('opening-hours')}
            className="text-gray-700 hover:text-[#c9a961] transition-colors font-light text-xs md:text-sm lg:text-base uppercase tracking-wide whitespace-nowrap"
          >
            Öffnungszeiten
          </button>
          <button
            onClick={() => scrollToSection('lunch-menu')}
            className="text-gray-700 hover:text-[#c9a961] transition-colors font-light text-xs md:text-sm lg:text-base uppercase tracking-wide whitespace-nowrap"
          >
            Speisen
          </button>
          <button
            onClick={() => scrollToSection('events')}
            className="text-gray-700 hover:text-[#c9a961] transition-colors font-light text-xs md:text-sm lg:text-base uppercase tracking-wide whitespace-nowrap"
          >
            Events
          </button>
          <button
            onClick={() => scrollToSection('reservation')}
            className="text-gray-700 hover:text-[#c9a961] transition-colors font-light text-xs md:text-sm lg:text-base uppercase tracking-wide whitespace-nowrap"
          >
            Reservierung
          </button>
          <button
            onClick={() => scrollToSection('map')}
            className="text-gray-700 hover:text-[#c9a961] transition-colors font-light text-xs md:text-sm lg:text-base uppercase tracking-wide whitespace-nowrap"
          >
            Anfahrt
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
