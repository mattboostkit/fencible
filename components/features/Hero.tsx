"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

interface HeroProps {
  title?: string;
  subtitle?: string;
  showBadge?: boolean;
}

export function Hero({
  title = "Transform Your Outdoor Space",
  subtitle = "Professional landscaping services in South East England. From stunning garden rooms to beautiful patios and quality fencing — we bring your vision to life.",
  showBadge = true,
}: HeroProps) {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* Background image with stronger overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/portfolio/lawn-project.webp"
          alt="Beautiful new lawn installation by Fencible"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={100}
        />
        {/* Rich gradient overlay for depth and text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-bg-primary/90 via-bg-primary/70 to-transparent dark:from-bg-primary/95 dark:via-bg-primary/80 dark:to-bg-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent" />
      </div>

      {/* Organic decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large terracotta blob - top right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-accent-primary/10 organic-blob float-slow"
        />
        {/* Moss green blob - bottom left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute -bottom-48 -left-48 w-[600px] h-[600px] bg-accent-moss/10 organic-blob float-medium"
          style={{ animationDelay: "-3s" }}
        />
        {/* Small gold accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-1/4 right-1/4 w-24 h-24 bg-accent-gold/15 rounded-full blur-2xl"
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl">
          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 0.6 }}
            className="deco-line mb-8"
          />

          {showBadge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="label-caps inline-flex items-center gap-2 mb-6">
                <span className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" />
                Serving Milton Keynes, Leighton Buzzard & Beyond
              </span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-text-primary leading-[0.95] mb-8 tracking-tight"
          >
            {title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="gradient-text italic">
              {title.split(" ").slice(-1)}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="lead max-w-2xl mb-10"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link href="/contact">
              <Button size="lg" className="group">
                Get Your Free Quote
                <svg
                  className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
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
            <Link href="/portfolio">
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </Link>
          </motion.div>

          {/* Trust indicators - refined styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-8 border-t border-border-subtle/50"
          >
            {[
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                ),
                text: "Fully Insured",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
                text: "Free Quotes",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                ),
                text: "Local & Trusted",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-accent-primary/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-accent-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {item.icon}
                  </svg>
                </div>
                <span className="text-sm font-medium text-text-secondary">{item.text}</span>
              </div>
            ))}

            {/* Phone CTA */}
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2.5 group ml-auto"
            >
              <div className="w-10 h-10 rounded-full bg-accent-moss/10 flex items-center justify-center group-hover:bg-accent-moss/20 transition-colors">
                <svg
                  className="w-5 h-5 text-accent-moss"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <span className="text-xs text-text-tertiary block">Call us today</span>
                <span className="text-sm font-semibold text-accent-moss group-hover:text-accent-primary transition-colors">{siteConfig.phone}</span>
              </div>
            </a>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-text-tertiary tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-border-subtle rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-accent-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
