"use client";

import { motion } from "framer-motion";

export function TestimonialsSectionUS() {
  return (
    <section className="py-[96px] lg:py-[120px]">
      <div className="max-w-[1600px] mx-auto px-8">
        <motion.div
          className="max-w-[720px] mx-auto text-center mb-[56px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[28px] sm:text-[36px] lg:text-[60px] font-light leading-[1.15] tracking-[-0.02em] text-navy">
            The #1 trusted platform for energy retailers, operators &amp; contact centres
          </h2>
        </motion.div>

        <motion.div
          className="max-w-[860px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="bg-white border border-stroke1 rounded-2xl p-[40px] lg:p-[56px] shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <div className="text-xs font-semibold text-fg2 uppercase tracking-[0.1em] mb-[24px]">
              Customer story
            </div>

            <div className="mb-[28px]">
              <div className="text-[20px] lg:text-[24px] font-bold text-navy leading-[1.2] tracking-[-0.01em]">
                Alinta Energy
              </div>
              <div className="text-[15px] text-fg2 mt-[4px]">
                Leading Australian energy retailer
              </div>
            </div>

            <blockquote className="m-0 p-0 text-[17px] lg:text-[19px] leading-[1.7] text-fg1 tracking-[-0.005em]">
              In the first month of rolling out Glass Vision we cut average handle time by 38 seconds. Agents no longer have to swap between four tabs to answer a billing question. It speaks energy out of the box — NMIs, embedded networks, life-support flags. We no longer have to pay consultants to teach our CRM what our business does.
            </blockquote>

            <div className="flex items-center gap-[14px] mt-[32px]">
              <div
                className="w-12 h-12 rounded-full text-white text-sm font-semibold grid place-items-center"
                style={{
                  background: "linear-gradient(135deg, #2C365D, #1E2840)",
                }}
              >
                AP
              </div>
              <div>
                <div className="text-[15px] font-semibold text-fg1">
                  Anika Phan
                </div>
                <div className="text-[13px] text-fg2">
                  Head of Customer Operations
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
