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
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyMobileNav from './components/StickyMobileNav';
import FloatingWidgets from './components/FloatingWidgets';

function App() {
  return (
    <div className="relative overflow-x-hidden min-h-screen text-gray-800 bg-brand-light font-sans">
      
      <Navbar />

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
