'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ReservationForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      date: (form.elements.namedItem('date') as HTMLInputElement).value,
      time: (form.elements.namedItem('time') as HTMLInputElement).value,
      guests: (form.elements.namedItem('guests') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        const json = await res.json();
        setErrorMsg(json.error || 'Ein Fehler ist aufgetreten.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Verbindung fehlgeschlagen. Bitte versuchen Sie es erneut.');
      setStatus('error');
    }
  }

  return (
    <section id="reservation" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 md:px-6">
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
        >
          {status === 'success' ? (
            <div className="text-center py-16 px-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="w-16 h-16 bg-[#c9a961]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#c9a961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Anfrage gesendet!</h3>
              <p className="text-gray-500 text-sm mb-6">
                Wir melden uns in Kürze bei Ihnen zur Bestätigung.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="text-[#c9a961] hover:text-[#b8963a] text-sm underline underline-offset-2 transition-colors"
              >
                Neue Reservierung
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Personen */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Name <span className="text-[#c9a961]">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Ihr Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#c9a961] focus:ring-1 focus:ring-[#c9a961] transition-colors bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Personen <span className="text-[#c9a961]">*</span>
                  </label>
                  <input
                    name="guests"
                    type="number"
                    required
                    min="1"
                    max="50"
                    placeholder="Anzahl"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#c9a961] focus:ring-1 focus:ring-[#c9a961] transition-colors bg-gray-50"
                  />
                </div>
              </div>

              {/* Datum + Uhrzeit */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Datum <span className="text-[#c9a961]">*</span>
                  </label>
                  <input
                    name="date"
                    type="date"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#c9a961] focus:ring-1 focus:ring-[#c9a961] transition-colors bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Uhrzeit <span className="text-[#c9a961]">*</span>
                  </label>
                  <input
                    name="time"
                    type="time"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#c9a961] focus:ring-1 focus:ring-[#c9a961] transition-colors bg-gray-50"
                  />
                </div>
              </div>

              {/* E-Mail + Telefon */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    E-Mail <span className="text-[#c9a961]">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="ihre@email.de"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#c9a961] focus:ring-1 focus:ring-[#c9a961] transition-colors bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Telefon <span className="text-[#c9a961]">*</span>
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="0681 000000"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#c9a961] focus:ring-1 focus:ring-[#c9a961] transition-colors bg-gray-50"
                  />
                </div>
              </div>

              {/* Nachricht */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Anmerkungen
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Besondere Wünsche, Allergien, Anlass..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#c9a961] focus:ring-1 focus:ring-[#c9a961] transition-colors bg-gray-50 resize-none"
                />
              </div>

              {/* Hinweis */}
              <p className="text-xs text-gray-400 leading-relaxed">
                * Pflichtfelder. Ihre Reservierung ist erst nach unserer Bestätigung verbindlich. 
                Wir melden uns telefonisch oder per E-Mail bei Ihnen.
              </p>

              {/* Fehler */}
              {status === 'error' && (
                <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
                  {errorMsg}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#c9a961] hover:bg-[#b8963a] disabled:bg-gray-300 text-white py-4 rounded-full text-sm tracking-widest uppercase font-medium transition-all duration-300 shadow hover:shadow-lg"
              >
                {status === 'loading' ? 'Wird gesendet…' : 'Tisch reservieren'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
