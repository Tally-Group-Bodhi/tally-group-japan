"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Briefcase,
  CreditCard,
  LayoutDashboard,
  Leaf,
  Network,
  Receipt,
  Settings2,
  Sparkles,
  Sun,
  Tag,
  UserCircle,
  UserPlus,
  Workflow,
  Zap,
} from "lucide-react";
import { PixelWave } from "@/components/home/jp/pixel-wave";

type Corner = "tl" | "tr" | "bl" | "br";

type SubItem = {
  label: string;
  icon: LucideIcon;
};

type Quadrant = {
  id: string;
  title: string;
  tint: string;
  glow: string;
  corner: Corner;
  subItems?: SubItem[];
  singleLine?: boolean;
};

const quadrants: Quadrant[] = [
  {
    id: "order-to-cash",
    title: "Order to Cash",
    tint: "rgba(14, 26, 54, 0.32)",
    glow: "rgba(0, 210, 162, 0.28)",
    corner: "tl",
    subItems: [
      { label: "Billing", icon: Receipt },
      { label: "Operations", icon: Settings2 },
      { label: "Credit and Collections", icon: CreditCard },
      { label: "Workflow", icon: Workflow },
    ],
  },
  {
    id: "customer-engagement",
    title: "Customer Engagement",
    tint: "rgba(30, 40, 64, 0.28)",
    glow: "rgba(0, 210, 162, 0.26)",
    corner: "tr",
    singleLine: true,
    subItems: [
      { label: "CSR AI Companion", icon: Bot },
      { label: "Screen Consolidator", icon: LayoutDashboard },
      { label: "Customer Portal", icon: UserCircle },
      { label: "Experience Optimization", icon: Sparkles },
    ],
  },
  {
    id: "transition-products",
    title: "Transition Products",
    tint: "rgba(44, 54, 93, 0.28)",
    glow: "rgba(0, 210, 162, 0.24)",
    corner: "bl",
    subItems: [
      { label: "Demand Response", icon: Zap },
      { label: "Solar / EV & Batteries", icon: Sun },
      { label: "Distributed Energy", icon: Network },
      { label: "Carbon Reporting", icon: Leaf },
    ],
  },
  {
    id: "sales-management",
    title: "Sales Management",
    tint: "rgba(74, 111, 176, 0.24)",
    glow: "rgba(255, 255, 255, 0.26)",
    corner: "br",
    subItems: [
      { label: "Price Plans", icon: Tag },
      { label: "Sales Portal", icon: Briefcase },
      { label: "Auto Sign-Up and Enrollment", icon: UserPlus },
    ],
  },
];

const cornerAnchor: Record<Corner, string> = {
  tl: "items-start justify-start text-left",
  tr: "items-end justify-start text-right",
  bl: "items-start justify-end text-left",
  br: "items-end justify-end text-right",
};

const radialOrigin: Record<Corner, string> = {
  tl: "circle at top left",
  tr: "circle at top right",
  bl: "circle at bottom left",
  br: "circle at bottom right",
};

const isRightCorner = (corner: Corner) => corner === "tr" || corner === "br";

