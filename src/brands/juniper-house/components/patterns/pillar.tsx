import type { approach } from "../../content";
import { Icon } from "../ui/icons";

type PillarProps = {
  pillar: (typeof approach.pillars)[number];
};

/** One of the four promises: a figure (numeral or icon), a title and a line. */
export function Pillar({ pillar }: PillarProps) {
  const { figure } = pillar;
  return (
    <div className="flex flex-col gap-2 border-t border-juniper pt-4 md:gap-4 md:pt-7">
      {"value" in figure ? (
        <p className="serif text-numeral font-light text-terracotta">
          {figure.value}
          <span className="ml-1 text-base text-moss-muted italic md:ml-1.5 md:text-[22px]">{figure.unit}</span>
        </p>
      ) : (
        <div className="flex h-10 items-end md:h-16">
          <Icon name={figure.icon} strokeWidth={1.2} className="size-9 text-terracotta md:size-[52px]" />
        </div>
      )}
      <h3 className="serif text-[20px] leading-[1.2] font-medium-serif md:text-h3">
        <span className="md:hidden">{pillar.titleShort}</span>
        <span className="hidden md:inline">{pillar.title}</span>
      </h3>
      <p className="text-[14.5px] leading-normal text-moss md:text-base md:leading-[1.6]">
        <span className="md:hidden">{pillar.short}</span>
        <span className="hidden md:inline">{pillar.body}</span>
      </p>
    </div>
  );
}
