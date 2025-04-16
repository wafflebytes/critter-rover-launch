import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-critter-purple">Critter</span>
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              Connecting pet owners with trusted pet sitters and dog walkers for reliable, loving pet care.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin size={18} className="text-critter-purple mr-2 mt-0.5" />
                <p className="text-gray-600">123 Pet Street, Bangalore, Karnataka 560001, India</p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-critter-purple mr-2" />
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-critter-purple mr-2" />
                <p className="text-gray-600">support@critter.com</p>
              </div>
            </div>
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
              <li>
                <Link to="/" className="text-gray-600 hover:text-critter-purple">Pet Grooming</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-critter-purple">Vet Services</Link>
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
                <Link to="/" className="text-gray-600 hover:text-critter-purple">Safety</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-critter-purple">Cancellation Policy</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-critter-purple">Service Guarantee</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-critter-purple">FAQs</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-critter-purple">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-critter-purple">About Us</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-critter-purple">Careers</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-critter-purple">Blog</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-critter-purple">Press</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-critter-purple">Partners</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-critter-purple">Investor Relations</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Critter. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-critter-purple">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-critter-purple">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-critter-purple">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-critter-purple">
              <Youtube size={20} />
            </a>
          </div>

          <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
            <Link to="/" className="text-gray-600 hover:text-critter-purple">
              Privacy Policy
            </Link>
            <Link to="/" className="text-gray-600 hover:text-critter-purple">
              Terms of Service
            </Link>
            <Link to="/" className="text-gray-600 hover:text-critter-purple">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
