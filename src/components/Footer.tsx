'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useContent } from '@/hooks/useContent';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const content = useContent();

  return (
    <footer className="relative bg-night text-[var(--shell)] pt-16 md:pt-24 pb-10 px-4 md:px-6 overflow-hidden">
      {/* Decorative top tile band */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5"
        style={{
          background:
            'repeating-linear-gradient(45deg, var(--ochre) 0 10px, transparent 10px 20px, var(--terracotta) 20px 30px, transparent 30px 40px)',
          opacity: 0.7,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="font-script text-3xl md:text-4xl text-[var(--ochre)] mb-2">Porto Cervo</p>
          <p className="font-serif italic text-xl md:text-2xl text-[var(--shell)]/85">
            Ristorante &middot; Pizzeria &middot; Saarlouis
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="h-px w-12 bg-[var(--ochre)]/60" />
            <span className="rotate-45 w-2 h-2 border border-[var(--ochre)]" />
            <span className="h-px w-12 bg-[var(--ochre)]/60" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif italic text-2xl text-[var(--ochre)] mb-4">La Casa</h3>
            <p className="font-sans text-[var(--shell)]/75 leading-relaxed text-sm md:text-base">
              Authentische italienische Küche im Herzen von Saarlouis – Pasta fresca, Pizza dal forno, dolci della casa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-serif italic text-2xl text-[var(--ochre)] mb-4">Contatto</h4>
            <div className="space-y-2 text-[var(--shell)]/75 font-sans text-sm md:text-base">
              <p>{content.footer.address}</p>
              <p>{content.footer.city}</p>
              <p>
                <a
                  href={`tel:${content.footer.phone.replace(/\s/g, '')}`}
                  className="hover:text-[var(--ochre)] transition-colors tracking-wide"
                >
                  {content.footer.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${content.footer.email}`}
                  className="hover:text-[var(--ochre)] transition-colors"
                >
                  {content.footer.email}
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-serif italic text-2xl text-[var(--ochre)] mb-4">Orari</h4>
            <div className="space-y-2 text-[var(--shell)]/75 font-sans text-sm md:text-base">
              <p className="flex justify-between gap-6">
                <span>Martedì</span>
                <span className="text-[var(--shell)]/45">Chiuso</span>
              </p>
              <p className="flex justify-between gap-6">
                <span>Mer&ndash;Lun · Pranzo</span>
                <span>11:30 – 14:30</span>
              </p>
              <p className="flex justify-between gap-6">
                <span>Mer&ndash;Lun · Cena</span>
                <span>18:00 – 22:00</span>
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-[var(--ochre)]/20 pt-8 text-center text-[var(--shell)]/60 text-xs md:text-sm font-sans"
        >
          <p className="mb-3 tracking-wide">
            &copy; {currentYear} Portocervo Saarlouis. Tutti i diritti riservati.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/impressum" className="hover:text-[var(--ochre)] transition-colors">
              Impressum
            </Link>
            <span className="text-[var(--ochre)]/40">·</span>
            <Link href="/datenschutz" className="hover:text-[var(--ochre)] transition-colors">
              Datenschutz
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
