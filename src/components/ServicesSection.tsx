import { Check, Shield, Star, Coins, ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ScrollAnimation } from "./ui/scroll-animation";

const BillingToggle = ({ onToggle }: { onToggle: (isYearly: boolean) => void }) => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly(!isYearly);
    onToggle(!isYearly);
  };

  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <div className="p-1 bg-gray-100 rounded-full inline-flex items-center mb-2">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className={`py-2 px-4 rounded-full text-sm font-medium transition-all ${
            !isYearly
              ? 'bg-white shadow-md text-gray-900 scale-105'
              : 'text-gray-600 hover:text-gray-900'
          }`}
          onClick={() => handleToggle()}
        >
          Monthly
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className={`py-2 px-4 rounded-full text-sm font-medium transition-all flex items-center ${
            isYearly
              ? 'bg-white shadow-md text-gray-900 scale-105'
              : 'text-gray-600 hover:text-gray-900'
          }`}
          onClick={() => handleToggle()}
        >
          Yearly
          <span className="ml-1.5 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full font-semibold">Save 20%</span>
        </motion.button>
      </div>
      <p className="text-xs text-gray-500">
        {isYearly ? "Get two months free with annual billing" : "Switch to yearly billing for 20% discount"}
      </p>
    </div>
  );
};

