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
          background: "radial-gradient(circle, hsl(48 100% 55% / 0.07), hsl(275 85% 55% / 0.04) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}

function MagneticLogo({ src, alt, delay }: { src: string; alt: string; delay: number }) {
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

  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      {...fadeUp(delay)}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className="relative group cursor-pointer"
    >
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "radial-gradient(circle, hsl(48 100% 55% / 0.15), transparent 70%)", filter: "blur(20px)" }}
      />
      <img
        src={src}
        alt={alt}
        className="h-10 sm:h-12 md:h-14 w-auto object-contain relative z-10 transition-transform duration-500 group-hover:scale-110"
        style={{ filter: "drop-shadow(0 0 8px hsl(48 100% 55% / 0.25))" }}
      />
    </motion.div>
  );
}

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
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6"
      style={{
        background: "linear-gradient(180deg, hsl(260 30% 6%) 0%, hsl(260 25% 3%) 40%, hsl(260 20% 4%) 100%)",
      }}
    >
      {/* Interactive mouse-follow glow */}
      <InteractiveGlow />

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[420px] md:w-[600px] h-[280px] sm:h-[420px] md:h-[600px] rounded-full animate-glow-breathe"
          style={{ background: "radial-gradient(circle, hsl(48 100% 55% / 0.1), transparent 70%)" }}
        />
        <div
          className="absolute -top-40 -left-40 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, hsl(275 85% 50% / 0.15), transparent 70%)", filter: "blur(80px)" }}
        />
        <div
          className="absolute -bottom-20 -right-20 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, hsl(275 70% 45% / 0.2), transparent 70%)", filter: "blur(60px)" }}
        />
        {/* Horizon line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent 5%, hsl(275 85% 55% / 0.25) 30%, hsl(48 100% 55% / 0.35) 50%, hsl(275 85% 55% / 0.25) 70%, transparent 95%)",
            boxShadow: "0 0 20px hsl(48 100% 55% / 0.12)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-5xl mx-auto pt-16 sm:pt-20 pb-8">
        {/* Logos row - 4 logos */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex items-center justify-center gap-6 sm:gap-10 md:gap-16 mb-6 sm:mb-8 flex-wrap"
        >
          <MagneticLogo src={logoFounder} alt="Col. Dr. Jeppiaar - Founder" delay={0.2} />
          <MagneticLogo src={logoJec} alt="Jeppiaar Engineering College" delay={0.35} />
          <MagneticLogo src={logoIet} alt="IET" delay={0.5} />
          <MagneticLogo src={logoNaac} alt="NAAC A Grade" delay={0.65} />
        </motion.div>

        {/* Presents text */}
        <motion.p
          {...fadeUp(0.5)}
          className="font-montserrat text-[9px] sm:text-[11px] md:text-xs font-medium tracking-[0.35em] sm:tracking-[0.5em] uppercase mb-8 sm:mb-10 md:mb-12"
          style={{ color: "hsl(48 80% 70% / 0.6)" }}
        >
          Jeppiaar Educity Presents
        </motion.p>

        {/* Title block */}
        <div className="relative">
          {/* Glow layer behind title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
            aria-hidden
          >
            <span
              className="text-[4rem] sm:text-[5.5rem] md:text-[8rem] lg:text-[10rem] font-black font-display leading-[0.85] tracking-tight whitespace-nowrap"
              style={{ color: "hsl(48 100% 55% / 0.15)", filter: "blur(25px)", transform: "scale(1.05)" }}
            >
              PRATIYOG
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] as const, delay: 0.7 }}
            className="relative text-[4rem] sm:text-[5.5rem] md:text-[8rem] lg:text-[10rem] font-black leading-[0.85] tracking-tight font-display animate-breathe"
            style={{
              backgroundImage: "linear-gradient(135deg, hsl(48 100% 72%) 0%, hsl(48 95% 55%) 35%, hsl(38 90% 48%) 65%, hsl(48 100% 62%) 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            PRATIYOG
          </motion.h1>
        </div>

        {/* 2K26 */}
        <motion.p
          {...fadeUp(1.0)}
          className="mt-1 sm:mt-2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.25em] sm:tracking-[0.35em] font-display"
          style={{
            backgroundImage: "linear-gradient(90deg, hsl(275 75% 65%), hsl(48 85% 60%), hsl(275 75% 65%))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          2K26
        </motion.p>

        {/* Tagline */}
        <motion.div {...fadeUp(1.2)} className="mt-6 sm:mt-8">
          <p className="font-montserrat text-[10px] sm:text-xs md:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase font-medium text-foreground/65 text-glow-subtle">
            A National Level Cultural Fest
          </p>
          <p className="mt-1.5 font-montserrat text-[9px] sm:text-[10px] md:text-xs text-foreground/35 tracking-[0.2em]">
            Jeppiaar Engineering College, Chennai
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div {...fadeUp(1.3)} className="mt-6 sm:mt-8 flex justify-center gap-3 sm:gap-5">
          {[
            { label: "Days", value: count.days },
            { label: "Hours", value: count.hours },
            { label: "Mins", value: count.mins },
            { label: "Secs", value: count.secs },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <span
                className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tabular-nums"
                style={{
                  backgroundImage: "linear-gradient(180deg, hsl(48 100% 70%), hsl(48 85% 50%))",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.3em] uppercase text-muted-foreground/50 font-montserrat mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 1.4, ease: [0.16, 1, 0.3, 1] as const }}
          className="divider-ember w-20 sm:w-28 md:w-40 mx-auto mt-6 sm:mt-8"
        />

        {/* CTA */}
        <motion.div
          {...fadeUp(1.6)}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center px-6 sm:px-0"
        >
          <Button
            size="lg"
            className="group w-full sm:w-auto text-xs sm:text-sm md:text-base px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 font-semibold font-montserrat tracking-wider rounded-sm border-0 transition-all duration-500 hover:scale-[1.03]"
            style={{
              background: "linear-gradient(135deg, hsl(48 100% 55%), hsl(38 95% 50%))",
              color: "hsl(260 40% 8%)",
              boxShadow: "0 0 18px hsl(48 100% 55% / 0.3), 0 0 50px hsl(48 100% 55% / 0.08)",
            }}
            asChild
          >
            <a href="#events" className="relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Sparkles className="mr-2 h-4 w-4" />
              Explore Events
              <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="group w-full sm:w-auto text-xs sm:text-sm md:text-base px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 font-semibold font-montserrat tracking-wider rounded-sm transition-all duration-500 hover:scale-[1.03] animate-neon-pulse"
            style={{
              borderColor: "hsl(275 85% 55% / 0.4)",
              color: "hsl(275 80% 75%)",
              background: "hsl(275 50% 20% / 0.08)",
              backdropFilter: "blur(12px)",
            }}
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
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-12 sm:mt-16 flex flex-col items-center gap-2"
        >
          <span className="font-montserrat text-[8px] sm:text-[9px] tracking-[0.4em] uppercase text-muted-foreground/30">
            Scroll
          </span>
          <div className="w-px h-8 sm:h-10 relative overflow-hidden">
            <div
              className="w-full h-full animate-scroll-hint"
              style={{ background: "linear-gradient(to bottom, hsl(48 95% 55% / 0.5), transparent)" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
