import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0B] text-gray-400 py-16 border-t border-white/5 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 text-center md:text-left">
          
          {/* Brand */}
          <div className="max-w-sm">
            <div className="font-serif font-bold text-3xl tracking-wide text-white mb-4">
              SPOT<span className="text-brand-orange">11</span> ENJOY
            </div>
            <p className="font-light leading-relaxed">
              Where Every Visit Feels Worth It. A premium family restaurant and bar experience in the heart of Pune.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8 md:gap-16 font-light uppercase tracking-widest text-xs">
            <div className="flex flex-col gap-4">
              <a href="#about" className="hover:text-brand-orange transition-colors">Story</a>
              <a href="#food" className="hover:text-brand-orange transition-colors">Menu</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#ambiance" className="hover:text-brand-orange transition-colors">Ambiance</a>
              <a href="#contact" className="hover:text-brand-orange transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light">
          <p>&copy; {new Date().getFullYear()} Spot11 Enjoy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-orange transition-colors">Facebook</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Google</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
