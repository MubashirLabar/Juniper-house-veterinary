import Link from "next/link";
import { contact, emergency, links } from "../../content";
import { Icon } from "../ui/icons";

/** Emergency guidance first — the one thing an anxious owner may need at once. */
export function UtilityBar() {
  return (
    <div className="on-dark bg-juniper text-sage-100">
      <div className="page-container flex min-h-10 items-start justify-between gap-6 py-2.5 text-[12.5px] leading-[1.45] md:items-center md:py-2 md:text-[13.5px]">
        <p className="flex items-start gap-2 md:items-center md:gap-2.5">
          <Icon name="alert" strokeWidth={1.7} className="mt-0.5 size-3.5 shrink-0 text-clay md:mt-0 md:size-4" />
          <span>
            {emergency.bar}{" "}
            <a href={contact.phoneHref} className="whitespace-nowrap text-linen underline underline-offset-4">
              {contact.phone}
            </a>
            <span className="hidden md:inline"> {emergency.barTail}</span>
            <span className="md:hidden">.</span>
          </span>
        </p>
        <div className="hidden shrink-0 items-center gap-7 md:flex">
          <span className="hidden lg:inline">Mon–Fri 7:30–6 · Sat 8–1</span>
          <Link href={links.portal} className="font-semibold text-linen transition-colors hovered:text-clay">
            Client portal
          </Link>
        </div>
      </div>
    </div>
  );
}
