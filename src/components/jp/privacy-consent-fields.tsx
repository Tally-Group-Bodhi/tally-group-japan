import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { MarketingLink } from "@/components/marketing/marketing-link";

const errorClass = "mt-1 text-xs text-red-600";

type PrivacyConsentFieldsProps = {
  checkboxId: string;
  registerProps: UseFormRegisterReturn;
  error?: FieldError;
  noticeClassName?: string;
};

export function PrivacyConsentFields({
  checkboxId,
  registerProps,
  error,
  noticeClassName = "text-[13px] leading-[1.7] text-fg2 m-0",
}: PrivacyConsentFieldsProps) {
  return (
    <div className="flex flex-col gap-[12px]">
      <p className={noticeClassName}>
        お預かりした個人情報は、
        <MarketingLink
          href="/privacy"
          className="text-navy font-medium underline underline-offset-2 hover:text-turquoise transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          個人情報に関する基本方針
        </MarketingLink>
        に基づき適切に取り扱います。
      </p>

      <div>
        <label
          htmlFor={checkboxId}
          className="inline-flex items-start gap-2 text-sm text-fg1 cursor-pointer"
        >
          <input
            id={checkboxId}
            type="checkbox"
            {...registerProps}
            className="mt-[2px] h-[18px] w-[18px] shrink-0 accent-navy"
          />
          <span>
            プライバシーポリシーに同意します
            <span className="text-red-600 font-semibold"> *</span>
          </span>
        </label>
        {error ? <p className={errorClass}>{error.message}</p> : null}
      </div>
    </div>
  );
}
