import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Small uppercase label for table heads and specimen captions. */
export function Label({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("text-xs font-semibold tracking-[0.1em] text-moss-muted uppercase", className)}>
      {children}
    </span>
  );
}

/** Token names and values. */
export function Mono({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("font-mono text-[12.5px]", className)}>{children}</span>;
}

type GuideSectionProps = {
  id: string;
  title: string;
  aside?: ReactNode;
  children: ReactNode;
  className?: string;
};

/** A titled block on the style sheet. */
export function GuideSection({ id, title, aside, children, className }: GuideSectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("flex flex-col gap-7 md:gap-8", className)}>
      <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
        <h2 id={`${id}-title`} className="serif text-h2 lg:text-[40px]">
          {title}
        </h2>
        {aside && <p className="text-sm text-moss-muted">{aside}</p>}
      </div>
      {children}
    </section>
  );
}
