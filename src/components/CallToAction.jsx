import React from 'react';
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  const handleOrderNow = () => {
    const upiLink = `upi://pay?pa=adnanmuhammad4393@okicici&pn=4x4QRCards&am=2000&cu=INR&tn=Order4QRCards`;
    window.open(upiLink, '_blank');
  };

  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Networking?</h2>
        <p className="text-xl mb-8">Order your custom 4x4 QRCard today and step into the future of business connections.</p>
        <Button size="lg" variant="secondary" onClick={handleOrderNow}>Order Now</Button>
      </div>
    </section>
  );
};

export default CallToAction;
