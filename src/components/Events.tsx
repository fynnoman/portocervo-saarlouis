'use client';

import { motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';

export default function Events() {
  const content = useContent();
  const ev = content.events;

  return (
    <section
      id="events"
      className="py-20 md:py-28 px-4 md:px-6 relative overflow-hidden"
    >
      {/* Background photo */}
      <div
        className="absolute inset-0 opacity-35 z-0"
        style={{
          backgroundImage: `url(${ev.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Warm gradient wash */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(180deg, var(--cream) 0%, rgba(244,235,214,0.85) 25%, rgba(244,235,214,0.65) 50%, rgba(244,235,214,0.85) 75%, var(--cream) 100%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="font-sans text-[0.65rem] tracking-villa uppercase text-[var(--terracotta-deep)]">
            Festeggiamenti
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--ink)] mt-3">
            <span className="italic">{ev.title}</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5 mb-6">
            <span className="h-px w-12 bg-[var(--ochre)]" />
            <span className="rotate-45 w-2 h-2 bg-[var(--terracotta)]" />
            <span className="h-px w-12 bg-[var(--ochre)]" />
          </div>
          <p className="font-serif italic text-lg md:text-xl lg:text-2xl text-[var(--stone)] leading-relaxed max-w-3xl mx-auto px-4">
            {ev.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-[var(--shell)]/95 backdrop-blur-sm p-8 md:p-10 border border-[var(--ochre)]/30 group overflow-hidden hover:shadow-[0_30px_60px_-30px_rgba(196,98,58,0.35)] transition-all duration-500"
          >
            <span
              aria-hidden
              className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-[var(--terracotta)] via-[var(--ochre)] to-transparent"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--terracotta)]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <p className="font-sans text-[0.65rem] tracking-villa uppercase text-[var(--terracotta-deep)] mb-2">
                La Nostra Offerta
              </p>
              <h3 className="font-serif italic text-3xl md:text-4xl text-[var(--ink)] mb-6">
                Wir bieten an
              </h3>
              <ul className="space-y-4">
                {ev.offers.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * i }}
                    className="flex items-start text-base md:text-lg text-[var(--ink)] font-sans"
                  >
                    <span
                      aria-hidden
                      className="mt-2 mr-3 w-1.5 h-1.5 rotate-45 bg-[var(--terracotta)] flex-shrink-0"
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-[var(--shell)]/95 backdrop-blur-sm p-8 md:p-10 border border-[var(--ochre)]/30 group overflow-hidden hover:shadow-[0_30px_60px_-30px_rgba(196,98,58,0.35)] transition-all duration-500"
          >
            <span
              aria-hidden
              className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-[var(--ochre)] via-[var(--terracotta)] to-transparent"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--ochre)]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <p className="font-sans text-[0.65rem] tracking-villa uppercase text-[var(--terracotta-deep)] mb-2">
                Occasioni Speciali
              </p>
              <h3 className="font-serif italic text-3xl md:text-4xl text-[var(--ink)] mb-6">
                Anlässe
              </h3>
              <ul className="space-y-4 mb-8">
                {ev.occasions.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * i }}
                    className="flex items-start text-base md:text-lg text-[var(--ink)] font-sans"
                  >
                    <span
                      aria-hidden
                      className="mt-2 mr-3 w-1.5 h-1.5 rotate-45 bg-[var(--ochre)] flex-shrink-0"
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div className="border-t border-[var(--ochre)]/25 pt-5 space-y-2 font-sans text-sm md:text-base">
                <a
                  href={`tel:${content.footer.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-[var(--terracotta)] hover:text-[var(--terracotta-deep)] transition-colors font-medium tracking-wide"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372a1.125 1.125 0 00-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a.75.75 0 01-.83.273 12.054 12.054 0 01-5.83-5.831.75.75 0 01.273-.829l1.293-.971a1.125 1.125 0 00.417-1.173L6.328 4.677A1.125 1.125 0 005.237 3.825H3.864a2.25 2.25 0 00-2.25 2.25v.675z" />
                  </svg>
                  {content.footer.phone}
                </a>
                <p className="flex items-start gap-2 text-[var(--stone)]">
                  <svg className="w-4 h-4 mt-0.5 text-[var(--ochre)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  {content.footer.address}, {content.footer.city}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