const PricingCard = ({
  tier,
  isYearly,
  popular,
  index
}: {
  tier: any,
  isYearly: boolean,
  popular?: boolean,
  index: number
}) => {
  const price = isYearly ? tier.yearlyPrice : tier.monthlyPrice;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`relative rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-xl ${
        popular
          ? 'shadow-lg border-2 border-[#6220D9] bg-gradient-to-b from-white via-[#6220D9]/5 to-[#3D06B7]/10'
          : 'shadow-md border border-gray-200 bg-white hover:border-[#6220D9]/30'
      }`}
    >
      {popular && (
        <div className="absolute -right-12 top-5 bg-[#6220D9] text-white text-xs font-bold py-0.5 px-12 transform rotate-45 shadow-sm">
          MOST POPULAR
        </div>
      )}

      <div className="p-5 sm:p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className={`font-bold text-xl mb-0.5 ${popular ? 'text-[#6220D9]' : 'text-gray-900'}`}>
              {tier.name}
            </h3>
            <p className="text-gray-500 text-xs">{tier.description}</p>
          </div>
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              popular ? 'bg-[#6220D9] text-white' : 'bg-[#B9E900]/20 text-[#6220D9]'
            }`}>
            <Coins size={18} />
          </motion.div>
        </div>

        <div className="mt-3 mb-3">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold text-[#000000]">₹{price}</span>
            <span className="text-gray-500 ml-1 text-sm">/{isYearly ? 'year' : 'month'}</span>
          </div>

          {isYearly && (
            <p className="mt-1 text-[#FB4100] text-xs font-medium">
              {`Save ₹${(tier.monthlyPrice * 12 - tier.yearlyPrice).toLocaleString()} annually`}
            </p>
          )}
        </div>

        <div className="flex items-center p-2 mb-4 bg-[#B9E900]/10 rounded-lg border border-[#B9E900]/30">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
            popular ? 'bg-[#6220D9] text-white' : 'bg-[#B9E900]/20 text-[#6220D9]'
          }`}>
            <span className="text-sm font-bold">{tier.coins}</span>
          </div>
          <div>
            <p className="text-[#000000] text-sm font-medium">{tier.coins} coins per walk</p>
            <p className="text-gray-500 text-xs">Redeem for premium services</p>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <p className="font-medium text-xs text-gray-600 uppercase tracking-wider">Includes:</p>
          <div className="grid grid-cols-1 gap-1.5">
            {tier.features.map((feature: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (idx * 0.05) }}
                className="flex items-start"
              >
                {feature.included ? (
                  <div className={`p-0.5 rounded-full mt-0.5 mr-2 ${popular ? 'bg-[#6220D9] text-white' : 'bg-green-100 text-green-600'}`}>
                    <Check size={12} />
                  </div>
                ) : (
                  <div className="w-[14px] h-[14px] mt-0.5 mr-2 border border-gray-300 rounded-full flex-shrink-0"></div>
                )}
                <span className={`text-xs ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div whileTap={{ scale: 0.97 }}>
          <Button
            className={`w-full py-3 group-hover:shadow-md transition-all text-sm ${
              popular
                ? 'bg-[#6220D9] hover:bg-[#3D06B7] text-white'
                : 'bg-white border-2 border-[#6220D9] hover:bg-[#6220D9]/5 text-[#6220D9]'
            }`}
          >
            <span>{tier.cta}</span>
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ repeat: Infinity, repeatType: "mirror", duration: 1, repeatDelay: 1 }}
            >
              <ArrowRight size={14} className="ml-2 inline" />
            </motion.span>
          </Button>
        </motion.div>
      </div>

      {popular && (
        <div className="bg-[#B9E900]/20 py-2 px-4 text-center">
          <p className="text-xs font-medium text-[#000000]">
            <Sparkles size={12} className="inline mr-1 text-[#FB4100]" /> 7-day free trial with guarantee
          </p>
        </div>
      )}
    </motion.div>
  );
};

const ServicesSection = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const subscriptionTiers = [
    {
      name: "Basic",
      description: "Perfect for occasional pet care needs",
      monthlyPrice: 299,
      yearlyPrice: 2990,
      coins: 5,
      features: [
        { text: "5 reward points per walk", included: true },
        { text: "Essential care services", included: true },
        { text: "Friendly customer support", included: true },
        { text: "Access to verified sitters", included: true },
        { text: "Priority booking", included: false },
      ],
      cta: "Choose Basic"
    },
    {
      name: "Plus",
      description: "Most popular for regular care",
      monthlyPrice: 599,
      yearlyPrice: 5990,
      coins: 10,
      features: [
        { text: "10 reward points per walk", included: true },
        { text: "All Basic plan features", included: true },
        { text: "Priority booking", included: true },
        { text: "Premium care services", included: true },
        { text: "24/7 customer support", included: true },
      ],
      cta: "Choose Plus"
    },
    {
      name: "Premium",
      description: "For devoted pet parents",
      monthlyPrice: 999,
      yearlyPrice: 9990,
      coins: 20,
      features: [
        { text: "20 reward points per walk", included: true },
        { text: "All Plus plan features", included: true },
        { text: "VIP priority booking", included: true },
        { text: "Bonus referral points", included: true },
        { text: "Personal care consultant", included: true },
      ],
      cta: "Choose Premium"
    }
  ];

  if (!mounted) return null;

  return (
    <section className="py-14 px-4 bg-white" id="services" ref={sectionRef}>
      <div className="container mx-auto max-w-5xl">
        <ScrollAnimation animation="fadeUp">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-8">
            <ScrollAnimation animation="scaleUp" delay={0.2}>
              <div className="inline-flex items-center justify-center bg-purple-100 px-3 py-1.5 rounded-full mb-3">
                <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
                  <Star size={16} className="text-[#6220D9] mr-1.5" />
                </motion.div>
                <span className="text-xs font-semibold text-[#6220D9]">Critter Membership</span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeIn" delay={0.3}>
              <h2 className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#6220D9] to-purple-500">
                Choose Your Perfect Plan
              </h2>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeIn" delay={0.4}>
              <p className="text-gray-600 mb-4 text-sm">
                Unlock premium features and earn rewards with every booking. Cancel anytime as your needs change.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="scaleUp" delay={0.5}>
              <BillingToggle onToggle={setIsYearly} />
            </ScrollAnimation>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto">
          {subscriptionTiers.map((tier, index) => (
            <ScrollAnimation
              key={tier.name}
              animation="fadeUp"
              delay={0.3 + index * 0.15}
            >
              <PricingCard
                tier={tier}
                isYearly={isYearly}
                popular={index === 1}
                index={index}
              />
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fadeUp" delay={0.9}>
          <div className="mt-10 text-center max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-[#6220D9]/5 to-[#3D06B7]/10 rounded-xl border border-[#6220D9]/20 p-6 shadow-lg">
              <div className="flex flex-col items-center mb-5">
                <motion.div
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "mirror"
                  }}
                  className="w-12 h-12 rounded-full bg-[#6220D9]/10 flex items-center justify-center mb-3"
                >
                  <Shield size={20} className="text-[#6220D9]" />
                </motion.div>
                <h3 className="text-lg font-bold text-[#000000]">All plans include</h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <motion.div
                  whileHover={{ scale: 1.03, backgroundColor: "#B9E900/10" }}
                  className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-100 shadow-sm transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-[#B9E900]/20 flex items-center justify-center mb-2">
                    <Check size={18} className="text-[#6220D9]" />
                  </div>
                  <span className="text-sm font-medium text-[#000000]">Free trial</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03, backgroundColor: "#B9E900/10" }}
                  className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-100 shadow-sm transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-[#B9E900]/20 flex items-center justify-center mb-2">
                    <Check size={18} className="text-[#6220D9]" />
                  </div>
                  <span className="text-sm font-medium text-[#000000]">Cancel anytime</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03, backgroundColor: "#B9E900/10" }}
                  className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-100 shadow-sm transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-[#B9E900]/20 flex items-center justify-center mb-2">
                    <Check size={18} className="text-[#6220D9]" />
                  </div>
                  <span className="text-sm font-medium text-[#000000]">Verified sitters</span>
                </motion.div>
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-700">
              <Zap size={12} className="inline mr-1 text-[#FB4100]" />
              Reward points are earned after each completed service and can be redeemed for premium pet care.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ServicesSection;
