"use client";

import { useWrapper } from "@/context/WrapperProvider";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function ParrallexContent({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const [windowHeight, setWindowHeight] = useState(0);
  const { pageHeight, setPageHeight, contentRef } = useWrapper();
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
        setPageHeight(contentRef.current.scrollHeight);
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
  }, [contentRef, setPageHeight]);

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

      {pageHeight &&
        createPortal(
          <div
            id="pageHeight"
            style={{
              height: `${pageHeight}px`,
              width: "100%",
            }}
          />,
          document.body,
        )}
    </>
  );
}

export default ParrallexContent;
