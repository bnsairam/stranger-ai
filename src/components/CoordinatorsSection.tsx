import { motion } from "framer-motion";
import { Phone } from "lucide-react";

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
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const CoordinatorsSection = () => {
  return (
    <section id="coordinators" className="relative py-32 md:py-44 px-5 md:px-4 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-0 w-[350px] h-[500px] -translate-y-1/2 rounded-full blur-[180px] pointer-events-none"
        style={{ background: `hsl(280 60% 45% / 0.04)` }}
      />
      <div className="absolute bottom-1/4 right-0 w-[250px] h-[400px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: `hsl(48 95% 55% / 0.03)` }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-28"
        >
          <p className="font-body text-xs md:text-sm tracking-[0.5em] uppercase text-accent/70 mb-3 md:mb-4">
            Your guides
          </p>
          <h2 className="font-display text-5xl md:text-8xl text-primary text-glow-red leading-[0.9]">
            Coordinators
          </h2>
          <motion.div
            className="divider-ember w-20 md:w-36 mt-5 md:mt-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

        {/* Faculty */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-10 md:mb-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {faculty.map((f) => (
              <motion.div
                key={f.name}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                className="card-stranger p-7 md:p-9 group transition-shadow duration-700 hover:shadow-[0_8px_40px_-12px_hsl(280_60%_45%/0.15)]"
              >
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover:bg-accent group-hover:shadow-[0_0_8px_hsl(280_60%_45%/0.5)] transition-all duration-500" />
                  <p className="font-body text-[10px] md:text-xs tracking-[0.4em] uppercase text-accent/50 group-hover:text-accent/80 transition-colors duration-500">
                    Faculty
                  </p>
                </div>
                <h3 className="font-cinzel text-lg md:text-xl text-foreground group-hover:text-primary transition-colors duration-500 mb-1">
                  {f.name}
                </h3>
                <a
                  href={`tel:${f.tel}`}
                  className="inline-flex items-center gap-2 mt-4 font-body text-base text-muted-foreground hover:text-primary transition-colors duration-300 group/phone"
                >
                  <Phone size={14} className="text-accent/40 group-hover/phone:text-primary transition-colors duration-300" />
                  <span>{f.phone}</span>
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
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-lg md:max-w-2xl"
        >
          {students.map((s) => (
            <motion.div
              key={s.name}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
              className="card-stranger p-7 md:p-9 group transition-shadow duration-700 hover:shadow-[0_8px_40px_-12px_hsl(48_95%_55%/0.1)]"
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary group-hover:shadow-[0_0_8px_hsl(48_95%_55%/0.5)] transition-all duration-500" />
                <p className="font-body text-[10px] md:text-xs tracking-[0.4em] uppercase text-primary/50 group-hover:text-primary/80 transition-colors duration-500">
                  Student
                </p>
              </div>
              <h3 className="font-cinzel text-lg md:text-xl text-foreground group-hover:text-primary transition-colors duration-500 mb-1">
                {s.name}
              </h3>
              <a
                href={`tel:${s.tel}`}
                className="inline-flex items-center gap-2 mt-4 font-body text-base text-muted-foreground hover:text-primary transition-colors duration-300 group/phone"
              >
                <Phone size={14} className="text-accent/40 group-hover/phone:text-primary transition-colors duration-300" />
                <span>{s.phone}</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoordinatorsSection;
