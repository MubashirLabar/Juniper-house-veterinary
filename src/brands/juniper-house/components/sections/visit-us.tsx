import { cn } from "@/lib/cn";
import { contact, emergency, hours, visitUs } from "../../content";
import { buttonClass } from "../ui/button";
import { Icon } from "../ui/icons";
import { Eyebrow } from "../ui/section-header";
import { InlineLink } from "../ui/text-link";

/**
 * Where, when and how to reach us. On phones, contact becomes three large
 * buttons (call, text, email) since that is what a phone is for.
 */
export function VisitUs({ className }: { className?: string }) {
  return (
    <div id="visit" className={cn("flex flex-col gap-[22px] md:gap-8", className)}>
      <div className="flex flex-col gap-[22px] md:gap-3.5">
        <Eyebrow>{visitUs.eyebrow}</Eyebrow>
        <h2 className="serif text-h2">{visitUs.title}</h2>
      </div>

      <div className="flex flex-col gap-4 text-[15px] leading-normal md:gap-[18px] md:text-base">
        <div className="flex gap-3.5">
          <Icon name="pin" className="mt-px hidden size-[22px] shrink-0 text-terracotta-ink md:block" />
          <p>
            {contact.street}
            <span className="hidden md:inline">, {contact.area}</span>
            <span className="md:hidden">, </span>
            <span className="md:block">
              {contact.city} ·{" "}
              <InlineLink href={contact.directionsHref} target="_blank" rel="noopener noreferrer">
                Directions
              </InlineLink>
            </span>
          </p>
        </div>

        <div className="flex gap-3.5 border-y border-hairline py-4 md:border-0 md:py-0">
          <Icon name="clock" className="mt-px hidden size-[22px] shrink-0 text-terracotta-ink md:block" />
          <dl className="grid grow grid-cols-[auto_1fr] gap-x-4 gap-y-1 md:gap-x-5">
            {hours.map((row) => (
              <div key={row.days} className="contents">
                <dt>{row.days}</dt>
                <dd className="text-right">{row.time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hidden gap-3.5 md:flex">
          <Icon name="phone" className="mt-px size-[22px] shrink-0 text-terracotta-ink" />
          <p>
            <a href={contact.phoneHref} className="font-semibold text-juniper hovered:text-terracotta-ink">
              {contact.phone}
            </a>{" "}
            · call or text
            <br />
            <InlineLink href={contact.emailHref}>{contact.email}</InlineLink>
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 md:hidden">
          {[
            { label: "Call", href: contact.phoneHref },
            { label: "Text", href: contact.smsHref },
            { label: "Email", href: contact.emailHref },
          ].map((action) => (
            <a
              key={action.label}
              href={action.href}
              className={buttonClass({ variant: "secondary", size: "compact", className: "w-full" })}
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>

      <aside
        aria-label={emergency.title}
        className="flex gap-3 rounded-2xl border border-clay-400 bg-clay-50 p-[18px] md:gap-3.5 md:rounded-[18px] md:px-6 md:py-[22px]"
      >
        <Icon name="alert" strokeWidth={1.6} className="mt-0.5 size-5 shrink-0 text-terracotta-ink md:size-[22px]" />
        <div className="flex flex-col gap-1.5">
          <p className="hidden text-base font-semibold md:block">{emergency.title}</p>
          <p className="text-[14.5px] leading-[1.55] text-bark md:text-[15px]">
            <strong className="font-semibold text-juniper md:hidden">In an emergency: </strong>
            We’re not a 24-hour ER. After hours, call{" "}
            <InlineLink href={contact.phoneHref} className="font-semibold whitespace-nowrap">
              {contact.phone}
            </InlineLink>{" "}
            and we’ll connect you to our partner emergency hospital.
          </p>
        </div>
      </aside>
    </div>
  );
}
