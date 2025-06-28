import React from 'react';

const Gallery: React.FC = () => {
  const galleryImages = [
    {
      url: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Greenhouse Collection",
      description: "Our premium greenhouse facility"
    },
    {
      url: "https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Indoor Garden Setup",
      description: "Beautiful indoor plant arrangements"
    },
    {
      url: "https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Balcony Garden",
      description: "Transform your balcony into a green paradise"
    },
    {
      url: "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Herb Garden",
      description: "Fresh herbs for your kitchen"
    },
    {
      url: "https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Flower Garden",
      description: "Colorful blooms throughout the year"
    },
    {
      url: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Vegetable Garden",
      description: "Organic vegetables from garden to table"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our beautiful collection of gardens, plants, and successful projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Before & After Transformations</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Before</h4>
              <img 
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Before transformation"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="bg-green-50 p-6 rounded-2xl">
              <h4 className="text-lg font-bold text-gray-900 mb-4">After</h4>
              <img 
                src="https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="After transformation"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;