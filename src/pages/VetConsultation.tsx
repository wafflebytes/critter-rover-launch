import { useState } from 'react';
import { Calendar, MapPin, Star, Heart, Search, Award, Clock3, Stethoscope, VideoIcon, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Vet {
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
  education?: string;
  consultationType?: ('online' | 'in-person' | 'both');
}

const VetConsultation = () => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [consultType, setConsultType] = useState('');

  const vets: Vet[] = [
    {
      id: 1,
      name: "Dr. Aditya R.",
      title: "Small animal veterinarian with special interest in internal medicine",
      rating: 5.0,
      reviews: 128,
      clients: 76,
      location: "Indiranagar, Bangalore",
      price: 900,
      image: "https://api.dicebear.com/9.x/miniavs/svg?seed=Aditya",
      description: "I'm a small animal veterinarian with 10+ years of experience. I specialize in internal medicine and preventive care. My goal is to provide compassionate care for your pets...",
      specialties: ["Dogs & Cats", "Internal Medicine", "Preventive Care"],
      experience: 10,
      availableNow: true,
      education: "BVSc & AH, MVSc Veterinary Medicine",
      consultationType: 'both'
    },
    {
      id: 2,
      name: "Dr. Shreesh S.",
      title: "Experienced veterinarian specializing in exotic pets",
      rating: 4.9,
      reviews: 93,
      clients: 64,
      location: "Koramangala, Bangalore",
      price: 1200,
      image: "https://api.dicebear.com/9.x/miniavs/svg?seed=Pooja",
      description: "As a veterinarian with expertise in exotic animals, I provide care for birds, reptiles, small mammals, and more. I understand their unique needs and health challenges...",
      specialties: ["Exotic Animals", "Birds", "Reptiles"],
      experience: 8,
      nextAvailable: "Tomorrow",
      education: "BVSc & AH, Certified Exotic Animal Specialist",
      consultationType: 'in-person'
    },
    {
      id: 3,
      name: "Dr. Samiksha R.",
      title: "Veterinary surgeon with focus on orthopedics",
      rating: 4.9,
      reviews: 155,
      clients: 92,
      location: "HSR Layout, Bangalore",
      price: 1500,
      image: "https://api.dicebear.com/9.x/miniavs/svg?seed=Ravi",
      description: "With specialization in orthopedic surgery, I treat bone, joint, and soft tissue conditions. I'm committed to providing pain management and rehabilitation for post-surgical recovery...",
      specialties: ["Surgery", "Orthopedics", "Rehabilitation"],
      experience: 12,
      availableNow: false,
      nextAvailable: "In 3 days",
      education: "BVSc & AH, MVSc Veterinary Surgery",
      consultationType: 'in-person'
    },
    {
      id: 4,
      name: "Dr. Meena K.",
      title: "Online veterinarian for quick, convenient care",
      rating: 4.8,
      reviews: 204,
      clients: 137,
      location: "Remote Consultation",
      price: 600,
      image: "https://api.dicebear.com/9.x/miniavs/svg?seed=Meena",
      description: "I provide convenient online consultations to address your pet's health concerns. While not a replacement for physical exams when needed, virtual care can help with many issues...",
      specialties: ["Telemedicine", "General Practice", "Second Opinions"],
      experience: 7,
      availableNow: true,
      education: "BVSc & AH, Certified in Veterinary Telemedicine",
      consultationType: 'online'
    }
  ];

  return (
    <div className="pt-8 pb-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Veterinary Consultations</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with experienced veterinarians for in-person or online consultations to ensure your pet receives the best care.
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
                    Appointment Date
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
                    Consultation Type
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      {value: 'in-person', label: 'In Person'},
                      {value: 'online', label: 'Online'}
                    ].map((type) => (
                      <button
                        key={type.value}
                        onClick={() => setConsultType(type.value)}
                        className={`py-2 px-3 rounded-lg text-sm font-medium border ${
                          consultType === type.value
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
                    Specialty
                  </label>
                  <div className="relative">
                    <select
                      className="w-full py-3 px-4 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-critter-purple focus:border-critter-purple transition"
                    >
                      <option value="general">General Veterinary Care</option>
                      <option value="surgery">Surgery</option>
                      <option value="dermatology">Dermatology</option>
                      <option value="exotic">Exotic Animals</option>
                      <option value="emergency">Emergency Care</option>
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
                  Find Veterinarians
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-medium text-gray-900 mb-3">Additional Filters</h3>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-600 flex items-center justify-between">
                      <span>Price Range</span>
                      <span className="text-critter-purple font-medium">₹600 - ₹1500</span>
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
                      id="available-now"
                      type="checkbox"
                      className="h-4 w-4 text-critter-purple focus:ring-critter-purple border-gray-300 rounded"
                    />
                    <label htmlFor="available-now" className="ml-2 text-sm text-gray-600">
                      Available Now
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="highest-rated"
                      type="checkbox"
                      className="h-4 w-4 text-critter-purple focus:ring-critter-purple border-gray-300 rounded"
                    />
                    <label htmlFor="highest-rated" className="ml-2 text-sm text-gray-600">
                      Highest Rated (4.5+)
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
                      Board Certified Only
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
                {vets.length} veterinarians available
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
              {vets.map(vet => (
                <div key={vet.id} className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-5 flex flex-col md:flex-row gap-4">
                    {/* Vet Image */}
                    <div className="md:w-1/4">
                      <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50">
                        <img
                          src={vet.image}
                          alt={vet.name}
                          className="w-full h-full object-contain"
                        />
                        <button className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full hover:bg-white transition-colors">
                          <Heart size={18} className="text-gray-500 hover:text-red-500 transition-colors" />
                        </button>
                      </div>

                      {/* Availability Badge */}
                      {vet.availableNow && (
                        <div className="mt-2 text-xs bg-green-100 text-green-800 py-1 px-2 rounded-full flex items-center justify-center gap-1">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
                          </span>
                          Available Now
                        </div>
                      )}
                      {vet.nextAvailable && !vet.availableNow && (
                        <div className="mt-2 text-xs bg-blue-100 text-blue-800 py-1 px-2 rounded-full flex items-center justify-center gap-1">
                          <Clock3 size={12} />
                          Available {vet.nextAvailable}
                        </div>
                      )}

                      {/* Consultation Type Badge */}
                      <div className={`mt-2 text-xs py-1 px-2 rounded-full flex items-center justify-center gap-1 ${
                        vet.consultationType === 'online'
                          ? 'bg-blue-100 text-blue-800'
                          : vet.consultationType === 'in-person'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-purple-100 text-purple-800'
                      }`}>
                        {vet.consultationType === 'online' && (
                          <>
                            <VideoIcon size={12} />
                            Online Only
                          </>
                        )}
                        {vet.consultationType === 'in-person' && (
                          <>
                            <Stethoscope size={12} />
                            In-Person Only
                          </>
                        )}
                        {vet.consultationType === 'both' && (
                          <>
                            <Monitor size={12} />
                            Online & In-Person
                          </>
                        )}
                      </div>
                    </div>

                    {/* Vet Info */}
                    <div className="md:w-3/4">
                      <div className="flex justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{vet.name}</h3>
                        <div className="flex items-center text-sm font-medium text-green-600">
                          <span className="text-xl">₹{vet.price}</span>
                          <span className="text-gray-500 text-xs ml-1">per consultation</span>
                        </div>
                      </div>

                      <p className="text-critter-purple font-medium mb-2">{vet.title}</p>

                      <div className="flex items-center mb-3 text-sm">
                        <p className="text-gray-600">{vet.location}</p>
                        {vet.experience && (
                          <p className="text-gray-600 ml-4 flex items-center">
                            <Award size={14} className="mr-1 text-amber-500" />
                            {vet.experience} years experience
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center">
                          <Star size={16} className="text-yellow-400 mr-1" />
                          <span className="font-medium">{vet.rating}</span>
                          <span className="text-gray-500 ml-1">({vet.reviews} reviews)</span>
                        </div>

                        <div className="text-gray-500 text-sm">
                          {vet.clients} repeat clients
                        </div>

                        {vet.education && (
                          <div className="text-gray-600 text-sm flex items-center">
                            <Stethoscope size={14} className="mr-1 text-critter-purple" />
                            {vet.education.split(',')[0]}
                          </div>
                        )}
                      </div>

                      {/* Specialties */}
                      {vet.specialties && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {vet.specialties.map((specialty, index) => (
                            <span
                              key={index}
                              className="bg-purple-100 text-critter-purple text-xs px-2 py-1 rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      )}

                      <p className="text-gray-600 text-sm mb-4">{vet.description}</p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        <Button className="bg-critter-purple hover:bg-purple-700 text-white px-6">
                          Book Appointment
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

export default VetConsultation;
