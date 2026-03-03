"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-950/60 via-black to-black px-4 sm:px-6 lg:px-8">
      {/* Dramatic radial glow behind title */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-amber-500/20 via-transparent to-transparent opacity-70 blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-7xl mx-auto">
        {/* Small top text */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl font-medium tracking-widest text-amber-300/80 uppercase mb-6"
        >
          JEPPIAAR ENGINEERING COLLEGE • CHENNAI
        </motion.p>

        {/* THE MAIN GOLD GLOWING TITLE — metallic embossed effect */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.6 }}
          className="text-6xl sm:text-8xl md:text-10xl lg:text-[13rem] xl:text-[15rem] font-black leading-none tracking-[-0.04em]"
          style={{
            background: "linear-gradient(135deg, #ffd700 0%, #ffbf00 40%, #ffaa00 70%, #ffd700 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: `
              0 0 10px rgba(255,215,0,0.8),
              0 0 20px rgba(255,191,0,0.6),
              0 0 40px rgba(255,170,0,0.4),
              4px 4px 8px rgba(0,0,0,0.8),
              -2px -2px 12px rgba(255,255,255,0.15)
            `,
          }}
        >
          PRATTYOG
        </motion.h1>

        {/* Subtitle + year */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-4 md:mt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12"
        >
          <span className="text-5xl sm:text-7xl md:text-9xl font-extrabold text-amber-400 tracking-tight drop-shadow-lg">
            2K26
          </span>

          <p className="text-2xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
            NATIONAL LEVEL CULTURAL FEST
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10 text-lg sm:text-xl md:text-2xl text-gray-200/90 max-w-4xl mx-auto font-light leading-relaxed"
        >
          Unleash Your Inner Artist • Epic Vibes Await • Chennai's Biggest Stage
        </motion.p>

        {/* CTA Buttons — gold premium look */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-16 flex flex-col sm:flex-row gap-6 md:gap-10 justify-center items-center"
        >
          <Button
            size="lg"
            className="text-xl md:text-2xl px-10 md:px-14 py-7 md:py-8 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-black font-bold rounded-full shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:shadow-[0_0_60px_rgba(255,215,0,0.8)] transform hover:scale-105 transition-all duration-500 border border-amber-300/40"
            asChild
          >
            <a href="#events">
              Explore Events <ArrowDown className="ml-3 h-6 w-6" />
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="text-xl md:text-2xl px-10 md:px-14 py-7 md:py-8 border-2 border-amber-400/70 text-amber-300 hover:bg-amber-950/40 hover:text-amber-200 font-bold rounded-full shadow-[0_0_25px_rgba(255,191,0,0.4)] hover:shadow-[0_0_50px_rgba(255,191,0,0.7)] transform hover:scale-105 transition-all duration-500"
            asChild
          >
            <a href="YOUR_GOOGLE_FORM_OR_REGISTRATION_LINK_HERE" target="_blank" rel="noopener noreferrer">
              Register Now <ArrowRight className="ml-3 h-6 w-6" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}          initial={{ opacity: 0, y: 30 }}
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
