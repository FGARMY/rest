import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/Dineimage.avif';

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
          src={heroBg} 
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
          className="text-brand-light/90 text-lg md:text-xl font-light mb-8 max-w-2xl"
        >
          A premium dining and bar experience in Dhanori, Pune.<br/>
          Where great food meets exceptional vibes.
        </motion.p>

        {/* Urgency Trigger */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8 flex flex-col items-center gap-2"
        >
          <span className="bg-red-500/20 text-red-100 border border-red-500/50 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> Open Now • Tables Filling Fast
          </span>
          <span className="text-white/60 text-[10px] uppercase font-bold tracking-widest">Avg. wait time: 10–15 mins</span>
        </motion.div>

        {/* CTAs - Thumb reachability on mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-auto sm:mt-0 pb-12 sm:pb-0"
        >
          <button className="px-8 py-5 sm:py-4 bg-brand-orange hover:bg-brand-brown active:bg-brand-brown text-white text-base sm:text-sm font-bold uppercase tracking-wider rounded-sm transition-all duration-300 w-full sm:w-auto active:scale-95 shadow-2xl relative overflow-hidden group">
            <span className="relative z-10 block">Book Table in 2 Clicks</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] animate-[shimmer_2s_infinite]"></div>
          </button>
          <button className="px-8 py-5 sm:py-4 bg-white/10 backdrop-blur-sm border border-white hover:bg-white active:bg-white hover:text-brand-dark active:text-brand-dark text-white text-base sm:text-sm font-bold uppercase tracking-wider rounded-sm transition-all duration-300 w-full sm:w-auto active:scale-95">
            Call for Instant Confirmation
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
