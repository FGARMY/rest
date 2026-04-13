import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '../data/mockData';

const AmbianceGallery = () => {
  return (
    <section id="ambiance" className="py-12 md:py-16 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-brand-orange uppercase tracking-widest text-sm font-semibold mb-3">Our Ambiance</h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark leading-tight">
            Designed for <span className="italic text-brand-brown font-normal">Memorable Evenings.</span>
          </h2>
        </div>

        <div className="columns-2 lg:columns-3 gap-4 md:gap-5 space-y-4 md:space-y-5">
          {GALLERY_IMAGES.map((img, idx) => (
            <div key={idx} className="break-inside-avoid relative overflow-hidden group cursor-pointer rounded-sm">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
              <img 
                src={img} 
                alt={`Spot11 Ambiance ${idx}`} 
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Directional Cue */}
        <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/40">Next: The Bar</span>
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

export default AmbianceGallery;
