import React from 'react';

const FinalCTA = () => {
  return (
    <section className="py-32 relative text-center overflow-hidden">
      
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80" 
          alt="Restaurant dining experience" 
          className="w-full h-full object-cover grayscale opacity-40"
        />
        <div className="absolute inset-0 bg-brand-dark/90"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 text-brand-light leading-tight font-serif">
          Your Table <br className="md:hidden" />
          <span className="italic text-brand-orange font-normal">Is Waiting.</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 w-full sm:w-auto">
          <button className="px-10 py-5 bg-brand-orange hover:bg-brand-brown focus:ring focus:ring-brand-orange/50 active:bg-brand-brown active:scale-95 text-white text-sm font-bold uppercase tracking-widest rounded-sm transition-all shadow-soft w-full sm:w-auto">
            Book Your Spot Now
          </button>
          <a href="tel:+919876543210" className="flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur border border-white/30 hover:border-white hover:bg-white text-white hover:text-brand-dark active:bg-brand-light active:scale-95 active:text-brand-dark text-sm font-bold uppercase tracking-widest rounded-sm transition-all w-full sm:w-auto">
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
