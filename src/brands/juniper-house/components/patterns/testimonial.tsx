import { cn } from "@/lib/cn";
import type { Testimonial as TestimonialData } from "../../content";

type TestimonialProps = {
  testimonial: TestimonialData;
  /** `plain` sits on the page; `card` is a raised linen panel. */
  variant?: "plain" | "card";
  className?: string;
};

/**
 * A client's words in the serif italic. From `md` a large terracotta opening
 * mark stands above the quote; on phones the marks sit inline to save height.
 */
export function Testimonial({ testimonial, variant = "plain", className }: TestimonialProps) {
  const card = variant === "card";
  return (
    <figure
      className={cn(
        "flex flex-col",
        card
          ? "gap-[18px] rounded-panel border border-linen-300 bg-linen-50 p-6 md:p-8"
          : "gap-[18px] md:gap-7",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "serif hidden leading-[0.6] text-terracotta md:block",
          card ? "h-[30px] text-[72px]" : "h-10 text-[96px]",
        )}
      >
        “
      </span>
      <blockquote className={cn("serif italic", card ? "text-[26px] leading-[1.3]" : "text-quote")}>
        <span className="md:hidden">“</span>
        {testimonial.quote}
        <span className="md:hidden">”</span>
      </blockquote>
      <figcaption className="text-sm text-moss-muted md:text-[15px]">
        <strong className="font-semibold text-juniper">{testimonial.name}</strong> · {testimonial.place}
      </figcaption>
    </figure>
  );
}
