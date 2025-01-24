"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

function AnimatedWordsByLetter({
  words,
  className,
  wordClassName,
}: {
  words: string[];
  className?: string;
  wordClassName?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px",
    once: true,
  });

  return (
    <h3 ref={ref} className={className}>
      {words.map((word, index) => (
        <Word
          className={wordClassName}
          key={index}
          word={word}
          inView={isInView}
          previous={words[index - 1]?.length || 0}
        />
      ))}
    </h3>
  );
}

const letterVariants = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

function Word({
  className,
  word,
  inView,
  previous,
}: {
  className?: string;
  word: string;
  inView: boolean;
  previous: number;
}) {
  return (
    <motion.div
      className="overflow-hidden"
      animate={inView ? "animate" : "initial"}
      transition={{
        staggerChildren: 0.05,
        delayChildren: previous * 0.05,
      }}
    >
      {word.split("").map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className={`inline-block ${className}`}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default AnimatedWordsByLetter;
