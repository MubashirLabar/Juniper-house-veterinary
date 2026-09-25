"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

/**
 * Juniper House motion: slow, soft ease-outs over short distances. Things
 * settle into place rather than arrive — nothing bounces, nothing repeats.
 */
export const ease = [0.22, 1, 0.36, 1] as const;
const duration = 0.9;
const distance = 20;

const viewport = { once: true, margin: "0px 0px -12% 0px" } as const;

const rise: Variants = {
  hidden: { opacity: 0, y: distance },
  visible: { opacity: 1, y: 0, transition: { duration, ease } },
};

const elements = {
  div: motion.div,
  li: motion.li,
  ul: motion.ul,
  ol: motion.ol,
  section: motion.section,
} as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: keyof typeof elements;
  /** Seconds before this element starts, once it is in view. */
  delay?: number;
};

/** Fades and lifts its content into place the first time it scrolls into view. */
export function Reveal({ children, className, as = "div", delay = 0 }: RevealProps) {
  const Element = elements[as];
  return (
    <Element
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={rise}
      transition={{ duration, ease, delay }}
    >
      {children}
    </Element>
  );
}

type RevealGroupProps = RevealProps & {
  /** Seconds between each child's start. */
  stagger?: number;
};

/** A container whose RevealItem children rise one after another. */
export function RevealGroup({ children, className, as = "div", delay = 0, stagger = 0.09 }: RevealGroupProps) {
  const Element = elements[as];
  return (
    <Element
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {children}
    </Element>
  );
}

export function RevealItem({ children, className, as = "div" }: Omit<RevealProps, "delay">) {
  const Element = elements[as];
  return (
    <Element className={className} variants={rise}>
      {children}
    </Element>
  );
}
