"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const dataInputs = [
  "Accounts",
  "Meters",
  "Usage data",
  "Tariffs",
  "Billing",
  "Hardship",
  "NMIs",
  "Solar",
  "Settlements",
];

export function StatsSection() {
  return (
    <section className="relative overflow-hidden py-[96px] lg:py-[120px] bg-navy text-white">
      <div
        className="absolute -right-[200px] -top-[200px] w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,210,162,0.15), transparent 60%)",
        }}
      />
      <div
        className="absolute -left-[200px] -bottom-[200px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,210,162,0.08), transparent 60%)",
        }}
      />

      <div className="relative max-w-[1600px] mx-auto px-8">
        <motion.div
          className="max-w-[720px] mx-auto text-center mb-[56px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.02em] text-white">
            Powered by Adora AI
          </h2>
          <p className="mt-[16px] text-[17px] lg:text-[19px] leading-[1.6] text-white/75 max-w-[56ch] mx-auto">
            Account summaries, next-best-action and hardship detection &mdash;
            grounded in real data from every corner of your retail operation,
            never hallucinated.
          </p>
        </motion.div>

        <motion.div
          className="relative max-w-[680px] mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-wrap justify-center gap-[10px] mb-[32px]">
            {dataInputs.map((input) => (
              <span
                key={input}
                className="inline-flex items-center px-[14px] py-[8px] rounded-full bg-white/10 border border-white/15 text-[13px] font-medium text-white/80 backdrop-blur-sm"
              >
                {input}
              </span>
            ))}
          </div>

          <div className="flex justify-center mb-[32px]">
            <div className="flex flex-col items-center gap-[4px]">
              <div className="w-[2px] h-[40px] bg-gradient-to-b from-white/10 to-turquoise/60" />
              <span className="material-symbols-outlined text-turquoise text-[20px]">
                south
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-fit">
            <div className="flex items-center gap-[16px] bg-gradient-to-r from-turquoise/20 to-turquoise/10 border border-turquoise/30 rounded-2xl px-[32px] py-[20px] backdrop-blur-sm">
              <Image
                src="/brand/AdoraDot.svg"
                alt="Adora AI"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div>
                <div className="text-[20px] font-bold text-white tracking-[-0.01em]">
                  Adora
                </div>
                <div className="text-xs font-semibold text-turquoise uppercase tracking-[0.1em]">
                  AI
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[40px] text-center">
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-turquoise hover:text-white transition-colors"
            >
              Learn more{" "}
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
