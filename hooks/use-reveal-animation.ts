"use client";

import {useMemo} from "react";
import {useReducedMotion, type Transition, type Variants} from "motion/react";

type RevealDirection = "up" | "down" | "left" | "right";

type UseRevealAnimationOptions = {
  direction?: RevealDirection;
  distance?: number;
  duration?: number;
  delay?: number;
};

const getAxisOffset = (direction: RevealDirection, distance: number) => {
  if (direction === "left") {
    return {x: distance, y: 0};
  }

  if (direction === "right") {
    return {x: -distance, y: 0};
  }

  if (direction === "down") {
    return {x: 0, y: -distance};
  }

  return {x: 0, y: distance};
};

export const useRevealAnimation = ({
  direction = "up",
  distance = 28,
  duration = 0.55,
  delay = 0,
}: UseRevealAnimationOptions = {}) => {
  const shouldReduceMotion = useReducedMotion();

  return useMemo(() => {
    const transition: Transition = {
      duration: shouldReduceMotion ? 0 : duration,
      delay: shouldReduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    };

    const axisOffset = getAxisOffset(direction, distance);

    const variants: Variants = shouldReduceMotion
      ? {
          hidden: {opacity: 1, x: 0, y: 0},
          visible: {opacity: 1, x: 0, y: 0},
        }
      : {
          hidden: {opacity: 0, ...axisOffset},
          visible: {opacity: 1, x: 0, y: 0},
        };

    return {
      initial: "hidden" as const,
      whileInView: "visible" as const,
      viewport: {once: true, amount: 0.2},
      variants,
      transition,
    };
  }, [delay, direction, distance, duration, shouldReduceMotion]);
};
