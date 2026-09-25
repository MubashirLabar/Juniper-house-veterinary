import { Label, Mono } from "./primitives";

const snippet = `@theme {
  --color-juniper: #23372f;        --color-linen: #f3ede3;
  --color-terracotta: #b5654a;     --color-terracotta-ink: #9a4f37;
  --text-display: clamp(2.75rem, calc(2.75rem + 32 * (100vw - 390px) / 1050), 4.75rem);
  --spacing-gutter: clamp(1.5rem, calc(1.5rem + 96 * (100vw - 390px) / 1050), 7.5rem);
  --radius-panel: clamp(1.5rem, …, 1.75rem);
}
@custom-variant hovered { @media (hover: hover) { &:hover { @slot } } &[data-state="hover"] { @slot } }`;

export function BuildNotes() {
  return (
    <section
      aria-labelledby="build-title"
      className="grid gap-6 rounded-card border border-linen-300 bg-linen-50 p-6 md:p-8 lg:grid-cols-[260px_1fr] lg:gap-8"
    >
      <div className="flex flex-col gap-2">
        <Label>
          <span id="build-title">Build notes</span>
        </Label>
        <p className="text-[15px] leading-[1.55] text-moss">
          Next.js App Router + Tailwind CSS v4. Tokens live in <Mono>brands/juniper-house/theme.css</Mono> as{" "}
          <Mono>@theme</Mono> variables, so every class on this page — <Mono>bg-juniper</Mono>,{" "}
          <Mono>text-h1</Mono>, <Mono>py-section</Mono> — is generated from them.
        </p>
      </div>
      <pre className="overflow-x-auto font-mono text-[12.5px] leading-[1.7] whitespace-pre text-juniper">
        {snippet}
      </pre>
    </section>
  );
}
