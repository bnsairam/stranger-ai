import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const CoordinatorsSection = () => {
  return (
    <section id="coordinators" className="relative py-32 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="font-body text-xs tracking-[0.5em] uppercase text-muted-foreground mb-3">
            Your guides through the dark
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-primary text-glow-red">
            Coordinators
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Faculty */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 mb-8"
          >
            <div className="card-stranger p-8 md:p-10 max-w-lg mx-auto">
              <p className="font-body text-[10px] tracking-[0.5em] uppercase text-primary/60 mb-4">
                Faculty Coordinator
              </p>
              <h3 className="font-cinzel text-xl md:text-2xl text-foreground mb-1">
                Dr. A. Vidhya
              </h3>
              <a
                href="tel:+919840187449"
                className="inline-flex items-center gap-2 mt-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <Phone size={13} className="text-primary/50 group-hover:text-primary transition-colors" />
                <span>+91 98401 87449</span>
              </a>
            </div>
          </motion.div>

          {/* Students */}
          {[
            { name: "Gokul", phone: "+91 98409 51358", tel: "+919840951358" },
            { name: "Amirtha", phone: "+91 79040 75346", tel: "+917904075346" },
          ].map((coord, i) => (
            <motion.div
              key={coord.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className="md:col-span-1 md:col-start-auto first:md:col-start-1 last:md:col-start-3"
            >
              <div className="card-stranger p-8">
                <p className="font-body text-[10px] tracking-[0.5em] uppercase text-primary/60 mb-4">
                  Student Coordinator
                </p>
                <h3 className="font-cinzel text-lg text-foreground mb-1">
                  {coord.name}
                </h3>
                <a
                  href={`tel:${coord.tel}`}
                  className="inline-flex items-center gap-2 mt-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
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
