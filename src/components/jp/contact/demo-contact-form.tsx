"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { jpCtaSubmitClass } from "@/components/jp/cta-button-classes";

const WEB3FORMS_ACCESS_KEY = "e0687fb5-c504-4a5e-9e43-b6838233daa7";

const inquiryTypes = ["demo", "sales", "general", "partner"] as const;

const schema = z
  .object({
    inquiryType: z.enum(inquiryTypes),
    lastName: z.string().min(1, "姓を入力してください"),
    firstName: z.string().min(1, "名を入力してください"),
    companyName: z.string().min(1, "会社名を入力してください"),
    workEmail: z.string().email("有効なメールアドレスを入力してください"),
    phone: z.string().min(1, "電話番号を入力してください"),
    jobTitle: z.string().optional(),
    solutionO2C: z.boolean().optional(),
    solutionCustomerEngagement: z.boolean().optional(),
    solutionDecarbon: z.boolean().optional(),
    solutionSalesManagement: z.boolean().optional(),
    solutionOther: z.boolean().optional(),
    solutionOtherText: z.string().optional(),
    message: z.string().optional(),
    botcheck: z.boolean().optional(),
  })
  .superRefine((data, ctx) => {
    const needsSolutions =
      data.inquiryType === "demo" || data.inquiryType === "sales";
    if (needsSolutions) {
      const any =
        data.solutionO2C ||
        data.solutionCustomerEngagement ||
        data.solutionDecarbon ||
        data.solutionSalesManagement ||
        data.solutionOther;
      if (!any) {
        ctx.addIssue({
          code: "custom",
          path: ["solutionO2C"],
          message: "ご関心のあるソリューション・領域を1つ以上選択してください。",
        });
      }
      if (data.solutionOther && !data.solutionOtherText?.trim()) {
        ctx.addIssue({
          code: "custom",
          path: ["solutionOtherText"],
          message: "「その他」を選択した場合は、詳細をご記入ください。",
        });
      }
    }
  });

type FormData = z.infer<typeof schema>;

const inputClass =
  "w-full px-[14px] py-[10px] rounded-lg border border-stroke1 bg-white text-sm text-fg1 placeholder:text-fg2/50 outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-all";

const selectClass = `${inputClass} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%236B7280%22%20d%3D%22M3%204.5L6%207.5L9%204.5%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_12px_center] bg-no-repeat pr-10`;

const labelClass = "block text-[13px] font-medium text-fg1 mb-[6px]";
const reqMark = <span className="text-red-600 font-semibold"> *</span>;
const errorClass = "mt-1 text-xs text-red-600";
const sectionTitleClass =
  "text-[15px] font-semibold text-navy pt-[8px] border-t border-stroke1";

