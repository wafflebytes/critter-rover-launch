
import { Paw } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingButton = () => {
  return (
    <div className="fixed bottom-6 right-6 lg:hidden z-40">
      <Button className="rounded-full w-14 h-14 bg-critter-purple hover:bg-critter-purple/90 shadow-lg flex items-center justify-center p-0">
        <Paw size={24} />
      </Button>
    </div>
  );
};

export default FloatingButton;
