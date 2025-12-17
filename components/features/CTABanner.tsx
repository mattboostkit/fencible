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
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-forest via-accent-forest/95 to-accent-forest dark:from-bg-tertiary dark:via-bg-secondary dark:to-bg-primary" />

      {/* Organic decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent-primary/20 organic-blob" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-accent-gold/10 organic-blob" style={{ animationDelay: "-4s" }} />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-accent-moss/20 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Decorative line */}
          <div className="w-16 h-1 bg-gradient-to-r from-accent-primary to-accent-gold mx-auto mb-8 rounded-full" />

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white dark:text-text-primary mb-6 leading-tight">
            {title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="italic text-accent-gold">{title.split(" ").slice(-1)}</span>
          </h2>
          <p className="text-lg text-white/80 dark:text-text-secondary mb-10 max-w-xl mx-auto">{subtitle}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-accent-primary hover:bg-accent-secondary text-white shadow-lg">
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
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 dark:border-accent-primary dark:text-accent-primary">
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

          <p className="text-sm text-white/50 dark:text-text-tertiary mt-10 font-medium tracking-wide uppercase">
            {siteConfig.tagline}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
