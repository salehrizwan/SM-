import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, ExternalLink } from 'lucide-react';

export const Location = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-sm-charcoal mb-6">Visit SM Aesthetics</h2>
              <p className="text-sm-charcoal/70 text-lg font-light mb-8">
                Experience premium aesthetic care in a serene and professional environment.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sm-cream rounded-full flex items-center justify-center text-sm-sage flex-shrink-0 mt-1">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-medium text-sm-charcoal mb-1">Clinic Address</h4>
                  <p className="text-sm-charcoal/70 font-light">
                    Upper Mall, Lahore<br />
                    Near Well Time Institute
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sm-cream rounded-full flex items-center justify-center text-sm-sage flex-shrink-0 mt-1">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-medium text-sm-charcoal mb-1">Contact Us</h4>
                  <p className="text-sm-charcoal/70 font-light">
                    0313 7875199
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Upper+Mall,+Lahore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm-rose-dark hover:text-sm-rose font-medium transition-colors"
            >
              Get Directions <ExternalLink size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/3 w-full"
          >
            <div className="w-full aspect-[4/3] md:aspect-[21/9] lg:aspect-[16/9] bg-sm-cream rounded-3xl border border-sm-beige/50 shadow-sm overflow-hidden relative">
              {/* Abstract map placeholder since we don't have a real iframe embed code */}
              <div className="absolute inset-0 flex items-center justify-center bg-sm-beige/20">
                <div className="text-center p-6">
                  <MapPin size={48} className="mx-auto text-sm-sage mb-4 opacity-50" />
                  <p className="text-sm-charcoal/50 font-medium">Interactive Map Location</p>
                  <p className="text-sm-charcoal/40 text-sm mt-2">Upper Mall, Lahore</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
