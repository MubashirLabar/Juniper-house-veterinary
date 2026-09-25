import Link from "next/link";
import { contact, footer, links } from "../../content";
import { RiseFromEdge } from "../motion/settle";
import { ButtonLink } from "../ui/button";
import { Eyebrow } from "../ui/section-header";

const footerLink = "text-[15px] text-sage-100 transition-colors hovered:text-clay";

export function SiteFooter() {
  return (
    <footer className="on-dark overflow-hidden bg-juniper text-linen">
      <div className="page-container flex flex-col gap-7 pt-14 md:gap-0 md:pt-20">
        <div className="grid gap-7 md:grid-cols-3 md:gap-x-6 md:gap-y-12 xl:grid-cols-12">
          <div className="flex flex-col gap-5 md:col-span-3 xl:col-span-5">
            <p className="serif max-w-[440px] text-statement">{footer.statement}</p>
            <div className="hidden flex-wrap gap-3.5 pt-2 md:flex">
              <ButtonLink href={links.book} variant="light">
                Book a visit
              </ButtonLink>
              <ButtonLink href={links.portal} variant="ghostLight">
                Client portal
              </ButtonLink>
            </div>
          </div>

          {/* Phones: one compact two-column list */}
          <ul className="grid grid-cols-2 gap-x-5 gap-y-3 md:hidden">
            {footer.mobileLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={footerLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Tablet and up: labelled columns */}
          {footer.columns.map((column, i) => (
            <nav
              key={column.title}
              aria-label={`Footer · ${column.title}`}
              className={`hidden flex-col gap-3.5 md:flex xl:col-span-2 ${i === 0 ? "xl:col-start-7" : ""}`}
            >
              <Eyebrow tone="clay" size="sm">
                {column.title}
              </Eyebrow>
              <ul className="flex flex-col gap-3.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={footerLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <address className="hidden flex-col gap-3.5 text-[15px] leading-normal text-sage-100 not-italic md:flex xl:col-span-2">
            <Eyebrow tone="clay" size="sm">
              Reach us
            </Eyebrow>
            <span>
              {contact.street}
              <br />
              {contact.city}
            </span>
            <a href={contact.phoneHref} className={footerLink}>
              {contact.phone}
            </a>
            <a href={contact.emailHref} className={footerLink}>
              {contact.email}
            </a>
          </address>
        </div>

        <div className="flex flex-col gap-2 border-t border-linen/16 pt-5 text-[12.5px] leading-normal text-sage-300 md:mt-16 md:flex-row md:justify-between md:gap-6 md:py-6 md:text-[13px]">
          <p>{footer.legal}</p>
          <p className="flex gap-5">
            <span className="hidden md:inline">{footer.disclaimer}</span>
            <Link href={links.styleGuide} className="underline underline-offset-4 transition-colors hovered:text-clay">
              Style guide
            </Link>
          </p>
        </div>

        <RiseFromEdge>
          <p
            aria-hidden="true"
            className="serif pt-2 text-[min(24.6vw,196px)] leading-[0.8] font-light tracking-[-0.04em] whitespace-nowrap text-juniper-800 md:pt-10 md:text-[min(13.6vw,196px)]"
          >
            <span className="block md:inline">Juniper </span>
            <span className="block md:inline">House</span>
          </p>
        </RiseFromEdge>
      </div>
    </footer>
  );
}
