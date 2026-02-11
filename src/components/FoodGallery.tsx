'use client';

import { motion } from 'framer-motion';

export default function FoodGallery() {
  const categories = [
    {
      name: 'Pizza',
      gradient: 'from-orange-50 to-red-50',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 7L12 12V22" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12L22 7L12 22V12Z" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="8" cy="10" r="1" fill="currentColor"/>
          <circle cx="16" cy="10" r="1" fill="currentColor"/>
          <circle cx="12" cy="16" r="1" fill="currentColor"/>
        </svg>
      ),
    },
    {
      name: 'Pasta',
      gradient: 'from-yellow-50 to-amber-50',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 8C4 8 6 6 8 8C10 10 10 8 12 8C14 8 14 10 16 8C18 6 20 8 20 8" strokeLinecap="round"/>
          <path d="M4 12C4 12 6 10 8 12C10 14 10 12 12 12C14 12 14 14 16 12C18 10 20 12 20 12" strokeLinecap="round"/>
          <path d="M4 16C4 16 6 14 8 16C10 18 10 16 12 16C14 16 14 18 16 16C18 14 20 16 20 16" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      name: 'Salate',
      gradient: 'from-emerald-50 to-green-50',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2C12 2 8 4 8 8C8 10 9 11 10 12C9 13 8 14 8 16C8 20 12 22 12 22C12 22 16 20 16 16C16 14 15 13 14 12C15 11 16 10 16 8C16 4 12 2 12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8C10 8 8 10 8 12" strokeLinecap="round"/>
          <path d="M12 8C14 8 16 10 16 12" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      name: 'Fleisch',
      gradient: 'from-rose-50 to-red-50',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 8L8 6L16 14L14 16L6 8Z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 4L12 2L20 10L18 12L10 4Z" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="8" cy="16" r="6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      name: 'Desserts',
      gradient: 'from-pink-50 to-purple-50',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="6" y="12" width="12" height="8" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 12L8 8L10 10L12 6L14 10L16 8L18 12" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="6" y1="16" x2="18" y2="16" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      name: 'Weine',
      gradient: 'from-purple-50 to-indigo-50',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 2H16V8C16 11 14 13 12 13C10 13 8 11 8 8V2Z" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="12" y1="13" x2="12" y2="20" strokeLinecap="round"/>
          <line x1="9" y1="20" x2="15" y2="20" strokeLinecap="round"/>
          <line x1="8" y1="5" x2="16" y2="5" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-3 md:mb-4 px-4">
            Unsere Küche
          </h2>
          <div className="w-16 md:w-24 h-px bg-[#c9a961] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative aspect-square rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 bg-gradient-to-br ${category.gradient} flex flex-col items-center justify-center cursor-pointer hover:-translate-y-2 border border-gray-200`}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="text-gray-600 group-hover:text-[#c9a961] transition-colors mb-2 md:mb-3"
              >
                {category.icon}
              </motion.div>
              <h3 className="text-sm md:text-base lg:text-lg xl:text-xl font-medium text-gray-700 group-hover:text-[#c9a961] transition-colors text-center px-1">
                {category.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
