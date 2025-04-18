import { useState } from 'react';
import { Calendar, MapPin, Star, Heart, Search, Award, Clock3, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PetSitter {
  id: number;
  name: string;
  title: string;
  rating: number;
  reviews: number;
  clients: number;
  location: string;
  price: number;
  image: string;
  description: string;
  specialties?: string[];
  experience?: number;
  availableNow?: boolean;
  nextAvailable?: string;
  homeType?: string;
}

const PetSitting = () => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [petType, setPetType] = useState('');

  const sitters: PetSitter[] = [
    {
      id: 1,
      name: "Priya S.",
      title: "Your pet's home away from home",
      rating: 5.0,
      reviews: 87,
      clients: 32,
      location: "Indiranagar, Bangalore",
      price: 800,
      image: "https://api.dicebear.com/9.x/miniavs/svg?seed=Priya&backgroundColor=f8d9e0",
      description: "I love caring for pets in my home. I have a spacious apartment with a small garden area. Your pet will receive personalized attention, regular updates, and lots of love...",
      specialties: ["Dogs", "Cats", "Daily Updates"],
      experience: 6,
      availableNow: true,
      homeType: "Apartment with garden"
    },
    {
      id: 2,
      name: "Vikram R.",
      title: "Loving care when you're not there",
      rating: 4.9,
      reviews: 124,
      clients: 56,
      location: "Koramangala, Bangalore",
      price: 750,
      image: "https://api.dicebear.com/9.x/miniavs/svg?seed=Vikram&backgroundColor=c7e1ff",
      description: "As a pet parent myself, I understand how important it is to find someone trustworthy to care for your fur babies. I treat each pet as if they were my own...",
      specialties: ["Puppies", "Senior Pets", "Medication"],
      experience: 4,
      nextAvailable: "Tomorrow",
      homeType: "House with yard"
    },
    {
      id: 3,
      name: "Ananya M.",
      title: "Pet sitting with warmth and affection",
      rating: 4.8,
      reviews: 56,
      clients: 18,
      location: "HSR Layout, Bangalore",
      price: 850,
      image: "https://api.dicebear.com/9.x/miniavs/svg?seed=Ananya&backgroundColor=d8f0e0",
      description: "I provide a safe and nurturing environment for your pet while you're away. My home is pet-proofed and comfortable. I'll send you regular photos and updates...",
      specialties: ["Birds", "Small Mammals", "Reptiles"],
      experience: 5,
      availableNow: true,
      homeType: "Pet-friendly apartment"
    },
    {
      id: 4,
      name: "Rohan D.",
      title: "Experienced and calm pet caretaker",
      rating: 4.9,
      reviews: 92,
      clients: 34,
      location: "Whitefield, Bangalore",
      price: 900,
      image: "https://api.dicebear.com/9.x/miniavs/svg?seed=Rohan&backgroundColor=e1d5f5",
      description: "With over 7 years of experience in pet sitting, I understand that each pet has unique needs. I'm comfortable with special care requirements and can provide a structured environment...",
      specialties: ["Special Needs", "Anxious Pets", "Strict Routines"],
      experience: 7,
      nextAvailable: "In 2 days",
      homeType: "Spacious villa"
    }
  ];

  return (
    <div className="pt-8 pb-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Pet Sitters Near You</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse profiles of trusted pet sitters in your area who will care for your pet in their home or yours.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Search Panel */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Search Filters</h2>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Where
                  </label>
                  <div className="relative">
                    <MapPin size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="City, State, or Zip Code"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full pl-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-critter-purple focus:border-critter-purple transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Dates Needed
                  </label>
                  <div className="relative">
                    <Calendar size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full pl-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-critter-purple focus:border-critter-purple transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pet Type
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Dogs", "Cats", "Other"].map((type) => (
                      <button
                        key={type}
                        onClick={() => setPetType(type)}
                        className={`py-2 px-3 rounded-lg text-sm font-medium border ${
                          petType === type
                            ? 'bg-critter-purple text-white border-critter-purple'
                            : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Location
                  </label>
                  <div className="relative">
                    <select
                      className="w-full py-3 px-4 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-critter-purple focus:border-critter-purple transition"
                    >
                      <option value="sitter-home">Sitter's Home</option>
                      <option value="your-home">Your Home</option>
                      <option value="both">Either Location</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <Button className="w-full py-6 bg-critter-purple hover:bg-purple-700 text-white flex items-center justify-center gap-2">
                  <Search size={18} />
                  Search Pet Sitters
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-medium text-gray-900 mb-3">Additional Filters</h3>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-600 flex items-center justify-between">
                      <span>Price Range</span>
                      <span className="text-critter-purple font-medium">₹750 - ₹900</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-critter-purple"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      id="has-yard"
                      type="checkbox"
                      className="h-4 w-4 text-critter-purple focus:ring-critter-purple border-gray-300 rounded"
                    />
                    <label htmlFor="has-yard" className="ml-2 text-sm text-gray-600">
                      Has Yard/Outdoor Space
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="accepts-multiple"
                      type="checkbox"
                      className="h-4 w-4 text-critter-purple focus:ring-critter-purple border-gray-300 rounded"
                    />
                    <label htmlFor="accepts-multiple" className="ml-2 text-sm text-gray-600">
                      Accepts Multiple Pets
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="verified"
                      type="checkbox"
                      className="h-4 w-4 text-critter-purple focus:ring-critter-purple border-gray-300 rounded"
                      defaultChecked
                    />
                    <label htmlFor="verified" className="ml-2 text-sm text-gray-600">
                      Verified Sitters Only
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:w-2/3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                {sitters.length} pet sitters available
              </h2>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-3">Sort by:</span>
                <select className="border border-gray-300 rounded-lg py-1 px-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-critter-purple focus:border-critter-purple">
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Highest Rating</option>
                </select>
              </div>
            </div>

            <div className="space-y-6">
              {sitters.map(sitter => (
                <div key={sitter.id} className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-5 flex flex-col md:flex-row gap-4">
                    {/* Sitter Image */}
                    <div className="md:w-1/4">
                      <div className="relative aspect-square rounded-xl overflow-hidden">
                        <img
                          src={sitter.image}
                          alt={sitter.name}
                          className="w-full h-full object-cover"
                        />
                        <button className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full hover:bg-white transition-colors">
                          <Heart size={18} className="text-gray-500 hover:text-red-500 transition-colors" />
                        </button>
                      </div>

                      {/* Availability Badge */}
                      {sitter.availableNow && (
                        <div className="mt-2 text-xs bg-green-100 text-green-800 py-1 px-2 rounded-full flex items-center justify-center gap-1">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
                          </span>
                          Available Now
                        </div>
                      )}
                      {sitter.nextAvailable && !sitter.availableNow && (
                        <div className="mt-2 text-xs bg-blue-100 text-blue-800 py-1 px-2 rounded-full flex items-center justify-center gap-1">
                          <Clock3 size={12} />
                          Available {sitter.nextAvailable}
                        </div>
                      )}
                    </div>

                    {/* Sitter Info */}
                    <div className="md:w-3/4">
                      <div className="flex justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{sitter.name}</h3>
                        <div className="flex items-center text-sm font-medium text-green-600">
                          <span className="text-xl">₹{sitter.price}</span>
                          <span className="text-gray-500 text-xs ml-1">per day</span>
                        </div>
                      </div>

                      <p className="text-critter-purple font-medium mb-2">{sitter.title}</p>

                      <div className="flex items-center mb-3 text-sm">
                        <p className="text-gray-600">{sitter.location}</p>
                        {sitter.experience && (
                          <p className="text-gray-600 ml-4 flex items-center">
                            <Award size={14} className="mr-1 text-amber-500" />
                            {sitter.experience} years experience
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center">
                          <Star size={16} className="text-yellow-400 mr-1" />
                          <span className="font-medium">{sitter.rating}</span>
                          <span className="text-gray-500 ml-1">({sitter.reviews} reviews)</span>
                        </div>

                        <div className="text-gray-500 text-sm">
                          {sitter.clients} repeat clients
                        </div>

                        {sitter.homeType && (
                          <div className="text-gray-600 text-sm flex items-center">
                            <Home size={14} className="mr-1" />
                            {sitter.homeType}
                          </div>
                        )}
                      </div>

                      {/* Specialties */}
                      {sitter.specialties && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {sitter.specialties.map((specialty, index) => (
                            <span
                              key={index}
                              className="bg-purple-100 text-critter-purple text-xs px-2 py-1 rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      )}

                      <p className="text-gray-600 text-sm mb-4">{sitter.description}</p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        <Button className="bg-critter-purple hover:bg-purple-700 text-white px-6">
                          Book Now
                        </Button>
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                Load More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetSitting;
