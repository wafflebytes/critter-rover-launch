
import { 
  Scissors, 
  GraduationCap, 
  Stethoscope, 
  Check, 
  Clock, 
  Shield, 
  Star,
  MapPin
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
import { useState } from "react";

const services = [
  {
    title: "Professional Pet Grooming",
    description: "Skilled groomers come to your home with all equipment. Breed-specific styling.",
    icon: Scissors,
    color: "bg-pink-100",
    features: [
      { icon: Check, text: "Specialized breed styling", color: "text-pink-600" },
      { icon: MapPin, text: "Available in 200+ localities", color: "text-pink-600" },
      { icon: Clock, text: "Flexible scheduling", color: "text-pink-600" }
    ],
    price: {
      regular: "₹999",
      discounted: "₹799"
    },
    highlight: "20% Off",
    ctaText: "Book a Session"
  },
  {
    title: "Certified Training Programs",
    description: "Personalized behavior & obedience training from certified experts at your convenience.",
    icon: GraduationCap,
    color: "bg-blue-100",
    features: [
      { icon: Check, text: "Customized training plans", color: "text-blue-600" },
      { icon: Shield, text: "Certified professionals", color: "text-blue-600" },
      { icon: Star, text: "4.8/5 trainer rating", color: "text-blue-600" }
    ],
    price: {
      regular: "₹1,499",
      discounted: "₹1,299"
    },
    highlight: "Most Popular",
    ctaText: "Meet Trainers"
  },
  {
    title: "Veterinary Home Visits",
    description: "On-demand vet consultations at home or via video. 24/7 emergency support.",
    icon: Stethoscope,
    color: "bg-green-100",
    features: [
      { icon: Check, text: "Same-day appointments", color: "text-green-600" },
      { icon: Clock, text: "24/7 emergency support", color: "text-green-600" },
      { icon: Shield, text: "Licensed veterinarians", color: "text-green-600" }
    ],
    price: {
      regular: "₹1,299",
      discounted: "₹999"
    },
    highlight: "New Service",
    ctaText: "Book Consultation"
  }
];

const BillingToggle = ({ onToggle }: { onToggle: (isYearly: boolean) => void }) => {
  const [isYearly, setIsYearly] = useState(false);
  
  const handleToggle = () => {
    setIsYearly(!isYearly);
    onToggle(!isYearly);
  };
  
  return (
    <div className="flex items-center justify-center space-x-4 mb-8">
      <span className={`text-sm font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
      <button
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-critter-purple focus:ring-offset-2 ${
          isYearly ? 'bg-critter-purple' : 'bg-gray-200'
        }`}
        onClick={handleToggle}
        type="button"
        role="switch"
        aria-checked={isYearly}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            isYearly ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      <span className={`text-sm font-medium flex items-center ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
        Yearly
        <span className="ml-1.5 bg-green-100 text-green-800 text-xs px-1.5 py-0.5 rounded">Save 20%</span>
      </span>
    </div>
  );
};

const ServicesSection = () => {
  const [isYearly, setIsYearly] = useState(false);
  
  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-6">
          <h2 className="text-3xl font-bold mb-4">Premium Pet Care Services</h2>
          <p className="text-gray-600">Professional services tailored to your pet's needs, with special pricing for new users.</p>
          
          <BillingToggle onToggle={setIsYearly} />
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
                    <p className="text-sm text-gray-500">{isYearly ? 'Yearly price' : 'One-time service'}</p>
                    <div className="flex items-center">
                      <p className="text-2xl font-bold text-gray-800">{isYearly ? 
                        `₹${parseInt(service.price.discounted.replace(/,/g, '').replace('₹', '')) * 10},999` : 
                        service.price.discounted}
                      </p>
                      <span className="ml-2 text-sm line-through text-gray-400">{isYearly ? 
                        `₹${parseInt(service.price.regular.replace(/,/g, '').replace('₹', '')) * 10},999` : 
                        service.price.regular}
                      </span>
                    </div>
                  </div>
                  <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    First booking
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
