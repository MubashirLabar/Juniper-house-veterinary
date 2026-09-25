import type { Metadata } from "next";
import { jetbrainsMono } from "@/brands/juniper-house/fonts";
import { BuildNotes } from "@/brands/juniper-house/components/style-guide/build-notes";
import { Buttons } from "@/brands/juniper-house/components/style-guide/buttons";
import { Colors } from "@/brands/juniper-house/components/style-guide/colors";
import { KeyComponents } from "@/brands/juniper-house/components/style-guide/components";
import { GuideHeader } from "@/brands/juniper-house/components/style-guide/guide-header";
import { SpaceAndShape } from "@/brands/juniper-house/components/style-guide/space-and-shape";
import { Typography } from "@/brands/juniper-house/components/style-guide/typography";

export const metadata: Metadata = {
  title: "Style guide",
  description: "Color, type, spacing, shape, buttons and key components for Juniper House Veterinary.",
};

export default function JuniperHouseStylePage() {
  return (
    <main className={`${jetbrainsMono.variable} page-container flex flex-col gap-20 py-12 md:gap-24 md:py-24`}>
      <GuideHeader />
      <Colors />
      <Typography />
      <SpaceAndShape />
      <Buttons />
      <KeyComponents />
      <BuildNotes />
    </main>
  );
}
