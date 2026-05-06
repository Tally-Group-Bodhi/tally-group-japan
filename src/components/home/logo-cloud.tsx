"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Partner = {
  src: string;
  alt: string;
  /** Multiplier on the base size cap; >1 for stacked / heavily-padded logos */
  scale?: number;
};

const partners: Partner[] = [
  { src: "1stenergy.png", alt: "1st Energy", scale: 1.25 },
  { src: "active.png", alt: "Active" },
  { src: "amber.jpeg", alt: "Amber", scale: 1.1 },
  { src: "ampolenergy.png", alt: "Ampol Energy" },
  { src: "cleanco.png", alt: "CleanCo Queensland" },
  { src: "contact.jpeg", alt: "Contact Energy", scale: 1.4 },
  { src: "csenergy.jpeg", alt: "CS Energy", scale: 1.4 },
  { src: "dodo.png", alt: "Dodo" },
  { src: "enel.jpeg", alt: "Enel" },
  { src: "energyaustralia.png", alt: "EnergyAustralia" },
  { src: "energylocals.png", alt: "Energy Locals" },
  { src: "engie.png", alt: "Engie", scale: 1.25 },
  { src: "frontier.png", alt: "Frontier Utilities" },
  { src: "gexaenergy.jpeg", alt: "Gexa Energy", scale: 1.2 },
  { src: "iberdrola.jpeg", alt: "Iberdrola" },
  { src: "jacana.png", alt: "Jacana Energy", scale: 1.4 },
  { src: "meridian.jpeg", alt: "Meridian", scale: 1.5 },
  { src: "momentum.png", alt: "Momentum Energy", scale: 1.2 },
  { src: "nextbusinessenergy.png", alt: "Next Business Energy", scale: 1.4 },
  { src: "nexteraenergy.png", alt: "NextEra Energy", scale: 1.4 },
  { src: "pacificblue.png", alt: "Pacific Blue" },
  { src: "rakuten.jpeg", alt: "Rakuten", scale: 1.3 },
  { src: "santanna.jpeg", alt: "Santanna Energy Services", scale: 1.2 },
  { src: "smartestenergy.png", alt: "Smartest Energy" },
  { src: "snowyhydro.png", alt: "Snowy Hydro" },
];

const BASE_MAX_H = 64;
const BASE_MAX_W = 180;

export function LogoCloud() {
  return (
    <section className="py-[64px] lg:py-[80px] border-b border-stroke1">
      <div className="max-w-[1600px] mx-auto px-8">
        <motion.h2
          className="text-center text-[28px] sm:text-[36px] lg:text-[44px] font-bold leading-[1.15] tracking-[-0.02em] text-navy"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          110+ retailers use the Tally platform
        </motion.h2>

        <motion.div
          className="mt-[48px] lg:mt-[64px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-[24px] gap-y-[32px] max-w-[1280px] mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {partners.map((p) => {
            const scale = p.scale ?? 1;
            return (
              <div
                key={p.alt}
                className="h-[112px] lg:h-[128px] flex items-center justify-center px-4"
              >
                <Image
                  src={`/logos/clients/${p.src}`}
                  alt={p.alt}
                  width={200}
                  height={80}
                  className="w-auto h-auto object-contain"
                  style={{
                    maxHeight: `${BASE_MAX_H * scale}px`,
                    maxWidth: `${BASE_MAX_W * scale}px`,
                  }}
                  loading="lazy"
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
