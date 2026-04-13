import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
      
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80" 
          alt="Spot11 Enjoy Premium Ambiance" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Trust Line */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs uppercase tracking-[0.2em] mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
          Family-Friendly Dining & Bar
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Where Great Food <br className="hidden sm:block"/>
          <span className="italic text-brand-cream">Meets Great Vibes</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-brand-light/90 text-lg md:text-xl font-light mb-12 max-w-2xl"
        >
          A premium dining and bar experience in Dhanori, Pune.<br/>
          Where great food meets exceptional vibes.
        </motion.p>

        {/* CTAs - Moved lower for thumb reachability on mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-auto sm:mt-0 pb-12 sm:pb-0"
        >
          <button className="px-8 py-4 sm:py-4 bg-brand-orange hover:bg-brand-brown active:bg-brand-brown text-white text-base sm:text-sm font-bold uppercase tracking-wider rounded-sm transition-all duration-300 w-full sm:w-auto active:scale-95 shadow-lg">
            See What You'll Love
          </button>
          <button className="px-8 py-4 sm:py-4 bg-white/10 backdrop-blur-sm border border-white hover:bg-white active:bg-white hover:text-brand-dark active:text-brand-dark text-white text-base sm:text-sm font-bold uppercase tracking-wider rounded-sm transition-all duration-300 w-full sm:w-auto active:scale-95">
            Call Now
          </button>
        </motion.div>

        {/* Loved by locals */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 text-white/60 text-sm font-light italic"
        >
          Loved by locals in Pune
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
