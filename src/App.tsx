import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import BecomeSitterSection from "./components/BecomeSitterSection";
import ReferralSection from "./components/ReferralSection";
import CommunitySection from "./components/CommunitySection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import FindWalkers from "./pages/FindWalkers";
import PetSitting from "./pages/PetSitting";
import OvernightCare from "./pages/OvernightCare";
import PetGrooming from "./pages/PetGrooming";
import VetConsultation from "./pages/VetConsultation";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import CritterCoins from "./pages/CritterCoins";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence, motion } from "framer-motion";

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <ServicesSection />
      <CommunitySection />
      <BecomeSitterSection />
      <FAQSection />
      <ReferralSection />
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/find-walkers" element={<FindWalkers />} />
        <Route path="/pet-sitting" element={<PetSitting />} />
        <Route path="/overnight-care" element={<OvernightCare />} />
        <Route path="/pet-grooming" element={<PetGrooming />} />
        <Route path="/vet-consultation" element={<VetConsultation />} />
        <Route path="/community" element={<Community />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/critter-coins" element={<CritterCoins />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
