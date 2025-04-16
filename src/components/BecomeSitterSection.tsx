import { Heart, Check, Clock, Shield, DollarSign, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const BecomeSitterSection = () => {
  return (
    <section id="become-sitter" className="py-20 px-4 bg-gradient-to-br from-critter-purple to-purple-800 text-white">
      <div className="container mx-auto text-center">
        <div className="inline-flex items-center px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-6">
          <Heart size={16} className="text-white mr-2" />
          <span className="text-sm font-medium text-white">Join Our Team</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">Become a Pet Caregiver</h2>

        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
          Love pets? Turn your passion into income by becoming a verified Critter caregiver.
          Set your own schedule and rates while caring for amazing pets in your community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-all hover:transform hover:scale-105">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Clock size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Flexible Schedule</h3>
            <p className="text-white/80">Work when you want, as much as you want. You decide when to care for pets based on your availability.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-all hover:transform hover:scale-105">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <DollarSign size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Set Your Rates</h3>
            <p className="text-white/80">You decide what to charge for your pet care services, with competitive earnings potential.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-all hover:transform hover:scale-105">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Shield size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Insurance Coverage</h3>
            <p className="text-white/80">We provide full insurance protection while you're providing pet care services.</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <div className="flex items-center justify-center mb-6">
            <Award size={32} className="text-white mr-3" />
            <h3 className="text-2xl font-bold">Why pet lovers join our team</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <Check size={24} className="text-white mr-3 mt-1" />
              <p className="text-white/90">Earn up to ₹40,000 per month</p>
            </div>
            <div className="flex items-start">
              <Check size={24} className="text-white mr-3 mt-1" />
              <p className="text-white/90">Meet wonderful pets</p>
            </div>
            <div className="flex items-start">
              <Check size={24} className="text-white mr-3 mt-1" />
              <p className="text-white/90">Free training and resources</p>
            </div>
            <div className="flex items-start">
              <Check size={24} className="text-white mr-3 mt-1" />
              <p className="text-white/90">Build your own client base</p>
            </div>
          </div>
        </div>

        <Button size="lg" className="bg-white text-critter-purple hover:bg-white/90 px-10 py-7 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all">
          Apply Now
        </Button>
      </div>
    </section>
  );
};

export default BecomeSitterSection;
