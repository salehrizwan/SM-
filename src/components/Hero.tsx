import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Calendar } from 'lucide-react';

export const Hero = () => {
  const whatsappNumber = "03137875199";
  const message = encodeURIComponent("Hello Dr. Shifa Muzammil, I would like to book an appointment at SM Aesthetics.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-gradient-to-b from-sm-beige/30 to-sm-cream">
      {/* Decorative botanical leaf abstraction */}
      <div className="absolute top-1/4 left-10 md:left-20 w-64 h-64 bg-sm-sage/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 md:right-20 w-80 h-80 bg-sm-rose/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-sm-rose font-medium tracking-widest uppercase text-sm md:text-base mb-4">
            SM Aesthetics | Dr. Shifa Muzammil
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-sm-charcoal leading-tight mb-6">
            Enhance Your <br className="hidden md:block" />
            <span className="italic text-sm-rose-dark">Natural Beauty,</span> Confidently.
          </h1>
          <p className="text-sm-charcoal/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Personalized aesthetic treatments designed with care, precision and a focus on your individual beauty goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="#booking"
            className="flex items-center gap-2 bg-sm-charcoal text-white px-8 py-4 rounded-full text-base font-medium hover:bg-black transition-colors w-full sm:w-auto justify-center shadow-md"
          >
            <Calendar size={20} />
            Book an Appointment
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-sm-charcoal border border-sm-beige px-8 py-4 rounded-full text-base font-medium hover:bg-sm-beige/50 transition-colors w-full sm:w-auto justify-center shadow-sm"
          >
            <MessageCircle size={20} className="text-green-600" />
            Chat on WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-sm-beige/50 inline-flex flex-col items-center"
        >
          <p className="text-sm-charcoal/60 text-sm mb-2 flex items-center gap-2">
            <span>📍 Upper Mall, Lahore (Near Well Time Institute)</span>
          </p>
          <p className="text-sm-charcoal/60 text-sm flex items-center gap-2">
            <span>📞 0313 7875199</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
