'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gradient-to-b from-gray-100 via-gray-100 to-gray-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.03, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c9a961] rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.03, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#c9a961] rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light text-gray-900 mb-3 md:mb-4">
            Über Uns
          </h2>
          <div className="w-12 md:w-16 h-px bg-[#c9a961] mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Tradition trifft auf Leidenschaft – Willkommen in unserem italienischen Restaurant
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image Section with decorative frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-4 border-2 border-[#c9a961] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="absolute -inset-2 border border-[#c9a961] opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            
            {/* Placeholder container with sophisticated styling */}
            <div className="relative overflow-hidden rounded-sm shadow-2xl aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-700">
              <div className="text-center px-8">
                <div className="text-6xl mb-4 text-[#c9a961] opacity-30">🍝</div>
                <p className="text-xl md:text-2xl text-gray-400 font-light">Restaurant Portocervo</p>
              </div>
              
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#c9a961]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Corner accents */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-[#c9a961]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-[#c9a961]"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="relative">
              {/* Decorative quote mark */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 0.1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute -top-8 -left-4 text-9xl text-[#c9a961] font-serif leading-none"
              >
                "
              </motion.div>
              
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed relative z-10 mb-4 md:mb-6 px-4 md:px-0">
                Im Herzen von Saarlouis servieren wir authentische italienische Küche 
                mit Liebe zum Detail und höchster Qualität.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#c9a961] bg-opacity-10 rounded-full flex items-center justify-center mr-4 group-hover:bg-opacity-20 transition-all duration-300">
                  <span className="text-2xl">🥬</span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-900 mb-2">
                    Frische Zutaten
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed">
                    Wir verwenden nur die besten und frischesten Zutaten für unsere Gerichte
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#c9a961] bg-opacity-10 rounded-full flex items-center justify-center mr-4 group-hover:bg-opacity-20 transition-all duration-300">
                  <span className="text-2xl">🍝</span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-900 mb-2">
                    Italienische Tradition
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed">
                    Unsere Rezepte basieren auf authentischer italienischer Kochkunst
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#c9a961] bg-opacity-10 rounded-full flex items-center justify-center mr-4 group-hover:bg-opacity-20 transition-all duration-300">
                  <span className="text-2xl">❤️</span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-900 mb-2">
                    Mit Herz & Seele
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed">
                    Jedes Gericht wird mit Leidenschaft und Hingabe zubereitet
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Decorative bottom accent */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-1 bg-gradient-to-r from-[#c9a961] to-transparent origin-left mt-8"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
