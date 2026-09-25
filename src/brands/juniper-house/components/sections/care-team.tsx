import { team } from "../../content";
import { RevealGroup, RevealItem } from "../motion/reveal";
import { DoctorCard } from "../patterns/doctor-card";
import { SectionHeader } from "../ui/section-header";
import { TeamCarousel } from "./team-carousel";

/**
 * Four across on desktop, alternate cards dropped 40px so the row reads as
 * people rather than a grid of tiles. Two across on tablet. On phones a
 * swipeable row keeps each face large instead of shrinking four into view.
 */
export function CareTeam() {
  return (
    <section
      id="team"
      aria-labelledby="team-title"
      className="border-t border-linen-200 bg-linen-50 py-section"
    >
      <div className="flex flex-col gap-7 md:page-container md:gap-14">
        <SectionHeader
          eyebrow={team.eyebrow}
          title={team.title}
          intro={team.intro}
          titleId="team-title"
          className="px-6 md:px-0"
        />

        <TeamCarousel count={team.members.length} className="md:hidden">
          {team.members.map((doctor) => (
            <li key={doctor.name} className="w-[250px] shrink-0 snap-start">
              <DoctorCard doctor={doctor} />
            </li>
          ))}
        </TeamCarousel>

        <RevealGroup as="ul" stagger={0.12} className="hidden gap-x-6 gap-y-12 md:grid md:grid-cols-2 lg:grid-cols-4">
          {team.members.map((doctor, i) => (
            <RevealItem as="li" key={doctor.name} className={i % 2 === 1 ? "lg:pt-10" : undefined}>
              <DoctorCard doctor={doctor} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
