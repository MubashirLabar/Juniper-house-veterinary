import { Fragment } from "react";
import { cn } from "@/lib/cn";
import { credentials, testimonials } from "../../content";
import { Reveal, RevealGroup, RevealItem } from "../motion/reveal";
import { Testimonial } from "../patterns/testimonial";
import { SprigDivider } from "../ui/logo";
import { Eyebrow } from "../ui/section-header";

export function ClientVoices() {
  return (
    <section
      aria-labelledby="voices-title"
      className="page-container flex flex-col gap-6 pt-section pb-14 md:gap-14 md:pb-20"
    >
      <div className="flex items-center gap-5">
        <Eyebrow>
          <span id="voices-title">Client voices</span>
        </Eyebrow>
        <span aria-hidden="true" className="hidden h-px grow bg-hairline md:block" />
      </div>

      <RevealGroup stagger={0.15} className="grid md:grid-cols-2 md:gap-x-6">
        {testimonials.map((testimonial, i) => (
          <RevealItem key={testimonial.name}>
            <Testimonial
              testimonial={testimonial}
              className={cn(
                "h-full",
                i === 0 && "md:pr-8",
                i > 0 && "mt-6 border-t border-hairline pt-6 md:mt-0 md:border-t-0 md:border-l md:pt-0 md:pl-12",
              )}
            />
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal>
        <ul
          aria-label="Credentials"
          className="hidden flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-semibold tracking-[0.12em] text-moss-muted uppercase md:flex"
        >
          {credentials.map((item, i) => (
            <Fragment key={item}>
              {i > 0 && (
                <li aria-hidden="true">
                  <SprigDivider />
                </li>
              )}
              <li>{item}</li>
            </Fragment>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
