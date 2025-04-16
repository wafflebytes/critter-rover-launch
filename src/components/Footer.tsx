
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About Critter</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-critter-purple">About Us</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-critter-purple">Careers</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-critter-purple">Press</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-critter-purple">Blog</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-critter-purple">Pet Boarding</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-critter-purple">House Sitting</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-critter-purple">Day Care</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-critter-purple">Dog Walking</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-critter-purple">Help Center</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-critter-purple">Trust & Safety</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-critter-purple">Contact Us</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-critter-purple">Community Forum</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-600 hover:text-critter-purple">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-critter-purple">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-critter-purple">
                <Twitter size={20} />
              </a>
            </div>
            
            <p className="text-gray-600 mb-4">Download our app</p>
            <div className="flex space-x-2">
              <a href="#" className="block">
                <img src="https://fakeimg.pl/120x40/222/fff?text=App+Store" alt="App Store" className="h-10" />
              </a>
              <a href="#" className="block">
                <img src="https://fakeimg.pl/120x40/222/fff?text=Play+Store" alt="Play Store" className="h-10" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© 2025 Critter - Redefining Pet Care for Urban India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
