import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-500">
                <img 
                  src="/WhatsApp Image 2025-05-23 at 09.37.35_69a78ed5.jpg" 
                  alt="Plants Doc BD Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Plants Doc BD</h3>
                <p className="text-green-400">From Balcony to Bounty</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transform your space into a green paradise with our expert agricultural services and premium plant collection. 
              We're committed to helping you grow beautiful, healthy plants.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => setCurrentPage('home')}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('about')}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('services')}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('shop')}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  Shop
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('blog')}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  123 Green Street, Dhanmondi<br />
                  Dhaka 1205, Bangladesh
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">+880 1234-567890</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">info@plantsdocbd.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Plants Doc BD. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;