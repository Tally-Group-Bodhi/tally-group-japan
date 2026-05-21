"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const inquiryTypes = ["demo", "sales", "general", "partner", "support"] as const;
const companySizes = ["", "1-49", "50-249", "250-999", "1000+"] as const;
const timelines = ["", "immediate", "3months", "exploring"] as const;

const schema = z
  .object({
    inquiryType: z.enum(inquiryTypes),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    companyName: z.string().min(1, "Company name is required"),
    workEmail: z.string().email("Please enter a valid email"),
    phone: z.string().optional(),
    jobTitle: z.string().optional(),
    companySize: z.enum(companySizes).optional(),
    solutionTallyPlus: z.boolean().optional(),
    solutionTallyGlass: z.boolean().optional(),
    solutionOther: z.boolean().optional(),
    solutionOtherText: z.string().optional(),
    timeline: z.enum(timelines).optional(),
    productInUse: z.string().optional(),
    issueDescription: z.string().optional(),
    message: z.string().optional(),
    consent: z.literal(true, {
      error: () => "Please agree to the Privacy Policy",
    }),
  })
  .superRefine((data, ctx) => {
    const needsSolutions =
      data.inquiryType === "demo" || data.inquiryType === "sales";
    if (needsSolutions) {
      const any =
        data.solutionTallyPlus || data.solutionTallyGlass || data.solutionOther;
      if (!any) {
        ctx.addIssue({
          code: "custom",
          path: ["solutionTallyPlus"],
          message: "Please select at least one solution.",
        });
      }
      if (data.solutionOther && !data.solutionOtherText?.trim()) {
        ctx.addIssue({
          code: "custom",
          path: ["solutionOtherText"],
          message: "Please describe your solution or area.",
        });
      }
      if (!data.timeline) {
        ctx.addIssue({
          code: "custom",
          path: ["timeline"],
          message: "Please select a timeline.",
        });
      }
    }
    if (data.inquiryType === "support") {
      if (!data.productInUse?.trim()) {
        ctx.addIssue({
          code: "custom",
          path: ["productInUse"],
          message: "Please tell us which product you're using.",
        });
      }
      if (!data.issueDescription?.trim()) {
        ctx.addIssue({
          code: "custom",
          path: ["issueDescription"],
          message: "Please describe the issue.",
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
      firstName: "",
      lastName: "",
      companyName: "",
      workEmail: "",
      phone: "",
      jobTitle: "",
      companySize: "",
      solutionTallyPlus: false,
      solutionTallyGlass: false,
      solutionOther: false,
      solutionOtherText: "",
      timeline: "",
      productInUse: "",
      issueDescription: "",
      message: "",
      consent: undefined as unknown as true,
    },
  });

  const inquiryType = watch("inquiryType");
  const otherChecked = watch("solutionOther");

  const showSalesDemo = inquiryType === "demo" || inquiryType === "sales";
  const showSupport = inquiryType === "support";

  useEffect(() => {
    if (!otherChecked) {
      setValue("solutionOtherText", "");
    }
  }, [otherChecked, setValue]);

  const onSubmit = async (data: FormData) => {
    console.log("Demo contact form submitted:", data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-[20px]"
    >
      {isSubmitSuccessful && (
        <div
          role="status"
          className="rounded-xl border border-turquoise/40 bg-turquoise/10 px-[20px] py-[16px] text-sm font-semibold text-navy"
        >
          Thank you. Your message has been recorded for this prototype (no data
          was sent).
        </div>
      )}

      <div>
        <label htmlFor="inquiry-type" className={labelClass}>
          Inquiry type{reqMark}
        </label>
        <select
          id="inquiry-type"
          {...register("inquiryType")}
          className={selectClass}
        >
          <option value="demo">Request a Demo</option>
          <option value="sales">Contact Sales</option>
          <option value="general">General Inquiry</option>
          <option value="partner">Partner Inquiry</option>
          <option value="support">Support</option>
        </select>
        <p className="mt-1 text-xs text-fg2">
          Choose the option that best describes your inquiry.
        </p>
      </div>

      <h4 className={sectionTitleClass}>Your information</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
        <div>
          <label htmlFor="first-name" className={labelClass}>
            First name{reqMark}
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
        <div>
          <label htmlFor="last-name" className={labelClass}>
            Last name{reqMark}
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
        <div>
          <label htmlFor="company-name" className={labelClass}>
            Company name{reqMark}
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
            Work email{reqMark}
          </label>
          <input
            id="work-email"
            type="email"
            autoComplete="email"
            {...register("workEmail")}
            className={inputClass}
          />
          {errors.workEmail && (
            <p className={errorClass}>{errors.workEmail.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone number
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            {...register("phone")}
            className={inputClass}
            dir="ltr"
          />
        </div>
        <div>
          <label htmlFor="job-title" className={labelClass}>
            Job title
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

      <div>
        <label htmlFor="company-size" className={labelClass}>
          Company size
        </label>
        <select
          id="company-size"
          {...register("companySize")}
          className={selectClass}
        >
          <option value="">Select…</option>
          <option value="1-49">1–49</option>
          <option value="50-249">50–249</option>
          <option value="250-999">250–999</option>
          <option value="1000+">1,000+</option>
        </select>
      </div>

      {showSalesDemo && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] items-start">
          <fieldset className="min-w-0">
            <legend className={labelClass}>
              Solution(s)/Area(s) of Interest{reqMark}
            </legend>
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <label className="inline-flex items-center gap-2 text-sm text-fg1 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("solutionTallyPlus")}
                    className="h-[18px] w-[18px] accent-navy"
                  />
                  <span>Tally+</span>
                </label>
                <label className="inline-flex items-center gap-2 text-sm text-fg1 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("solutionTallyGlass")}
                    className="h-[18px] w-[18px] accent-navy"
                  />
                  <span>Tally Glass</span>
                </label>
              </div>
              <div className="flex flex-wrap items-start gap-x-3 gap-y-2 w-full">
                <label className="inline-flex items-center gap-2 text-sm text-fg1 cursor-pointer pt-[6px]">
                  <input
                    type="checkbox"
                    {...register("solutionOther")}
                    className="h-[18px] w-[18px] accent-navy"
                  />
                  <span>Other</span>
                </label>
                {otherChecked && (
                  <div className="flex-1 min-w-[12rem]">
                    <label
                      htmlFor="solution-other-text"
                      className="sr-only"
                    >
                      Other — describe your solution or area
                    </label>
                    <textarea
                      id="solution-other-text"
                      rows={2}
                      placeholder="Describe your solution or area…"
                      {...register("solutionOtherText")}
                      className={`${inputClass} resize-y min-h-[44px]`}
                    />
                  </div>
                )}
              </div>
            </div>
            <p className="mt-2 text-xs text-fg2">
              Select all that apply. If you choose Other, add a comment in the
              field beside it (required when Other is checked).
            </p>
            {errors.solutionTallyPlus && (
              <p className={errorClass} role="alert">
                {errors.solutionTallyPlus.message}
              </p>
            )}
            {errors.solutionOtherText && (
              <p className={errorClass} role="alert">
                {errors.solutionOtherText.message}
              </p>
            )}
          </fieldset>

          <div>
            <label htmlFor="timeline" className={labelClass}>
              Implementation timeline{reqMark}
            </label>
            <select
              id="timeline"
              {...register("timeline")}
              className={selectClass}
              aria-describedby="timeline-hint"
            >
              <option value="">Select…</option>
              <option value="immediate">Immediately</option>
              <option value="3months">Within 3 months</option>
              <option value="exploring">
                Exploring / information gathering
              </option>
            </select>
            <p id="timeline-hint" className="mt-1 text-xs text-fg2">
              Helps us prioritize follow-up.
            </p>
            {errors.timeline && (
              <p className={errorClass}>{errors.timeline.message}</p>
            )}
          </div>
        </div>
      )}

      {showSupport && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
          <div>
            <label htmlFor="product-in-use" className={labelClass}>
              Product in use{reqMark}
            </label>
            <input
              id="product-in-use"
              type="text"
              {...register("productInUse")}
              className={inputClass}
            />
            {errors.productInUse && (
              <p className={errorClass}>{errors.productInUse.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="issue-description" className={labelClass}>
              Description of issue{reqMark}
            </label>
            <textarea
              id="issue-description"
              rows={3}
              {...register("issueDescription")}
              className={`${inputClass} resize-y min-h-[68px]`}
            />
            {errors.issueDescription && (
              <p className={errorClass}>{errors.issueDescription.message}</p>
            )}
          </div>
        </div>
      )}

      <h4 className={sectionTitleClass}>Message</h4>

      <div>
        <label htmlFor="message" className={labelClass}>
          Please provide details about your request{" "}
          <span className="font-normal text-fg2">(Optional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className={`${inputClass} resize-y`}
        />
      </div>

      <p className="text-xs text-fg2 leading-[1.55]">
        <strong className="text-navy">Privacy notice:</strong> The information
        you provide will be used to respond to your inquiry and improve our
        services. Please review our{" "}
        <a
          href="/privacy"
          className="text-navy underline hover:text-turquoise"
        >
          Privacy Policy
        </a>{" "}
        for more details.
      </p>

      <div className="flex items-start gap-2">
        <input
          id="consent"
          type="checkbox"
          {...register("consent")}
          className="mt-[3px] h-[18px] w-[18px] accent-navy"
        />
        <label htmlFor="consent" className="text-sm text-fg1">
          I agree to the Privacy Policy{reqMark}
        </label>
      </div>
      {errors.consent && (
        <p className={errorClass}>{errors.consent.message}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 px-5 py-[12px] rounded-lg text-sm font-semibold bg-navy text-white border border-navy hover:bg-navy-dark hover:border-navy-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting…" : "Submit"}
        <span className="material-symbols-outlined text-[16px]">
          arrow_forward
        </span>
      </button>
    </form>
  );
}
