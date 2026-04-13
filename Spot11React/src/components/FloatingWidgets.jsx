import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Users } from 'lucide-react';

const FloatingWidgets = () => {
  const [showProof, setShowProof] = useState(false);
  const [proofText, setProofText] = useState("12 people visited today");

  // Cycle social proof randomly
  useEffect(() => {
    const proofs = [
      "12 people visited today",
      "5 tables booked recently",
      "Someone just reserved a table",
      "Live music starting tonight"
    ];

    const interval = setInterval(() => {
      setShowProof(true);
      setProofText(proofs[Math.floor(Math.random() * proofs.length)]);
      
      // Hide after 5 seconds
      setTimeout(() => setShowProof(false), 5000);
    }, 15000); // Trigger every 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Social Proof Widget (Bottom Left) */}
      <AnimatePresence>
        {showProof && (
          <motion.div
            initial={{ opacity: 0, x: -50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -50, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="fixed bottom-24 md:bottom-8 left-4 z-40 bg-brand-dark text-white px-4 py-3 rounded-lg shadow-2xl flex items-center gap-3 border border-brand-orange/20"
          >
            <div className="w-8 h-8 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
              <Users size={16} />
            </div>
            <span className="text-sm font-medium tracking-wide">{proofText}</span>
          </motion.div>
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
