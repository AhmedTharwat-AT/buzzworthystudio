"use client";

import useMotionTimeline from "@/hooks/useMotionTimeLine";
import { AnimationOptions } from "motion";

const options: AnimationOptions = {
  duration: 2,
  times: [0, 0.1, 0.9, 1],
  delay: -0.04,
};

function KeywordsList() {
  const scope = useMotionTimeline(
    [
      [
        "#item1",
        {
          y: ["100%", 0, 0, "-100%"],
        },
        options,
      ],
      [
        "#item2",
        {
          y: ["100%", 0, 0, "-100%"],
        },
        options,
      ],
      [
        "#item3",
        {
          y: ["100%", 0, 0, "-100%"],
        },
        options,
      ],
      [
        "#item4",
        {
          y: ["100%", 0, 0, "-100%"],
        },
        options,
      ],
      [
        "#item5",
        {
          y: ["100%", 0, 0, "-100%"],
        },
        options,
      ],
    ],
    Infinity
  );

  return (
    <div
      ref={scope}
      className="h-3 overflow-hidden relative  text-xs  w-60 *:absolute *:left-0 *:bottom-0 *:w-full  [&_p:not(:first-child)]:-translate-y-full *:leading-none"
    >
      <p id="item1" className="!relative ">
        Turn Vision into Value
      </p>
      <p id="item2">Are A Gateway to Success</p>
      <p id="item3">Unlock Potential</p>
      <p id="item4">Feed and Fuel Growth</p>
      <p id="item5">Amplify Your Message</p>
    </div>
  );
}

export default KeywordsList;
