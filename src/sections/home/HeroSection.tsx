"use client";
import AnimateLetters from "@/components/AnimateLetters";
import { motion, Variants } from "motion/react";
import Link from "next/link";

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
    <section className="relative h-screen px-[12.49vw] pb-[4.16vw] pt-[17.5vh]">
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
          className="absolute bottom-[4.1666vw] right-[12.4998vw] hidden w-[20.833vw] md:block"
        >
          <p className="font-sans text-sm uppercase leading-none text-foreground/60">
            We specialize in creating meaningful digital experiences infused
            with emotion, driven by innovation, evoking a sense of awe and
            wonder.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

const headingVariants: Variants = {
  initial: {
    rotate: 0,
    y: "10vh",
    x: "50vw",
  },
  final: {
    rotate: 0,
    y: 0,
    x: 0,
    transition: { duration: 0.7, delay: 0 },
  },
};

function HeroHeading() {
  return (
    <motion.h1
      variants={headingVariants}
      initial="initial"
      animate="final"
      className="text-[clamp(90px,15.27vw,340px)] font-bold uppercase leading-[0.8]"
    >
      <div className="flex flex-wrap justify-between">
        <AnimateLetters
          letters={["C", "R", "E", "A", "T", "I", "V", "E"]}
          className="relative z-10 flex"
        />
        <AnimateLetters
          letters={["w", "e", "b"]}
          className="relative z-20 ms-auto flex text-secondary"
          step={6}
        />
      </div>
      <div>
        <AnimateLetters
          letters={["S", "T", "U", "D", "I", "O"]}
          className="flex justify-end"
          step={9}
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
      className="w-[66.6656vw] max-md:absolute max-md:bottom-0 max-md:left-[4.1666vw] md:ms-auto md:w-[33.3328vw]"
    >
      <Link
        href={"/"}
        className="group relative mt-4 flex w-full items-center justify-between gap-2 overflow-hidden rounded-[5px] border border-gray-300/15 px-[1.75em] py-[1.2em] font-sans text-xs font-medium uppercase leading-none md:px-[2.25em] md:py-[1.5em] md:text-sm"
      >
        <span className="absolute left-0 top-full z-[-1] inline-block h-full w-full bg-[#eeeef21a] transition-all duration-300 ease-in-out group-hover:top-0" />
        <span className="">Latest project</span>

        <span className="basis-[12%]">
          <svg
            viewBox="0 0 56 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="origin-right scale-100 transition-all delay-150 duration-300 group-hover:scale-0 group-hover:delay-0"
              d="M 1 6 L 49.8077 6"
              stroke="#EEEEF2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              className="origin-left scale-0 delay-0 duration-300 group-hover:scale-100 group-hover:delay-150"
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
