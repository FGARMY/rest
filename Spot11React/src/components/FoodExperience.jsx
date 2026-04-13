import React from 'react';
import { motion } from 'framer-motion';
import { FOOD_EXPERIENCE } from '../data/mockData';

const FoodExperience = () => {
  return (
    <section id="food" className="py-16 md:py-32 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-brand-orange uppercase tracking-[0.3em] text-xs font-bold mb-4"
            >
              Culinary Art
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-dark leading-tight"
            >
              Food that feels like home, <br className="hidden md:block"/>
              <span className="italic font-normal text-brand-brown">but better.</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:block"
          >
            <button className="group relative px-6 py-3 overflow-hidden rounded bg-brand-dark text-brand-light font-medium tracking-widest text-xs uppercase transition-all duration-300 hover:bg-brand-brown">
              <span className="relative z-10 flex items-center gap-2">
                Explore Full Menu <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>
          </motion.div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {FOOD_EXPERIENCE.map((dish, idx) => (
            <motion.div 
              key={dish.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="overflow-hidden mb-6 aspect-[4/5] bg-gray-200 relative shadow-sm">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700 z-10 pointer-events-none"></div>
                <img 
                  src={dish.img} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
                
                {/* Refined Conversion Badges */}
                <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                  {dish.id === 1 && (
                    <div className="bg-white/90 backdrop-blur-md text-brand-dark px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest shadow-sm border border-white/50">
                      Most Ordered
                    </div>
                  )}
                  {dish.id === 2 && (
                    <div className="bg-brand-dark/90 backdrop-blur-md text-brand-light px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest shadow-sm">
                      Chef's Special
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col flex-1 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-brand-dark group-hover:text-brand-orange transition-colors">
                    {dish.name}
                  </h3>
                </div>
                <div className="w-8 h-[1px] bg-brand-orange/50 mb-4 group-hover:w-16 transition-all duration-500"></div>
                <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed mb-4">
                  {dish.desc}
                </p>
                
                <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-200/60">
                  <span className="text-[10px] font-medium uppercase tracking-widest text-brand-brown">
                    {dish.id % 2 === 0 ? "Ready in 15 mins" : "Customer Favorite"}
                  </span>
                  <span className="text-brand-dark text-sm opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Full Menu Button */}
        <div className="mt-12 text-center md:hidden">
          <button className="w-full relative px-6 py-4 overflow-hidden bg-brand-dark text-brand-light font-medium tracking-widest text-xs uppercase transition-all duration-300">
            Explore Full Menu →
          </button>
        </div>

      </div>
    </section>
  );
};

export default FoodExperience;
