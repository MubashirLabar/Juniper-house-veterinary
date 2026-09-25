/**
 * Token manifest for the style guide. Values mirror theme.css, which is what
 * the page actually renders with; this file only describes them.
 */

export const palette = {
  juniper: "#23372F",
  juniper700: "#3A5046",
  linen: "#F3EDE3",
  linen50: "#FAF6EF",
  terracotta: "#B5654A",
  terracottaInk: "#9A4F37",
  terracottaDeep: "#7F3F2B",
  clay: "#D9957A",
  clayTint: "#EAD8CB",
  sand: "#D6CBB8",
  sage: "#C3CDB9",
  moss: "#45514A",
  mossMuted: "#56625B",
  hairline: "#CBBFAE",
} as const;

type ContrastPair = { label: string; fg: string; bg: string };

export type CoreColor = {
  name: string;
  token: string;
  hex: string;
  swatch: string;
  ink: string;
  role: string;
  pairs: ContrastPair[];
};

export const coreColors: CoreColor[] = [
  {
    name: "Juniper",
    token: "juniper",
    hex: palette.juniper,
    swatch: "bg-juniper",
    ink: "text-linen",
    role: "Primary dark. Headlines, body text, dark bands and the footer.",
    pairs: [{ label: "Linen on juniper", fg: palette.linen, bg: palette.juniper }],
  },
  {
    name: "Linen",
    token: "linen",
    hex: palette.linen,
    swatch: "bg-linen border-b border-linen-300",
    ink: "text-juniper",
    role: "The page ground — never pure white. Linen 50 raises bands and cards.",
    pairs: [{ label: "Juniper on linen", fg: palette.juniper, bg: palette.linen }],
  },
  {
    name: "Terracotta",
    token: "terracotta",
    hex: palette.terracotta,
    swatch: "bg-terracotta",
    ink: "text-juniper",
    role: "Accent for display type (24px+), icons, berries and rules. Never small text.",
    pairs: [{ label: "On linen", fg: palette.terracotta, bg: palette.linen }],
  },
  {
    name: "Terracotta Ink",
    token: "terracotta-ink",
    hex: palette.terracottaInk,
    swatch: "bg-terracotta-ink",
    ink: "text-linen-50",
    role: "The darker terracotta that carries buttons, links and eyebrows at small sizes.",
    pairs: [
      { label: "On linen", fg: palette.terracottaInk, bg: palette.linen },
      { label: "Linen 50 on it", fg: palette.linen50, bg: palette.terracottaInk },
    ],
  },
];

export const supportingColors = [
  { name: "Clay", token: "clay", hex: palette.clay, swatch: "bg-clay", note: "Accent on juniper", pair: { fg: palette.clay, bg: palette.juniper } },
  { name: "Clay tint", token: "clay-tint", hex: palette.clayTint, swatch: "bg-clay-tint", note: "House-call band" },
  { name: "Sand", token: "sand", hex: palette.sand, swatch: "bg-sand", note: "Photo ground" },
  { name: "Sage", token: "sage", hex: palette.sage, swatch: "bg-sage", note: "Photo ground" },
  { name: "Juniper 700", token: "juniper-700", hex: palette.juniper700, swatch: "bg-juniper-700", note: "Surfaces on dark" },
  { name: "Moss", token: "moss", hex: palette.moss, swatch: "bg-moss", note: "Body copy", pair: { fg: palette.moss, bg: palette.linen } },
  { name: "Moss muted", token: "moss-muted", hex: palette.mossMuted, swatch: "bg-moss-muted", note: "Captions", pair: { fg: palette.mossMuted, bg: palette.linen } },
  { name: "Hairline", token: "hairline", hex: palette.hairline, swatch: "bg-hairline", note: "Rules and borders" },
];

/** Target share of a typical screen, from the design. */
export const proportions = [
  { label: "Linen", share: 58, className: "bg-linen text-juniper" },
  { label: "Juniper", share: 24, className: "bg-juniper text-linen" },
  { label: "Sand · Sage · Clay", share: 12, className: "bg-sand text-juniper" },
  { label: "6%", share: 6, className: "bg-terracotta-ink text-linen-50" },
];

export type TypeStyle = {
  name: string;
  token: string;
  className: string;
  sample: string;
  emphasis?: string;
  desktop: number;
  mobile: number;
  spec: string;
};

export const typeScale: TypeStyle[] = [
  {
    name: "Display",
    token: "text-display",
    className: "serif text-display",
    sample: "A calmer ",
    emphasis: "kind of vet.",
    desktop: 76,
    mobile: 44,
    spec: "Newsreader 350 · 1.02",
  },
  {
    name: "Heading 1",
    token: "text-h1",
    className: "serif text-h1",
    sample: "Your pet’s doctor, by name.",
    desktop: 54,
    mobile: 34,
    spec: "Newsreader 350 · 1.08",
  },
  {
    name: "Heading 2",
    token: "text-h2",
    className: "serif text-h2",
    sample: "Here for the season?",
    desktop: 42,
    mobile: 30,
    spec: "Newsreader 350 · 1.1",
  },
  {
    name: "Heading 3",
    token: "text-h3",
    className: "serif text-h3 font-medium-serif",
    sample: "Senior & comfort care",
    desktop: 26,
    mobile: 21,
    spec: "Newsreader 450 · 1.2",
  },
  {
    name: "Quote",
    token: "text-quote",
    className: "serif text-quote italic",
    sample: "Now she barely notices.",
    desktop: 31,
    mobile: 26,
    spec: "Newsreader 350 italic · 1.3",
  },
  {
    name: "Body large",
    token: "text-lead",
    className: "text-lead text-moss",
    sample: "Appointments are never rushed, and your pet always sees their own doctor.",
    desktop: 20,
    mobile: 17,
    spec: "Instrument Sans 400 · 1.6",
  },
  {
    name: "Body",
    token: "text-body",
    className: "text-body text-moss",
    sample: "Exams, vaccines, nutrition and parasite prevention, planned around your pet’s age and way of life.",
    desktop: 16,
    mobile: 14.5,
    spec: "Instrument Sans 400 · 1.6",
  },
];

/** Additional display steps used once each on the page. */
export const displaySteps = [
  { token: "text-feature", use: "House-call headline", desktop: 60, mobile: 38 },
  { token: "text-title", use: "Booking headline", desktop: 48, mobile: 32 },
  { token: "text-statement", use: "Footer statement", desktop: 34, mobile: 26 },
  { token: "text-numeral", use: "Pillar figures", desktop: 64, mobile: 40 },
];

export const spacingSteps = [4, 8, 16, 24, 32, 48, 64, 104];
