import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CTABanner } from "@/components/features/CTABanner";
import { getAllBlogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog | Landscaping Tips & Inspiration",
  description:
    "Expert landscaping advice, garden design tips, and inspiration for your outdoor space. From garden rooms to patios, discover ideas for transforming your garden.",
  keywords: [
    "landscaping blog",
    "garden tips",
    "patio ideas",
    "fencing guide",
    "garden room ideas",
    "outdoor living",
  ],
  openGraph: {
    title: "Landscaping Blog | Fencible",
    description:
      "Expert landscaping advice and garden design inspiration for your outdoor space.",
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 md:pt-32">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Landscaping Tips & <span className="gradient-text">Inspiration</span>
            </h1>
            <p className="text-lg text-text-secondary">
              Expert advice, design ideas, and practical guides to help you
              create the perfect outdoor space. From garden rooms to patios,
              we&apos;ve got you covered.
            </p>
          </div>
        </Container>
      </Section>

      {/* Blog Posts Grid */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <Card className="h-full overflow-hidden hover:border-accent-primary/50 transition-all">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent-primary text-white text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-accent-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-text-tertiary">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
