import type { Metadata, Viewport } from "next";
import { MotionProvider } from "@/brands/juniper-house/components/motion/motion-provider";
import { instrumentSans, newsreader } from "@/brands/juniper-house/fonts";

export const metadata: Metadata = {
  title: {
    default: "Juniper House Veterinary · Sarasota",
    template: "%s · Juniper House Veterinary",
  },
  description:
    "A boutique veterinary clinic in Sarasota. Unhurried 45-minute appointments, your own doctor, and a direct text line to your pet's care team.",
};

export const viewport: Viewport = {
  themeColor: "#23372F",
};

export default function JuniperHouseLayout({ children }: LayoutProps<"/juniper-house">) {
  return (
    <div data-brand="juniper-house" className={`${newsreader.variable} ${instrumentSans.variable} min-h-dvh`}>
      <MotionProvider>{children}</MotionProvider>
    </div>
  );
}
