
import { Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ReferralSection = () => {
  return (
    <section className="py-12 px-4 bg-critter-lightPurple/20">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-critter-purple p-8 text-white">
              <div className="flex items-center mb-6">
                <Gift size={28} className="mr-3" />
                <h2 className="text-2xl font-bold">Refer & Earn</h2>
              </div>
              <h3 className="text-3xl font-bold mb-4">Invite Friends. Earn Free Walks & Coins!</h3>
              <p className="mb-6">
                Share your love for Critter with friends and family. For each referral that signs up and books their first walk, you'll both receive:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                  <span>1 Free dog walk (up to 30 minutes)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                  <span>50 bonus CritterCoins</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                  <span>Exclusive access to special offers</span>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-4">Enter a referral code:</h3>
              <p className="text-gray-600 mb-6">
                Have a friend's code? Enter it below to claim your reward!
              </p>
              <div className="space-y-4">
                <Input 
                  type="text" 
                  placeholder="Enter code (e.g., FRIEND123)" 
                  className="w-full py-3"
                />
                <Button className="w-full bg-critter-purple hover:bg-critter-purple/90 py-3">
                  Get Rewarded
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                *Terms and conditions apply. Rewards are credited after the referred user's first completed walk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralSection;
