import type { Metadata } from "next";
import { USHeader } from "@/components/layout/us-header";
import { USFooter } from "@/components/layout/us-footer";

export const metadata: Metadata = {
  title: {
    default: "Tally+ United States | Tally Group",
    template: "%s | Tally+ United States",
  },
  description:
    "Global customer engagement and management solutions for energy retailers, utilities, and energy transition services providers.",
};

export default function USLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <USHeader />
      <main className="flex-1">{children}</main>
      <USFooter />
    </>
  );
}
