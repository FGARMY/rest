import React from 'react';
import { motion } from 'framer-motion';
import { OCCASIONS } from '../data/mockData';

const Occasions = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-brand-orange uppercase tracking-widest text-sm font-semibold mb-3"
          >
            For Every Moment
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark"
          >
            Whatever the <span className="italic text-brand-brown font-normal">Occasion.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OCCASIONS.map((occ, idx) => (
            <motion.div 
              key={occ.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative overflow-hidden h-96 cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10"></div>
              <img 
                src={occ.img} 
                alt={occ.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20 bg-gradient-to-t from-brand-dark/90 to-transparent">
                <h3 className="text-2xl font-serif text-white font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {occ.title}
                </h3>
                <p className="text-white/80 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {occ.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Occasions;
