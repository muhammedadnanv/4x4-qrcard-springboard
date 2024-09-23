import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Revolutionize Your Networking</h1>
        <p className="text-xl md:text-2xl mb-4">QR-enabled business cards for the modern professional</p>
        <p className="text-lg md:text-xl mb-8">Share your complete business profile and customize your card's theme to match your brand</p>
        <Button size="lg" variant="secondary">Get Your 4x4 QRCard</Button>
      </div>
    </div>
  );
};

export default Hero;
