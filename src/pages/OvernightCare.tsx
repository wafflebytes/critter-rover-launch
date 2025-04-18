import { useState } from 'react';
import { Calendar, MapPin, Star, Heart, Search, Award, Clock3, Moon, Home, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface OvernightCarer {
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
  staysAt?: 'your-home' | 'their-home' | 'both';
}

const OvernightCare = () => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [stayType, setStayType] = useState<string>('');

  const carers: OvernightCarer[] = [
    {
      id: 1,
      name: "Arjun K.",
      title: "Overnight pet care with love and attention",
      rating: 5.0,
      reviews: 76,
      clients: 28,
      location: "Indiranagar, Bangalore",
      price: 1200,
      image: "https://api.dicebear.com/9.x/miniavs/svg?seed=Arjun&backgroundColor=d1ffe2",
      description: "I provide attentive overnight care for your pets in the comfort of your home. Your pets can maintain their normal routine while receiving constant supervision and care...",
      specialties: ["Dogs", "Cats", "Secure Environment"],
      experience: 7,
      availableNow: true,
      staysAt: 'your-home'
    },
    {
      id: 2,
      name: "Siddharth M.",
      title: "Peaceful overnight boarding in my pet haven",
      rating: 4.9,
      reviews: 103,
      clients: 41,
      location: "Koramangala, Bangalore",
      price: 1400,
      image: "https://api.dicebear.com/9.x/miniavs/svg?seed=Neha&backgroundColor=ffecdb",
      description: "My home is set up to provide a calm and nurturing environment for pets who need overnight care. Each pet gets their own comfortable space and receives individual attention...",
      specialties: ["Overnight Monitoring", "Senior Pets", "Anxiety Management"],
      experience: 5,
      nextAvailable: "Tomorrow",
      homeType: "Pet-friendly house with garden",
      staysAt: 'their-home'
    },
    {
      id: 3,
      name: "Neha P.",
      title: "Calm, attentive overnight pet supervision",
      rating: 4.9,
      reviews: 52,
      clients: 19,
      location: "HSR Layout, Bangalore",
      price: 1300,
      image: "https://api.dicebear.com/9.x/miniavs/svg?seed=Siddharth&backgroundColor=d9e8ff",
      description: "I offer professional overnight care services with regular updates throughout the stay. Your pet will be supervised at all times, ensuring they're safe, comfortable, and happy...",
      specialties: ["All Pet Types", "Medical Administration", "24/7 Monitoring"],
      experience: 6,
      availableNow: true,
      staysAt: 'both'
    },
    {
      id: 4,
      name: "Meera S.",
      title: "Loving extended care for your furry family",
      rating: 4.8,
      reviews: 89,
      clients: 32,
      location: "Whitefield, Bangalore",
      price: 1500,
      image: "https://api.dicebear.com/9.x/miniavs/svg?seed=Meera&backgroundColor=f0e6ff",
      description: "I specialize in overnight pet care for extended periods. My home is fully pet-proofed and offers separate spaces for pets who need their own territory. I provide daily video calls...",
      specialties: ["Extended Stays", "Multiple Pets", "Special Diets"],
      experience: 8,
      nextAvailable: "In 3 days",
      homeType: "Large house with enclosed yard",
      staysAt: 'their-home'
    }
  ];

  return (
    <div className="pt-8 pb-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Overnight Pet Care Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find trusted overnight pet care providers who will ensure your pet's safety and comfort while you're away.
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

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Check-In
                    </label>
                    <div className="relative">
                      <Calendar size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full pl-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-critter-purple focus:border-critter-purple transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Check-Out
                    </label>
                    <div className="relative">
                      <Calendar size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full pl-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-critter-purple focus:border-critter-purple transition"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Stay Type
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      {value: 'your-home', label: 'In Your Home'},
                      {value: 'their-home', label: 'In Their Home'}
                    ].map((type) => (
                      <button
                        key={type.value}
                        onClick={() => setStayType(type.value)}
                        className={`py-2 px-3 rounded-lg text-sm font-medium border ${
                          stayType === type.value
                            ? 'bg-critter-purple text-white border-critter-purple'
                            : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pet Type
                  </label>
                  <div className="relative">
                    <select
                      className="w-full py-3 px-4 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-critter-purple focus:border-critter-purple transition"
                    >
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="small-animal">Small Animal</option>
                      <option value="bird">Bird</option>
                      <option value="reptile">Reptile</option>
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
                  Search Overnight Care
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-medium text-gray-900 mb-3">Additional Filters</h3>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-600 flex items-center justify-between">
                      <span>Price Range</span>
                      <span className="text-critter-purple font-medium">₹1200 - ₹1500</span>
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
                      id="security-cameras"
                      type="checkbox"
                      className="h-4 w-4 text-critter-purple focus:ring-critter-purple border-gray-300 rounded"
                    />
                    <label htmlFor="security-cameras" className="ml-2 text-sm text-gray-600">
                      Has Security Cameras
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="no-other-pets"
                      type="checkbox"
                      className="h-4 w-4 text-critter-purple focus:ring-critter-purple border-gray-300 rounded"
                    />
                    <label htmlFor="no-other-pets" className="ml-2 text-sm text-gray-600">
                      No Other Pets Present
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="certified"
                      type="checkbox"
                      className="h-4 w-4 text-critter-purple focus:ring-critter-purple border-gray-300 rounded"
                      defaultChecked
                    />
                    <label htmlFor="certified" className="ml-2 text-sm text-gray-600">
                      Certified Pet First Aid
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
                {carers.length} overnight care providers available
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
              {carers.map(carer => (
                <div key={carer.id} className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-5 flex flex-col md:flex-row gap-4">
                    {/* Carer Image */}
                    <div className="md:w-1/4">
                      <div className="relative aspect-square rounded-xl overflow-hidden">
                        <img
                          src={carer.image}
                          alt={carer.name}
                          className="w-full h-full object-cover"
                        />
                        <button className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full hover:bg-white transition-colors">
                          <Heart size={18} className="text-gray-500 hover:text-red-500 transition-colors" />
                        </button>
                      </div>

                      {/* Availability Badge */}
                      {carer.availableNow && (
                        <div className="mt-2 text-xs bg-green-100 text-green-800 py-1 px-2 rounded-full flex items-center justify-center gap-1">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
                          </span>
                          Available Now
                        </div>
                      )}
                      {carer.nextAvailable && !carer.availableNow && (
                        <div className="mt-2 text-xs bg-blue-100 text-blue-800 py-1 px-2 rounded-full flex items-center justify-center gap-1">
                          <Clock3 size={12} />
                          Available {carer.nextAvailable}
                        </div>
                      )}

                      {/* Stay Type Badge */}
                      <div className={`mt-2 text-xs py-1 px-2 rounded-full flex items-center justify-center gap-1 ${
                        carer.staysAt === 'your-home'
                          ? 'bg-indigo-100 text-indigo-800'
                          : carer.staysAt === 'their-home'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-purple-100 text-purple-800'
                      }`}>
                        {carer.staysAt === 'your-home' && (
                          <>
                            <Home size={12} />
                            Stays at your home
                          </>
                        )}
                        {carer.staysAt === 'their-home' && (
                          <>
                            <Home size={12} />
                            Hosts at their home
                          </>
                        )}
                        {carer.staysAt === 'both' && (
                          <>
                            <Home size={12} />
                            Flexible location
                          </>
                        )}
                      </div>
                    </div>

                    {/* Carer Info */}
                    <div className="md:w-3/4">
                      <div className="flex justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{carer.name}</h3>
                        <div className="flex items-center text-sm font-medium text-green-600">
                          <span className="text-xl">₹{carer.price}</span>
                          <span className="text-gray-500 text-xs ml-1">per night</span>
                        </div>
                      </div>

                      <p className="text-critter-purple font-medium mb-2">{carer.title}</p>

                      <div className="flex items-center mb-3 text-sm">
                        <p className="text-gray-600">{carer.location}</p>
                        {carer.experience && (
                          <p className="text-gray-600 ml-4 flex items-center">
                            <Award size={14} className="mr-1 text-amber-500" />
                            {carer.experience} years experience
                          </p>
                        )}
                        <p className="ml-4 text-gray-600 flex items-center">
                          <Shield size={14} className="mr-1 text-green-500" />
                          Verified
                        </p>
                      </div>

                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center">
                          <Star size={16} className="text-yellow-400 mr-1" />
                          <span className="font-medium">{carer.rating}</span>
                          <span className="text-gray-500 ml-1">({carer.reviews} reviews)</span>
                        </div>

                        <div className="text-gray-500 text-sm">
                          {carer.clients} repeat clients
                        </div>

                        {carer.homeType && (
                          <div className="text-gray-600 text-sm flex items-center">
                            <Home size={14} className="mr-1" />
                            {carer.homeType}
                          </div>
                        )}
                      </div>

                      {/* Specialties */}
                      {carer.specialties && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {carer.specialties.map((specialty, index) => (
                            <span
                              key={index}
                              className="bg-purple-100 text-critter-purple text-xs px-2 py-1 rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      )}

                      <p className="text-gray-600 text-sm mb-4">{carer.description}</p>

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

export default OvernightCare;
