import type { Metadata } from "next";
import { MarketingLink } from "@/components/marketing/marketing-link";
import { CTABanner } from "@/components/sections/cta-banner";
import { ArrowLeft } from "lucide-react";

const placeholderPosts: Record<
  string,
  { title: string; date: string; category: string; content: string[] }
> = {
  "disruption-is-the-new-normal": {
    title: "Disruption is the new normal",
    date: "January 9, 2023",
    category: "Insights",
    content: [
      "In 2022, the world found itself in the midst of a global energy crisis spurred on by war in Ukraine and increasingly frequent and severe climate events.",
      "In many places, the situation looked dire. In the UK, electricity prices rose by 65.5% and gas prices by 128.9% in the 12 months to November 2022. Many European countries feared a colder-than-usual winter combined with the absence of Russian gas supply could further exacerbate an already struggling energy ecosystem.",
      "Let's take a look at what energy sector changemakers will be focusing on this year.",
      "In the face of volatile market behaviour, countries will increasingly focus on bolstering energy resiliency within their own borders. Across Europe, policy has been used to manage the demand/supply imbalance, including managing street lights and illuminated signage.",
      "The mass rollout of prosumer technology, such as home solar generation and battery storage, is one gateway to making DERs a reality. Prosumer technology is quickly becoming more efficient and less costly, and improvements in AI are making the benefits more real for consumers.",
      "For energy retailers, the role you play in this tricky, eternally disrupted landscape is vital. Your work shepherds consumers through the energy transition. The best thing you can do to keep ahead of the game and support the critical evolution of the industry is to digitise your systems now.",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = placeholderPosts[slug];
  return {
    title: post?.title || "Blog Post",
    description: post?.content[0] || "",
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // When Sanity is connected, replace with: const post = await getPostBySlug(slug);
  const post = placeholderPosts[slug];

  if (!post) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-tally-navy">Post not found</h1>
          <p className="mt-4 text-tally-gray">This blog post could not be found.</p>
          <MarketingLink
            href="/blog"
            className="mt-6 inline-flex items-center gap-2 text-tally-green hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </MarketingLink>
        </div>
      </div>
    );
  }

  return (
    <>
      <article className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <MarketingLink
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-tally-green hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </MarketingLink>

          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm text-tally-gray">
              <time>{post.date}</time>
              <span>&middot;</span>
              <span>{post.category}</span>
            </div>
            <h1 className="mt-4 text-4xl font-light text-tally-navy sm:text-5xl">{post.title}</h1>
          </div>

          <div className="mb-8 aspect-[2/1] rounded-2xl bg-gradient-to-br from-tally-gray-light to-tally-green/5" />

          <div className="prose prose-lg max-w-none text-tally-gray">
            {post.content.map((paragraph, i) => (
              <p key={i} className="mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      <CTABanner title="Empower your business with Tally's innovative solutions" />
    </>
  );
}
