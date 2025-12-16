import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CTABanner } from "@/components/features/CTABanner";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "View our portfolio of completed landscaping projects including garden renovations, garden rooms, patios, and fencing across Milton Keynes, Leighton Buzzard, and surrounding areas.",
  openGraph: {
    title: "Our Work | Fencible Portfolio",
    description:
      "View our portfolio of completed landscaping projects across South East England.",
  },
};

const portfolioItems = [
  {
    id: "1",
    title: "Modern Garden Transformation",
    description:
      "Complete garden renovation featuring a contemporary design with new lawn and planting scheme.",
    service: "Garden Renovation",
    location: "Milton Keynes",
    image: "/images/portfolio/garden-transformation.webp",
  },
  {
    id: "2",
    title: "Premium Patio Installation",
    description:
      "Elegant patio design with quality materials and expert craftsmanship.",
    service: "Patios",
    location: "Berkhamsted",
    image: "/images/portfolio/patio-1.webp",
  },
  {
    id: "3",
    title: "Contemporary Fencing",
    description:
      "Modern fencing solution providing privacy, security, and style.",
    service: "Fencing",
    location: "Dunstable",
    image: "/images/portfolio/fence-project-1.webp",
  },
  {
    id: "4",
    title: "Quality Fence Installation",
    description:
      "Professional fence installation with attention to detail and durability.",
    service: "Fencing",
    location: "Eaton Bray",
    image: "/images/portfolio/fence-installation.webp",
  },
  {
    id: "5",
    title: "New Lawn Installation",
    description:
      "Fresh lawn installation transforming an outdoor space into a beautiful garden.",
    service: "Garden Renovation",
    location: "Woburn Sands",
    image: "/images/portfolio/lawn-project.webp",
  },
  {
    id: "6",
    title: "Complete Landscaping Project",
    description:
      "Full landscaping transformation with beautiful planting and hardscaping.",
    service: "Garden Renovation",
    location: "Leighton Buzzard",
    image: "/images/portfolio/landscaping-1.webp",
  },
  {
    id: "7",
    title: "Garden Border Design",
    description:
      "Professionally designed garden borders enhancing outdoor living space.",
    service: "Garden Renovation",
    location: "Tring",
    image: "/images/portfolio/landscaping-2.webp",
  },
  {
    id: "8",
    title: "Bespoke Garden Design",
    description:
      "Custom garden design tailored to the client's vision and lifestyle.",
    service: "Garden Renovation",
    location: "Milton Keynes",
    image: "/images/portfolio/garden-design.webp",
  },
];

export default function PortfolioPage() {
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
                <li className="text-text-primary">Portfolio</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Our <span className="gradient-text">Work</span>
            </h1>
            <p className="text-lg text-text-secondary">
              Browse our portfolio of completed projects across South East
              England. From complete garden transformations to bespoke garden
              rooms, see the quality of our craftsmanship.
            </p>
          </div>
        </Container>
      </Section>

      {/* Filter Tabs */}
      <Section background="secondary" className="py-8">
        <Container>
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-accent-primary text-bg-primary rounded-lg font-medium text-sm">
              All Projects
            </button>
            {services.map((service) => (
              <button
                key={service.slug}
                className="px-4 py-2 bg-bg-tertiary text-text-secondary hover:text-text-primary hover:bg-border-subtle rounded-lg font-medium text-sm transition-colors"
              >
                {service.title}
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Portfolio Grid */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="group bg-bg-tertiary rounded-xl border border-border-subtle overflow-hidden hover:border-accent-primary/50 transition-all"
              >
                {/* Project image */}
                <div className="aspect-[4/3] bg-bg-secondary relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-accent-primary/0 group-hover:bg-accent-primary/10 transition-colors" />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-accent-primary bg-accent-primary/10 px-2 py-1 rounded">
                      {item.service}
                    </span>
                    <span className="text-xs text-text-tertiary">
                      {item.location}
                    </span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social media follow */}
          <div className="text-center mt-12 p-8 bg-bg-secondary rounded-xl border border-border-subtle">
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Follow Our Work
            </h3>
            <p className="text-text-secondary mb-4">
              See our latest projects and behind-the-scenes content on social media.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61559596247308"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
              <a
                href="https://www.instagram.com/fencibleuk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Ready to Start Your Project?"
        subtitle="Get in touch today and let's discuss how we can transform your outdoor space."
      />
    </>
  );
}
