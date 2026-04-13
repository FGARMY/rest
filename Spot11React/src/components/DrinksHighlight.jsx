import React from 'react';
import { motion } from 'framer-motion';
import { BAR_ITEMS } from '../data/mockData';

const DrinksHighlight = () => {
  return (
    <section className="py-8 md:py-16 bg-brand-dark text-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col mb-10 md:mb-12 border-b border-white/10 pb-8 text-center max-w-3xl mx-auto">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-brand-orange uppercase tracking-widest text-sm font-semibold mb-2"
          >
            The Bar
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight"
          >
            This is where the night starts 🍻
          </motion.h2>
          <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-400 font-light text-lg"
          >
            Where the ice is cold, the spirits are premium, and the stories are long.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {BAR_ITEMS.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group"
            >
              <div className="overflow-hidden mb-3 md:mb-6 aspect-square rounded-sm">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                />
              </div>
              <h3 className="text-lg sm:text-2xl font-serif font-bold mb-1 md:mb-2 text-white group-hover:text-brand-orange transition-colors">
                {item.name}
              </h3>
              <p className="text-gray-400 font-light text-xs sm:text-base leading-relaxed line-clamp-2 md:line-clamp-none">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Directional Cue */}
        <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Next: What our Guests Say</span>
                <motion.span 
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="text-brand-orange text-lg"
                >
                    👇
                </motion.span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default DrinksHighlight;
