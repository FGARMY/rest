import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80" 
          alt="Restaurant Ambiance" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/90 font-light mb-10 max-w-2xl"
        >
          An elevated yet comfortable dining experience right here in Dhanori. Gather around the table and let us pour the drinks.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button className="px-8 py-4 bg-brand-orange hover:bg-brand-brown text-white text-sm font-semibold uppercase tracking-wider rounded transition-all duration-300 w-full sm:w-auto">
            Reserve Table
          </button>
          <button className="px-8 py-4 bg-transparent border border-white hover:bg-white hover:text-brand-dark text-white text-sm font-semibold uppercase tracking-wider rounded transition-all duration-300 w-full sm:w-auto">
            View Menu
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
