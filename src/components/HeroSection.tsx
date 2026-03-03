"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
import logoJec from "@/assets/logos/jec.png";
import logoIet from "@/assets/logos/iet.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-950/60 via-black to-black px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-gradient-radial from-amber-500/20 via-transparent to-transparent opacity-70 blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-7xl mx-auto w-full">
        {/* Logos row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-between px-2 sm:px-6 md:px-10 mb-6 sm:mb-8"
        >
          <img
            src={logoJec}
            alt="Jeppiaar Engineering College"
            className="h-8 sm:h-10 md:h-[45px] w-auto object-contain"
            style={{ filter: "grayscale(0.3) sepia(0.15)" }}
          />
          <img
            src={logoIet}
            alt="IET"
            className="h-8 sm:h-10 md:h-[45px] w-auto object-contain"
            style={{ filter: "grayscale(0.3) sepia(0.15)" }}
          />
        </motion.div>

        {/* Presents text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xs sm:text-sm md:text-base font-medium tracking-[0.25em] sm:tracking-[0.4em] text-amber-300/70 uppercase mb-8 sm:mb-10"
        >
          Jeppiaar Educity Presents
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.6 }}
          className="text-5xl sm:text-7xl md:text-[10rem] lg:text-[13rem] font-black leading-none tracking-[-0.03em]"
          style={{
            background: "linear-gradient(135deg, #ffd700 0%, #ffbf00 40%, #ffaa00 70%, #ffd700 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          PRATIYOG
        </motion.h1>

        {/* 2K26 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-1 sm:mt-2 text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-[0.15em] sm:tracking-[0.25em] bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent"
        >
          2K26
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-6 sm:mt-8 text-xs sm:text-sm md:text-lg tracking-[0.2em] sm:tracking-[0.35em] uppercase text-gray-300/80 font-light"
        >
          A National Level Cultural Fest
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-2 text-[10px] sm:text-xs md:text-sm text-gray-400/60 tracking-wider"
        >
          Jeppiaar Engineering College, Chennai
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-10 sm:mt-14 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-5 sm:py-6 md:py-7 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-black font-bold rounded-lg shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:shadow-[0_0_40px_rgba(255,215,0,0.7)] hover:scale-105 transition-all duration-500 border border-amber-300/30"
            asChild
          >
            <a href="#events">
              Explore Events <ArrowDown className="ml-2 h-5 w-5" />
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-5 sm:py-6 md:py-7 border-2 border-amber-400/50 text-amber-300 hover:bg-amber-950/30 hover:text-amber-200 font-bold rounded-lg shadow-[0_0_15px_rgba(255,191,0,0.3)] hover:shadow-[0_0_35px_rgba(255,191,0,0.6)] hover:scale-105 transition-all duration-500"
            asChild
          >
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfSpTsRhZDTRFCRvkTSksLzRy-Kg0-68jwW3PStLwkNfrXeng/viewform" target="_blank" rel="noopener noreferrer">
              Register Now <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
