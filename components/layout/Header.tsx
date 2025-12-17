"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/brand/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { siteConfig, services, areas } from "@/data/site";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    children: services.map((s) => ({
      name: s.title,
      href: `/services/${s.slug}`,
      description: s.shortDescription,
    })),
  },
  {
    name: "Areas",
    href: "/areas",
    children: areas.slice(0, 6).map((a) => ({
      name: a.name,
      href: `/areas/${a.slug}`,
      description: `Serving ${a.name} & surrounding areas`,
    })),
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 glass border-b border-border-subtle/50">
      <Container>
        <nav className="flex items-center justify-between h-18 md:h-22">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <Logo className="h-9 sm:h-11 w-auto transition-transform group-hover:scale-105" />
            <div>
              <span className="text-lg sm:text-xl font-semibold text-text-primary tracking-tight">
                {siteConfig.name}
              </span>
              <p className="text-xs text-text-tertiary hidden md:block">
                {siteConfig.tagline}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.children && setActiveDropdown(item.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-accent-primary transition-colors rounded-full hover:bg-accent-primary/5"
                >
                  {item.name}
                  {item.children && (
                    <svg
                      className="inline-block ml-1 w-4 h-4 transition-transform"
                      style={{
                        transform:
                          activeDropdown === item.name
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                      }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-80 bg-bg-primary border border-border-subtle rounded-2xl shadow-xl overflow-hidden"
                    >
                      <div className="p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block p-3 rounded-xl hover:bg-bg-secondary transition-colors group"
                          >
                            <span className="text-sm font-medium text-text-primary group-hover:text-accent-primary transition-colors">
                              {child.name}
                            </span>
                            <p className="text-xs text-text-tertiary mt-0.5 line-clamp-1">
                              {child.description}
                            </p>
                          </Link>
                        ))}
                        <div className="border-t border-border-subtle mt-2 pt-2">
                          <Link
                            href={item.href}
                            className="block p-3 rounded-xl text-sm font-medium text-accent-primary hover:bg-accent-primary/5 transition-colors"
                          >
                            View all {item.name.toLowerCase()} →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <ThemeToggle className="hidden sm:flex" />

            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="hidden md:flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-accent-moss transition-colors px-3 py-2 rounded-full hover:bg-accent-moss/5"
            >
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="hidden xl:inline">{siteConfig.phone}</span>
            </a>
            <Link href="/contact">
              <Button size="sm">Get Quote</Button>
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2.5 text-text-secondary hover:text-text-primary hover:bg-bg-tertiary rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border-subtle overflow-hidden"
            >
              <div className="py-6 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-base font-medium text-text-primary hover:bg-bg-secondary rounded-xl"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-text-secondary hover:text-accent-primary hover:bg-bg-tertiary rounded-lg transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-6 border-t border-border-subtle mt-4">
                  <div className="flex items-center justify-between px-4 py-3">
                    <span className="text-sm text-text-tertiary">Theme</span>
                    <ThemeToggle />
                  </div>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 px-4 py-3 mt-2 bg-accent-moss/10 rounded-xl text-accent-moss font-medium"
                  >
                    <div className="w-10 h-10 bg-accent-moss/10 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5"
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
                      <span className="text-xs text-accent-moss/70 block">Call us</span>
                      <span>{siteConfig.phone}</span>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
