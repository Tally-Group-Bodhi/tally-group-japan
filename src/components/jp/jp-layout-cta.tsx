"use client";

import { usePathname } from "next/navigation";
import { JPCtaSection } from "@/components/jp/cta-section";

export function JPLayoutCta() {
  const pathname = usePathname();

  if (pathname === "/jp/contact") {
    return null;
  }

  return <JPCtaSection />;
}
