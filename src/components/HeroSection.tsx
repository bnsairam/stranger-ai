"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import logoJec from "@/assets/logos/jec.png";
import logoIet from "@/assets/logos/iet.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24"
      style={{
        background: "linear-gradient(180deg, hsl(260 30% 6%) 0%, hsl(260 25% 3%) 40%, hsl(260 20% 4%) 100%)",
      }}
    >
      {/* Ambient neon glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Central gold glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] rounded-full animate-glow-breathe"
          style={{ background: "radial-gradient(circle, hsl(48 100% 55% / 0.12), transparent 70%)" }}
        />
        {/* Top-left purple glow */}
        <div className="absolute -top-32 -left-32 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, hsl(275 85% 50% / 0.15), transparent 70%)", filter: "blur(80px)" }}
        />
        {/* Bottom-right purple glow */}
        <div className="absolute -bottom-20 -right-20 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, hsl(275 70% 45% / 0.2), transparent 70%)", filter: "blur(60px)" }}
        />
        {/* Horizon line glow */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{ background: "linear-gradient(90deg, transparent, hsl(275 85% 55% / 0.3), hsl(48 100% 55% / 0.4), hsl(275 85% 55% / 0.3), transparent)", boxShadow: "0 0 30px hsl(48 100% 55% / 0.15)" }}
        />
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto w-full">
        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-between px-2 sm:px-8 md:px-16 mb-6 sm:mb-8"
        >
          <img src={logoJec} alt="JEC" className="h-9 sm:h-11 md:h-[48px] w-auto object-contain drop-shadow-[0_0_8px_hsl(48_100%_55%/0.3)]" />
          <img src={logoIet} alt="IET" className="h-9 sm:h-11 md:h-[48px] w-auto object-contain drop-shadow-[0_0_8px_hsl(48_100%_55%/0.3)]" />
        </motion.div>

        {/* Presents */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-montserrat text-[10px] sm:text-xs md:text-sm font-medium tracking-[0.3em] sm:tracking-[0.5em] uppercase mb-8 sm:mb-12 text-glow-subtle"
          style={{ color: "hsl(48 80% 70% / 0.7)" }}
        >
          Jeppiaar Educity Presents
        </motion.p>

        {/* Shadow text for depth */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.06 }}
            transition={{ duration: 2, delay: 0.8 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
            aria-hidden
          >
            <span className="text-6xl sm:text-8xl md:text-[12rem] lg:text-[16rem] font-black font-display leading-none"
              style={{ color: "hsl(48 100% 55%)", filter: "blur(8px)", transform: "scale(1.08)" }}
            >
              PRATIYOG
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="relative text-5xl sm:text-7xl md:text-[10rem] lg:text-[13rem] font-black leading-none tracking-[-0.02em] font-display animate-breathe"
            style={{
              background: "linear-gradient(135deg, hsl(48 100% 70%) 0%, hsl(48 95% 55%) 30%, hsl(38 90% 50%) 60%, hsl(48 100% 65%) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 30px hsl(48 100% 55% / 0.4)) drop-shadow(0 0 80px hsl(275 70% 50% / 0.2))",
            }}
          >
            PRATIYOG
          </motion.h1>
        </div>

        {/* 2K26 */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-1 sm:mt-2 text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-[0.2em] sm:tracking-[0.3em] font-display"
          style={{
            background: "linear-gradient(90deg, hsl(275 80% 65%), hsl(48 90% 60%), hsl(275 80% 65%))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 15px hsl(275 85% 55% / 0.3))",
          }}
        >
          2K26
        </motion.p>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-6 sm:mt-8 md:mt-10"
        >
          <p className="font-montserrat text-xs sm:text-sm md:text-base tracking-[0.25em] sm:tracking-[0.4em] uppercase font-medium text-foreground/70 text-glow-subtle">
            A National Level Cultural Fest
          </p>
          <p className="mt-2 font-montserrat text-[10px] sm:text-xs md:text-sm text-foreground/40 tracking-[0.15em] sm:tracking-[0.25em]">
            Jeppiaar Engineering College, Chennai
          </p>
        </motion.div>

        {/* Neon divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="divider-ember w-24 sm:w-32 md:w-48 mx-auto mt-8 sm:mt-10"
        />

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-10 sm:mt-14 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-2 sm:px-0"
        >
          <Button
            size="lg"
            className="group w-full sm:w-auto text-sm sm:text-base md:text-lg px-8 sm:px-10 md:px-14 py-5 sm:py-6 md:py-7 font-bold font-montserrat tracking-wider rounded-sm border-0 transition-all duration-500 hover:scale-[1.03]"
            style={{
              background: "linear-gradient(135deg, hsl(48 100% 55%), hsl(38 95% 50%))",
              color: "hsl(260 40% 8%)",
              boxShadow: "0 0 20px hsl(48 100% 55% / 0.35), 0 0 60px hsl(48 100% 55% / 0.1)",
            }}
            asChild
          >
            <a href="#events" className="relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Sparkles className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Explore Events
              <ArrowDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="group w-full sm:w-auto text-sm sm:text-base md:text-lg px-8 sm:px-10 md:px-14 py-5 sm:py-6 md:py-7 font-bold font-montserrat tracking-wider rounded-sm transition-all duration-500 hover:scale-[1.03] animate-neon-pulse"
            style={{
              borderColor: "hsl(275 85% 55% / 0.5)",
              color: "hsl(275 80% 75%)",
              background: "hsl(275 50% 20% / 0.1)",
              backdropFilter: "blur(12px)",
            }}
            asChild
          >
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfSpTsRhZDTRFCRvkTSksLzRy-Kg0-68jwW3PStLwkNfrXeng/viewform" target="_blank" rel="noopener noreferrer">
              Register Now
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
