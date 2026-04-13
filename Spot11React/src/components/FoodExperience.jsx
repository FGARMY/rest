import React from 'react';
import { FOOD_EXPERIENCE } from '../data/mockData';

const FoodExperience = () => {
  return (
    <section id="food" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-brand-orange uppercase tracking-widest text-sm font-semibold mb-3">Our Menu</h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
            Food That Feels Like Home — <br/>
            <span className="italic text-brand-brown font-normal">But Better.</span>
          </h2>
          <p className="text-gray-600 font-light text-lg">
            From smoky North Indian kebabs to slow-cooked Awadhi biryanis, our kitchen uses authentic spices and techniques to craft dishes that satisfy the soul.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FOOD_EXPERIENCE.map((dish) => (
            <div key={dish.id} className="group cursor-pointer">
              <div className="overflow-hidden mb-4 aspect-[4/5] bg-gray-100 relative rounded-lg shadow-sm">
                <img 
                  src={dish.img} 
                  alt={dish.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                
                {/* Conversion Badges */}
                {dish.id === 1 && <div className="absolute top-3 left-3 bg-white/95 backdrop-blur text-brand-dark px-3 py-1.5 rounded-full text-[10px] font-black uppercase shadow-lg flex items-center gap-1">⭐ Most Ordered</div>}
                {dish.id === 2 && <div className="absolute top-3 left-3 bg-brand-orange text-white px-3 py-1.5 rounded-full text-[10px] font-black uppercase shadow-lg flex items-center gap-1">👨‍🍳 Chef's Special</div>}
                
                <div className="absolute bottom-3 right-3 bg-brand-dark/90 backdrop-blur text-white px-2 py-1 rounded text-[9px] font-bold tracking-wider border border-white/20">
                  {dish.id % 2 === 0 ? "Ready in 15 mins" : "Customer Favorite"}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-brand-dark group-hover:text-brand-orange transition-colors">
                {dish.name}
              </h3>
              <p className="text-gray-500 font-light leading-relaxed">
                {dish.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 border border-brand-dark hover:bg-brand-dark hover:text-white transition-colors duration-300 font-medium tracking-wide text-sm uppercase">
            Explore Full Menu
          </button>
        </div>

      </div>
    </section>
  );
};

export default FoodExperience;
