
import { MessageCircle, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const FloatingButton = () => {
  const handleClick = () => {
    toast({
      title: "Welcome to Critter!",
      description: "Talk to our team to get started with your pet care journey.",
      duration: 5000,
    });
  };

  return (
    <div className="fixed bottom-6 right-6 lg:hidden z-40">
      <div className="absolute -top-10 right-0 bg-white px-3 py-1.5 rounded-full shadow-md text-sm font-medium text-gray-700 animate-bounce whitespace-nowrap">
        Need help?
      </div>
      <Button 
        onClick={handleClick}
        className="rounded-full w-14 h-14 bg-critter-purple hover:bg-critter-purple/90 shadow-lg flex items-center justify-center p-0 relative overflow-hidden transition-all duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-critter-purple to-purple-400 animate-pulse opacity-20"></div>
        <MessageCircle size={22} className="text-white" />
        <PawPrint size={14} className="absolute bottom-3 right-3 text-white opacity-70" />
      </Button>
    </div>
  );
};

export default FloatingButton;
