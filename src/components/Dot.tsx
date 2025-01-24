"use client";

import { useInView, motion, Variants } from "motion/react";
import { useRef } from "react";

const dotVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: (custome: number) => ({
    opacity: [0, 1, 1, 0, 1],
    transition: {
      delay: 0.9 + custome,
      duration: 0.2,
      times: [0, 0.4, 0.6, 0.8, 1],
    },
  }),
};
const circleVariants: Variants = {
  initial: {
    scale: 0,
    opacity: 0,
    y: "-50%",
  },
  animate: (custome: number) => ({
    scale: [0, 1.2, 1],
    opacity: [0, 0.5, 1],
    y: "-50%",
    transition: {
      delay: 0.5 + custome,
      duration: 0.2,
      times: [0, 0.8, 1],
    },
  }),
};

function Dot({
  className,
  delay = 0,
  once = true,
}: {
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  return (
    <motion.span
      ref={ref}
      animate={isInView ? "animate" : "initial"}
      className={`relative mx-[1em] inline-block size-[1em] ${className}`}
    >
      <motion.i
        custom={delay}
        variants={circleVariants}
        className="absolute left-0 top-1/2 size-[1.2em] -translate-y-1/2 rounded-full border border-gray-300/25"
      ></motion.i>
      <motion.i
        custom={delay}
        variants={dotVariants}
        className="absolute left-[0.6em] top-1/2 size-[5px] -translate-x-1/2 -translate-y-1/2 bg-secondary"
      ></motion.i>
    </motion.span>
  );
}

export default Dot;
