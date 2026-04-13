import React from 'react';
import { motion } from 'framer-motion';

const QuickDecision = () => {
  const cards = [
    { title: "🍔 Food", desc: "Signature Dishes" },
    { title: "🍻 Drinks", desc: "The Bar" },
    { title: "👨‍👩‍👧 Family", desc: "Dine-in" }
  ];

  return (
    <section className="pt-16 pb-10 sm:py-20 bg-white outline-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl sm:text-2xl font-bold text-brand-dark mb-8 tracking-tight">
          What are you in the mood for?
        </h3>
        
        <div className="flex overflow-x-auto hide-scrollbar gap-6 pb-6 snap-x snap-mandatory">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              whileTap={{ scale: 0.95 }}
              className="snap-start min-w-[200px] sm:min-w-[240px] flex-1 bg-brand-light border border-brand-orange/20 rounded-xl p-5 shadow-sm active:shadow-none transition-all cursor-pointer flex flex-col justify-center gap-1"
            >
              <div className="text-2xl font-bold text-brand-dark">{card.title}</div>
              <div className="text-sm text-gray-500 font-medium">{card.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickDecision;
