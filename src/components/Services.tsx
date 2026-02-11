'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Sitzplätze im Freien',
    description: 'Genießen Sie Ihr Essen in unserem schönen Außenbereich',
  },
  {
    title: 'Speisekarte für Kinder',
    description: 'Spezielle Gerichte für unsere kleinen Gäste',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gray-100 relative overflow-hidden">
      {/* Decorative side lines */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-px bg-[#c9a961]"
      />
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-px bg-[#c9a961]"
      />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-4">
            Unsere Serviceoptionen
          </h2>
          <div className="w-16 h-px bg-[#c9a961] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center relative group"
            >
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 border-t-2 border-l-2 border-[#c9a961] opacity-0 group-hover:opacity-30 transition-opacity duration-300 -translate-y-4" />
              
              <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                {service.description}
              </p>
              
              {/* Bottom accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="w-12 h-px bg-[#c9a961] mx-auto mt-6 origin-center"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
