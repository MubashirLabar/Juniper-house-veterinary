import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { RevealGroup, RevealItem } from "../motion/reveal";

type EyebrowProps = {
  children: ReactNode;
  tone?: "ink" | "muted" | "clay" | "deep";
  /** `sm` is the fixed 12px label used for footer column heads. */
  size?: "md" | "sm";
  className?: string;
};

const eyebrowTones = {
  ink: "text-terracotta-ink",
  muted: "text-moss-muted",
  clay: "text-clay",
  deep: "text-terracotta-deep",
} as const;

export function Eyebrow({ children, tone = "ink", size = "md", className }: EyebrowProps) {
  return (
    <p
      className={cn(
        size === "md" ? "eyebrow" : "text-xs font-semibold tracking-[0.14em] uppercase",
        eyebrowTones[tone],
        className,
      )}
    >
      {children}
    </p>
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  /** Supporting line, set to the right of the title on desktop. */
  intro?: string;
  titleId?: string;
  className?: string;
};

/**
 * Eyebrow + H2 in the first seven columns, an optional intro in columns 9–12
 * aligned to the title's baseline. Below `lg` the intro stacks; on phones it
 * is dropped, as in the mobile artboard.
 */
export function SectionHeader({ eyebrow, title, intro, titleId, className }: SectionHeaderProps) {
  return (
    <RevealGroup className={cn("grid gap-y-5 lg:grid-cols-12 lg:items-end lg:gap-x-6", className)}>
      <RevealItem className="flex flex-col gap-3.5 md:gap-5 lg:col-span-7">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 id={titleId} className="serif text-h1">
          {title}
        </h2>
      </RevealItem>
      {intro && (
        <RevealItem className="hidden md:block lg:col-span-4 lg:col-start-9">
          <p className="max-w-xl text-intro text-moss lg:max-w-none">{intro}</p>
        </RevealItem>
      )}
    </RevealGroup>
  );
}
