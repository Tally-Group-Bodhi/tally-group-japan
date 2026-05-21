"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useMarketingHref } from "@/contexts/marketing-region";

export function ContactSectionUS() {
  const href = useMarketingHref();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    companyName: "",
  });
  const [subscribed, setSubscribed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass =
    "w-full border border-white/20 rounded-lg px-[14px] py-[11px] text-[15px] text-white bg-white/10 placeholder:text-white/50 transition-all focus:outline-none focus:border-turquoise focus:ring-[3px] focus:ring-turquoise/20";

  return (
    <>
      <section className="relative px-4 sm:px-6 pt-[32px] sm:pt-[48px] pb-[12px] sm:pb-[16px]">
        <div className="absolute inset-x-4 top-[32px] bottom-[12px] sm:inset-x-6 sm:top-[48px] sm:bottom-[16px] rounded-[20px] overflow-hidden">
          <Image
            src="/home/us/newsletter-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={95}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/55 to-black/30" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 py-[64px] lg:py-[96px] flex justify-end">
          <motion.div
            className="w-full max-w-[560px] rounded-2xl border border-white/25 bg-white/15 p-[28px] sm:p-[36px] backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-[22px] sm:text-[28px] font-bold text-white tracking-[-0.02em] leading-[1.2]">
              Subscribe to our newsletter
            </h3>
            <p className="mt-[12px] text-[15px] leading-[1.6] text-white/80">
              The latest in energy retail technology, product updates, and insider intel from the Tally team — straight to your inbox.
            </p>

            <form
              className="mt-[24px] flex flex-col gap-[16px]"
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px]">
                <div>
                  <label
                    htmlFor="newsletter-firstName"
                    className="block text-[13px] font-medium text-white/90 mb-[6px]"
                  >
                    First name<span className="text-turquoise">*</span>
                  </label>
                  <input
                    id="newsletter-firstName"
                    name="firstName"
                    type="text"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    required
                    autoComplete="given-name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="newsletter-lastName"
                    className="block text-[13px] font-medium text-white/90 mb-[6px]"
                  >
                    Last name<span className="text-turquoise">*</span>
                  </label>
                  <input
                    id="newsletter-lastName"
                    name="lastName"
                    type="text"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    required
                    autoComplete="family-name"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="newsletter-businessEmail"
                  className="block text-[13px] font-medium text-white/90 mb-[6px]"
                >
                  Business email<span className="text-turquoise">*</span>
                </label>
                <input
                  id="newsletter-businessEmail"
                  name="businessEmail"
                  type="email"
                  value={form.businessEmail}
                  onChange={handleChange}
                  placeholder="Enter your work email"
                  required
                  autoComplete="email"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="newsletter-companyName"
                  className="block text-[13px] font-medium text-white/90 mb-[6px]"
                >
                  Company name<span className="text-turquoise">*</span>
                </label>
                <input
                  id="newsletter-companyName"
                  name="companyName"
                  type="text"
                  value={form.companyName}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  required
                  autoComplete="organization"
                  className={inputClass}
                />
              </div>

              <button
                type="submit"
                disabled={subscribed}
                className="mt-[8px] w-full sm:w-auto sm:self-start inline-flex items-center justify-center gap-2 px-7 py-[12px] rounded-lg text-[15px] font-semibold bg-turquoise text-navy border border-turquoise hover:bg-turquoise-hover hover:border-turquoise-hover transition-all disabled:opacity-60 shadow-sm"
              >
                {subscribed ? "Subscribed" : "Subscribe"}
                {!subscribed && (
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="px-4 sm:px-6 pt-[12px] sm:pt-[16px] pb-[48px] sm:pb-[64px]">
        <div className="relative overflow-hidden mx-auto max-w-[1680px] rounded-3xl bg-navy-dark text-white px-[24px] py-[64px] sm:px-[48px] sm:py-[80px] lg:px-[96px] lg:py-[112px]">
          <div
            aria-hidden
            className="absolute -right-[300px] -top-[300px] w-[1000px] h-[1000px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(0,210,162,0.2), transparent 60%)",
            }}
          />

          <div className="relative max-w-[1240px] mx-auto text-center">
            <motion.div
              className="max-w-[640px] mx-auto"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[28px] sm:text-[36px] lg:text-[60px] font-light leading-[1.15] tracking-[-0.02em] text-white">
                Ready to discuss your roadmap?
              </h2>
              <p className="mt-[16px] text-[17px] lg:text-[19px] leading-[1.6] text-white/75 max-w-[50ch] mx-auto">
                Whether you&apos;re entering a new market or optimizing operations, our team can help you define the right path forward.
              </p>

              <div className="flex flex-wrap gap-3 mt-[32px] justify-center">
                <Link
                  href={href("/contact")}
                  className="inline-flex items-center gap-2 px-7 py-[13px] rounded-full text-[15px] font-semibold bg-turquoise text-navy border border-turquoise hover:bg-turquoise-hover hover:border-turquoise-hover transition-all shadow-sm"
                >
                  Book a demo
                </Link>
                <Link
                  href={href("/contact")}
                  className="inline-flex items-center gap-2 px-7 py-[13px] rounded-full text-[15px] font-semibold text-white border border-white/25 hover:bg-white/10 transition-all"
                >
                  Contact us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
