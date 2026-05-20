"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  product: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

type Language = "en" | "ar";

type TranslatedStrings = {
  firstName: string;
  lastName: string;
  firstNamePlaceholder: string;
  lastNamePlaceholder: string;
  firstNameRequired: string;
  lastNameRequired: string;
  email: string;
  emailPlaceholder: string;
  emailInvalid: string;
  phone: string;
  phonePlaceholder: string;
  interestedIn: string;
  selectProduct: string;
  allProducts: string;
  productBilling: string;
  productDigital: string;
  productAcquire: string;
  productCustomer: string;
  message: string;
  messagePlaceholder: string;
  messageMin: string;
  submit: string;
  submitting: string;
  successAlert: string;
};

const strings: Record<Language, TranslatedStrings> = {
  en: {
    firstName: "First name",
    lastName: "Last name",
    firstNamePlaceholder: "First name",
    lastNamePlaceholder: "Last name",
    firstNameRequired: "First name is required",
    lastNameRequired: "Last name is required",
    email: "Email",
    emailPlaceholder: "you@company.com",
    emailInvalid: "Please enter a valid email",
    phone: "Phone number",
    phonePlaceholder: "+971 50 123 4567",
    interestedIn: "I'm interested in",
    selectProduct: "Select a product",
    allProducts: "All Tally products",
    productBilling: "Tally Billing",
    productDigital: "Tally Digital",
    productAcquire: "Tally Acquire",
    productCustomer: "Tally Customer",
    message: "Message",
    messagePlaceholder:
      "Tell us a bit more about what you're looking for, and we'll make sure the right person gets back to you.",
    messageMin: "Message must be at least 10 characters",
    submit: "Send message",
    submitting: "Sending...",
    successAlert: "Thank you for your message! We'll get back to you shortly.",
  },
  ar: {
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    firstNamePlaceholder: "الاسم الأول",
    lastNamePlaceholder: "اسم العائلة",
    firstNameRequired: "الاسم الأول مطلوب",
    lastNameRequired: "اسم العائلة مطلوب",
    email: "البريد الإلكتروني",
    emailPlaceholder: "you@company.com",
    emailInvalid: "يرجى إدخال بريد إلكتروني صحيح",
    phone: "رقم الهاتف",
    phonePlaceholder: "+971 50 123 4567",
    interestedIn: "أنا مهتم بـ",
    selectProduct: "اختر منتجًا",
    allProducts: "جميع منتجات Tally",
    productBilling: "Tally للفوترة",
    productDigital: "Tally الرقمي",
    productAcquire: "Tally للاستحواذ",
    productCustomer: "Tally للعملاء",
    message: "الرسالة",
    messagePlaceholder:
      "أخبرنا قليلًا عما تبحث عنه وسنتأكد من تواصل الشخص المناسب معك.",
    messageMin: "يجب ألا تقل الرسالة عن 10 أحرف",
    submit: "إرسال الرسالة",
    submitting: "جارٍ الإرسال...",
    successAlert: "شكرًا على رسالتك! سنعاود التواصل معك قريبًا.",
  },
};

export function ContactForm({ language = "en" }: { language?: Language } = {}) {
  const t = strings[language];
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form submitted:", data);
    alert(t.successAlert);
  };

  const products = [
    { value: "", label: t.selectProduct },
    { value: "all", label: t.allProducts },
    { value: "billing", label: t.productBilling },
    { value: "digital", label: t.productDigital },
    { value: "acquire", label: t.productAcquire },
    { value: "customer", label: t.productCustomer },
  ];

  const inputClass =
    "w-full px-[14px] py-[10px] rounded-lg border border-stroke1 bg-white text-sm text-fg1 placeholder:text-fg2/50 outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-all";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[20px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
        <div>
          <label htmlFor="firstName" className="block text-[13px] font-medium text-fg1 mb-[6px]">
            {t.firstName}
          </label>
          <input
            id="firstName"
            placeholder={t.firstNamePlaceholder}
            {...register("firstName")}
            className={inputClass}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-red-500">{t.firstNameRequired}</p>
          )}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-[13px] font-medium text-fg1 mb-[6px]">
            {t.lastName}
          </label>
          <input
            id="lastName"
            placeholder={t.lastNamePlaceholder}
            {...register("lastName")}
            className={inputClass}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-red-500">{t.lastNameRequired}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-[13px] font-medium text-fg1 mb-[6px]">
          {t.email}
        </label>
        <input
          id="email"
          type="email"
          placeholder={t.emailPlaceholder}
          {...register("email")}
          className={inputClass}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{t.emailInvalid}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-[13px] font-medium text-fg1 mb-[6px]">
          {t.phone}
        </label>
        <input
          id="phone"
          type="tel"
          placeholder={t.phonePlaceholder}
          {...register("phone")}
          className={inputClass}
          dir="ltr"
        />
      </div>

      <div>
        <label htmlFor="product" className="block text-[13px] font-medium text-fg1 mb-[6px]">
          {t.interestedIn}
        </label>
        <select
          id="product"
          {...register("product")}
          className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%236B7280%22%20d%3D%22M3%204.5L6%207.5L9%204.5%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_12px_center] bg-no-repeat pr-10`}
        >
          {products.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-[13px] font-medium text-fg1 mb-[6px]">
          {t.message}
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder={t.messagePlaceholder}
          {...register("message")}
          className={`${inputClass} resize-none`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{t.messageMin}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 px-5 py-[12px] rounded-lg text-sm font-semibold bg-navy text-white border border-navy hover:bg-navy-dark hover:border-navy-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? t.submitting : t.submit}
        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
      </button>
    </form>
  );
}
