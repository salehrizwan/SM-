import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What treatments does SM Aesthetics provide?",
    answer: "We offer a range of premium aesthetic treatments including Whitening Drips, Carbon Laser, Acne Facials, HydraFacials, customized Aesthetic Facials, and comprehensive Skin Care Treatments."
  },
  {
    question: "Where is the clinic located?",
    answer: "SM Aesthetics is conveniently located at Upper Mall, Lahore, near the Well Time Institute."
  },
  {
    question: "How can I book an appointment?",
    answer: "You can request an appointment using the booking form on this website, or for an immediate response, you can contact us directly via WhatsApp at 0313 7875199."
  },
  {
    question: "Do I need an appointment before visiting?",
    answer: "Yes, to ensure each patient receives dedicated time and personalized care, we operate by appointment only. Please book in advance before visiting."
  },
  {
    question: "Which treatment is suitable for my skin?",
    answer: "Every individual's skin is unique. We encourage you to book a consultation with Dr. Shifa Muzammil, who will expertly assess your skin condition and recommend the most effective, personalized treatment plan for you."
  },
  {
    question: "How can I contact the clinic on WhatsApp?",
    answer: "Simply click any of the WhatsApp buttons on our website, or manually message us at 0313 7875199 to start a conversation with our team."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-sm-cream">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-sm-charcoal mb-6">Frequently Asked Questions</h2>
          <p className="text-sm-charcoal/70 text-lg font-light">
            Everything you need to know about visiting SM Aesthetics.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="bg-white rounded-2xl border border-sm-beige/50 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-sm-charcoal pr-8">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0 text-sm-rose-dark"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 pt-1 text-sm-charcoal/70 font-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
