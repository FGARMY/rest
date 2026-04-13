import React from 'react';
import { GALLERY_IMAGES } from '../data/mockData';

const AmbianceGallery = () => {
  return (
    <section id="ambiance" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-brand-orange uppercase tracking-widest text-sm font-semibold mb-3">Our Ambiance</h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark leading-tight">
            Designed for <span className="italic text-brand-brown font-normal">Memorable Evenings.</span>
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div key={idx} className="break-inside-avoid relative overflow-hidden group cursor-pointer">
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

      </div>
    </section>
  );
};

export default AmbianceGallery;
