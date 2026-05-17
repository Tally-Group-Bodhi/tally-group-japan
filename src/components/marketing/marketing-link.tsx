"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { useMarketingHref } from "@/contexts/marketing-region";

type MarketingLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export function MarketingLink({ href: path, ...props }: MarketingLinkProps) {
  const href = useMarketingHref();
  return <Link href={href(path)} {...props} />;
}
