import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";
import { siteConfig, services, areas } from "@/data/site";

const footerLinks = {
  services: services.map((s) => ({ name: s.title, href: `/services/${s.slug}` })),
  areas: areas.slice(0, 5).map((a) => ({ name: a.name, href: `/areas/${a.slug}` })),
  company: [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent-forest dark:bg-bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent-primary/5 organic-blob" />
        <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-accent-gold/5 organic-blob" style={{ animationDelay: "-4s" }} />
      </div>

      <Container className="relative">
        {/* Main Footer */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Logo className="h-12 w-auto" />
              <span className="text-2xl font-semibold text-white dark:text-text-primary tracking-tight">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-white/70 dark:text-text-secondary text-sm leading-relaxed mb-6">
              Professional landscaping services across South East England.
              Garden rooms, patios, fencing, and complete garden renovation.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 text-white/60 dark:text-text-secondary">
                <div className="w-8 h-8 rounded-lg bg-white/10 dark:bg-bg-tertiary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span className="text-sm leading-relaxed">
                  {siteConfig.address.street}<br />
                  {siteConfig.address.town}<br />
                  {siteConfig.address.postcode}
                </span>
              </div>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-white/60 dark:text-text-secondary hover:text-accent-gold dark:hover:text-accent-primary transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 dark:bg-bg-tertiary flex items-center justify-center flex-shrink-0 group-hover:bg-accent-gold/20 dark:group-hover:bg-accent-primary/20 transition-colors">
                  <svg
                    className="w-4 h-4"
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
                <span className="text-sm">{siteConfig.phone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-white/60 dark:text-text-secondary hover:text-accent-gold dark:hover:text-accent-primary transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 dark:bg-bg-tertiary flex items-center justify-center flex-shrink-0 group-hover:bg-accent-gold/20 dark:group-hover:bg-accent-primary/20 transition-colors">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-sm">{siteConfig.email}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 dark:bg-bg-tertiary rounded-xl flex items-center justify-center text-white/60 dark:text-text-secondary hover:text-accent-gold dark:hover:text-accent-primary hover:bg-white/20 dark:hover:bg-accent-primary/10 transition-all"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 dark:bg-bg-tertiary rounded-xl flex items-center justify-center text-white/60 dark:text-text-secondary hover:text-accent-gold dark:hover:text-accent-primary hover:bg-white/20 dark:hover:bg-accent-primary/10 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold text-white dark:text-text-primary uppercase tracking-wider mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 dark:text-text-secondary hover:text-accent-gold dark:hover:text-accent-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas Column */}
          <div>
            <h3 className="text-sm font-semibold text-white dark:text-text-primary uppercase tracking-wider mb-5">
              Service Areas
            </h3>
            <ul className="space-y-3">
              {footerLinks.areas.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 dark:text-text-secondary hover:text-accent-gold dark:hover:text-accent-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/areas"
                  className="text-sm text-accent-gold dark:text-accent-primary hover:text-white dark:hover:text-accent-secondary transition-colors"
                >
                  View all areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold text-white dark:text-text-primary uppercase tracking-wider mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 dark:text-text-secondary hover:text-accent-gold dark:hover:text-accent-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Trust Badges */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-white/50 dark:text-text-tertiary">
                <div className="w-8 h-8 rounded-lg bg-accent-moss/20 dark:bg-accent-moss/10 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-accent-moss"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <span className="text-sm">Fully Insured</span>
              </div>
              <div className="flex items-center gap-3 text-white/50 dark:text-text-tertiary">
                <div className="w-8 h-8 rounded-lg bg-accent-gold/20 dark:bg-accent-gold/10 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-accent-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-sm">Free Quotes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 dark:border-border-subtle flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40 dark:text-text-tertiary">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40 dark:text-text-tertiary text-center sm:text-right">
            Professional landscaping in Milton Keynes, Leighton Buzzard,
            Dunstable & surrounding areas.
          </p>
        </div>
      </Container>
    </footer>
  );
}
