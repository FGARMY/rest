import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          
          {/* Left Text */}
          <div className="w-full lg:w-1/2">
            <h4 className="text-brand-orange uppercase tracking-widest text-sm font-semibold mb-2">Our Story</h4>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-dark leading-tight">
              Not Just a Restaurant — <br/>
              <span className="italic text-brand-brown font-normal">Your Go-To Spot.</span>
            </h2>
            <div className="space-y-4 text-gray-600 font-light text-lg leading-relaxed">
              <p>
                Spot11 Enjoy was created with a simple vision: to offer a space where comfort meets culinary excellence. Whether you're here for a family dinner, catching up with friends, or enjoying a quiet evening at the bar, our ambience is designed to make you feel right at home.
              </p>
              <p>
                We believe that dining out is about more than just food; it's about the memories made around the table. That's why every detail, from our lighting to our playlists, is curated for your perfect evening.
              </p>
            </div>
            <div className="mt-10">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Signature_placeholder.svg" alt="Chef Signature" className="h-12 opacity-40"/>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 mt-8 md:mt-0 px-4 md:px-0">
            <div className="relative w-full max-w-[280px] sm:max-w-sm mx-auto lg:max-w-none">
              <div className="absolute -inset-4 border border-brand-orange/20 rounded-t-full hidden md:block"></div>
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80" 
                alt="Spot11 Interior" 
                className="w-full h-auto rounded-t-full object-cover shadow-2xl relative z-10 aspect-[3/4]"
              />
              <div className="absolute -bottom-6 left-4 md:-bottom-8 md:-left-8 bg-white p-4 md:p-6 shadow-xl z-20 max-w-[240px] md:max-w-xs border border-gray-100">
                <p className="font-serif italic text-sm md:text-lg text-brand-dark">
                  "The perfect blend of elegant dining and relaxed conversations."
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Directional Cue */}
        <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/40">Next: Your Table is Ready</span>
                <motion.span 
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="text-brand-orange text-lg"
                >
                    👇
                </motion.span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;
