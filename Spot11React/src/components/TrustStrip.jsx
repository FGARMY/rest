import React from 'react';
import { Star, Users, MapPin } from 'lucide-react';

const TrustStrip = () => {
  return (
    <div className="bg-brand-brown/10 border-b border-brand-orange/20 py-3 md:py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center sm:justify-between items-center gap-x-5 gap-y-3 text-[10px] sm:text-sm font-bold text-brand-dark tracking-tight">
        
        <div className="flex items-center gap-2">
          <Star className="text-brand-orange fill-brand-orange w-3 h-3 sm:w-5 sm:h-5" />
          <span>4.5+ Rating</span>
        </div>

        <div className="hidden sm:block h-4 w-px bg-brand-dark/20"></div>

        <div className="flex items-center gap-2">
          <Users className="text-brand-orange w-3 h-3 sm:w-5 sm:h-5" />
          <span>1000+ Visitors</span>
        </div>

        <div className="hidden sm:block h-4 w-px bg-brand-dark/20"></div>

        <div className="flex items-center gap-2">
          <MapPin className="text-brand-orange w-3 h-3 sm:w-5 sm:h-5" />
          <span>#1 in Dhanori</span>
        </div>

      </div>
    </div>
  );
};

export default TrustStrip;
