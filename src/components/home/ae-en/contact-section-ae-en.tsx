"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useMarketingHref } from "@/contexts/marketing-region";
import { subscribeToMailchimp } from "@/lib/mailchimp";

type SubmitStatus = "idle" | "loading" | "success" | "already" | "error";

export function ContactSectionAEEn() {
  const href = useMarketingHref();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    companyName: "",
    honeypot: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setErrorMessage("");

    const result = await subscribeToMailchimp({
      email: form.businessEmail,
      firstName: form.firstName,
      lastName: form.lastName,
      company: form.companyName,
      region: "AE-EN",
      honeypot: form.honeypot,
    });

    if (result.ok && result.alreadySubscribed) {
      setStatus("already");
    } else if (result.ok) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMessage(
        result.rawMessage.replace(/^0\s*-\s*/, "") ||
          "Something went wrong. Please try again.",
      );
    }
  };

  const inputClass =
    "w-full border border-stroke1 rounded-lg px-[14px] py-[11px] text-[15px] text-fg1 bg-white placeholder:text-fg2/60 transition-all focus:outline-none focus:border-navy focus:ring-[3px] focus:ring-navy/10";

  const isSubmitted = status === "success" || status === "already";
  const buttonLabel =
    status === "loading"
      ? "Subscribing…"
      : status === "success"
        ? "Check your inbox"
        : status === "already"
          ? "Already subscribed"
          : "Subscribe";

  return (
    <>
      <section className="py-[64px] lg:py-[80px] border-t border-stroke1 bg-bg2">
        <div className="max-w-[1600px] mx-auto px-8">
          <motion.div
            className="max-w-[560px]"
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
              className="mt-[24px] flex flex-col gap-[16px]"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px]">
                <div>
                  <label
                    htmlFor="newsletter-firstName"
                    className="block text-[13px] font-medium text-fg1 mb-[6px]"
                  >
                    First name<span className="text-red-500">*</span>
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
                    className="block text-[13px] font-medium text-fg1 mb-[6px]"
                  >
                    Last name<span className="text-red-500">*</span>
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
                  className="block text-[13px] font-medium text-fg1 mb-[6px]"
                >
                  Business email<span className="text-red-500">*</span>
                </label>
                <input
                  id="newsletter-businessEmail"
                  name="businessEmail"
                  type="email"
                  value={form.businessEmail}
                  onChange={handleChange}
                  placeholder="Enter business email"
                  required
                  autoComplete="email"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="newsletter-companyName"
                  className="block text-[13px] font-medium text-fg1 mb-[6px]"
                >
                  Company name<span className="text-red-500">*</span>
                </label>
                <input
                  id="newsletter-companyName"
                  name="companyName"
                  type="text"
                  value={form.companyName}
                  onChange={handleChange}
                  placeholder="Enter company"
                  required
                  autoComplete="organization"
                  className={inputClass}
                />
              </div>

              <div aria-hidden="true" className="sr-only">
                <label htmlFor="newsletter-honeypot">
                  Leave this field empty
                </label>
                <input
                  id="newsletter-honeypot"
                  type="text"
                  name="honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.honeypot}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading" || isSubmitted}
                className="mt-[8px] w-full sm:w-auto sm:self-start inline-flex items-center justify-center gap-2 px-7 py-[12px] rounded-lg text-[15px] font-semibold bg-navy text-white border border-navy hover:bg-navy-dark hover:border-navy-dark transition-all disabled:opacity-60 shadow-sm"
              >
                {buttonLabel}
                {status === "idle" && (
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                )}
              </button>

              {status === "success" && (
                <p
                  role="status"
                  className="text-[14px] leading-[1.5] text-navy"
                >
                  Almost there — check your inbox to confirm your subscription.
                </p>
              )}
              {status === "already" && (
                <p
                  role="status"
                  className="text-[14px] leading-[1.5] text-fg2"
                >
                  You&apos;re already on the list. Thanks for sticking with us!
                </p>
              )}
              {status === "error" && (
                <p
                  role="alert"
                  className="text-[14px] leading-[1.5] text-red-600"
                >
                  {errorMessage}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </section>

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
      </section>
    </>
  );
}
