import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/Dineimage.avif';

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] pt-28 pb-20 md:py-0 md:min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-x-0 inset-y-0 z-0 h-full w-full"
      >
        <img
          src={heroBg}
          alt="Spot11 Enjoy Premium Ambiance"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent flex"></div>
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-full">

        {/* Trust Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs uppercase tracking-[0.2em] mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
          Family-Friendly Dining & Bar
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4"
        >
          Where Great Food <br className="md:hidden" />
          <span className="italic text-brand-cream">Meets Great Vibes</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-brand-light/90 text-lg md:text-xl font-light mb-4 max-w-2xl"
        >
          A premium dining and bar experience in Dhanori, Pune.<br />
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

        {/* CTAs - Hidden on mobile to avoid duplicating Sticky Nav */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="hidden md:flex flex-col sm:flex-row gap-5 w-full sm:w-auto mt-6"
        >
          <button className="px-8 py-5 sm:py-4 bg-brand-orange hover:bg-brand-brown active:bg-brand-brown text-white text-base sm:text-sm font-bold uppercase tracking-wider rounded-sm transition-all duration-300 w-full sm:w-auto active:scale-95 shadow-2xl relative overflow-hidden group">
            <span className="relative z-10 block">Book Table</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[150%] animate-[shimmer_2s_infinite]"></div>
          </button>
        </motion.div>

        {/* Loved by locals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 mb-24 text-white/60 text-sm font-light italic"
        >
          Loved by locals in Pune
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-[10px] uppercase font-bold tracking-[0.3em]">Scroll to explore</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-brand-orange text-xl"
          >
            ↓
          </motion.span>
        </motion.div>


      </div>
    </section>
  );
};

export default Hero;
