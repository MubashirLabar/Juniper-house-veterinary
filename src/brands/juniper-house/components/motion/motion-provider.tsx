"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** Honors the visitor's “reduce motion” setting for every animation below it. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
