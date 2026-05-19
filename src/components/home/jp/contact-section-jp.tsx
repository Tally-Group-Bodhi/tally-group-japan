"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useMarketingHref } from "@/contexts/marketing-region";

export function ContactSectionJP() {
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
    "w-full border border-stroke1 rounded-lg px-[14px] py-[11px] text-[15px] text-fg1 bg-white placeholder:text-fg2/60 transition-all focus:outline-none focus:border-navy focus:ring-[3px] focus:ring-navy/10";

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
            <h3 className="text-[22px] sm:text-[28px] font-bold text-navy tracking-[-0.02em] leading-[1.4]">
              ニュースレターを購読する
            </h3>
            <p className="mt-[12px] text-[15px] leading-[1.7] text-fg2">
              エネルギー小売テクノロジーの最新動向、製品アップデート、Tallyチームからのインサイダー情報をお届けします。
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
                    className="block text-[13px] font-medium text-fg1 mb-[6px]"
                  >
                    名<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="newsletter-firstName"
                    name="firstName"
                    type="text"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="名"
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
                    姓<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="newsletter-lastName"
                    name="lastName"
                    type="text"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="姓"
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
                  会社メールアドレス<span className="text-red-500">*</span>
                </label>
                <input
                  id="newsletter-businessEmail"
                  name="businessEmail"
                  type="email"
                  value={form.businessEmail}
                  onChange={handleChange}
                  placeholder="会社メールアドレスを入力"
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
                  会社名<span className="text-red-500">*</span>
                </label>
                <input
                  id="newsletter-companyName"
                  name="companyName"
                  type="text"
                  value={form.companyName}
                  onChange={handleChange}
                  placeholder="会社名を入力"
                  required
                  autoComplete="organization"
                  className={inputClass}
                />
              </div>

              <button
                type="submit"
                disabled={subscribed}
                className="mt-[8px] w-full sm:w-auto sm:self-start inline-flex items-center justify-center gap-2 px-7 py-[12px] rounded-lg text-[15px] font-semibold bg-navy text-white border border-navy hover:bg-navy-dark hover:border-navy-dark transition-all disabled:opacity-60 shadow-sm"
              >
                {subscribed ? "購読済み" : "購読する"}
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
            <h2 className="text-[28px] sm:text-[36px] lg:text-[60px] font-light leading-[1.3] tracking-[-0.02em] text-white">
              準備はできましたか?
            </h2>
            <p className="mt-[16px] text-[17px] lg:text-[19px] leading-[1.7] text-white/75 max-w-[40ch] mx-auto">
              デモのご予約、ご質問、ご挨拶など、お気軽にお問い合わせください。1営業日以内にご返信いたします。
            </p>

            <div className="flex flex-wrap gap-3 mt-[32px] justify-center">
              <Link
                href={href("/contact")}
                className="inline-flex items-center gap-2 px-7 py-[13px] rounded-full text-[15px] font-semibold bg-turquoise text-navy border border-turquoise hover:bg-turquoise-hover hover:border-turquoise-hover transition-all shadow-sm"
              >
                デモを予約
              </Link>
              <Link
                href={href("/contact")}
                className="inline-flex items-center gap-2 px-7 py-[13px] rounded-full text-[15px] font-semibold text-white border border-white/25 hover:bg-white/10 transition-all"
              >
                お問い合わせ
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
