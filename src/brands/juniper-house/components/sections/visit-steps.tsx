import { images, links, visitSteps } from "../../content";
import { Reveal, RevealGroup, RevealItem } from "../motion/reveal";
import { ArchImage } from "../ui/arch-image";
import { ButtonLink } from "../ui/button";
import { Eyebrow } from "../ui/section-header";

/**
 * Phones read header → photo → steps. From `lg` the photo moves to the left
 * columns and the header and steps center beside it — one DOM order, placed
 * with grid rows (1fr spacers above and below) rather than duplicated.
 */
export function VisitSteps() {
  return (
    <section aria-labelledby="visit-steps-title" className="on-dark bg-juniper py-section text-linen">
      <div className="page-container grid gap-8 lg:grid-cols-12 lg:grid-rows-[1fr_auto_auto_1fr] lg:gap-x-6 lg:gap-y-0">
        <Reveal className="flex flex-col gap-3.5 md:gap-5 lg:col-span-6 lg:col-start-7 lg:row-start-2 lg:pb-10">
          <Eyebrow tone="clay">{visitSteps.eyebrow}</Eyebrow>
          <h2 id="visit-steps-title" className="serif text-h1 text-linen">
            {visitSteps.title}
          </h2>
        </Reveal>

        <ArchImage
          {...images.courtyard}
          ground="juniper"
          position="center 40%"
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="h-[220px] sm:h-[320px] md:h-[420px] lg:col-span-5 lg:col-start-1 lg:row-span-4 lg:row-start-1 lg:h-[640px] lg:self-center"
        />

        <div className="flex flex-col gap-8 md:gap-10 lg:col-span-6 lg:col-start-7 lg:row-start-3">
          <RevealGroup as="ol" stagger={0.12}>
            {visitSteps.steps.map((step, i) => (
              <RevealItem
                as="li"
                key={step.title}
                className="grid grid-cols-[44px_1fr] border-t border-linen/18 py-[18px] last:border-b md:grid-cols-[72px_1fr] md:gap-x-2 md:py-5"
              >
                <span aria-hidden="true" className="serif text-h3 text-clay italic">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1 md:gap-1.5">
                  <h3 className="serif text-h3 font-medium-serif">{step.title}</h3>
                  <p className="text-[15px] leading-[1.55] text-sage-200 md:text-base md:leading-[1.6]">
                    <span className="md:hidden">{step.short}</span>
                    <span className="hidden md:inline">{step.body}</span>
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal className="flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={links.book} variant="light" fluid>
              Book a visit
            </ButtonLink>
            <div className="hidden sm:block">
              <ButtonLink href={links.register} variant="ghostLight">
                Become a client
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
