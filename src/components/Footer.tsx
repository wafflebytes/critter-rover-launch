
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Critter</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Our Story</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">How It Works</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Testimonials</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Careers</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Press</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Dog Walking</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Pet Grooming</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Pet Training</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Veterinary Services</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Pet Meetups</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Help Center</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">FAQs</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Contact Us</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Safety</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Community Guidelines</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Cookie Policy</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Service Agreement</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Licensing</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <Link to="/" className="flex items-center">
                <img src="/lovable-uploads/ceec7c9e-c58b-4bb2-aece-51d6712d441a.png" alt="Critter Logo" className="h-8 brightness-200" />
              </Link>
            </div>
            
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-left mt-4">
            <p className="text-gray-400 text-sm">© 2025 Critter - Redefining Pet Care for Urban India</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
