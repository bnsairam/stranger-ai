import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import logo25 from "@/assets/logos/25-years.png";
import logoJprEducity from "@/assets/logos/jpr-educity.jpeg";
import logoJec from "@/assets/logos/jec.png";
import logoIet from "@/assets/logos/iet.png";
import logoBuilding from "@/assets/logos/building.jpeg";
import logoAiml from "@/assets/logos/aiml.png";

const titleLetters = "PRATIYOG".split("");

const logos = [
  { src: logoJprEducity, alt: "Jeppiaar Educity", className: "h-8 md:h-12" },
  { src: logoJec, alt: "Jeppiaar Engineering College", className: "h-7 md:h-10" },
  { src: logo25, alt: "25 Years of Legacy", className: "h-10 md:h-14" },
  { src: logoAiml, alt: "AI & ML Department", className: "h-8 md:h-12" },
  { src: logoIet, alt: "IET", className: "h-6 md:h-9" },
  { src: logoBuilding, alt: "JEC Campus", className: "h-7 md:h-10 rounded-sm" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Logos at top */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute top-16 md:top-20 left-0 right-0 z-30 px-4"
      >
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {logos.map((logo, i) => (
            <motion.img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.7 + i * 0.08 }}
              className={`${logo.className} w-auto object-contain opacity-75 hover:opacity-100 transition-opacity duration-300`}
            />
          ))}
        </div>
      </motion.div>

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
          <p className="font-elegant italic text-foreground/80 text-sm md:text-lg tracking-[0.1em] md:tracking-[0.15em]">
            Jeppiaar Educity presents
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mb-4 md:mb-6"
        >
          <p className="font-body text-foreground/70 text-xs md:text-sm tracking-[0.3em] md:tracking-[0.5em] uppercase font-medium leading-relaxed">
            Inter College Culturals
          </p>
        </motion.div>

        {/* PRATIYOG */}
        <div className="flex items-center justify-center gap-0.5 sm:gap-1 md:gap-3 mb-1">
          {titleLetters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.9 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display text-4xl sm:text-6xl md:text-[8rem] lg:text-[10rem] font-bold text-primary text-glow-red-hero animate-flicker inline-block leading-none"
              style={{ animationDelay: `${i * 0.8}s` }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* 2K26 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 md:mb-6"
        >
          <span className="font-display text-2xl sm:text-4xl md:text-6xl font-bold text-primary/90 text-glow-red tracking-[0.2em] md:tracking-[0.4em]">
            2K26
          </span>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 2.1, ease: [0.16, 1, 0.3, 1] }}
          className="divider-ember w-32 sm:w-48 md:w-72 mx-auto mb-5 md:mb-6"
        />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.3 }}
        >
          <h2 className="font-cinzel text-base sm:text-lg md:text-2xl text-foreground/90 tracking-[0.15em] md:tracking-[0.25em] font-normal">
            A National Level Cultural Fest
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.7 }}
          className="mt-3 md:mt-4"
        >
          <p className="font-body text-foreground/60 text-xs md:text-sm tracking-[0.2em] uppercase">
            Jeppiaar Engineering College, Chennai
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
          className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#events"
            className="group relative inline-flex items-center gap-3 border border-primary/30 px-7 md:px-10 py-3 md:py-4 font-body text-primary/90 tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs hover:border-primary/60 transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">Explore Events</span>
            <span className="relative z-10 text-primary/50 group-hover:translate-x-1 transition-transform duration-300">↓</span>
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
          </a>
          <a
            href="#register"
            className="group relative inline-flex items-center gap-3 bg-primary/90 hover:bg-primary px-7 md:px-10 py-3 md:py-4 font-body text-primary-foreground tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">Register Now</span>
            <span className="relative z-10 opacity-70 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

export default HeroSection;
