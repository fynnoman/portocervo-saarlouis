'use client';

import { motion } from 'framer-motion';
import { useConsent } from '@/components/CookieBanner';

export default function Map() {
  const address = 'Lothringer Str. 1, 66740 Saarlouis';
  const googleMapsUrl = 'https://www.google.com/maps/place/Lothringer+Str.+1,+66740+Saarlouis';
  const embedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2582.7!2d6.7505!3d49.3145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795b1b5e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sLothringer%20Str.%201%2C%2066740%20Saarlouis!5e0!3m2!1sde!2sde!4v1234567890';
  const consent = useConsent();

  return (
    <section id="map" className="relative py-20 md:py-28 px-4 md:px-6 overflow-hidden bg-paper">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-10 left-10 w-64 h-64 border-2 border-[var(--ochre)] rounded-full pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute bottom-10 right-10 w-48 h-48 border-2 border-[var(--terracotta)] rounded-full pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="font-sans text-[0.65rem] tracking-villa uppercase text-[var(--terracotta-deep)]">
            Come Trovarci
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--ink)] mt-3">
            <span className="italic">Besuchen Sie uns</span>
          </h2>
          <div className="w-16 h-px bg-[var(--ochre)] mx-auto mt-5 mb-5" />
          <p className="font-serif italic text-lg md:text-xl text-[var(--stone)] max-w-2xl mx-auto px-4">
            Im Herzen von Saarlouis — direkt am Kleinen Markt.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative group"
        >
          <div className="absolute -inset-3 md:-inset-5 border border-[var(--ochre)]/40 pointer-events-none" />
          <div className="absolute -inset-1.5 md:-inset-2.5 border border-[var(--terracotta)]/30 pointer-events-none" />

          <span className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[var(--terracotta)] z-10" />
          <span className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[var(--terracotta)] z-10" />
          <span className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-[var(--terracotta)] z-10" />
          <span className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[var(--terracotta)] z-10" />

          <div className="relative overflow-hidden shadow-[0_40px_80px_-30px_rgba(30,26,20,0.45)] h-[380px] md:h-[480px] lg:h-[540px]">
            {consent === 'accepted' ? (
              <iframe
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'sepia(0.15) saturate(1.1)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Portocervo Standort"
              />
            ) : (
              <div className="w-full h-full bg-[var(--parchment)] flex flex-col items-center justify-center gap-4 px-6 text-center">
                <svg className="w-10 h-10 text-[var(--ochre)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="font-sans text-[var(--stone)] text-sm max-w-xs">
                  Google Maps wird erst nach Ihrer Zustimmung geladen.
                  <br />
                  Bitte akzeptieren Sie die Cookies unten auf der Seite.
                </p>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-[var(--terracotta)] hover:underline tracking-wide"
                >
                  Direkt in Google Maps öffnen →
                </a>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 md:mt-12 text-center space-y-5"
        >
          <div className="flex items-center justify-center gap-3 px-4">
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-[var(--terracotta)] flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.7}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.7}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p className="font-serif text-lg md:text-xl lg:text-2xl text-[var(--ink)]">{address}</p>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-[var(--terracotta)] text-[var(--shell)] hover:bg-[var(--terracotta-deep)] transition-all duration-300 shadow-[0_18px_40px_-15px_rgba(196,98,58,0.55)] uppercase tracking-villa text-xs font-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            In Google Maps öffnen
          </a>
        </motion.div>
      </div>
    </section>
  );
}
