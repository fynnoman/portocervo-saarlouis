'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MenuSection() {
  return (
    <section id="speisekarten" className="py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#c9a961]" />
            <span className="text-[#c9a961] text-sm tracking-[0.3em] uppercase font-light">Porto Cervo</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#c9a961]" />
          </div>

          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Unsere Speisekarten
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-xl mx-auto mb-10">
            Entdecken Sie unsere authentisch italienische Küche – von klassischen Mittagsgerichten bis hin zu unserer vollständigen Abendkarte.
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-left group hover:border-[#c9a961]/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 mb-4 text-[#c9a961]">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1M4.22 4.22l.707.707m12.02 12.02.708.708M1 12h1m20 0h1M4.22 19.78l.707-.707M18.95 5.636l.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Mittagstisch</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Täglich wechselnde Mittagsgerichte – schnell, frisch und zu fairen Preisen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-left group hover:border-[#c9a961]/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 mb-4 text-[#c9a961]">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Speisekarte</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Unsere vollständige Karte mit Pizza, Pasta, Fleisch- und Fischgerichten sowie Desserts.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/speisekarten"
              className="inline-flex items-center gap-3 bg-[#c9a961] hover:bg-[#b8963a] text-white px-8 py-4 rounded-full text-sm tracking-widest uppercase font-medium transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Speisekarten ansehen
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
