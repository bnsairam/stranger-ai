import FloatingParticles from "@/components/FloatingParticles";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import CoordinatorsSection from "@/components/CoordinatorsSection";
import ContactSection from "@/components/ContactSection";
// Optional: create this component if you don't have it yet
// import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div 
      className="
        relative min-h-screen 
        bg-background 
        noise-overlay 
        scanlines 
        scroll-smooth
        antialiased
        text-foreground
      "
    >
      {/* Background effects layer */}
      <FloatingParticles />

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />

        <main className="flex-grow">
          <HeroSection />
          <EventsSection />
          <CoordinatorsSection />
          <ContactSection />
        </main>

        {/* Footer – add this if you have/want one */}
        {/* <Footer /> */}

        {/* Minimal fallback footer if you don't have a component yet */}
        <footer className="border-t border-border/40 bg-background/80 py-8 text-center text-sm text-muted-foreground backdrop-blur-sm">
          <p>© {new Date().getFullYear()} Pratiyog 2K26 • Jeppiaar Engineering College</p>
          <p className="mt-2">Made with ❤️ in Chennai</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
