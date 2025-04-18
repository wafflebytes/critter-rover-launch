import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Coins, Dog, Cat, Moon, Scissors, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [coins] = useState(150); // User's critter coins
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="backdrop-blur-md bg-white/70 sticky top-0 z-50 shadow-md py-3 border-b border-white/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="h-7"
            >
              <img
                src="/critter-logo.png"
                alt="Critter"
                className="h-full"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link to="/find-walkers" className="text-gray-800 hover:text-critter-purple font-medium transition-colors">
              Find a Walker
            </Link>

            <Link to="/community" className="text-gray-800 hover:text-critter-purple font-medium transition-colors">
              Community
            </Link>

            <div className="relative group">
              <button className="flex items-center text-gray-800 hover:text-critter-purple font-medium transition-colors">
                Services
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-52 bg-white rounded-lg shadow-lg py-2 z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 border border-gray-100">
                <Link to="/pet-sitting" className="block px-4 py-2 text-gray-800 hover:bg-[#B9E900]/10 hover:text-critter-purple flex items-center">
                  <Cat size={16} className="mr-2 text-critter-purple" />
                  Pet Sitting
                </Link>
                <Link to="/overnight-care" className="block px-4 py-2 text-gray-800 hover:bg-[#B9E900]/10 hover:text-critter-purple flex items-center">
                  <Moon size={16} className="mr-2 text-critter-purple" />
                  Overnight Care
                </Link>
                <Link to="/pet-grooming" className="block px-4 py-2 text-gray-800 hover:bg-[#B9E900]/10 hover:text-critter-purple flex items-center">
                  <Scissors size={16} className="mr-2 text-critter-purple" />
                  Pet Grooming
                </Link>
                <Link to="/vet-consultation" className="block px-4 py-2 text-gray-800 hover:bg-[#B9E900]/10 hover:text-critter-purple flex items-center">
                  <Stethoscope size={16} className="mr-2 text-critter-purple" />
                  Vet Consultation
                </Link>
              </div>
            </div>
          </nav>

          {/* Auth Buttons & Coins */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div
              className="flex items-center bg-yellow-50 border border-yellow-200 px-3 py-2 rounded-full cursor-pointer hover:bg-yellow-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/critter-coins')}
            >
              <Coins className="text-yellow-500 mr-1.5" />
              <span className="text-sm font-bold text-yellow-700">{coins}</span>
            </motion.div>

            <Link to="/profile">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-critter-purple text-white rounded-full w-9 h-9 flex items-center justify-center font-bold cursor-pointer"
              >
                <span>AK</span>
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <motion.div
              className="flex items-center bg-yellow-50 border border-yellow-200 px-3 py-1.5 rounded-full cursor-pointer hover:bg-yellow-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/critter-coins')}
            >
              <Coins size={14} className="text-yellow-500 mr-1" />
              <span className="text-xs font-bold text-yellow-700">{coins}</span>
            </motion.div>

            <motion.button
              className="text-gray-700"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-gray-100/50 backdrop-blur-sm bg-white/80 rounded-b-lg"
          >
            <nav className="flex flex-col space-y-3">
              <Link
                to="/find-walkers"
                className="text-gray-800 hover:text-critter-purple py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Find a Walker
              </Link>
              <Link
                to="/community"
                className="text-gray-800 hover:text-critter-purple py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </Link>
              <button className="flex items-center justify-between text-gray-800 hover:text-critter-purple py-2 font-medium w-full">
                Other Services
                <ChevronDown size={16} />
              </button>
              <div className="pl-4 flex flex-col space-y-2 text-sm">
                <Link to="/pet-sitting" className="text-gray-700 hover:text-critter-purple py-1 flex items-center">
                  <Cat size={14} className="mr-2 text-critter-purple" />
                  Pet Sitting
                </Link>
                <Link to="/overnight-care" className="text-gray-700 hover:text-critter-purple py-1 flex items-center">
                  <Moon size={14} className="mr-2 text-critter-purple" />
                  Overnight Care
                </Link>
                <Link to="/pet-grooming" className="text-gray-700 hover:text-critter-purple py-1 flex items-center">
                  <Scissors size={14} className="mr-2 text-critter-purple" />
                  Pet Grooming
                </Link>
                <Link to="/vet-consultation" className="text-gray-700 hover:text-critter-purple py-1 flex items-center">
                  <Stethoscope size={14} className="mr-2 text-critter-purple" />
                  Veterinary Consultation
                </Link>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <span className="text-sm text-gray-500 font-medium">Your Account</span>
                <Link to="/profile">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-critter-purple text-white rounded-full w-8 h-8 flex items-center justify-center font-bold"
                  >
                    <span className="text-sm">AK</span>
                  </motion.div>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
