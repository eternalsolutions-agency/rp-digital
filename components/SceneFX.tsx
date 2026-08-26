"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function SceneFX() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.2 });
  const [pos, setPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <div className="site-grid" aria-hidden="true" />
      <div
        className="cursor-glow hidden md:block"
        aria-hidden="true"
        style={{ transform: `translate3d(${pos.x - 220}px, ${pos.y - 220}px, 0)` }}
      />
    </>
  );
}
