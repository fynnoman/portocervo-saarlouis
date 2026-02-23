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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
    <>
      {/* Toggle Button – always visible at top */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`group flex items-center gap-2 px-5 py-2 rounded-b-xl transition-all duration-300 shadow-md ${
              menuOpen
                ? 'bg-white text-[#c9a961]'
                : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/80 hover:text-[#c9a961]'
            }`}
            aria-label="Navigation öffnen"
          >
            <span className="text-xs font-light uppercase tracking-[0.2em]">Menü</span>
            <motion.svg
              animate={{ rotate: menuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>
        </div>

        {/* Expandable Navigation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-100 overflow-hidden"
            >
              {/* Desktop layout */}
              <div className="hidden md:flex flex-wrap justify-center gap-3 lg:gap-6 max-w-7xl mx-auto px-4 py-4">
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

              {/* Mobile layout */}
              <div className="md:hidden px-4 py-3 grid grid-cols-2 gap-1">
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
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
