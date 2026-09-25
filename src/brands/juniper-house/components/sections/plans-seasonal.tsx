import { links, plans, seasonal } from "../../content";
import { Reveal } from "../motion/reveal";
import { ButtonLink } from "../ui/button";
import { Eyebrow } from "../ui/section-header";
import { TextLink } from "../ui/text-link";

export function PlansSeasonal() {
  return (
    <section
      aria-label="Care plans and seasonal residents"
      className="grid gap-3 px-4 pb-16 md:page-container md:gap-6 lg:grid-cols-2 md:pt-6 md:pb-section"
    >
      <Reveal>
        <div
          id="plans"
          className="on-dark flex h-full flex-col gap-4 rounded-panel bg-juniper px-6 py-8 text-linen md:min-h-[340px] md:gap-[22px] md:p-10 lg:p-14"
        >
          <Eyebrow tone="clay">{plans.eyebrow}</Eyebrow>
          <h2 className="serif text-h2">
            <span className="md:hidden">{plans.titleShort}</span>
            <span className="hidden md:inline">{plans.title}</span>
          </h2>
          <p className="hidden max-w-[460px] text-[16.5px] leading-[1.6] text-sage-200 md:block">{plans.body}</p>
          <div className="mt-1.5 md:mt-auto">
            <ButtonLink href={links.register} variant="light" fluid>
              Become a client
            </ButtonLink>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <div
          id="seasonal"
          className="flex h-full flex-col gap-2.5 rounded-panel bg-sand-100 px-6 py-7 md:min-h-[340px] md:gap-[22px] md:p-10 lg:p-14"
        >
          <Eyebrow tone="deep" className="hidden md:block">
            {seasonal.eyebrow}
          </Eyebrow>
          <h2 className="serif text-2xl leading-[1.2] font-normal md:text-h2 md:font-book">
            <span className="md:hidden">{seasonal.titleShort}</span>
            <span className="hidden md:inline">{seasonal.title}</span>
          </h2>
          <p className="max-w-[460px] text-[15px] leading-[1.55] text-moss md:text-[16.5px] md:leading-[1.6]">
            <span className="md:hidden">{seasonal.short}</span>
            <span className="hidden md:inline">{seasonal.body}</span>
          </p>
          <div className="mt-auto hidden md:block">
            <TextLink href={links.visit}>{seasonal.cta}</TextLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
