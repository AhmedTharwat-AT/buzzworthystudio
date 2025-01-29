"use client";

import { useRef } from "react";
import Dot from "./Dot";
import { useInView, motion } from "motion/react";

function AnimatedSubTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50px",
    once: true,
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
      className={`relative whitespace-nowrap ps-4 font-tt_lakes text-[10px] font-normal uppercase md:ps-6 md:text-xs ${className}`}
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
