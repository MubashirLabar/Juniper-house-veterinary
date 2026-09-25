/**
 * Juniper House — page content.
 *
 * Copy lives here, layout lives in components. Where the mobile artboard uses
 * a deliberately shorter line, it is stored as `short` and shown below `md`.
 */

import type { IconName } from "./components/ui/icons";

export const contact = {
  phone: "(941) 555-0142",
  phoneHref: "tel:9415550142",
  smsHref: "sms:9415550142",
  email: "care@juniperhouse.vet",
  emailHref: "mailto:care@juniperhouse.vet",
  street: "Osprey Avenue",
  area: "near Southside Village",
  city: "Sarasota, FL",
  directionsHref: "https://maps.google.com/?q=Osprey+Avenue+Southside+Village+Sarasota+FL",
} as const;

export const hours = [
  { days: "Mon–Fri", time: "7:30am – 6:00pm" },
  { days: "Saturday", time: "8:00am – 1:00pm" },
  { days: "House calls", time: "By appointment" },
] as const;

/** In-page destinations. Actions without a real page yet point at booking. */
export const links = {
  home: "/",
  styleGuide: "/juniper-house/style",
  top: "#top",
  approach: "#approach",
  services: "#services",
  houseCalls: "#housecalls",
  team: "#team",
  visit: "#visit",
  plans: "#plans",
  seasonal: "#seasonal",
  book: "#book",
  register: "#book",
  portal: "#portal",
} as const;

export const primaryNav = [
  { label: "Our approach", href: links.approach },
  { label: "Services", href: links.services },
  { label: "House calls", href: links.houseCalls },
  { label: "Care team", href: links.team },
  { label: "Visit us", href: links.visit },
] as const;

export const hero = {
  eyebrow: { full: "Boutique veterinary care in Sarasota", short: "Boutique vet care · Sarasota" },
  headline: { lead: "Veterinary care, the way you’d want it for ", emphasis: "family." },
  intro: {
    full: "At Juniper House, appointments are never rushed, your pet always sees their own doctor, and you can text your care team directly. Veterinary medicine the way it should feel: calm, personal and exceptionally good.",
    short:
      "Appointments are never rushed, your pet always sees their own doctor, and you can text your care team directly.",
  },
  trust: ["AAHA-accredited", "Fear Free Certified Practice", "45-minute visits"],
  trustShort: ["AAHA-accredited", "Fear Free Certified", "45-minute visits"],
  message: {
    initials: "EA",
    name: "Dr. Alvarez",
    context: "Your care team · text",
    time: "2:14 pm",
    body: "Winston’s awake and already asking about breakfast. Surgery went beautifully — photo below.",
    short: "Winston’s awake and already asking about breakfast.",
  },
} as const;

type Pillar = {
  figure: { value: string; unit: string } | { icon: IconName };
  title: string;
  titleShort: string;
  body: string;
  short: string;
};

export const approach = {
  eyebrow: "The Juniper House way",
  title: "Time, calm, and a doctor who knows your pet by name.",
  intro:
    "We built the practice around what owners told us they missed: enough time to ask questions, and someone who remembers the answers.",
  pillars: [
    {
      figure: { value: "45", unit: "min" },
      title: "Unhurried appointments",
      titleShort: "Unhurried visits",
      body: "Standard, not an upgrade. Enough time to examine at your pet’s pace, explain what we find, and answer every question.",
      short: "Standard, never an upgrade.",
    },
    {
      figure: { value: "1", unit: "doctor" },
      title: "Your own doctor",
      titleShort: "Your own doctor",
      body: "Every pet has a named primary vet who knows their history, their quirks, and which treats actually work.",
      short: "Who knows your pet’s history and quirks.",
    },
    {
      figure: { icon: "message" },
      title: "A direct text line",
      titleShort: "A direct text line",
      body: "Text your pet’s care team directly — a question, a photo, a small worry. No phone trees, no starting from scratch.",
      short: "To your pet’s care team. No phone trees.",
    },
    {
      figure: { icon: "doorway" },
      title: "No crowded waiting room",
      titleShort: "No waiting room",
      body: "Arrive through the garden entrance to a private room of your own, with Fear Free–certified, low-stress handling throughout.",
      short: "A garden entrance and a private room.",
    },
  ] satisfies Pillar[],
};

