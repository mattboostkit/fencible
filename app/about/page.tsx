import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CTABanner } from "@/components/features/CTABanner";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Fencible - professional landscaping services in South East England. Our story, values, and commitment to quality garden transformations.",
  openGraph: {
    title: "About Fencible | Professional Landscaping Services",
    description:
      "Learn about Fencible - professional landscaping services in South East England.",
  },
};

const values = [
  {
    title: "Quality First",
    description:
      "We never compromise on materials or workmanship. Every project receives our full attention and expertise.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    title: "Customer Focus",
    description:
      "Your vision is our priority. We listen, advise, and work collaboratively to bring your outdoor dreams to life.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Transparency",
    description:
      "No hidden costs, no surprises. We provide detailed quotes and keep you informed throughout your project.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
  {
    title: "Reliability",
    description:
      "We turn up when we say we will, complete work on schedule, and stand behind everything we do.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 md:pt-32">
        <Container>
          <div className="max-w-3xl">
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
                <li className="text-text-primary">About</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              About <span className="gradient-text">Fencible</span>
            </h1>
            <p className="text-xl text-text-secondary font-medium mb-4">
              {siteConfig.tagline}
            </p>
            <p className="text-lg text-text-secondary">
              We&apos;re a professional landscaping company serving South East
              England, specialising in garden renovation, garden rooms, patios,
              and fencing. Our mission is simple: to help homeowners transform
              their outdoor spaces into places they love.
            </p>
          </div>
        </Container>
      </Section>

      {/* Story Section */}
      <Section background="secondary">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-text-secondary">
                <p>
                  Fencible was founded with a clear purpose: to provide homeowners
                  across Bedfordshire, Buckinghamshire, and Hertfordshire with
                  exceptional landscaping services that truly transform their
                  outdoor spaces.
                </p>
                <p>
                  We understand that your garden is an extension of your home - a
                  place for relaxation, entertaining, and creating memories with
                  family and friends. That&apos;s why we approach every project
                  with the same care and attention we&apos;d give to our own
                  properties.
                </p>
                <p>
                  From our base in the South East, we serve communities across
                  Milton Keynes, Leighton Buzzard, Dunstable, Berkhamsted, Tring,
                  and beyond. Our local knowledge, combined with our commitment to
                  quality, means we&apos;re perfectly placed to help you achieve
                  your outdoor vision.
                </p>
              </div>
            </div>

            <div className="bg-bg-tertiary rounded-xl p-8 border border-border-subtle">
              <h3 className="text-xl font-semibold text-text-primary mb-6">
                Why Homeowners Choose Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-accent-primary mt-0.5 flex-shrink-0"
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
                  <span className="text-text-secondary">
                    Free, no-obligation consultations and quotes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-accent-primary mt-0.5 flex-shrink-0"
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
                  <span className="text-text-secondary">
                    Fully insured for your peace of mind
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-accent-primary mt-0.5 flex-shrink-0"
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
                  <span className="text-text-secondary">
                    Local team with knowledge of the area
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-accent-primary mt-0.5 flex-shrink-0"
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
                  <span className="text-text-secondary">
                    Quality materials and expert craftsmanship
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-accent-primary mt-0.5 flex-shrink-0"
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
                  <span className="text-text-secondary">
                    Clear communication throughout your project
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-accent-primary mt-0.5 flex-shrink-0"
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
                  <span className="text-text-secondary">
                    Competitive, transparent pricing
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Our Values
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              These principles guide everything we do, from the first
              consultation to the final walkthrough.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 bg-bg-tertiary rounded-xl border border-border-subtle"
              >
                <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center text-accent-primary mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact CTA */}
      <CTABanner
        title="Ready to Work Together?"
        subtitle="Get in touch today and let's discuss how we can transform your outdoor space."
      />
    </>
  );
}
