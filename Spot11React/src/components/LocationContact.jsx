import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const LocationContact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Info */}
          <div>
            <h4 className="text-brand-orange uppercase tracking-widest text-sm font-semibold mb-3">Visit Us</h4>
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-brand-dark">
              We're Waiting <span className="italic text-brand-brown font-normal">For You</span>
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1"><MapPin className="text-brand-orange" /></div>
                <div>
                  <h5 className="font-bold text-lg mb-1">Spot11 Enjoy</h5>
                  <p className="text-gray-500 font-light">Near Main Dhanori Circle, Dhanori, <br/>Pune, Maharashtra 411015</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1"><Clock className="text-brand-orange" /></div>
                <div>
                  <h5 className="font-bold text-lg mb-1">Hours</h5>
                  <p className="text-gray-500 font-light">Family Dining: 11 AM - 11 PM<br/>The Bar: 5 PM - 1 AM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1"><Phone className="text-brand-orange" /></div>
                <div>
                  <h5 className="font-bold text-lg mb-1">Contact</h5>
                  <p className="text-gray-500 font-light">+91 98765 43210</p>
                </div>
              </div>
            </div>

            <div className="flex sm:flex-row flex-col gap-4">
              <button className="flex items-center justify-center gap-2 px-8 py-3 bg-brand-dark text-white font-medium tracking-wide text-sm uppercase hover:bg-brand-orange transition-colors duration-300">
                <Phone size={16} /> Call Now
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-3 border border-brand-dark text-brand-dark font-medium tracking-wide text-sm uppercase hover:bg-brand-light transition-colors duration-300">
                <Navigation size={16} /> Get Directions
              </button>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] lg:h-[500px] w-full bg-gray-100 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15128.219973278278!2d73.8828859!3d18.5714392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c13fa0bbba83%3A0xb3fcba9198305c4a!2sDhanori%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
              loading="lazy"
              title="Restaurant Location"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationContact;
