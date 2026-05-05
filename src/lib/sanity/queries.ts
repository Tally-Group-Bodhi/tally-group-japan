import { client } from "./client";

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  body: unknown[];
  coverImage?: unknown;
  category?: string;
}

export interface Career {
  _id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  slug: { current: string };
}

export interface TestimonialType {
  _id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  return client.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      category,
      coverImage
    }`
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      body,
      coverImage,
      category
    }`,
    { slug }
  );
}

export async function getAllCareers(): Promise<Career[]> {
  return client.fetch(
    `*[_type == "career"] | order(_createdAt desc) {
      _id,
      title,
      department,
      location,
      type,
      slug
    }`
  );
}

export async function getTestimonials(): Promise<TestimonialType[]> {
  return client.fetch(
    `*[_type == "testimonial"] {
      _id,
      quote,
      name,
      title,
      company
    }`
  );
}
