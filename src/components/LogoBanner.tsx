import { motion } from "framer-motion";
import logo25 from "@/assets/logos/25-years.png";
import logoJprEducity from "@/assets/logos/jpr-educity.jpeg";
import logoJec from "@/assets/logos/jec.png";
import logoIet from "@/assets/logos/iet.png";
import logoBuilding from "@/assets/logos/building.jpeg";
import logoAiml from "@/assets/logos/aiml.png";

const logos = [
  { src: logoJprEducity, alt: "Jeppiaar Educity", className: "h-14 md:h-20" },
  { src: logoJec, alt: "Jeppiaar Engineering College", className: "h-12 md:h-16" },
  { src: logo25, alt: "25 Years of Legacy", className: "h-16 md:h-24" },
  { src: logoAiml, alt: "AI & Machine Learning Department", className: "h-14 md:h-20" },
  { src: logoIet, alt: "IET", className: "h-10 md:h-14" },
  { src: logoBuilding, alt: "Jeppiaar Engineering College Campus", className: "h-12 md:h-16 rounded-sm" },
];

const LogoBanner = () => {
  return (
    <section className="relative py-8 md:py-12 px-5 border-b border-border/20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {logos.map((logo, i) => (
            <motion.img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.7 + i * 0.1 }}
              className={`${logo.className} w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default LogoBanner;
