import React from 'react';
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PricingTier = ({ name, price, features }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
    <h3 className="text-2xl font-bold mb-4">{name}</h3>
    <p className="text-4xl font-bold mb-6">${price}</p>
    <ul className="mb-6 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center mb-2">
          <Check className="h-5 w-5 text-green-500 mr-2" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Button className="w-full">Choose {name}</Button>
  </div>
);

const Pricing = () => {
  const tiers = [
    {
      name: "Basic",
      price: 1000,
      features: [
        "100 QR Cards",
        "Basic customization",
        "Standard support"
      ]
    },
    {
      name: "Pro",
      price: 1400,
      features: [
        "250 QR Cards",
        "Advanced customization",
        "Priority support",
        "Analytics dashboard"
      ]
    },
    {
      name: "Enterprise",
      price: 2000,
      features: [
        "500 QR Cards",
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