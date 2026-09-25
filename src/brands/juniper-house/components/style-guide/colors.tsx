import { contrastLevel, contrastRatio } from "@/lib/contrast";
import { cn } from "@/lib/cn";
import { coreColors, palette, proportions, supportingColors } from "../../tokens";
import { GuideSection, Label, Mono } from "./primitives";

function Ratio({ fg, bg, label }: { fg: string; bg: string; label?: string }) {
  const ratio = contrastRatio(fg, bg);
  return (
    <span className="text-[12.5px] text-moss-muted">
      {label && <>{label} </>}
      <strong className="font-semibold text-juniper">{ratio.toFixed(1)}:1</strong> · {contrastLevel(ratio)}
    </span>
  );
}

export function Colors() {
  return (
    <GuideSection
      id="color"
      title="Color in use"
      aside="Contrast ratios are computed from the tokens, not typed in."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {coreColors.map((color) => (
          <article key={color.token} className="flex flex-col overflow-hidden rounded-[18px] border border-linen-300">
            <div className={cn("flex h-[120px] items-end p-[18px] md:h-[150px]", color.swatch, color.ink)}>
              <span className="serif text-[28px] font-normal">{color.name}</span>
            </div>
            <div className="flex grow flex-col gap-1.5 bg-linen-50 px-[18px] py-4">
              <Mono>
                {color.hex} · {color.token}
              </Mono>
              <p className="text-sm leading-normal text-moss">{color.role}</p>
              <div className="mt-auto flex flex-col gap-0.5 pt-2">
                {color.pairs.map((pair) => (
                  <Ratio key={pair.label} {...pair} />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
        {supportingColors.map((color) => (
          <div key={color.token} className="flex flex-col gap-2">
            <div className={cn("h-16 rounded-xl", color.swatch)} />
            <span className="text-[13px] font-semibold">{color.name}</span>
            <Mono className="text-moss-muted">{color.hex}</Mono>
            <span className="text-[12.5px] text-moss-muted">{color.note}</span>
            {color.pair && <Ratio fg={color.pair.fg} bg={color.pair.bg} />}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2.5">
        <Label>Proportion</Label>
        <div className="flex h-11 overflow-hidden rounded-full border border-linen-300">
          {proportions.map((part, i) => (
            <div
              key={part.label}
              style={{ flexGrow: part.share }}
              className={cn(
                "flex min-w-0 items-center overflow-hidden text-[13px] font-semibold whitespace-nowrap",
                i === proportions.length - 1 ? "justify-center" : "pl-3 md:pl-[18px]",
                part.className,
              )}
            >
              <span className="truncate">
                {part.label}
                {i < proportions.length - 1 && <span className="hidden sm:inline"> {part.share}%</span>}
              </span>
            </div>
          ))}
        </div>
        <p className="text-sm text-moss">
          Linen grounds every page; juniper carries trust in a few deep bands; terracotta is the single
          call to action, so it stays under a tenth of the screen. Terracotta itself ({palette.terracotta}) is{" "}
          {contrastRatio(palette.terracotta, palette.linen)}:1 on linen, which is why small text and buttons use Terracotta
          Ink instead.
        </p>
      </div>
    </GuideSection>
  );
}
