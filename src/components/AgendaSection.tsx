import { motion } from "framer-motion";
import { Clock, MapPin, Calendar, Music, Award, Users, Mic2 } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" as const },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

type ScheduleItem = { time: string; event: string; end: string };

const day1Evening: ScheduleItem[] = [
  { time: "6:30 PM", event: "Chancellor Mam Arrival", end: "6:45 PM" },
  { time: "6:45 PM", event: "JEC SQUAD – Host Performance", end: "6:55 PM" },
  { time: "6:55 PM", event: "JU SQUAD – Host Performance", end: "7:00 PM" },
  { time: "7:00 PM", event: "Guest Felicitation & Mashup", end: "7:10 PM" },
  { time: "7:10 PM", event: "DJ Felicitation", end: "7:15 PM" },
  { time: "7:15 PM", event: "DJ Night 🎧", end: "9:00 PM" },
];

const day2Morning: ScheduleItem[] = [
  { time: "10:05 AM", event: "Tamil Thai Vazthu", end: "10:08 AM" },
  { time: "10:08 AM", event: "Lighting of Kuthu Vilaku", end: "10:15 AM" },
  { time: "10:15 AM", event: "Show Start – Jeppiaar Educity Dance", end: "10:25 AM" },
  { time: "10:30 AM", event: "Awardees Felicitation (9 Awardees)", end: "12:00 PM" },
  { time: "12:05 PM", event: "National Anthem", end: "12:10 PM" },
];

const day2Afternoon: ScheduleItem[] = [
  { time: "1:30 PM", event: "Office Gana Team", end: "2:30 PM" },
  { time: "2:40 PM", event: "Chancellor Mam Mashup", end: "2:45 PM" },
  { time: "2:50 PM", event: "Department Performances (ECE, CSE, IT, AIDS, S&H, MBA, MCA, EEE & more)", end: "4:40 PM" },
  { time: "4:40 PM", event: "Villu Pattu", end: "4:45 PM" },
  { time: "4:45 PM", event: "Ramp Walk & Short Film", end: "5:00 PM" },
];

const day2Evening: ScheduleItem[] = [
  { time: "6:30 PM", event: "Chancellor Mam Arrival", end: "6:35 PM" },
  { time: "6:40 PM", event: "Group Dance – Team Intros", end: "6:45 PM" },
  { time: "6:45 PM", event: "Group Dance Jury Felicitation", end: "6:47 PM" },
  { time: "6:47 PM", event: "WCC & Guru Nanak Group Dance", end: "7:01 PM" },
  { time: "7:01 PM", event: "Ramp Walk – Loyola ICAM & MGC", end: "7:17 PM" },
  { time: "7:17 PM", event: "Faculty Special Performance", end: "7:24 PM" },
  { time: "7:25 PM", event: "Prize Distribution", end: "7:30 PM" },
  { time: "7:30 PM", event: "Guest Felicitation (Live Concert)", end: "7:35 PM" },
  { time: "7:35 PM", event: "🎵 Live Concert", end: "8:55 PM" },
];

type SessionBlock = {
  title: string;
  subtitle: string;
  venue: string;
  time: string;
  icon: React.ReactNode;
  schedule: ScheduleItem[];
  accentColor: string;
};

const sessions: SessionBlock[] = [
  {
    title: "Guest & DJ Night",
    subtitle: "Day 1 · March 5, 2026",
    venue: "Outdoor Venue",
    time: "6:30 PM – 9:30 PM",
    icon: <Music className="h-5 w-5" />,
    schedule: day1Evening,
    accentColor: "hsl(275 85% 55%)",
  },
  {
    title: "ICON Awards 2K26",
    subtitle: "Day 2 · March 6, 2026",
    venue: "Main Auditorium",
    time: "10:00 AM – 12:00 PM",
    icon: <Award className="h-5 w-5" />,
    schedule: day2Morning,
    accentColor: "hsl(48 95% 55%)",
  },
  {
    title: "Intra College Fest",
    subtitle: "Day 2 · March 6, 2026",
    venue: "Main Auditorium",
    time: "1:30 PM – 5:00 PM",
    icon: <Users className="h-5 w-5" />,
    schedule: day2Afternoon,
    accentColor: "hsl(275 85% 55%)",
  },
  {
    title: "Inter College Culturals & Live Concert",
    subtitle: "Day 2 · March 6, 2026",
    venue: "Outdoor Venue",
    time: "6:30 PM – 9:30 PM",
    icon: <Mic2 className="h-5 w-5" />,
    schedule: day2Evening,
    accentColor: "hsl(48 95% 55%)",
  },
];

