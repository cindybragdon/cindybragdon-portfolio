import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function CursorStars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    let lastTime = 0;

    const handleMouseMove = (event) => {
      const now = Date.now();

      if (now - lastTime < 50) return;
      lastTime = now;

      const newStar = {
        id: crypto.randomUUID(),
        x: event.clientX,
        y: event.clientY,
        size: Math.random() * 14 + 14,
        driftX: (Math.random() - 0.5) * 50,
        driftY: Math.random() * -45 - 15,
      };

      setStars((currentStars) => [...currentStars, newStar]);

      setTimeout(() => {
        setStars((currentStars) =>
          currentStars.filter((star) => star.id !== newStar.id)
        );
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[99999] h-screen w-screen overflow-hidden">
      <AnimatePresence>
        {stars.map((star) => (
          <motion.div
            key={star.id}
            initial={{
              opacity: 0,
              scale: 0.2,
              left: star.x,
              top: star.y,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.2, 1.2, 0.2],
              left: star.x + star.driftX,
              top: star.y + star.driftY,
              rotate: 180,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute font-bold text-[#A97868]"
            style={{
              fontSize: `${star.size}px`,
            }}
          >
            ✦
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default CursorStars;