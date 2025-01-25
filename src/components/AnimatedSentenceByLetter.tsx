"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const letterVariants = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

function AnimatedSentenceByLetter({
  senctence,
  className,
}: {
  senctence: string;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px",
    once: true,
  });

  return (
    <motion.h2
      ref={ref}
      className={`overflow-hidden ${className}`}
      animate={isInView ? "animate" : "initial"}
      transition={{
        staggerChildren: 0.05,
      }}
    >
      {senctence.split("").map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className={`inline-block`}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h2>
  );
}

export default AnimatedSentenceByLetter;
