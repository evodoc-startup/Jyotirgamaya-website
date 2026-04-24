"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useSpring(0, { damping: 30, stiffness: 400 });
  const mouseY = useSpring(0, { damping: 30, stiffness: 400 });
  const scale = useSpring(1, { damping: 20, stiffness: 300 });

  useEffect(() => {
    // Disable custom cursor logic on mobile/touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a')
      ) {
        setIsHovering(true);
        scale.set(2.5);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a')
      ) {
        setIsHovering(false);
        scale.set(1);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mouseout", handleMouseOut, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible, scale]);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] hidden md:block border border-watermelon-red/30"
        style={{
          x: mouseX,
          y: mouseY,
          scale: scale,
          opacity: isVisible ? 1 : 0,
          mixBlendMode: "difference",
        }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9999] hidden md:block bg-watermelon-red"
        style={{
          x: mouseX,
          y: mouseY,
          left: 12,
          top: 12,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
}
