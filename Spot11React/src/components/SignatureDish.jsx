import React from 'react';
import { motion } from 'framer-motion';

const SignatureDish = () => {
  return (
    <section className="py-24 bg-brand-light border-b border-brand-orange/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-brand-orange uppercase tracking-widest text-sm font-semibold mb-3"
          >
            Chef's Recommendation
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark"
          >
            Must Try at <span className="italic text-brand-brown font-normal">Spot11</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Main Featured Dish */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/3 relative group overflow-hidden bg-brand-dark cursor-pointer flex flex-col justify-end min-h-[400px] lg:min-h-[600px]"
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=1200&q=80" 
              alt="Spot11 Butter Chicken" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
            />
            <div className="relative z-20 w-full bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent p-6 md:p-12">
              <div className="text-brand-orange uppercase tracking-widest text-[10px] md:text-xs font-bold mb-2">Signature Classic</div>
              <h3 className="text-3xl md:text-5xl font-serif text-white font-bold mb-3">Spot11 Butter Chicken</h3>
              <ul className="text-white/80 font-light text-sm md:text-lg space-y-1">
                <li>• Tender boneless chicken</li>
                <li>• Velvety tomato & cashew gravy</li>
                <li>• Finished with fenugreek & fresh cream</li>
              </ul>
            </div>
          </motion.div>

          {/* Secondary Dishes */}
          <div className="lg:w-1/3 flex flex-col gap-8">
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group flex-1 relative overflow-hidden bg-brand-dark cursor-pointer flex flex-col justify-end min-h-[250px]"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1599487405705-8eb0c242e20b?auto=format&fit=crop&w=600&q=80" 
                alt="Tandoori Tikka Platter" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="relative z-20 p-6">
                <h3 className="text-2xl font-serif text-white font-bold mb-2">Tandoori Platter</h3>
                <p className="text-white/70 font-light text-sm">A smoky assortment of prime cuts straight from the clay oven.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group flex-1 relative overflow-hidden bg-brand-dark cursor-pointer flex flex-col justify-end min-h-[250px]"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=600&q=80" 
                alt="Awadhi Dum Biryani" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="relative z-20 p-6">
                <h3 className="text-2xl font-serif text-white font-bold mb-2">Awadhi Biryani</h3>
                <p className="text-white/70 font-light text-sm">Fragrant basmati slow-cooked with sealed-in flavors.</p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default SignatureDish;
