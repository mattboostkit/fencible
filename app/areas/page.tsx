import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { AreaCard } from "@/components/features/AreaCard";
import { CTABanner } from "@/components/features/CTABanner";
import { areas } from "@/data/site";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Professional landscaping services across South East England. Covering Milton Keynes, Leighton Buzzard, Dunstable, Berkhamsted, Tring, and surrounding areas.",
  openGraph: {
    title: "Service Areas | Fencible Landscaping",
    description:
      "Professional landscaping services across South East England. Covering Milton Keynes, Leighton Buzzard, Dunstable, Berkhamsted, Tring, and surrounding areas.",
  },
};

export default function AreasPage() {
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
                <li className="text-text-primary">Service Areas</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Areas We <span className="gradient-text">Serve</span>
            </h1>
            <p className="text-lg text-text-secondary">
              We provide professional landscaping services across South East
              England, covering Bedfordshire, Buckinghamshire, and Hertfordshire.
              Find your local area below to learn more about our services in your
              region.
            </p>
          </div>
        </Container>
      </Section>

      {/* Areas Grid */}
      <Section background="secondary">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, index) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group p-6 bg-bg-tertiary rounded-xl border border-border-subtle hover:border-accent-primary/50 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-text-primary group-hover:text-accent-primary transition-colors mb-1">
                      {area.name}
                    </h2>
                    <p className="text-sm text-text-tertiary mb-3">
                      {area.county}
                    </p>
                    <p className="text-text-secondary text-sm">
                      {area.description}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-text-tertiary group-hover:text-accent-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Coverage Info */}
      <Section>
        <Container size="md">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Don&apos;t See Your Area?
            </h2>
            <p className="text-text-secondary mb-6">
              We may still be able to help! Our team covers a wide area across
              South East England. If your location isn&apos;t listed above, please
              get in touch and we&apos;ll let you know if we can assist with your
              project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-accent-primary text-bg-primary font-semibold rounded-lg hover:bg-accent-secondary transition-colors"
            >
              Contact Us
              <svg
                className="ml-2 w-5 h-5"
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

      {/* CTA */}
      <CTABanner
        title="Ready to Transform Your Garden?"
        subtitle="Get in touch today for a free quote, wherever you are in our service area."
      />
    </>
  );
}
