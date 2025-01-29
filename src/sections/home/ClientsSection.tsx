"use client";

import AnimatedSubTitle from "@/components/AnimatedSubTitle";
import AnimatedWordByWord from "@/components/AnimatedWordByWord";
import AnimatedWordsByLetter from "@/components/AnimatedWordsByLetter";
import Dot from "@/components/Dot";
import LetterUpScroll from "@/components/LetterUpScroll";
import { useWrapper } from "@/context/WrapperProvider";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

function ClientsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [windowDim, setWindowDim] = useState({ width: 0, height: 0 });
  const [boxsWidth] = useState(0);
  const { setPageHeight, contentRef } = useWrapper();
  const sectionHeight = boxsWidth + 2 * windowDim.height;
  const percentage = windowDim.height / sectionHeight;

  if (ref.current) {
    ref.current.style.height = `${sectionHeight}px`;
  }

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["150px 0", "1 1"],
    axis: "y",
  });

  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    bounce: -10,
  });

  const y = useTransform(smoothProgress, (value) => {
    return value * (sectionHeight - windowDim.height);
  });

  const clipPath1 = useTransform(smoothProgress, [0.01, percentage], [100, 0]);
  const clipPath2 = useTransform(
    smoothProgress,
    [1 - percentage - 0.2, 1 - percentage],
    [100, 0],
  );
  const clipPath = useMotionTemplate`polygon(${clipPath1}% 0, ${clipPath2}% 0, ${clipPath2}% 100%, ${clipPath1}% 100%)`;

  useEffect(() => {
    function handleResize() {
      setWindowDim({ width: window.innerWidth, height: window.innerHeight });
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [ref]);

  // update page height when updating section height
  useEffect(() => {
    if (contentRef.current) {
      setPageHeight(contentRef.current.scrollHeight);
    }
  }, [sectionHeight, contentRef, setPageHeight]);

  return (
    <div
      ref={ref}
      // style={{ height: boxsWidth + 2 * windowDim.height + "px" }}
      className="relative border border-green-500"
    >
      <motion.section
        className="relative h-screen md:h-[calc(100vh-20px)]"
        style={{ y }}
      >
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
      </motion.section>
    </div>
  );
}

const boxsContent = {
  0: {
    title: "discipline",
    content:
      "At our core, we are a team of disciplined professionals who are passionate about our craft. Our process is thorough, ensuring that we create work that is not only buzzworthy, but also surpasses your expectations.",
    offset: 0,
  },
  1: {
    title: "trust",
    content:
      "Trust is essential in our client relationships. As experts in our field, we always strive to make the best decisions for your brand. We kindly ask you to place your trust in our process and unwavering dedication to your success.",
    offset: -0.08,
  },
  2: {
    title: "passion",
    content:
      "Our passion for what we do is evident in what we create. We pour all of our creativity and expertise into each project, ensuring that the end result is a unique and valuable website that exceeds your expectations.",
    offset: -0.02,
  },
  3: {
    title: "devotion",
    content:
      "We are devoted to our clients and to delivering our best work. Our commitment to perfection means that we won't stop until you are raving about us to everyone you know.",
    offset: 0.05,
  },
  4: {
    title: "promise",
    content:
      "We understand that redesigning your entire brand or website can be a daunting change. Our promise to you is that we will always strive to make you happy and satisfied with our work.",
    offset: -0.01,
  },
};

const Boxs = ({
  ref,
  windowWidth,
  boxsWidth,
  setBoxsWidth,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
  windowWidth: number;
  boxsWidth: number;
  setBoxsWidth: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["25px 0", "1 1"],
    layoutEffect: false,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
  });

  const v = useVelocity(smoothProgress);

  const pv = useTransform(v, (v) => Math.abs(v));

  const scale = useTransform(pv, [0, 1], [1, 0.7]);

  const left = useTransform(
    smoothProgress,
    [0, 1],
    [0, -boxsWidth - windowWidth],
  );

  return (
    <motion.div
      ref={(el) => {
        function handleResize() {
          setBoxsWidth(el?.scrollWidth || 0);
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }}
      style={{ left }}
      className="absolute left-0 top-[10%] z-10 ml-[99.9984vw] flex h-4/5 items-center gap-[4.1666vw]"
    >
      {Object.values(boxsContent).map((box, index) => (
        <motion.article
          style={{ y: box.offset * boxsWidth, scale }}
          key={index}
          className="h-fit w-[80vw] rounded-[10px] bg-[#222650] p-[4.1666vw] md:w-[33.3328vw]"
        >
          <h3 className="mb-[1em] inline-block font-tt_lakes text-xs uppercase">
            <Dot className="!mx-0 !me-[1.5em]" />
            rule no.{index + 1}
          </h3>
          <h4 className="font-tt_tunnels text-[calc(40px+1.4vw)] font-bold uppercase leading-none">
            {box.title}
          </h4>
          <p className="mt-[60px] font-sans leading-tight opacity-60">
            {box.content}
          </p>
        </motion.article>
      ))}
    </motion.div>
  );
};

export default ClientsSection;
