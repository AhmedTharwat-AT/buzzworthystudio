"use client";

import { useRef } from "react";
import Dot from "./Dot";
import { useInView, motion } from "motion/react";

function AnimatedSubTitle({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50px",
  });

  return (
    <motion.h2
      ref={ref}
      variants={{
        initial: {
          opacity: 0,
          x: -20,
        },
        animate: {
          opacity: 1,
          x: 0,
        },
      }}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ duration: 0.5 }}
      className="relative ps-6 font-tt_lakes text-xs font-normal uppercase"
    >
      <Dot
        delay={0}
        once={false}
        className="!absolute left-0 top-0 !mx-0 size-[1.2em]"
      />
      {children}
    </motion.h2>
  );
}

export default AnimatedSubTitle;
