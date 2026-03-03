import { useMemo } from "react";

const FloatingParticles = () => {
  const embers = useMemo(() => {
    return Array.from({ length: 35 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 14 + Math.random() * 20,
      size: 1 + Math.random() * 2,
      // Yellow only — no other colors
      hue: 48,
      opacity: 0.3 + Math.random() * 0.4,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {embers.map((e) => (
        <div
          key={e.id}
          className="absolute rounded-full animate-float-up"
          style={{
            left: `${e.left}%`,
            bottom: "-20px",
            width: `${e.size}px`,
            height: `${e.size}px`,
            background: `hsl(${e.hue} 90% 60%)`,
            animationDelay: `${e.delay}s`,
            animationDuration: `${e.duration}s`,
            opacity: e.opacity,
            boxShadow: `0 0 ${e.size * 4}px hsl(${e.hue} 100% 55% / 0.4), 0 0 ${e.size * 10}px hsl(${e.hue} 100% 55% / 0.15)`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
