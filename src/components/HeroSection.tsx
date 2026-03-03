"use client";

import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";

import logoJec from "@/assets/logos/jec.png";
import logoIet from "@/assets/logos/iet.png";
import logoNaac from "@/assets/logos/naac.png";
import logoFounder from "@/assets/logos/jeppiaar-founder.png";
import logoAicte from "@/assets/logos/aicte.png";
import logo25Years from "@/assets/logos/25-years.png";

/* ---------------- CINEMATIC BEAM SWEEP ---------------- */

function BeamSweep() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none z-20 overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.5 }}
    >
      <motion.div
        className="absolute top-0 h-full w-[200px]"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(48 100% 55% / 0.15), hsl(48 100% 55% / 0.05), transparent)",
        }}
        initial={{ x: "-100%" }}
        animate={{ x: "200vw" }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      />
    </motion.div>
  );
}

/* ---------------- INTERACTIVE GLOW ---------------- */

function InteractiveGlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  const glowX = useTransform(smoothX, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(smoothY, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          left: glowX,
          top: glowY,
          x: "-50%",
          y: "-50%",
          background:
            "radial-gradient(circle, hsl(48 100% 55% / 0.07), hsl(275 85% 55% / 0.04) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}

/* ---------------- PURPLE GRADIENT WAVES ---------------- */

function PurpleWaves() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-30"
        style={{
          top: "20%",
          left: "-20%",
          background: "radial-gradient(ellipse, hsl(275 60% 25% / 0.3), transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          bottom: "10%",
          right: "-15%",
          background: "radial-gradient(ellipse, hsl(275 70% 30% / 0.25), transparent 70%)",
          filter: "blur(120px)",
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/* ---------------- MAGNETIC LOGO ---------------- */

function MagneticLogo({
  src,
  alt,
  delay,
  size,
}: {
  src: string;
  alt: string;
  delay: number;
  size: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.15);
    y.set((e.clientY - cy) * 0.15);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className="relative group cursor-pointer flex items-center justify-center"
    >
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "radial-gradient(circle, hsl(48 100% 55% / 0.15), transparent 70%)",
          filter: "blur(20px)",
        }}
      />
      <img
        src={src}
        alt={alt}
        className={`${size} w-auto object-contain relative z-10 transition-transform duration-500 group-hover:scale-110`}
        style={{
          filter: "drop-shadow(0 0 8px hsl(48 100% 55% / 0.25))",
        }}
      />
    </motion.div>
  );
}

/* ---------------- HERO SECTION ---------------- */

export default function HeroSection() {
  const [count, setCount] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  const [prevSecs, setPrevSecs] = useState(0);

  useEffect(() => {
    const target = new Date("2026-03-05T09:00:00+05:30").getTime();

    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      const newSecs = Math.floor((diff % 60000) / 1000);
      setPrevSecs(count.secs);
      setCount({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: newSecs,
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 bg-gradient-to-b from-[#0d0520] via-[#090315] to-[#0b0618]">
      {/* Cinematic beam on load */}
      <BeamSweep />

      {/* Slow-moving purple gradient waves */}
      <PurpleWaves />

      {/* Interactive mouse glow */}
      <InteractiveGlow />

      {/* Soft title backglow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] pointer-events-none animate-glow-breathe"
        style={{
          background: "radial-gradient(ellipse, hsl(48 95% 55% / 0.08), hsl(275 70% 50% / 0.04), transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 text-center w-full max-w-6xl mx-auto pt-20 pb-10">

        {/* LOGO ROW — 6 logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center justify-center gap-6 sm:gap-10 md:gap-14 lg:gap-20 mb-10 flex-wrap"
        >
          <MagneticLogo src={logo25Years} alt="25 Years" delay={0.2} size="h-14 sm:h-16 md:h-20" />
          <MagneticLogo src={logoFounder} alt="Founder" delay={0.3} size="h-14 sm:h-16 md:h-20" />
          <MagneticLogo src={logoJec} alt="JEC" delay={0.4} size="h-12 sm:h-14 md:h-16" />
          <MagneticLogo src={logoIet} alt="IET" delay={0.5} size="h-12 sm:h-14 md:h-16" />
          <MagneticLogo src={logoNaac} alt="NAAC" delay={0.6} size="h-14 sm:h-16 md:h-20" />
          <MagneticLogo src={logoAicte} alt="AICTE" delay={0.7} size="h-14 sm:h-16 md:h-20" />
        </motion.div>

        {/* NEON TITLE — cinematic entrance with flicker */}
        <motion.div className="relative inline-block">
          {/* Shimmer pass over title */}
          <motion.div
            className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 4 }}
          >
            <motion.div
              className="absolute top-0 h-full w-[120px]"
              style={{
                background: "linear-gradient(90deg, transparent, hsl(48 100% 70% / 0.3), transparent)",
              }}
              animate={{ x: ["-120px", "800px"] }}
              transition={{ duration: 1.5, delay: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 4 }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.85, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[4rem] sm:text-[6rem] md:text-[8rem] font-black leading-none tracking-tight bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-400 bg-clip-text text-transparent animate-pulse-glow"
          >
            PRATIYOG
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl font-bold tracking-[0.3em] mt-2 bg-gradient-to-r from-purple-400 via-yellow-400 to-purple-400 bg-clip-text text-transparent"
        >
          2K26
        </motion.p>

        {/* COUNTDOWN — with pulse on second change */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex justify-center gap-6 sm:gap-8"
        >
          {[
            { label: "Days", value: count.days },
            { label: "Hours", value: count.hours },
            { label: "Mins", value: count.mins },
            { label: "Secs", value: count.secs },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <motion.div
                key={`${item.label}-${item.value}`}
                initial={item.label === "Secs" ? { scale: 1.08 } : false}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-3xl sm:text-4xl font-bold tabular-nums"
                style={{
                  color: "hsl(48 95% 55%)",
                  textShadow: "0 0 15px hsl(48 100% 55% / 0.5), 0 0 40px hsl(275 70% 50% / 0.15)",
                }}
              >
                {String(item.value).padStart(2, "0")}
              </motion.div>
              <div className="text-xs tracking-widest uppercase mt-1" style={{ color: "hsl(275 60% 60% / 0.6)" }}>
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Button
            size="lg"
            className="group px-12 py-6 font-semibold tracking-wider bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_hsl(48_100%_55%/0.4),0_0_60px_hsl(48_100%_55%/0.15)]"
            asChild
          >
            <a href="#events">
              <Sparkles className="mr-2 h-4 w-4" />
              Explore Events
              <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="group px-12 py-6 font-semibold tracking-wider border-purple-500 text-purple-300 hover:scale-105 hover:bg-purple-500/10 hover:border-yellow-400/60 hover:text-yellow-300 transition-all duration-500 hover:shadow-[0_0_25px_hsl(48_100%_55%/0.15),0_0_50px_hsl(275_70%_50%/0.1)]"
            asChild
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfSpTsRhZDTRFCRvkTSksLzRy-Kg0-68jwW3PStLwkNfrXeng/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase" style={{ color: "hsl(275 50% 55% / 0.4)" }}>
            Scroll
          </span>
          <motion.div
            className="w-[1px] h-8"
            style={{ background: "linear-gradient(to bottom, hsl(48 95% 55% / 0.4), transparent)" }}
            animate={{ scaleY: [1, 0.5, 1], opacity: [0.6, 0.3, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