export const visitSteps = {
  eyebrow: "What a visit is like",
  title: "From the garden gate to the follow-up text.",
  steps: [
    {
      title: "Book in a minute",
      body: "Online, by phone, or by text. Tell us who’s coming and what’s on your mind.",
      short: "Online, by phone, or by text.",
    },
    {
      title: "Arrive through the garden",
      body: "Walk through the courtyard and straight into a private arrival room. No lobby, no chorus of barking.",
      short: "Straight into a private room. No chorus of barking.",
    },
    {
      title: "Forty-five unhurried minutes",
      body: "Your doctor examines at your pet’s pace, explains everything in plain language, and makes the plan with you.",
      short: "At your pet’s pace, explained in plain language.",
    },
    {
      title: "We stay in touch",
      body: "Results, reminders and recovery updates come by text, often with a photo.",
      short: "Results and recovery updates by text, often with a photo.",
    },
  ],
};

export type Service = { icon: IconName; title: string; body: string; short: string };

export const services = {
  eyebrow: "Services",
  title: "Complete care, under one roof — or under yours.",
  intro:
    "From first vaccines to gentle senior care, your pet’s doctor coordinates everything, and explains it all along the way.",
  items: [
    {
      icon: "leaf",
      title: "Wellness & preventive care",
      body: "Exams, vaccines, nutrition and parasite prevention, planned around your pet’s age and way of life.",
      short: "Exams, vaccines, nutrition, parasite prevention.",
    },
    {
      icon: "diagnostics",
      title: "Advanced diagnostics",
      body: "An in-house lab, digital radiography and ultrasound, so answers don’t mean a trip somewhere new.",
      short: "In-house lab, digital radiography, ultrasound.",
    },
    {
      icon: "tooth",
      title: "Surgery & dentistry",
      body: "Soft-tissue surgery, dental cleanings and extractions — and a photo by text when your pet wakes up.",
      short: "Soft-tissue surgery, cleanings and extractions.",
    },
    {
      icon: "heart",
      title: "Senior & comfort care",
      body: "Thoughtful management of chronic conditions, and gentle end-of-life care at home when the time comes.",
      short: "Chronic care, and gentle end-of-life care at home.",
    },
    {
      icon: "moon",
      title: "Recovery suites",
      body: "A few quiet, private rooms for post-surgical stays, with updates by text and photo.",
      short: "Quiet private rooms, updates by text and photo.",
    },
    {
      icon: "calendar",
      title: "Juniper Care Plans",
      body: "Annual wellness memberships with unlimited exams and a direct line to your doctor.",
      short: "Unlimited exams and a direct line to your doctor.",
    },
  ] satisfies Service[],
};

export const houseCalls = {
  eyebrow: "House calls",
  title: "For the ones who don’t love the car.",
  body: {
    full: "We’ll come to you. Exams, vaccines and follow-ups at home, and gentle comfort care when it matters most.",
    short: "We’ll come to you, from Bird Key to Lakewood Ranch. Exams, vaccines and follow-ups at home.",
  },
  areas: ["Bird Key", "St. Armands", "Longboat Key", "Siesta Key", "Lakewood Ranch"],
  note: "By appointment",
};

export type Doctor = {
  name: string;
  role: string;
  bio: string;
  image: string;
  ground: "sand" | "sage" | "blush";
};

export const team = {
  eyebrow: "Your care team",
  title: "Your pet’s doctor, by name.",
  intro: "Every pet has a named primary vet, and a care team who knows you before you walk in.",
  members: [
    {
      name: "Dr. Elena Alvarez",
      role: "Founder · Medical Director",
      bio: "Twenty years in practice. Lives with two rescue greyhounds, Biscuit and Olive.",
      image: "/images/juniper-house/team-elena-alvarez.jpg",
      ground: "sand",
    },
    {
      name: "Dr. Marcus Hale",
      role: "Surgery & Dentistry",
      bio: "Calm hands, clear explanations. Owns a very opinionated parrot.",
      image: "/images/juniper-house/team-marcus-hale.jpg",
      ground: "sage",
    },
    {
      name: "Dr. Priya Raman",
      role: "Feline & Senior Care",
      bio: "Loves the patients other people call “difficult”.",
      image: "/images/juniper-house/team-priya-raman.jpg",
      ground: "blush",
    },
    {
      name: "Claire Whitfield",
      role: "Client Care Director",
      bio: "The person who knows your pet’s name before you walk in.",
      image: "/images/juniper-house/team-claire-whitfield.jpg",
      ground: "sand",
    },
  ] satisfies Doctor[],
};

