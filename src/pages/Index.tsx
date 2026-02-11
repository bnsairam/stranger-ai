import FloatingParticles from "@/components/FloatingParticles";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import CoordinatorsSection from "@/components/CoordinatorsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background noise-overlay scanlines">
      <FloatingParticles />
      <Navbar />
      <HeroSection />
      <EventsSection />
      <CoordinatorsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
