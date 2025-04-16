
import { Scissors, GraduationCap, Stethoscope, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription 
} from "@/components/ui/card";

const services = [
  {
    title: "Pet Grooming",
    description: "Professional grooming for your furry friends",
    icon: Scissors,
    feature: "Book with Coins",
    color: "bg-pink-100"
  },
  {
    title: "Pet Training",
    description: "Training sessions by certified professionals",
    icon: GraduationCap,
    feature: "Nearby Providers",
    color: "bg-blue-100"
  },
  {
    title: "Vet Booking",
    description: "Schedule vet appointments for checkups",
    icon: Stethoscope,
    feature: "Instant Scheduling",
    color: "bg-green-100"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Quick Services</h2>
        
        <div className="flex overflow-x-auto pb-6 scroll-x-mandatory gap-6">
          {services.map((service, index) => (
            <Card key={index} className="min-w-[300px] scroll-x-item shadow-md hover:shadow-lg transition-shadow duration-300 border-none">
              <CardHeader className={`${service.color} rounded-t-lg p-4`}>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                  <service.icon size={24} className="text-gray-700" />
                </div>
              </CardHeader>
              <CardContent className="pt-4 pb-1">
                <CardDescription className="text-gray-600 mb-4">{service.description}</CardDescription>
                <div className="flex items-center bg-gray-100 p-2 rounded-lg mb-3">
                  <span className="text-sm font-medium text-gray-700">{service.feature}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-critter-purple hover:bg-critter-purple/90 flex items-center justify-center gap-2">
                  <span>Book Now</span>
                  <Coins size={16} />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
