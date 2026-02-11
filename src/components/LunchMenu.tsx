'use client';

import { motion } from 'framer-motion';

const menuCategories = [
  {
    icon: '🍕',
    name: 'Pizza',
    description: 'Knuspriger Teig, frische Zutaten, traditionell im Steinofen gebacken',
  },
  {
    icon: '🍝',
    name: 'Pasta',
    description: 'Hausgemachte Nudeln nach authentischen italienischen Rezepten',
  },
  {
    icon: '🥗',
    name: 'Salate',
    description: 'Frische, knackige Salate mit mediterranem Dressing',
  },
  {
    icon: '🥩',
    name: 'Fleischgerichte',
    description: 'Zarte Fleischspezialitäten, meisterhaft zubereitet',
  },
  {
    icon: '🍰',
    name: 'Desserts',
    description: 'Süße Verführungen für den perfekten Abschluss',
  },
];

export default function LunchMenu() {
  return (
    <section id="lunch-menu" className="py-12 md:py-16 lg:py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-10 right-10 w-72 h-72 rounded-full border-2 border-[#c9a961]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-10 left-10 w-56 h-56 rounded-full border-2 border-[#c9a961]"
      />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light text-gray-900 mb-3 md:mb-4 px-4">
            Unser Kulinarisches Angebot
          </h2>
          <div className="w-12 md:w-16 h-px bg-[#c9a961] mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Was Sie bei uns finden werden
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8"
        >
          {menuCategories.slice(0, 3).map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
              className="bg-white p-6 md:p-8 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-transparent hover:border-[#c9a961] text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4"
              >
                {category.icon}
              </motion.div>
              <h3 className="text-xl md:text-2xl lg:text-3xl text-gray-900 font-medium mb-2 md:mb-3 group-hover:text-[#c9a961] transition-colors duration-300">
                {category.name}
              </h3>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed">
                {category.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Zentrierte untere Reihe */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto"
        >
          {menuCategories.slice(3, 5).map((category, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 3) * 0.08, ease: "easeOut" }}
              className="bg-white p-6 md:p-8 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-transparent hover:border-[#c9a961] text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4"
              >
                {category.icon}
              </motion.div>
              <h3 className="text-xl md:text-2xl lg:text-3xl text-gray-900 font-medium mb-2 md:mb-3 group-hover:text-[#c9a961] transition-colors duration-300">
                {category.name}
              </h3>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed">
                {category.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-8 md:mt-12 lg:mt-16 text-center px-4"
        >
          <div className="inline-block">
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed mb-2">
              Alle Gerichte werden mit{' '}
              <span className="text-[#c9a961] font-medium">Leidenschaft</span> und{' '}
              <span className="text-[#c9a961] font-medium">Liebe zum Detail</span> zubereitet
            </p>
            <div className="w-24 h-px bg-[#c9a961] mx-auto mt-4"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
