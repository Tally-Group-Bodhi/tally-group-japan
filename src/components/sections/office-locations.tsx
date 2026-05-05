"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Mail } from "lucide-react";

const regions = [
  {
    name: "Australia",
    offices: [
      {
        city: "MELBOURNE",
        address: "11-13 Cubitt St, Cremorne, VIC 3121",
        email: "enquiries@tally-group.com",
      },
      {
        city: "BRISBANE",
        address: "Level 1, North Tower, 527 Gregory Terrace, Fortitude Valley, Queensland 4006",
        email: "enquiries@tally-group.com",
      },
    ],
  },
  {
    name: "New Zealand",
    offices: [
      {
        city: "AUCKLAND",
        address: "Level 11, 56 Cawley Street, Ellerslie, Auckland, 1051",
        email: "enquiries@tally-group.com",
      },
      {
        city: "CHRISTCHURCH",
        address: "146A Lichfield Street, Christchurch Central City, Christchurch 8011",
        email: "enquiries@tally-group.com",
      },
    ],
  },
  {
    name: "North America",
    offices: [
      {
        city: "HOUSTON",
        address: "1450 Lake Robbins Drive, Suite 160, The Woodlands TX 77380",
        email: "retailenergy@tally-group.com",
      },
      {
        city: "ATLANTA",
        address: "5815 Windward Pkwy Suite 302, Alpharetta, GA 30005",
        email: "retailenergy@tally-group.com",
      },
    ],
  },
  {
    name: "Japan",
    offices: [
      {
        city: "TOKYO",
        address: "Marunouchi Nijubashi Building, 2nd Floor, 3-2-2 Marunouchi, Chiyoda-ku, Tokyo 100-0005",
        email: "energy.zn@tally-group.com",
      },
    ],
  },
  {
    name: "UAE",
    offices: [
      {
        city: "DUBAI",
        address: "Office 2402A, Tower A, Business Central Towers",
        email: "anuj.sahrawat@tally-group.com",
      },
    ],
  },
  {
    name: "India",
    offices: [
      {
        city: "HYDERABAD",
        address: "Block 1, Cyber Pearl, Hitech City, Madhapur, Hyderabad 500081, Telangana",
        email: "enquiries@tally-group.com",
      },
      {
        city: "BANGALORE",
        address: 'No.112, 2nd Floor, "B" Block, 7th Mile Hosur Rd, AKR Tech Park, Kudlu Gate Bengaluru, Karnataka 560068',
        email: "enquiries@tally-group.com",
      },
    ],
  },
];

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
          <Accordion defaultValue={[0]}>
            {regions.map((region) => (
              <AccordionItem key={region.name} value={region.name}>
                <AccordionTrigger className="text-lg font-semibold text-tally-navy">
                  {region.name}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {region.offices.map((office) => (
                      <div key={office.city} className="rounded-lg bg-tally-gray-light p-4">
                        <h4 className="mb-2 text-sm font-bold text-tally-navy">{office.city}</h4>
                        <div className="flex items-start gap-2 text-sm text-tally-gray">
                          <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                          <span>{office.address}</span>
                        </div>
                        <div className="mt-2 flex items-center gap-2 text-sm text-tally-gray">
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
