'use client';

import { motion } from 'framer-motion';

export default function Divider() {
  return (
    <section className="py-20 md:py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="flex items-center justify-center"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
            className="h-px bg-gradient-to-r from-transparent via-[var(--ochre)] to-[var(--ochre)] flex-1 origin-right"
          />

          <motion.div
            initial={{ rotate: -45, scale: 0, opacity: 0 }}
            whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.45, ease: 'easeOut' }}
            className="mx-8 relative flex items-center justify-center"
          >
            {/* Mediterranean tile cluster */}
            <span className="absolute w-10 h-10 border border-[var(--ochre)] rotate-45 opacity-30" />
            <span className="absolute w-6 h-6 border border-[var(--terracotta)] rotate-45 opacity-50" />
            <span className="w-2.5 h-2.5 bg-[var(--terracotta)] rotate-45" />
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
            className="h-px bg-gradient-to-l from-transparent via-[var(--ochre)] to-[var(--ochre)] flex-1 origin-left"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-center font-script text-4xl md:text-5xl lg:text-6xl text-[var(--terracotta-deep)] mt-10"
        >
          Tradizione &amp; Passione
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 1 }}
          className="text-center font-sans text-xs tracking-villa uppercase text-[var(--stone)] mt-4"
        >
          Cucina · Famiglia · Casa
        </motion.p>
      </div>
    </section>
  );
}
