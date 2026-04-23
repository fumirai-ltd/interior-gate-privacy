"use client";

import {motion, type HTMLMotionProps} from "motion/react";

import {useRevealAnimation} from "@/hooks/use-reveal-animation";

type AnimatedSectionProps = HTMLMotionProps<"div"> & {
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
};

export const AnimatedSection = ({
  children,
  delay = 0,
  direction = "up",
  ...restProps
}: AnimatedSectionProps) => {
  const animation = useRevealAnimation({delay, direction});

  return (
    <motion.div {...animation} {...restProps}>
      {children}
    </motion.div>
  );
};