export function HomeBetaQuadGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="relative h-[100dvh] flex flex-col bg-white pt-[84px] px-4 sm:px-6 pb-4 sm:pb-6">
      <div className="px-2 py-4 sm:py-5 lg:py-6 text-center">
        <h1 className="text-[28px] sm:text-[40px] lg:text-[56px] font-light leading-[1.15] tracking-[-0.015em] text-navy">
          Tally+ Your Ai Enabled Retail Energy Platform
        </h1>
      </div>

      <div className="relative flex-1 min-h-0 rounded-[20px] overflow-hidden">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          priority
          unoptimized
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/60"
        />

        <div
          aria-hidden
          className="absolute top-[30%] left-[40%] h-[55vmin] w-[55vmin] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl pointer-events-none opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 184, 144, 0.35) 0%, transparent 65%)",
          }}
        />

        <div className="relative h-full w-full grid grid-cols-2 grid-rows-2 gap-[6px] p-[6px]">
          {quadrants.map((q) => {
            const isHovered = hoveredId === q.id;
            const isDimmed = hoveredId !== null && !isHovered;
            const reverse = isRightCorner(q.corner);

            return (
              <motion.div
                key={q.id}
                onHoverStart={() => setHoveredId(q.id)}
                onHoverEnd={() => setHoveredId(null)}
                onTapStart={() => setHoveredId(q.id)}
                animate={{ opacity: isDimmed ? 0.55 : 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative cursor-pointer overflow-hidden rounded-[14px] border border-white/25 backdrop-blur-md shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
                style={{ backgroundColor: q.tint }}
              >
                <motion.div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(${radialOrigin[q.corner]}, ${q.glow} 0%, transparent 65%)`,
                  }}
                  animate={{ opacity: isHovered ? 1 : 0.35 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />

                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1/2 rounded-t-[14px] bg-gradient-to-b from-white/15 to-transparent pointer-events-none"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none rounded-[14px] ring-1 ring-inset ring-white/20"
                />

                <div
                  className={`relative h-full w-full p-5 sm:p-7 lg:p-9 flex flex-col ${cornerAnchor[q.corner]}`}
                >
                  <motion.div
                    animate={{ y: isHovered ? -6 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <h2
                      className={`text-[18px] sm:text-[24px] lg:text-[34px] font-light leading-[1.15] tracking-[-0.02em] text-white max-w-[16ch] drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] ${q.singleLine ? "lg:text-[30px] lg:max-w-none lg:whitespace-nowrap" : ""}`}
                    >
                      {q.title}
                    </h2>

                    {q.subItems ? (
                      <>
                        <ul
                          className={`lg:hidden mt-4 sm:mt-5 flex flex-col gap-1 sm:gap-1.5 ${reverse ? "items-end" : "items-start"}`}
                        >
                          {q.subItems.map(({ label, icon: Icon }) => (
                            <li
                              key={label}
                              className={`flex items-center gap-2 sm:gap-2.5 text-[13px] sm:text-[15px] font-medium text-white/85 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)] ${reverse ? "flex-row-reverse" : ""}`}
                            >
                              <Icon
                                className="h-[14px] w-[14px] sm:h-[16px] sm:w-[16px] shrink-0 text-white/75"
                                strokeWidth={1.75}
                                aria-hidden
                              />
                              <span>{label}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="hidden lg:block">
                          <AnimatePresence initial={false}>
                            {isHovered && (
                              <motion.div
                                key="sub-items-wrap"
                                className="overflow-hidden"
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                exit={{ height: 0 }}
                                transition={{
                                  duration: 0.4,
                                  ease: [0.22, 1, 0.36, 1],
                                }}
                              >
                                <motion.ul
                                  className="mt-6 flex flex-col gap-2"
                                  initial="hide"
                                  animate="show"
                                  exit="hide"
                                  variants={{
                                    show: {
                                      transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.08,
                                      },
                                    },
                                    hide: {
                                      transition: {
                                        staggerChildren: 0.025,
                                        staggerDirection: -1,
                                      },
                                    },
                                  }}
                                >
                                  {q.subItems.map(({ label, icon: Icon }) => (
                                    <motion.li
                                      key={label}
                                      variants={{
                                        show: { opacity: 1, y: 0 },
                                        hide: { opacity: 0, y: 6 },
                                      }}
                                      transition={{ duration: 0.28, ease: "easeOut" }}
                                      className={`flex items-center gap-2.5 text-[16px] font-medium text-white/85 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)] ${reverse ? "flex-row-reverse" : ""}`}
                                    >
                                      <Icon
                                        className="h-[17px] w-[17px] shrink-0 text-white/75"
                                        strokeWidth={1.75}
                                        aria-hidden
                                      />
                                      <span>{label}</span>
                                    </motion.li>
                                  ))}
                                </motion.ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </>
                    ) : (
                      <motion.div
                        className="mt-4 inline-flex items-center gap-2 text-[13px] sm:text-[15px] lg:text-[16px] font-medium uppercase tracking-[0.14em] text-white/90"
                        animate={{
                          opacity: isHovered ? 1 : 0,
                          y: isHovered ? 0 : 6,
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <span>Explore</span>
                        <motion.span
                          aria-hidden
                          animate={{ x: isHovered ? 4 : 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                          ?
                        </motion.span>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <PixelWave />

        <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center">
          <motion.div
            className="relative"
            animate={{
              scale: hoveredId ? 1.06 : 1,
              y: hoveredId ? -8 : 0,
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              aria-hidden
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[180%] rounded-full blur-3xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(0,210,162,0.42) 0%, rgba(0,210,162,0.18) 35%, transparent 70%)",
              }}
              animate={{ opacity: hoveredId ? 1 : 0.7 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />

            <motion.div
              aria-hidden
              className="absolute left-1/2 bottom-[-14%] -translate-x-1/2 w-[85%] h-[18%] rounded-[50%] blur-2xl pointer-events-none"
              style={{ background: "rgba(0,0,0,0.55)" }}
              animate={{
                opacity: hoveredId ? 0.85 : 0.6,
                scaleX: hoveredId ? 1.05 : 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />

            <Image
              src="/brand/AdoraAiCompact.svg"
              alt="Adora AI"
              width={176}
              height={87}
              priority
              className="relative w-[150px] sm:w-[190px] lg:w-[230px] h-auto drop-shadow-[0_16px_36px_rgba(0,0,0,0.55)]"
            />
          </motion.div>
        </div>
      </div>

      <div className="px-2 py-4 sm:py-5 lg:py-6 text-center">
        <p className="text-[20px] sm:text-[26px] lg:text-[34px] font-light leading-[1.2] tracking-[-0.01em] text-fg2">
          Modules Can Be Mixed &amp; Matched to Fit Your Requirements
        </p>
      </div>
    </section>
  );
}
