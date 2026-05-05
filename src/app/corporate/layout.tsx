import type { Metadata } from "next";
import { CorporateLayoutShell } from "@/components/layout/corporate-layout-shell";

export const metadata: Metadata = {
  title: {
    default: "Tally Group | Global customer engagement and management solutions",
    template: "%s | Tally Group",
  },
  description:
    "Tally Group is a global customer engagement and management solutions company, serving energy retailers, utilities, and energy transition services providers.",
};

export default function CorporateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CorporateLayoutShell>{children}</CorporateLayoutShell>;
}