export function DemoContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      inquiryType: "demo",
      lastName: "",
      firstName: "",
      companyName: "",
      workEmail: "",
      phone: "",
      jobTitle: "",
      solutionO2C: false,
      solutionCustomerEngagement: false,
      solutionDecarbon: false,
      solutionSalesManagement: false,
      solutionOther: false,
      solutionOtherText: "",
      message: "",
    },
  });

  const [submitError, setSubmitError] = useState<string | null>(null);

  const inquiryType = watch("inquiryType");
  const otherChecked = watch("solutionOther");

  const showSolutions = inquiryType === "demo" || inquiryType === "sales";

  useEffect(() => {
    if (!otherChecked) {
      setValue("solutionOtherText", "");
    }
  }, [otherChecked, setValue]);

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    const inquiryLabels: Record<FormData["inquiryType"], string> = {
      demo: "デモのご依頼",
      sales: "営業へのお問い合わせ",
      general: "一般的なお問い合わせ",
      partner: "パートナーに関するお問い合わせ",
    };
    const solutions = [
      data.solutionO2C && "契約・請求・回収管理（O2C）",
      data.solutionCustomerEngagement && "顧客対応・顧客接点",
      data.solutionDecarbon && "脱炭素ソリューション",
      data.solutionSalesManagement && "販売管理",
      data.solutionOther && `その他: ${data.solutionOtherText ?? ""}`,
    ]
      .filter(Boolean)
      .join(" / ");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `お問い合わせ: ${inquiryLabels[data.inquiryType]}`,
        from_name: `${data.lastName} ${data.firstName}`,
        botcheck: data.botcheck ?? false,
        お問い合わせ種別: inquiryLabels[data.inquiryType],
        会社名: data.companyName,
        メールアドレス: data.workEmail,
        電話番号: data.phone,
        役職: data.jobTitle || "（未記入）",
        ...(solutions ? { ご関心のあるソリューション: solutions } : {}),
        ご依頼内容: data.message || "（未記入）",
      }),
    });
    const json = await res.json();
    if (!json.success) {
      setSubmitError("送信に失敗しました。時間をおいて再度お試しください。");
      throw new Error("Web3Forms submission failed");
    }
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-[20px]"
    >
      <input
        type="checkbox"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        {...register("botcheck")}
        className="hidden"
      />

      {isSubmitSuccessful && (
        <div
          role="status"
          className="rounded-xl border border-turquoise/40 bg-turquoise/10 px-[20px] py-[16px] text-sm font-semibold text-navy"
        >
          送信が完了しました。担当者よりご連絡いたします。
        </div>
      )}

      {submitError && (
        <div
          role="alert"
          className="rounded-xl border border-red-300 bg-red-50 px-[20px] py-[16px] text-sm font-semibold text-red-700"
        >
          {submitError}
        </div>
      )}

      <div>
        <label htmlFor="inquiry-type" className={labelClass}>
          お問い合わせ種別{reqMark}
        </label>
        <select
          id="inquiry-type"
          {...register("inquiryType")}
          className={selectClass}
        >
          <option value="demo">デモのご依頼</option>
          <option value="sales">営業へのお問い合わせ</option>
          <option value="general">一般的なお問い合わせ</option>
          <option value="partner">パートナーに関するお問い合わせ</option>
        </select>
        <p className="mt-1 text-xs text-fg2">該当する内容を１つ選択してください</p>
      </div>

      <h4 className={sectionTitleClass}>お客様情報</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
        <div>
          <label htmlFor="last-name" className={labelClass}>
            姓{reqMark}
          </label>
          <input
            id="last-name"
            type="text"
            autoComplete="family-name"
            {...register("lastName")}
            className={inputClass}
          />
          {errors.lastName && (
            <p className={errorClass}>{errors.lastName.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="first-name" className={labelClass}>
            名{reqMark}
          </label>
          <input
            id="first-name"
            type="text"
            autoComplete="given-name"
            {...register("firstName")}
            className={inputClass}
          />
          {errors.firstName && (
            <p className={errorClass}>{errors.firstName.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
        <div>
          <label htmlFor="company-name" className={labelClass}>
            会社名{reqMark}
          </label>
          <input
            id="company-name"
            type="text"
            autoComplete="organization"
            {...register("companyName")}
            className={inputClass}
          />
          {errors.companyName && (
            <p className={errorClass}>{errors.companyName.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="work-email" className={labelClass}>
            メールアドレス（勤務先）{reqMark}
          </label>
          <input
            id="work-email"
            type="email"
            autoComplete="email"
            {...register("workEmail")}
            className={inputClass}
            dir="ltr"
          />
          {errors.workEmail && (
            <p className={errorClass}>{errors.workEmail.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
        <div>
          <label htmlFor="phone" className={labelClass}>
            電話番号{reqMark}
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            {...register("phone")}
            className={inputClass}
            dir="ltr"
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="job-title" className={labelClass}>
            役職
          </label>
          <input
            id="job-title"
            type="text"
            autoComplete="organization-title"
            {...register("jobTitle")}
            className={inputClass}
          />
        </div>
      </div>

      {showSolutions && (
        <fieldset className="min-w-0">
          <legend className={labelClass}>
            ご関心のあるソリューション・領域{reqMark}
          </legend>
          <div className="flex flex-col gap-[10px]">
            <label className="inline-flex items-center gap-2 text-sm text-fg1 cursor-pointer">
              <input
                type="checkbox"
                {...register("solutionO2C")}
                className="h-[18px] w-[18px] accent-navy"
              />
              <span>契約・請求・回収管理（O2C）</span>
            </label>
            <label className="inline-flex items-center gap-2 text-sm text-fg1 cursor-pointer">
              <input
                type="checkbox"
                {...register("solutionCustomerEngagement")}
                className="h-[18px] w-[18px] accent-navy"
              />
              <span>顧客対応・顧客接点</span>
            </label>
            <label className="inline-flex items-center gap-2 text-sm text-fg1 cursor-pointer">
              <input
                type="checkbox"
                {...register("solutionDecarbon")}
                className="h-[18px] w-[18px] accent-navy"
              />
              <span>脱炭素ソリューション</span>
            </label>
            <label className="inline-flex items-center gap-2 text-sm text-fg1 cursor-pointer">
              <input
                type="checkbox"
                {...register("solutionSalesManagement")}
                className="h-[18px] w-[18px] accent-navy"
              />
              <span>販売管理</span>
            </label>
            <div className="flex flex-wrap items-start gap-x-3 gap-y-2 w-full">
              <label className="inline-flex items-center gap-2 text-sm text-fg1 cursor-pointer pt-[6px]">
                <input
                  type="checkbox"
                  {...register("solutionOther")}
                  className="h-[18px] w-[18px] accent-navy"
                />
                <span>その他</span>
              </label>
              {otherChecked && (
                <div className="flex-1 min-w-[12rem]">
                  <label htmlFor="solution-other-text" className="sr-only">
                    その他の詳細
                  </label>
                  <textarea
                    id="solution-other-text"
                    rows={2}
                    placeholder="詳細をご記入ください"
                    {...register("solutionOtherText")}
                    className={`${inputClass} resize-y min-h-[44px]`}
                  />
                </div>
              )}
            </div>
          </div>
          <p className="mt-2 text-xs text-fg2">複数選択可</p>
          <p className="mt-1 text-xs text-fg2">
            「その他」を選択した場合は、詳細をご記入ください（必須）。
          </p>
          {errors.solutionO2C && (
            <p className={errorClass} role="alert">
              {errors.solutionO2C.message}
            </p>
          )}
          {errors.solutionOtherText && (
            <p className={errorClass} role="alert">
              {errors.solutionOtherText.message}
            </p>
          )}
        </fieldset>
      )}

      <h4 className={sectionTitleClass}>お問い合わせ内容</h4>

      <div>
        <label htmlFor="message" className={labelClass}>
          ご依頼内容の詳細をご記入ください{" "}
          <span className="font-normal text-fg2">（任意）</span>
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className={`${inputClass} resize-y`}
        />
      </div>

      <p className="text-xs text-fg2 leading-[1.55]">
        お預かりした個人情報は、個人情報保護方針に基づき適切に取り扱います。
      </p>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full ${jpCtaSubmitClass}`}
      >
        {isSubmitting ? "送信中…" : "送信"}
        <span className="material-symbols-outlined text-[16px]">
          arrow_forward
        </span>
      </button>
    </form>
  );
}
