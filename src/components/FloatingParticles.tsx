import { useMemo } from "react";

const FloatingParticles = () => {
  const embers = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 10 + Math.random() * 18,
      size: 1 + Math.random() * 3,
      glowSize: 4 + Math.random() * 8,
      hue: Math.random() > 0.5 ? 3 : 15 + Math.random() * 20,
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
            background: `hsl(${e.hue} 90% 55%)`,
            animationDelay: `${e.delay}s`,
            animationDuration: `${e.duration}s`,
            boxShadow: `0 0 ${e.glowSize}px hsl(${e.hue} 100% 50% / 0.5), 0 0 ${e.glowSize * 2}px hsl(${e.hue} 100% 50% / 0.2)`,
            filter: 'blur(0.5px)',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
