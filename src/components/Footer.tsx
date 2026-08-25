import React from 'react';
import { motion } from 'motion/react';
import { Instagram, MessageCircle } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "03137875199";
  const message = encodeURIComponent("Hello Dr. Shifa Muzammil, I would like to book an appointment at SM Aesthetics.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <footer className="bg-sm-cream border-t border-sm-beige pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left gap-12 mb-16">
          <div className="md:w-1/3 flex flex-col items-center md:items-start">
             <img src="image.png" alt="SM Aesthetics Logo" className="h-16 w-auto object-contain mb-6 filter grayscale mix-blend-multiply opacity-80" />
             <div className="space-y-1">
               <h3 className="font-serif text-xl text-sm-charcoal">Dr. Shifa Muzammil</h3>
               <p className="text-sm-charcoal/60 text-sm font-medium">Doctor | Certified Aesthetician</p>
             </div>
          </div>
          
          <div className="md:w-1/3 flex flex-col items-center md:items-start">
            <h4 className="font-medium text-sm-charcoal mb-4 tracking-wide uppercase text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Treatments', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm-charcoal/70 hover:text-sm-rose transition-colors text-sm">
                    {item === 'FAQ' ? 'FAQs' : item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-1/3 flex flex-col items-center md:items-start">
            <h4 className="font-medium text-sm-charcoal mb-4 tracking-wide uppercase text-sm">Contact Info</h4>
            <div className="space-y-3 text-sm text-sm-charcoal/70">
              <p>📍 Upper Mall, Lahore</p>
              <p>📞 0313 7875199</p>
            </div>
            
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-sm-beige/50 flex items-center justify-center text-sm-charcoal hover:bg-sm-rose hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-sm-beige/50 flex items-center justify-center text-sm-charcoal hover:bg-sm-rose hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-sm-beige flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-sm-charcoal/50">
          <p>© {currentYear} SM Aesthetics. All rights reserved.</p>
          <p className="font-medium tracking-wider uppercase text-[10px]">Developed by Saleh Rizwan</p>
        </div>
      </div>
    </footer>
  );
};
