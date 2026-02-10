import { motion } from "framer-motion";
import { Phone, User } from "lucide-react";

const studentCoords = [
  { name: "Gokul", phone: "+91 98409 51358" },
  { name: "Amirtha", phone: "+91 79040 75346" },
];

const facultyCoord = { name: "Dr. A. Vidhya", phone: "+91 98401 87449" };

const CoordinatorsSection = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-4xl md:text-6xl font-bold text-primary text-glow-red mb-4">
            COORDINATORS
          </h2>
          <div className="w-24 h-px bg-primary/50 mx-auto" />
        </motion.div>

        {/* Faculty */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="font-cinzel text-xl text-muted-foreground tracking-widest text-center mb-6 uppercase">
            Faculty Coordinator
          </h3>
          <div className="bg-card border border-border p-6 max-w-md mx-auto text-center border-glow-red">
            <div className="flex items-center justify-center gap-3 mb-2">
              <User size={18} className="text-primary" />
              <span className="font-cinzel text-xl text-foreground">{facultyCoord.name}</span>
            </div>
            <a href={`tel:${facultyCoord.phone.replace(/\s/g, "")}`} className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors font-rajdhani">
              <Phone size={14} />
              {facultyCoord.phone}
            </a>
          </div>
        </motion.div>

        {/* Students */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-cinzel text-xl text-muted-foreground tracking-widest text-center mb-6 uppercase">
            Student Coordinators
          </h3>
          <div className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto">
            {studentCoords.map((coord) => (
              <div key={coord.name} className="bg-card border border-border p-6 text-center hover:border-primary/40 transition-all duration-300">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <User size={18} className="text-primary" />
                  <span className="font-cinzel text-lg text-foreground">{coord.name}</span>
                </div>
                <a href={`tel:${coord.phone.replace(/\s/g, "")}`} className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors font-rajdhani text-sm">
                  <Phone size={14} />
                  {coord.phone}
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoordinatorsSection;
