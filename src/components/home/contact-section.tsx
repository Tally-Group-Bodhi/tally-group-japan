"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export function ContactSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <>
      {/* Newsletter */}
      <section className="py-[64px] lg:py-[80px] border-t border-stroke1 bg-bg2">
        <div className="max-w-[1600px] mx-auto px-8">
          <motion.div
            className="max-w-[520px]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-[22px] sm:text-[28px] font-bold text-navy tracking-[-0.02em] leading-[1.2]">
              Subscribe to our newsletter
            </h3>
            <p className="mt-[12px] text-[15px] leading-[1.6] text-fg2">
              Gain an insider&apos;s view of energy retail technology, product
              updates and the latest from the Tally team.
            </p>

            <form
              className="mt-[24px] flex gap-[10px]"
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 min-w-0 border border-stroke1 rounded-full px-4 py-[12px] text-[15px] text-fg1 bg-white transition-all focus:outline-none focus:border-navy focus:ring-[3px] focus:ring-navy/10"
              />
              <button
                type="submit"
                disabled={subscribed}
                className="shrink-0 px-6 py-[12px] rounded-full text-[15px] font-semibold bg-navy text-white border border-navy hover:bg-navy-dark hover:border-navy-dark transition-all disabled:opacity-60 shadow-sm"
              >
                {subscribed ? "Subscribed" : "Subscribe"}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="contact"
        className="relative overflow-hidden py-[96px] lg:py-[120px] bg-navy text-white"
      >
        <div
          className="absolute -right-[300px] -top-[300px] w-[1000px] h-[1000px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,210,162,0.2), transparent 60%)",
          }}
        />

        <div className="relative max-w-[1600px] mx-auto px-8 text-center">
          <motion.div
            className="max-w-[640px] mx-auto"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[28px] sm:text-[36px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-white">
              Ready to power up?
            </h2>
            <p className="mt-[16px] text-[17px] lg:text-[19px] leading-[1.6] text-white/75 max-w-[48ch] mx-auto">
              Book a demo, ask a question, or just say hello. We&apos;ll get
              back to you within one business day.
            </p>

            <div className="flex flex-wrap gap-3 mt-[32px] justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-[13px] rounded-full text-[15px] font-semibold bg-turquoise text-navy border border-turquoise hover:bg-turquoise-hover hover:border-turquoise-hover transition-all shadow-sm"
              >
                Book a demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-[13px] rounded-full text-[15px] font-semibold text-white border border-white/25 hover:bg-white/10 transition-all"
              >
                Contact us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
