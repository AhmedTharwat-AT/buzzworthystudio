"use client";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

function ParrallexContext({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 });
  const y = useTransform(smoothProgress, (value) => {
    return (
      value *
      -((contentRef.current?.scrollHeight || 0) - (window.innerHeight || 0))
    );
  });

  useEffect(() => {
    if (!contentRef.current) return;
    const handleResize = () => {
      if (contentRef.current) {
        document.body.style.height = `${
          contentRef.current.scrollHeight + 10
        }px`;
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [contentRef]);

  return (
    <motion.div
      ref={contentRef}
      id="content-wrapper"
      style={{ y }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
}

export default ParrallexContext;
