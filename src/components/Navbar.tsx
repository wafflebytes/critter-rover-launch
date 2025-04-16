
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [coins] = useState(150); // This would come from user auth in a real app

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/lovable-uploads/ceec7c9e-c58b-4bb2-aece-51d6712d441a.png" alt="Critter Logo" className="h-8" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-critter-purple font-medium">
            Find a Companion
          </Link>
          
          <Link to="/" className="text-gray-700 hover:text-critter-purple font-medium">
            Community
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-gray-700 hover:text-critter-purple font-medium flex items-center">
                Services <ChevronDown size={16} className="ml-1" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white p-2 rounded-lg shadow-lg">
              <DropdownMenuItem>
                <Link to="/" className="flex w-full p-2 hover:bg-critter-lightGray rounded-md">Pet Grooming</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/" className="flex w-full p-2 hover:bg-critter-lightGray rounded-md">Pet Training</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/" className="flex w-full p-2 hover:bg-critter-lightGray rounded-md">Vet Booking</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-2">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-critter-purple flex items-center justify-center text-white">
                    <User size={20} />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-yellow-400 text-xs font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                    {coins}
                  </div>
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white p-2 rounded-lg shadow-lg">
              <div className="px-4 py-2 text-sm font-medium text-gray-700 border-b">
                {coins} CritterCoins
              </div>
              <DropdownMenuItem>
                <Link to="/" className="flex w-full p-2 hover:bg-critter-lightGray rounded-md">Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/" className="flex w-full p-2 hover:bg-critter-lightGray rounded-md">Bookings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/" className="flex w-full p-2 hover:bg-critter-lightGray rounded-md">My Walks</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/" className="flex w-full p-2 hover:bg-critter-lightGray rounded-md">Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg py-4 px-6 absolute w-full z-50 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-critter-purple font-medium py-2" onClick={toggleMenu}>
              Find a Companion
            </Link>
            
            <Link to="/" className="text-gray-700 hover:text-critter-purple font-medium py-2" onClick={toggleMenu}>
              Community
            </Link>
            
            <div className="relative">
              <button className="text-gray-700 w-full text-left font-medium py-2 flex items-center justify-between" onClick={() => {}}>
                Services <ChevronDown size={16} />
              </button>
              <div className="pl-4 mt-2 border-l-2 border-gray-200 space-y-2">
                <Link to="/" className="block text-gray-600 hover:text-critter-purple py-1" onClick={toggleMenu}>
                  Pet Grooming
                </Link>
                <Link to="/" className="block text-gray-600 hover:text-critter-purple py-1" onClick={toggleMenu}>
                  Pet Training
                </Link>
                <Link to="/" className="block text-gray-600 hover:text-critter-purple py-1" onClick={toggleMenu}>
                  Vet Booking
                </Link>
              </div>
            </div>
            
            <div className="flex items-center justify-between py-2">
              <span className="font-medium text-gray-700">Profile</span>
              <span className="text-sm font-bold text-yellow-600">{coins} CritterCoins</span>
            </div>
            
            <div className="pl-4 border-l-2 border-gray-200 space-y-2">
              <Link to="/" className="block text-gray-600 hover:text-critter-purple py-1" onClick={toggleMenu}>
                Dashboard
              </Link>
              <Link to="/" className="block text-gray-600 hover:text-critter-purple py-1" onClick={toggleMenu}>
                Bookings
              </Link>
              <Link to="/" className="block text-gray-600 hover:text-critter-purple py-1" onClick={toggleMenu}>
                My Walks
              </Link>
              <Link to="/" className="block text-gray-600 hover:text-critter-purple py-1" onClick={toggleMenu}>
                Logout
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
