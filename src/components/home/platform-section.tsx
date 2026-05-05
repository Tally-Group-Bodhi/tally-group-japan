"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const solutions = [
  {
    stage: "Customer Self-Service",
    image:
      "https://images.unsplash.com/photo-1758526214018-a746f9554b8b?auto=format&fit=crop&w=1200&q=80",
    alt: "Young woman smiling while paying a bill on her phone with a credit card",
  },
  {
    stage: "Agent Desktop",
    image:
      "https://www.shutterstock.com/image-photo/computer-contact-us-happy-woman-call-600nw-2748143915.jpg",
    alt: "Happy contact-centre agent with headset at her computer",
  },
  {
    stage: "Sales & Acquisition",
    image:
      "https://plus.unsplash.com/premium_photo-1682141308411-29d7662447cb?auto=format&fit=crop&w=1200&q=80",
    alt: "Man in formal clothes working thoughtfully on a laptop in a modern office",
  },
  {
    stage: "Operations & Billing",
    image:
      "https://plus.unsplash.com/premium_photo-1683880731743-da95ceb12e15?auto=format&fit=crop&w=1200&q=80",
    alt: "Operations team working together at a desk in a modern office",
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
      className="py-[96px] lg:py-[120px] border-t border-stroke1"
      style={{
        background:
          "linear-gradient(180deg, #F9F9FB 0%, #FFFFFF 60%, #F9F9FB 100%)",
      }}
    >
      <div className="max-w-[1600px] mx-auto px-8">
        <motion.div
          className="max-w-[820px] mx-auto text-center mb-[56px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-bold leading-[1.15] tracking-[-0.02em] text-navy">
            Energy industry expertise meets modern technology &mdash; built for
            today&rsquo;s retailers.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
          {solutions.map((s, i) => (
            <motion.div
              key={s.stage}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl group"
            >
              <Image
                src={s.image}
                alt={s.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <h3 className="absolute left-[20px] right-[20px] bottom-[20px] text-white text-[18px] sm:text-[20px] font-semibold leading-[1.25] tracking-[-0.01em]">
                {s.stage}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
