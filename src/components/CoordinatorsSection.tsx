import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const CoordinatorsSection = () => {
  return (
    <section id="coordinators" className="relative py-20 md:py-32 px-5 md:px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20"
        >
          <p className="font-body text-[10px] md:text-xs tracking-[0.4em] md:tracking-[0.5em] uppercase text-muted-foreground mb-2 md:mb-3">
            Your guides through the dark
          </p>
          <h2 className="font-display text-3xl md:text-6xl text-primary text-glow-red">
            Coordinators
          </h2>
        </motion.div>

        {/* Faculty */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { name: "Dr. A. Vidhya", phone: "+91 98401 87449", tel: "+919840187449" },
              { name: "Mr. B.N. Sairam", phone: "+91 76039 76686", tel: "+917603976686" },
              { name: "Ms. P.S. Indhumathi", phone: "+91 77085 10599", tel: "+917708510599" },
            ].map((faculty) => (
              <div key={faculty.name} className="card-stranger p-6 md:p-8">
                <p className="font-body text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase text-primary/60 mb-3 md:mb-4">
                  Faculty Coordinator
                </p>
                <h3 className="font-cinzel text-base md:text-lg text-foreground mb-1">
                  {faculty.name}
                </h3>
                <a
                  href={`tel:${faculty.tel}`}
                  className="inline-flex items-center gap-2 mt-2 md:mt-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <Phone size={13} className="text-primary/50 group-hover:text-primary transition-colors" />
                  <span>{faculty.phone}</span>
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Students */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-lg md:max-w-2xl">
          {[
            { name: "Gokul", phone: "+91 98409 51358", tel: "+919840951358" },
            { name: "Amirtha", phone: "+91 79040 75346", tel: "+917904075346" },
          ].map((coord, i) => (
            <motion.div
              key={coord.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
            >
              <div className="card-stranger p-6 md:p-8">
                <p className="font-body text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase text-primary/60 mb-3 md:mb-4">
                  Student Coordinator
                </p>
                <h3 className="font-cinzel text-base md:text-lg text-foreground mb-1">
                  {coord.name}
                </h3>
                <a
                  href={`tel:${coord.tel}`}
                  className="inline-flex items-center gap-2 mt-2 md:mt-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <Phone size={13} className="text-primary/50 group-hover:text-primary transition-colors" />
                  <span>{coord.phone}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoordinatorsSection;
