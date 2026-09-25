import { services } from "../../content";
import { RevealGroup, RevealItem } from "../motion/reveal";
import { ServiceItem } from "../patterns/service-item";
import { SectionHeader } from "../ui/section-header";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="pt-section pb-10 md:pb-[88px]">
      <div className="page-container flex flex-col gap-7 md:gap-14">
        <SectionHeader
          eyebrow={services.eyebrow}
          title={services.title}
          intro={services.intro}
          titleId="services-title"
        />
        <RevealGroup
          stagger={0.07}
          className="grid border-b border-hairline md:grid-cols-2 md:gap-x-10 md:gap-y-14 md:border-b-0 lg:grid-cols-3 lg:gap-x-12"
        >
          {services.items.map((service) => (
            <RevealItem key={service.title}>
              <ServiceItem service={service} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
