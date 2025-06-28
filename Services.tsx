import React from 'react';
import { Leaf, Scissors, Droplets, Bug, Home, Truck } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Plant Consultation",
      description: "Expert advice on plant selection, care, and maintenance for your specific needs and environment.",
      price: "Starting from ৳500"
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Pruning & Trimming",
      description: "Professional pruning services to keep your plants healthy and beautifully shaped.",
      price: "Starting from ৳300"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Irrigation Setup",
      description: "Design and install efficient watering systems for gardens of all sizes.",
      price: "Starting from ৳2000"
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: "Pest Control",
      description: "Safe and effective pest management solutions to protect your plants naturally.",
      price: "Starting from ৳800"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Garden Design",
      description: "Complete garden planning and design services for balconies, rooftops, and yards.",
      price: "Starting from ৳1500"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Plant Delivery",
      description: "Safe delivery and installation of plants directly to your location.",
      price: "Starting from ৳200"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive plant care and agricultural services to help your garden thrive
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-green-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-semibold">{service.price}</span>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Our Services?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Expert Team</h4>
              <p className="text-gray-600">Certified professionals with years of experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Eco-Friendly</h4>
              <p className="text-gray-600">Sustainable and environmentally conscious methods</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💯</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Satisfaction Guaranteed</h4>
              <p className="text-gray-600">100% satisfaction guarantee on all our services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;