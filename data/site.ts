export const siteConfig = {
  name: "Fencible",
  tagline: "You visualise, we materialise",
  description:
    "Professional landscaping services in South East England. Garden rooms, patios, fencing, and complete garden renovation. Free quotes available.",
  url: "https://fencible.co.uk",
  phone: "07795 308570",
  email: "gary@fencible.co.uk",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61559596247308",
    instagram: "https://www.instagram.com/fencibleuk/",
  },
  address: {
    street: "7 Parkview Lane",
    town: "Tebworth",
    postcode: "LU7 9QG",
    region: "Bedfordshire",
    country: "United Kingdom",
  },
} as const;

export const services = [
  {
    slug: "garden-renovation",
    title: "Garden Renovation",
    shortDescription:
      "Complete garden transformations that bring your outdoor vision to life.",
    icon: "Leaf",
  },
  {
    slug: "garden-rooms",
    title: "Garden Rooms",
    shortDescription:
      "Bespoke garden rooms for home offices, gyms, or relaxation spaces.",
    icon: "Home",
  },
  {
    slug: "patios",
    title: "Patios",
    shortDescription:
      "Beautiful, durable patios crafted with premium materials.",
    icon: "Grid",
  },
  {
    slug: "fencing",
    title: "Fencing",
    shortDescription:
      "Quality fencing solutions for security, privacy, and style.",
    icon: "Fence",
  },
] as const;

export const areas = [
  {
    slug: "milton-keynes",
    name: "Milton Keynes",
    county: "Buckinghamshire",
    description:
      "Serving Milton Keynes and surrounding areas with professional landscaping services.",
    nearbyAreas: ["bletchley", "woburn-sands", "woburn"],
  },
  {
    slug: "eaton-bray",
    name: "Eaton Bray",
    county: "Bedfordshire",
    description:
      "Expert landscaping services in Eaton Bray and the surrounding villages.",
    nearbyAreas: ["dunstable", "leighton-buzzard", "tring"],
  },
  {
    slug: "berkhamsted",
    name: "Berkhamsted",
    county: "Hertfordshire",
    description:
      "Premium landscaping and garden design services in Berkhamsted.",
    nearbyAreas: ["tring", "hemel-hempstead"],
  },
  {
    slug: "dunstable",
    name: "Dunstable",
    county: "Bedfordshire",
    description:
      "Professional garden renovation and landscaping throughout Dunstable.",
    nearbyAreas: ["eaton-bray", "leighton-buzzard", "luton"],
  },
  {
    slug: "woburn",
    name: "Woburn",
    county: "Bedfordshire",
    description:
      "Bespoke landscaping services in the historic Woburn area.",
    nearbyAreas: ["woburn-sands", "milton-keynes", "bletchley"],
  },
  {
    slug: "bletchley",
    name: "Bletchley",
    county: "Buckinghamshire",
    description:
      "Complete garden transformation services across Bletchley.",
    nearbyAreas: ["milton-keynes", "woburn-sands", "leighton-buzzard"],
  },
  {
    slug: "leighton-buzzard",
    name: "Leighton Buzzard",
    county: "Bedfordshire",
    description:
      "Expert garden rooms, patios, and fencing in Leighton Buzzard.",
    nearbyAreas: ["dunstable", "eaton-bray", "bletchley"],
  },
  {
    slug: "woburn-sands",
    name: "Woburn Sands",
    county: "Buckinghamshire",
    description:
      "Quality landscaping and garden services in Woburn Sands.",
    nearbyAreas: ["woburn", "milton-keynes", "bletchley"],
  },
  {
    slug: "tring",
    name: "Tring",
    county: "Hertfordshire",
    description:
      "Professional garden renovation and outdoor living spaces in Tring.",
    nearbyAreas: ["berkhamsted", "eaton-bray", "dunstable"],
  },
] as const;

export type Service = (typeof services)[number];
export type Area = (typeof areas)[number];
