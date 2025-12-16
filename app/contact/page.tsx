import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/features/ContactForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with Fencible for a free landscaping quote. Call ${siteConfig.phone} or email ${siteConfig.email}. Serving Milton Keynes, Leighton Buzzard, and South East England.`,
  openGraph: {
    title: "Contact Fencible | Get a Free Quote",
    description: `Get in touch for a free landscaping quote. Call ${siteConfig.phone} or fill out our contact form.`,
  },
};

export default function ContactPage() {
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
                <li className="text-text-primary">Contact</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-text-secondary">
              Ready to transform your outdoor space? Get in touch for a free,
              no-obligation quote. We&apos;ll respond within 24 hours.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Form Section */}
      <Section background="secondary">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Contact Information
              </h2>

              <div className="space-y-6 mb-8">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-4 p-4 bg-bg-tertiary rounded-xl border border-border-subtle hover:border-accent-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent-primary/20 transition-colors">
                    <svg
                      className="w-6 h-6 text-accent-primary"
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
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary mb-1">
                      Phone
                    </p>
                    <p className="text-accent-primary text-lg">
                      {siteConfig.phone}
                    </p>
                    <p className="text-sm text-text-tertiary mt-1">
                      Mon-Fri: 8am-6pm, Sat: 9am-4pm
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-4 p-4 bg-bg-tertiary rounded-xl border border-border-subtle hover:border-accent-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent-primary/20 transition-colors">
                    <svg
                      className="w-6 h-6 text-accent-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary mb-1">Email</p>
                    <p className="text-accent-primary">{siteConfig.email}</p>
                    <p className="text-sm text-text-tertiary mt-1">
                      We respond within 24 hours
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-bg-tertiary rounded-xl border border-border-subtle">
                  <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-accent-primary"
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
                    <p className="font-semibold text-text-primary mb-1">
                      Service Area
                    </p>
                    <p className="text-text-secondary">
                      Milton Keynes, Leighton Buzzard, Dunstable, Berkhamsted,
                      Tring, and surrounding areas
                    </p>
                    <Link
                      href="/areas"
                      className="text-sm text-accent-primary hover:text-accent-secondary transition-colors mt-1 inline-block"
                    >
                      View all service areas →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <h3 className="font-semibold text-text-primary mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-bg-tertiary rounded-lg text-text-secondary hover:text-accent-primary hover:bg-bg-primary transition-colors"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-bg-tertiary rounded-lg text-text-secondary hover:text-accent-primary hover:bg-bg-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="p-4 bg-accent-primary/5 rounded-xl border border-accent-primary/20">
                <div className="flex items-center gap-3 mb-2">
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
                  <span className="font-medium text-text-primary">
                    Your enquiry is safe with us
                  </span>
                </div>
                <p className="text-sm text-text-secondary">
                  We never share your information with third parties. Your data
                  is only used to respond to your enquiry.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <Card padding="lg">
              <h2 className="text-2xl font-bold text-text-primary mb-2">
                Send Us a Message
              </h2>
              <p className="text-text-secondary mb-6">
                Fill out the form below and we&apos;ll get back to you within 24
                hours with a free, no-obligation quote.
              </p>
              <ContactForm />
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
