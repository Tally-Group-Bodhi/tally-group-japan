"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useMarketingHref } from "@/contexts/marketing-region";
import { subscribeToMailchimp } from "@/lib/mailchimp";

type SubmitStatus = "idle" | "loading" | "success" | "already" | "error";

export function ContactSectionAE() {
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
      region: "AE",
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
          "حدث خطأ. يرجى المحاولة مرة أخرى.",
      );
    }
  };

  const inputClass =
    "w-full border border-stroke1 rounded-lg px-[14px] py-[11px] text-[15px] text-fg1 bg-white placeholder:text-fg2/60 transition-all focus:outline-none focus:border-navy focus:ring-[3px] focus:ring-navy/10";

  const isSubmitted = status === "success" || status === "already";
  const buttonLabel =
    status === "loading"
      ? "جارٍ الاشتراك…"
      : status === "success"
        ? "تحقق من بريدك"
        : status === "already"
          ? "مشترك بالفعل"
          : "اشترك";

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
              اشترك في نشرتنا الإخبارية
            </h3>
            <p className="mt-[12px] text-[15px] leading-[1.8] text-fg2">
              نظرة من الداخل على تقنيات تجزئة الطاقة، وتحديثات المنتجات، وآخر المستجدات من فريق Tally.
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
                    الاسم الأول<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="newsletter-firstName"
                    name="firstName"
                    type="text"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="الاسم الأول"
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
                    اسم العائلة<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="newsletter-lastName"
                    name="lastName"
                    type="text"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="اسم العائلة"
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
                  البريد الإلكتروني للعمل<span className="text-red-500">*</span>
                </label>
                <input
                  id="newsletter-businessEmail"
                  name="businessEmail"
                  type="email"
                  value={form.businessEmail}
                  onChange={handleChange}
                  placeholder="أدخل بريدك الإلكتروني"
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
                  اسم الشركة<span className="text-red-500">*</span>
                </label>
                <input
                  id="newsletter-companyName"
                  name="companyName"
                  type="text"
                  value={form.companyName}
                  onChange={handleChange}
                  placeholder="أدخل اسم الشركة"
                  required
                  autoComplete="organization"
                  className={inputClass}
                />
              </div>

              <div aria-hidden="true" className="sr-only">
                <label htmlFor="newsletter-honeypot">
                  اترك هذا الحقل فارغًا
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
                  className="text-[14px] leading-[1.8] text-navy"
                >
                  تحقق من بريدك الإلكتروني لتأكيد اشتراكك.
                </p>
              )}
              {status === "already" && (
                <p
                  role="status"
                  className="text-[14px] leading-[1.8] text-fg2"
                >
                  أنت مشترك بالفعل في قائمتنا. شكرًا لك!
                </p>
              )}
              {status === "error" && (
                <p
                  role="alert"
                  className="text-[14px] leading-[1.8] text-red-600"
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
            <h2 className="text-[28px] sm:text-[36px] lg:text-[60px] font-light leading-[1.3] tracking-[-0.02em] text-white">
              جاهز للانطلاق؟
            </h2>
            <p className="mt-[16px] text-[17px] lg:text-[19px] leading-[1.8] text-white/75 max-w-[48ch] mx-auto">
              احجز عرضًا تجريبيًا، اطرح سؤالًا، أو فقط ألقِ التحية. سنعاود التواصل معك خلال يوم عمل واحد.
            </p>

            <div className="flex flex-wrap gap-3 mt-[32px] justify-center">
              <Link
                href={href("/contact")}
                className="inline-flex items-center gap-2 px-7 py-[13px] rounded-full text-[15px] font-semibold bg-turquoise text-navy border border-turquoise hover:bg-turquoise-hover hover:border-turquoise-hover transition-all shadow-sm"
              >
                احجز عرضًا تجريبيًا
              </Link>
              <Link
                href={href("/contact")}
                className="inline-flex items-center gap-2 px-7 py-[13px] rounded-full text-[15px] font-semibold text-white border border-white/25 hover:bg-white/10 transition-all"
              >
                تواصل معنا
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
