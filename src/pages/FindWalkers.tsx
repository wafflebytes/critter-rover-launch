import { useState } from 'react';
import { Calendar, Clock, MapPin, Star, Heart, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Walker {
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
}

const FindWalkers = () => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [timePreference, setTimePreference] = useState('');

  const walkers: Walker[] = [
    {
      id: 1,
      name: "ReShan M.",
      title: "Dogs! My heart, my career, my passion",
      rating: 5.0,
      reviews: 63,
      clients: 25,
      location: "Fresno, CA",
      price: 25,
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "My dog has given her paw & wags of approval to ReShan. As a rescue, she takes her time to give trust & affection, & she has given both to ReShan. He has helped with..."
    },
    {
      id: 2,
      name: "Kara B.",
      title: "All you need under one woof",
      rating: 5.0,
      reviews: 473,
      clients: 169,
      location: "Fresno, CA",
      price: 20,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80",
      description: "We have been using Kara for a few weeks now for dog walks and she has been great. We have 2 pit bull breeds with a combined weight of 130lbs. Kara has done a fantastic job..."
    },
    {
      id: 3,
      name: "Yanette L.",
      title: "The purr-fect match for your pet!",
      rating: 4.9,
      reviews: 3,
      clients: 2,
      location: "Clovis, CA",
      price: 23,
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      description: "I highly recommend Yanette as a responsible and loving pet caregiver. She is incredibly attentive, patient, and compassionate, always ensuring that pets feel safe, comfortable..."
    },
    {
      id: 4,
      name: "Jake F.",
      title: "Pawsitive Vibes for You & Your pets",
      rating: 4.8,
      reviews: 14,
      clients: 8,
      location: "Clovis, CA",
      price: 40,
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
      description: "Jake has been walking my two senior dogs for the past year, and I couldn't be happier with his service. He's reliable, caring, and genuinely loves animals..."
    }
  ];

  return (
    <div className="pt-8 pb-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Dog Walkers Near You</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse profiles of trusted dog walkers in your area, read reviews, and book the perfect match for your pet.
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
                    When
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
                    Preferred Time
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Morning", "Afternoon", "Evening"].map((time) => (
                      <button
                        key={time}
                        onClick={() => setTimePreference(time)}
                        className={`py-2 px-3 rounded-lg text-sm font-medium border ${
                          timePreference === time
                            ? 'bg-critter-purple text-white border-critter-purple'
                            : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Type
                  </label>
                  <div className="relative">
                    <select
                      className="w-full py-3 px-4 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-critter-purple focus:border-critter-purple transition"
                    >
                      <option value="walking">Dog Walking</option>
                      <option value="sitting">Pet Sitting</option>
                      <option value="daycare">Day Care</option>
                      <option value="boarding">Boarding</option>
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
                  Search Walkers
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-medium text-gray-900 mb-3">Additional Filters</h3>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-600 flex items-center justify-between">
                      <span>Price Range</span>
                      <span className="text-critter-purple font-medium">₹20 - ₹50</span>
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
                      id="top-rated"
                      type="checkbox"
                      className="h-4 w-4 text-critter-purple focus:ring-critter-purple border-gray-300 rounded"
                    />
                    <label htmlFor="top-rated" className="ml-2 text-sm text-gray-600">
                      Top Rated (4.5+)
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="repeat-clients"
                      type="checkbox"
                      className="h-4 w-4 text-critter-purple focus:ring-critter-purple border-gray-300 rounded"
                    />
                    <label htmlFor="repeat-clients" className="ml-2 text-sm text-gray-600">
                      Has Repeat Clients
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
                      Verified Walkers Only
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
                {walkers.length} walkers available
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
              {walkers.map(walker => (
                <div key={walker.id} className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-5 flex flex-col md:flex-row gap-4">
                    {/* Walker Image */}
                    <div className="md:w-1/4">
                      <div className="relative aspect-square rounded-xl overflow-hidden">
                        <img
                          src={walker.image}
                          alt={walker.name}
                          className="w-full h-full object-cover"
                        />
                        <button className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full hover:bg-white transition-colors">
                          <Heart size={18} className="text-gray-500 hover:text-red-500 transition-colors" />
                        </button>
                      </div>
                    </div>

                    {/* Walker Info */}
                    <div className="md:w-3/4">
                      <div className="flex justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{walker.name}</h3>
                        <div className="flex items-center text-sm font-medium text-green-600">
                          from <span className="text-xl ml-1">₹{walker.price}</span>
                          <span className="text-gray-500 text-xs ml-1">per walk</span>
                        </div>
                      </div>

                      <p className="text-critter-purple font-medium mb-2">{walker.title}</p>

                      <div className="flex items-center mb-3 text-sm">
                        <p className="text-gray-600">{walker.location}</p>
                      </div>

                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center">
                          <Star size={16} className="text-yellow-400 mr-1" />
                          <span className="font-medium">{walker.rating}</span>
                          <span className="text-gray-500 ml-1">({walker.reviews} reviews)</span>
                        </div>

                        <div className="text-gray-500 text-sm">
                          {walker.clients} repeat clients
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-4">{walker.description}</p>

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

export default FindWalkers;
