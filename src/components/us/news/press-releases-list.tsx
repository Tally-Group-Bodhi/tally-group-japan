"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MarketingLink } from "@/components/marketing/marketing-link";

export type PressRelease = {
  slug: string;
  date: string;
  dateISO: string;
  title: string;
  excerpt: string;
  href: string;
  image?: string;
  imageAlt?: string;
  tone?: 1 | 2 | 3 | 4;
  icon?: string;
};

const MEDIA_TONES: Record<
  1 | 2 | 3 | 4,
  { gradient: string; pattern: string; iconColor: string }
> = {
  1: {
    gradient:
      "linear-gradient(135deg, #1E2840 0%, #2C365D 55%, #0B7A66 100%)",
    pattern:
      "radial-gradient(circle at 85% 20%, rgba(0,210,162,0.35), transparent 55%)",
    iconColor: "rgba(0, 210, 162, 0.9)",
  },
  2: {
    gradient:
      "linear-gradient(135deg, #0B5468 0%, #1A88A0 55%, #00D2A2 100%)",
    pattern:
      "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.18), transparent 55%)",
    iconColor: "rgba(255, 255, 255, 0.95)",
  },
  3: {
    gradient:
      "linear-gradient(135deg, #2C365D 0%, #3F4F8F 55%, #5A7BBF 100%)",
    pattern:
      "radial-gradient(circle at 75% 75%, rgba(0,210,162,0.28), transparent 55%)",
    iconColor: "rgba(0, 210, 162, 0.95)",
  },
  4: {
    gradient:
      "linear-gradient(135deg, #2C365D 0%, #5B3F7A 50%, #C77B4A 100%)",
    pattern:
      "radial-gradient(circle at 30% 80%, rgba(255,210,140,0.28), transparent 55%)",
    iconColor: "rgba(255, 255, 255, 0.95)",
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.06, ease: "easeOut" as const },
  }),
};

export function PressReleasesList({
  releases,
}: {
  releases: PressRelease[];
}) {
  return (
    <section
      className="pt-[40px] pb-[80px] lg:pt-[48px] lg:pb-[96px]"
      aria-labelledby="press-releases-heading"
    >
      <div className="max-w-[1240px] mx-auto px-8">
        <h2 id="press-releases-heading" className="sr-only">
          Press releases
        </h2>

        {releases.length === 0 ? (
          <div
            role="status"
            className="border border-dashed border-stroke1 rounded-2xl bg-bg2 px-[24px] py-[48px] text-center"
          >
            <p className="text-base text-navy font-semibold m-0">
              No press releases to share right now
            </p>
            <p className="text-sm text-fg2 mt-[8px] m-0">
              We&apos;ll post new announcements here as soon as they&apos;re available.
            </p>
          </div>
        ) : (
          <ul className="list-none m-0 p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {releases.map((release, i) => (
              <motion.li
                key={release.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
              >
                <PressReleaseCard release={release} />
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function PressReleaseCard({ release }: { release: PressRelease }) {
  const tone = MEDIA_TONES[release.tone ?? 1];
  const fallbackIcon = release.icon ?? "campaign";
  const hasImage = Boolean(release.image);

  return (
    <article className="group relative h-full bg-white border border-stroke1 rounded-2xl overflow-hidden flex flex-col transition-all hover:border-navy/30 hover:shadow-[0_12px_36px_rgba(44,54,93,0.10)]">
      <MarketingLink
        href={release.href}
        aria-label={`${release.title} (${release.date})`}
        className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise focus-visible:ring-offset-2"
      >
        <span className="sr-only">Read more</span>
      </MarketingLink>

      <div
        className="relative aspect-[16/10] overflow-hidden bg-navy"
        role="img"
        aria-label={release.imageAlt ?? `${release.title} image`}
        style={hasImage ? undefined : { background: tone.gradient }}
      >
        {hasImage ? (
          <Image
            src={release.image!}
            alt={release.imageAlt ?? ""}
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: tone.pattern }}
              aria-hidden
            />
            <div className="absolute inset-0 grid place-items-center">
              <span
                className="material-symbols-outlined text-[96px]"
                style={{ color: tone.iconColor }}
                aria-hidden
              >
                {fallbackIcon}
              </span>
            </div>
          </>
        )}
        <span className="absolute top-[12px] right-[12px] inline-flex items-center gap-1 px-[10px] py-[5px] rounded-full bg-black/55 text-white text-[11px] font-semibold uppercase tracking-[0.1em] backdrop-blur-sm">
          <span
            className="material-symbols-outlined text-[14px]"
            aria-hidden
          >
            campaign
          </span>
          Press release
        </span>
      </div>

      <div className="p-[24px] flex flex-col flex-1">
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-fg2 m-0">
          <time dateTime={release.dateISO}>{release.date}</time>
        </p>
        <h3 className="mt-[8px] text-[18px] font-semibold leading-[1.4] tracking-[-0.01em] text-navy m-0">
          {release.title}
        </h3>
        <p className="mt-[14px] text-[14px] leading-[1.7] text-fg2 m-0 flex-1">
          {release.excerpt}
        </p>
        <div className="mt-auto pt-[20px]">
          <span className="inline-flex items-center gap-1 text-[14px] font-semibold text-navy group-hover:text-turquoise transition-colors">
            Read more
            <span
              className="material-symbols-outlined text-[18px]"
              aria-hidden
            >
              arrow_forward
            </span>
          </span>
        </div>
      </div>
    </article>
  );
}
