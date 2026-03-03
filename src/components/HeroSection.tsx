"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import logoJec from "@/assets/logos/jec.png";
import logoIet from "@/assets/logos/iet.png";
import logoNaac from "@/assets/logos/naac.png";
import logoFounder from "@/assets/logos/jeppiaar-founder.png";

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
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle, rgba(255,215,0,0.25), transparent 70%)",
          filter: "blur(25px)",
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

      <div className="relative z-10 text-center w-full max-w-6xl mx-auto pt-20 pb-10">

        {/* LOGO ROW */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center justify-center gap-8 sm:gap-16 md:gap-24 mb-16 flex-wrap"
        >
          {/* FOUNDER — VERY BIG */}
          <MagneticLogo
            src={logoFounder}
            alt="Founder"
            delay={0.3}
            size="h-24 sm:h-28 md:h-32 lg:h-36"
          />

          {/* JEC — MEDIUM */}
          <MagneticLogo
            src={logoJec}
            alt="JEC"
            delay={0.4}
            size="h-12 sm:h-14 md:h-16"
          />

          {/* IET — MEDIUM */}
          <MagneticLogo
            src={logoIet}
            alt="IET"
            delay={0.5}
            size="h-12 sm:h-14 md:h-16"
          />

          {/* NAAC — VERY BIG */}
          <MagneticLogo
            src={logoNaac}
            alt="NAAC"
            delay={0.6}
            size="h-24 sm:h-28 md:h-32 lg:h-36"
          />
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
