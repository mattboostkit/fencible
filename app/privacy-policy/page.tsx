import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
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
              <li className="text-text-primary">Privacy Policy</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Privacy Policy
          </h1>
          <p className="text-text-secondary mb-8">
            Last updated: December 2025
          </p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                1. Introduction
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {siteConfig.name} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, and safeguard your personal information when you
                visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                2. Information We Collect
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>
                  <strong className="text-text-primary">Contact Information:</strong>{" "}
                  Name, email address, phone number, and postcode when you submit
                  a contact form or request a quote.
                </li>
                <li>
                  <strong className="text-text-primary">Service Information:</strong>{" "}
                  Details about the services you&apos;re interested in and your
                  project requirements.
                </li>
                <li>
                  <strong className="text-text-primary">Usage Data:</strong>{" "}
                  Information about how you use our website, including pages
                  visited, time spent, and referring websites.
                </li>
                <li>
                  <strong className="text-text-primary">Device Information:</strong>{" "}
                  Browser type, device type, and IP address for analytics
                  purposes.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Respond to your enquiries and provide quotes</li>
                <li>Deliver the landscaping services you request</li>
                <li>Communicate with you about your project</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                4. Information Sharing
              </h2>
              <p className="text-text-secondary leading-relaxed">
                We do not sell, trade, or rent your personal information to third
                parties. We may share your information with trusted service
                providers who assist us in operating our website or conducting
                our business, provided they agree to keep this information
                confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                5. Data Security
              </h2>
              <p className="text-text-secondary leading-relaxed">
                We implement appropriate security measures to protect your
                personal information against unauthorised access, alteration,
                disclosure, or destruction. However, no method of transmission
                over the Internet is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                6. Cookies
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Our website may use cookies to enhance your browsing experience.
                Cookies are small files stored on your device that help us
                understand how you use our website. You can choose to disable
                cookies through your browser settings, though this may affect
                some functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                7. Your Rights
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Under UK GDPR, you have the right to:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                8. Contact Us
              </h2>
              <p className="text-text-secondary leading-relaxed">
                If you have any questions about this Privacy Policy or wish to
                exercise your rights, please contact us:
              </p>
              <div className="mt-4 p-4 bg-bg-tertiary rounded-lg border border-border-subtle">
                <p className="text-text-primary font-medium">{siteConfig.name}</p>
                <p className="text-text-secondary">
                  Email:{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-accent-primary hover:text-accent-secondary"
                  >
                    {siteConfig.email}
                  </a>
                </p>
                <p className="text-text-secondary">
                  Phone:{" "}
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="text-accent-primary hover:text-accent-secondary"
                  >
                    {siteConfig.phone}
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                9. Changes to This Policy
              </h2>
              <p className="text-text-secondary leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated revision date. We
                encourage you to review this policy periodically.
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
