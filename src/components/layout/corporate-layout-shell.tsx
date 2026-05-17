"use client";

import { usePathname } from "next/navigation";
import { Header } from "./header";
import { Footer } from "./footer";

export function CorporateLayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isUSSection = pathname.startsWith("/corporate/us");

  if (isUSSection) return <>{children}</>;

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
