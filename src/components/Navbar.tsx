'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'Restaurant', id: 'restaurant-image' },
  { label: 'Erlebnis', id: 'experience' },
  { label: 'Services', id: 'services' },
  { label: 'Über Uns', id: 'about' },
  { label: 'Öffnungszeiten', id: 'opening-hours' },
  { label: 'Speisen', id: 'lunch-menu' },
  { label: 'Speisekarten', id: 'speisekarten' },
  { label: 'Events', id: 'events' },
  { label: 'Anfahrt', id: 'map' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen && !isScrollingRef.current) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    isScrollingRef.current = true;
    setMenuOpen(false);

    setTimeout(() => {
      const offset = 70;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    }, 50);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`group flex items-center gap-3 px-6 py-2.5 rounded-b-2xl transition-all duration-300 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.25)] border-x border-b ${
              menuOpen
                ? 'bg-[var(--shell)] text-[var(--terracotta)] border-[var(--ochre)]/40'
                : 'bg-[rgba(30,26,20,0.35)] backdrop-blur-md text-[var(--shell)] hover:bg-[var(--shell)]/95 hover:text-[var(--terracotta)] border-white/20 hover:border-[var(--ochre)]/40'
            }`}
            aria-label="Navigation öffnen"
          >
            <span className="font-script text-base leading-none mt-0.5">Menù</span>
            <span className="h-3 w-px bg-current opacity-40" />
            <span className="text-[0.65rem] tracking-villa uppercase font-sans font-medium">Carta</span>
            <motion.svg
              animate={{ rotate: menuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.32, ease: 'easeInOut' }}
              className="bg-[var(--shell)]/97 backdrop-blur-md shadow-[0_20px_40px_-10px_rgba(30,26,20,0.25)] border-t border-[var(--ochre)]/25 overflow-hidden"
            >
              {/* Decorative tile band */}
              <div
                className="h-1 w-full"
                style={{
                  background:
                    'repeating-linear-gradient(45deg, var(--ochre) 0 8px, transparent 8px 16px, var(--terracotta) 16px 24px, transparent 24px 32px)',
                  opacity: 0.55,
                }}
              />

              {/* Desktop layout */}
              <div className="hidden md:flex flex-wrap justify-center items-center gap-x-7 gap-y-3 max-w-7xl mx-auto px-4 py-5">
                {navItems.map((item, idx) => {
                  const isLast = idx === navItems.length - 1;
                  return (
                    <div key={item.id} className="flex items-center gap-7">
                      {item.id === 'speisekarten' ? (
                        <Link
                          href="/speisekarten"
                          onClick={() => setMenuOpen(false)}
                          className="font-serif italic text-[var(--ink)] hover:text-[var(--terracotta)] transition-colors text-base lg:text-lg whitespace-nowrap"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className="font-serif italic text-[var(--ink)] hover:text-[var(--terracotta)] transition-colors text-base lg:text-lg whitespace-nowrap"
                        >
                          {item.label}
                        </button>
                      )}
                      {!isLast && <span className="w-1 h-1 rounded-full bg-[var(--ochre)]/60" />}
                    </div>
                  );
                })}
              </div>

              {/* Mobile layout */}
              <div className="md:hidden px-4 py-4 grid grid-cols-2 gap-1">
                {navItems.map((item) =>
                  item.id === 'speisekarten' ? (
                    <Link
                      key={item.id}
                      href="/speisekarten"
                      onClick={() => setMenuOpen(false)}
                      className="text-left px-3 py-2.5 font-serif italic text-[var(--ink)] hover:text-[var(--terracotta)] hover:bg-[var(--parchment)]/70 rounded-md transition-colors text-base"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left px-3 py-2.5 font-serif italic text-[var(--ink)] hover:text-[var(--terracotta)] hover:bg-[var(--parchment)]/70 rounded-md transition-colors text-base"
                    >
                      {item.label}
                    </button>
                  )
                )}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
