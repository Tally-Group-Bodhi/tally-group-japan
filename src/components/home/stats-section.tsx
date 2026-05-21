"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Segment = {
  text: string;
  bold?: boolean;
  link?: boolean;
  href?: string;
};

const summarySegments: Segment[] = [
  { text: "Ronald is a " },
  { text: "top-decile customer", bold: true },
  { text: ", 18 years on our system, " },
  { text: "95th-percentile payment history", bold: true },
  { text: " across " },
  { text: "5 active accounts", bold: true },
  { text: ". Residential usage is " },
  { text: "down 63% YoY", bold: true },
  { text: " (solar uptake); Collins St and Queen St trend " },
  { text: "+12.3% MoM", bold: true },
  { text: ". Currently $144.74 in net credit.\n\nNext best actions: " },
  { text: "Review commercial tariffs", link: true, href: "#" },
  { text: "  \u00b7  " },
  { text: "Schedule hardship check-in", link: true, href: "#" },
  { text: "  \u00b7  " },
  { text: "Audit solar feed-in", link: true, href: "#" },
];

const TOTAL_CHARS = summarySegments.reduce((acc, s) => acc + s.text.length, 0);

function renderTypedSegments(segments: Segment[], typedCount: number) {
  let remaining = typedCount;
  return segments.map((seg, i) => {
    if (remaining <= 0) return null;
    const portion = seg.text.slice(0, remaining);
    remaining -= seg.text.length;
    if (seg.link) {
      return (
        <a
          key={i}
          href={seg.href || "#"}
          className="font-medium text-[#FE5E01] hover:text-[#FFB07A] underline decoration-[#FE5E01]/40 hover:decoration-[#FE5E01] underline-offset-[3px] transition-colors"
        >
          {portion}
        </a>
      );
    }
    if (seg.bold) {
      return (
        <strong key={i} className="font-semibold text-white">
          {portion}
        </strong>
      );
    }
    return <span key={i}>{portion}</span>;
  });
}

