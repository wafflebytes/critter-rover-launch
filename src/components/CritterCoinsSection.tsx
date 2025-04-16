
import { Diamond, Dog, FileText, UsersRound, Coins, Check, X, CreditCard, Calendar } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardHeader,
  CardTitle, 
  CardFooter,
  CardDescription
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const earnMethods = [
  {
    title: "Upgrading Subscriptions",
    description: "Get more coins with premium plans",
    icon: Diamond,
    color: "text-blue-500",
    bgColor: "bg-blue-100"
  },
  {
    title: "Booking More Walks",
    description: "Earn coins with every walk you book",
    icon: Dog,
    color: "text-orange-500",
    bgColor: "bg-orange-100"
  },
  {
    title: "Creating Content",
    description: "Share your pet stories & photos",
    icon: FileText,
    color: "text-green-500",
    bgColor: "bg-green-100"
  },
  {
    title: "Referring Friends",
    description: "Invite friends to join Critter",
    icon: UsersRound,
    color: "text-purple-500",
    bgColor: "bg-purple-100"
  }
];

const subscriptions = [
  {
    name: "Basic",
    description: "Perfect for occasional pet parents",
    coins: 5,
    monthly: 299,
    yearly: 2990,
    yearlySavings: "Save ₹600",
    features: [
      { text: "5 coins per walk", included: true },
      { text: "Basic services", included: true },
      { text: "Standard support", included: true },
      { text: "Priority booking", included: false },
      { text: "Special offers", included: false }
    ]
  },
  {
    name: "Plus",
    description: "Most popular for regular pet care",
    coins: 10,
    monthly: 599,
    yearly: 5990,
    yearlySavings: "Save ₹1,200",
    features: [
      { text: "10 coins per walk", included: true },
      { text: "All basic services", included: true },
      { text: "Priority booking", included: true },
      { text: "Premium services", included: true },
      { text: "24/7 support", included: false }
    ]
  },
  {
    name: "Pro",
    description: "Ultimate care for your furry family",
    coins: 20,
    monthly: 999,
    yearly: 9990,
    yearlySavings: "Save ₹2,000",
    features: [
      { text: "20 coins per walk", included: true },
      { text: "All plus services", included: true },
      { text: "VIP bookings", included: true },
      { text: "Bonus coins for referrals", included: true },
      { text: "24/7 premium support", included: true }
    ]
  }
];

const CritterCoinsSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-purple-100 px-4 py-1.5 rounded-full mb-4">
            <Coins size={18} className="text-critter-purple mr-2" />
            <span className="text-sm font-semibold text-critter-purple">Loyalty Program</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">CritterCoins Rewards Program</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Earn coins with every activity and redeem them for premium pet services.</p>
        </div>
        
        <div className="bg-gradient-to-r from-critter-purple to-purple-500 rounded-2xl p-8 mb-16 shadow-xl">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-white mb-8">How to earn CritterCoins:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {earnMethods.map((method, index) => (
                  <div key={index} className="flex items-start p-4 bg-white/15 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors">
                    <div className={`${method.bgColor} p-3 rounded-full mr-4 mt-1`}>
                      <method.icon size={22} className={method.color} />
                    </div>
                    <div>
                      <span className="text-white font-semibold block mb-1">{method.title}</span>
                      <span className="text-white/80 text-sm">{method.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/2 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="flex items-center justify-center mb-6">
                <Coins size={30} className="text-yellow-300 mr-3" />
                <h4 className="text-2xl font-bold text-white">Redeem your CritterCoins for:</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/15 p-4 rounded-xl">
                  <h5 className="text-white font-semibold mb-3">Pet Services</h5>
                  <ul className="text-white/90 space-y-2 text-sm">
                    <li className="flex items-center">
                      <Check size={16} className="text-green-300 mr-2" />
                      <span>Professional grooming (100 coins)</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-300 mr-2" />
                      <span>Training sessions (200 coins)</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-300 mr-2" />
                      <span>Vet consultations (150 coins)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/15 p-4 rounded-xl">
                  <h5 className="text-white font-semibold mb-3">Special Perks</h5>
                  <ul className="text-white/90 space-y-2 text-sm">
                    <li className="flex items-center">
                      <Check size={16} className="text-green-300 mr-2" />
                      <span>Exclusive pet accessories (75 coins)</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-300 mr-2" />
                      <span>Priority bookings (50 coins)</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-300 mr-2" />
                      <span>Extended walking time (60 coins)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  View Rewards Catalog
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-center mb-6">Choose Your Subscription Plan</h3>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            Subscribe to earn more coins with every walk and unlock premium features.
          </p>
          
          <Tabs defaultValue="monthly" className="w-full mb-8">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-64 grid-cols-2">
                <TabsTrigger value="monthly">
                  <CreditCard className="mr-2" size={16} />
                  Monthly
                </TabsTrigger>
                <TabsTrigger value="yearly">
                  <Calendar className="mr-2" size={16} />
                  Yearly
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="monthly">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {subscriptions.map((sub, index) => (
                  <Card key={index} className={`border ${index === 2 ? 'border-critter-purple border-2' : ''} relative overflow-hidden`}>
                    {index === 1 && (
                      <div className="absolute top-0 right-0 left-0 bg-blue-500 text-white text-xs font-bold py-1 text-center">
                        MOST POPULAR
                      </div>
                    )}
                    <CardHeader className={`${index === 2 ? 'bg-purple-50' : index === 1 ? 'bg-blue-50' : 'bg-gray-50'} pb-4`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl font-bold">{sub.name}</CardTitle>
                          <CardDescription className="mt-1">{sub.description}</CardDescription>
                        </div>
                        {index === 2 && <Badge className="bg-critter-purple">Best Value</Badge>}
                      </div>
                      <div className="mt-4">
                        <div className="flex items-baseline">
                          <span className="text-3xl font-bold">₹{sub.monthly}</span>
                          <span className="text-gray-500 ml-1">/month</span>
                        </div>
                        <div className="flex items-center mt-1">
                          <Coins size={18} className="text-yellow-500 mr-2" />
                          <span className="text-lg font-semibold">{sub.coins}</span>
                          <span className="ml-1 text-gray-600">coins per walk</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        {sub.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            {feature.included ? (
                              <Check size={18} className="text-green-500 mr-2 mt-0.5" />
                            ) : (
                              <X size={18} className="text-gray-300 mr-2 mt-0.5" />
                            )}
                            <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                              {feature.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="pt-2 pb-6">
                      <Button 
                        className={`w-full py-6 ${index === 2 ? 'bg-critter-purple hover:bg-critter-purple/90' : ''}`}
                        variant={index === 2 ? "default" : "outline"}
                      >
                        {index === 2 ? "Get Started" : "Choose Plan"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="yearly">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {subscriptions.map((sub, index) => (
                  <Card key={index} className={`border ${index === 2 ? 'border-critter-purple border-2' : ''} relative overflow-hidden`}>
                    {index === 1 && (
                      <div className="absolute top-0 right-0 left-0 bg-blue-500 text-white text-xs font-bold py-1 text-center">
                        MOST POPULAR
                      </div>
                    )}
                    <CardHeader className={`${index === 2 ? 'bg-purple-50' : index === 1 ? 'bg-blue-50' : 'bg-gray-50'} pb-4`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl font-bold">{sub.name}</CardTitle>
                          <CardDescription className="mt-1">{sub.description}</CardDescription>
                        </div>
                        <Badge className={`${index === 2 ? 'bg-critter-purple' : 'bg-green-500'}`}>
                          {index === 2 ? "Best Value" : sub.yearlySavings}
                        </Badge>
                      </div>
                      <div className="mt-4">
                        <div className="flex items-baseline">
                          <span className="text-3xl font-bold">₹{sub.yearly}</span>
                          <span className="text-gray-500 ml-1">/year</span>
                        </div>
                        <div className="text-sm text-green-600 font-medium mt-1">
                          {sub.yearlySavings}
                        </div>
                        <div className="flex items-center mt-2">
                          <Coins size={18} className="text-yellow-500 mr-2" />
                          <span className="text-lg font-semibold">{sub.coins}</span>
                          <span className="ml-1 text-gray-600">coins per walk</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        {sub.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            {feature.included ? (
                              <Check size={18} className="text-green-500 mr-2 mt-0.5" />
                            ) : (
                              <X size={18} className="text-gray-300 mr-2 mt-0.5" />
                            )}
                            <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                              {feature.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="pt-2 pb-6">
                      <Button 
                        className={`w-full py-6 ${index === 2 ? 'bg-critter-purple hover:bg-critter-purple/90' : ''}`}
                        variant={index === 2 ? "default" : "outline"}
                      >
                        {index === 2 ? "Get Started" : "Choose Plan"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center">
            <p className="text-sm text-gray-500 max-w-xl mx-auto">
              All plans include a 7-day free trial. Cancel anytime. CritterCoins are awarded after each completed walk and can be redeemed for premium services on our platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CritterCoinsSection;
