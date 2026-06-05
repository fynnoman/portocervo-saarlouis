'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const cards = [
  {
    href: '/speisekarten#mittagstisch',
    eyebrow: 'Mezzogiorno',
    title: 'Mittagstisch',
    italian: 'Pranzo del Giorno',
    description: 'Täglich wechselnde Mittagsgerichte – schnell, frisch und zu fairen Preisen.',
    cta: 'Mittagstisch ansehen',
  },
  {
    href: '/speisekarten#speisekarte',
    eyebrow: 'La Carta',
    title: 'Speisekarte',
    italian: 'Tutti i Sapori',
    description: 'Unsere vollständige Karte – Pizza, Pasta, Pesce, Carne und süße Versuchungen.',
    cta: 'Speisekarte ansehen',
  },
  {
    href: '/speisekarten#empfehlungskarte',
    eyebrow: 'Specialità',
    title: 'Empfehlungskarte',
    italian: 'Dello Chef',
    description: 'Unsere aktuellen Empfehlungen – saisonale Highlights und besondere Gerichte.',
    cta: 'Empfehlungen ansehen',
  },
];

export default function MenuSection() {
  return (
    <section id="speisekarten" className="relative py-20 md:py-28 bg-paper overflow-hidden">
      {/* Sun glow */}
      <div
        aria-hidden
        className="absolute -top-32 right-[-10%] w-[520px] h-[520px] rounded-full blur-3xl opacity-50"
        style={{ background: 'radial-gradient(closest-side, rgba(201,169,97,0.45), transparent)' }}
      />
      <div
        aria-hidden
        className="absolute bottom-[-20%] left-[-10%] w-[480px] h-[480px] rounded-full blur-3xl opacity-40"
        style={{ background: 'radial-gradient(closest-side, rgba(196,98,58,0.35), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-16 eyebrow-rule" />
            <span className="font-sans text-[var(--terracotta-deep)] text-[0.65rem] tracking-villa uppercase">
              Porto Cervo · Saarlouis
            </span>
            <div className="h-px w-16 eyebrow-rule" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--ink)] mb-3">
            <span className="italic">Le Nostre</span> Carte
          </h2>
          <p className="font-script text-2xl md:text-3xl text-[var(--terracotta)] mb-4">Buon Appetito</p>
          <p className="font-sans text-[var(--stone)] leading-relaxed max-w-xl mx-auto mb-12 md:mb-14">
            Entdecken Sie unsere authentisch italienische Küche – von klassischen Mittagsgerichten bis hin zu unserer
            vollständigen Abendkarte.
          </p>

          <div className="grid md:grid-cols-3 gap-6 md:gap-7">
            {cards.map((c, i) => (
              <motion.div
                key={c.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                className="group relative bg-[var(--shell)] border border-[var(--ochre)]/25 p-8 text-left flex flex-col transition-all duration-500 hover:border-[var(--terracotta)]/55 hover:shadow-[0_30px_60px_-25px_rgba(196,98,58,0.45)] hover:-translate-y-1"
              >
                {/* Corner tile */}
                <span
                  aria-hidden
                  className="absolute top-3 right-3 w-2 h-2 rotate-45 bg-[var(--ochre)]/60 group-hover:bg-[var(--terracotta)] transition-colors duration-500"
                />
                <span className="font-sans text-[0.6rem] tracking-villa uppercase text-[var(--terracotta)] mb-3">
                  {c.eyebrow}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-[var(--ink)] leading-tight">
                  {c.title}
                </h3>
                <p className="font-script text-2xl text-[var(--ochre-deep)] mt-1 mb-4">{c.italian}</p>
                <p className="font-sans text-[var(--stone)] text-sm leading-relaxed mb-7 flex-1">
                  {c.description}
                </p>
                <Link
                  href={c.href}
                  className="inline-flex items-center gap-3 text-[var(--ink)] hover:text-[var(--terracotta)] transition-colors font-sans text-xs tracking-villa uppercase self-start border-b border-[var(--ochre)] pb-1"
                >
                  {c.cta}
                  <span
                    aria-hidden
                    className="inline-block w-1.5 h-1.5 bg-[var(--ochre)] rotate-45 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
