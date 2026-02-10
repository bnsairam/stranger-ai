import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Dark atmospheric background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-muted-foreground font-rajdhani text-lg md:text-xl tracking-[0.3em] uppercase mb-4"
        >
          Jeppiaar Engineering College
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-foreground/70 font-rajdhani text-sm md:text-base tracking-[0.5em] uppercase mb-8"
        >
          Department of Artificial Intelligence &amp; Machine Learning
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="font-cinzel text-6xl md:text-8xl lg:text-9xl font-bold text-primary text-glow-red-strong animate-flicker mb-4"
        >
          XENZO
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-6"
        >
          <p className="font-cinzel text-2xl md:text-3xl text-foreground tracking-[0.2em]">
            PRATIYOG'26
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <p className="text-muted-foreground font-rajdhani text-base tracking-widest uppercase">
            The Upside Down Awaits
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-12"
        >
          <a
            href="#events"
            className="inline-block border border-primary/50 px-8 py-3 font-rajdhani text-primary tracking-[0.3em] uppercase text-sm hover:bg-primary/10 transition-all duration-300 border-glow-red"
          >
            Explore Events
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