export function StatsSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, margin: "-120px" });
  const [typedCount, setTypedCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    setTypedCount(0);
    const startDelay = window.setTimeout(() => {
      const interval = window.setInterval(() => {
        setTypedCount((prev) => {
          const next = prev + 2;
          if (next >= TOTAL_CHARS) {
            window.clearInterval(interval);
            return TOTAL_CHARS;
          }
          return next;
        });
      }, 32);
      return () => window.clearInterval(interval);
    }, 500);
    return () => window.clearTimeout(startDelay);
  }, [inView]);

  const isTyping = typedCount > 0 && typedCount < TOTAL_CHARS;
  const showCursor = inView && typedCount < TOTAL_CHARS;

  return (
    <section className="px-4 sm:px-6 pt-2 pb-0">
      <div
        className="relative overflow-hidden rounded-[28px] border border-stroke1 text-white py-[56px] lg:py-[72px]"
        style={{
          background:
            "linear-gradient(180deg, #1E2840 0%, #141B30 55%, #0A1020 100%)",
        }}
      >
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

        <div className="relative mx-auto px-6 sm:px-8">
          <motion.div
            className="max-w-[720px] mx-auto text-center mb-[32px]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[28px] sm:text-[36px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-white">
              Powered by Tally Adora AI
            </h2>
            <p className="mt-[16px] text-[17px] lg:text-[19px] leading-[1.6] text-[#FE5E01]/85 max-w-[56ch] mx-auto">
              Account summaries, next-best-action and hardship detection &mdash;
              grounded in real data from every corner of your retail operation,
              never hallucinated.
            </p>
          </motion.div>

          <motion.div
            ref={cardRef}
            className="relative mx-auto w-full max-w-[820px]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="rounded-[32px] border border-white/10 backdrop-blur-sm p-5 sm:p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.65)]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(14,20,38,0.92) 0%, rgba(10,16,32,0.92) 100%)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/brand/Adora.svg"
                  alt="Adora"
                  width={227}
                  height={101}
                  priority
                  className="h-[34px] w-auto"
                />
                <h3 className="text-white font-semibold text-[18px] sm:text-[20px]">
                  Customer Summary
                </h3>
                <div className="ml-auto flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF6B6B]/35 bg-[#FF6B6B]/10 px-2.5 py-[3px] text-[12px] font-medium text-[#FF8A8A]">
                    <span className="relative flex h-[7px] w-[7px]">
                      <span
                        className="absolute inline-flex h-full w-full rounded-full bg-[#FF6B6B] opacity-70"
                        style={{
                          animation:
                            "adora-call-ping 1.4s cubic-bezier(0,0,0.2,1) infinite",
                        }}
                      />
                      <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-[#FF6B6B]" />
                    </span>
                    <span className="material-symbols-outlined text-[14px] leading-none">
                      call
                    </span>
                    Call in Progress
                  </span>
                  <button
                    type="button"
                    aria-label="Close summary"
                    className="text-white/40 hover:text-white/80 transition-colors leading-none"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      close
                    </span>
                  </button>
                </div>
              </div>

              <div className="relative rounded-[24px] p-[2px] adora-glow-border">
                <div
                  className="relative rounded-[22px] px-5 sm:px-6 pt-5 sm:pt-6 pb-3 sm:pb-3 text-[14.5px] sm:text-[15.5px] leading-[1.7] text-white/85 whitespace-pre-line"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(14,20,38,0.96) 0%, rgba(10,16,32,0.96) 100%)",
                  }}
                  aria-live="polite"
                >
                {renderTypedSegments(summarySegments, typedCount)}
                {showCursor && (
                  <span
                    className="ml-[2px] inline-block w-[8px] h-[1.05em] -mb-[3px] align-middle bg-[#FE5E01] rounded-[1px]"
                    style={{
                      animation: "adora-caret-blink 0.9s steps(1) infinite",
                    }}
                    aria-hidden="true"
                  />
                )}

                <div className="mt-4 pt-3 border-t border-white/8 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      aria-label="Mention"
                      className="flex items-center justify-center w-8 h-8 rounded-full text-white/45 hover:text-white/85 hover:bg-white/5 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        alternate_email
                      </span>
                    </button>
                    <button
                      type="button"
                      aria-label="Attach"
                      className="flex items-center justify-center w-8 h-8 rounded-full text-white/45 hover:text-white/85 hover:bg-white/5 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[22px]">
                        add
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      aria-label="Voice input"
                      className="flex items-center justify-center w-8 h-8 rounded-full text-white/45 hover:text-white/85 hover:bg-white/5 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        mic
                      </span>
                    </button>
                    <button
                      type="button"
                      aria-label="Send"
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#0A1020] hover:bg-white/90 transition-colors shadow-[0_4px_14px_-4px_rgba(0,0,0,0.5)]"
                      disabled={isTyping}
                    >
                      <span className="material-symbols-outlined text-[18px] font-bold">
                        arrow_upward
                      </span>
                    </button>
                  </div>
                </div>

                </div>

                <span
                  className="pointer-events-none absolute inset-0 rounded-[24px]"
                  style={{
                    boxShadow:
                      "0 0 28px 4px rgba(254,94,1,0.28), 0 0 60px 12px rgba(254,94,1,0.12)",
                    animation: "adora-glow-pulse 7s ease-in-out infinite",
                  }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </motion.div>

          <div className="relative z-20 flex justify-center mt-[24px]">
            <Link
              href="#"
              className="inline-flex items-center justify-center bg-white text-navy rounded-full px-7 h-[40px] text-[14px] font-medium shadow-[0_8px_24px_-4px_rgba(0,0,0,0.25)] hover:bg-white/95 transition-colors"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .adora-glow-border {
          background: linear-gradient(
            120deg,
            #ff7a1a 0%,
            #ffb74d 18%,
            #fe5e01 35%,
            #c44a00 55%,
            #fe5e01 72%,
            #ffb74d 88%,
            #ff7a1a 100%
          );
          background-size: 300% 100%;
          animation: adora-border-flow 14s linear infinite;
        }
        @keyframes adora-border-flow {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 300% 50%;
          }
        }
        @keyframes adora-glow-pulse {
          0%,
          100% {
            opacity: 0.55;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes adora-caret-blink {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
          }
        }
        @keyframes adora-call-ping {
          75%,
          100% {
            transform: scale(2.4);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
