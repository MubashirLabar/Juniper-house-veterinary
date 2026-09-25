import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./icons";

type TextLinkProps = Omit<ComponentProps<typeof Link>, "children"> & {
  children: ReactNode;
  state?: "hover";
};

/** Underlined terracotta link with a trailing arrow that eases forward on hover. */
export function TextLink({ children, className, state, ...props }: TextLinkProps) {
  return (
    <Link
      data-state={state}
      className={cn(
        "group inline-flex items-center gap-2 border-b border-current pb-[3px] text-base font-semibold text-terracotta-ink",
        "transition-[color,gap] duration-200 hovered:gap-3 hovered:text-terracotta-deep",
        className,
      )}
      {...props}
    >
      {children}
      <Icon name="arrow" size={18} strokeWidth={1.8} />
    </Link>
  );
}

/** Inline body-copy link. */
export function InlineLink({ className, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "text-terracotta-ink underline underline-offset-4 transition-colors hovered:text-terracotta-deep",
        className,
      )}
      {...props}
    />
  );
}
