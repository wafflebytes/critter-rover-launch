
import { Heart, Check, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const BecomeSitterSection = () => {
  return (
    <section className="py-16 px-4 bg-critter-purple text-white">
      <div className="container mx-auto text-center">
        <div className="inline-flex items-center px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-6">
          <Heart size={16} className="text-white mr-2" />
          <span className="text-sm font-medium text-white">Join Our Team</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Become a Critter Sitter</h2>
        
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
          Love pets? Turn that passion into income by becoming a verified Critter sitter. Set your own schedule and rates.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Clock size={24} className="text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
            <p className="text-white/80">Work when you want, as much as you want. You're in control.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Check size={24} className="text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Set Your Rates</h3>
            <p className="text-white/80">You decide how much to charge for your pet care services.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Shield size={24} className="text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Insurance Coverage</h3>
            <p className="text-white/80">We provide insurance protection while you're providing care.</p>
          </div>
        </div>
        
        <Button className="bg-white text-critter-purple hover:bg-white/90 px-8 py-6 rounded-full text-lg">
          Apply Now
        </Button>
      </div>
    </section>
  );
};

export default BecomeSitterSection;
