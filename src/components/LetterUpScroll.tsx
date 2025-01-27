"use client";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";

function LetterUpScroll({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0 0"],
  });

  return (
    <p className="absolute left-0 top-0 -z-10 flex justify-center text-darker_bg">
      {"attitude".split("").map((letter, index) => (
        <LetterUp
          key={index}
          letter={letter}
          index={index}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
}

const LetterUp = ({
  letter,
  index,
  progress,
}: {
  letter: string;
  index: number;
  progress: MotionValue<number>;
}) => {
  const letterUp = useTransform(progress, [0, 1], [70 * index, 0]);

  return (
    <motion.span style={{ y: letterUp }} className="inline-block">
      {letter}
    </motion.span>
  );
};

export default LetterUpScroll;
