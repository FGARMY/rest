import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { MapPin, UtensilsCrossed } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0)',
        backdropFilter: isScrolled ? 'blur(16px)' : 'blur(0px)',
        paddingTop: isScrolled ? '12px' : '16px',
        paddingBottom: isScrolled ? '12px' : '16px',
        boxShadow: isScrolled ? '0 10px 40px rgba(0,0,0,0.08)' : '0 0px 0px rgba(0,0,0,0)',
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 px-4 md:px-12 flex justify-between items-center transition-colors duration-400 ${isScrolled ? 'text-brand-dark' : 'text-white mix-blend-difference'}`}
    >
      {/* Mobile-only Left Utility */}
      <div className="md:hidden">
        <a href="#contact" className="p-2 opacity-70 hover:opacity-100 transition-opacity">
          <MapPin size={20} />
        </a>
      </div>

      <div className={`font-serif font-bold text-xl md:text-2xl tracking-wide flex items-center transition-all duration-300 ${isScrolled ? 'scale-95' : 'scale-100'}`}>
        SPOT<span className="text-brand-orange">11</span> ENJOY
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 font-medium tracking-widest text-[10px] uppercase">
        {['story', 'menu', 'ambiance', 'contact'].map((item) => (
          <a 
            key={item}
            href={`#${item}`} 
            className="relative group transition-colors hover:text-brand-orange"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {/* Mobile-only Right Utility */}
        <div className="md:hidden">
          <a href="#food" className="p-2 opacity-70 hover:opacity-100 transition-opacity">
            <UtensilsCrossed size={20} />
          </a>
        </div>

        {/* Desktop-only Action */}
        <div className="hidden md:block">
          <button 
              className={`px-6 py-2.5 border transition-all duration-300 rounded-sm font-bold tracking-widest text-[10px] uppercase shadow-lg active:scale-95 ${
                  isScrolled 
                  ? 'border-brand-dark bg-brand-dark text-white hover:bg-transparent hover:text-brand-dark' 
                  : 'border-white hover:bg-white hover:text-brand-dark'
              }`}
          >
            Reserve Table
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
