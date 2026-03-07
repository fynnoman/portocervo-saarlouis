'use client';

import { motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';

export default function About() {
  const content = useContent();
  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gradient-to-b from-gray-100 via-gray-100 to-gray-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.03, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c9a961] rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.03, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#c9a961] rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light text-gray-900 mb-3 md:mb-4">
            {content.about.title}
          </h2>
          <div className="w-12 md:w-16 h-px bg-[#c9a961] mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            {content.about.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center"
          >
            <div className="relative">
              {/* Decorative quote mark */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 0.1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute -top-8 left-1/2 -translate-x-1/2 text-9xl text-[#c9a961] font-serif leading-none"
              >
                "
              </motion.div>
              
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed relative z-10 mb-4 md:mb-6 px-4 md:px-0">
                {content.about.intro}
              </p>
            </div>

            <div className="space-y-6 max-w-2xl mx-auto">
              {content.about.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#c9a961] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-opacity-20 transition-all duration-300">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative bottom accent */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-1 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent origin-center mt-8 max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
