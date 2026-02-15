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

const CoordinatorsSection = () => {
  return (
    <section id="coordinators" className="relative py-24 md:py-36 px-5 md:px-4">
      {/* Subtle ambient */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[400px] -translate-y-1/2 rounded-full blur-[150px] pointer-events-none"
        style={{ background: `hsl(280 60% 45% / 0.04)` }}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-14 md:mb-24"
        >
          <p className="font-body text-xs md:text-sm tracking-[0.5em] uppercase text-accent/70 mb-2 md:mb-3">
            Your guides
          </p>
          <h2 className="font-display text-4xl md:text-7xl text-primary text-glow-red">
            Coordinators
          </h2>
          <div className="divider-ember w-20 md:w-32 mt-4 md:mt-6" />
        </motion.div>

        {/* Faculty */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {faculty.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-stranger p-6 md:p-8 group hover:scale-[1.02] transition-transform duration-500"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                  <p className="font-body text-[10px] md:text-xs tracking-[0.4em] uppercase text-accent/60">
                    Faculty
                  </p>
                </div>
                <h3 className="font-cinzel text-lg md:text-xl text-foreground group-hover:text-primary transition-colors duration-400 mb-1">
                  {f.name}
                </h3>
                <a
                  href={`tel:${f.tel}`}
                  className="inline-flex items-center gap-2 mt-3 font-body text-base text-muted-foreground hover:text-primary transition-colors duration-300 group/phone"
                >
                  <Phone size={14} className="text-accent/50 group-hover/phone:text-primary transition-colors" />
                  <span>{f.phone}</span>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Students */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-lg md:max-w-2xl">
          {students.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="card-stranger p-6 md:p-8 group hover:scale-[1.02] transition-transform duration-500"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                <p className="font-body text-[10px] md:text-xs tracking-[0.4em] uppercase text-primary/60">
                  Student
                </p>
              </div>
              <h3 className="font-cinzel text-lg md:text-xl text-foreground group-hover:text-primary transition-colors duration-400 mb-1">
                {s.name}
              </h3>
              <a
                href={`tel:${s.tel}`}
                className="inline-flex items-center gap-2 mt-3 font-body text-base text-muted-foreground hover:text-primary transition-colors duration-300 group/phone"
              >
                <Phone size={14} className="text-accent/50 group-hover/phone:text-primary transition-colors" />
                <span>{s.phone}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoordinatorsSection;
