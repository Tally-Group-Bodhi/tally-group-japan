"use client";

import { motion } from "framer-motion";

const partners = [
  "Volterra",
  "Brightline",
  "Kindred Energy",
  "Northwind",
  "Apex Power",
  "Solis Retail",
  "Cinder & Co",
  "Meridian",
  "Stratus Energy",
  "Helio",
  "Ember Utility",
  "Greenpoint",
  "Lumen",
  "Pulse Energy",
  "Orbit Power",
  "Vantage",
  "Coast & Current",
  "Forge Energy",
  "Atlas Retail",
  "Riverline",
];

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
          className="mt-[48px] lg:mt-[64px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border-t border-l border-stroke1 max-w-[1280px] mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {partners.map((name) => (
            <div
              key={name}
              className="border-r border-b border-stroke1 h-[96px] lg:h-[112px] flex items-center justify-center px-4"
            >
              <span className="text-[14px] lg:text-[15px] font-semibold text-fg2/50 whitespace-nowrap tracking-[-0.01em] uppercase">
                {name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
