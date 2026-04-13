import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

const StickyMobileNav = () => {
  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-50">
      <button className="w-full py-4 px-6 bg-brand-orange text-white font-bold tracking-[0.2em] uppercase rounded-full shadow-[0_10px_30px_rgba(217,119,6,0.4)] flex items-center justify-center gap-3 active:scale-95 transition-all text-sm border-2 border-white/20 backdrop-blur-sm">
        <Calendar size={18} />
        Book Your Spot Now
      </button>
    </div>
  );
};

export default StickyMobileNav;
