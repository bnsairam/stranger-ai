"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // shadcn button
import { ArrowDown, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-4">
      {/* Subtle scanline overlay for cyberpunk vibe */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[length:100%_4px] animate-neon-scan opacity-30" />

      {/* Glow backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/40 via-black/80 to-black pointer-events-none" />

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="text-xl md:text-3xl font-medium tracking-[0.5em] text-neonCyan uppercase mb-8 opacity-80"
        >
          Jeppiaar Engineering College • Chennai
        </motion.p>

        {/* THE NEON MASTERPIECE: PRATIYYOG with insane glow layers */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-7xl sm:text-9xl md:text-[12rem] lg:text-[16rem] font-black leading-none tracking-tighter"
        >
          <span
            className="
              inline-block
              bg-gradient-to-r from-neonYellow via-neonPink to-neonPurple
              bg-clip-text text-transparent
              animate-neon-pulse
              drop-shadow-[0_0_40px_rgba(255,234,0,0.8)]
            "
            style={{
              textShadow: `
                0 0 5px #fff,
                0 0 10px #fff,
                0 0 20px #ffea00,
                0 0 40px #ffea00,
                0 0 80px #ff00aa,
                0 0 120px #aa00ff
              `,
            }}
          >
            PRATIYYOG
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-6 flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <span className="text-6xl md:text-10xl font-extrabold text-neonYellow animate-neon-flicker drop-shadow-lg">
            2K26
          </span>
          <p className="text-3xl md:text-5xl font-bold text-neonCyan tracking-wide">
            NATIONAL CULTURAL FEST
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-10 text-2xl md:text-3xl text-gray-200 max-w-4xl mx-auto font-light"
        >
          Unleash Your Inner Artist • Epic Vibes Await • Chennai's Biggest Stage
        </motion.p>

        {/* CTA buttons with neon hover glow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-16 flex flex-col sm:flex-row gap-8 justify-center"
        >
          <Button
            size="lg"
            className="text-2xl px-12 py-8 bg-gradient-to-r from-neonYellow to-neonPink hover:from-yellow-400 hover:to-pink-500 text-black font-black rounded-2xl shadow-neon hover:shadow-[0_0_60px_#ffea00] transform hover:scale-110 transition-all duration-500"
            asChild
          >
            <a href="#events">
              Explore Events <ArrowDown className="ml-4 h-8 w-8" />
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="text-2xl px-12 py-8 border-4 border-neonPurple text-neonPurple hover:bg-neonPurple/20 hover:text-white font-black rounded-2xl shadow-neon hover:shadow-[0_0_60px_#aa00ff] transform hover:scale-110 transition-all duration-500"
            asChild
          >
            <a href="YOUR_REGISTRATION_LINK" target="_blank">
              Register Now <ArrowRight className="ml-4 h-8 w-8" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
