import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const titleLetters = "XENZO".split("");

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover scale-110 md:scale-105"
          style={{ filter: "saturate(0.7) brightness(0.6)" }}
        />
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse 80% 70% at 50% 40%, transparent 0%, hsl(0 0% 3% / 0.5) 60%, hsl(0 0% 3% / 0.97) 100%),
            linear-gradient(to bottom, hsl(0 0% 3% / 0.4) 0%, transparent 30%, transparent 50%, hsl(0 0% 3%) 100%)
          `
        }} />
        <div className="absolute inset-0" style={{
          background: `radial-gradient(ellipse 50% 40% at 50% 0%, hsl(3 80% 48% / 0.08) 0%, transparent 100%)`
        }} />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-5 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="mb-2 md:mb-3"
        >
          <p className="font-elegant italic text-muted-foreground text-sm md:text-lg tracking-[0.1em] md:tracking-[0.15em]">
            Jeppiaar Engineering College presents
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mb-8 md:mb-10"
        >
          <p className="font-body text-foreground/50 text-[10px] md:text-sm tracking-[0.3em] md:tracking-[0.5em] uppercase font-light leading-relaxed">
            Dept. of AI & Machine Learning
          </p>
        </motion.div>

        {/* XENZO */}
        <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-4 mb-3">
          {titleLetters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.9 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display text-5xl sm:text-7xl md:text-[10rem] lg:text-[12rem] font-bold text-primary text-glow-red-hero animate-flicker inline-block leading-none"
              style={{ animationDelay: `${i * 0.8}s` }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="divider-ember w-32 sm:w-48 md:w-72 mx-auto mb-5 md:mb-6"
        />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.1 }}
        >
          <h2 className="font-cinzel text-lg sm:text-xl md:text-3xl text-foreground/90 tracking-[0.2em] md:tracking-[0.3em] font-normal">
            PRATIYOG'26
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="mt-3 md:mt-4"
        >
          <p className="font-elegant italic text-muted-foreground text-xs md:text-base tracking-wider">
            "Some doors should never be opened."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
          className="mt-10 md:mt-14"
        >
          <a
            href="#events"
            className="group relative inline-flex items-center gap-3 border border-primary/30 px-7 md:px-10 py-3 md:py-4 font-body text-primary/90 tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs hover:border-primary/60 transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">Enter the Upside Down</span>
            <span className="relative z-10 text-primary/50 group-hover:translate-x-1 transition-transform duration-300">↓</span>
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

export default HeroSection;
