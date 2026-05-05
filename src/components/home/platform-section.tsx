"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const solutions = [
  {
    stage: "Customer Self-Service",
    products: "Tally+ \u00b7 Tally Digital",
    description:
      "Billing, usage, plan switching and solar exports \u2014 a modern customer portal and white-labelled signup flow.",
    href: "#",
    icon: "person",
    gradient: "from-turquoise/10 to-turquoise/5",
  },
  {
    stage: "Agent Desktop",
    products: "Glass Vision \u00b7 Tally CRM",
    description:
      "Real-time cockpit for call centres. Every account fact in a single dense panel, with AI-powered summaries.",
    href: "#",
    icon: "desktop_windows",
    gradient: "from-navy/10 to-navy/5",
  },
  {
    stage: "Sales & Acquisition",
    products: "Tally S&A \u00b7 Field Sales",
    description:
      "A field-ready quote-to-sign flow for door-knockers, retail partners and broker channels with live pricing.",
    href: "#",
    icon: "handshake",
    gradient: "from-[#8B5CF6]/10 to-[#8B5CF6]/5",
  },
  {
    stage: "Operations & Billing",
    products: "Orion \u00b7 Acquire \u00b7 Settlements",
    description:
      "Reconciliation, settlements, partner onboarding and embedded-network operations \u2014 the engine room.",
    href: "#",
    icon: "settings",
    gradient: "from-[#F59E0B]/10 to-[#F59E0B]/5",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export function PlatformSection() {
  return (
    <section
      id="platform"
      className="py-[96px] lg:py-[120px] border-t border-stroke1"
      style={{
        background:
          "linear-gradient(180deg, #F9F9FB 0%, #FFFFFF 60%, #F9F9FB 100%)",
      }}
    >
      <div className="max-w-[1600px] mx-auto px-8">
        <motion.div
          className="max-w-[720px] mx-auto text-center mb-[56px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.02em] text-navy">
            Experience the platform built{" "}
            <em className="not-italic text-turquoise">for</em> energy retailers,{" "}
            <em className="not-italic text-turquoise">by</em> energy retailers
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
          {solutions.map((s, i) => (
            <motion.div
              key={s.stage}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
            >
              <Link
                href={s.href}
                className={`group block h-full bg-gradient-to-b ${s.gradient} border border-stroke1 rounded-2xl p-[28px] transition-all hover:border-navy/30 hover:shadow-[0_8px_32px_rgba(44,54,93,0.08)]`}
              >
                <div className="w-11 h-11 rounded-xl bg-white border border-stroke1 grid place-items-center text-navy mb-[20px]">
                  <span className="material-symbols-outlined text-[22px]">
                    {s.icon}
                  </span>
                </div>
                <h3 className="text-[17px] font-semibold text-fg1 leading-[1.3] tracking-[-0.01em]">
                  {s.stage}
                </h3>
                <p className="text-[13px] font-medium text-turquoise mt-[4px] mb-[12px]">
                  {s.products}
                </p>
                <p className="text-[14px] leading-[1.55] text-fg2 m-0">
                  {s.description}
                </p>
                <span className="mt-[20px] inline-flex items-center gap-1 text-[13px] font-semibold text-navy group-hover:text-turquoise transition-colors">
                  Learn more{" "}
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
