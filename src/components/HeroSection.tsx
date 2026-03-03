"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Enhanced background glow + overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/40 via-black/70 to-black pointer-events-none" />
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg sm:text-2xl font-medium tracking-widest text-purple-300/90 uppercase mb-6"
        >
          Jeppiaar Engineering College Presents
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-6xl sm:text-8xl md:text-10xl lg:text-[14rem] font-black leading-none tracking-tighter"
        >
          <span className="bg-gradient-to-br from-yellow-400 via-amber-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl">
            PRATIYYOG
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
        >
          <span className="text-5xl sm:text-7xl md:text-9xl font-extrabold text-purple-400/90 drop-shadow-lg">
            2K26
          </span>
          <span className="text-2xl sm:text-4xl font-bold text-amber-400 tracking-wide">
            NATIONAL LEVEL CULTURAL FEST
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-8 text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto"
        >
          Jeppiaar Engineering College, Chennai • Unleash Your Talent • 3 Days of Epic Vibes
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Button
            size="lg"
            className="text-xl px-10 py-7 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-black font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            asChild
          >
            <a href="#events">
              Explore Events <ArrowDown className="ml-3 h-5 w-5" />
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="text-xl px-10 py-7 border-2 border-purple-500 text-purple-300 hover:bg-purple-950/50 hover:text-white font-bold rounded-xl shadow-xl transition-all duration-300"
            asChild
          >
            <a href="https://forms.gle/YOUR_REGISTRATION_LINK" target="_blank">
              Register Now <ArrowRight className="ml-3 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
