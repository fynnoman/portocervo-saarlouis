'use client';

import { motion } from 'framer-motion';

export default function Map() {
  const address = "Lothringer Str. 1, 66740 Saarlouis";
  const googleMapsUrl = "https://www.google.com/maps/place/Lothringer+Str.+1,+66740+Saarlouis";
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2582.7!2d6.7505!3d49.3145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795b1b5e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sLothringer%20Str.%201%2C%2066740%20Saarlouis!5e0!3m2!1sde!2sde!4v1234567890";

  return (
    <section id="map" className="relative py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gray-100 overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-10 left-10 w-64 h-64 border-2 border-[#c9a961] rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute bottom-10 right-10 w-48 h-48 border-2 border-[#c9a961] rounded-full"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light text-gray-900 mb-3 md:mb-4 px-4">
            Besuchen Sie uns
          </h2>
          <div className="w-12 md:w-16 h-px bg-[#c9a961] mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-2xl mx-auto px-4">
            Finden Sie den Weg zu unserem Restaurant
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          {/* Decorative frame */}
          <div className="absolute -inset-4 border-2 border-[#c9a961] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          <div className="absolute -inset-2 border border-[#c9a961] opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
          
          {/* Corner accents */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-[#c9a961] z-10"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-[#c9a961] z-10"
          />

          {/* Map iframe */}
          <div className="relative rounded-sm overflow-hidden shadow-2xl h-[350px] md:h-[450px] lg:h-[500px]">
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Portocervo Standort"
            />
          </div>
        </motion.div>

        {/* Address and Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 md:mt-12 text-center space-y-4 md:space-y-6"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 px-4">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-[#c9a961] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700">{address}</p>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-[#c9a961] text-white rounded-sm hover:bg-[#b89451] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span className="font-light text-base md:text-lg tracking-wide">In Google Maps öffnen</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