const ScheduleRow = ({ item, index, accentColor }: { item: ScheduleItem; index: number; accentColor: string }) => (
  <motion.div
    {...fadeUp(index * 0.04)}
    className="group grid grid-cols-[70px_1fr_70px] sm:grid-cols-[90px_1fr_90px] items-center py-3 sm:py-3.5 border-b transition-colors duration-500"
    style={{ borderColor: "hsl(260 12% 12% / 0.6)" }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = `${accentColor.replace(")", " / 0.3)")}`; 
      e.currentTarget.style.background = `${accentColor.replace(")", " / 0.03)")}`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "hsl(260 12% 12% / 0.6)";
      e.currentTarget.style.background = "transparent";
    }}
  >
    <span className="font-montserrat text-[10px] sm:text-xs text-primary/70 font-medium tracking-wide">
      {item.time}
    </span>
    <span className="font-montserrat text-xs sm:text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-300 px-2 sm:px-4">
      {item.event}
    </span>
    <span className="font-montserrat text-[10px] sm:text-xs text-muted-foreground/50 text-right tracking-wide">
      {item.end}
    </span>
  </motion.div>
);

const SessionCard = ({ session, index }: { session: SessionBlock; index: number }) => (
  <motion.div
    {...fadeUp(index * 0.1)}
    whileHover={{ y: -4, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
    className="card-stranger rounded-lg p-5 sm:p-7 md:p-8 group relative overflow-hidden animate-border-glow"
  >
    {/* Hover shimmer */}
    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-out bg-gradient-to-r from-transparent via-primary/[0.03] to-transparent pointer-events-none" />

    {/* Corner accent */}
    <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none">
      <div
        className="absolute top-0 right-0 w-full h-px transition-all duration-700"
        style={{ background: `linear-gradient(to left, ${session.accentColor.replace(")", " / 0.3)")}, transparent)` }}
      />
      <div
        className="absolute top-0 right-0 h-full w-px transition-all duration-700"
        style={{ background: `linear-gradient(to bottom, ${session.accentColor.replace(")", " / 0.3)")}, transparent)` }}
      />
    </div>

    {/* Header */}
    <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
      <div
        className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-md shrink-0 animate-subtle-float group-hover:scale-110 transition-transform duration-500"
        style={{
          background: `${session.accentColor.replace(")", " / 0.12)")}`,
          color: session.accentColor,
          animationDelay: `${index * 0.5}s`,
        }}
      >
        {session.icon}
      </div>
      <div className="min-w-0">
        <h3 className="font-cinzel text-base sm:text-lg md:text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-500">
          {session.title}
        </h3>
        <p className="font-montserrat text-[10px] sm:text-xs text-muted-foreground/60 tracking-wider mt-0.5">
          {session.subtitle}
        </p>
      </div>
    </div>

    {/* Meta */}
    <div className="flex flex-wrap gap-3 sm:gap-5 mb-5 sm:mb-6">
      <span className="flex items-center gap-1.5 font-montserrat text-[10px] sm:text-xs text-accent/50 group-hover:text-accent/80 transition-colors duration-500">
        <MapPin className="h-3 w-3" /> {session.venue}
      </span>
      <span className="flex items-center gap-1.5 font-montserrat text-[10px] sm:text-xs text-accent/50 group-hover:text-accent/80 transition-colors duration-500">
        <Clock className="h-3 w-3" /> {session.time}
      </span>
    </div>

    {/* Schedule */}
    <div>
      {session.schedule.map((item, i) => (
        <ScheduleRow key={i} item={item} index={i} accentColor={session.accentColor} />
      ))}
    </div>
  </motion.div>
);

const AgendaSection = () => {
  return (
    <section id="agenda" className="relative py-20 sm:py-28 md:py-36 px-4 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[700px] h-[400px] md:h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(275 70% 50% / 0.06), transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div {...fadeUp(0)} className="mb-10 sm:mb-14 md:mb-20">
          <p className="font-montserrat text-[10px] sm:text-xs md:text-sm tracking-[0.4em] uppercase text-accent/60 mb-2 sm:mb-4 font-medium">
            Full Schedule
          </p>
          <div className="flex items-end gap-4 sm:gap-6">
            <h2 className="font-display text-3xl sm:text-4xl md:text-7xl text-primary text-glow-gold leading-[0.9] font-black">
              Agenda
            </h2>
            <div className="flex items-center gap-2 mb-1 sm:mb-2">
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-accent/40" />
              <span className="font-montserrat text-[10px] sm:text-xs text-muted-foreground/50 tracking-wider">
                March 5–6, 2026
              </span>
            </div>
          </div>
          <motion.div
            className="divider-ember w-16 sm:w-20 md:w-36 mt-4 sm:mt-6 md:mt-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

        {/* Session cards */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {sessions.map((session, i) => (
            <SessionCard key={session.title} session={session} index={i} />
          ))}
        </div>

        {/* Download link */}
        <motion.p {...fadeUp(0.3)} className="mt-8 sm:mt-10 text-center">
          <a
            href="/agenda.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-montserrat text-[10px] sm:text-xs tracking-[0.3em] uppercase text-primary/50 hover:text-primary transition-colors duration-300"
          >
            Download Full Agenda PDF ↗
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default AgendaSection;
