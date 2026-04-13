import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

const StickyMobileNav = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-brand-dark flex border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
      <a href="tel:+919876543210" className="flex-1 py-4 text-center border-r border-white/10 bg-brand-dark hover:bg-brand-brown active:bg-brand-brown text-white transition-colors flex flex-col items-center justify-center gap-1 active:scale-95">
        <Phone size={18} />
        <span className="text-[10px] font-semibold tracking-widest uppercase">Call</span>
      </a>
      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex-1 py-4 text-center border-r border-white/10 bg-green-500 hover:bg-green-600 active:bg-green-600 text-white transition-colors flex flex-col items-center justify-center gap-1 active:scale-95">
        <MessageCircle size={18} />
        <span className="text-[10px] font-semibold tracking-widest uppercase">WhatsApp</span>
      </a>
      <button className="flex-1 py-4 text-center bg-brand-orange hover:bg-brand-brown active:bg-brand-brown text-white transition-colors flex flex-col items-center justify-center gap-1 active:scale-95">
        <Calendar size={18} />
        <span className="text-[10px] font-semibold tracking-widest uppercase">Book Table</span>
      </button>
    </div>
  );
};

export default StickyMobileNav;
