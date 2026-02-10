import FloatingParticles from "@/components/FloatingParticles";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import CoordinatorsSection from "@/components/CoordinatorsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <FloatingParticles />
      <HeroSection />
      <EventsSection />
      <CoordinatorsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
