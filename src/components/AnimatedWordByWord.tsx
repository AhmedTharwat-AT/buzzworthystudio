"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

function AnimatedWordByWord({
  words,
  className,
}: {
  words: string[];
  className?: string;
}) {
  return words.map((word, index) => (
    <Word className={className} key={index}>
      {word}
    </Word>
  ));
}

const wordVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

function Word({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.span
      className={`block ${className}`}
      variants={wordVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ duration: 0.3, delay: 0.2 }}
      ref={ref}
    >
      {children}
    </motion.span>
  );
}

export default AnimatedWordByWord;
