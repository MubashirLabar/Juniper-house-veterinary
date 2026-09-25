import type { ReactNode } from "react";
import { ButtonLink, type ButtonVariant } from "../ui/button";
import { TextLink } from "../ui/text-link";
import { GuideSection, Label } from "./primitives";

const rows: Array<{ name: string; variant: ButtonVariant; label: string; href: string; onDark?: boolean }> = [
  { name: "Primary", variant: "primary", label: "Book a visit", href: "/juniper-house#book" },
  { name: "Secondary", variant: "secondary", label: "Request a house call", href: "/juniper-house#housecalls" },
  { name: "On juniper", variant: "light", label: "Become a client", href: "/juniper-house#book", onDark: true },
  { name: "Ghost on juniper", variant: "ghostLight", label: "Client portal", href: "/juniper-house#portal", onDark: true },
];

const states = [
  { label: "Default", state: undefined },
  { label: "Hover", state: "hover" },
  { label: "Pressed", state: "pressed" },
] as const;

function Stage({ onDark, children }: { onDark?: boolean; children: ReactNode }) {
  return onDark ? (
    <div className="on-dark w-max rounded-full bg-juniper p-2.5">{children}</div>
  ) : (
    <div className="w-max">{children}</div>
  );
}

/** One specimen with a caption that only shows when the table collapses below xl. */
function Specimen({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <Label className="xl:hidden">{label}</Label>
      {children}
    </div>
  );
}

/**
 * Each specimen is the real Button component with its state pinned via
 * `data-state`, so what you see here is exactly what ships. A table from
 * `xl`; narrower screens stack each variant's three states.
 */
export function Buttons() {
  return (
    <GuideSection id="buttons" title="Buttons & links" aside="Hover and pressed shown with the live components.">
      <div className="flex flex-col gap-10 xl:grid xl:grid-cols-[160px_1fr_1fr_1fr] xl:items-center xl:gap-x-6 xl:gap-y-5">
        <span className="hidden xl:block" />
        {states.map((s) => (
          <Label key={s.label} className="hidden xl:block">
            {s.label}
          </Label>
        ))}

        {rows.map((row) => (
          <div key={row.name} className="flex flex-col gap-4 xl:contents">
            <span className="text-[15px] font-semibold">{row.name}</span>
            <div className="flex flex-wrap gap-x-4 gap-y-5 xl:contents">
              {states.map((s) => (
                <Specimen key={s.label} label={s.label}>
                  <Stage onDark={row.onDark}>
                    <ButtonLink href={row.href} variant={row.variant} state={s.state}>
                      {row.label}
                    </ButtonLink>
                  </Stage>
                </Specimen>
              ))}
            </div>
          </div>
        ))}

        <div className="flex flex-col gap-4 xl:contents">
          <span className="text-[15px] font-semibold">Text link</span>
          <div className="flex flex-wrap gap-x-6 gap-y-5 xl:contents">
            <Specimen label="Default">
              <div>
                <TextLink href="/juniper-house#seasonal">How seasonal care works</TextLink>
              </div>
            </Specimen>
            <Specimen label="Hover">
              <div>
                <TextLink href="/juniper-house#seasonal" state="hover">
                  How seasonal care works
                </TextLink>
              </div>
            </Specimen>
            <p className="text-sm text-moss-muted">Arrow eases 4px forward on hover.</p>
          </div>
        </div>
      </div>
      <p className="text-sm text-moss">
        Pills, 600 weight, no icons on primary. 52px tall by default, 56–58 in the hero and booking; 44 in the
        phone header. One terracotta button per view — everything else steps back to outline or text.
      </p>
    </GuideSection>
  );
}
