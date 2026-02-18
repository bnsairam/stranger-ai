import { motion, useScroll, useTransform } from "framer-motion";
import { Phone } from "lucide-react";
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
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const CoordinatorsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const glowX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={sectionRef} id="coordinators" className="relative py-36 md:py-52 px-5 md:px-4 overflow-hidden">
      {/* Animated ambient glows */}
      <motion.div
        className="absolute top-1/3 left-0 w-[400px] h-[600px] -translate-y-1/2 rounded-full blur-[200px] pointer-events-none"
        style={{ x: glowX, background: `hsl(280 60% 45% / 0.05)` }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-[300px] h-[500px] rounded-full blur-[180px] pointer-events-none"
        style={{ x: useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]), background: `hsl(48 95% 55% / 0.035)` }}
      />

      {/* Section top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-5" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 45, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
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

        {/* Faculty */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 md:mb-18"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {faculty.map((f) => (
              <motion.div
                key={f.name}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                }}
                className="card-stranger p-8 md:p-10 group transition-shadow duration-[800ms] hover:shadow-[0_10px_50px_-15px_hsl(280_60%_45%/0.2)]"
              >
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent/50 group-hover:bg-accent group-hover:shadow-[0_0_12px_hsl(280_60%_45%/0.6)] transition-all duration-[600ms]" />
                  <p className="font-body text-[10px] md:text-xs tracking-[0.45em] uppercase text-accent/45 group-hover:text-accent/80 transition-colors duration-[600ms]">
                    Faculty
                  </p>
                </div>
                <h3 className="font-cinzel text-lg md:text-xl text-foreground group-hover:text-primary transition-colors duration-[600ms] mb-1">
                  {f.name}
                </h3>
                <a
                  href={`tel:${f.tel}`}
                  className="inline-flex items-center gap-2.5 mt-5 font-body text-base text-muted-foreground/70 hover:text-primary transition-all duration-500 group/phone"
                >
                  <Phone size={14} className="text-accent/35 group-hover/phone:text-primary group-hover/phone:scale-110 transition-all duration-500" />
                  <span className="group-hover/phone:tracking-wider transition-all duration-500">{f.phone}</span>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Students */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-w-lg md:max-w-2xl"
        >
          {students.map((s) => (
            <motion.div
              key={s.name}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
              }}
              className="card-stranger p-8 md:p-10 group transition-shadow duration-[800ms] hover:shadow-[0_10px_50px_-15px_hsl(48_95%_55%/0.12)]"
            >
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary group-hover:shadow-[0_0_12px_hsl(48_95%_55%/0.6)] transition-all duration-[600ms]" />
                <p className="font-body text-[10px] md:text-xs tracking-[0.45em] uppercase text-primary/45 group-hover:text-primary/80 transition-colors duration-[600ms]">
                  Student
                </p>
              </div>
              <h3 className="font-cinzel text-lg md:text-xl text-foreground group-hover:text-primary transition-colors duration-[600ms] mb-1">
                {s.name}
              </h3>
              <a
                href={`tel:${s.tel}`}
                className="inline-flex items-center gap-2.5 mt-5 font-body text-base text-muted-foreground/70 hover:text-primary transition-all duration-500 group/phone"
              >
                <Phone size={14} className="text-accent/35 group-hover/phone:text-primary group-hover/phone:scale-110 transition-all duration-500" />
                <span className="group-hover/phone:tracking-wider transition-all duration-500">{s.phone}</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoordinatorsSection;
