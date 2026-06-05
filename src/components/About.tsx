'use client';

import { motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';

export default function About() {
  const content = useContent();
  return (
    <section
      id="about"
      className="py-20 md:py-28 px-4 md:px-6 relative overflow-hidden bg-paper"
    >
      {/* Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.5, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(closest-side, rgba(201,169,97,0.35), transparent)' }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.45, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(closest-side, rgba(196,98,58,0.35), transparent)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="font-sans text-[0.65rem] tracking-villa uppercase text-[var(--terracotta-deep)]">
            La Famiglia
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[var(--ink)] mt-3 mb-4">
            <span className="italic">{content.about.title}</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-[var(--ochre)]" />
            <span className="rotate-45 w-2 h-2 bg-[var(--terracotta)]" />
            <span className="h-px w-12 bg-[var(--ochre)]" />
          </div>
          <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-[var(--stone)] max-w-3xl mx-auto leading-relaxed px-4">
            {content.about.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12 text-center"
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 0.18, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="absolute -top-10 left-1/2 -translate-x-1/2 text-[8rem] md:text-[10rem] text-[var(--terracotta)] font-serif leading-none pointer-events-none"
                aria-hidden
              >
                &ldquo;
              </motion.div>

              <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-[var(--ink)] leading-relaxed relative z-10 px-4 md:px-0 max-w-3xl mx-auto">
                {content.about.intro}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 md:gap-8 max-w-5xl mx-auto pt-4">
              {content.about.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                  className="group relative px-4"
                >
                  <div className="relative inline-flex items-center justify-center mx-auto mb-5">
                    <span className="absolute inset-0 -m-3 border border-[var(--ochre)]/40 rotate-45 group-hover:border-[var(--terracotta)] group-hover:rotate-[60deg] transition-all duration-500" />
                    <span className="relative w-14 h-14 flex items-center justify-center bg-[var(--shell)] border border-[var(--ochre)]/50 rounded-full text-2xl">
                      {feature.icon}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-[var(--ink)] mb-2">{feature.title}</h3>
                  <p className="font-sans text-sm md:text-base text-[var(--stone)] leading-relaxed">
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-px bg-gradient-to-r from-transparent via-[var(--terracotta)] to-transparent origin-center mt-6 max-w-md mx-auto"
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="font-script text-3xl md:text-4xl text-[var(--terracotta)]"
            >
              La Dolce Vita
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
