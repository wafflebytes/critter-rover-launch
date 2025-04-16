
import { Shield, Clock, Coins, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PremiumSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
            <div className="inline-flex items-center px-4 py-1.5 bg-yellow-100 rounded-full mb-4">
              <span className="text-sm font-medium text-yellow-700">Premium Membership</span>
            </div>
            
            <div className="flex items-center mb-4">
              <Shield size={32} className="text-critter-purple mr-3" />
              <h2 className="text-3xl font-bold">CritterPlus</h2>
              <Badge className="ml-3 bg-amber-500">PREMIUM</Badge>
            </div>
            
            <p className="text-xl text-gray-700 mb-8">
              Elevate your pet care experience with premium benefits designed for the most dedicated pet parents.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4">
                    <Check size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Priority Support</h3>
                    <p className="text-sm text-gray-600">24/7 dedicated customer service</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4">
                    <Shield size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Cancellation Protection</h3>
                    <p className="text-sm text-gray-600">Free cancellations up to 24h</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4">
                    <Coins size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">2x CritterCoins</h3>
                    <p className="text-sm text-gray-600">Double coins on every booking</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4">
                    <Award size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Premium Sitters</h3>
                    <p className="text-sm text-gray-600">Access to top-rated, certified sitters</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="text-sm text-gray-500 mb-1">Monthly</div>
                <div className="flex items-center">
                  <span className="text-3xl font-bold">₹499</span>
                  <span className="text-sm text-gray-500 ml-2">/month</span>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="text-sm text-gray-500 mb-1">Yearly <span className="text-green-600 font-medium">Save 20%</span></div>
                <div className="flex items-center">
                  <span className="text-3xl font-bold">₹4,799</span>
                  <span className="text-sm text-gray-500 ml-2">/year</span>
                </div>
              </div>
            </div>
            
            <Button className="mt-6 bg-critter-purple hover:bg-critter-purple/90 px-6 py-6">
              Upgrade to CritterPlus
            </Button>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded-full shadow-md z-10">
                <div className="flex items-center">
                  <Shield size={16} className="text-critter-purple mr-1.5" />
                  <span className="text-sm font-medium">Premium Protection</span>
                </div>
              </div>
              
              <img 
                src="/lovable-uploads/eedec638-7b65-4725-9871-b27ea2e7fc53.png" 
                alt="Premium pet care" 
                className="w-full rounded-2xl shadow-xl"
              />
              
              <div className="absolute bottom-4 right-4 bg-white px-3 py-1.5 rounded-full shadow-md">
                <div className="flex items-center">
                  <span className="text-sm font-medium">Premium pet care made simple</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Check = ({ size, className }: { size: number, className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default PremiumSection;
