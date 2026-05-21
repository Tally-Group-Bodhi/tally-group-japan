"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const pillars: Array<{
  title: string;
  body: string;
  image: string;
  alt: string;
}> = [
  {
    title: "Reduce your cost-to-serve",
    body: "Tally+ drives operational efficiency by automating complex processes, reducing contact centre demand through intuitive self-service tooling and proactive communications, and equipping operators with real-time insights to resolve issues faster.",
    image:
      "https://images.unsplash.com/photo-1758526214018-a746f9554b8b?auto=format&fit=crop&w=1600&q=90",
    alt: "Woman paying a bill on her phone with a credit card",
  },
  {
    title: "Capture the opportunities ahead",
    body: "Tally+ enables utilities to innovate faster by bringing new products and services to market quickly, adapting to emerging energy models, and unlocking new revenue streams on a flexible, future-ready platform.",
    image: "/home/capture-opportunities.png",
    alt: "Business person at a laptop in an office, thinking",
  },
  {
    title: "Empower your people",
    body: "Tally+ features smarter tools for customers and operators alike, enabling self-service, faster resolution and more personalized, frictionless interactions. From managing accounts to adopting new energy services, deliver a better experience at every touchpoint.",
    image: "/shutterstock_2748143915.jpg",
    alt: "Contact-centre agent with headset working at a computer",
  },
];

export function ValuePillarsSectionUS() {
  return (
    <section className="px-4 sm:px-6 pt-2 pb-[24px] sm:pb-[32px]">
      <div className="relative overflow-hidden rounded-2xl bg-bg2 py-[72px] lg:py-[112px] px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto space-y-[72px] lg:space-y-[120px]">
          {pillars.map((pillar, i) => {
            const imageOnLeft = i % 2 === 0;
            return (
              <motion.div
                key={pillar.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] lg:gap-[80px] items-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div
                  className={`relative aspect-square w-full rounded-2xl overflow-hidden bg-bg3 ${
                    imageOnLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={pillar.image}
                    alt={pillar.alt}
                    fill
                    quality={95}
                    sizes="(min-width: 1024px) 560px, (min-width: 640px) 90vw, 100vw"
                    className="object-cover"
                    unoptimized={pillar.image.startsWith("/")}
                  />
                </div>
                <div
                  className={`${imageOnLeft ? "lg:order-2" : "lg:order-1"}`}
                >
                  <h3 className="text-[28px] sm:text-[32px] lg:text-[44px] font-light leading-[1.2] tracking-[-0.02em] text-navy mb-[20px] lg:mb-[24px]">
                    {pillar.title}
                  </h3>
                  <p className="text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.75] text-fg2 max-w-[52ch]">
                    {pillar.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
