import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Best Indoor Plants for Beginners",
      excerpt: "Starting your indoor garden journey? Here are the most forgiving and beautiful plants perfect for beginners.",
      author: "Dr. Rahman",
      date: "March 15, 2024",
      image: "https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Indoor Gardening"
    },
    {
      id: 2,
      title: "Seasonal Planting Guide for Bangladesh",
      excerpt: "Learn when and what to plant throughout the year for optimal growth in Bangladesh's climate.",
      author: "Fatima Khan",
      date: "March 10, 2024",
      image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Seasonal Tips"
    },
    {
      id: 3,
      title: "Creating a Balcony Garden in Small Spaces",
      excerpt: "Transform your tiny balcony into a lush green space with these space-saving techniques and plant choices.",
      author: "Ahmed Hassan",
      date: "March 5, 2024",
      image: "https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Small Space Gardening"
    },
    {
      id: 4,
      title: "Natural Pest Control Methods",
      excerpt: "Protect your plants without harmful chemicals using these effective natural pest control techniques.",
      author: "Dr. Rahman",
      date: "February 28, 2024",
      image: "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Plant Care"
    },
    {
      id: 5,
      title: "Composting at Home: A Complete Guide",
      excerpt: "Turn your kitchen scraps into nutrient-rich compost for your plants with this step-by-step guide.",
      author: "Fatima Khan",
      date: "February 20, 2024",
      image: "https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Sustainability"
    },
    {
      id: 6,
      title: "Growing Vegetables in Containers",
      excerpt: "Enjoy fresh homegrown vegetables even without a yard using container gardening techniques.",
      author: "Ahmed Hassan",
      date: "February 15, 2024",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Vegetable Gardening"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert tips, guides, and insights to help you succeed in your gardening journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <button className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium transition-colors duration-200">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium">
            View All Posts
          </button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-xl mb-6">Subscribe to our newsletter for the latest gardening tips and updates</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;