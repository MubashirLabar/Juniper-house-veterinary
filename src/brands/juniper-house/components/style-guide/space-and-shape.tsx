import { images } from "../../content";
import { spacingSteps } from "../../tokens";
import { ArchImage } from "../ui/arch-image";
import { SprigDivider } from "../ui/logo";
import { Label, Mono } from "./primitives";

function GridDiagram({ columns, className }: { columns: number; className?: string }) {
  return (
    <div
      className={`grid h-16 gap-x-2 rounded-[10px] border border-linen-300 bg-linen-50 ${className}`}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      aria-hidden="true"
    >
      {Array.from({ length: columns }, (_, i) => (
        <div key={i} className="bg-terracotta/18" />
      ))}
    </div>
  );
}

export function SpaceAndShape() {
  return (
    <section aria-label="Spacing, grid and shape" className="grid gap-16 lg:grid-cols-2 lg:gap-6">
      <div id="spacing" className="flex flex-col gap-6">
        <h2 className="serif text-h2 lg:text-[40px]">Spacing &amp; grid</h2>
        <div className="flex flex-wrap items-end gap-3.5">
          {spacingSteps.map((step) => (
            <div key={step} className="flex flex-col items-center gap-2">
              <div className="bg-terracotta" style={{ width: step, height: step }} />
              <Mono>{step}</Mono>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2.5">
          <Label>Desktop · 1440</Label>
          <GridDiagram columns={12} className="px-6 md:px-10" />
          <p className="text-sm text-moss">12 columns · 24 gutter · 120 margin · 1200 content · sections 104</p>
        </div>
        <div className="flex flex-col gap-2.5">
          <Label>Mobile · 390</Label>
          <GridDiagram columns={4} className="w-[200px] px-3.5" />
          <p className="text-sm text-moss">4 columns · 16 gutter · 24 margin · sections 64 · touch targets ≥ 44</p>
        </div>
        <p className="text-sm text-moss">
          Margin (<Mono>gutter</Mono>) and section rhythm (<Mono>section</Mono>) are fluid tokens, so a 1024px
          tablet gets 82px margins and 88px section spacing rather than either extreme.
        </p>
      </div>

      <div id="shape" className="flex flex-col gap-6">
        <h2 className="serif text-h2 lg:text-[40px]">Shape language</h2>
        <div className="grid gap-6 sm:grid-cols-3 sm:gap-4">
          <div className="flex flex-col gap-2.5">
            <ArchImage
              {...images.courtyard}
              alt="Arch-framed photograph example"
              position="center 40%"
              sizes="220px"
              className="h-[170px] sm:h-[200px]"
            />
            <span className="text-sm font-semibold">The arch</span>
            <span className="text-[13.5px] leading-normal text-moss-muted">
              Every photograph. Taken from the house’s Mediterranean Revival doorways.
            </span>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="h-32 rounded-panel bg-juniper sm:h-[200px]" />
            <span className="text-sm font-semibold">Soft panel · 28 / 24</span>
            <span className="text-[13.5px] leading-normal text-moss-muted">
              Feature cards and bands. Fields 14, cards 20, pills fully round.
            </span>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="flex h-24 flex-col justify-center gap-[22px] px-2 sm:h-[200px]" aria-hidden="true">
              <div className="h-px bg-juniper" />
              <div className="flex items-center gap-2.5">
                <div className="h-px grow bg-hairline" />
                <SprigDivider className="size-[18px]" />
                <div className="h-px grow bg-hairline" />
              </div>
              <div className="h-px bg-hairline" />
            </div>
            <span className="text-sm font-semibold">Hairlines &amp; the sprig</span>
            <span className="text-[13.5px] leading-normal text-moss-muted">
              1px rules divide, not boxes. A shadow appears only on a floating message.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
