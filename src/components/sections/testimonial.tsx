import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company?: string;
}

export function Testimonial({ quote, name, title, company }: TestimonialProps) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-tally-gray-light p-8 sm:p-12">
          <Quote className="mb-6 h-8 w-8 text-tally-green" />
          <blockquote className="text-xl font-medium leading-relaxed text-tally-navy sm:text-2xl">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-tally-green/20 flex items-center justify-center">
              <span className="text-lg font-bold text-tally-green">
                {name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-semibold text-tally-navy">{name}</p>
              <p className="text-sm text-tally-gray">
                {title}
                {company && `, ${company}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
