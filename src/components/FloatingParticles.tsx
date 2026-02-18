import { useMemo } from "react";

const FloatingParticles = () => {
  const embers = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 12 + Math.random() * 22,
      size: 0.5 + Math.random() * 2.5,
      glowSize: 3 + Math.random() * 10,
      hue: Math.random() > 0.55 ? 48 : 270 + Math.random() * 20,
      opacity: 0.3 + Math.random() * 0.5,
      drift: -15 + Math.random() * 30,
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
            background: `hsl(${e.hue} 90% 58%)`,
            animationDelay: `${e.delay}s`,
            animationDuration: `${e.duration}s`,
            opacity: e.opacity,
            boxShadow: `0 0 ${e.glowSize}px hsl(${e.hue} 100% 50% / 0.4), 0 0 ${e.glowSize * 2.5}px hsl(${e.hue} 100% 50% / 0.15)`,
            filter: `blur(${e.size < 1 ? 1 : 0.3}px)`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
