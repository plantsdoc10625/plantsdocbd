import React from 'react';
import { Award, Heart, Sprout, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Plants Doc BD</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are passionate about bringing the joy of gardening to everyone, from small balcony gardens to large agricultural projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded with a vision to make gardening accessible to everyone, Plants Doc BD has been serving the community 
              with expert agricultural services and premium plant products. Our journey began with a simple belief: 
              every space, no matter how small, can be transformed into a thriving green sanctuary.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From helping apartment dwellers create beautiful balcony gardens to assisting farmers with large-scale 
              agricultural solutions, we've grown to become a trusted partner in your green journey.
            </p>
          </div>
          <div className="bg-green-50 p-8 rounded-2xl">
            <img 
              src="https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Our greenhouse" 
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-green-50 rounded-2xl">
            <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-2">Expert Knowledge</h4>
            <p className="text-gray-600">Years of experience in plant care and agriculture</p>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-2xl">
            <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-2">Passionate Care</h4>
            <p className="text-gray-600">We treat every plant with love and attention</p>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-2xl">
            <Sprout className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-2">Quality Products</h4>
            <p className="text-gray-600">Premium plants and gardening supplies</p>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-2xl">
            <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-2">Customer Focus</h4>
            <p className="text-gray-600">Your success is our primary goal</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;