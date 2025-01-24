"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

function ParrallexComp({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [limit, setLimit] = useState({ start: 0, end: 0 });

  const { scrollY } = useScroll();
  const ref = useRef<HTMLDivElement>(null);
  const y = useTransform(scrollY, [limit.start, limit.end], [0, 100]);
  const smoothY = useSpring(y, { mass: 0.1, stiffness: 100, damping: 20 });

  useEffect(() => {
    if (!ref.current) return;
    function handleResize() {
      const top = ref.current?.getBoundingClientRect().top || 0;
      const distance = top + window.scrollY - window.innerHeight;

      setLimit({
        start: distance,
        end: distance + 1000,
      });
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div ref={ref} style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  );
}

export default ParrallexComp;
