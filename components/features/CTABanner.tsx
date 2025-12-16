"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  showPhone?: boolean;
}

export function CTABanner({
  title = "Ready to Transform Your Garden?",
  subtitle = "Get in touch today for a free, no-obligation quote. We'll help bring your outdoor vision to life.",
  showPhone = true,
}: CTABannerProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-accent-primary/10 via-bg-secondary to-accent-gold/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-gold/20 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            {title}
          </h2>
          <p className="text-lg text-text-secondary mb-8">{subtitle}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg">
                Get Your Free Quote
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
              </Button>
            </Link>
            {showPhone && (
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                <Button variant="outline" size="lg">
                  <svg
                    className="mr-2 w-5 h-5"
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
                  Call {siteConfig.phone}
                </Button>
              </a>
            )}
          </div>

          <p className="text-sm text-text-tertiary mt-6">
            {siteConfig.tagline}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
