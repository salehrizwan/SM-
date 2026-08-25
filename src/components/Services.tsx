import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Droplets, Activity, Wind, Beaker, Heart } from 'lucide-react';

const services = [
  {
    title: 'HydraFacial',
    description: 'Deeply cleanse, extract, and hydrate the skin through our signature serum therapies.',
    icon: Droplets,
  },
  {
    title: 'Whitening Drips',
    description: 'Revitalize your glow with our safe, skin-brightening infusion therapies.',
    icon: Sparkles,
  },
  {
    title: 'Carbon Laser',
    description: 'A revolutionary laser treatment that is completely painless with minimal-to-zero downtime.',
    icon: Activity,
  },
  {
    title: 'Acne Facial',
    description: 'Targeted treatments designed to clear congestion, reduce inflammation, and heal skin.',
    icon: Wind,
  },
  {
    title: 'Aesthetic Facials',
    description: 'Customized clinical facials tailored to address your unique skin concerns and goals.',
    icon: Heart,
  },
  {
    title: 'Skin Care Treatments',
    description: 'Comprehensive restorative protocols utilizing medical-grade formulations for lasting results.',
    icon: Beaker,
  },
];

export const Services = () => {
  return (
    <section id="treatments" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-sm-charcoal mb-6">Our Aesthetic Treatments</h2>
          <p className="text-sm-charcoal/70 text-lg font-light">
            Discover our range of premium, non-invasive procedures designed to reveal your healthiest, most radiant skin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-sm-cream border border-sm-beige/40 hover:shadow-xl hover:shadow-sm-sage/10 transition-all duration-300 flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-sm-rose mb-6 group-hover:scale-110 group-hover:bg-sm-rose group-hover:text-white transition-all duration-300">
                <service.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif text-sm-charcoal mb-3">{service.title}</h3>
              <p className="text-sm-charcoal/70 font-light leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              <a
                href="#booking"
                className="text-sm font-medium text-sm-rose-dark hover:text-sm-charcoal flex items-center gap-1 transition-colors mt-auto"
              >
                Book Now <span aria-hidden="true">&rarr;</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
