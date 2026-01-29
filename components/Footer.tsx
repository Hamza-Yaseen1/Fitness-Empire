import Link from 'next/link';
import { Phone, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">FE</span>
              </div>
              <span className="text-xl font-bold">Fitness Empire</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your premier destination for fitness and wellness in Karachi. Join us today!
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-red-600 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-red-600 transition-colors">About</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-red-600 transition-colors">Services</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-red-600 transition-colors">Pricing</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-red-600 transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 text-red-600" />
                <span className="text-gray-400">Plot No. 554/555, Saeedabad Share, Area 5J, 24 Market Road, Baldia Town, Karachi</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-red-600" />
                <span className="text-gray-400">+92 317 1230609</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock size={16} className="text-red-600" />
                <span className="text-gray-400">7:00 AM – 11:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Fitness Empire Gym. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;