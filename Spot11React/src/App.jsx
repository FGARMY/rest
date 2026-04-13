import React from 'react';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';


import About from './components/About';


import FoodExperience from './components/FoodExperience';


import VideoReel from './components/VideoReel';
import DrinksHighlight from './components/DrinksHighlight';
import AmbianceGallery from './components/AmbianceGallery';
import Reviews from './components/Reviews';
import SignaturePunch from './components/SignaturePunch';

import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyMobileNav from './components/StickyMobileNav';
import FloatingWidgets from './components/FloatingWidgets';

function App() {
  return (
    <div className="relative overflow-x-hidden min-h-screen text-gray-800 bg-brand-light font-sans">
      
      {/* Desktop Navigation */}
      <nav className="absolute top-0 w-full z-50 py-6 px-6 lg:px-12 flex justify-between items-center text-white mix-blend-difference">
        <div className="font-serif font-bold text-2xl tracking-wide">
          SPOT<span className="text-brand-orange">11</span> ENJOY
        </div>
        <div className="hidden md:flex gap-8 font-medium tracking-wide text-sm uppercase">
          <a href="#about" className="hover:text-brand-orange transition-colors">Story</a>
          <a href="#food" className="hover:text-brand-orange transition-colors">Menu</a>
          <a href="#ambiance" className="hover:text-brand-orange transition-colors">Ambiance</a>
          <a href="#contact" className="hover:text-brand-orange transition-colors">Contact</a>
        </div>
        <div className="hidden md:block">
          <button className="px-6 py-2 border border-white hover:bg-white hover:text-brand-dark transition-colors duration-300 rounded font-medium tracking-wide text-sm uppercase">
            Reserve Table
          </button>
        </div>
      </nav>

      <main className="pb-32 md:pb-0">
        <Hero />
        <TrustStrip />

        <VideoReel />

        <FoodExperience />

        <AmbianceGallery />

        <DrinksHighlight />
        <SignaturePunch />
        <Reviews />

        <About />


        <FinalCTA />
      </main>

      <Footer />
      <StickyMobileNav />
      <FloatingWidgets />
    </div>
  );
}

export default App;
