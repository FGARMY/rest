import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0A0A0B] text-gray-400 py-12 md:py-16 border-t border-white/5 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 lg:gap-12">
          
          {/* Brand & Contact Info */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="font-serif font-bold text-3xl tracking-wide text-white mb-2">
              SPOT<span className="text-yellow-400">11</span> ENJOY
            </div>
            <p className="font-light leading-relaxed text-sm">
              Where Every Visit Feels Worth It. A premium family restaurant and bar experience in the heart of Pune.
            </p>
            
            <div className="space-y-4 mt-4 text-sm font-light">
              <div className="flex items-start gap-3">
                <MapPin className="text-brand-orange shrink-0 mt-0.5" size={18} />
                <p>Near Main Dhanori Circle, Dhanori, <br/>Pune, Maharashtra 411015</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-brand-orange shrink-0 mt-0.5" size={18} />
                <p>Family Dining: 11 AM - 11 PM<br/>The Bar: 5 PM - 1 AM</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-brand-orange shrink-0 mt-0.5" size={18} />
                <p>+91 98765 43210</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold tracking-widest text-[10px] uppercase mb-4">Quick Links</h4>
            <div className="flex flex-col gap-4 font-light text-sm">
              <a href="#about" className="hover:text-brand-orange transition-colors">Our Story</a>
              <a href="#food" className="hover:text-brand-orange transition-colors">The Menu</a>
              <a href="#ambiance" className="hover:text-brand-orange transition-colors">Ambiance Gallery</a>
              <a href="https://maps.google.com/?q=Spot11+Enjoy+Dhanori" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors text-brand-orange font-medium mt-2">
                📍 Get Directions
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="md:col-span-4 h-48 md:h-full min-h-[200px] w-full bg-white/5 rounded-lg overflow-hidden border border-white/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15128.219973278278!2d73.8828859!3d18.5714392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c13fa0bbba83%3A0xb3fcba9198305c4a!2sDhanori%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              className="w-full h-full border-0 md:grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
              loading="lazy"
              title="Restaurant Location"
            ></iframe>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light">
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
