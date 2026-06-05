'use client';

import { motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';

export default function LiveEvents() {
  const content = useContent();
  const { title, backgroundImage, items } = content.liveEvents;

  return (
    <section
      id="live-events"
      className="py-20 md:py-28 px-4 md:px-6 relative overflow-hidden"
    >
      {/* Photo background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Warm wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, var(--cream) 0%, rgba(244,235,214,0.75) 25%, rgba(244,235,214,0.55) 50%, rgba(244,235,214,0.75) 75%, var(--cream) 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 50%, transparent, rgba(244,235,214,0.55))',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="font-sans text-[0.65rem] tracking-villa uppercase text-[var(--terracotta-deep)]">
            Eventi · Musica · Cultura
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--ink)] mt-3">
            <span className="italic">{title}</span>
          </h2>
          <div className="w-16 h-px bg-[var(--ochre)] mx-auto mt-5" />
          <p className="font-script text-3xl text-[var(--terracotta)] mt-4">Buona Serata</p>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {items.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="relative group bg-[var(--shell)]/85 backdrop-blur-sm border border-[var(--ochre)]/25 p-7 md:p-9 hover:border-[var(--terracotta)]/55 hover:shadow-[0_30px_60px_-30px_rgba(196,98,58,0.35)] transition-all duration-500"
            >
              <span
                aria-hidden
                className="absolute -top-2 left-7 w-3 h-3 rotate-45 bg-[var(--shell)] border-t border-l border-[var(--ochre)]/40 group-hover:border-[var(--terracotta)] transition-colors duration-500"
              />

              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-serif text-3xl md:text-4xl text-[var(--ochre)] opacity-50 leading-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-[var(--ink)] group-hover:text-[var(--terracotta)] transition-colors leading-tight">
                  {event.title}
                </h3>
              </div>

              {event.highlight && (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 + 0.2 }}
                  className="font-script text-xl md:text-2xl text-[var(--terracotta)] mb-3"
                >
                  {event.highlight}
                </motion.p>
              )}

              <p className="font-sans text-base md:text-lg text-[var(--stone)] leading-relaxed">
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 md:mt-16 text-center"
        >
          <p className="font-serif italic text-lg md:text-xl lg:text-2xl text-[var(--ink)] leading-relaxed mb-6">
            Informieren Sie sich über aktuelle Termine
          </p>
          <motion.a
            href="tel:068312747"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-4 bg-[var(--terracotta)] text-[var(--shell)] hover:bg-[var(--terracotta-deep)] transition-all duration-300 shadow-[0_18px_40px_-15px_rgba(196,98,58,0.6)] uppercase tracking-villa text-xs font-medium"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372a1.125 1.125 0 00-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a.75.75 0 01-.83.273 12.054 12.054 0 01-5.83-5.831.75.75 0 01.273-.829l1.293-.971a1.125 1.125 0 00.417-1.173L6.328 4.677A1.125 1.125 0 005.237 3.825H3.864a2.25 2.25 0 00-2.25 2.25v.675z" />
            </svg>
            06831 2747
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
