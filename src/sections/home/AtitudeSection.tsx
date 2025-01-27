"use client";

import LetterUpScroll from "@/components/LetterUpScroll";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

function AtitudeSection() {
  // const [windowPercentage, setWindowPercentage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0", "1 1"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
  });
  const y = useTransform(smoothProgress, (value) => {
    return value * ((ref.current?.scrollHeight || 0) - window.innerHeight);
  });

  const clipPath1 = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  const clipPath2 = useTransform(scrollYProgress, [0.4, 0.6], [100, 0]);
  const clipPath = useMotionTemplate`polygon(${clipPath1}% 0, ${clipPath2}% 0, ${clipPath2}% 100%, ${clipPath1}% 100%)`;

  // useEffect(() => {
  //   if (!ref.current) return;
  //   console.log(window.innerHeight / ref.current?.scrollHeight);
  //   setWindowPercentage(window.innerHeight / ref.current?.scrollHeight);
  // }, []);

  return (
    <div ref={ref} className="relative h-[2000px] border border-green-500">
      <motion.section className="h-screen" style={{ y }}>
        <div className="flex h-full flex-nowrap items-center md:px-[12.7998vw]">
          <div className="relative h-[1em] font-tt_tunnels text-[34vw] font-bold leading-tight">
            <motion.p
              style={{
                clipPath,
              }}
              className="text-secondary"
            >
              attitude
            </motion.p>

            <LetterUpScroll ref={ref} />
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default AtitudeSection;
