'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useContent } from '@/hooks/useContent';

export default function RestaurantImage() {
  const content = useContent();

  return (
    <section id="restaurant-image" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-12 bg-[var(--ochre)]/60" />
            <span className="font-sans text-[0.65rem] tracking-villa uppercase text-[var(--terracotta-deep)]">
              La Casa
            </span>
            <span className="h-px w-12 bg-[var(--ochre)]/60" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--ink)]">
            <span className="italic">{content.restaurantImage.heading}</span>
          </h2>
          <p className="font-script text-2xl md:text-3xl text-[var(--terracotta)] mt-2">
            Benvenuti a casa
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative group"
        >
          {/* Decorative double frame */}
          <div className="absolute -inset-3 md:-inset-5 border border-[var(--ochre)]/40 pointer-events-none" />
          <div className="absolute -inset-1.5 md:-inset-2.5 border border-[var(--terracotta)]/30 pointer-events-none" />

          {/* Corner accents */}
          <span className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[var(--terracotta)] z-10" />
          <span className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[var(--terracotta)] z-10" />
          <span className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-[var(--terracotta)] z-10" />
          <span className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[var(--terracotta)] z-10" />

          <div className="relative aspect-[16/10] overflow-hidden shadow-[0_40px_80px_-30px_rgba(30,26,20,0.55)]">
            <Image
              src={content.restaurantImage.image}
              alt="Restaurant Portocervo"
              fill
              className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              quality={90}
              priority
            />
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, transparent 50%, rgba(30,26,20,0.45) 100%)',
              }}
            />
            <div className="absolute bottom-5 left-5 md:bottom-7 md:left-8 text-[var(--shell)]">
              <p className="font-script text-2xl md:text-3xl drop-shadow">Saarlouis</p>
              <p className="font-sans text-[0.65rem] tracking-villa uppercase text-[var(--shell)]/80">
                Lothringer Str. 1
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
