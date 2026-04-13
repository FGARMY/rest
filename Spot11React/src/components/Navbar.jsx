import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0)',
        backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
        paddingTop: isScrolled ? '12px' : '24px',
        paddingBottom: isScrolled ? '12px' : '24px',
        boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.1)' : '0 0px 0px rgba(0,0,0,0)',
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 w-full z-50 px-6 lg:px-12 flex justify-between items-center transition-colors duration-300 ${isScrolled ? 'text-brand-dark' : 'text-white mix-blend-difference'}`}
    >
      <div className="font-serif font-bold text-2xl tracking-wide flex items-center gap-2">
        SPOT<span className="text-brand-orange">11</span> ENJOY
      </div>

      <div className="hidden md:flex gap-8 font-medium tracking-wide text-sm uppercase">
        <a href="#about" className="hover:text-brand-orange transition-colors">Story</a>
        <a href="#food" className="hover:text-brand-orange transition-colors">Menu</a>
        <a href="#ambiance" className="hover:text-brand-orange transition-colors">Ambiance</a>
        <a href="#contact" className="hover:text-brand-orange transition-colors">Contact</a>
      </div>

      <div className="hidden md:block">
        <button 
            className={`px-6 py-2 border transition-all duration-300 rounded font-medium tracking-wide text-sm uppercase ${
                isScrolled 
                ? 'border-brand-dark bg-brand-dark text-white hover:bg-transparent hover:text-brand-dark' 
                : 'border-white hover:bg-white hover:text-brand-dark'
            }`}
        >
          Reserve Table
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
