"use client";

import { useEffect, useRef, useState } from "react";
import { useWindow } from "@/context/WindowProvider";
import { useWrapper } from "@/context/WrapperProvider";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

import AnimatedSubTitle from "@/components/AnimatedSubTitle";
import AnimatedWordByWord from "@/components/AnimatedWordByWord";
import AnimatedWordsByLetter from "@/components/AnimatedWordsByLetter";
import Image from "next/image";

import Client1 from "@/assets/images/home/clients/client-1.png";
import Client2 from "@/assets/images/home/clients/client-2.png";
import Client3 from "@/assets/images/home/clients/client-3.svg";
import Client4 from "@/assets/images/home/clients/client-4.svg";
import Client5 from "@/assets/images/home/clients/client-5.svg";
import Client6 from "@/assets/images/home/clients/client-6.svg";
import Client7 from "@/assets/images/home/clients/client-7.svg";
import Client8 from "@/assets/images/home/clients/client-8.svg";

function ClientsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const { windowDim } = useWindow();
  const { setPageHeight, contentRef } = useWrapper();
  const [sectionHeight, setSectionHeight] = useState(0);
  const windowHeight = windowDim.height / 2;

  useEffect(() => {
    if (sectionHeight) return;

    if (ref.current && rowRef.current && contentRef.current) {
      const oneCell = rowRef.current.offsetWidth / 4;
      const temp = ref.current.scrollHeight + 3 * oneCell;

      setSectionHeight(temp);

      ref.current.style.height = `${temp}px`;

      setPageHeight(contentRef.current.scrollHeight);
    }
  }, [contentRef, setPageHeight, sectionHeight, rowRef]);

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
    return value * (sectionHeight - windowDim.height);
  });
  // const y = useTransform(smoothProgress, (value) => {
  //   return value * (sectionHeight - windowDim.height);
  // });
  const moveLeft = useTransform(smoothProgress, [0, 1], ["0", "-75%"]);

  const moveRight = useTransform(smoothProgress, [0, 1], ["0", "75%"]);

  return (
    <div
      ref={ref}
      // style={{ height: boxsWidth + 2 * windowDim.height + "px" }}
      className="relative border border-green-500"
    >
      <motion.section
        className="relative md:h-[calc(100vh-20px)]"
        style={{ y }}
      >
        <Heading />

        <div className="relative mt-[5vh] md:mt-[10vh]">
          {/* top row */}
          <motion.div
            ref={rowRef}
            style={{ x: moveLeft }}
            className="ml-[49.9992vw] flex w-full gap-[4.1666vw]"
          >
            {[Client1, Client2, Client3, Client4].map((img, i) => (
              <div
                key={i}
                className="flex aspect-[4/3] w-[20.833vw] items-center justify-center rounded-[10px] bg-[#222650] p-[30px]"
              >
                <Image
                  src={img}
                  alt=""
                  className="aspect-[4/3] w-full object-contain"
                />
              </div>
            ))}
          </motion.div>

          <Heart />

          {/* bot row */}
          <motion.div
            style={{ x: moveRight }}
            className="ml-[-24.9996vw] flex w-full gap-[4.1666vw] pt-[4.1666vw]"
          >
            {[Client5, Client6, Client7, Client8].map((img, i) => (
              <div
                key={i}
                className="flex aspect-[4/3] w-[20.833vw] items-center justify-center rounded-[10px] bg-[#222650] p-[30px]"
              >
                <Image
                  src={img}
                  alt=""
                  className="aspect-[4/3] w-full object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

function Heading() {
  return (
    <header className="flex flex-wrap px-[4.1666vw] max-md:mt-[10vh] max-md:flex-col-reverse md:flex-nowrap md:px-[12.4998vw]">
      <div className="flex w-[91.6652vw] flex-wrap gap-8 md:w-[33.3328vw] lg:w-[24.9996vw]">
        <div className="leading-normal">
          <AnimatedSubTitle>true partnership</AnimatedSubTitle>
        </div>

        <p className="mb-4 w-full self-end font-sans leading-tight opacity-60">
          <AnimatedWordByWord
            words={[
              "At Buzzworthy, our goal is to exceed",
              "expectations and build lasting partnerships.",
              "Through open communication, trust, and",
              "shared aspirations, we establish",
              "relationships built on mutual respect,",
              "fostering collaborative journeys toward",
              "greatness.",
            ]}
          />
        </p>
      </div>

      <div className="ml-0 w-[91.6652vw] md:ml-[8.3332vw] md:w-[33.3328vw] lg:ml-[12.4996vw]">
        <AnimatedWordsByLetter
          words={["Join the", "Buzzworthy", "Family."]}
          wordClassName="leading-[0.85]"
          className="font-tt_tunnels text-[8.333vw] font-bold uppercase leading-none [&_div:last-child_span:last-child]:text-secondary"
        />
      </div>
    </header>
  );
}

function Heart() {
  return (
    <div className="absolute left-[54.1658vw] top-1/2 z-20 flex size-[12.4998vw] -translate-y-1/2 items-center justify-center rounded-full bg-secondary">
      <motion.img
        src="/heart-icon.svg"
        alt="heart icon"
        className="size-[30px]"
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        transition={{
          repeat: Infinity,
          duration: 0.25,
          repeatDelay: 1,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export default ClientsSection;
