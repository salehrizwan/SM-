import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, CheckCircle2, MessageCircle } from 'lucide-react';

export const BookingForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 600);
  };

  const whatsappNumber = "03137875199";
  const message = encodeURIComponent("Hello Dr. Shifa Muzammil, I would like to book an appointment at SM Aesthetics.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section id="booking" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sm-rose/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-sm-charcoal mb-6">
            Book Your Consultation
          </h2>
          <p className="text-sm-charcoal/70 text-lg font-light mb-10 leading-relaxed max-w-lg">
            Take the first step towards your aesthetic goals. Fill out the form to request an appointment, or reach out to us directly on WhatsApp for immediate assistance.
          </p>

          <div className="bg-sm-cream rounded-3xl p-8 border border-sm-beige/50">
            <h3 className="font-serif text-xl mb-4 text-sm-charcoal">Prefer to message us?</h3>
            <p className="text-sm-charcoal/70 font-light mb-6">
              Our team is available on WhatsApp to answer your queries and schedule your visit.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3.5 rounded-full text-base font-medium hover:bg-green-700 transition-colors shadow-sm"
            >
              <MessageCircle size={20} />
              WhatsApp: 0313 7875199
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 w-full"
        >
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-2xl shadow-sm-sage/5 border border-sm-beige/30 relative">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 px-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                  className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle2 size={40} />
                </motion.div>
                <h3 className="text-2xl font-serif text-sm-charcoal mb-4">Request Received</h3>
                <p className="text-sm-charcoal/70 font-light mb-8 max-w-sm mx-auto">
                  Thank you for reaching out. Dr. Shifa's team will contact you shortly to confirm your appointment time.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-sm-rose-dark font-medium hover:text-sm-rose underline decoration-sm-rose/30 underline-offset-4"
                >
                  Book another appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-sm-charcoal">Full Name</label>
                    <input
                      required
                      type="text"
                      id="name"
                      className="w-full px-5 py-3.5 bg-sm-cream/50 border border-sm-beige rounded-xl focus:outline-none focus:ring-2 focus:ring-sm-sage/50 transition-shadow"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-sm-charcoal">Phone Number</label>
                    <input
                      required
                      type="tel"
                      id="phone"
                      className="w-full px-5 py-3.5 bg-sm-cream/50 border border-sm-beige rounded-xl focus:outline-none focus:ring-2 focus:ring-sm-sage/50 transition-shadow"
                      placeholder="0300 0000000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="treatment" className="text-sm font-medium text-sm-charcoal">Select Treatment</label>
                  <select
                    required
                    id="treatment"
                    defaultValue=""
                    className="w-full px-5 py-3.5 bg-sm-cream/50 border border-sm-beige rounded-xl focus:outline-none focus:ring-2 focus:ring-sm-sage/50 transition-shadow appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Choose a service</option>
                    <option value="consultation">General Consultation</option>
                    <option value="whitening">Whitening Drips</option>
                    <option value="carbon">Carbon Laser</option>
                    <option value="acne">Acne Facial</option>
                    <option value="hydrafacial">HydraFacial</option>
                    <option value="aesthetic">Aesthetic Facial Treatments</option>
                    <option value="skincare">Skin Care Treatments</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-medium text-sm-charcoal">Preferred Date</label>
                    <input
                      required
                      type="date"
                      id="date"
                      className="w-full px-5 py-3.5 bg-sm-cream/50 border border-sm-beige rounded-xl focus:outline-none focus:ring-2 focus:ring-sm-sage/50 transition-shadow cursor-pointer text-sm-charcoal"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="time" className="text-sm font-medium text-sm-charcoal">Preferred Time</label>
                    <select
                      required
                      id="time"
                      defaultValue=""
                      className="w-full px-5 py-3.5 bg-sm-cream/50 border border-sm-beige rounded-xl focus:outline-none focus:ring-2 focus:ring-sm-sage/50 transition-shadow appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select time</option>
                      <option value="morning">Morning (10 AM - 1 PM)</option>
                      <option value="afternoon">Afternoon (2 PM - 5 PM)</option>
                      <option value="evening">Evening (6 PM - 8 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-sm-charcoal">Message (Optional)</label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full px-5 py-3.5 bg-sm-cream/50 border border-sm-beige rounded-xl focus:outline-none focus:ring-2 focus:ring-sm-sage/50 transition-shadow resize-none"
                    placeholder="Any specific concerns or details?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-sm-charcoal text-white py-4 rounded-xl font-medium hover:bg-black transition-colors flex items-center justify-center gap-2 shadow-md pt-4 mt-2"
                >
                  <Calendar size={18} />
                  Request Appointment
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
