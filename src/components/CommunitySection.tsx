
import { Heart, MessageSquare, Coins } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardFooter
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const communityPosts = [
  {
    id: 1,
    type: "photo",
    imageUrl: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=662&ixlib=rb-4.0.3",
    username: "Sarah K.",
    likes: 42,
    comments: 13,
    coins: 5,
    title: "Morning walk with Luna 🐕"
  },
  {
    id: 2,
    type: "diary",
    imageUrl: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&q=80&w=774&ixlib=rb-4.0.3",
    username: "Mike T.",
    likes: 27,
    comments: 8,
    coins: 7,
    title: "Bruno's first long walk!"
  },
  {
    id: 3,
    type: "meetup",
    imageUrl: "https://images.unsplash.com/photo-1601758174039-617983b8cdd5?auto=format&fit=crop&q=80&w=774&ixlib=rb-4.0.3",
    username: "DogLovers Club",
    likes: 89,
    comments: 34,
    coins: 12,
    title: "Weekend meetup at Central Park"
  },
  {
    id: 4,
    type: "guide",
    imageUrl: "https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?auto=format&fit=crop&q=80&w=1031&ixlib=rb-4.0.3",
    username: "PetTrainer",
    likes: 135,
    comments: 47,
    coins: 25,
    title: "Training tips for energetic dogs"
  },
  {
    id: 5,
    type: "photo",
    imageUrl: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    username: "Lisa M.",
    likes: 56,
    comments: 12,
    coins: 8,
    title: "Charlie enjoying the beach"
  },
  {
    id: 6,
    type: "diary",
    imageUrl: "https://images.unsplash.com/photo-1541876176131-3f5e84a7331a?auto=format&fit=crop&q=80&w=1171&ixlib=rb-4.0.3",
    username: "John D.",
    likes: 38,
    comments: 9,
    coins: 6,
    title: "A week with our new pup"
  }
];

const CommunitySection = () => {
  const [activeTab, setActiveTab] = useState("trending");
  
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">Community Highlights</h2>
          <div>
            <Tabs defaultValue="trending" onValueChange={setActiveTab}>
              <TabsList className="bg-white">
                <TabsTrigger value="trending">Trending</TabsTrigger>
                <TabsTrigger value="newest">Newest</TabsTrigger>
                <TabsTrigger value="most-coins">Most Coins</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md text-xs font-semibold text-gray-700">
                  {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-3">by {post.username}</p>
              </CardContent>
              <CardFooter className="px-4 py-3 bg-gray-50 flex justify-between items-center">
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <Heart size={16} className="text-red-500 mr-1" />
                    <span className="text-sm">{post.likes}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare size={16} className="text-blue-500 mr-1" />
                    <span className="text-sm">{post.comments}</span>
                  </div>
                </div>
                <div className="flex items-center bg-yellow-100 px-2 py-1 rounded">
                  <Coins size={14} className="text-yellow-600 mr-1" />
                  <span className="text-sm font-medium">{post.coins}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button className="bg-critter-purple hover:bg-critter-purple/90">
            Explore More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
