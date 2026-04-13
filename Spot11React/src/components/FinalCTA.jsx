import React from 'react';

const FinalCTA = () => {
  return (
    <section className="py-32 bg-brand-dark text-center relative overflow-hidden">
      
      {/* Subtle Background Pattern / Gradient */}
      <div className="absolute inset-0 bg-brand-orange/5 mix-blend-color-dodge pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-brand-light leading-tight">
          Good Food. Great Vibes. <br/>
          <span className="italic text-brand-orange font-normal">All Waiting for You.</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 w-full sm:w-auto">
          <button className="px-10 py-4 bg-brand-orange hover:bg-brand-brown text-white text-sm font-semibold uppercase tracking-widest rounded transition-all duration-300">
            Reserve Table
          </button>
          <button className="px-10 py-4 bg-transparent border border-white/30 hover:border-white hover:bg-white/5 text-white text-sm font-semibold uppercase tracking-widest rounded transition-all duration-300">
            View Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
