import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import Admission from '../Components/Admission.jsx'; // Assuming you have a CSS file for additional styles

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12 mt-12 rounded-t-3xl shadow-2xl">
      <div className=" mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {/* School Info */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://d1fbuevzm5rgyw.cloudfront.net/footer-scoller/ib.png"
              alt="Logo 1"
              className="h-32 w-auto"
            />
          </div>

          <p className="mb-2 flex items-start">
            <a href="https://www.google.com/maps/place/Alphabet+School/@12.958007,80.2565766,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5267cc9b58bd8f:0xb3a27219f08b67a5!8m2!3d12.958007!4d80.2565766!16s%2Fg%2F11f3zgf_j9?entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-start text-white text-lg mb-2 hover:text-blue-600 transition-colors duration-200">
              <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
              Palavakkam
            </a>
            <a href="https://www.google.com/maps/place/aLphabet/@13.029143,80.254742,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5267c9e1e1f187:0x4c2c09f35633be2c!8m2!3d13.029143!4d80.254742!16s%2Fg%2F1260mfdj8?entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-start text-white text-lg mb-2 hover:text-blue-600 transition-colors duration-200">
              <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
              St'marys Road
            </a>
          </p>
          <p className="mb-2 flex items-center">
            <Mail className="w-5 h-5 mr-2 text-white" />
            <a href="mailto:mail@alphabet.school" className="text-white hover:underline">
              mail@alphabet.school
            </a>
          </p>
        </div>

        {/* Quick Links - Added pl-4 for left padding */}
     {/* Quick Links - Increased pl to pl-12 for more left padding */}
        <div className="pl-12">
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about-us/history" className="hover:text-yellow-200 transition-colors duration-200">About Us</a></li>
            <li><a href="/admission" className="hover:text-yellow-200 transition-colors duration-200">Admission</a></li>
            <li><a href="/programs/ib" className="hover:text-yellow-200 transition-colors duration-200">About IB</a></li>
            <li><a href="/careers" className="hover:text-yellow-200 transition-colors duration-200">Careers</a></li>
          </ul>
        </div>
        {/* About Us section 1 - Increased pl to pl-12 for more left padding */}
        <div className="pl-12">
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">About Us</h3>
          <ul className="space-y-2">
            <li><a href="#about-us" className="hover:text-yellow-200 transition-colors duration-200">About Us</a></li>
            <li><a href="" className="hover:text-yellow-200 transition-colors duration-200">Admission</a></li>
            <li><a href="#news-events" className="hover:text-yellow-200 transition-colors duration-200">News & Events</a></li>
            <li><a href="#" className="hover:text-yellow-200 transition-colors duration-200">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-200 transition-colors duration-200">Careers</a></li>
          </ul>
        </div>
        {/* About Us section 2 - Increased pl to pl-12 for more left padding */}
        <div className="pl-12">
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">About Us</h3>
          <ul className="space-y-2">
            <li><a href="#about-us" className="hover:text-yellow-200 transition-colors duration-200">About Us</a></li>
            <li><a href="" className="hover:text-yellow-200 transition-colors duration-200">Admission</a></li>
            <li><a href="#news-events" className="hover:text-yellow-200 transition-colors duration-200">News & Events</a></li>
            <li><a href="#" className="hover:text-yellow-200 transition-colors duration-200">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-200 transition-colors duration-200">Careers</a></li>
          </ul>
        </div>
        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">Connect With Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200 transition-colors duration-200">
              <Facebook className="w-7 h-7" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200 transition-colors duration-200">
              <Twitter className="w-7 h-7" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200 transition-colors duration-200">
              <Instagram className="w-7 h-7" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200 transition-colors duration-200">
              <Linkedin className="w-7 h-7" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200 transition-colors duration-200">
              <Youtube className="w-7 h-7" />
            </a>
          </div>
        </div>

        {/* Newsletter (Optional) */}
        <div className="lg:col-span-1 md:col-span-3">
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">Stay Updated</h3>
          <p className="text-sm mb-4">Subscribe to our newsletter for the latest news and updates.</p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-4 py-2 rounded-lg text-gray-900 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="bg-yellow-400 text-blue-900 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center border-t border-blue-800 pt-6 mt-8 px-6 md:px-8">
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} aLphabet International School . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;