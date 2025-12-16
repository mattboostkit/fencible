import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FAQAccordion, FAQSchema } from "@/components/features/FAQAccordion";
import { ContactForm } from "@/components/features/ContactForm";
import { CTABanner } from "@/components/features/CTABanner";
import { getServiceBySlug, getAllServices } from "@/data/services";
import { services as servicesList, siteConfig } from "@/data/site";

interface Props {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return servicesList.map((service) => ({
    service: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Professional ${service.title} Services`,
    description: `${service.shortDescription} Professional ${service.title.toLowerCase()} services in Milton Keynes, Leighton Buzzard, and South East England. Free quotes available.`,
    openGraph: {
      title: `${service.title} Services | Fencible`,
      description: service.shortDescription,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    notFound();
  }

  // Get other services for cross-linking
  const otherServices = servicesList.filter((s) => s.slug !== serviceSlug);

  return (
    <>
      <FAQSchema faqs={service.faqs} />

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
                    href="/services"
                    className="text-text-tertiary hover:text-accent-primary transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li className="text-text-tertiary">/</li>
                <li className="text-text-primary">{service.title}</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              {service.title}
            </h1>
            <p className="text-lg text-text-secondary mb-6">
              {service.fullDescription}
            </p>

            {/* Timeline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-primary/10 border border-accent-primary/20 rounded-lg mb-8">
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
              <span className="text-accent-primary font-medium">
                Typical timeline: {service.timeline}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg">Get Free Quote</Button>
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

      {/* Features Section */}
      <Section background="secondary">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
                What We Offer
              </h2>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
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
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
                Benefits
              </h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent-gold mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                    <span className="text-text-secondary">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section>
        <Container size="md">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-text-secondary">
              Common questions about our {service.title.toLowerCase()} services.
            </p>
          </div>

          <FAQAccordion faqs={service.faqs} />
        </Container>
      </Section>

      {/* Contact Form Section */}
      <Section background="secondary">
        <Container size="lg">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                Get a Free Quote for {service.title}
              </h2>
              <p className="text-text-secondary mb-6">
                Ready to discuss your {service.title.toLowerCase()} project?
                Fill out the form and we&apos;ll get back to you within 24 hours
                with a free, no-obligation quote.
              </p>

              <div className="space-y-4 mb-6">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span>Fully insured and guaranteed work</span>
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>Or call us: {siteConfig.phone}</span>
                </div>
              </div>
            </div>

            <Card padding="lg">
              <ContactForm />
            </Card>
          </div>
        </Container>
      </Section>

      {/* Other Services */}
      <Section>
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
            Our Other Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {otherServices.map((otherService) => (
              <Link
                key={otherService.slug}
                href={`/services/${otherService.slug}`}
                className="group p-6 bg-bg-tertiary rounded-xl border border-border-subtle hover:border-accent-primary/50 transition-all"
              >
                <h3 className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors mb-2">
                  {otherService.title}
                </h3>
                <p className="text-sm text-text-secondary mb-4">
                  {otherService.shortDescription}
                </p>
                <span className="inline-flex items-center text-sm text-accent-primary">
                  Learn more
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
        </Container>
      </Section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
