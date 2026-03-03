"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";

import logoJec from "@/assets/logos/jec.png";
import logoIet from "@/assets/logos/iet.png";
import logoNaac from "@/assets/logos/naac.png";
import logoFounder from "@/assets/logos/jeppiaar-founder.png";

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
          background:
            "linear-gradient(90deg, transparent, hsl(48 100% 55% / 0.15), hsl(48 100% 55% / 0.05), transparent)",
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
          background:
            "radial-gradient(ellipse, hsl(275 60% 25% / 0.3), transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          bottom: "10%",
          right: "-15%",
          background:
            "radial-gradient(ellipse, hsl(275 70% 30% / 0.25), transparent 70%)",
          filter: "blur(120px)",
        }}
        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
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
      transition={{ duration: 0.9, delay }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className="relative group cursor-pointer flex items-center justify-center"
    >
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle, hsl(48 100% 55% / 0.15), transparent 70%)",
          filter: "blur(20px)",
        }}
      />
      <img
        src={src}
        alt={alt}
        className={`${size} w-auto object-contain relative z-10 transition-transform duration-500 group-hover:scale-110`}
      />
    </motion.div>
  );
}

/* ---------------- HERO SECTION ---------------- */

export default function HeroSection() {
  const [count, setCount] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const target = new Date("2026-03-05T09:00:00+05:30").getTime();

    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      setCount({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 bg-gradient-to-b from-[#0d0520] via-[#090315] to-[#0b0618]">
      <BeamSweep />
      <PurpleWaves />
      <InteractiveGlow />

      <div className="relative z-10 text-center w-full max-w-6xl mx-auto pt-20 pb-10">

        {/* LOGO ROW — 4 logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center justify-center gap-8 sm:gap-14 md:gap-20 mb-12 flex-wrap"
        >
          <MagneticLogo src={logoFounder} alt="Founder" delay={0.3} size="h-16 sm:h-20 md:h-24" />
          <MagneticLogo src={logoJec} alt="JEC" delay={0.4} size="h-12 sm:h-14 md:h-16" />
          <MagneticLogo src={logoIet} alt="IET" delay={0.5} size="h-12 sm:h-14 md:h-16" />
          <MagneticLogo src={logoNaac} alt="NAAC" delay={0.6} size="h-16 sm:h-20 md:h-24" />
        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.8 }}
          className="text-[4rem] sm:text-[6rem] md:text-[8rem] font-black bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-400 bg-clip-text text-transparent"
        >
          PRATIYOG
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-3xl sm:text-5xl font-bold tracking-[0.3em] mt-2 bg-gradient-to-r from-purple-400 via-yellow-400 to-purple-400 bg-clip-text text-transparent"
        >
          2K26
        </motion.p>
      </div>
    </section>
  );
}
