"use client";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

function LetterUpScroll({
  ref,
  windowPercentage,
  windowHeight,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
  windowPercentage: number;
  windowHeight: number;
}) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["25px 0", "1 1"],
    layoutEffect: false,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
  });

  const y = useTransform(
    smoothProgress,
    [1 - windowPercentage, 1],
    [0, -windowHeight / 1.2],
  );

  return (
    <motion.p
      style={{ y }}
      className="absolute left-0 top-0 -z-10 flex justify-center text-darker_bg"
    >
      {"attitude".split("").map((letter, index) => (
        <LetterUp
          key={index}
          letter={letter}
          index={index}
          ref={ref}
          windowPercentage={windowPercentage}
        />
      ))}
    </motion.p>
  );
}

const LetterUp = ({
  letter,
  index,
  ref,
  windowPercentage,
}: {
  letter: string;
  index: number;
  ref: React.RefObject<HTMLDivElement | null>;
  windowPercentage: number;
}) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["25px 1", "1 1"],
    layoutEffect: false,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
  });

  const letterUp = useTransform(
    smoothProgress,
    [0, windowPercentage - 0.02, 1 - windowPercentage + 0.05, 1],
    [100 * index, 0, 0, -100 * index],
  );

  return (
    <motion.span
      custom={letterUp}
      style={{ y: letterUp }}
      className="inline-block"
    >
      {letter}
    </motion.span>
  );
};

export default LetterUpScroll;
