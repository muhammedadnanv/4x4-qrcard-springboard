import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ColorThemes from '../components/ColorThemes';
import Pricing from '../components/Pricing';
import BookNow from '../components/BookNow';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Features />
      <ColorThemes />
      <Pricing />
      <BookNow />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
