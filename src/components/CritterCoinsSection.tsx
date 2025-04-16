
import { Diamond, Dog, FileText, UsersRound, Coins } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const earnMethods = [
  {
    title: "Upgrading Subscriptions",
    icon: Diamond,
    color: "text-blue-500",
    bgColor: "bg-blue-100"
  },
  {
    title: "Booking More Walks",
    icon: Dog,
    color: "text-orange-500",
    bgColor: "bg-orange-100"
  },
  {
    title: "Creating Content",
    icon: FileText,
    color: "text-green-500",
    bgColor: "bg-green-100"
  },
  {
    title: "Referring Friends",
    icon: UsersRound,
    color: "text-purple-500",
    bgColor: "bg-purple-100"
  }
];

const subscriptions = [
  {
    name: "Basic",
    coins: 5,
    features: ["5 coins per walk", "Basic services", "Standard support"]
  },
  {
    name: "Plus",
    coins: 10,
    features: ["10 coins per walk", "Priority booking", "Premium services"]
  },
  {
    name: "Pro",
    coins: 20,
    features: ["20 coins per walk", "VIP services", "Bonus coins for referrals"]
  }
];

const CritterCoinsSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">CritterCoins Rewards</h2>
        
        <div className="bg-gradient-to-r from-critter-purple to-purple-400 rounded-xl p-6 mb-12 shadow-lg">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-white mb-6">Earn CritterCoins through:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {earnMethods.map((method, index) => (
                  <div key={index} className="flex items-center p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                    <div className={`${method.bgColor} p-2 rounded-full mr-3`}>
                      <method.icon size={20} className={method.color} />
                    </div>
                    <span className="text-white font-medium">{method.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/2 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="flex items-center justify-center mb-4">
                <Coins size={24} className="text-yellow-300 mr-2" />
                <h4 className="text-xl font-semibold text-white">Use CritterCoins to unlock:</h4>
              </div>
              <ul className="text-white space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-yellow-300 mr-2"></div>
                  <span>Professional grooming sessions</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-yellow-300 mr-2"></div>
                  <span>Expert training for your pets</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-yellow-300 mr-2"></div>
                  <span>Priority veterinary bookings</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-yellow-300 mr-2"></div>
                  <span>Exclusive pet accessories</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-center mb-8">Subscription Tiers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {subscriptions.map((sub, index) => (
            <Card key={index} className={`border-t-4 ${index === 2 ? 'border-critter-purple' : index === 1 ? 'border-blue-500' : 'border-gray-400'}`}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{sub.name}</CardTitle>
                  {index === 2 && <Badge className="bg-critter-purple">Best Value</Badge>}
                </div>
                <div className="flex items-center mt-2">
                  <Coins size={20} className="text-yellow-500 mr-2" />
                  <span className="text-2xl font-bold">{sub.coins}</span>
                  <span className="ml-2 text-gray-600">coins per walk</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {sub.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mt-1 mr-2 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CritterCoinsSection;
