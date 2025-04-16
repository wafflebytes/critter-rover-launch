
import { 
  Scissors, 
  GraduationCap, 
  Stethoscope, 
  Check, 
  Clock, 
  Shield, 
  MapPin,
  Star 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    title: "Pet Grooming",
    description: "Professional grooming in the comfort of your home",
    icon: Scissors,
    color: "bg-pink-100",
    features: [
      { icon: Check, text: "Breed-specific styling", color: "text-pink-600" },
      { icon: Clock, text: "60-minute sessions", color: "text-pink-600" },
      { icon: MapPin, text: "Available in 200+ localities", color: "text-pink-600" }
    ],
    price: "₹799",
    highlight: "",
    ctaText: "Book a Session"
  },
  {
    title: "Pet Training",
    description: "Certified trainers for behavior & obedience training",
    icon: GraduationCap,
    color: "bg-blue-100",
    features: [
      { icon: Check, text: "Personalized training plans", color: "text-blue-600" },
      { icon: Shield, text: "Certified trainers only", color: "text-blue-600" },
      { icon: Star, text: "4.8/5 trainer rating", color: "text-blue-600" }
    ],
    price: "₹1,299",
    highlight: "Most Popular",
    ctaText: "Meet Trainers"
  },
  {
    title: "Vet Booking",
    description: "On-demand home visits or clinic appointments",
    icon: Stethoscope,
    color: "bg-green-100",
    features: [
      { icon: Check, text: "Same-day appointments", color: "text-green-600" },
      { icon: Clock, text: "24/7 emergency support", color: "text-green-600" },
      { icon: Shield, text: "Licensed veterinarians", color: "text-green-600" }
    ],
    price: "₹999",
    highlight: "",
    ctaText: "Book Consultation"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-bold mb-4">Premium Pet Care Services</h2>
          <p className="text-gray-600">Discover professional services tailored to your pet's needs. All services earn you CritterCoins!</p>
        </div>
        
        <div className="flex overflow-x-auto pb-6 scroll-x-mandatory gap-6 md:flex-wrap md:justify-center md:overflow-visible">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="min-w-[320px] max-w-[340px] scroll-x-item shadow-md hover:shadow-lg transition-all duration-300 border-none overflow-hidden"
            >
              <div className={`absolute right-4 top-4 z-10 ${service.highlight ? 'block' : 'hidden'}`}>
                <Badge className="bg-critter-purple font-medium px-3 py-1">{service.highlight}</Badge>
              </div>
              <CardHeader className={`${service.color} rounded-t-lg p-6 relative overflow-hidden`}>
                <div className="flex justify-between items-center relative z-10">
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <service.icon size={28} className="text-gray-700" />
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mt-10 -mr-10"></div>
              </CardHeader>
              <CardContent className="pt-5 pb-2">
                <CardDescription className="text-gray-600 mb-5">{service.description}</CardDescription>
                <div className="space-y-3 mb-5">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <feature.icon size={16} className={`${feature.color} mr-2 flex-shrink-0`} />
                      <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-2xl font-bold text-gray-800">{service.price}</p>
                  </div>
                  <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    Earn 25 coins
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pb-5">
                <Button className="w-full bg-critter-purple hover:bg-critter-purple/90 flex items-center justify-center gap-2 py-5">
                  <span>{service.ctaText}</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a href="#" className="text-critter-purple font-medium inline-flex items-center hover:underline">
            View all services
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
