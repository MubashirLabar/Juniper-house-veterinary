import { cn } from "@/lib/cn";
import { links } from "../../content";
import { ButtonLink } from "../ui/button";

type BookingPromptProps = {
  title?: string;
  body?: string;
  href?: string;
  className?: string;
};

/** A compact juniper panel that ends a page or a long section with the one action. */
export function BookingPrompt({
  title = "Ready when you are.",
  body = "Online, by phone, or by text.",
  href = links.book,
  className,
}: BookingPromptProps) {
  return (
    <div
      className={cn(
        "on-dark flex flex-col items-start gap-5 rounded-panel bg-juniper px-6 py-7 text-linen",
        "sm:flex-row sm:items-center sm:justify-between md:px-8",
        className,
      )}
    >
      <div className="flex flex-col gap-1.5">
        <p className="serif text-[26px] leading-[1.15] font-normal">{title}</p>
        <p className="text-[14.5px] text-sage-200">{body}</p>
      </div>
      <ButtonLink href={href} variant="light" fluid>
        Book a visit
      </ButtonLink>
    </div>
  );
}
