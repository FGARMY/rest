import React from 'react';

const CategoryStrip = () => {
  const categories = ["All Menus", "Signature Biryanis", "Tandoori Starters", "Pizzas & Pastas", "Beverages & Bar", "Desserts"];

  return (
    <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-3 md:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto hide-scrollbar gap-3 snap-x">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              className={`snap-start whitespace-nowrap px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm active:scale-95 ${
                idx === 0 
                  ? 'bg-brand-orange text-white shadow-md' 
                  : 'bg-brand-light text-brand-dark border border-gray-200 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryStrip;
