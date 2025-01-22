"use client";
import { motion, Variants } from "motion/react";

const variants: Variants = {
  initial: (custom: number) => ({
    rotate: custom * 55,
    y: custom * 50,
    x: "100vw",
    z: 400 * (custom + 1),
  }),
  final: (custom: number) => ({
    rotate: 0,
    z: 0,
    y: 0,
    x: 0,
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
        <motion.p key={index} custom={index + (step || 0)} variants={variants}>
          {letter}
        </motion.p>
      ))}
    </span>
  );
}

export default AnimateLetters;
