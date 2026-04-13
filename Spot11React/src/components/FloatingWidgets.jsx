import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowUp } from 'lucide-react';

const FloatingWidgets = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  // Scroll listener for Go Top Button
  useEffect(() => {
    const handleScroll = () => {
      setShowGoTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>

      {/* Go to Top Button (Right Side, Above WhatsApp) */}
      <AnimatePresence>
        {showGoTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-40 md:bottom-28 right-4 z-40 w-12 h-12 bg-brand-dark border border-brand-orange/50 rounded-full shadow-2xl flex items-center justify-center text-white cursor-pointer hover:bg-brand-orange transition-all"
            title="Go to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Quick Action (Bottom Right) */}
      <motion.a
        href="https://wa.me/919876543210?text=Hi,%20I%20want%20to%20reserve%20a%20table%20at%20Spot11%20Enjoy"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 md:bottom-8 right-4 z-40 w-14 h-14 bg-green-500 rounded-full shadow-2xl flex items-center justify-center text-white cursor-pointer hover:bg-green-600 transition-colors"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </motion.a>
    </>
  );
};

export default FloatingWidgets;
