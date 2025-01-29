"use client";
import { motion, Variants } from "motion/react";

const variants: Variants = {
  initial: (custom: number) => ({
    rotateZ: "0.18turn",
    rotateY: "-0.125turn",
    x: 60 - 40 * custom,
    y: 30 + 10 * custom,
    z: 500,

    // z: 400 * (custom + 1),
  }),
  final: (custom: number) => ({
    rotateZ: 0,
    rotateY: 0,
    x: 0,
    y: 0,
    z: 0,
    transition: { duration: 0.7, delay: custom * 0.03 },
  }),
};
function AnimateLetters({
  letters,
  className,
  step,
}: {
  letters: string[];
  className?: string;
  step?: number;
}) {
  return (
    <span className={className} style={{ perspective: "400px" }}>
      {letters.map((letter, index) => (
        <motion.p
          key={index}
          // custom={index}
          custom={index + (step || 0)}
          variants={variants}
          // style={{ transformStyle: "preserve-3d" }}
        >
          {letter}
        </motion.p>
      ))}
    </span>
  );
}

export default AnimateLetters;
