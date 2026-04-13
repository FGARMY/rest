import React from 'react';
import { motion } from 'framer-motion';

const SignaturePunch = () => {
  return (
    <section className="relative py-12 md:py-16 flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 z-0 bg-brand-dark">
        <img 
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=80" 
          alt="Spot11 Vibe" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold font-serif text-white leading-tight mb-6"
        >
          Your Weekend Spot <br/> <span className="text-brand-orange italic">Sorted 🍽️🍻</span>
        </motion.h2>

        <motion.button 
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="px-12 py-5 bg-brand-orange hover:bg-brand-brown active:bg-brand-brown text-white font-bold tracking-widest uppercase rounded shadow-[0_0_40px_rgba(217,119,6,0.5)] transition-all"
        >
          Book Your Spot Now
        </motion.button>
      </div>

    </section>
  );
};

export default SignaturePunch;
