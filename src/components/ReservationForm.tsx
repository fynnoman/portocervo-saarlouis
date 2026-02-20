'use client';

import { motion } from 'framer-motion';

export default function ReservationForm() {
  return (
    <section id="reservation" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-3 md:mb-4">
            Reservierung
          </h2>
          <div className="w-12 md:w-16 h-px bg-[#c9a961] mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Reservieren Sie jetzt Ihren Tisch
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full"
        >
          <iframe
            className="airtable-embed w-full rounded-lg shadow-lg"
            src="https://airtable.com/embed/appCyHSTqkoTLEHct/pagVu8uQdbJ7Vny3G/form"
            frameBorder="0"
            width="100%"
            height="533"
            style={{ background: 'transparent', border: '1px solid #ccc' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
