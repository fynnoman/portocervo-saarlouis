'use client';

import { motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';

export default function Events() {
  const content = useContent();
  const ev = content.events;

  return (
    <section 
      id="events" 
      className="py-12 md:py-16 lg:py-20 px-4 md:px-6 relative overflow-hidden"
    >
      {/* Background Image with 50% opacity */}
      <div 
        className="absolute inset-0 opacity-50 z-0"
        style={{
          backgroundImage: `url(${ev.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient overlays to fade top and bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-transparent to-gray-100 z-0"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light text-gray-900 mb-3 md:mb-4 px-4">
            {ev.title}
          </h2>
          <div className="w-12 md:w-16 h-px bg-[#c9a961] mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto px-4">
            {ev.subtitle}
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
                {ev.offers.map((item, i) => (
                  <motion.li key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-start text-base md:text-lg lg:text-xl text-gray-700"
                  >
                    <span className="text-[#c9a961] mr-3 text-xl md:text-2xl">•</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-6 md:p-8 rounded-sm border-l-4 border-[#c9a961] hover:shadow-lg transition-all duration-300 relative group overflow-hidden"
          >
            {/* Subtle background pattern on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#c9a961]/0 to-[#c9a961]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 mb-4 md:mb-6">
                Anlässe
              </h3>
              <ul className="space-y-3 md:space-y-4">
                {ev.occasions.map((item, i) => (
                  <motion.li key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-start text-base md:text-lg lg:text-xl text-gray-700"
                  >
                    <span className="text-[#c9a961] mr-3 text-xl md:text-2xl">•</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <div className="mt-6 space-y-3">
                <a href={`tel:${content.footer.phone.replace(/\s/g,'')}`}
                  className="flex items-center text-base md:text-lg text-[#c9a961] hover:text-[#b89951] transition-colors font-medium"
                >
                  <span className="mr-2">📞</span>{content.footer.phone}
                </a>
                <p className="flex items-start text-base md:text-lg text-gray-700">
                  <span className="mr-2">📍</span>
                  {content.footer.address}, {content.footer.city}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
