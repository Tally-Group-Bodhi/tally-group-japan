"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const dataInputs: Array<{ label: string; icon: string }> = [
  { label: "Accounts", icon: "person" },
  { label: "Meters", icon: "speed" },
  { label: "Usage data", icon: "bar_chart" },
  { label: "Tariffs", icon: "request_quote" },
  { label: "Billing", icon: "receipt_long" },
  { label: "Hardship", icon: "volunteer_activism" },
  { label: "NMIs", icon: "qr_code_2" },
  { label: "Solar", icon: "solar_power" },
  { label: "Settlements", icon: "handshake" },
];

export function StatsSection() {
  return (
    <section className="bg-bg2 px-4 sm:px-6 pt-2 pb-[24px] sm:pb-[32px]">
      <div className="relative overflow-hidden rounded-2xl border border-stroke1 bg-navy-dark text-white py-[96px] lg:py-[120px]">
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

        <div className="relative mx-auto px-8">
        <motion.div
          className="max-w-[720px] mx-auto text-center mb-[48px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[28px] sm:text-[36px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-white">
            Powered by Adora AI
          </h2>
          <p className="mt-[16px] text-[17px] lg:text-[19px] leading-[1.6] text-turquoise/85 max-w-[56ch] mx-auto">
            Account summaries, next-best-action and hardship detection &mdash;
            grounded in real data from every corner of your retail operation,
            never hallucinated.
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[1040px]"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative z-20 flex flex-wrap sm:flex-nowrap justify-center gap-[6px] sm:gap-[10px]">
            {dataInputs.map((item) => (
              <div
                key={item.label}
                className="shrink-0 flex flex-col items-center justify-center gap-[6px] w-[80px] sm:w-[96px] h-[64px] rounded-[10px] bg-[#1A2342]/90 border border-white/10 backdrop-blur-sm"
              >
                <span className="material-symbols-outlined text-white/85 text-[20px]">
                  {item.icon}
                </span>
                <span className="text-[11.5px] font-medium text-white/85 leading-none whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div
            className="relative h-[140px] -mt-[1px]"
            aria-hidden="true"
          >
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 920 140"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="funnel-fill" x1="0.5" y1="0" x2="0.5" y2="1">
                  <stop offset="0%" stopColor="#00D2A2" stopOpacity="0.04" />
                  <stop offset="100%" stopColor="#00D2A2" stopOpacity="0.28" />
                </linearGradient>
                <linearGradient id="ray-fade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00D2A2" stopOpacity="0" />
                  <stop offset="100%" stopColor="#00D2A2" stopOpacity="0.55" />
                </linearGradient>
              </defs>

              <polygon
                points="0,0 920,0 520,140 400,140"
                fill="url(#funnel-fill)"
              />

              {[
                52, 144, 236, 328, 420, 512, 604, 696, 788, 868,
              ].map((x, i) => {
                const targetX = 400 + ((x - 0) / 920) * (520 - 400);
                return (
                  <line
                    key={i}
                    x1={x}
                    y1={0}
                    x2={targetX}
                    y2={140}
                    stroke="url(#ray-fade)"
                    strokeWidth={1}
                  />
                );
              })}
            </svg>
          </div>

          <div className="relative z-20 flex justify-center -mt-[26px]">
            <div
              className="relative w-[120px] h-[120px] rounded-[24px] flex flex-col items-center justify-center text-white overflow-hidden"
              style={{
                background:
                  "linear-gradient(140deg, #6FE3CB 0%, #2DC8A6 55%, #15A98A 100%)",
                boxShadow:
                  "0 24px 60px -10px rgba(0,210,162,0.55), inset 0 1px 0 rgba(255,255,255,0.45)",
              }}
            >
              <span
                className="material-symbols-outlined absolute top-[14px] left-[16px] text-white text-[28px]"
                style={{ fontVariationSettings: "'FILL' 1, 'wght' 500" }}
              >
                auto_awesome
              </span>
              <span
                className="material-symbols-outlined absolute top-[26px] right-[20px] text-white/90 text-[14px]"
                style={{ fontVariationSettings: "'FILL' 1, 'wght' 500" }}
              >
                auto_awesome
              </span>

              <div className="mt-[36px] flex flex-col items-center leading-tight">
                <span className="text-[14px] font-medium tracking-tight">
                  Adora
                </span>
                <span className="text-[14px] font-medium tracking-tight">
                  AI
                </span>
              </div>
            </div>
          </div>

          <div className="relative z-20 flex justify-center mt-[28px]">
            <Link
              href="#"
              className="inline-flex items-center justify-center bg-white text-navy rounded-full px-7 h-[40px] text-[14px] font-medium shadow-[0_8px_24px_-4px_rgba(0,0,0,0.25)] hover:bg-white/95 transition-colors"
            >
              Learn more
            </Link>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
