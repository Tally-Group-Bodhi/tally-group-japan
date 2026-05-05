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

const products = [
  { value: "", label: "Select a product" },
  { value: "all", label: "All Tally products" },
  { value: "billing", label: "Tally Billing" },
  { value: "digital", label: "Tally Digital" },
  { value: "acquire", label: "Tally Acquire" },
  { value: "customer", label: "Tally Customer" },
];

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form submitted:", data);
    alert("Thank you for your message! We'll get back to you shortly.");
  };

  const inputClass =
    "w-full px-[14px] py-[10px] rounded-lg border border-stroke1 bg-white text-sm text-fg1 placeholder:text-fg2/50 outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-all";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[20px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
        <div>
          <label htmlFor="firstName" className="block text-[13px] font-medium text-fg1 mb-[6px]">
            First name
          </label>
          <input
            id="firstName"
            placeholder="First name"
            {...register("firstName")}
            className={inputClass}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-[13px] font-medium text-fg1 mb-[6px]">
            Last name
          </label>
          <input
            id="lastName"
            placeholder="Last name"
            {...register("lastName")}
            className={inputClass}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-[13px] font-medium text-fg1 mb-[6px]">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@company.com"
          {...register("email")}
          className={inputClass}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-[13px] font-medium text-fg1 mb-[6px]">
          Phone number
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="+61 0412 345 678"
          {...register("phone")}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="product" className="block text-[13px] font-medium text-fg1 mb-[6px]">
          I&apos;m interested in
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
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us a bit more about what you're looking for, and we'll make sure the right person gets back to you."
          {...register("message")}
          className={`${inputClass} resize-none`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 px-5 py-[12px] rounded-lg text-sm font-semibold bg-navy text-white border border-navy hover:bg-navy-dark hover:border-navy-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send message"}
        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
      </button>
    </form>
  );
}
