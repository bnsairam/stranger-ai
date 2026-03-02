import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, Sparkles } from "lucide-react";
import { useRef } from "react";

const faculty = [
  { name: "Dr. A. Vidhya", phone: "+91 98401 87449", tel: "+919840187449" },
  { name: "Mr. B.N. Sairam", phone: "+91 76039 76686", tel: "+917603976686" },
  { name: "Ms. P.S. Indhumathi", phone: "+91 77085 10599", tel: "+917708510599" },
];

const students = [
  { name: "Gokul", phone: "+91 98409 51358", tel: "+919840951358" },
  { name: "Amirtha", phone: "+91 79040 75346", tel: "+917904075346" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.92, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const CoordinatorsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const glowX = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} id="coordinators" className="relative py-36 md:py-52 px-5 md:px-4 overflow-hidden">
      {/* Animated ambient glows */}
      <motion.div
        className="absolute top-1/4 left-0 w-[500px] h-[700px] -translate-y-1/2 rounded-full blur-[220px] pointer-events-none"
        style={{ x: glowX, opacity: glowOpacity, background: `hsl(280 60% 45% / 0.07)` }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-[400px] h-[600px] rounded-full blur-[200px] pointer-events-none"
        style={{ x: useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]), opacity: glowOpacity, background: `hsl(48 95% 55% / 0.04)` }}
      />

      {/* Section top/bottom fades */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent pointer-events-none z-[5]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none z-[5]" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-32"
        >
          <p className="font-body text-xs md:text-sm tracking-[0.5em] uppercase text-accent/60 mb-3 md:mb-4">
            Your guides
          </p>
          <h2 className="font-display text-5xl md:text-8xl text-primary text-glow-red leading-[0.9]">
            Coordinators
          </h2>
          <motion.div
            className="divider-ember w-20 md:w-40 mt-6 md:mt-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

        {/* Faculty Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <Sparkles size={14} className="text-accent/60" />
          <span className="font-body text-[11px] md:text-xs tracking-[0.4em] uppercase text-accent/50">Faculty Coordinators</span>
          <div className="flex-1 h-px bg-gradient-to-r from-accent/20 to-transparent" />
        </motion.div>

        {/* Faculty Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 md:mb-24"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {faculty.map((f, i) => (
              <motion.div
                key={f.name}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                }}
                className="relative group"
              >
                {/* Outer glow on hover */}
                <div className="absolute -inset-[1px] rounded-sm bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/20 group-hover:via-primary/10 group-hover:to-accent/20 blur-sm transition-all duration-[900ms] opacity-0 group-hover:opacity-100" />
                
                {/* Card */}
                <div className="relative card-stranger p-8 md:p-10 overflow-hidden transition-shadow duration-[900ms] hover:shadow-[0_15px_60px_-15px_hsl(280_60%_45%/0.25)]">
                  {/* Shimmer sweep */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-out bg-gradient-to-r from-transparent via-primary/[0.04] to-transparent pointer-events-none" />
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
                    <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-accent/30 to-transparent group-hover:from-accent/60 transition-all duration-[800ms]" />
                    <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-accent/30 to-transparent group-hover:from-accent/60 transition-all duration-[800ms]" />
                  </div>

                  {/* Bottom-left corner accent */}
                  <div className="absolute bottom-0 left-0 w-12 h-12 pointer-events-none">
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-accent/20 to-transparent group-hover:from-accent/40 transition-all duration-[800ms]" />
                    <div className="absolute bottom-0 left-0 h-full w-[1px] bg-gradient-to-t from-accent/20 to-transparent group-hover:from-accent/40 transition-all duration-[800ms]" />
                  </div>

                  {/* Role tag */}
                  <div className="flex items-center gap-2.5 mb-7">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-accent/50"
                      animate={{ 
                        boxShadow: [
                          "0 0 0px hsl(280 60% 45% / 0)",
                          "0 0 12px hsl(280 60% 45% / 0.6)",
                          "0 0 0px hsl(280 60% 45% / 0)",
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    />
                    <p className="font-body text-[10px] md:text-xs tracking-[0.45em] uppercase text-accent/45 group-hover:text-accent/80 transition-colors duration-[700ms]">
                      Faculty
                    </p>
                  </div>

                  {/* Name */}
                  <h3 className="font-cinzel text-lg md:text-xl text-foreground group-hover:text-primary transition-colors duration-[700ms] mb-1">
                    {f.name}
                  </h3>

                  {/* Subtle divider */}
                  <div className="w-8 h-[1px] bg-accent/15 group-hover:w-16 group-hover:bg-accent/30 transition-all duration-[800ms] mt-4 mb-5" />

                  {/* Phone */}
                  <a
                    href={`tel:${f.tel}`}
                    className="inline-flex items-center gap-2.5 font-body text-base text-muted-foreground/70 hover:text-primary transition-all duration-500 group/phone"
                  >
                    <Phone size={14} className="text-accent/35 group-hover/phone:text-primary group-hover/phone:scale-110 group-hover/phone:rotate-12 transition-all duration-500" />
                    <span className="group-hover/phone:tracking-wider transition-all duration-500">{f.phone}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Student Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <Sparkles size={14} className="text-primary/60" />
          <span className="font-body text-[11px] md:text-xs tracking-[0.4em] uppercase text-primary/50">Student Coordinators</span>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
        </motion.div>

        {/* Student Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-w-lg md:max-w-2xl"
        >
          {students.map((s, i) => (
            <motion.div
              key={s.name}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              }}
              className="relative group"
            >
              {/* Outer glow on hover */}
              <div className="absolute -inset-[1px] rounded-sm bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/15 group-hover:via-accent/5 group-hover:to-primary/15 blur-sm transition-all duration-[900ms] opacity-0 group-hover:opacity-100" />
              
              {/* Card */}
              <div className="relative card-stranger p-8 md:p-10 overflow-hidden transition-shadow duration-[900ms] hover:shadow-[0_15px_60px_-15px_hsl(48_95%_55%/0.15)]">
                {/* Shimmer sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-out bg-gradient-to-r from-transparent via-primary/[0.04] to-transparent pointer-events-none" />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
                  <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-primary/25 to-transparent group-hover:from-primary/50 transition-all duration-[800ms]" />
                  <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-primary/25 to-transparent group-hover:from-primary/50 transition-all duration-[800ms]" />
                </div>

                {/* Role tag */}
                <div className="flex items-center gap-2.5 mb-7">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-primary/50"
                    animate={{
                      boxShadow: [
                        "0 0 0px hsl(48 95% 55% / 0)",
                        "0 0 12px hsl(48 95% 55% / 0.6)",
                        "0 0 0px hsl(48 95% 55% / 0)",
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.7 }}
                  />
                  <p className="font-body text-[10px] md:text-xs tracking-[0.45em] uppercase text-primary/45 group-hover:text-primary/80 transition-colors duration-[700ms]">
                    Student
                  </p>
                </div>

                {/* Name */}
                <h3 className="font-cinzel text-lg md:text-xl text-foreground group-hover:text-primary transition-colors duration-[700ms] mb-1">
                  {s.name}
                </h3>

                {/* Subtle divider */}
                <div className="w-8 h-[1px] bg-primary/15 group-hover:w-16 group-hover:bg-primary/30 transition-all duration-[800ms] mt-4 mb-5" />

                {/* Phone */}
                <a
                  href={`tel:${s.tel}`}
                  className="inline-flex items-center gap-2.5 font-body text-base text-muted-foreground/70 hover:text-primary transition-all duration-500 group/phone"
                >
                  <Phone size={14} className="text-primary/35 group-hover/phone:text-primary group-hover/phone:scale-110 group-hover/phone:rotate-12 transition-all duration-500" />
                  <span className="group-hover/phone:tracking-wider transition-all duration-500">{s.phone}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoordinatorsSection;
