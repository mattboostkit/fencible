import { siteConfig, areas } from "@/data/site";

interface LocalBusinessSchemaProps {
  specificArea?: string;
}

export function LocalBusinessSchema({ specificArea }: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/og-image.jpg`,
    logo: `${siteConfig.url}/logo.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.town,
      postalCode: siteConfig.address.postcode,
      addressRegion: specificArea
        ? areas.find((a) => a.slug === specificArea)?.county || siteConfig.address.region
        : siteConfig.address.region,
      addressCountry: "GB",
    },
    geo: specificArea
      ? undefined
      : {
          "@type": "GeoCoordinates",
          latitude: 51.9,
          longitude: -0.7,
        },
    areaServed: areas.map((area) => ({
      "@type": "City",
      name: area.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: area.county,
      },
    })),
    openingHours: "Mo-Fr 08:00-18:00, Sa 09:00-16:00",
    priceRange: "££",
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Landscaping Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Garden Renovation",
            description: "Complete garden transformations",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Garden Rooms",
            description: "Bespoke garden rooms for home offices, gyms, or relaxation spaces",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Patios",
            description: "Beautiful, durable patios crafted with premium materials",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fencing",
            description: "Quality fencing solutions for security, privacy, and style",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
