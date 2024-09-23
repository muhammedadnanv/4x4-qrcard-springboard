import React from 'react';
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PricingTier = ({ quantity, totalPrice, features }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
    <h3 className="text-2xl font-bold mb-4">{quantity} QR Cards</h3>
    <p className="text-4xl font-bold mb-6">₹{totalPrice.toLocaleString('en-IN')}</p>
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
      quantity: 1,
      totalPrice: 2000,
      features: [
        "1 High-quality QR Card",
        "Basic customization",
        "Standard support"
      ]
    },
    {
      quantity: 4,
      totalPrice: 2000,
      features: [
        "4 High-quality QR Cards",
        "Advanced customization",
        "Priority support",
        "Analytics dashboard"
      ]
    },
    {
      quantity: 1000,
      totalPrice: 5000,
      features: [
        "1000 Premium QR Cards",
        "Full customization",
        "24/7 support",
        "Advanced analytics",
        "Bulk order discount"
      ]
    },
    {
      quantity: 2000,
      totalPrice: 9000,
      features: [
        "2000 Deluxe QR Cards",
        "Full customization",
        "24/7 VIP support",
        "Comprehensive analytics",
        "Maximum bulk discount",
        "Free design consultation"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
