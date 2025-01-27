"use client";

import Dot from "@/components/Dot";
import LetterUpScroll from "@/components/LetterUpScroll";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

function AtitudeSection() {
  const [windowDim, setWindowDim] = useState({ width: 0, height: 0 });
  const [boxsWidth, setBoxsWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const percentage = windowDim.height / (ref.current?.scrollHeight || 0);

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
    return value * ((ref.current?.scrollHeight || 0) - windowDim.height);
  });

  const clipPath1 = useTransform(smoothProgress, [0.01, percentage], [100, 0]);
  const clipPath2 = useTransform(
    smoothProgress,
    [1 - percentage - 0.2, 1 - percentage],
    [100, 0],
  );
  const clipPath = useMotionTemplate`polygon(${clipPath1}% 0, ${clipPath2}% 0, ${clipPath2}% 100%, ${clipPath1}% 100%)`;

  useEffect(() => {
    if (!ref.current) return;
    function handleResize() {
      if (!ref.current) return;
      setWindowDim({ width: window.innerWidth, height: window.innerHeight });
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={ref}
      // style={{ height: boxsWidth + 2 * windowDim.height + "px" }}
      className="relative h-[3000px]"
    >
      <motion.section className="relative h-screen" style={{ y }}>
        {/* title */}
        <div className="flex h-full flex-nowrap items-center md:px-[12.7998vw]">
          <div className="relative h-[1em] font-tt_tunnels text-[34vw] font-bold leading-tight">
            <motion.p
              style={{
                clipPath,
              }}
              className="text-secondary"
            >
              attitude
            </motion.p>

            <LetterUpScroll ref={ref} windowPercentage={percentage} />
          </div>
        </div>

        {/* boxs */}
        <Boxs
          ref={ref}
          windowWidth={windowDim.width}
          boxsWidth={boxsWidth}
          setBoxsWidth={setBoxsWidth}
        />
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
    offset: 80,
  },
  2: {
    title: "passion",
    content:
      "Our passion for what we do is evident in what we create. We pour all of our creativity and expertise into each project, ensuring that the end result is a unique and valuable website that exceeds your expectations.",
    offset: 40,
  },
  3: {
    title: "devotion",
    content:
      "We are devoted to our clients and to delivering our best work. Our commitment to perfection means that we won't stop until you are raving about us to everyone you know.",
    offset: 20,
  },
  4: {
    title: "promise",
    content:
      "We understand that redesigning your entire brand or website can be a daunting change. Our promise to you is that we will always strive to make you happy and satisfied with our work.",
    offset: 40,
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
    offset: ["0 0", "1 1"],
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
      ref={(el) => setBoxsWidth(el?.scrollWidth || 0)}
      style={{ left }}
      className="absolute left-0 top-[10%] z-10 ml-[99.9984vw] flex h-4/5 gap-[4.1666vw]"
    >
      {Object.values(boxsContent).map((box, index) => (
        <motion.article
          style={{ y: box.offset, scale }}
          key={index}
          className="h-fit w-[33.3328vw] rounded-[10px] bg-[#222650] p-[4.1666vw]"
        >
          <h3 className="mb-[1em] inline-block font-tt_lakes text-xs uppercase">
            <Dot className="mx-0 me-[1.5em]" />
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

export default AtitudeSection;
