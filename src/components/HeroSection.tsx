import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -80]);
  const contentBlur = useTransform(scrollYProgress, [0, 0.4], [0, 12]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Logos at top */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2.5 }}
        className="absolute top-16 md:top-20 left-0 right-0 z-30 px-4"
        style={{ opacity: contentOpacity }}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {logos.map((logo, i) => (
            <motion.img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              initial={{ opacity: 0, y: -20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 2.7 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`${logo.className} w-auto object-contain opacity-65 hover:opacity-100 transition-all duration-700 hover:scale-105`}
            />
          ))}
        </div>
      </motion.div>

      {/* Parallax layered background */}
      <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "saturate(0.45) brightness(0.3) hue-rotate(240deg)" }}
        />
      </motion.div>

      {/* Vignette overlays */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 80% 70% at 50% 40%, transparent 0%, hsl(270 30% 4% / 0.65) 55%, hsl(270 30% 4% / 0.98) 100%),
          linear-gradient(to bottom, hsl(270 30% 4% / 0.55) 0%, transparent 25%, transparent 50%, hsl(270 30% 4%) 100%)
        `
      }} />
      {/* Golden crown light from top center */}
      <div className="absolute inset-0 animate-breathe" style={{
        background: `radial-gradient(ellipse 50% 35% at 50% 0%, hsl(48 95% 55% / 0.08) 0%, transparent 100%)`
      }} />
      {/* Purple nebula from corners */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 45% 55% at 0% 100%, hsl(280 60% 45% / 0.1) 0%, transparent 65%),
          radial-gradient(ellipse 45% 55% at 100% 100%, hsl(280 60% 45% / 0.1) 0%, transparent 65%),
          radial-gradient(ellipse 30% 40% at 50% 80%, hsl(280 80% 30% / 0.06) 0%, transparent 100%)
        `
      }} />

      {/* Content with parallax fade + blur */}
      <motion.div
        className="relative z-20 text-center px-5 max-w-6xl mx-auto"
        style={{
          opacity: contentOpacity,
          y: contentY,
          filter: contentBlur.get() > 0 ? `blur(${contentBlur.get()}px)` : undefined,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-2 md:mb-3"
        >
          <p className="font-elegant italic text-foreground/70 text-sm md:text-lg tracking-[0.12em] md:tracking-[0.18em]">
            Jeppiaar Educity presents
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-5 md:mb-7"
        >
          <p className="font-body text-accent/65 text-xs md:text-sm tracking-[0.35em] md:tracking-[0.55em] uppercase font-medium leading-relaxed">
            Inter College Culturals
          </p>
        </motion.div>

        {/* PRATIYOG — shimmer gradient text */}
        <div className="flex items-center justify-center gap-0.5 sm:gap-1 md:gap-3 mb-2">
          {titleLetters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 70, rotateX: -90, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
              transition={{
                duration: 1.2,
                delay: 0.9 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display text-4xl sm:text-6xl md:text-[8rem] lg:text-[10rem] font-bold inline-block leading-none animate-flicker"
              style={{
                animationDelay: `${i * 0.8}s`,
                background: `linear-gradient(135deg, hsl(48 100% 65%) 0%, hsl(45 100% 55%) 30%, hsl(40 100% 48%) 50%, hsl(310 50% 55%) 75%, hsl(280 60% 55%) 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: `drop-shadow(0 0 15px hsl(48 100% 55% / 0.6)) drop-shadow(0 0 50px hsl(280 60% 45% / 0.35))`,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* 2K26 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-5 md:mb-7"
        >
          <span
            className="font-display text-2xl sm:text-4xl md:text-6xl font-bold tracking-[0.25em] md:tracking-[0.45em]"
            style={{
              background: `linear-gradient(90deg, hsl(280 60% 55%), hsl(300 50% 55%), hsl(48 95% 55%))`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: `drop-shadow(0 0 10px hsl(280 60% 45% / 0.5))`,
            }}
          >
            2K26
          </span>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.6, delay: 2.1, ease: [0.16, 1, 0.3, 1] }}
          className="divider-ember w-36 sm:w-52 md:w-80 mx-auto mb-6 md:mb-7"
        />

        <motion.div
          initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-cinzel text-base sm:text-lg md:text-2xl text-foreground/80 tracking-[0.18em] md:tracking-[0.3em] font-normal">
            A National Level Cultural Fest
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.8 }}
          className="mt-3 md:mt-5"
        >
          <p className="font-body text-foreground/45 text-xs md:text-sm tracking-[0.25em] uppercase">
            Jeppiaar Engineering College, Chennai
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 3.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 md:mt-18 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="#events"
            className="group relative inline-flex items-center gap-3 border border-accent/25 px-9 md:px-12 py-4 md:py-5 font-body text-accent tracking-[0.35em] md:tracking-[0.45em] uppercase text-[10px] md:text-xs hover:border-accent/50 transition-all duration-700 overflow-hidden"
          >
            <span className="relative z-10">Explore Events</span>
            <motion.span
              className="relative z-10 text-accent/35"
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ↓
            </motion.span>
            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/8 transition-colors duration-700" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: `radial-gradient(ellipse at center, hsl(280 60% 45% / 0.08), transparent 70%)`
              }}
            />
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfSpTsRhZDTRFCRvkTSksLzRy-Kg0-68jwW3PStLwkNfrXeng/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-9 md:px-12 py-4 md:py-5 font-body text-primary-foreground tracking-[0.35em] md:tracking-[0.45em] uppercase text-[10px] md:text-xs transition-all duration-700 overflow-hidden animate-pulse-glow"
            style={{
              background: `linear-gradient(135deg, hsl(48 95% 52%), hsl(42 100% 48%), hsl(38 100% 44%))`,
            }}
          >
            <span className="relative z-10 font-semibold">Register Now</span>
            <motion.span
              className="relative z-10 opacity-50"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-colors duration-700" />
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom fade — taller for seamless section merge */}
      <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-background via-background/80 to-transparent z-20" />
    </section>
  );
};

export default HeroSection;
