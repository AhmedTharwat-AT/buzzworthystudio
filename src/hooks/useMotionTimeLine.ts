"use client";

import {
  DOMKeyframesDefinition,
  ElementOrSelector,
  useAnimate,
  AnimationOptions,
} from "motion/react";
import { useCallback, useEffect, useRef } from "react";

type AnimateParams = [
  ElementOrSelector,
  DOMKeyframesDefinition,
  (AnimationOptions | undefined)?
];

type Animation = AnimateParams | Animation[];

const useMotionTimeline = (keyframes: Animation[], count: number = 1) => {
  const mounted = useRef(true);

  const [scope, animate] = useAnimate();

  const processAnimation = useCallback(
    async (animation: Animation) => {
      // If list of animations, run all concurrently

      if (Array.isArray(animation[0])) {
        await Promise.all(
          animation.map(async (a) => {
            await processAnimation(a as Animation);
          })
        );
      } else {
        // Else run the single animation
        await animate(...(animation as AnimateParams));
      }
    },
    [animate]
  );

  const handleAnimate = useCallback(async () => {
    for (let i = 0; i < count; i++) {
      for (const animation of keyframes) {
        if (!mounted.current) return;
        await processAnimation(animation);
      }
    }
  }, [keyframes, count, processAnimation]);

  useEffect(() => {
    if (!mounted.current) return;
    mounted.current = true;

    handleAnimate();

    return () => {
      mounted.current = false;
    };
  }, [handleAnimate]);

  return scope;
};

export default useMotionTimeline;
