"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    name: "Tally Acquire",
    src: "/logos/TallyAcquire.svg",
    href: "/products/acquire",
    width: 165,
    height: 35,
  },
  {
    name: "Tally Billing",
    src: "/logos/TallyBilling.svg",
    href: "/products/billing",
    width: 165,
    height: 35,
  },
  {
    name: "Tally Customer",
    src: "/logos/TallyCustomer.svg",
    href: "/products/customer",
    width: 165,
    height: 35,
  },
  {
    name: "Tally Digital",
    src: "/logos/TallyDigital.svg",
    href: "/products/digital",
    width: 165,
    height: 35,
  },
];

export function TallyPlusSection() {
  return (
    <section className="py-[64px] lg:py-[96px]">
      <div className="max-w-[1600px] mx-auto px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-[48px] lg:gap-[80px] items-start"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <div className="flex items-center gap-[14px] mb-[20px]">
              <Image
                src="/logos/TallyPlus.svg"
                alt="Tally+"
                width={205}
                height={75}
                priority={false}
                className="h-[48px] sm:h-[60px] lg:h-[72px] w-auto"
              />
              <span className="sr-only">Tally+</span>
            </div>

            <h2 className="text-[28px] sm:text-[36px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-navy max-w-[20ch]">
              Our suite of software platforms.
            </h2>

            <div className="mt-[24px] flex flex-col gap-[16px] text-[16px] lg:text-[17px] leading-[1.6] text-fg2 max-w-[58ch]">
              <p>
                Purpose-built for energy retailers, Tally+ brings together
                modular Pods and Modules that span the full customer engagement
                and management lifecycle — from acquisition all the way through
                to cash.
              </p>
              <p>
                Mix and match the capabilities you need today, then layer in
                more as your business grows. Every component is energy-native,
                compliance-ready and connected by a single source of truth — so
                you spend less time stitching systems together and more time
                serving customers.
              </p>
            </div>

            <Link
              href="/#platform"
              className="inline-flex items-center gap-[6px] mt-[28px] text-[15px] font-semibold text-navy hover:text-turquoise transition-colors"
            >
              Explore the platform{" "}
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
          </div>

          <ul className="grid grid-cols-2 gap-[16px] lg:gap-[20px] lg:pt-[12px]">
            {products.map((p, i) => (
              <motion.li
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              >
                <Link
                  href={p.href}
                  aria-label={p.name}
                  className="group flex items-center justify-center bg-bg2 rounded-2xl aspect-[16/9] px-[24px] py-[28px] transition-all hover:bg-white hover:shadow-[0_8px_32px_rgba(44,54,93,0.08)] hover:-translate-y-[2px]"
                >
                  <Image
                    src={p.src}
                    alt={p.name}
                    width={p.width}
                    height={p.height}
                    className="w-auto h-[28px] sm:h-[32px] lg:h-[36px] max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
