import { UserPlus, Copy, CheckCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ReferralSection = () => {
  const [referralCode, setReferralCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [yourCode] = useState("CRITTER25");

  const handleCopy = () => {
    navigator.clipboard.writeText(yourCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12">
              <div className="inline-flex items-center bg-white/20 px-4 py-1.5 rounded-full mb-6">
                <UserPlus size={16} className="text-white mr-2" />
                <span className="text-sm font-medium text-white">Refer & Earn</span>
              </div>

              <h2 className="text-3xl font-bold mb-4">Share the Love, Earn Rewards</h2>

              <p className="text-white/90 mb-6">
                Introduce your pet-loving friends to Critter. When they book their first service, you'll both receive:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                  <span>1 Free pet care service (up to 30 minutes)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                  <span>50 bonus reward points</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                  <span>Access to special offers</span>
                </li>
              </ul>

              <div className="mt-8">
                <p className="font-medium mb-2">Your referral code:</p>
                <div className="flex">
                  <div className="bg-white/20 rounded-l-lg px-4 py-3 flex-grow">
                    <span className="font-mono font-bold text-lg">{yourCode}</span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="bg-white text-blue-600 hover:bg-white/90 px-4 rounded-r-lg flex items-center transition-colors"
                  >
                    {copied ? (
                      <><CheckCheck size={18} className="mr-1" /> Copied</>
                    ) : (
                      <><Copy size={18} className="mr-1" /> Copy</>
                    )}
                  </button>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <Button className="bg-white text-blue-600 hover:bg-white/90 flex-1 md:flex-none">
                  Share via WhatsApp
                </Button>
                <Button className="bg-white text-blue-600 hover:bg-white/90 flex-1 md:flex-none">
                  Share via Email
                </Button>
              </div>
            </div>

            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-4">Have a friend's code?</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Enter code here"
                  value={referralCode}
                  onChange={(e) => setReferralCode(e.target.value)}
                  className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 flex-grow"
                />
                <Button className="bg-white text-blue-600 hover:bg-white/90 whitespace-nowrap">
                  Apply Code
                </Button>
              </div>

              <div className="mt-8 bg-white/10 p-4 rounded-lg">
                <h4 className="font-medium mb-2">How it works:</h4>
                <ol className="list-decimal pl-5 space-y-2 text-white/90">
                  <li>Share your code with pet-loving friends</li>
                  <li>They sign up with your code</li>
                  <li>They book their first service</li>
                  <li>You both receive rewards!</li>
                </ol>
              </div>

              <p className="mt-6 text-sm text-white/80">
                * Rewards are applied after the referred friend's first completed service. See terms for details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralSection;
