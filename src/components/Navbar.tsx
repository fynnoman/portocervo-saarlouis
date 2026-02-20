'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Restaurant', id: 'restaurant-image' },
  { label: 'Erlebnis', id: 'experience' },
  { label: 'Services', id: 'services' },
  { label: 'Über Uns', id: 'about' },
  { label: 'Öffnungszeiten', id: 'opening-hours' },
  { label: 'Speisen', id: 'lunch-menu' },
  { label: 'Speisekarten', id: 'speisekarten' },
  { label: 'Events', id: 'events' },
  { label: 'Reservierung', id: 'reservation' },
  { label: 'Anfahrt', id: 'map' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-wrap justify-center gap-3 md:gap-5 lg:gap-7">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-700 hover:text-[#c9a961] transition-colors font-light text-xs md:text-sm lg:text-base uppercase tracking-wide whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between">
          <span className="text-gray-900 font-light text-sm tracking-widest uppercase">Porto Cervo</span>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-gray-700 hover:text-[#c9a961] transition-colors"
            aria-label="Menü"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-3 grid grid-cols-2 gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-3 py-2.5 text-gray-700 hover:text-[#c9a961] hover:bg-gray-50 rounded-lg transition-colors font-light text-sm uppercase tracking-wide"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
