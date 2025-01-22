"use client";
import AnimateLetters from "@/components/AnimateLetters";
import { motion, Variants } from "motion/react";
import Link from "next/link";

const headingVariants: Variants = {
  initial: {
    rotate: 90,
    y: "100vw",
    x: "00vw",
  },
  final: {
    rotate: 0,
    y: 0,
    x: 0,
    transition: { duration: 0.7 },
  },
};

const fadeVariants: Variants = {
  initial: { opacity: 0, y: 50 },
  final: (custom: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: 1 * custom },
  }),
};

function HeroSection() {
  return (
    <section className="relative h-screen  pt-[17.5vh] pb-[4.16vw] px-[12.49vw]  ">
      <div>
        <HeroHeading />

        <NextProjectLink />

        <motion.div
          custom={1.1}
          variants={fadeVariants}
          initial="initial"
          animate="final"
          className="absolute bottom-[4.1666vw] left-[54.1658vw] hidden md:block"
        >
          <div className="font-tt_lakes text-xs uppercase text-foreground/60">
            (&nbsp;&nbsp;&nbsp;SCROLL&nbsp;&nbsp;&nbsp;)
          </div>
        </motion.div>

        <motion.div
          custom={1.2}
          variants={fadeVariants}
          initial="initial"
          animate="final"
          className="w-[20.833vw] absolute bottom-[4.1666vw] right-[12.4998vw] hidden md:block "
        >
          <p className="text-sm font-sans uppercase leading-none text-foreground/60">
            We specialize in creating meaningful digital experiences infused
            with emotion, driven by innovation, evoking a sense of awe and
            wonder.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function HeroHeading() {
  return (
    <motion.h1
      variants={headingVariants}
      initial="initial"
      animate="final"
      className="text-[clamp(90px,15.27vw,340px)] font-bold leading-[0.8] uppercase"
    >
      <div className="flex justify-between flex-wrap">
        <AnimateLetters
          letters={["C", "R", "E", "A", "T", "I", "V", "E"]}
          className="flex relative z-10"
        />
        <AnimateLetters
          letters={["w", "e", "b"]}
          className="flex text-secondary relative ms-auto"
          step={7}
        />
      </div>
      <div>
        <AnimateLetters
          letters={["S", "T", "U", "D", "I", "O"]}
          className="flex justify-end "
        />
      </div>
    </motion.h1>
  );
}

function NextProjectLink() {
  return (
    <motion.div
      custom={1}
      variants={fadeVariants}
      initial="initial"
      animate="final"
      className="w-[66.6656vw] md:w-[33.3328vw] md:ms-auto max-md:absolute max-md:bottom-0 max-md:left-[4.1666vw]"
    >
      <Link
        href={"/"}
        className="group flex font-sans relative items-center gap-2 py-[1.2em] md:py-[1.5em] px-[1.75em] md:px-[2.25em] overflow-hidden leading-none justify-between mt-4 w-full rounded-[5px] text-xs md:text-sm uppercase border border-gray-300/15 font-medium"
      >
        <span className="inline-block h-full bg-[#eeeef21a] absolute w-full top-full duration-300 ease-in-out group-hover:top-0 transition-all left-0 z-[-1]" />
        <span className="">Latest project</span>

        <span className=" basis-[12%] ">
          <svg
            viewBox="0 0 56 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className=" transition-all duration-300 scale-100  group-hover:scale-0 origin-right delay-150 group-hover:delay-0"
              d="M 1 6 L 49.8077 6"
              stroke="#EEEEF2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              className=" scale-0 group-hover:scale-100  origin-left group-hover:delay-150 delay-0 duration-300"
              d="M 1 6 L 49.8077 6"
              stroke="#EEEEF2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M 49.8086 1 L 55.0009 6 L 49.8086 11 L 49.8086 1 Z"
              stroke="#EEEEF2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>

        <span className="max-md:hidden">Sling Shot</span>
      </Link>
    </motion.div>
  );
}

export default HeroSection;
