import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const FloatingWhatsApp = () => {
  const whatsappNumber = "03137875199";
  const message = encodeURIComponent("Hello Dr. Shifa Muzammil, I would like to book an appointment at SM Aesthetics.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        delay: 2, 
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 bg-white text-sm-charcoal px-4 py-2 rounded-xl text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden sm:block">
        Book Appointment
        <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 border-8 border-transparent border-l-white"></div>
      </div>
    </motion.a>
  );
};
