import React from 'react';
import { Button } from "@/components/ui/button";
import { QrCode } from 'lucide-react';

const Header = () => {
  const handleOrderNow = () => {
    const upiLink = `upi://pay?pa=adnanmuhammad4393@okicici&pn=4x4QRCards&am=2000&cu=INR&tn=Order4QRCards`;
    window.open(upiLink, '_blank');
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <QrCode className="h-8 w-8 text-blue-600" />
          <div>
            <span className="text-xl font-bold text-gray-800">4x4 QRCards</span>
            <p className="text-xs text-gray-600">by Ad Web Comic Agency</p>
          </div>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#features" className="text-gray-600 hover:text-blue-600">Features</a></li>
            <li><a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
        <Button variant="outline" onClick={handleOrderNow}>Order Now</Button>
      </div>
    </header>
  );
};

export default Header;
