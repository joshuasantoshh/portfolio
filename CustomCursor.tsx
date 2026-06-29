"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);

  // Position of mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for trailing circle (Apple/Cyber HUD style)
  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Target interactive selectors
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.classList.contains("clickable")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => {
      setClicked(true);
    };

    const handleMouseUp = () => {
      setClicked(false);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, visible]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-9999 hidden md:block">
      {/* Outer targeting HUD ring */}
      <motion.div
        className="absolute w-8 h-8 rounded-full border border-primary/60 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        style={{
          left: cursorX,
          top: cursorY,
          scale: isHovered ? 1.6 : clicked ? 0.8 : 1,
          borderColor: isHovered ? "#ff003c" : "rgba(255, 0, 60, 0.4)",
          borderStyle: isHovered ? "dashed" : "solid",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        {/* Crosshair indicators when hovering links */}
        {isHovered && (
          <>
            <span className="absolute w-[2px] h-1.5 bg-primary -top-1" />
            <span className="absolute w-[2px] h-1.5 bg-primary -bottom-1" />
            <span className="absolute h-[2px] w-1.5 bg-primary -left-1" />
            <span className="absolute h-[2px] w-1.5 bg-primary -right-1" />
          </>
        )}
      </motion.div>

      {/* Tiny inner precision laser point */}
      <motion.div
        className="absolute w-1.5 h-1.5 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          left: mouseX,
          top: mouseY,
          scale: clicked ? 1.5 : 1,
        }}
      />
    </div>
  );
}
