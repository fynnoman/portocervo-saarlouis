'use client';

import { motion } from 'framer-motion';

export default function LiveEvents() {
  const events = [
    {
      title: 'Live Musik',
      description: 'Genießen Sie regelmäßig Live-Musik in unserem Restaurant. Lassen Sie sich von italienischen Klängen verzaubern.',
    },
    {
      title: 'Italienischer Abend',
      description: 'Einmal im Monat verwandeln wir unser Restaurant in ein Stück Italien. Authentische Spezialitäten und besondere Atmosphäre.',
      highlight: 'Jeden ersten Freitag im Monat',
    },
    {
      title: 'Besondere Events',
      description: 'Von Weinverkostungen bis zu kulinarischen Themenabenden - erleben Sie italienische Kultur hautnah.',
    },
  ];

  return (
    <section id="live-events" className="py-8 md:py-12 lg:py-16 px-4 md:px-6 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/631E3DF3-F04F-4DF0-814A-86EF4010F96A_1_201_a.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      
      {/* Gradient overlays to fade top and bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-transparent to-gray-100"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10 lg:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-3 md:mb-4">
            Veranstaltungen & Events
          </h2>
          <div className="w-12 md:w-16 h-px bg-[#c9a961] mx-auto"></div>
        </motion.div>

        {/* Events List */}
        <div className="space-y-6 md:space-y-8 lg:space-y-10">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="space-y-2 md:space-y-3">
                {/* Title with decorative line */}
                <div className="flex items-center gap-4">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 group-hover:text-[#c9a961] transition-colors whitespace-nowrap">
                    {event.title}
                  </h3>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
                    className="flex-1 h-px bg-gradient-to-r from-[#c9a961]/30 to-transparent origin-left"
                  />
                </div>

                {/* Highlight badge */}
                {event.highlight && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    className="text-sm md:text-base text-[#c9a961] font-medium italic"
                  >
                    {event.highlight}
                  </motion.p>
                )}

                {/* Description */}
                <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* Subtle separator */}
              {index < events.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.15 + 0.4 }}
                  className="mt-6 md:mt-8 lg:mt-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent origin-center"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 md:mt-10 lg:mt-12 text-center"
        >
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-4 md:mb-6 font-light">
            Informieren Sie sich über aktuelle Termine
          </p>
          <motion.a
            href="tel:068312747"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 md:px-10 py-4 md:py-5 bg-white border-2 border-[#c9a961] text-[#c9a961] rounded-sm hover:bg-[#c9a961] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg text-base md:text-lg font-light"
          >
            06831 2747
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
