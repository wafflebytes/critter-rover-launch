
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CritterCoinsSection from "@/components/CritterCoinsSection";
import CommunitySection from "@/components/CommunitySection";
import TrustSection from "@/components/TrustSection";
import ReferralSection from "@/components/ReferralSection";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <CritterCoinsSection />
        <CommunitySection />
        <TrustSection />
        <ReferralSection />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Index;
