import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Mic2, Music, Users, Award, Shield, Heart, Armchair, BookOpen } from "lucide-react";
import { useRef } from "react";

interface FacultyCategory {
  title: string;
  icon: React.ReactNode;
  color: "accent" | "primary";
  members: string[];
}

const categories: FacultyCategory[] = [
  {
    title: "MC Coordination",
    icon: <Mic2 size={16} />,
    color: "accent",
    members: [
      "Dr. A. Vidhya (JEC)",
      "Dr. J. Rashmi (JU)",
      "Dr. Moulieswaran N",
      "Ms. Ayesha Tasneem",
      "Ms. Manjula",
    ],
  },
  {
    title: "Audio Console",
    icon: <Music size={16} />,
    color: "primary",
    members: [
      "Mr. Abiram (JU)",
      "Mr. Sakthivel (JEC)",
    ],
  },
  {
    title: "Hospitality & Guest Management",
    icon: <Users size={16} />,
    color: "accent",
    members: [
      "Ms. T. Monisha (JEC)",
      "Mr. V. Vinoth Kumar (JEC)",
      "Ms. Priyenga (JU)",
      "Ms. Pratheeba (JU)",
      "Ms. Subbulakshmi (JU)",
      "Ms. Anuja (JU)",
    ],
  },
  {
    title: "On Stage & Guest Felicitation",
    icon: <Award size={16} />,
    color: "primary",
    members: [
      "Ms. E. Ruthra (JEC)",
      "Ms. Priyadharshini (JEC)",
      "Ms. Gracelin Sheeba (JEC)",
      "Ms. Nansy (JU)",
      "Ms. Keerthi (JU)",
      "Ms. Geethalakshmi (JU)",
      "Dr. Muthulakshmi (JEC)",
      "Mrs. Venkata Lakshmi (JEC)",
      "Dr. Ranjith (JEC)",
      "Mrs. Devadharshini (JU)",
    ],
  },
  {
    title: "Reception",
    icon: <BookOpen size={16} />,
    color: "accent",
    members: [
      "Mrs. Monisha (CSE)",
      "Mrs. Lekha (JU)",
    ],
  },
  {
    title: "Seating Arrangement",
    icon: <Armchair size={16} />,
    color: "primary",
    members: [
      "Dr. Akila (MBA)",
      "Mr. Manikandan (JU)",
    ],
  },
  {
    title: "Discipline Committee",
    icon: <Shield size={16} />,
    color: "accent",
    members: [
      "Ms. T. Anuja (JEC)",
      "Ms. P. S. Indhumathi (JEC)",
      "Mr. Mahendran (JEC)",
      "Mr. Joel (JEC)",
      "Dr. Praveen (JEC)",
      "Mr. Prasanna (JU)",
      "Mr. Saif (JU)",
      "Ms. Subharathi (JU)",
      "Dr. Jegan (JEC – S&H)",
      "Dr. Manikandan (JEC – AERO)",
      "Dr. Ashiq Irfan (JEC – CSE)",
      "Dr. Vetriprabhu (JU – SAHM)",
      "Mr. Rajaraman (JU – SET)",
      "Dr. Arthy (JU)",
    ],
  },
  {
    title: "NSS Coordination",
    icon: <Users size={16} />,
    color: "primary",
    members: [
      "Dr. C. Kannadasan (JEC – S&H)",
      "Mr. P. BalaGanesh (JEC – S&H)",
    ],
  },
  {
    title: "Emergency Support",
    icon: <Heart size={16} />,
    color: "accent",
    members: [
      "Dr. F. Regan Maria Sundar Raj (JEC)",
      "Ms. K. Haritha Hari (JEC)",
      "Mr. Kandavel (JU)",
      "Ms. Vandana (JU)",
      "Ms. Abirami (JU)",
      "Dr. Onyx (JU)",
      "Mr. Dayalan (JU)",
      "Ms. Naveena (JU)",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 45, scale: 0.94, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const nameVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const CoordinatorsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const glowX = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} id="coordinators" className="relative py-24 md:py-36 px-5 md:px-8 overflow-hidden">
      {/* Ambient glows */}
      <motion.div
        className="absolute top-1/4 left-0 w-[500px] h-[700px] -translate-y-1/2 rounded-full blur-[220px] pointer-events-none"
        style={{ x: glowX, opacity: glowOpacity, background: `hsl(280 60% 45% / 0.07)` }}
      />
      <motion.div
        className="absolute bottom-1/3 right-0 w-[400px] h-[600px] rounded-full blur-[200px] pointer-events-none"
        style={{
          x: useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]),
          opacity: glowOpacity,
          background: `hsl(48 95% 55% / 0.04)`,
        }}
      />

      {/* Section fades */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent pointer-events-none z-[5]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none z-[5]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 md:mb-20"
        >
          <p className="font-body text-xs md:text-sm tracking-[0.5em] uppercase text-accent/60 mb-3 md:mb-4">
            The pillars
          </p>
          <h2 className="font-display text-5xl md:text-8xl text-primary text-glow-red leading-[0.9]">
            Faculty
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

        {/* Category Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {categories.map((cat) => {
            const isAccent = cat.color === "accent";
            return (
              <motion.div
                key={cat.title}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                }}
                className="relative group"
              >
                {/* Outer hover glow */}
                <div
                  className={`absolute -inset-[1px] rounded-sm blur-sm transition-all duration-[900ms] opacity-0 group-hover:opacity-100 ${
                    isAccent
                      ? "bg-gradient-to-br from-accent/20 via-transparent to-accent/20"
                      : "bg-gradient-to-br from-primary/15 via-transparent to-primary/15"
                  }`}
                />

                {/* Card body */}
                <div
                  className={`relative card-stranger p-6 md:p-7 pb-10 md:pb-12 overflow-hidden transition-shadow duration-[900ms] ${
                    isAccent
                      ? "hover:shadow-[0_12px_50px_-12px_hsl(280_60%_45%/0.25)]"
                      : "hover:shadow-[0_12px_50px_-12px_hsl(48_95%_55%/0.15)]"
                  }`}
                >
                  {/* Shimmer sweep */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1300ms] ease-out bg-gradient-to-r from-transparent via-primary/[0.03] to-transparent pointer-events-none" />

                  {/* Top-right corner accent */}
                  <div className="absolute top-0 right-0 w-14 h-14 pointer-events-none">
                    <div
                      className={`absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l transition-all duration-[800ms] ${
                        isAccent
                          ? "from-accent/25 to-transparent group-hover:from-accent/50"
                          : "from-primary/25 to-transparent group-hover:from-primary/50"
                      }`}
                    />
                    <div
                      className={`absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b transition-all duration-[800ms] ${
                        isAccent
                          ? "from-accent/25 to-transparent group-hover:from-accent/50"
                          : "from-primary/25 to-transparent group-hover:from-primary/50"
                      }`}
                    />
                  </div>

                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`flex items-center justify-center w-8 h-8 rounded-sm border transition-all duration-[700ms] ${
                        isAccent
                          ? "border-accent/20 text-accent/50 group-hover:border-accent/40 group-hover:text-accent group-hover:shadow-[0_0_15px_hsl(280_60%_45%/0.3)]"
                          : "border-primary/20 text-primary/50 group-hover:border-primary/40 group-hover:text-primary group-hover:shadow-[0_0_15px_hsl(48_95%_55%/0.2)]"
                      }`}
                    >
                      {cat.icon}
                    </div>
                    <h3
                      className={`font-cinzel text-sm md:text-base tracking-wide transition-colors duration-[700ms] ${
                        isAccent
                          ? "text-accent/70 group-hover:text-accent"
                          : "text-primary/70 group-hover:text-primary"
                      }`}
                    >
                      {cat.title}
                    </h3>
                  </div>

                  {/* Divider */}
                  <div
                    className={`h-[1px] mb-4 transition-all duration-[800ms] ${
                      isAccent
                        ? "w-10 bg-accent/15 group-hover:w-full group-hover:bg-accent/25"
                        : "w-10 bg-primary/15 group-hover:w-full group-hover:bg-primary/25"
                    }`}
                  />

                  {/* Faculty names */}
                  <motion.ul
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    {cat.members.map((name, i) => (
                      <motion.li
                        key={name}
                        custom={i}
                        variants={nameVariants}
                        className="flex items-start gap-2.5"
                      >
                        <span
                          className={`mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-500 ${
                            isAccent
                              ? "bg-accent/30 group-hover:bg-accent/60"
                              : "bg-primary/30 group-hover:bg-primary/60"
                          }`}
                        />
                        <span className="font-body text-sm md:text-[15px] text-foreground/75 group-hover:text-foreground/90 transition-colors duration-500 leading-relaxed">
                          {name}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* Member count badge */}
                  <div
                    className={`absolute bottom-4 right-5 font-body text-[10px] tracking-[0.3em] uppercase transition-all duration-[700ms] ${
                      isAccent
                        ? "text-accent/20 group-hover:text-accent/40"
                        : "text-primary/20 group-hover:text-primary/40"
                    }`}
                  >
                    {cat.members.length} {cat.members.length === 1 ? "member" : "members"}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CoordinatorsSection;
