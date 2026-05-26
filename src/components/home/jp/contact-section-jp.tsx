"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useMarketingHref } from "@/contexts/marketing-region";
import { subscribeToMailchimp } from "@/lib/mailchimp";

type SubmitStatus = "idle" | "loading" | "success" | "already" | "error";

export function ContactSectionJP() {
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
      region: "JP",
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
          "エラーが発生しました。もう一度お試しください。",
      );
    }
  };

  const inputClass =
    "w-full border border-white/20 rounded-lg px-[14px] py-[11px] text-[15px] text-white bg-white/10 placeholder:text-white/50 transition-all focus:outline-none focus:border-turquoise focus:ring-[3px] focus:ring-turquoise/20";

  const isSubmitted = status === "success" || status === "already";
  const buttonLabel =
    status === "loading"
      ? "送信中…"
      : status === "success"
        ? "受信箱をご確認ください"
        : status === "already"
          ? "購読済み"
          : "購読する";

  return (
    <>
      <section className="relative px-4 sm:px-6 pt-[32px] sm:pt-[48px] pb-[12px] sm:pb-[16px]">
        <div className="absolute inset-x-4 top-[32px] bottom-[12px] sm:inset-x-6 sm:top-[48px] sm:bottom-[16px] rounded-[20px] overflow-hidden">
          <Image
            src="/home/jp/newsletter-bg.jpg"
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
            <h3 className="text-[22px] sm:text-[28px] font-bold text-white tracking-[-0.02em] leading-[1.4]">
              ニュースレターを購読する
            </h3>
            <p className="mt-[12px] text-[15px] leading-[1.7] text-white/80">
              エネルギー小売テクノロジーの最新動向、製品アップデート、Tallyチームからのインサイダー情報をお届けします。
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
                    className="block text-[13px] font-medium text-white/90 mb-[6px]"
                  >
                    名<span className="text-turquoise">*</span>
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
                    className="block text-[13px] font-medium text-white/90 mb-[6px]"
                  >
                    姓<span className="text-turquoise">*</span>
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
                  className="block text-[13px] font-medium text-white/90 mb-[6px]"
                >
                  会社メールアドレス<span className="text-turquoise">*</span>
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
                  className="block text-[13px] font-medium text-white/90 mb-[6px]"
                >
                  会社名<span className="text-turquoise">*</span>
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

              <div aria-hidden="true" className="sr-only">
                <label htmlFor="newsletter-honeypot">
                  この欄は空のままにしてください
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
                className="mt-[8px] w-full sm:w-auto sm:self-start inline-flex items-center justify-center gap-2 px-7 py-[12px] rounded-lg text-[15px] font-semibold bg-turquoise text-navy border border-turquoise hover:bg-turquoise-hover hover:border-turquoise-hover transition-all disabled:opacity-60 shadow-sm"
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
                  className="text-[14px] leading-[1.7] text-turquoise"
                >
                  確認メールをお送りしました。受信箱をご確認のうえ、購読を完了してください。
                </p>
              )}
              {status === "already" && (
                <p
                  role="status"
                  className="text-[14px] leading-[1.7] text-white/80"
                >
                  すでにご登録いただいています。いつもありがとうございます。
                </p>
              )}
              {status === "error" && (
                <p
                  role="alert"
                  className="text-[14px] leading-[1.7] text-red-300"
                >
                  {errorMessage}
                </p>
              )}
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
        </div>
      </section>
    </>
  );
}
