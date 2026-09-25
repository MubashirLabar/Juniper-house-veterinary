import { displaySteps, typeScale } from "../../tokens";
import { Label, Mono } from "./primitives";

export function Typography() {
  return (
    <section
      id="type"
      aria-labelledby="type-title"
      className="grid gap-10 lg:grid-cols-12 lg:gap-x-6"
    >
      <div className="flex flex-col gap-5 lg:col-span-4">
        <h2 id="type-title" className="serif text-h2 lg:text-[40px]">
          Type
        </h2>
        <p className="text-base leading-[1.6] text-moss">
          <strong className="font-semibold text-juniper">Newsreader</strong> for headlines: a bookish serif with a warm
          italic, set light (300–450) and slightly tight. <strong className="font-semibold text-juniper">Instrument Sans</strong>{" "}
          for everything you read to act on. Both load through <Mono>next/font</Mono>.
        </p>
        <p className="text-base leading-[1.6] text-moss">
          Every size is fluid: it sits at the mobile value at 390px, the desktop value at 1440px, and moves
          smoothly in between — no jumps at tablet widths.
        </p>
        <div className="flex gap-4 pt-3">
          <div className="flex grow flex-col gap-1.5 rounded-[18px] border border-linen-300 bg-linen-50 p-5">
            <span className="serif text-[64px] leading-none">Aa</span>
            <span className="text-[13px] text-moss-muted">Newsreader 300–500</span>
          </div>
          <div className="flex grow flex-col gap-1.5 rounded-[18px] border border-linen-300 bg-linen-50 p-5">
            <span className="text-[60px] leading-[1.07] font-medium">Aa</span>
            <span className="text-[13px] text-moss-muted">Instrument Sans 400–600</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:col-span-7 lg:col-start-6">
        {typeScale.map((style) => (
          <div
            key={style.name}
            className="grid gap-x-4 gap-y-2 border-t border-hairline py-[18px] md:grid-cols-[150px_1fr_110px] md:items-baseline"
          >
            <div className="flex items-baseline justify-between gap-4 md:contents">
              <Label>{style.name}</Label>
              <Mono className="text-moss-muted md:order-last md:text-right">
                {style.desktop} / {style.mobile}
              </Mono>
            </div>
            <p className={style.className}>
              {style.sample}
              {style.emphasis && <em className="text-terracotta">{style.emphasis}</em>}
            </p>
          </div>
        ))}
        <div className="grid gap-x-4 gap-y-2 border-y border-hairline py-[18px] md:grid-cols-[150px_1fr_110px] md:items-baseline">
          <div className="flex items-baseline justify-between gap-4 md:contents">
            <Label>Eyebrow · small</Label>
            <Mono className="text-moss-muted md:order-last md:text-right">13 / 12</Mono>
          </div>
          <p className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
            <span className="eyebrow text-terracotta-ink">What a visit is like</span>
            <span className="text-sm text-moss-muted">Captions and meta, 14px</span>
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-6">
          <Label>Single-use display steps</Label>
          <ul className="grid gap-x-6 gap-y-2 text-sm text-moss sm:grid-cols-2">
            {displaySteps.map((step) => (
              <li key={step.token} className="flex justify-between gap-4 border-b border-linen-300 pb-2">
                <span>
                  <Mono className="text-juniper">{step.token}</Mono> · {step.use}
                </span>
                <Mono className="text-moss-muted">
                  {step.desktop} / {step.mobile}
                </Mono>
              </li>
            ))}
          </ul>
          <p className="text-[13px] text-moss-muted">Sizes shown desktop / mobile, in px. Line height tightens as size grows.</p>
        </div>
      </div>
    </section>
  );
}
