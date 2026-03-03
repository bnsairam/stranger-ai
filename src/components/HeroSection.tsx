"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";

import logoJec from "@/assets/logos/jec.png";
import logoIet from "@/assets/logos/iet.png";
import logoNaac from "@/assets/logos/naac.png";
import logoFounder from "@/assets/logos/jeppiaar-founder.png";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
});

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
      {...fadeUp(delay)}
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
        style={{
          filter: "drop-shadow(0 0 8px hsl(48 100% 55% / 0.25))",
        }}
      />
    </motion.div>
  );
}

/* ---------------- HERO SECTION ---------------- */

export default function HeroSection() {
  const [count, setCount] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 bg-gradient-to-b from-[#0d0718] via-[#090512] to-[#0a0615]">
      <InteractiveGlow />

      <div className="relative z-10 text-center w-full max-w-6xl mx-auto pt-20 pb-10">

        {/* LOGO ROW */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex items-center justify-center gap-10 sm:gap-16 md:gap-24 mb-10 flex-wrap"
        >
          <MagneticLogo
            src={logoFounder}
            alt="Founder"
            delay={0.2}
            size="h-16 sm:h-20 md:h-24"
          />

          <MagneticLogo
            src={logoJec}
            alt="Jeppiaar Engineering College"
            delay={0.35}
            size="h-12 sm:h-14 md:h-16"
          />

          <MagneticLogo
            src={logoIet}
            alt="IET"
            delay={0.5}
            size="h-12 sm:h-14 md:h-16"
          />

          <MagneticLogo
            src={logoNaac}
            alt="NAAC A Grade"
            delay={0.65}
            size="h-16 sm:h-20 md:h-24"
          />
        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
          className="text-[4rem] sm:text-[6rem] md:text-[8rem] font-black leading-none tracking-tight bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-400 bg-clip-text text-transparent"
        >
          PRATIYOG
        </motion.h1>

        <motion.p
          {...fadeUp(0.9)}
          className="text-3xl sm:text-5xl font-bold tracking-[0.3em] mt-2 bg-gradient-to-r from-purple-400 via-yellow-400 to-purple-400 bg-clip-text text-transparent"
        >
          2K26
        </motion.p>

        {/* COUNTDOWN */}
        <motion.div {...fadeUp(1.2)} className="mt-10 flex justify-center gap-8">
          {[
            { label: "Days", value: count.days },
            { label: "Hours", value: count.hours },
            { label: "Mins", value: count.mins },
            { label: "Secs", value: count.secs },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-3xl font-bold text-yellow-400">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-xs tracking-widest text-gray-400 uppercase">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp(1.5)} className="mt-14 flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            size="lg"
            className="px-12 py-6 font-semibold tracking-wider bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:scale-105 transition"
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
            className="px-12 py-6 font-semibold tracking-wider border-purple-500 text-purple-300 hover:scale-105 transition"
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
      </div>
    </section>
  );
}
