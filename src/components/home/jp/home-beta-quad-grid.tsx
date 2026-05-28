"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const auraX = useSpring(mouseX, { stiffness: 70, damping: 22, mass: 0.6 });
  const auraY = useSpring(mouseY, { stiffness: 70, damping: 22, mass: 0.6 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section className="relative h-[100dvh] flex flex-col bg-white pt-[84px] px-4 sm:px-6 pb-4 sm:pb-6">
      <div className="px-2 py-4 sm:py-5 lg:py-6 text-center">
        <h1 className="text-[20px] sm:text-[26px] lg:text-[34px] font-light leading-[1.2] tracking-[-0.01em] text-navy">
          Tally+ Your Ai Enabled Retail Energy Platform
        </h1>
      </div>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative flex-1 min-h-0 rounded-[20px] overflow-hidden"
      >
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

        <motion.div
          aria-hidden
          className="absolute -top-[20%] -left-[10%] h-[55vmin] w-[55vmin] rounded-full blur-3xl mix-blend-screen pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 210, 162, 0.35) 0%, transparent 65%)",
          }}
          animate={{
            x: ["0%", "30%", "10%", "0%"],
            y: ["0%", "20%", "40%", "0%"],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-[15%] -right-[10%] h-[60vmin] w-[60vmin] rounded-full blur-3xl mix-blend-screen pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(74, 111, 176, 0.45) 0%, transparent 65%)",
          }}
          animate={{
            x: ["0%", "-25%", "-10%", "0%"],
            y: ["0%", "-15%", "-30%", "0%"],
          }}
          transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute top-[30%] left-[40%] h-[40vmin] w-[40vmin] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl mix-blend-screen pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 184, 144, 0.30) 0%, transparent 65%)",
          }}
          animate={{
            x: ["-10%", "20%", "-15%", "-10%"],
            y: ["-10%", "10%", "20%", "-10%"],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          aria-hidden
          className="absolute h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl mix-blend-screen pointer-events-none"
          style={{
            left: auraX,
            top: auraY,
            background:
              "radial-gradient(circle, rgba(0, 210, 162, 0.32) 0%, rgba(255, 255, 255, 0.06) 35%, transparent 70%)",
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
                className="relative cursor-pointer overflow-hidden rounded-[28px] border border-white/25 backdrop-blur-[40px] backdrop-saturate-150 shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
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
                  className="absolute inset-x-0 top-0 h-1/2 rounded-t-[28px] bg-gradient-to-b from-white/15 to-transparent pointer-events-none"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none rounded-[28px] ring-1 ring-inset ring-white/20"
                />

                <div
                  className={`relative h-full w-full p-8 sm:p-12 lg:p-16 flex flex-col ${cornerAnchor[q.corner]}`}
                >
                  <motion.div
                    animate={{ y: isHovered ? -6 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <h2
                      className={`text-[30px] sm:text-[44px] lg:text-[64px] font-light leading-[1.1] tracking-[-0.02em] text-white max-w-[16ch] drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] ${q.singleLine ? "lg:text-[56px] lg:max-w-none lg:whitespace-nowrap" : ""}`}
                    >
                      {q.title}
                    </h2>

                    {q.subItems ? (
                      <>
                        <ul
                          className={`lg:hidden mt-5 sm:mt-6 flex flex-col gap-1.5 sm:gap-2 ${reverse ? "items-end" : "items-start"}`}
                        >
                          {q.subItems.map(({ label, icon: Icon }) => (
                            <li
                              key={label}
                              className={`flex items-center gap-2.5 sm:gap-3 text-[15px] sm:text-[17px] font-medium text-white/85 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)] ${reverse ? "flex-row-reverse" : ""}`}
                            >
                              <Icon
                                className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] shrink-0 text-white/75"
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
                                  className="mt-8 flex flex-col gap-2.5"
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
                                      className={`flex items-center gap-3 text-[22px] font-medium text-white/85 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)] ${reverse ? "flex-row-reverse" : ""}`}
                                    >
                                      <Icon
                                        className="h-[22px] w-[22px] shrink-0 text-white/75"
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
            animate={{ scale: hoveredId ? 1.06 : 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Image
              src="/brand/AdoraAiCompact.svg"
              alt="Adora AI"
              width={176}
              height={87}
              priority
              className="w-[200px] sm:w-[260px] lg:w-[320px] h-auto drop-shadow-[0_16px_40px_rgba(0,0,0,0.55)]"
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
