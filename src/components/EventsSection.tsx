import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const events = [
  {
    name: "Group Dance",
    type: "The Velvet Crew",
    tagline: "4–12 members · Any style · ₹500 per team",
    fee: "₹500",
    number: "01",
  },
  {
    name: "Ramp Walk",
    type: "The Lavish Lane",
    tagline: "8–12 members · Themed fashion · ₹1000 per team",
    fee: "₹1000",
    number: "02",
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 45, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const EventsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], ["-30%", "70%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.7, 0.7, 0]);

  const googleFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSfSpTsRhZDTRFCRvkTSksLzRy-Kg0-68jwW3PStLwkNfrXeng/viewform";

  return (
    <section ref={sectionRef} id="events" className="relative py-20 sm:py-28 md:py-40 px-4 sm:px-5 md:px-4 overflow-hidden">
      {/* Parallax ambient glow */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] md:w-[900px] h-[250px] sm:h-[350px] md:h-[600px] rounded-full blur-[150px] md:blur-[200px] pointer-events-none"
        style={{
          y: glowY,
          opacity: glowOpacity,
          background: `radial-gradient(ellipse, hsl(280 60% 45% / 0.1), hsl(48 95% 55% / 0.05), transparent)`,
        }}
      />

      {/* Section top fade */}
      <div className="absolute top-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-5" />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div variants={itemVariants} className="mb-12 sm:mb-16 md:mb-32">
          <p className="font-montserrat text-[10px] sm:text-xs md:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase text-accent/60 mb-2 sm:mb-4 font-medium">
            What awaits you
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-8xl text-primary text-glow-red leading-[0.9] font-black">
            Events
          </h2>
          <motion.div
            className="divider-ember w-16 sm:w-20 md:w-40 mt-4 sm:mt-6 md:mt-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

        <div className="space-y-0">
          {events.map((event, i) => (
            <motion.div
              key={event.name}
              variants={itemVariants}
            >
              {i === 0 && (
                <motion.div
                  className="divider-ember"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                />
              )}

              {/* Desktop layout */}
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group hidden md:grid grid-cols-12 items-center py-12 lg:py-14 border-b border-border/15 hover:border-accent/25 transition-all duration-[1000ms] relative overflow-hidden"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ background: `linear-gradient(90deg, hsl(280 60% 45% / 0.07), hsl(48 95% 55% / 0.035), transparent 80%)` }}
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[1200ms]"
                  style={{ background: `radial-gradient(ellipse 60% 80% at 30% 50%, hsl(280 60% 45% / 0.04), transparent)` }}
                />
                <div className="col-span-1 relative z-10">
                  <span className="font-montserrat text-xs text-accent/20 tracking-widest group-hover:text-accent/50 transition-colors duration-[800ms] font-medium">
                    {event.number}
                  </span>
                </div>
                <div className="col-span-2 relative z-10">
                  <div className="font-cinzel text-xl lg:text-2xl text-primary font-bold group-hover:scale-105 transition-transform duration-[600ms] origin-left">
                    {event.fee}
                  </div>
                  <div className="font-montserrat text-xs text-muted-foreground/40 mt-0.5 font-light">per team</div>
                </div>
                <div className="col-span-4 relative z-10">
                  <h3 className="font-cinzel text-2xl lg:text-3xl text-foreground group-hover:text-primary transition-colors duration-[600ms] leading-tight font-bold">
                    {event.name}
                  </h3>
                  <p className="font-montserrat text-xs tracking-[0.25em] uppercase text-accent/30 mt-2 group-hover:text-accent/70 group-hover:tracking-[0.4em] transition-all duration-[800ms] font-medium">
                    {event.type}
                  </p>
                </div>
                <div className="col-span-3 relative z-10">
                  <p className="font-playfair italic text-sm lg:text-base text-foreground/35 group-hover:text-foreground/65 transition-colors duration-[600ms]">
                    "{event.tagline}"
                  </p>
                </div>
                <div className="col-span-2 flex justify-end relative z-10">
                  <span className="font-montserrat text-xs tracking-[0.3em] uppercase text-primary border border-primary/15 px-5 lg:px-7 py-2.5 lg:py-3 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary group-hover:shadow-[0_0_25px_hsl(48_95%_55%/0.25)] transition-all duration-[600ms] font-semibold">
                    Register →
                  </span>
                </div>
              </a>

              {/* Mobile layout */}
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group md:hidden block py-6 sm:py-8 border-b border-border/10 hover:border-accent/25 transition-all duration-700 relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[800ms]"
                  style={{ background: `linear-gradient(135deg, hsl(280 60% 45% / 0.06), transparent)` }}
                />
                <div className="flex items-center justify-between mb-2 sm:mb-3 relative z-10">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <span className="font-montserrat text-[10px] sm:text-xs text-accent/20 tracking-widest font-medium shrink-0">
                      {event.number}
                    </span>
                    <h3 className="font-cinzel text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors duration-600 truncate">
                      {event.name}
                    </h3>
                  </div>
                  <span className="font-cinzel text-base sm:text-lg text-primary font-bold shrink-0 ml-2">
                    {event.fee}
                  </span>
                </div>
                <div className="flex items-center justify-between pl-6 sm:pl-8 relative z-10">
                  <p className="font-montserrat text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase text-accent/30 font-medium truncate">
                    {event.type}
                  </p>
                  <span className="font-montserrat text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-primary border border-primary/15 px-3 sm:px-4 py-1 sm:py-1.5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 font-semibold shrink-0 ml-2">
                    Register →
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-10 sm:mt-14 md:mt-16 text-center"
        >
          <p className="text-[11px] sm:text-xs md:text-sm text-muted-foreground/35 font-montserrat tracking-wider font-light">
            Click any event to register · opens Google Form
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EventsSection;
