"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const proofPoints: Array<{
  label: string;
  image: string;
  alt: string;
  description: string;
}> = [
  {
    label: "Battery",
    image: "/home/future/battery.jpg",
    alt: "Home battery storage unit alongside an EV charger and rooftop solar",
    description:
      "Behind-the-meter batteries, VPPs and community storage are metered, billed and settled on the same engine that runs every other account.",
  },
  {
    label: "Solar",
    image: "/home/future/solar.jpg",
    alt: "Rooftop solar panels on a residential home against a clear blue sky",
    description:
      "Solar exports, feed-in tariffs and prosumer accounts run natively \u2014 scale PV and embedded networks without re-platforming.",
  },
  {
    label: "EV",
    image: "/home/future/ev.jpg",
    alt: "Electric vehicle plugged into a wall-mounted home EV charger",
    description:
      "Time-of-use, controlled-load and bidirectional EV tariffs are first-class. Ready for V2G the moment your customers are.",
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

export function FutureOfEnergySection() {
  return (
    <section className="px-4 sm:px-6 pt-2 pb-[24px] sm:pb-[32px]">
      <div className="relative overflow-hidden rounded-2xl bg-bg2 py-[80px] lg:py-[96px] px-6 sm:px-8">
        <motion.div
          className="max-w-[720px] mx-auto text-center mb-[56px] lg:mb-[64px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[28px] sm:text-[36px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-navy">
            We&rsquo;re enabling real change
          </h2>
        </motion.div>

        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[20px] lg:gap-[28px]">
            {proofPoints.map((item, i) => (
              <motion.div
                key={item.label}
                className="group relative w-full aspect-[5/6] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-bg3"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  quality={95}
                  sizes="(min-width: 1024px) 410px, (min-width: 640px) 30vw, 90vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.55) 28%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0) 75%)",
                  }}
                />
                <span className="absolute top-[24px] left-[24px] lg:top-[28px] lg:left-[28px] inline-flex items-center px-[18px] py-[8px] bg-white rounded-full text-[16px] lg:text-[18px] font-semibold text-navy tracking-[-0.005em] shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
                  {item.label}
                </span>
                <p className="absolute left-[24px] right-[24px] bottom-[24px] lg:left-[28px] lg:right-[28px] lg:bottom-[28px] text-[14px] lg:text-[15px] leading-[1.55] text-white/90">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
