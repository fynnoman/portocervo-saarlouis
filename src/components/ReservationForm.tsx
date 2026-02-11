'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');
    
    try {
      // Schritt 1: POST Request an API senden
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      // Schritt 2: Erfolg oder Fehler verarbeiten
      if (response.ok && result.success) {
        setSubmitStatus('success');
        setSubmitMessage('Vielen Dank für Ihre Anfrage! Wir werden uns in Kürze bei Ihnen melden, um Ihre Reservierung zu bestätigen.');
        
        // Formular zurücksetzen
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.error || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Verbindungsfehler. Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.');
      console.error('Reservierungsfehler:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="reservation" className="py-12 md:py-16 lg:py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.08, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 left-1/2 -translate-x-1/2 w-px h-32 bg-[#c9a961]"
      />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light text-gray-900 mb-3 md:mb-4 px-4">
            Tischreservierung
          </h2>
          <div className="w-12 md:w-16 h-px bg-[#c9a961] mx-auto mb-6 md:mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-50 rounded-sm shadow-lg p-6 md:p-8 lg:p-12 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
        >
          {/* Important Notice */}
          <div className="bg-white border-l-4 border-[#c9a961] p-4 md:p-6 mb-6 md:mb-8">
            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed font-medium">
              <strong>Wichtiger Hinweis:</strong> Ihre Reservierung ist erst nach 
              Bestätigung per E-Mail oder Telefon gültig. Ohne Bestätigung können 
              wir Ihren Tisch nicht garantieren.
            </p>
          </div>

          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-sm mb-6 text-lg"
            >
              {submitMessage}
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-sm mb-6 text-lg"
            >
              {submitMessage}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-lg md:text-xl text-gray-700 font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-[#c9a961] transition-colors bg-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg md:text-xl text-gray-700 font-medium mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-[#c9a961] transition-colors bg-white"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-lg md:text-xl text-gray-700 font-medium mb-2">
                Telefon *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-[#c9a961] transition-colors bg-white"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="date" className="block text-lg md:text-xl text-gray-700 font-medium mb-2">
                  Datum *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-[#c9a961] transition-colors bg-white"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-lg md:text-xl text-gray-700 font-medium mb-2">
                  Uhrzeit *
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-[#c9a961] transition-colors bg-white"
                >
                  <option value="">Wählen</option>
                  <option value="11:30">11:30</option>
                  <option value="12:00">12:00</option>
                  <option value="12:30">12:30</option>
                  <option value="13:00">13:00</option>
                  <option value="13:30">13:30</option>
                  <option value="14:00">14:00</option>
                  <option value="18:00">18:00</option>
                  <option value="18:30">18:30</option>
                  <option value="19:00">19:00</option>
                  <option value="19:30">19:30</option>
                  <option value="20:00">20:00</option>
                  <option value="20:30">20:30</option>
                  <option value="21:00">21:00</option>
                  <option value="21:30">21:30</option>
                </select>
              </div>

              <div>
                <label htmlFor="guests" className="block text-lg md:text-xl text-gray-700 font-medium mb-2">
                  Personen *
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-[#c9a961] transition-colors bg-white"
                >
                  <option value="">Wählen</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                  <option value="mehr">Mehr als 12</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-lg md:text-xl text-gray-700 font-medium mb-2">
                Nachricht (optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-[#c9a961] transition-colors bg-white resize-none"
                placeholder="Besondere Wünsche oder Anmerkungen..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#c9a961] text-white py-4 text-xl rounded-sm font-medium hover:bg-[#b89951] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Wird gesendet...' : 'Reservierung anfragen'}
            </button>

            <p className="text-base md:text-lg text-gray-500 text-center">
              * Pflichtfelder
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
