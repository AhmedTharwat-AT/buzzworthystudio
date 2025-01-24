"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function ParrallexContent({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const [windowHeight, setWindowHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
  });
  const y = useTransform(smoothProgress, (value) => {
    return value * -((contentRef.current?.scrollHeight || 0) - windowHeight);
  });

  useEffect(() => {
    if (!contentRef.current) return;
    const handleResize = () => {
      setWindowHeight(window.innerHeight);

      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
        // document.body.style.height = `${
        //   contentRef.current.scrollHeight + 10
        // }px`;
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [contentRef]);

  return (
    <>
      <motion.div
        ref={contentRef}
        id="content-wrapper"
        style={{ y }}
        className={`${className}`}
      >
        {children}
      </motion.div>

      {contentHeight &&
        createPortal(
          <div
            style={{
              height: `${contentHeight}px`,
              width: "100%",
            }}
          />,
          document.body,
        )}
    </>
  );
}

export default ParrallexContent;
