"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { officeRegions } from "@/data/office-regions";
import { OfficeAddressBlock } from "@/components/sections/office-address-block";
import { Mail } from "lucide-react";

export function OfficeLocations() {
  return (
    <section id="offices" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-tally-navy sm:text-4xl">
            Offices and support locations
          </h2>
          <p className="mt-4 text-lg text-tally-gray">Find us here</p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion defaultValue={[officeRegions[0].id]}>
            {officeRegions.map((region) => (
              <AccordionItem key={region.id} value={region.id}>
                <AccordionTrigger className="text-lg font-semibold text-tally-navy">
                  {region.name}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {region.offices.map((office) => (
                      <div key={office.city} className="rounded-lg bg-tally-gray-light p-4">
                        <OfficeAddressBlock office={office} />
                        <div className="mt-4 flex items-center gap-2 text-sm text-tally-gray">
                          <Mail className="h-4 w-4 shrink-0" />
                          <a
                            href={`mailto:${office.email}`}
                            className="hover:text-tally-green transition-colors"
                          >
                            {office.email}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
