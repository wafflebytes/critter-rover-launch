import React, { useState } from 'react';
import { Check, Star, Zap, Shield } from 'lucide-react';
import { Button } from './ui/button';

interface PricingTierProps {
  tier: {
    name: string;
    tagline: string;
    monthlyPrice: number;
    yearlyPrice: number;
    features: string[];
    highlighted?: boolean;
    color?: string;
  };
  isYearly: boolean;
  cta: string;
}

const PricingTier = ({ tier, isYearly, cta }: PricingTierProps) => {
  const price = isYearly ? tier.yearlyPrice : tier.monthlyPrice;
  const discount = Math.round((1 - tier.yearlyPrice / (tier.monthlyPrice * 12)) * 100);

  return (
    <div className={`rounded-2xl ${tier.highlighted ?
      'bg-gradient-to-br from-critter-purple to-purple-600 text-white shadow-xl border-none transform scale-105' :
      'bg-white border border-gray-200'} p-6 flex flex-col h-full transition-all`}>

      {tier.highlighted && (
        <div className="bg-white/20 rounded-full py-1 px-3 text-xs font-bold text-white self-start mb-2 backdrop-blur-sm">
          Most Popular
        </div>
      )}

      <h3 className={`text-xl font-bold ${tier.highlighted ? 'text-white' : 'text-gray-900'}`}>
        {tier.name}
      </h3>
      <p className={`mt-1 ${tier.highlighted ? 'text-white/80' : 'text-gray-500'} text-sm`}>
        {tier.tagline}
      </p>

      <div className="mt-5 flex items-baseline">
        <span className={`text-4xl font-bold ${tier.highlighted ? 'text-white' : 'text-gray-900'}`}>
          ₹{price}
        </span>
        <span className={`ml-1 ${tier.highlighted ? 'text-white/80' : 'text-gray-500'}`}>
          /{isYearly ? 'year' : 'month'}
        </span>
      </div>

      {isYearly && (
        <div className="mt-1 text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full inline-flex items-center self-start">
          <Zap size={12} className="mr-1" />
          Save {discount}%
        </div>
      )}

      <ul className="mt-6 space-y-3 flex-1">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check
              size={18}
              className={`mr-2 mt-0.5 ${tier.highlighted ? 'text-white' : `text-${tier.color || 'critter-purple'}`}`}
            />
            <span className={`text-sm ${tier.highlighted ? 'text-white/90' : 'text-gray-600'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        className={`mt-8 w-full py-6 ${
          tier.highlighted
            ? 'bg-white hover:bg-gray-100 text-critter-purple'
            : `bg-critter-purple hover:bg-purple-700 text-white`
        }`}
      >
        {cta}
      </Button>
    </div>
  );
};

const BillingToggle = ({ isYearly, onToggle }: { isYearly: boolean; onToggle: (yearly: boolean) => void }) => {
  return (
    <div className="inline-flex items-center bg-gray-100 p-1 rounded-full mt-8 mb-12">
      <button
        className={`px-4 py-2 rounded-full text-sm font-medium ${
          !isYearly ? 'bg-white shadow text-gray-900' : 'text-gray-500'
        }`}
        onClick={() => onToggle(false)}
      >
        Monthly
      </button>
      <button
        className={`px-4 py-2 rounded-full text-sm font-medium ${
          isYearly ? 'bg-white shadow text-gray-900' : 'text-gray-500'
        }`}
        onClick={() => onToggle(true)}
      >
        Yearly
        <span className="ml-1.5 bg-green-100 text-green-800 text-xs px-1.5 py-0.5 rounded">Save 20%+</span>
      </button>
    </div>
  );
};

const CritterPlusSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingTiers = [
    {
      name: "Critter Basic",
      tagline: "Perfect for occasional pet care needs",
      monthlyPrice: 299,
      yearlyPrice: 2999,
      features: [
        "Dog walking (30 minutes walks)",
        "5 CritterCoins per walk",
        "Standard care services",
        "24/7 customer support",
        "Sitter background checks",
      ],
      color: "emerald-500"
    },
    {
      name: "Critter Plus",
      tagline: "Most popular for regular pet care",
      monthlyPrice: 599,
      yearlyPrice: 5399,
      features: [
        "Dog walking (up to 60 minutes walks)",
        "10 CritterCoins per walk",
        "Priority booking",
        "Pet sitting & overnight care",
        "Regular health check reminders",
        "Premium customer support"
      ],
      highlighted: true,
      color: "critter-purple"
    },
    {
      name: "Critter Pro",
      tagline: "Full service for pet professionals",
      monthlyPrice: 999,
      yearlyPrice: 8999,
      features: [
        "Unlimited dog walking services",
        "20 CritterCoins per activity",
        "VIP priority booking",
        "Pet sitting & overnight care",
        "Pet training consultations",
        "Dedicated pet care manager",
        "Exclusive events access"
      ],
      color: "blue-500"
    }
  ];

  return (
    <section id="critter-plus" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center bg-purple-100 px-4 py-1.5 rounded-full mb-4">
            <Star size={18} className="text-critter-purple mr-2" />
            <span className="text-sm font-semibold text-critter-purple">CritterPlus Membership</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose the Perfect Plan for Your Pet's Needs</h2>
          <p className="text-gray-600 mb-4">
            Get premium access to the best pet care services with exclusive benefits and rewards.
          </p>

          <BillingToggle isYearly={isYearly} onToggle={setIsYearly} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, i) => (
            <PricingTier
              key={i}
              tier={tier}
              isYearly={isYearly}
              cta={tier.highlighted ? "Get Started" : "Choose Plan"}
            />
          ))}
        </div>

        <div className="mt-16 text-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-2 flex items-center justify-center">
            <Shield size={20} className="text-critter-purple mr-2" />
            All plans include
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <Check size={20} className="text-critter-purple" />
              </div>
              <p className="text-sm text-gray-600">Verified pet sitters</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <Check size={20} className="text-critter-purple" />
              </div>
              <p className="text-sm text-gray-600">Insurance coverage</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <Check size={20} className="text-critter-purple" />
              </div>
              <p className="text-sm text-gray-600">24/7 customer support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CritterPlusSection;
