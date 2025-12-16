import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/features/ServiceCard";
import { CTABanner } from "@/components/features/CTABanner";
import { services, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Professional landscaping services including garden renovation, garden rooms, patios, and fencing. Serving Milton Keynes, Leighton Buzzard, and South East England.",
  openGraph: {
    title: "Landscaping Services | Fencible",
    description:
      "Professional landscaping services including garden renovation, garden rooms, patios, and fencing. Serving Milton Keynes, Leighton Buzzard, and South East England.",
  },
};

export default function ServicesPage() {
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
                <li className="text-text-primary">Services</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg text-text-secondary">
              From complete garden transformations to bespoke garden rooms, we
              offer a comprehensive range of landscaping services. Whatever your
              outdoor vision, we have the expertise to bring it to life.
            </p>
          </div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section background="secondary">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
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

      {/* Process Section */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              How We Work
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Our straightforward process ensures your project runs smoothly from
              initial enquiry to final handover.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Free Consultation",
                description:
                  "We visit your property to discuss your vision, assess the site, and understand your requirements.",
              },
              {
                step: "02",
                title: "Detailed Quote",
                description:
                  "You'll receive a comprehensive, itemised quote with no hidden costs or surprises.",
              },
              {
                step: "03",
                title: "Expert Installation",
                description:
                  "Our skilled team completes your project to the highest standards, keeping you informed throughout.",
              },
              {
                step: "04",
                title: "Final Walkthrough",
                description:
                  "We'll walk you through the completed work, ensuring you're completely satisfied with the results.",
              },
            ].map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-accent-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-primary">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Ready to Get Started?"
        subtitle="Contact us today for a free, no-obligation quote on any of our services."
      />
    </>
  );
}
