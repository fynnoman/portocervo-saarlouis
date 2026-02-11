'use client';

import { motion } from 'framer-motion';

const openingHours = [
  { day: 'Dienstag', hours: 'Geschlossen' },
  { day: 'Mittwoch', hours: '11:30–14:30, 18:00–22:00' },
  { day: 'Donnerstag', hours: '11:30–14:30, 18:00–22:00' },
  { day: 'Freitag', hours: '11:30–14:30, 18:00–22:00' },
  { day: 'Samstag', hours: '11:30–14:30, 18:00–22:00' },
  { day: 'Sonntag', hours: '11:30–14:30, 18:00–22:00' },
  { day: 'Montag', hours: '11:30–14:30, 18:00–22:00' },
];

export default function OpeningHours() {
  return (
    <section id="opening-hours" className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gray-100 relative overflow-hidden">
      {/* Decorative corner frames */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute top-10 left-10 w-40 h-40 border-t-2 border-l-2 border-[#c9a961]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-10 right-10 w-40 h-40 border-b-2 border-r-2 border-[#c9a961]"
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
            Öffnungszeiten
          </h2>
          <div className="w-12 md:w-16 h-px bg-[#c9a961] mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-sm shadow-lg overflow-hidden border border-gray-100"
        >
          {openingHours.map((item, index) => (
            <motion.div
              key={item.day}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`flex justify-between items-center p-4 md:p-6 ${
                index !== openingHours.length - 1 ? 'border-b border-gray-100' : ''
              } ${
                item.hours === 'Geschlossen' ? 'bg-gray-50' : 'hover:bg-gray-50'
              } transition-colors duration-300 group relative`}
            >
              {/* Hover accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#c9a961] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />
              
              <span className={`text-base md:text-lg lg:text-xl xl:text-2xl font-medium ${
                item.hours === 'Geschlossen' ? 'text-gray-400' : 'text-gray-900'
              }`}>
                {item.day}
              </span>
              <span className={`text-base md:text-lg lg:text-xl xl:text-2xl ${
                item.hours === 'Geschlossen' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {item.hours}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
