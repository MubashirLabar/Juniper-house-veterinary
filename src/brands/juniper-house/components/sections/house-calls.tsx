import { houseCalls, images, links } from "../../content";
import { Reveal } from "../motion/reveal";
import { ArchImage } from "../ui/arch-image";
import { ButtonLink } from "../ui/button";
import { Icon } from "../ui/icons";
import { Eyebrow } from "../ui/section-header";

export function HouseCalls() {
  return (
    <section
      id="housecalls"
      aria-labelledby="housecalls-title"
      className="px-4 pt-2 pb-16 md:page-container md:pt-6 md:pb-section"
    >
      <Reveal className="flex flex-col overflow-hidden rounded-panel bg-clay-tint lg:grid lg:min-h-[540px] lg:grid-cols-12 lg:gap-x-6">
        <div className="flex flex-col gap-[18px] px-6 pt-9 pb-7 md:gap-7 md:p-14 lg:col-span-6 lg:justify-center lg:py-[72px] lg:pr-0 lg:pl-[72px]">
          <Eyebrow tone="deep" className="flex items-center gap-2.5">
            <Icon name="home" size={18} strokeWidth={1.6} className="hidden md:block" />
            {houseCalls.eyebrow}
          </Eyebrow>
          <h2 id="housecalls-title" className="serif text-feature">
            {houseCalls.title}
          </h2>
          <p className="max-w-[480px] text-base leading-[1.55] text-bark md:text-lg md:leading-[1.6]">
            <span className="md:hidden">{houseCalls.body.short}</span>
            <span className="hidden md:inline">{houseCalls.body.full}</span>
          </p>

          <ul aria-label="Areas we visit" className="hidden flex-wrap gap-2 md:flex">
            {houseCalls.areas.map((area) => (
              <li key={area} className="rounded-full border border-clay-400 px-3.5 py-2 text-sm text-bark">
                {area}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-[18px] sm:flex-row sm:items-center sm:gap-5">
            <ButtonLink href={links.book} fluid>
              Request a house call
            </ButtonLink>
            <p className="text-center text-[13px] text-bark-muted sm:text-left md:text-sm">
              {houseCalls.note}
              <span className="md:hidden"> · {houseCalls.areas.join(", ")}</span>
            </p>
          </div>
        </div>

        <div className="flex px-6 md:px-14 lg:col-span-5 lg:col-start-8 lg:px-0 lg:pt-14">
          <ArchImage
            {...images.houseCall}
            ground="clay"
            base="flush"
            position="40% 40%"
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="h-[220px] w-full sm:h-[320px] md:h-[380px] lg:h-auto"
          />
        </div>
      </Reveal>
    </section>
  );
}
