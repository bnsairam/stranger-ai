import FloatingParticles from "@/components/FloatingParticles";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import AgendaSection from "@/components/AgendaSection";
import CoordinatorsSection from "@/components/CoordinatorsSection";
import ContactSection from "@/components/ContactSection";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background noise-overlay scroll-smooth antialiased text-foreground">
      <FloatingParticles />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />

        <main className="flex-grow">
          <HeroSection />
          <SectionDivider />
          <EventsSection />
          <SectionDivider />
          <AgendaSection />
          <SectionDivider />
          <CoordinatorsSection />
          <SectionDivider />
          <ContactSection />
        </main>
      </div>
    </div>
  );
};

export default Index;
