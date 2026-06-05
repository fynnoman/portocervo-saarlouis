'use client';

import { motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';

const dayToItalian: Record<string, string> = {
  Montag: 'Lunedì',
  Dienstag: 'Martedì',
  Mittwoch: 'Mercoledì',
  Donnerstag: 'Giovedì',
  Freitag: 'Venerdì',
  Samstag: 'Sabato',
  Sonntag: 'Domenica',
};

export default function OpeningHours() {
  const content = useContent();
  const openingHours = content.openingHours.rows;
  return (
    <section
      id="opening-hours"
      className="py-20 md:py-28 px-4 md:px-6 relative overflow-hidden"
    >
      {/* Corner frames */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.25, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute top-10 left-6 md:left-16 w-32 h-32 md:w-40 md:h-40 border-t-2 border-l-2 border-[var(--ochre)] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.25, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-10 right-6 md:right-16 w-32 h-32 md:w-40 md:h-40 border-b-2 border-r-2 border-[var(--ochre)] pointer-events-none"
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
            Orari di Apertura
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--ink)] mt-3">
            <span className="italic">Öffnungszeiten</span>
          </h2>
          <div className="w-16 h-px bg-[var(--ochre)] mx-auto mt-5" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-[var(--shell)] border border-[var(--ochre)]/30 shadow-[0_30px_60px_-30px_rgba(30,26,20,0.35)] overflow-hidden"
        >
          {/* Decorative tile band */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{
              background:
                'repeating-linear-gradient(45deg, var(--ochre) 0 8px, transparent 8px 16px, var(--terracotta) 16px 24px, transparent 24px 32px)',
              opacity: 0.55,
            }}
          />

          {openingHours.map((item, index) => {
            const closed = item.hours === 'Geschlossen';
            const italian = dayToItalian[item.day];
            return (
              <motion.div
                key={item.day}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`flex justify-between items-baseline gap-4 px-5 md:px-8 py-4 md:py-5 ${
                  index !== openingHours.length - 1 ? 'border-b border-[var(--ochre)]/15' : ''
                } ${closed ? 'bg-[var(--parchment)]/60' : 'hover:bg-[var(--parchment)]/40'} transition-colors duration-300 group relative`}
              >
                <span
                  className={`absolute left-0 top-0 bottom-0 w-1 ${
                    closed ? 'bg-[var(--terracotta)]/40' : 'bg-[var(--terracotta)]'
                  } scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center`}
                />

                <div className="flex flex-col">
                  <span
                    className={`font-serif text-lg md:text-2xl ${
                      closed ? 'text-[var(--stone)]/70' : 'text-[var(--ink)]'
                    }`}
                  >
                    {item.day}
                  </span>
                  {italian && (
                    <span className="font-script text-base md:text-lg text-[var(--ochre-deep)] -mt-1">
                      {italian}
                    </span>
                  )}
                </div>

                <span
                  className={`font-sans text-sm md:text-lg text-right tracking-wide ${
                    closed ? 'text-[var(--stone)]/70 italic' : 'text-[var(--stone)]'
                  }`}
                >
                  {closed ? 'Chiuso · Ruhetag' : item.hours}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center font-script text-2xl md:text-3xl text-[var(--terracotta)] mt-8"
        >
          Vi aspettiamo
        </motion.p>
      </div>
    </section>
  );
}
