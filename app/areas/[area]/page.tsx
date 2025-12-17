import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ServiceCard } from "@/components/features/ServiceCard";
import { ContactForm } from "@/components/features/ContactForm";
import { CTABanner } from "@/components/features/CTABanner";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { getAreaBySlug, getAllAreas, areasData } from "@/data/areas";
import { services, areas as areasList, siteConfig } from "@/data/site";

interface Props {
  params: Promise<{ area: string }>;
}

export async function generateStaticParams() {
  return areasList.map((area) => ({
    area: area.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area: areaSlug } = await params;
  const area = getAreaBySlug(areaSlug);

  if (!area) {
    return {
      title: "Area Not Found",
    };
  }

  const title = `Landscaping ${area.name} | Garden Rooms, Patios & Fencing`;
  const description = `Professional landscaping services in ${area.name}, ${area.county}. Garden rooms, patios, fencing & garden renovation. Free quotes available. Call ${siteConfig.phone}`;

  return {
    title,
    description,
    keywords: [
      `landscaping ${area.name}`,
      `garden rooms ${area.name}`,
      `patios ${area.name}`,
      `fencing ${area.name}`,
      `garden renovation ${area.name}`,
      `landscaper ${area.name}`,
      `garden design ${area.name}`,
    ],
    openGraph: {
      title,
      description,
    },
  };
}

export default async function AreaPage({ params }: Props) {
  const { area: areaSlug } = await params;
  const area = getAreaBySlug(areaSlug);

  if (!area) {
    notFound();
  }

  // Get nearby areas data
  const nearbyAreasData = area.nearbyAreas
    .map((slug) => areasData[slug])
    .filter(Boolean);

  return (
    <>
      <LocalBusinessSchema specificArea={area.slug} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Areas", href: "/areas" },
          { name: area.name, href: `/areas/${area.slug}` },
        ]}
      />

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
                <li>
                  <Link
                    href="/areas"
                    className="text-text-tertiary hover:text-accent-primary transition-colors"
                  >
                    Areas
                  </Link>
                </li>
                <li className="text-text-tertiary">/</li>
                <li className="text-text-primary">{area.name}</li>
              </ol>
            </nav>

            <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent-primary/10 border border-accent-primary/20 rounded-full text-accent-primary text-sm font-medium mb-4">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {area.county}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Professional Landscaping in{" "}
              <span className="gradient-text">{area.name}</span>
            </h1>
            <p className="text-lg text-text-secondary mb-8">
              {area.fullDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg">Get Free Quote in {area.name}</Button>
              </Link>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                <Button variant="outline" size="lg">
                  Call {siteConfig.phone}
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services in this area */}
      <Section background="secondary">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Our Services in {area.name}
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We offer a complete range of landscaping services to homeowners in{" "}
              {area.name} and the surrounding {area.county} area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.shortDescription}
                href={`/services/${service.slug}`}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Choose Us for this area */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
                Why Choose Fencible in {area.name}?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      Local Knowledge
                    </h3>
                    <p className="text-text-secondary text-sm">
                      We understand {area.name}&apos;s unique soil conditions,
                      local regulations, and what works best in {area.county}.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      Quick Response
                    </h3>
                    <p className="text-text-secondary text-sm">
                      Being local means we can visit your {area.name} property
                      promptly for consultations and start work quickly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      Trusted & Insured
                    </h3>
                    <p className="text-text-secondary text-sm">
                      Fully insured with a growing reputation across{" "}
                      {area.county} for quality workmanship.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
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
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      Competitive Pricing
                    </h3>
                    <p className="text-text-secondary text-sm">
                      Fair, transparent pricing with free, no-obligation quotes
                      for all {area.name} residents.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card padding="lg">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Get a Free Quote in {area.name}
              </h3>
              <ContactForm compact />
            </Card>
          </div>
        </Container>
      </Section>

      {/* Nearby Areas */}
      {nearbyAreasData.length > 0 && (
        <Section background="secondary">
          <Container>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
              We Also Serve Nearby Areas
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {nearbyAreasData.map((nearbyArea) => (
                <Link
                  key={nearbyArea.slug}
                  href={`/areas/${nearbyArea.slug}`}
                  className="group p-6 bg-bg-tertiary rounded-xl border border-border-subtle hover:border-accent-primary/50 transition-all"
                >
                  <h3 className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors mb-1">
                    {nearbyArea.name}
                  </h3>
                  <p className="text-sm text-text-tertiary mb-2">
                    {nearbyArea.county}
                  </p>
                  <p className="text-sm text-text-secondary mb-4">
                    {nearbyArea.description}
                  </p>
                  <span className="inline-flex items-center text-sm text-accent-primary">
                    View services
                    <svg
                      className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                  </span>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/areas"
                className="inline-flex items-center text-accent-primary hover:text-accent-secondary transition-colors font-medium"
              >
                View all service areas
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

      {/* CTA */}
      <CTABanner
        title={`Ready to Transform Your ${area.name} Garden?`}
        subtitle={`Get in touch today for a free, no-obligation quote for your ${area.name} property.`}
      />
    </>
  );
}
