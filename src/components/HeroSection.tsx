import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import logoJec from "@/assets/logos/jec.png";
import logoIet from "@/assets/logos/iet.png";

const titleLetters = "PRATIYOG".split("");
const ease = [0.16, 1, 0.3, 1] as const;

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

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Parallax Background ── */}
      <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "saturate(0.5) brightness(0.35) hue-rotate(240deg)" }}
        />
      </motion.div>

      {/* ── Vignette + Ambient Layers ── */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 70% at 50% 40%, transparent 0%, hsl(270 30% 4% / 0.65) 55%, hsl(270 30% 4% / 0.98) 100%),
            linear-gradient(to bottom, hsl(270 30% 4% / 0.55) 0%, transparent 25%, transparent 50%, hsl(270 30% 4%) 100%)
          `,
        }}
      />
      <div
        className="absolute inset-0 animate-breathe"
        style={{
          background: `radial-gradient(ellipse 50% 35% at 50% 0%, hsl(48 95% 55% / 0.08) 0%, transparent 100%)`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 45% 55% at 0% 100%, hsl(280 60% 45% / 0.1) 0%, transparent 65%),
            radial-gradient(ellipse 45% 55% at 100% 100%, hsl(280 60% 45% / 0.1) 0%, transparent 65%)
          `,
        }}
      />

      {/* ═══════════════════════════════════════════
          ROW 1 — JEC logo (left) · IET logo (right)
         ═══════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 2.4, ease }}
        className="absolute top-0 left-0 right-0 z-30 px-10 md:px-16 pt-6 md:pt-8"
        style={{ opacity: contentOpacity }}
      >
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          <img
            src={logoJec}
            alt="Jeppiaar Engineering College"
            className="h-[40px] md:h-[45px] w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-500"
            style={{ filter: "grayscale(0.3) sepia(0.15) hue-rotate(15deg)" }}
          />
          <img
            src={logoIet}
            alt="IET"
            className="h-[40px] md:h-[45px] w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-500"
            style={{ filter: "grayscale(0.3) sepia(0.15) hue-rotate(15deg)" }}
          />
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════
          MAIN CONTENT — strict vertical rhythm
         ═══════════════════════════════════════════ */}
      <motion.div
        className="relative z-20 text-center px-5 max-w-6xl mx-auto flex flex-col items-center"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* ROW 2 — "Jeppiaar Educity Presents" */}
        <motion.p
          initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.8, delay: 0.3, ease }}
          className="font-playfair italic text-sm md:text-lg tracking-[0.16em] md:tracking-[0.25em] font-medium"
          style={{
            background: `linear-gradient(90deg, hsl(48 80% 65%), hsl(48 95% 55%), hsl(48 80% 65%))`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "none",
            filter: "drop-shadow(0 0 12px hsl(48 95% 55% / 0.25))",
          }}
        >
          Jeppiaar Educity Presents
        </motion.p>

        {/* 30px gap */}
        <div className="h-[20px] md:h-[30px]" />

        {/* ── Shadow/Atmospheric Title ── */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
          <span
            className="font-display text-5xl sm:text-7xl md:text-[10rem] lg:text-[12rem] font-black tracking-wide"
            style={{
              opacity: 0.06,
              filter: "blur(7px)",
              transform: "scale(1.12)",
              background: `linear-gradient(135deg, hsl(48 100% 55%), hsl(280 60% 50%))`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            PRATIYOG
          </span>
        </div>

        {/* ── PRATIYOG — main title ── */}
        <motion.div
          className="flex items-center justify-center gap-0.5 sm:gap-1 md:gap-2"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {titleLetters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 70, rotateX: -90, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.9 + i * 0.1, ease }}
              className="font-display text-4xl sm:text-6xl md:text-[8rem] lg:text-[10rem] font-black inline-block leading-none"
              style={{
                background: `linear-gradient(150deg, hsl(48 100% 68%) 0%, hsl(45 100% 55%) 35%, hsl(40 100% 48%) 55%, hsl(310 45% 50%) 80%, hsl(280 55% 50%) 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: `drop-shadow(0 4px 8px hsl(0 0% 0% / 0.4)) drop-shadow(0 0 20px hsl(48 100% 55% / 0.5)) drop-shadow(0 0 60px hsl(280 60% 45% / 0.3))`,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* 10px gap → 2K26 */}
        <div className="h-[6px] md:h-[10px]" />

        {/* ── 2K26 — closer, smaller, purple-dominant ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 1.8, ease }}
        >
          <span
            className="font-display text-xl sm:text-3xl md:text-5xl font-black tracking-[0.25em] md:tracking-[0.4em]"
            style={{
              background: `linear-gradient(90deg, hsl(280 55% 55%), hsl(300 45% 58%), hsl(48 80% 60%))`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: `drop-shadow(0 0 10px hsl(280 60% 45% / 0.5))`,
            }}
          >
            2K26
          </span>
        </motion.div>

        {/* 30px gap → divider */}
        <div className="h-[20px] md:h-[30px]" />

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.6, delay: 2.1, ease }}
          className="divider-ember w-36 sm:w-52 md:w-80"
        />

        {/* 30px gap → tagline */}
        <div className="h-[20px] md:h-[30px]" />

        <motion.div
          initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 2.4, ease }}
        >
          <h2
            className="font-cinzel text-sm sm:text-base md:text-xl uppercase tracking-[0.2em] md:tracking-[0.32em] font-semibold"
            style={{
              color: "hsl(0 0% 85%)",
              textShadow: "0 0 20px hsl(0 0% 100% / 0.1)",
            }}
          >
            A National Level Cultural Fest
          </h2>
        </motion.div>

        {/* 10px gap → location */}
        <div className="h-[8px] md:h-[10px]" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.8 }}
        >
          <p className="font-montserrat text-foreground/45 text-[10px] md:text-xs tracking-[0.25em] uppercase font-light">
            Jeppiaar Engineering College, Chennai
          </p>
        </motion.div>

        {/* 50px gap → buttons */}
        <div className="h-[36px] md:h-[50px]" />

        {/* ── Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 3.1, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-6 w-full sm:w-auto"
        >
          {/* Explore Events — Glassmorphism */}
          <a
            href="#events"
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-9 md:px-12 py-4 md:py-5 rounded-lg font-montserrat tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs font-medium transition-all duration-500 hover:-translate-y-1"
            style={{
              background: "hsl(270 20% 12% / 0.4)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid hsl(48 95% 55% / 0.2)",
              color: "hsl(48 80% 65%)",
              boxShadow: "0 4px 20px hsl(0 0% 0% / 0.3)",
            }}
          >
            <span className="relative z-10">Explore Events</span>
            <motion.span
              className="relative z-10 opacity-40"
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ↓
            </motion.span>
            <div
              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500"
              style={{
                border: "1px solid hsl(48 95% 55% / 0.45)",
                boxShadow:
                  "0 8px 32px hsl(48 95% 55% / 0.12), 0 0 60px hsl(280 60% 45% / 0.08), inset 0 0 20px hsl(48 95% 55% / 0.04)",
              }}
            />
          </a>

          {/* Register Now — Gold Gradient + Shimmer */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfSpTsRhZDTRFCRvkTSksLzRy-Kg0-68jwW3PStLwkNfrXeng/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-9 md:px-12 py-4 md:py-5 rounded-lg font-montserrat text-primary-foreground tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs font-bold transition-all duration-500 overflow-hidden hover:scale-105 animate-pulse-glow"
            style={{
              background: `linear-gradient(135deg, hsl(48 95% 55%), hsl(42 100% 48%), hsl(38 100% 44%))`,
            }}
          >
            <span className="relative z-10">Register Now</span>
            <motion.span
              className="relative z-10 opacity-50"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
            {/* Shimmer sweep */}
            <div
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
              style={{
                background:
                  "linear-gradient(90deg, transparent, hsl(0 0% 100% / 0.2), transparent)",
              }}
            />
            <div className="absolute inset-0 rounded-lg bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-background via-background/80 to-transparent z-20" />
    </section>
  );
};

export default HeroSection;
