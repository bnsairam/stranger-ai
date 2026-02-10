import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const events = [
  { name: "XENZO", subtitle: "Symposium", date: "5th February 2026", description: "The grand symposium — enter the Upside Down." },
  { name: "Guest Lecture", subtitle: "Knowledge Portal", date: "19th February 2026", description: "Wisdom from the beyond. Minds that illuminate the dark." },
  { name: "Expothon", subtitle: "Exhibition + Hackathon", date: "20th February 2026", description: "Build. Showcase. Survive the Expothon." },
  { name: "Pratiyog'26", subtitle: "Main Event", date: "6th March 2026", description: "The ultimate showdown. Only the worthy prevail." },
];

const EventsSection = () => {
  return (
    <section id="events" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-4xl md:text-6xl font-bold text-primary text-glow-red mb-4">
            EVENTS
          </h2>
          <div className="w-24 h-px bg-primary/50 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-card border border-border hover:border-primary/50 p-8 transition-all duration-500 box-glow-red hover:box-glow-red"
              style={{ boxShadow: "none" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 15px hsl(0 100% 50% / 0.3), 0 0 45px hsl(0 100% 50% / 0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-cinzel text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {event.name}
                  </h3>
                  <p className="text-muted-foreground font-rajdhani text-sm tracking-widest uppercase">
                    {event.subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-primary/70">
                  <Calendar size={16} />
                  <span className="font-rajdhani text-sm">{event.date}</span>
                </div>
              </div>
              <p className="text-muted-foreground font-rajdhani text-base leading-relaxed">
                {event.description}
              </p>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
