"use client";

import { ButtonLink } from "@/components/ui/button";
import { useMarketingHref } from "@/contexts/marketing-region";
import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<typeof ButtonLink>;

export function MarketingContactLink(props: Omit<ButtonLinkProps, "href">) {
  const href = useMarketingHref();
  return <ButtonLink href={href("/contact")} {...props} />;
}
