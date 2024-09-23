import React from 'react';
import { Smartphone, Link, RefreshCcw, Shield } from 'lucide-react';

const FeatureItem = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    {icon}
    <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose 4x4 QRCards?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureItem 
            icon={<Smartphone className="h-12 w-12 text-blue-600" />}
            title="Instant Digital Connection"
            description="Scan and save contact info directly to smartphones."
          />
          <FeatureItem 
            icon={<Link className="h-12 w-12 text-blue-600" />}
            title="Dynamic Content"
            description="Update your info anytime without reprinting cards."
          />
          <FeatureItem 
            icon={<RefreshCcw className="h-12 w-12 text-blue-600" />}
            title="Eco-Friendly"
            description="Reduce paper waste with our sustainable solution."
          />
          <FeatureItem 
            icon={<Shield className="h-12 w-12 text-blue-600" />}
            title="Data Security"
            description="Control what information you share and with whom."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
