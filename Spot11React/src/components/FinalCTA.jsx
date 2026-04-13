import React from 'react';

const FinalCTA = () => {
  return (
    <section className="py-10 md:py-16 relative text-center overflow-hidden">
      
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
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-brand-light leading-tight font-serif">
          Legendary Cravings. <br className="md:hidden" />
          <span className="italic text-brand-orange font-normal">Legendary Nights.</span>
        </h2>
        
        <div className="flex justify-center mt-12 w-full sm:w-auto">
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-brand-orange hover:bg-brand-brown active:bg-brand-brown active:scale-95 text-white text-sm font-bold uppercase tracking-widest rounded-sm transition-all shadow-[0_0_40px_rgba(217,119,6,0.3)] w-full sm:w-auto flex items-center justify-center gap-3">
            <span className="text-xl">💬</span> CONNECT ON WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
