"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Logo() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.h1
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="select-none cursor-pointer font-sans text-[2rem] font-extrabold flex items-center"
    >
      {"EC".split("").map((text: string, i: number) => (
        <motion.span
          key={i}
          initial="initial"
          animate={hovered ? "animate" : "initial"}
          transition={{
            duration: 1.2,
            type: "spring",
            damping: 20,
            stiffness: 90,
          }}
          variants={{
            initial: { x: -(i * 10) },
            animate: { x: i * 14 },
          }}
          className="select-none cursor-pointer text-gradient text-[3rem] font-extrabold"
        >
          {text}
        </motion.span>
      ))}
    </motion.h1>
  );
}


