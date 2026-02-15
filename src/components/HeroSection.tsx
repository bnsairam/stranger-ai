import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import logo25 from "@/assets/logos/25-years.png";
import logoJprEducity from "@/assets/logos/jpr-educity.jpeg";
import logoJec from "@/assets/logos/jec.png";
import logoIet from "@/assets/logos/iet.png";
import logoAiml from "@/assets/logos/aiml.png";

const titleLetters = "PRATIYOG".split("");

const logos = [
  { src: logoJprEducity, alt: "Jeppiaar Educity", className: "h-12 md:h-16" },
  { src: logoJec, alt: "Jeppiaar Engineering College", className: "h-11 md:h-14" },
  { src: logo25, alt: "25 Years of Legacy", className: "h-14 md:h-20" },
  { src: logoAiml, alt: "AI & ML Department", className: "h-12 md:h-16" },
  { src: logoIet, alt: "IET", className: "h-10 md:h-13" },
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
          style={{ filter: "saturate(0.5) brightness(0.4) hue-rotate(240deg)" }}
        />
        {/* Deep purple vignette */}
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse 80% 70% at 50% 40%, transparent 0%, hsl(270 30% 4% / 0.6) 60%, hsl(270 30% 4% / 0.98) 100%),
            linear-gradient(to bottom, hsl(270 30% 4% / 0.5) 0%, transparent 30%, transparent 50%, hsl(270 30% 4%) 100%)
          `
        }} />
        {/* Yellow glow from top */}
        <div className="absolute inset-0" style={{
          background: `radial-gradient(ellipse 40% 30% at 50% 0%, hsl(48 95% 55% / 0.06) 0%, transparent 100%)`
        }} />
        {/* Purple glow from bottom corners */}
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse 40% 50% at 0% 100%, hsl(280 60% 45% / 0.08) 0%, transparent 70%),
            radial-gradient(ellipse 40% 50% at 100% 100%, hsl(280 60% 45% / 0.08) 0%, transparent 70%)
          `
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
          <p className="font-body text-accent/80 text-xs md:text-sm tracking-[0.3em] md:tracking-[0.5em] uppercase font-medium leading-relaxed">
            Inter College Culturals
          </p>
        </motion.div>

        {/* PRATIYOG — gradient text */}
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
              className="font-display text-4xl sm:text-6xl md:text-[8rem] lg:text-[10rem] font-bold inline-block leading-none animate-flicker"
              style={{
                animationDelay: `${i * 0.8}s`,
                background: `linear-gradient(135deg, hsl(48 95% 60%) 0%, hsl(40 100% 50%) 40%, hsl(280 60% 55%) 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: `drop-shadow(0 0 12px hsl(48 100% 55% / 0.5)) drop-shadow(0 0 40px hsl(280 60% 45% / 0.3))`,
              }}
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
          <span
            className="font-display text-2xl sm:text-4xl md:text-6xl font-bold tracking-[0.2em] md:tracking-[0.4em]"
            style={{
              background: `linear-gradient(90deg, hsl(280 60% 55%), hsl(48 95% 55%))`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: `drop-shadow(0 0 8px hsl(280 60% 45% / 0.4))`,
            }}
          >
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
            className="group relative inline-flex items-center gap-3 border border-accent/40 px-7 md:px-10 py-3 md:py-4 font-body text-accent tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs hover:border-accent/70 transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">Explore Events</span>
            <span className="relative z-10 text-accent/50 group-hover:translate-x-1 transition-transform duration-300">↓</span>
            <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/15 transition-colors duration-500" />
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfSpTsRhZDTRFCRvkTSksLzRy-Kg0-68jwW3PStLwkNfrXeng/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-7 md:px-10 py-3 md:py-4 font-body text-primary-foreground tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs transition-all duration-500 overflow-hidden"
            style={{
              background: `linear-gradient(135deg, hsl(48 95% 50%), hsl(38 100% 45%))`,
            }}
          >
            <span className="relative z-10 font-semibold">Register Now</span>
            <span className="relative z-10 opacity-70 group-hover:translate-x-1 transition-transform duration-300">→</span>
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

export default HeroSection;
