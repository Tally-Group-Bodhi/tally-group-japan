"use client";

import { MarketingContactLink } from "@/components/marketing/marketing-contact-link";

interface ProductCTAProps {
  productName: string;
}

export function ProductCTA({ productName }: ProductCTAProps) {
  return (
    <section className="border-t bg-tally-gray-light py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-lg font-semibold text-tally-navy">
          Discover what <span className="text-tally-green">{productName}</span> can do for your
          business?
        </p>
        <MarketingContactLink className="bg-tally-green hover:bg-tally-green-dark text-white">
          Request a demo
        </MarketingContactLink>
      </div>
    </section>
  );
}
