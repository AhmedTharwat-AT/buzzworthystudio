"use client";

import { usePageHeight } from "@/context/PageHeightProvider";
import { useWindow } from "@/context/WindowProvider";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { memo, useEffect } from "react";
import { createPortal } from "react-dom";

function ParrallexContent({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { windowDim } = useWindow();
  const { pageHeight, setPageHeight, pageRef } = usePageHeight();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
  });

  const y = useTransform(smoothProgress, (value) => {
    return value * -(pageHeight - windowDim.height);
  });

  useEffect(() => {
    if (!pageRef.current) return;
    const handleResize = () => {
      if (pageRef.current) {
        setPageHeight(pageRef.current.scrollHeight);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pageRef, setPageHeight]);

  return (
    <>
      <motion.div
        ref={pageRef}
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

export default memo(ParrallexContent);
