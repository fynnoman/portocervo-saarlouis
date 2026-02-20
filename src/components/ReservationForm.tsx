'use client';

import { motion } from 'framer-motion';
import { useConsent } from '@/components/CookieBanner';

export default function ReservationForm() {
  const consent = useConsent();

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
          {consent === 'accepted' ? (
            <iframe
              className="airtable-embed w-full rounded-lg shadow-lg"
              src="https://airtable.com/embed/appCyHSTqkoTLEHct/pagVu8uQdbJ7Vny3G/form"
              frameBorder="0"
              width="100%"
              height="533"
              style={{ background: 'transparent', border: '1px solid #ccc' }}
            />
          ) : (
            <div className="w-full h-64 bg-gray-50 border border-gray-200 rounded-lg flex flex-col items-center justify-center gap-4 px-6 text-center" style={{ minHeight: 280 }}>
              <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-500 text-sm max-w-xs" style={{ fontFamily: 'system-ui, sans-serif' }}>
                Das Reservierungsformular wird erst nach Ihrer Cookie-Zustimmung geladen.
              </p>
              <p className="text-gray-400 text-xs" style={{ fontFamily: 'system-ui, sans-serif' }}>
                Alternativ können Sie uns direkt anrufen:{' '}
                <a href="tel:068312747" className="text-[#c9a961] hover:underline">06831 2747</a>
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
