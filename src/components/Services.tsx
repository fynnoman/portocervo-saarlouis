'use client';

import { motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';

export default function Services() {
  const content = useContent();
  const services = content.services.items;

  return (
    <section id="services" className="py-20 md:py-28 px-4 md:px-6 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.25, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-40 h-px bg-[var(--ochre)]"
      />
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.25, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-40 h-px bg-[var(--ochre)]"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="font-sans text-[0.65rem] tracking-villa uppercase text-[var(--terracotta-deep)]">
            Servizi
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--ink)] mt-3">
            <span className="italic">{content.services.title}</span>
          </h2>
          <div className="w-20 h-px bg-[var(--ochre)] mx-auto mt-5" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="text-center relative group p-8"
            >
              {/* Floating tile */}
              <motion.span
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.6 }}
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 border border-[var(--ochre)]/60 rotate-45 group-hover:border-[var(--terracotta)] transition-colors duration-500"
              />

              <h3 className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-[var(--ink)] mb-4">
                {service.title}
              </h3>
              <p className="font-sans text-base md:text-lg text-[var(--stone)] leading-relaxed max-w-md mx-auto">
                {service.description}
              </p>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--terracotta)] to-transparent mx-auto mt-7 origin-center"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
