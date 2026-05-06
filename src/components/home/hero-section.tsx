"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const rotatingWords = ["Billing", "Sales", "Operations", "Compliance"];

const stats = [
  {
    label: "Retailers and partners across the NEM & WEM",
    value: "110",
    suffix: "+",
  },
  {
    label: "Call-centre agents using Tally every shift",
    value: "450",
    suffix: "+",
  },
  {
    label: "Energy accounts served through the platform annually",
    value: "4",
    suffix: "m+",
  },
];

export function HeroSection() {
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
        <div className="relative z-10 max-w-[1600px] mx-auto px-8 text-center mt-auto pb-[48px] sm:pb-[64px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-[38px] sm:text-[48px] lg:text-[64px] font-light leading-[1.08] tracking-[-0.03em] text-white">
              The operating system for
              <br />
              Australian energy retailers
            </h1>

            {/* Rotating word */}
            <div className="h-[64px] sm:h-[76px] lg:h-[88px] flex items-center justify-center overflow-hidden mt-[4px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  className="text-[40px] sm:text-[52px] lg:text-[68px] font-light tracking-[-0.03em] text-turquoise block"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <p className="mt-[16px] text-[17px] sm:text-[19px] lg:text-[20px] leading-[1.6] text-white/80 max-w-[56ch] mx-auto">
              One platform, eight products &mdash; running the retail, sales and
              operations software behind Australia&apos;s energy retailers
            </p>

            <div className="flex flex-wrap gap-3 mt-[36px] justify-center">
              <Link
                href="/contact"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="bg-bg2 rounded-2xl px-[28px] py-[32px] lg:py-[40px]"
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
                <div className="text-[48px] lg:text-[56px] font-normal tracking-[-0.03em] leading-none text-navy tabular-nums">
                  {stat.value}
                  <span className="text-navy font-normal">{stat.suffix}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
