import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

const StickyMobileNav = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-brand-dark flex border-t border-brand-orange/20 shadow-[0_-10px_40px_rgba(0,0,0,0.6)]">
      <a href="tel:+919876543210" className="flex-1 py-3 text-center border-r border-white/10 bg-brand-dark hover:bg-brand-brown active:bg-brand-brown text-white transition-colors flex flex-col items-center justify-center gap-1 active:scale-95">
        <Phone size={20} />
        <span className="text-[10px] font-bold tracking-widest uppercase text-white/80">Call</span>
      </a>

      <button className="flex-[1.5] py-4 text-center bg-brand-orange hover:bg-brand-brown active:bg-brand-brown text-white transition-all flex flex-col items-center justify-center gap-1 shadow-2xl -mt-2 rounded-t-xl active:scale-95 border-t-2 border-orange-300 z-10">
        <span className="text-sm font-black tracking-widest uppercase">Book Now</span>
      </button>

      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex-1 py-3 text-center border-l bg-brand-dark border-white/10 text-green-400 hover:text-green-300 transition-colors flex flex-col items-center justify-center gap-1 active:scale-95">
        <MessageCircle size={20} />
        <span className="text-[10px] font-bold tracking-widest uppercase text-white/80">Chat</span>
      </a>
    </div>
  );
};

export default StickyMobileNav;
