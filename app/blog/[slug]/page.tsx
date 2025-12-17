import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/features/ContactForm";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { BlogPostSchema } from "@/components/seo/BlogPostSchema";
import { getBlogPostBySlug, getAllBlogPosts } from "@/data/blog";
import { siteConfig } from "@/data/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get other posts for related articles
  const otherPosts = getAllBlogPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  return (
    <>
      <BlogPostSchema post={post} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${slug}` },
        ]}
      />

      {/* Hero Section */}
      <Section className="pt-24 md:pt-32">
        <Container size="md">
          <nav className="flex mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-text-tertiary hover:text-accent-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li className="text-text-tertiary">/</li>
              <li>
                <Link
                  href="/blog"
                  className="text-text-tertiary hover:text-accent-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li className="text-text-tertiary">/</li>
              <li className="text-text-primary truncate max-w-[200px]">
                {post.title}
              </li>
            </ol>
          </nav>

          <span className="inline-flex items-center px-3 py-1 bg-accent-primary/10 border border-accent-primary/20 rounded-full text-accent-primary text-sm font-medium mb-4">
            {post.category}
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-text-tertiary mb-8">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </Section>

      {/* Article Content */}
      <Section className="pt-0">
        <Container size="md">
          <article className="prose prose-lg max-w-none prose-headings:text-text-primary prose-p:text-text-secondary prose-strong:text-text-primary prose-a:text-accent-primary prose-a:no-underline hover:prose-a:underline prose-li:text-text-secondary prose-em:text-text-secondary">
            <div
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/^## /gm, '<h2 class="text-2xl md:text-3xl font-bold mt-12 mb-6">')
                  .replace(/^### /gm, '<h3 class="text-xl md:text-2xl font-semibold mt-8 mb-4">')
                  .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                  .replace(/\*([^*]+)\*/g, '<em>$1</em>')
                  .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
                  .replace(/^- (.+)$/gm, '<li>$1</li>')
                  .replace(/(<li>.*<\/li>\n?)+/g, '<ul class="list-disc pl-6 space-y-2 my-4">$&</ul>')
                  .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
                  .replace(/\n\n/g, '</p><p class="mb-4">')
                  .replace(/^(?!<)(.+)$/gm, '<p class="mb-4">$1</p>')
              }}
            />
          </article>

          {/* CTA within article */}
          <div className="mt-12 p-8 bg-accent-primary/5 border border-accent-primary/20 rounded-2xl">
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Ready to Start Your Project?
            </h3>
            <p className="text-text-secondary mb-4">
              Get in touch with our team for a free, no-obligation quote. We serve
              Milton Keynes, Leighton Buzzard, and all surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button>Get Free Quote</Button>
              </Link>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                <Button variant="outline">Call {siteConfig.phone}</Button>
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Articles */}
      {otherPosts.length > 0 && (
        <Section background="secondary">
          <Container>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
              More Articles You Might Like
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {otherPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <Card className="h-full overflow-hidden hover:border-accent-primary/50 transition-all">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-medium text-accent-primary mb-2 block">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center text-accent-primary hover:text-accent-secondary transition-colors font-medium"
              >
                View all articles
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </Container>
        </Section>
      )}

      {/* Contact Form */}
      <Section>
        <Container size="lg">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                Get Your Free Quote
              </h2>
              <p className="text-text-secondary mb-6">
                Inspired by what you&apos;ve read? Let&apos;s discuss your project.
                Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-text-secondary">
                  <svg
                    className="w-5 h-5 text-accent-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Free, no-obligation quotes</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <svg
                    className="w-5 h-5 text-accent-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <svg
                    className="w-5 h-5 text-accent-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Fully insured professionals</span>
                </div>
              </div>
            </div>

            <Card padding="lg">
              <ContactForm />
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
