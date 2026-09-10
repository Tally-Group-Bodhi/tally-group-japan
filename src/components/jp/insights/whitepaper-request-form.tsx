"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MarketingLink } from "@/components/marketing/marketing-link";

const WEB3FORMS_ACCESS_KEY = "11577984-6202-4abc-a5b9-c726a76b58c8";

const schema = z.object({
  lastName: z.string().min(1, "姓を入力してください"),
  firstName: z.string().min(1, "名を入力してください"),
  companyName: z.string().min(1, "会社名を入力してください"),
  workEmail: z.string().email("有効なメールアドレスを入力してください"),
  phone: z.string().min(1, "電話番号を入力してください"),
  jobTitle: z.string().optional(),
  privacyAgreed: z.literal(true, {
    error: () => "プライバシーポリシーへの同意が必要です",
  }),
  botcheck: z.boolean().optional(),
});

type FormData = z.infer<typeof schema>;

const inputClass =
  "w-full px-[14px] py-[10px] rounded-lg border border-stroke1 bg-white text-sm text-fg1 placeholder:text-fg2/50 outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-all";

const labelClass = "block text-[13px] font-medium text-fg1 mb-[6px]";
const reqMark = <span className="text-red-600 font-semibold"> *</span>;
const errorClass = "mt-1 text-xs text-red-600";

type WhitepaperRequestFormProps = {
  whitepaperTitle: string;
};

export function WhitepaperRequestForm({
  whitepaperTitle,
}: WhitepaperRequestFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      lastName: "",
      firstName: "",
      companyName: "",
      workEmail: "",
      phone: "",
      jobTitle: "",
      privacyAgreed: undefined as unknown as true,
    },
  });

  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `資料請求: ${whitepaperTitle}`,
        from_name: `${data.lastName} ${data.firstName}`,
        botcheck: data.botcheck ?? false,
        資料名: whitepaperTitle,
        会社名: data.companyName,
        メールアドレス: data.workEmail,
        電話番号: data.phone,
        役職: data.jobTitle || "（未記入）",
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
          送信が完了しました。追って、資料を送信いたします。
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
        <div>
          <label htmlFor="wp-last-name" className={labelClass}>
            姓{reqMark}
          </label>
          <input
            id="wp-last-name"
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
          <label htmlFor="wp-first-name" className={labelClass}>
            名{reqMark}
          </label>
          <input
            id="wp-first-name"
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

      <div>
        <label htmlFor="wp-company-name" className={labelClass}>
          会社名{reqMark}
        </label>
        <input
          id="wp-company-name"
          type="text"
          autoComplete="organization"
          {...register("companyName")}
          className={inputClass}
        />
        {errors.companyName && (
          <p className={errorClass}>{errors.companyName.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
        <div>
          <label htmlFor="wp-work-email" className={labelClass}>
            メールアドレス（勤務先）{reqMark}
          </label>
          <input
            id="wp-work-email"
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
        <div>
          <label htmlFor="wp-phone" className={labelClass}>
            電話番号{reqMark}
          </label>
          <input
            id="wp-phone"
            type="tel"
            autoComplete="tel"
            {...register("phone")}
            className={inputClass}
            dir="ltr"
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="wp-job-title" className={labelClass}>
          役職
        </label>
        <input
          id="wp-job-title"
          type="text"
          autoComplete="organization-title"
          {...register("jobTitle")}
          className={inputClass}
        />
      </div>

      <p className="text-[13px] leading-[1.7] text-fg2 m-0">
        お預かりした個人情報は、
        <MarketingLink
          href="/privacy"
          className="text-navy underline underline-offset-2 hover:text-turquoise transition-colors"
        >
          個人情報保護方針
        </MarketingLink>
        に基づき適切に取り扱います。
      </p>

      <label className="inline-flex items-start gap-2 text-sm text-fg1 cursor-pointer">
        <input
          type="checkbox"
          {...register("privacyAgreed")}
          className="mt-[2px] h-[18px] w-[18px] accent-navy shrink-0"
        />
        <span>
          プライバシーポリシーに同意します
          {reqMark}
        </span>
      </label>
      {errors.privacyAgreed && (
        <p className={errorClass}>{errors.privacyAgreed.message}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center w-full px-[20px] py-[14px] rounded-lg text-[15px] font-semibold bg-turquoise text-navy hover:bg-turquoise-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "送信中…" : "資料を請求する"}
      </button>
    </form>
  );
}
