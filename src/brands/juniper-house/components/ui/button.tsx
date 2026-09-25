import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

const base =
  "inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full border font-semibold whitespace-nowrap " +
  "transition-[background-color,color,border-color,transform] duration-200 ease-out pressed:scale-[.98] " +
  "cursor-pointer select-none";

/**
 * Pill buttons. Each variant spells out hover and pressed states with the
 * `hovered:` / `pressed:` variants, which the style guide can pin open.
 */
export const buttonVariants = {
  /** Terracotta ink — the one action that matters on a screen. */
  primary:
    "border-terracotta-ink bg-terracotta-ink text-linen-50 " +
    "hovered:border-terracotta-deep hovered:bg-terracotta-deep " +
    "pressed:border-terracotta-pressed pressed:bg-terracotta-pressed",
  /** Outlined juniper — the quieter alternative beside a primary. */
  secondary:
    "border-juniper bg-transparent text-juniper " +
    "hovered:bg-juniper hovered:text-linen " +
    "pressed:border-juniper-900 pressed:bg-juniper-900 pressed:text-linen",
  /** Linen on juniper bands. */
  light:
    "border-linen bg-linen text-juniper " +
    "hovered:border-linen-50 hovered:bg-linen-50 hovered:text-terracotta-ink " +
    "pressed:border-linen-200 pressed:bg-linen-200 pressed:text-juniper",
  /** Outlined linen on juniper bands. */
  ghostLight:
    "border-linen/55 bg-transparent text-linen " +
    "hovered:border-linen hovered:bg-linen hovered:text-juniper " +
    "pressed:border-linen-200 pressed:bg-linen-200 pressed:text-juniper",
} as const;

export const buttonSizes = {
  sm: "h-11 px-4 text-[14.5px]",
  /** Compact actions in a row, e.g. call / text / email on phones. */
  compact: "h-12 px-4 text-[15px]",
  md: "h-[52px] px-[26px] text-base",
  /** Hero and menu: 56 on phones, 58 from md. */
  lg: "h-14 px-[30px] text-base md:h-[58px] md:px-8 md:text-[17px]",
  /** Form submit: a steady 56 at every width. */
  tall: "h-14 px-[30px] text-base",
} as const;

export type ButtonVariant = keyof typeof buttonVariants;
export type ButtonSize = keyof typeof buttonSizes;

type StyleProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Full width below the `sm` breakpoint, auto above. */
  fluid?: boolean;
  /** Pin a state open for documentation. */
  state?: "hover" | "pressed";
  className?: string;
  children: ReactNode;
};

export function buttonClass({
  variant = "primary",
  size = "md",
  fluid,
  className,
}: Pick<StyleProps, "variant" | "size" | "fluid" | "className">) {
  return cn(base, buttonVariants[variant], buttonSizes[size], fluid && "w-full sm:w-auto", className);
}

type ButtonLinkProps = StyleProps & Omit<ComponentProps<typeof Link>, "className" | "children">;

export function ButtonLink({ variant, size, fluid, state, className, children, ...props }: ButtonLinkProps) {
  return (
    <Link data-state={state} className={buttonClass({ variant, size, fluid, className })} {...props}>
      {children}
    </Link>
  );
}

type ButtonProps = StyleProps & Omit<ComponentProps<"button">, "className" | "children">;

export function Button({ variant, size, fluid, state, className, children, type = "button", ...props }: ButtonProps) {
  return (
    <button type={type} data-state={state} className={buttonClass({ variant, size, fluid, className })} {...props}>
      {children}
    </button>
  );
}
