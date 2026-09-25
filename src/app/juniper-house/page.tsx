import type { Metadata } from "next";
import { Approach } from "@/brands/juniper-house/components/sections/approach";
import { BookVisit } from "@/brands/juniper-house/components/sections/book-visit";
import { CareTeam } from "@/brands/juniper-house/components/sections/care-team";
import { ClientVoices } from "@/brands/juniper-house/components/sections/client-voices";
import { Hero } from "@/brands/juniper-house/components/sections/hero";
import { HouseCalls } from "@/brands/juniper-house/components/sections/house-calls";
import { PlansSeasonal } from "@/brands/juniper-house/components/sections/plans-seasonal";
import { Services } from "@/brands/juniper-house/components/sections/services";
import { SiteFooter } from "@/brands/juniper-house/components/sections/site-footer";
import { SiteHeader } from "@/brands/juniper-house/components/sections/site-header";
import { UtilityBar } from "@/brands/juniper-house/components/sections/utility-bar";
import { VisitSteps } from "@/brands/juniper-house/components/sections/visit-steps";

// Served at both / and /juniper-house; the root is the canonical address.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/**
 * The page follows an anxious owner's questions in order: is this the kind of
 * care I want (hero, approach), what will it be like (visit), can you help
 * with this (services, house calls), who will we see (team), do others trust
 * you (voices), and how do I start (plans, booking, where and when).
 */
export default function JuniperHousePage() {
  return (
    <>
      <UtilityBar />
      <SiteHeader />
      <main>
        <Hero />
        <Approach />
        <VisitSteps />
        <Services />
        <HouseCalls />
        <CareTeam />
        <ClientVoices />
        <PlansSeasonal />
        <BookVisit />
      </main>
      <SiteFooter />
    </>
  );
}
