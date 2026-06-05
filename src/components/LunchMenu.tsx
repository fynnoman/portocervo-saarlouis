'use client';

import { motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';

const italianNames: Record<string, string> = {
  Pizza: 'Pizza dal Forno',
  Pasta: 'Pasta Fresca',
  Salate: 'Insalate',
  Fleischgerichte: 'Carne',
  Desserts: 'Dolci',
};

export default function LunchMenu() {
  const content = useContent();
  const { title, subtitle, categories } = content.lunchMenu;

  return (
    <section id="lunch-menu" className="py-20 md:py-28 px-4 md:px-6 relative overflow-hidden bg-paper-deep">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.18 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-10 right-10 w-72 h-72 rounded-full border-2 border-[var(--ochre)] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.18 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute bottom-10 left-10 w-56 h-56 rounded-full border-2 border-[var(--terracotta)] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.12 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.4 }}
        className="absolute top-1/3 left-1/4 w-40 h-40 rotate-45 border border-[var(--ochre)] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="font-sans text-[0.65rem] tracking-villa uppercase text-[var(--terracotta-deep)]">
            La Cucina
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--ink)] mt-3">
            <span className="italic">{title}</span>
          </h2>
          <div className="w-16 h-px bg-[var(--ochre)] mx-auto mt-5 mb-6" />
          <p className="font-serif italic text-lg md:text-xl lg:text-2xl text-[var(--stone)] max-w-3xl mx-auto leading-relaxed px-4">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8 mb-8"
        >
          {categories.slice(0, 3).map((category, index) => (
            <CategoryCard key={index} category={category} index={index} italian={italianNames[category.name]} />
          ))}
        </motion.div>

        {categories.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8 max-w-4xl mx-auto"
          >
            {categories.slice(3).map((category, index) => (
              <CategoryCard
                key={index + 3}
                category={category}
                index={index + 3}
                italian={italianNames[category.name]}
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

function CategoryCard({
  category,
  index,
  italian,
}: {
  category: { icon: string; name: string; description: string };
  index: number;
  italian?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative bg-[var(--shell)] p-8 md:p-10 border border-[var(--ochre)]/25 hover:border-[var(--terracotta)]/55 transition-all duration-500 text-center hover:-translate-y-1 hover:shadow-[0_30px_60px_-25px_rgba(196,98,58,0.4)]"
    >
      {/* Corner tile */}
      <span
        aria-hidden
        className="absolute top-3 left-3 w-2 h-2 rotate-45 border border-[var(--ochre)]/60 group-hover:border-[var(--terracotta)] group-hover:rotate-90 transition-all duration-500"
      />
      <span
        aria-hidden
        className="absolute bottom-3 right-3 w-2 h-2 rotate-45 border border-[var(--ochre)]/60 group-hover:border-[var(--terracotta)] group-hover:rotate-90 transition-all duration-500"
      />

      <motion.div
        whileHover={{ scale: 1.15, rotate: 6 }}
        transition={{ duration: 0.4 }}
        className="text-5xl md:text-6xl mb-4"
      >
        {category.icon}
      </motion.div>
      <h3 className="font-serif text-2xl md:text-3xl text-[var(--ink)] mb-1 group-hover:text-[var(--terracotta)] transition-colors duration-300">
        {category.name}
      </h3>
      {italian && (
        <p className="font-script text-xl text-[var(--ochre-deep)] mb-4">{italian}</p>
      )}
      <p className="font-sans text-sm md:text-base text-[var(--stone)] leading-relaxed">
        {category.description}
      </p>
    </motion.div>
  );
}
