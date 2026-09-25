import { cn } from "@/lib/cn";
import type { Service } from "../../content";
import { Icon } from "../ui/icons";

type ServiceItemProps = {
  service: Service;
  className?: string;
};

/**
 * A hairline-topped service. On phones it becomes a compact list row
 * (icon beside text, shorter copy); from `md` it stacks as a column.
 */
export function ServiceItem({ service, className }: ServiceItemProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-[40px_1fr] gap-x-1 border-t border-hairline py-[18px]",
        "md:flex md:flex-col md:gap-3.5 md:pt-7 md:pb-0",
        className,
      )}
    >
      <Icon name={service.icon} strokeWidth={1.4} className="size-[26px] text-terracotta-ink md:size-8" />
      <div className="flex flex-col gap-1 md:gap-3.5">
        <h3 className="serif text-h3 font-medium-serif md:text-[28px] md:leading-[1.2]">{service.title}</h3>
        <p className="text-body text-moss">
          <span className="md:hidden">{service.short}</span>
          <span className="hidden md:inline">{service.body}</span>
        </p>
      </div>
    </div>
  );
}
