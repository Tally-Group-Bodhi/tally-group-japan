"use client";

import { usePathname } from "next/navigation";
import { CorporateHeader } from "./corporate-header";
import { CorporateFooter } from "./corporate-footer";

export function CorporateLayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isUSSection = pathname.startsWith("/corporate/us");

  if (isUSSection) return <>{children}</>;

  return (
    <>
      <CorporateHeader />
      <div className="flex-1">{children}</div>
      <CorporateFooter />
    </>
  );
}
