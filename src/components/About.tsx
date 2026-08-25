import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Heart } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-sm-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-sm-beige/50 relative border border-white/40 shadow-2xl">
            {/* Elegant placeholder structure for the doctor's portrait */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sm-rose/20 to-transparent mix-blend-overlay" />
            <div className="absolute inset-0 flex items-center justify-center flex-col text-sm-charcoal/20">
               <img src="image.png" alt="SM Aesthetics Brand" className="w-48 opacity-20 filter grayscale" />
            </div>
            
            <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-white">
              <h3 className="font-serif text-2xl text-sm-charcoal mb-1">Dr. Shifa Muzammil</h3>
              <p className="text-sm-rose-dark font-medium text-sm">Certified Aesthetician</p>
            </div>
          </div>
          
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-sm-sage/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -top-8 -left-8 w-48 h-48 bg-sm-rose/20 rounded-full blur-3xl -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-sm-charcoal mb-8">
            Meet Dr. Shifa Muzammil
          </h2>
          <div className="space-y-6 text-sm-charcoal/70 font-light text-lg leading-relaxed mb-10">
            <p>
              Dedicated to the art and science of aesthetic medicine, Dr. Shifa provides personalized 
              aesthetic care designed to enhance your natural beauty. 
            </p>
            <p>
              At SM Aesthetics, every treatment begins with a comprehensive consultation to understand 
              your unique concerns. We believe in delivering a professional, comfortable, and luxurious 
              clinic experience that yields visible, confidence-boosting results.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { icon: Award, text: "Certified Aesthetician & Medical Professional" },
              { icon: Heart, text: "Personalized, patient-first aesthetic care" },
              { icon: ShieldCheck, text: "Professional, safe, and comfortable clinic experience" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-sm-beige/40">
                <div className="w-10 h-10 rounded-full bg-sm-cream flex items-center justify-center text-sm-sage flex-shrink-0">
                  <item.icon size={20} strokeWidth={2} />
                </div>
                <p className="text-sm-charcoal font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
