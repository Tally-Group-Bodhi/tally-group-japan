"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  US_MARKETING_BASE,
  useMarketingBasePath,
  useMarketingHref,
} from "@/contexts/marketing-region";

const rotatingWords = ["Billing", "Sales", "Operations", "Compliance"];

const stats = [
  {
    label: "Average customer tenure",
    value: "10+",
    suffix: "years",
  },
  {
    label: "Meter points served globally",
    value: "5M+",
    suffix: "",
  },
  {
    label: "Annual billing",
    value: "$15B+",
    suffix: "",
  },
];

export function HeroSection() {
  const href = useMarketingHref();
  const isUS = useMarketingBasePath() === US_MARKETING_BASE;
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Full-viewport hero with inset background image */}
      <section className="relative min-h-[100dvh] flex flex-col bg-white pt-[84px] px-4 sm:px-6 pb-4 sm:pb-6">
        {/* Inset image container with thick white border effect */}
        <div className="absolute inset-0 mt-[84px] mx-4 sm:mx-6 mb-4 sm:mb-6 rounded-[20px] overflow-hidden">
          <Image
            src="/hero-bg.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            unoptimized
          />
          {/* Gradient: clear at top, dark at bottom so image stays vivid up top */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
        </div>

        {/* Content anchored to bottom */}
        <div className="relative z-10 max-w-[1600px] mx-auto px-8 text-center mt-auto pt-[32px] pb-[48px] sm:pb-[64px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {isUS ? (
              <>
                <p className="text-[18px] sm:text-[22px] lg:text-[24px] font-medium leading-[1.2] tracking-[0.08em] text-white uppercase">
                  Move faster. Serve smarter.
                </p>

                <h1 className="mt-[20px] text-[40px] sm:text-[52px] lg:text-[68px] font-light leading-[1.15] tracking-[-0.03em] text-white">
                  <span className="inline-flex items-baseline justify-center gap-[0.25em] flex-wrap">
                    <span>The</span>
                    <motion.span
                      layout
                      className="relative inline-flex h-[1.15em] overflow-hidden -mb-[0.1em] align-baseline"
                      transition={{ layout: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }}
                    >
                      <AnimatePresence mode="popLayout">
                        <motion.span
                          key={rotatingWords[wordIndex]}
                          className="block text-turquoise leading-[1.15] whitespace-nowrap"
                          initial={{ opacity: 0, y: "100%" }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: "-100%" }}
                          transition={{
                            y: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                            opacity: { duration: 0.28, ease: [0.4, 0, 0.2, 1] },
                          }}
                        >
                          {rotatingWords[wordIndex]}
                        </motion.span>
                      </AnimatePresence>
                    </motion.span>
                    <motion.span
                      layout
                      transition={{ layout: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }}
                    >
                      platform
                    </motion.span>
                  </span>
                  <br />
                  for leading American utilities
                </h1>

                <p className="mt-[20px] text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.6] text-white/80 max-w-[62ch] mx-auto">
                  Cut costs, capture opportunity, and empower your people. The
                  Tally+ operations platform delivers AI-powered end-to-end
                  utility retail solutions in one modular ecosystem.
                </p>
              </>
            ) : (
              <>
                <h1 className="text-[40px] sm:text-[52px] lg:text-[68px] font-light leading-[1.15] tracking-[-0.03em] text-white">
                  <span className="inline-flex items-baseline justify-center gap-[0.25em] flex-wrap">
                    <span>The</span>
                    <motion.span
                      layout
                      className="relative inline-flex h-[1.15em] overflow-hidden -mb-[0.1em] align-baseline"
                      transition={{ layout: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }}
                    >
                      <AnimatePresence mode="popLayout">
                        <motion.span
                          key={rotatingWords[wordIndex]}
                          className="block text-turquoise leading-[1.15] whitespace-nowrap"
                          initial={{ opacity: 0, y: "100%" }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: "-100%" }}
                          transition={{
                            y: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                            opacity: { duration: 0.28, ease: [0.4, 0, 0.2, 1] },
                          }}
                        >
                          {rotatingWords[wordIndex]}
                        </motion.span>
                      </AnimatePresence>
                    </motion.span>
                    <motion.span
                      layout
                      transition={{ layout: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }}
                    >
                      platform
                    </motion.span>
                  </span>
                  <br />
                  for Australian energy retailers
                </h1>

                <p className="mt-[16px] text-[17px] sm:text-[19px] lg:text-[20px] leading-[1.6] text-white/80 max-w-[56ch] mx-auto">
                  One platform, eight products &mdash; running the retail, sales
                  and operations software behind Australia&apos;s energy
                  retailers
                </p>
              </>
            )}

            <div className="flex flex-wrap gap-3 mt-[36px] justify-center">
              <Link
                href={href("/contact")}
                className="inline-flex items-center gap-2 px-7 py-[14px] rounded-full text-[15px] font-semibold bg-white text-navy hover:bg-white/90 transition-all shadow-lg"
              >
                Book a demo
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-[14px] rounded-full text-[15px] font-semibold text-white border border-white/40 hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Contact us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar — sits below hero */}
      <section className="py-[48px] lg:py-[64px]">
        <div className="max-w-[1600px] mx-auto px-8">
          {isUS && (
            <motion.h2
              className="text-center text-[28px] sm:text-[36px] lg:text-[60px] font-light leading-[1.15] tracking-[-0.02em] text-navy mb-[48px] lg:mb-[64px]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              One platform, eight products, endless possibility.
            </motion.h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="bg-bg2 rounded-2xl px-[28px] py-[48px] lg:py-[72px]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.12,
                  ease: "easeOut" as const,
                }}
              >
                <p className="text-[14px] leading-[1.5] text-fg2 mb-[20px]">
                  {stat.label}
                </p>
                <div className="text-[48px] lg:text-[56px] font-normal tracking-[-0.03em] leading-none text-navy tabular-nums flex items-baseline gap-2 flex-wrap">
                  <span>{stat.value}</span>
                  {stat.suffix && (
                    <span className="text-[22px] lg:text-[26px] font-normal text-fg2 tracking-normal">
                      {stat.suffix}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
