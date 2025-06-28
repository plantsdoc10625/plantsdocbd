import React from 'react';
import { Leaf, ShoppingCart, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-green-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-green-500 shadow-lg mb-6">
              <img 
                src="/WhatsApp Image 2025-05-23 at 09.37.35_69a78ed5.jpg" 
                alt="Plants Doc BD Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Plants Doc <span className="text-green-600">BD</span>
            </h1>
            <p className="text-2xl text-green-700 font-medium mb-8">From Balcony to Bounty</p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your space into a green paradise with our expert agricultural services and premium plant collection. 
              Whether you're starting with a small balcony or managing a large garden, we're here to help you grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Care</h3>
              <p className="text-gray-600">Professional plant consultation and care services for optimal growth</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <ShoppingCart className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Products</h3>
              <p className="text-gray-600">High-quality plants, seeds, and gardening supplies for every need</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Support</h3>
              <p className="text-gray-600">Join our growing community of plant enthusiasts and gardening experts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;