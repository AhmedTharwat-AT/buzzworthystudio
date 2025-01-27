"use client";

import { useInView, motion } from "motion/react";
import { useRef } from "react";

function SectionDividerLine({
  className = "",
  svgClassName = "",
}: {
  className?: string;
  svgClassName?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50px",
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      className={`relative my-8 px-[11px] ${className}`}
      variants={{
        initial: {
          width: 0,
          opacity: 0,
        },
        animate: {
          width: "100%",
          opacity: 1,
        },
      }}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ duration: 0.5 }}
    >
      <svg
        width="11"
        height="9"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute left-0 top-1/2 size-[11px] -translate-y-1 ${svgClassName}"`}
      >
        <path
          d="m10.407 4.5-2.555 4H3.148l-2.555-4 2.555-4h4.704l2.555 4Z"
          fill="#1D2145"
          stroke="#EEEEF2"
          fillRule="evenodd"
        ></path>
      </svg>

      <div className="h-px w-full bg-foreground"></div>

      <svg
        width="11"
        height="9"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute right-0 top-1/2 size-[11px] -translate-y-1 ${svgClassName}`}
      >
        <path
          d="m10.407 4.5-2.555 4H3.148l-2.555-4 2.555-4h4.704l2.555 4Z"
          fill="#1D2145"
          stroke="#EEEEF2"
          fillRule="evenodd"
        ></path>
      </svg>
    </motion.div>
  );
}

export default SectionDividerLine;
