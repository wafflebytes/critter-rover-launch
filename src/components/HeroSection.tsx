
import { useState } from "react";
import { MapPin, Calendar, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger 
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  
  return (
    <section className="py-10 md:py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Side */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Find Trusted Dog Walkers Nearby 🐾
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Real-time availability. GPS tracking. Subscription perks.
            </p>
            
            {/* Search Bar */}
            <div className="bg-white p-4 rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
                <div className="relative flex-1">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <MapPin size={18} />
                  </div>
                  <Input 
                    type="text" 
                    placeholder="Enter your location" 
                    className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200"
                  />
                </div>
                
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="flex-1 border border-gray-200 flex justify-between items-center">
                      <div className="flex items-center">
                        <Calendar size={18} className="mr-2 text-gray-400" />
                        {date ? date.toLocaleDateString() : "Select date & time"}
                      </div>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
                
                <Button className="flex-initial bg-critter-purple hover:bg-critter-purple/90 text-white px-8">
                  <Search size={18} className="mr-2" />
                  Search
                </Button>
              </div>
            </div>
            
            <div className="mt-4 text-sm text-gray-500">
              Popular: <span className="text-critter-purple cursor-pointer hover:underline">Koramangala</span>, <span className="text-critter-purple cursor-pointer hover:underline">Indiranagar</span>, <span className="text-critter-purple cursor-pointer hover:underline">HSR Layout</span>
            </div>
          </div>
          
          {/* Right Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/b07d2994-664d-47c4-b852-b8b6bbc82b0f.png" 
                alt="Happy dog walkers" 
                className="w-full object-cover rounded-2xl"
                style={{ height: "400px" }}
              />
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <p className="font-medium text-gray-800">Trusted by 10K+ Pet Parents</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
