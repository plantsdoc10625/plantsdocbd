import React, { useState } from 'react';
import { ShoppingCart, Star, Filter } from 'lucide-react';

const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'indoor', name: 'Indoor Plants' },
    { id: 'outdoor', name: 'Outdoor Plants' },
    { id: 'seeds', name: 'Seeds' },
    { id: 'tools', name: 'Tools' },
    { id: 'fertilizers', name: 'Fertilizers' }
  ];

  const products = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      category: "indoor",
      price: 1200,
      originalPrice: 1500,
      rating: 4.8,
      image: "https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Beautiful indoor plant perfect for home decoration"
    },
    {
      id: 2,
      name: "Rose Plant",
      category: "outdoor",
      price: 800,
      originalPrice: 1000,
      rating: 4.9,
      image: "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Fragrant roses for your garden"
    },
    {
      id: 3,
      name: "Tomato Seeds",
      category: "seeds",
      price: 150,
      originalPrice: 200,
      rating: 4.7,
      image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "High-quality tomato seeds for home gardening"
    },
    {
      id: 4,
      name: "Garden Tool Set",
      category: "tools",
      price: 2500,
      originalPrice: 3000,
      rating: 4.6,
      image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Complete set of essential gardening tools"
    },
    {
      id: 5,
      name: "Organic Fertilizer",
      category: "fertilizers",
      price: 600,
      originalPrice: 750,
      rating: 4.8,
      image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Natural organic fertilizer for healthy plant growth"
    },
    {
      id: 6,
      name: "Snake Plant",
      category: "indoor",
      price: 900,
      originalPrice: 1100,
      rating: 4.9,
      image: "https://images.pexels.com/photos/7084308/pexels-photo-7084308.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Low-maintenance indoor air purifying plant"
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Shop</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our premium collection of plants, seeds, and gardening supplies
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {product.originalPrice > product.price && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                    Save ৳{product.originalPrice - product.price}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-600">৳{product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-lg text-gray-500 line-through">৳{product.originalPrice}</span>
                    )}
                  </div>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2">
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Special Offers</h3>
          <p className="text-xl mb-6">Get 20% off on orders above ৳2000</p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white bg-opacity-20 px-6 py-3 rounded-full">
              <span className="font-medium">Free Delivery on orders above ৳1500</span>
            </div>
            <div className="bg-white bg-opacity-20 px-6 py-3 rounded-full">
              <span className="font-medium">Plant Care Guide with every purchase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;