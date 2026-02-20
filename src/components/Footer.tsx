'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-playfair font-light mb-4">Portocervo</h3>
            <p className="text-gray-400 leading-relaxed">
              Italienische Küche in Saarlouis
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-medium mb-4">Kontakt</h4>
            <div className="space-y-2 text-gray-400">
              <p>Lothringer Str. 1</p>
              <p>66740 Saarlouis</p>
              <p>
                <a href="tel:068312747" className="hover:text-[#c9a961] transition-colors">
                  06831 2747
                </a>
              </p>
              <p>
                <a href="mailto:portocervo.saarlouis@gmail.com" className="hover:text-[#c9a961] transition-colors">
                  portocervo.saarlouis@gmail.com
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-medium mb-4">Öffnungszeiten</h4>
            <div className="space-y-2 text-gray-400">
              <p>Di: Geschlossen</p>
              <p>Mi–Mo: 11:30–14:30</p>
              <p>Mi–Mo: 18:00–22:00</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm"
        >
          <p className="mb-3">&copy; {currentYear} Portocervo Saarlouis. Alle Rechte vorbehalten.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/impressum" className="hover:text-[#c9a961] transition-colors">Impressum</Link>
            <span>·</span>
            <Link href="/datenschutz" className="hover:text-[#c9a961] transition-colors">Datenschutz</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
