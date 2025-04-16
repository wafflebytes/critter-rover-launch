
import { Heart, MessageSquare, Coins, Camera, MessageCircle, Award, User } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardFooter
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const CommunitySectionRedesigned = () => {
  const [activeTab, setActiveTab] = useState("trending");
  
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="inline-flex items-center px-4 py-1.5 bg-purple-100 rounded-full mb-4">
            <User size={16} className="text-critter-purple mr-2" />
            <span className="text-sm font-medium text-critter-purple">Join Our Community</span>
          </div>
          <h2 className="text-3xl font-bold mb-3">Share & Earn CritterCoins</h2>
          <p className="text-gray-600 max-w-2xl">
            Post photos of your pets, share experiences, and earn rewards in our vibrant community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white border border-gray-100 hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <Camera size={20} className="text-pink-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Share Pet Photos</h3>
              <p className="text-sm text-gray-500">Post cute pics of your furry friends</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border border-gray-100 hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <MessageCircle size={20} className="text-blue-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Join Discussions</h3>
              <p className="text-sm text-gray-500">Connect with fellow pet parents</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border border-gray-100 hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Award size={20} className="text-purple-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Get Verified</h3>
              <p className="text-sm text-gray-500">Earn badges and special status</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border border-gray-100 hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Coins size={20} className="text-yellow-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Earn CritterCoins</h3>
              <p className="text-sm text-gray-500">Redeem for services and perks</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mb-8">
          <Button className="bg-critter-purple hover:bg-critter-purple/90 px-6">
            Visit Community Hub
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <CommunityCard 
            image="/lovable-uploads/36d73623-890a-4126-8f38-952dbcb278d5.png"
            name="Ravi Sharma"
            location="Delhi, India"
            comment="My pup Max had the best time with his sitter! Highly recommend!"
            likes={142}
            coins={20}
          />
          
          <CommunityCard 
            image="/lovable-uploads/90cc52a8-1ac3-4f13-97dc-94a4a19075f2.png"
            name="Priya Patel"
            location="Mumbai, India"
            comment="My cat Whiskers is so picky, but loved the sitter we found on Critter!"
            likes={98}
            coins={35}
          />
          
          <CommunityCard 
            image="https://images.unsplash.com/photo-1601758174039-617983b8cdd5?auto=format&fit=crop&q=80&w=774&ixlib=rb-4.0.3"
            name="Arjun Mehta"
            location="Bangalore, India"
            comment="Daily walks with our Critter sitter have made such a difference for Bruno!"
            likes={124}
            coins={45}
          />
        </div>
      </div>
    </section>
  );
};

const CommunityCard = ({ image, name, location, comment, likes, coins }: { 
  image: string;
  name: string;
  location: string;
  comment: string;
  likes: number;
  coins: number;
}) => {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3">
            <img 
              src={`https://ui-avatars.com/api/?name=${name.replace(' ', '+')}&background=random`} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-medium text-gray-900">{name}</p>
            <p className="text-xs text-gray-500">{location}</p>
          </div>
        </div>
        <p className="text-gray-700 mb-2">{comment}</p>
      </CardContent>
      <CardFooter className="px-4 py-3 bg-gray-50 flex justify-between items-center">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" className="px-2 py-0 h-auto">
            <Heart size={16} className="text-gray-400 hover:text-red-500 mr-1.5" />
            <span className="text-sm text-gray-600">{likes}</span>
          </Button>
        </div>
        <div className="flex items-center bg-yellow-100 px-2 py-1 rounded text-xs font-medium text-yellow-700">
          <Coins size={12} className="text-yellow-600 mr-1" />
          +{coins} CritterCoins
        </div>
      </CardFooter>
    </Card>
  );
};

export default CommunitySectionRedesigned;
