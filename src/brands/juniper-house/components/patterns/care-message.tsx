import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CareMessageProps = {
  initials: string;
  name: string;
  /** Second line under the name, e.g. “Your care team · text”. */
  context?: string;
  time: string;
  children: ReactNode;
  photo?: { src: string; alt: string };
  size?: "md" | "sm";
  className?: string;
};

/**
 * A text from your pet's care team. The only element in the system with a
 * shadow — it floats because it arrived, the way a message does.
 */
export function CareMessage({
  initials,
  name,
  context,
  time,
  children,
  photo,
  size = "md",
  className,
}: CareMessageProps) {
  const small = size === "sm";
  return (
    <figure
      className={cn(
        "flex flex-col bg-linen-50 shadow-float",
        small ? "gap-2.5 rounded-2xl p-3.5" : "gap-3 rounded-card px-5 py-[18px]",
        className,
      )}
    >
      <figcaption className={cn("flex items-center", small ? "gap-2" : "gap-2.5")}>
        <span
          aria-hidden="true"
          className={cn(
            "flex shrink-0 items-center justify-center rounded-full bg-juniper font-semibold text-linen",
            small ? "size-7 text-[11px]" : "size-9 text-[13px]",
          )}
        >
          {initials}
        </span>
        <span className="flex min-w-0 flex-col">
          <span className={cn("font-semibold", small ? "text-[13px]" : "text-sm")}>{name}</span>
          {context && !small && <span className="text-xs text-moss-muted">{context}</span>}
        </span>
        <time className={cn("ml-auto text-moss-muted", small ? "text-[11.5px]" : "text-xs")}>{time}</time>
      </figcaption>
      <blockquote
        className={cn(
          "rounded-[4px_16px_16px_16px] bg-sage-50 text-juniper",
          small ? "px-3 py-2.5 text-[13.5px] leading-[1.45]" : "px-3.5 py-3 text-[14.5px] leading-normal",
        )}
      >
        {children}
      </blockquote>
      {photo && (
        <div className="relative h-[104px] overflow-hidden rounded-xl bg-sand">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="260px"
            className="object-cover"
            style={{ objectPosition: "center 40%" }}
          />
        </div>
      )}
    </figure>
  );
}
