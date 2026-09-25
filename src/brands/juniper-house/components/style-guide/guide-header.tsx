import Link from "next/link";
import { links } from "../../content";
import { Icon } from "../ui/icons";
import { Wordmark } from "../ui/logo";
import { Eyebrow } from "../ui/section-header";

const contents = [
  { label: "Color", href: "#color" },
  { label: "Type", href: "#type" },
  { label: "Spacing", href: "#spacing" },
  { label: "Shape", href: "#shape" },
  { label: "Buttons", href: "#buttons" },
  { label: "Components", href: "#components" },
];

export function GuideHeader() {
  return (
    <header className="flex flex-col gap-10 border-b border-hairline pb-12">
      <nav aria-label="Style guide" className="flex flex-wrap items-center justify-between gap-4">
        <Link
          href={links.home}
          className="inline-flex items-center gap-2 text-[15px] font-semibold text-terracotta-ink transition-colors hovered:text-terracotta-deep"
        >
          <Icon name="arrow" size={18} strokeWidth={1.8} className="rotate-180" />
          Back to the site
        </Link>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-moss">
          {contents.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors hovered:text-terracotta-ink">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-x-6">
        <div className="flex flex-col gap-4 lg:col-span-5">
          <Eyebrow>Style sheet · v1</Eyebrow>
          <h1 className="serif text-[44px] leading-[1.02] md:text-[64px]">Unhurried, beautiful care.</h1>
          <p className="text-intro text-moss">
            Boutique hospitality, not a clinic. Warm linen grounds, deep juniper for trust, terracotta used
            sparingly, and arches borrowed from the 1920s house itself.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
          <div className="flex h-40 items-center justify-center rounded-card border border-linen-300 bg-linen-50 md:h-[200px]">
            <Wordmark />
          </div>
          <div className="flex h-40 items-center justify-center rounded-card bg-juniper md:h-[200px]">
            <Wordmark tone="dark" />
          </div>
        </div>
      </div>
    </header>
  );
}
