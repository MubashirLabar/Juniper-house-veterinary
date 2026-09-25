import { approach } from "../../content";
import { RevealGroup, RevealItem } from "../motion/reveal";
import { Pillar } from "../patterns/pillar";
import { SectionHeader } from "../ui/section-header";

export function Approach() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-title"
      className="border-y border-linen-200 bg-linen-50 py-section"
    >
      <div className="page-container flex flex-col gap-9 md:gap-16">
        <SectionHeader
          eyebrow={approach.eyebrow}
          title={approach.title}
          intro={approach.intro}
          titleId="approach-title"
        />
        <RevealGroup className="grid grid-cols-2 gap-x-5 gap-y-8 md:gap-x-6 md:gap-y-12 lg:grid-cols-4 lg:gap-6">
          {approach.pillars.map((pillar) => (
            <RevealItem key={pillar.title}>
              <Pillar pillar={pillar} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
