import Link from "next/link";
import { links, primaryNav } from "../../content";
import { ButtonLink } from "../ui/button";
import { Wordmark } from "../ui/logo";
import { MobileMenu } from "./mobile-menu";

/**
 * Sticky so “Book a visit” is never more than a glance away. The full nav
 * needs ~1100px, so it appears from `xl`; below that the header keeps the
 * primary action and moves everything else into the menu.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-linen-300 bg-linen/95 backdrop-blur-md supports-[backdrop-filter]:bg-linen/85">
      <div className="page-container flex h-(--header-h) items-center justify-between gap-3 pr-4 md:gap-6 md:pr-gutter">
        <Link href={links.top} aria-label="Juniper House Veterinary, back to top" className="rounded-sm">
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-9 xl:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-juniper transition-colors hovered:text-terracotta-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 md:gap-3 xl:gap-6">
          <Link
            href={links.register}
            className="hidden text-[15px] font-semibold text-juniper transition-colors hovered:text-terracotta-ink wide:inline"
          >
            Become a client
          </Link>
          <ButtonLink href={links.book} size="sm" className="md:h-[52px] md:px-[26px] md:text-base">
            {/* The narrowest phones (≤379px) can't fit the full label beside the wordmark. */}
            <span className="max-[379px]:hidden">Book a visit</span>
            <span className="min-[380px]:hidden">Book</span>
          </ButtonLink>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
