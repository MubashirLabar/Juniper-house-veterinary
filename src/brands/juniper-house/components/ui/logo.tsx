import { cn } from "@/lib/cn";

type SprigProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
  /** Berry fill. Terracotta on linen, clay on juniper. */
  berries?: "terracotta" | "clay";
};

/** The juniper sprig: a stem, four needles and three berries. */
export function Sprig({ size = 34, strokeWidth = 1.6, className, berries = "terracotta" }: SprigProps) {
  const berryClass = berries === "clay" ? "fill-clay" : "fill-terracotta";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={cn("shrink-0", className)}
    >
      <path d="M13 30c1-8 3-16 9-26" />
      <path d="M14.2 22.5 8.5 20" />
      <path d="M15.4 17.5 21.5 16" />
      <path d="M17 13 11.8 9.5" />
      <path d="M19 9 24.5 8" />
      <circle cx="7.2" cy="23.6" r="1.9" stroke="none" className={berryClass} />
      <circle cx="23.4" cy="18.8" r="1.9" stroke="none" className={berryClass} />
      <circle cx="20.6" cy="21.8" r="1.5" stroke="none" className={berryClass} />
    </svg>
  );
}

/** A small three-stroke sprig used as a divider between credentials. */
export function SprigDivider({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
      className={cn("shrink-0 text-terracotta", className)}
    >
      <path d="M13 30c1-8 3-16 9-26" />
      <path d="M15.4 17.5 21.5 16" />
      <path d="M17 13 11.8 9.5" />
    </svg>
  );
}

type WordmarkProps = {
  tone?: "light" | "dark";
  /** `full` adds the “Veterinary · Sarasota” descriptor. */
  variant?: "full" | "compact";
  className?: string;
};

export function Wordmark({ tone = "light", variant = "full", className }: WordmarkProps) {
  const onDark = tone === "dark";
  return (
    <span className={cn("flex items-center gap-2 md:gap-3", onDark ? "text-linen" : "text-juniper", className)}>
      <Sprig
        berries={onDark ? "clay" : "terracotta"}
        className="size-[26px] md:size-[34px]"
        strokeWidth={1.6}
      />
      <span className="flex flex-col gap-0.5">
        <span className="serif text-[21px] leading-none font-medium tracking-[-0.01em] whitespace-nowrap max-[379px]:text-[19px] md:text-[26px]">
          Juniper House
        </span>
        {variant === "full" && (
          <span
            className={cn(
              "hidden text-[11px] font-semibold tracking-[0.2em] uppercase md:block",
              onDark ? "text-sage-300" : "text-moss-muted",
            )}
          >
            Veterinary · Sarasota
          </span>
        )}
      </span>
    </span>
  );
}
