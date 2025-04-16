
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/lovable-uploads/ceec7c9e-c58b-4bb2-aece-51d6712d441a.png" alt="Critter Logo" className="h-8" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-critter-purple font-medium">
            Search Sitters
          </Link>
          
          <Link to="/" className="text-gray-700 hover:text-critter-purple font-medium">
            Community
          </Link>
          
          <Link to="/" className="text-gray-700 hover:text-critter-purple font-medium">
            Trust & Safety
          </Link>
          
          <Link to="/" className="text-amber-500 hover:text-amber-600 font-medium">
            Become a Sitter
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link to="/signup" className="text-gray-700 hover:text-critter-purple font-medium px-3 py-2">
            Sign Up
          </Link>
          <Button className="bg-critter-purple hover:bg-critter-purple/90">
            Sign In
          </Button>
          <Link to="/help" className="text-gray-700 hover:text-critter-purple font-medium px-3 py-2">
            Help
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-3">
          <Button variant="outline" className="mr-2">
            Sign In
          </Button>
          <button onClick={toggleMenu} className="text-gray-700 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg py-4 px-6 absolute w-full z-50 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-critter-purple font-medium py-2" onClick={toggleMenu}>
              Search Sitters
            </Link>
            
            <Link to="/" className="text-gray-700 hover:text-critter-purple font-medium py-2" onClick={toggleMenu}>
              Community
            </Link>
            
            <Link to="/" className="text-gray-700 hover:text-critter-purple font-medium py-2" onClick={toggleMenu}>
              Trust & Safety
            </Link>
            
            <Link to="/" className="text-amber-500 hover:text-amber-600 font-medium py-2" onClick={toggleMenu}>
              Become a Sitter
            </Link>
            
            <Link to="/signup" className="text-gray-700 hover:text-critter-purple font-medium py-2" onClick={toggleMenu}>
              Sign Up
            </Link>
            
            <Link to="/help" className="text-gray-700 hover:text-critter-purple font-medium py-2" onClick={toggleMenu}>
              Help
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
