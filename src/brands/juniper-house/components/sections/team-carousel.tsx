"use client";

import { type ReactNode, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type TeamCarouselProps = {
  count: number;
  children: ReactNode;
  className?: string;
};

/** A native scroll-snap row with a small progress indicator underneath. */
export function TeamCarousel({ count, children, className }: TeamCarouselProps) {
  const listRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const list = listRef.current;
    if (!list) return;
    const max = list.scrollWidth - list.clientWidth;
    const progress = max > 0 ? list.scrollLeft / max : 0;
    setActive(Math.round(progress * (count - 1)));
  };

  return (
    <div className={cn("flex flex-col gap-7", className)}>
      <ul
        ref={listRef}
        onScroll={onScroll}
        aria-label="Care team"
        className="no-scrollbar flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto overscroll-x-contain px-6"
      >
        {children}
      </ul>
      <div aria-hidden="true" className="flex items-center gap-2 px-6">
        {Array.from({ length: count }, (_, i) => (
          <span
            key={i}
            className={cn(
              "h-[3px] rounded-full transition-all duration-300",
              i === active ? "w-[22px] bg-juniper" : "w-2.5 bg-hairline",
            )}
          />
        ))}
      </div>
    </div>
  );
}
