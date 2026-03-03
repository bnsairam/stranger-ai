import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoJec from "@/assets/logos/jec.png";

const navItems = [
  { label: "Events", href: "#events" },
  { label: "Coordinators", href: "#coordinators" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
          scrolled
            ? "backdrop-blur-2xl border-b"
            : "bg-transparent"
        }`}
        style={scrolled ? {
          background: "hsl(260 25% 4% / 0.85)",
          borderColor: "hsl(48 95% 55% / 0.08)",
        } : {}}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src={logoJec} alt="JEC" className="h-7 sm:h-8 md:h-10 w-auto object-contain drop-shadow-[0_0_6px_hsl(48_100%_55%/0.2)]" />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-montserrat text-[11px] tracking-[0.3em] uppercase font-medium transition-all duration-300 relative group"
                style={{ color: "hsl(50 20% 70%)" }}
              >
                <span className="group-hover:text-primary transition-colors duration-300">{item.label}</span>
                <span className="absolute -bottom-1 left-0 w-full h-[1px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                  style={{ background: "linear-gradient(90deg, hsl(48 95% 55% / 0.6), hsl(275 85% 55% / 0.4))" }}
                />
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 transition-colors"
            style={{ color: "hsl(48 95% 55% / 0.6)" }}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 md:hidden"
            style={{ background: "hsl(260 25% 4% / 0.97)", backdropFilter: "blur(30px)" }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 p-1.5 transition-colors"
              style={{ color: "hsl(48 95% 55% / 0.6)" }}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>

            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="font-display text-2xl tracking-[0.3em] uppercase font-semibold text-primary text-glow-gold transition-colors duration-300"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
