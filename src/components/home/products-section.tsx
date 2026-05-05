"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const challenges = [
  {
    title: "Billing complexity is growing. Legacy systems can\u2019t keep up.",
    description:
      "Use a modern platform to manage billing, settlements, five-minute data and customer accounts in one place \u2014 with compliance built in, not bolted on.",
    icon: "receipt_long",
  },
  {
    title: "Every second on the phone costs money. Agent efficiency is critical.",
    description:
      "Give agents a real-time cockpit with every account fact in a single dense panel, AI summaries before they say hello, and hardship flags they can\u2019t miss.",
    icon: "support_agent",
  },
  {
    title: "Customer acquisition is competitive. You need to convert faster.",
    description:
      "Streamline the quote-to-sign flow across door-knock, digital and broker channels \u2014 with live tariff pricing and instant NMI validation.",
    icon: "trending_up",
  },
];

const benefits = [
  "Substantially reduce handle time and calls to your contact centre",
  "Enable unprecedented visibility across all retail operations",
  "Optimize billing, settlements and compliance workflows",
  "Minimize your app footprint with one integrated platform",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export function ProductsSection() {
  return (
    <section id="products" className="py-[96px] lg:py-[120px]">
      <div className="max-w-[1600px] mx-auto px-8">
        <motion.div
          className="max-w-[720px] mb-[24px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.02em] text-navy">
            If you run an energy retail business, our platform is built for you
          </h2>
          <p className="mt-[16px] text-lg leading-[1.6] text-fg2 max-w-[64ch]">
            We enable retailers, contact centres, sales teams and operations
            staff to bill, serve and acquire customers easily and cost
            effectively.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-[24px] text-[15px] font-semibold text-navy hover:text-turquoise transition-colors"
          >
            Get started with Tally{" "}
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] mt-[48px]">
          {challenges.map((item, i) => (
            <motion.div
              key={item.title}
              className="group bg-white border border-stroke1 rounded-2xl p-[32px] flex flex-col gap-[16px] transition-all hover:border-navy/30 hover:shadow-[0_8px_32px_rgba(44,54,93,0.08)]"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
            >
              <div className="w-12 h-12 rounded-xl bg-[#F0F9FF] border border-navy/[0.08] grid place-items-center text-navy">
                <span className="material-symbols-outlined text-[24px]">
                  {item.icon}
                </span>
              </div>
              <h3 className="text-[18px] font-semibold leading-[1.35] tracking-[-0.01em] text-fg1">
                {item.title}
              </h3>
              <p className="text-[15px] leading-[1.6] text-fg2 m-0">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-[80px] lg:mt-[96px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold leading-[1.15] tracking-[-0.02em] text-navy mb-[28px]">
            Tally will help you:
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-[48px] gap-y-[16px]">
            {benefits.map((b) => (
              <li
                key={b}
                className="flex items-start gap-[14px] text-[16px] leading-[1.55] text-fg1"
              >
                <span className="material-symbols-outlined text-turquoise text-[22px] mt-[2px] shrink-0">
                  check_circle
                </span>
                {b}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
