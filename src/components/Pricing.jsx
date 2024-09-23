import React from 'react';
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PricingTier = ({ quantity, pricePerCard, totalPrice, discount, originalPrice, features }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
    <h3 className="text-2xl font-bold mb-4">{quantity} Business Cards</h3>
    <p className="text-lg mb-2">₹{pricePerCard.toFixed(2)} each</p>
    <p className="text-4xl font-bold mb-2">₹{totalPrice.toLocaleString('en-IN')}</p>
    <p className="text-green-600 mb-6">{discount}% off (₹{originalPrice.toLocaleString('en-IN')})</p>
    <ul className="mb-6 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center mb-2">
          <Check className="h-5 w-5 text-green-500 mr-2" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Button className="w-full">Order Now</Button>
  </div>
);

const Pricing = () => {
  const tiers = [
    {
      quantity: 1000,
      pricePerCard: 3.50,
      totalPrice: 3500,
      discount: 65,
      originalPrice: 19980,
      features: [
        "High-quality QR Cards",
        "Basic customization",
        "Standard support"
      ]
    },
    {
      quantity: 1500,
      pricePerCard: 2.99,
      totalPrice: 4485,
      discount: 70,
      originalPrice: 14970,
      features: [
        "Premium QR Cards",
        "Advanced customization",
        "Priority support",
        "Analytics dashboard"
      ]
    },
    {
      quantity: 2000,
      pricePerCard: 2.99,
      totalPrice: 5980,
      discount: 70,
      originalPrice: 19960,
      features: [
        "Deluxe QR Cards",
        "Full customization",
        "24/7 support",
        "Advanced analytics",
        "API access"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
