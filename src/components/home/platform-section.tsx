"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const solutions = [
  {
    stage: "Customer Self-Service",
    image:
      "https://images.unsplash.com/photo-1758526214018-a746f9554b8b?auto=format&fit=crop&w=2880&q=90",
    alt: "Young woman smiling while paying a bill on her phone with a credit card",
    href: "/products/customer",
  },
  {
    stage: "Agent Desktop",
    image: "/shutterstock_2748143915.jpg",
    alt: "Happy contact-centre agent with headset at her computer",
    href: "/products/digital",
  },
  {
    stage: "Sales & Acquisition",
    image:
      "https://plus.unsplash.com/premium_photo-1682141308411-29d7662447cb?auto=format&fit=crop&w=2880&q=90",
    alt: "Man in formal clothes working thoughtfully on a laptop in a modern office",
    href: "/products/acquire",
  },
  {
    stage: "Operations & Billing",
    image:
      "https://plus.unsplash.com/premium_photo-1683880731743-da95ceb12e15?auto=format&fit=crop&w=2880&q=90",
    alt: "Operations team working together at a desk in a modern office",
    href: "/products/billing",
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
      className="pt-[96px] lg:pt-[120px] pb-0 border-t border-stroke1"
      style={{
        background:
          "linear-gradient(180deg, #F9F9FB 0%, #FFFFFF 60%, #F9F9FB 100%)",
      }}
    >
      <motion.div
        className="max-w-[820px] lg:max-w-[1280px] mx-auto text-center mb-[56px] px-8"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-[28px] sm:text-[36px] lg:text-[60px] font-light leading-[1.15] tracking-[-0.02em] text-navy">
          Energy industry expertise meets modern technology &mdash; built for
          today&rsquo;s retailers.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[8px] px-4 sm:px-6">
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
              aria-label={`${s.stage} — Learn more`}
              className="relative block aspect-[2/1] sm:aspect-auto sm:h-[clamp(440px,32vw,560px)] overflow-hidden rounded-[20px] group"
            >
              <Image
                src={s.image}
                alt={s.alt}
                fill
                quality={95}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 55vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

              <div className="absolute left-[24px] right-[24px] bottom-[24px] flex flex-col items-start">
                <h3 className="text-white text-[20px] sm:text-[22px] font-semibold leading-[1.2] tracking-[-0.01em] transition-transform duration-300 ease-out group-hover:-translate-y-1">
                  {s.stage}
                </h3>
                <span
                  className="mt-[14px] inline-flex items-center gap-2 px-[18px] py-[8px] rounded-full bg-white text-navy text-[13px] font-semibold opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0"
                  aria-hidden="true"
                >
                  Learn more
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
