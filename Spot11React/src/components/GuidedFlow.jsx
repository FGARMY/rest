import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, CalendarCheck, Image } from 'lucide-react';

const GuidedFlow = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h3 className="text-2xl font-bold text-brand-dark mb-10 text-center tracking-tight">
          Start Here 👇
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="flex items-center p-6 bg-brand-light border border-gray-200 rounded-xl hover:border-brand-orange shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-brand-orange transition-colors">
              <Utensils className="text-brand-orange group-hover:text-white" size={20} />
            </div>
            <div className="text-left">
              <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">First time?</div>
              <div className="text-brand-dark font-bold">Try our best dishes →</div>
            </div>
          </motion.button>

          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="flex items-center p-6 bg-brand-orange text-white border border-brand-orange rounded-xl shadow-md transition-all group"
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
              <CalendarCheck className="text-white" size={20} />
            </div>
            <div className="text-left">
              <div className="text-[11px] font-bold text-brand-light uppercase tracking-wider mb-1">Planning dinner?</div>
              <div className="font-bold text-lg">Book a table →</div>
            </div>
          </motion.button>

          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="flex items-center p-6 bg-brand-dark text-white border border-brand-dark rounded-xl hover:bg-brand-brown hover:border-brand-brown shadow-sm transition-all group"
          >
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
              <Image className="text-white" size={20} />
            </div>
            <div className="text-left">
              <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Just exploring?</div>
              <div className="font-bold">View gallery →</div>
            </div>
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default GuidedFlow;
