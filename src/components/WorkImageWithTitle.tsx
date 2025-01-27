"use client";

import Image, { StaticImageData } from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

function WorkImageWithTitle({
  image,
  title,
  className,
}: {
  image: StaticImageData;
  title: string;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-150px",
    once: true,
  });

  return (
    <article ref={ref} className={`group ${className}`}>
      <figure className="relative overflow-hidden rounded-[10px] p-1 transition-all duration-500 group-hover:-translate-y-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 660 660"
          className="absolute -inset-1 z-10"
        >
          <motion.path
            variants={{
              initial: {
                scaleY: 6,
                originY: "100%",
              },
              final: {
                scaleY: 0,
                originY: "100%",
              },
            }}
            transition={{ duration: 0.7 }}
            initial="initial"
            animate={isInView ? "final" : "initial"}
            className={"relative z-10"}
            fill="#1D2145"
            fillOpacity="1"
            d="M0,330L15.7,384C31.4,438,62.9,547,94.3,522.7C137.1,491,205.7,330,247.7,230.3C285.7,140,314.3,71.5,378.5,115.5C431.8,149.5,477,384,525.5,421.5C573,449,608.5,258.5,661.5,246.3L660,660L0,660Z"
          ></motion.path>
        </svg>

        <Image
          src={image}
          alt=""
          width={660}
          height={660}
          className="relative z-0 rounded-[10px] border-none"
        />
      </figure>

      <h2 className="mt-[calc(2em-4px)] overflow-hidden ps-1 font-sans text-sm font-bold uppercase leading-[1em]">
        {title.split("").map((letter, index) => (
          <span
            className={`inline-block translate-y-full transition-all duration-300 group-hover:translate-y-0 ${letter == " " ? "w-1" : ""} `}
            style={{ transitionDelay: `${index}0ms` }}
            key={index}
          >
            {letter}
          </span>
        ))}
      </h2>
    </article>
  );
}

export default WorkImageWithTitle;