export type Testimonial = { quote: string; name: string; place: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "Dr. Alvarez texted me a photo of Winston waking up from surgery before I’d even reached my car. That’s Juniper House.",
    name: "Margaret L.",
    place: "Bird Key",
  },
  {
    quote: "Our cat used to hide for a day after every vet visit. Now she barely notices.",
    name: "James & Anh T.",
    place: "Longboat Key",
  },
];

export const credentials = [
  "AAHA-accredited",
  "Fear Free Certified Practice",
  "Caring for Sarasota since 2021",
];

export const plans = {
  eyebrow: "Juniper Care Plans",
  title: "One membership. Unlimited exams. Your doctor, a text away.",
  titleShort: "Unlimited exams. Your doctor, a text away.",
  body: "Annual wellness plans for dogs and cats, with preventive care built in. We’ll help you choose the right one at your first visit.",
};

export const seasonal = {
  eyebrow: "Here for the season?",
  title: "October to April, we’ve got you. The rest of the year, too.",
  titleShort: "Here October to April?",
  body: "We coordinate records and care plans with your vet up north, so nothing gets lost between homes.",
  short: "We coordinate records and care plans with your vet up north.",
  cta: "How seasonal care works",
};

export const booking = {
  eyebrow: "Book a visit",
  title: "Who’s coming to see us?",
  pets: ["Dog", "Cat", "Someone else"],
  visitTypes: ["Wellness exam", "Something’s not right", "Follow-up", "House call"],
  cta: "See available times",
};

export const visitUs = {
  eyebrow: "Visit us",
  title: "A 1920s house near Southside Village.",
};

export const emergency = {
  bar: "Not a 24-hour ER. After hours, call",
  barTail: "to reach our partner emergency hospital.",
  title: "In an emergency",
};

export const footer = {
  statement: "Unhurried, personal care for the animals who run your household.",
  columns: [
    {
      title: "Care",
      links: [
        { label: "Services", href: links.services },
        { label: "House calls", href: links.houseCalls },
        { label: "Juniper Care Plans", href: links.plans },
        { label: "Care team", href: links.team },
      ],
    },
    {
      title: "Clients",
      links: [
        { label: "Become a client", href: links.register },
        { label: "Client portal", href: links.portal },
        { label: "Seasonal residents", href: links.seasonal },
        { label: "Hours & directions", href: links.visit },
      ],
    },
  ],
  mobileLinks: [
    { label: "Services", href: links.services },
    { label: "Become a client", href: links.register },
    { label: "House calls", href: links.houseCalls },
    { label: "Client portal", href: links.portal },
    { label: "Care team", href: links.team },
    { label: "Seasonal residents", href: links.seasonal },
  ],
  legal: "© 2026 Juniper House Veterinary · AAHA-accredited · Fear Free Certified Practice",
  disclaimer: "Not a 24-hour emergency hospital",
};

export const images = {
  hero: {
    src: "/images/juniper-house/hero-greyhound-sofa.jpg",
    alt: "A sighthound curled up on a sofa while its owner strokes its head",
  },
  cat: { src: "/images/juniper-house/cat-windowsill.jpg", alt: "A cat asleep on a sunlit windowsill" },
  winston: {
    src: "/images/juniper-house/winston-recovery.jpg",
    alt: "Winston resting in his bed after surgery",
  },
  courtyard: {
    src: "/images/juniper-house/courtyard-arch.jpg",
    alt: "A leafy courtyard garden framed by a stone arch",
  },
  houseCall: {
    src: "/images/juniper-house/senior-dog-house-call.jpg",
    alt: "A senior dog resting its head in its owner’s hand at home",
  },
} as const;
