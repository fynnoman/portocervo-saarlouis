'use client';

import { motion } from 'framer-motion';

export default function Events() {
  return (
    <section 
      id="events" 
      className="py-12 md:py-16 lg:py-20 px-4 md:px-6 relative overflow-hidden"
    >
      {/* Background Image with 50% opacity */}
      <div 
        className="absolute inset-0 opacity-50 z-0"
        style={{
          backgroundImage: 'url(/3860D51A-1058-4810-9CBE-7C4FCBA95881.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light text-gray-900 mb-3 md:mb-4 px-4">
            Feiern & Events
          </h2>
          <div className="w-12 md:w-16 h-px bg-[#c9a961] mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto px-4">
            Feiern Sie Ihre besonderen Momente in unserem Restaurant – 
            wir sorgen für den perfekten Rahmen für Ihre Veranstaltung.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-6 md:p-8 rounded-sm border-l-4 border-[#c9a961] hover:shadow-lg transition-all duration-300 relative group overflow-hidden"
          >
            {/* Subtle background pattern on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#c9a961]/0 to-[#c9a961]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 mb-4 md:mb-6">
                Wir bieten an
              </h3>
              <ul className="space-y-3 md:space-y-4">
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start text-base md:text-lg lg:text-xl text-gray-700"
                >
                  <span className="text-[#c9a961] mr-3 text-xl md:text-2xl">•</span>
                  Geburtstagsfeiern
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start text-base md:text-lg lg:text-xl text-gray-700"
                >
                  <span className="text-[#c9a961] mr-3 text-xl md:text-2xl">•</span>
                  Firmenfeiern
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start text-base md:text-lg lg:text-xl text-gray-700"
                >
                  <span className="text-[#c9a961] mr-3 text-xl md:text-2xl">•</span>
                  Familienfeste
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex items-start text-base md:text-lg lg:text-xl text-gray-700"
                >
                  <span className="text-[#c9a961] mr-3 text-xl md:text-2xl">•</span>
                  Private Veranstaltungen
                </motion.li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-sm border-l-4 border-[#c9a961] hover:shadow-lg transition-all duration-300 relative group overflow-hidden"
          >
            {/* Subtle background pattern on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#c9a961]/0 to-[#c9a961]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                Kontaktieren Sie uns
              </h3>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                Für individuelle Anfragen und Planungen stehen wir Ihnen gerne zur Verfügung.
              </p>
              <div className="space-y-4">
                <motion.a
                  href="tel:068312747"
                  whileHover={{ x: 5 }}
                  className="flex items-center text-lg md:text-xl text-[#c9a961] hover:text-[#b89951] transition-colors font-medium"
                >
                  <span className="mr-2">📞</span>
                  06831 2747
                </motion.a>
                <motion.p
                  whileHover={{ x: 5 }}
                  className="flex items-start text-lg md:text-xl text-gray-700"
                >
                  <span className="mr-2">📍</span>
                  Lothringer Str. 1, 66740 Saarlouis
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
