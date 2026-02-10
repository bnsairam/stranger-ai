import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="relative py-24 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-primary text-glow-red mb-4">
            FIND US
          </h2>
          <div className="w-24 h-px bg-primary/50 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <div className="flex items-start gap-3 text-muted-foreground">
            <MapPin size={20} className="text-primary mt-1 shrink-0" />
            <p className="font-rajdhani text-lg">
              Rajiv Gandhi Salai, Old Mamallapuram Road,<br />
              Semmancheri, Chennai
            </p>
          </div>

          <a href="tel:04424502818" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
            <Phone size={18} className="text-primary" />
            <span className="font-rajdhani text-lg">044 2450 2818</span>
          </a>
        </motion.div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <div className="w-16 h-px bg-primary/30 mx-auto mb-6" />
          <p className="font-cinzel text-sm text-muted-foreground tracking-[0.3em]">
            JEPPIAAR ENGINEERING COLLEGE
          </p>
          <p className="font-rajdhani text-xs text-muted-foreground/50 mt-2 tracking-widest uppercase">
            AI &amp; ML Department · XENZO · Pratiyog'26
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
