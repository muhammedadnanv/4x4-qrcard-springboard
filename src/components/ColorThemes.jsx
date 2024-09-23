import React from 'react';

const ColorSwatch = ({ colors }) => (
  <div className="flex space-x-2">
    {colors.map((color, index) => (
      <div key={index} className={`w-8 h-8 rounded-full ${color}`}></div>
    ))}
  </div>
);

const ColorThemes = () => {
  const themes = [
    { name: "Classic", colors: ["bg-gray-800", "bg-gray-200", "bg-white", "bg-blue-500"] },
    { name: "Nature", colors: ["bg-green-700", "bg-green-500", "bg-yellow-300", "bg-brown-500"] },
    { name: "Tech", colors: ["bg-purple-600", "bg-indigo-400", "bg-pink-400", "bg-gray-900"] },
    { name: "Elegant", colors: ["bg-black", "bg-gray-300", "bg-white", "bg-gold-500"] },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Customize Your Card's Look</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {themes.map((theme, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{theme.name}</h3>
              <ColorSwatch colors={theme.colors} />
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-lg">Choose from our pre-designed themes or create your own to match your brand identity perfectly.</p>
      </div>
    </section>
  );
};

export default ColorThemes;