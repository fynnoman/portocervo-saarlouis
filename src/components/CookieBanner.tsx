'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Consent Context ──────────────────────────────────────────────────────────
type ConsentState = 'accepted' | 'necessary' | null;

const ConsentContext = createContext<ConsentState>(null);

export function useConsent() {
  return useContext(ConsentContext);
}

// ─── Provider (wraps the whole app in layout.tsx) ─────────────────────────────
export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('cookieConsent') as ConsentState;
    if (stored) {
      setConsent(stored);
    } else {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setConsent('accepted');
    setVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setConsent('necessary');
    setVisible(false);
  };

  return (
    <ConsentContext.Provider value={consent}>
      {children}

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
            role="dialog"
            aria-label="Cookie-Einstellungen"
            aria-modal="true"
          >
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-6 md:p-8">
                {/* Icon & Text */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#c9a961]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-[#c9a961]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="text-base font-semibold text-gray-900" style={{ fontFamily: 'system-ui, sans-serif' }}>
                      Datenschutz-Einstellungen
                    </h2>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif' }}>
                    Wir verwenden technisch notwendige Cookies. Für das Reservierungsformular (Airtable) und
                    die Karte (Google Maps) werden Daten an Server in den USA übertragen. Diese Dienste werden
                    erst nach Ihrer Zustimmung geladen. Weitere Infos:{' '}
                    <Link href="/datenschutz" className="text-[#c9a961] hover:underline font-medium">
                      Datenschutzerklärung
                    </Link>
                    .
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full md:w-auto">
                  <button
                    onClick={acceptNecessary}
                    className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors border border-gray-300"
                    style={{ fontFamily: 'system-ui, sans-serif' }}
                  >
                    Nur notwendige
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-5 py-2.5 text-sm font-medium text-white bg-[#c9a961] hover:bg-[#b8963a] rounded-lg transition-colors shadow-md"
                    style={{ fontFamily: 'system-ui, sans-serif' }}
                  >
                    Alle akzeptieren
                  </button>
                </div>
              </div>

              {/* Bottom detail bar */}
              <div className="px-6 md:px-8 py-3 bg-gray-50 border-t border-gray-100 flex flex-wrap gap-x-6 gap-y-1">
                <span className="text-xs text-gray-500" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  🔒 Technisch notwendig – immer aktiv
                </span>
                <span className="text-xs text-gray-500" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  🗺️ Google Maps – nur nach Zustimmung
                </span>
                <span className="text-xs text-gray-500" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  📋 Airtable – nur nach Zustimmung
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ConsentContext.Provider>
  );
}

// Legacy default export so existing import in layout.tsx keeps working
export default function CookieBanner() {
  return null; // replaced by ConsentProvider
}
