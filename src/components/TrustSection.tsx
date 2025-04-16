
import { ShieldCheck, MapPin, Star } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "AI Checks & Certification",
    description: "All our walkers go through a thorough AI-powered verification and background check process. Only certified professionals handle your pets."
  },
  {
    icon: MapPin,
    title: "Live GPS Tracking",
    description: "Follow your pet's walk in real-time with live GPS tracking and receive photo updates during the walk."
  },
  {
    icon: Star,
    title: "Verified Reviews",
    description: "Browse walkers with authentic reviews from pet parents like you. See ratings, repeat bookings, and more."
  }
];

const TrustSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Verified Walkers. Real Reviews.</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          We take safety seriously. Your pets deserve the best care from trusted professionals.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-critter-lightPurple/20 p-4 rounded-full">
                  <feature.icon size={32} className="text-critter-purple" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
