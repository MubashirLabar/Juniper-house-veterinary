import Image from "next/image";
import { Fragment } from "react";
import { hero, images, links } from "../../content";
import { CareMessage } from "../patterns/care-message";
import { ArchImage } from "../ui/arch-image";
import { ButtonLink } from "../ui/button";
import { Icon } from "../ui/icons";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="page-container grid gap-y-[22px] pt-8 pb-14 md:gap-y-8 md:pt-12 md:pb-20 lg:grid-cols-12 lg:items-center lg:gap-x-6 xl:pt-16 xl:pb-24"
    >
      <div className="flex flex-col gap-[22px] md:gap-8 lg:col-span-6 xl:pr-6">
        <p className="eyebrow intro-rise flex items-center gap-2.5 text-moss-muted md:gap-3.5">
          <span aria-hidden="true" className="h-px w-6 bg-terracotta md:w-8" />
          <span className="md:hidden">{hero.eyebrow.short}</span>
          <span className="hidden md:inline">{hero.eyebrow.full}</span>
        </p>

        <h1 id="hero-title" className="serif intro-rise max-w-[16ch] text-display [--delay:90ms] lg:max-w-none">
          {hero.headline.lead}
          <em className="font-book text-terracotta">{hero.headline.emphasis}</em>
        </h1>

        <p className="intro-rise max-w-[520px] text-lead text-moss [--delay:200ms]">
          <span className="md:hidden">{hero.intro.short}</span>
          <span className="hidden md:inline">{hero.intro.full}</span>
        </p>

        <div className="intro-rise flex flex-col gap-2.5 [--delay:300ms] sm:flex-row sm:gap-4">
          <ButtonLink href={links.book} size="lg" fluid>
            Book a visit
          </ButtonLink>
          <ButtonLink href={links.houseCalls} variant="secondary" size="lg" fluid>
            Request a house call
          </ButtonLink>
        </div>

        <TrustRow className="intro-rise hidden [--delay:420ms] md:flex" />
      </div>

      <HeroVisual />

      <TrustRowCompact className="intro-rise [--delay:500ms] md:hidden" />
    </section>
  );
}

/**
 * On load the arch settles first, the cat portrait follows, and the doctor's
 * text arrives last — the way a message does.
 *
 * Desktop: an arch, a round cat portrait and a text from the doctor, composed
 * inside a 588×620 frame (six columns at 1440). Positions are percentages of
 * that frame, so the composition holds its proportions at every width.
 * Phones get a simpler arch with a shorter message overlapping its edge.
 */
function HeroVisual() {
  return (
    <div className="relative mt-2.5 h-[360px] sm:h-[440px] md:mx-auto md:mt-0 md:aspect-[588/620] md:h-auto md:w-full md:max-w-[588px] lg:col-span-6 lg:mr-0">
      <ArchImage
        {...images.hero}
        preload
        settle={false}
        position="center 60%"
        sizes="(min-width: 768px) 450px, 100vw"
        className="intro-arch absolute inset-0 [--delay:150ms] md:inset-auto md:top-0 md:right-0 md:h-[98.4%] md:w-[76.5%]"
      />

      <div className="intro-pop absolute bottom-[5.8%] left-[2%] hidden aspect-square [--delay:650ms] w-[36%] overflow-hidden rounded-full border-8 border-linen bg-sage md:block lg:max-xl:hidden">
        <Image src={images.cat.src} alt={images.cat.alt} fill sizes="212px" className="object-cover" />
      </div>

      <CareMessage
        size="sm"
        initials={hero.message.initials}
        name={hero.message.name}
        time={hero.message.time}
        className="intro-pop absolute top-[150px] -left-2 w-[232px] [--delay:900ms] sm:top-[200px] md:hidden"
      >
        {hero.message.short}
      </CareMessage>
      <div className="intro-pop absolute top-[15.5%] left-[6.8%] hidden w-[min(300px,62%)] [--delay:1000ms] md:block">
        <CareMessage
          initials={hero.message.initials}
          name={hero.message.name}
          context={hero.message.context}
          time={hero.message.time}
          photo={images.winston}
        >
          {hero.message.body}
        </CareMessage>
      </div>
    </div>
  );
}

function TrustRow({ className }: { className?: string }) {
  return (
    <ul className={`flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-sm text-moss-muted ${className}`}>
      {hero.trust.map((item, i) => (
        <Fragment key={item}>
          {/* The third item returns at `wide`, where the text column fits all three on one line. */}
          {i > 0 && (
            <li aria-hidden="true" className={`h-4 w-px bg-hairline ${i === 2 ? "lg:max-wide:hidden" : ""}`} />
          )}
          <li className={`flex items-center gap-2 ${i === 2 ? "lg:max-wide:hidden" : ""}`}>
            {i === 0 && <Icon name="shield" size={18} strokeWidth={1.6} className="text-terracotta-ink" />}
            {item}
          </li>
        </Fragment>
      ))}
    </ul>
  );
}

function TrustRowCompact({ className }: { className?: string }) {
  const [first, second, third] = hero.trustShort;
  return (
    <div className={`flex flex-col items-center gap-1.5 pt-1 text-[13px] text-moss-muted ${className}`}>
      <p className="flex gap-3.5">
        <span>{first}</span>
        <span aria-hidden="true">·</span>
        <span>{second}</span>
      </p>
      <p>{third}</p>
    </div>
  );
}
