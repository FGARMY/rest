import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Flame, Heart, ArrowRight } from 'lucide-react';
import { FOOD_EXPERIENCE, USPS } from '../data/mockData';

const iconMap = {
  Sparkles: Sparkles,
  Users: Users,
  Flame: Flame,
  Heart: Heart
};

const FoodExperience = () => {
  return (
    <section id="food" className="py-12 md:py-16 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION 1: THE EXPERIENCE (Why Choose Us) */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-brand-orange uppercase tracking-[0.3em] text-xs font-bold mb-4"
            >
              The Experience
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-dark leading-tight"
            >
              Not Just a Dinner — <br className="hidden md:block"/>
              <span className="italic font-normal text-brand-brown">It's a Feeling.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gray-500 font-light text-lg"
          >
            Good food, better company, and vibes that refuse to quit. Pune's favorite corner to unwind and feast.
          </motion.p>
        </div>

        {/* USPS Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 md:mb-32">
          {USPS.map((usp, idx) => {
            const Icon = iconMap[usp.icon];
            return (
              <motion.div 
                key={usp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                  <Icon size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-brand-dark text-sm sm:text-base mb-1">{usp.title}</h5>
                  <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed">{usp.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* SECTION 2: THE SIGNATURES (Must Try) */}
        <div className="mb-12">
            <h4 className="text-brand-dark uppercase tracking-widest text-[10px] font-bold mb-2 opacity-50">Chef's Recommendations</h4>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark">The <span className="italic text-brand-brown font-normal ml-1">Signatures</span></h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 items-stretch mb-20 md:mb-32">
          {/* Main Featured */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/3 relative group overflow-hidden bg-brand-dark cursor-pointer flex flex-col justify-end min-h-[350px] md:min-h-[500px] rounded-sm"
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=1200&q=80" 
              alt="Spot11 Butter Chicken" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
            />
            <div className="relative z-20 w-full bg-gradient-to-t from-black via-black/60 to-transparent p-6 md:p-12">
              <div className="text-brand-orange uppercase tracking-widest text-[10px] md:text-xs font-bold mb-2">Most Ordered Classic</div>
              <h3 className="text-2xl md:text-5xl font-serif text-white font-bold mb-3">Spot11 Butter Chicken</h3>
              <p className="text-white/80 font-light text-xs md:text-lg mb-4">Tender boneless chicken in velvety tomato & cashew gravy. Finished with fresh cream.</p>
              <span className="text-brand-orange text-xs font-bold tracking-widest uppercase border-b border-brand-orange/40 pb-1">Taste the Legend →</span>
            </div>
          </motion.div>

          {/* Secondary Signatures */}
          <div className="lg:w-1/3 flex flex-col gap-5">
            {[
              { id: 1, title: "Tandoori Platter", img: "https://images.unsplash.com/photo-1599487405705-8eb0c242e20b?auto=format&fit=crop&w=600&q=80", tag: "Smoky" },
              { id: 2, title: "Awadhi Biryani", img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=600&q=80", tag: "Slow-Cooked" }
            ].map((sig, idx) => (
              <motion.div 
                key={sig.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * idx }}
                className="group flex-1 relative overflow-hidden bg-brand-dark cursor-pointer flex flex-col justify-end min-h-[220px] rounded-sm"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700 z-10"></div>
                <img src={sig.img} alt={sig.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="relative z-20 p-6">
                  <div className="text-brand-orange text-[9px] font-bold uppercase tracking-widest mb-1">{sig.tag}</div>
                  <h3 className="text-xl md:text-2xl font-serif text-white font-bold">{sig.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 3: THE MENU PREVIEW */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark">Full <span className="italic text-brand-brown font-normal ml-1">Menu Preview</span></h3>
            
            {/* Integrated Category Explorer */}
            <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-2 -mb-2">
                {["All Menus", "Signature Biryanis", "Tandoori Starters", "Pizzas & Pastas", "Beverages & Bar", "Desserts"].map((cat, idx) => (
                    <button 
                        key={idx}
                        className={`whitespace-nowrap px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                            idx === 0 
                            ? 'bg-brand-dark text-white' 
                            : 'bg-white/50 text-brand-dark/60 hover:text-brand-dark border border-brand-dark/10'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {FOOD_EXPERIENCE.map((dish, idx) => (
            <motion.div 
              key={dish.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group cursor-pointer flex flex-col px-4 py-6 bg-white border border-gray-100 hover:border-brand-orange/20 transition-all shadow-sm hover:shadow-md"
            >
              <div className="overflow-hidden mb-5 aspect-[4/5] bg-gray-200 relative">
                <img 
                  src={dish.img} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
                <div className="absolute top-2 left-2 z-20">
                  {dish.id === 1 && (
                    <div className="bg-brand-orange text-white px-2 py-1 text-[8px] font-bold uppercase tracking-widest shadow-sm">
                      Best Seller
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col flex-1 transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-500">
                <h3 className="text-lg md:text-xl font-serif font-bold text-brand-dark group-hover:text-brand-orange transition-colors mb-2">
                  {dish.name}
                </h3>
                <p className="text-gray-500 font-light text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                  {dish.desc}
                </p>
                <span className="text-[10px] font-medium uppercase tracking-widest text-brand-brown mt-auto">
                    Classic Preparation
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Directional Cue */}
        <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/40">Next: Step into our Space</span>
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

export default FoodExperience;
