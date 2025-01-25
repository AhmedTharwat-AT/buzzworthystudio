"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

function ParrallexComp({
  children,
  className,
  min,
  max,
  scrollDiff = 500,
}: {
  children: React.ReactNode;
  className?: string;
  min?: number;
  max?: number;
  scrollDiff?: number;
}) {
  const [limit, setLimit] = useState({ start: 0, end: 0 });

  const { scrollY } = useScroll();
  const ref = useRef<HTMLDivElement>(null);
  const y = useTransform(
    scrollY,
    [limit.start, limit.end],
    [min || 0, max || 100],
  );
  const smoothY = useSpring(y, { mass: 0.1, stiffness: 100, damping: 20 });

  useEffect(() => {
    if (!ref.current) return;
    function handleResize() {
      const top = ref.current?.getBoundingClientRect().top || 0;
      const distance = top + window.scrollY - window.innerHeight;

      setLimit({
        start: distance,
        end: distance + scrollDiff,
      });
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [scrollDiff]);

  return (
    <motion.div ref={ref} style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  );
}

export default ParrallexComp;
