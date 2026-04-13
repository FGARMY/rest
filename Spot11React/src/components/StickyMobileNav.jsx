import React from 'react';

const StickyMobileNav = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-brand-dark flex">
      <button className="flex-1 py-4 text-center border-r border-white/10 bg-brand-dark hover:bg-brand-brown text-white text-xs font-semibold tracking-widest uppercase transition-colors">
        Call Now
      </button>
      <button className="flex-1 py-4 text-center bg-brand-orange hover:bg-brand-brown text-white text-xs font-semibold tracking-widest uppercase transition-colors">
        Book Table
      </button>
    </div>
  );
};

export default StickyMobileNav;
