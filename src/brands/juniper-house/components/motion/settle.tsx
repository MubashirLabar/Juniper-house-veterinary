"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { ease } from "./reveal";

type SettleProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Photography eases from a slight zoom to rest as it comes into view, like
 * a camera finding focus. Used inside the arch so the frame itself stays still.
 */
export function Settle({ children, className }: SettleProps) {
  return (
    <motion.div
      className={className}
      initial={{ scale: 1.08 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 1.8, ease }}
    >
      {children}
    </motion.div>
  );
}

/** The footer wordmark rises out of the bottom edge. */
export function RiseFromEdge({ children, className }: SettleProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: "35%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.6, ease }}
    >
      {children}
    </motion.div>
  );
}
