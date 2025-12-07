"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  fullWidth?: boolean;
}

export const FadeIn = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
  fullWidth = false,
}: FadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const directionOffset =
    direction === "up"
      ? { y: 40 }
      : direction === "down"
      ? { y: -40 }
      : direction === "left"
      ? { x: 40 }
      : { x: -40 };

  return (
    <div ref={ref} className={`${fullWidth ? "w-full" : ""} ${className}`}>
      <motion.div
        initial={{ opacity: 0, ...directionOffset }}
        animate={
          isInView
            ? { opacity: 1, x: 0, y: 0 }
            : { opacity: 0, ...directionOffset }
        }
        transition={{
          duration: 0.8,
          delay: delay,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
