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
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const EventsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], ["-20%", "60%"]);

  const googleFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSfSpTsRhZDTRFCRvkTSksLzRy-Kg0-68jwW3PStLwkNfrXeng/viewform";

  return (
    <section ref={sectionRef} id="events" className="relative py-32 md:py-44 px-5 md:px-4 overflow-hidden">
      {/* Parallax ambient glow */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-[500px] md:w-[800px] h-[300px] md:h-[500px] rounded-full blur-[160px] pointer-events-none opacity-60"
        style={{
          y: glowY,
          background: `radial-gradient(ellipse, hsl(280 60% 45% / 0.08), hsl(48 95% 55% / 0.04), transparent)`,
        }}
      />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-16 md:mb-28">
          <p className="font-body text-xs md:text-sm tracking-[0.5em] uppercase text-accent/70 mb-3 md:mb-4">
            What awaits you
          </p>
          <h2 className="font-display text-5xl md:text-8xl text-primary text-glow-red leading-[0.9]">
            Events
          </h2>
          <motion.div
            className="divider-ember w-20 md:w-36 mt-5 md:mt-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
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
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                />
              )}

              {/* Desktop layout */}
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group hidden md:grid grid-cols-12 items-center py-12 border-b border-border/20 hover:border-accent/30 transition-all duration-700 relative overflow-hidden"
              >
                {/* Hover sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ background: `linear-gradient(90deg, hsl(280 60% 45% / 0.06), hsl(48 95% 55% / 0.03), transparent)` }}
                />
                <div className="col-span-1 relative z-10">
                  <span className="font-body text-sm text-accent/30 tracking-widest group-hover:text-accent/60 transition-colors duration-700">
                    {event.number}
                  </span>
                </div>
                <div className="col-span-2 relative z-10">
                  <div className="font-cinzel text-2xl text-primary font-bold group-hover:scale-105 transition-transform duration-500 origin-left">
                    {event.fee}
                  </div>
                  <div className="font-body text-sm text-muted-foreground/50 mt-0.5">per team</div>
                </div>
                <div className="col-span-4 relative z-10">
                  <h3 className="font-cinzel text-3xl text-foreground group-hover:text-primary transition-colors duration-500 leading-tight">
                    {event.name}
                  </h3>
                  <p className="font-body text-sm tracking-[0.25em] uppercase text-accent/40 mt-1.5 group-hover:text-accent/80 group-hover:tracking-[0.35em] transition-all duration-700">
                    {event.type}
                  </p>
                </div>
                <div className="col-span-3 relative z-10">
                  <p className="font-elegant italic text-base text-foreground/40 group-hover:text-foreground/70 transition-colors duration-500">
                    "{event.tagline}"
                  </p>
                </div>
                <div className="col-span-2 flex justify-end relative z-10">
                  <span className="font-body text-xs tracking-[0.3em] uppercase text-primary border border-primary/20 px-6 py-3 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary group-hover:shadow-[0_0_20px_hsl(48_95%_55%/0.2)] transition-all duration-500">
                    Register →
                  </span>
                </div>
              </a>

              {/* Mobile layout */}
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group md:hidden block py-8 border-b border-border/15 hover:border-accent/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: `linear-gradient(135deg, hsl(280 60% 45% / 0.05), transparent)` }}
                />
                <div className="flex items-baseline justify-between mb-3 relative z-10">
                  <div className="flex items-baseline gap-3">
                    <span className="font-body text-xs text-accent/25 tracking-widest">
                      {event.number}
                    </span>
                    <h3 className="font-cinzel text-xl text-foreground group-hover:text-primary transition-colors duration-500">
                      {event.name}
                    </h3>
                  </div>
                  <span className="font-cinzel text-lg text-primary font-bold">
                    {event.fee}
                  </span>
                </div>

                <div className="flex items-center justify-between pl-8 relative z-10">
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-accent/35">
                    {event.type}
                  </p>
                  <span className="font-body text-[10px] tracking-[0.2em] uppercase text-primary border border-primary/20 px-4 py-1.5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    Register →
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-14 text-center"
        >
          <p className="text-sm text-muted-foreground/40 font-body tracking-wider">
            Click any event to register · opens Google Form
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EventsSection;
