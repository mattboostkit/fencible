import { AreaDetail } from "@/types";

export const areasData: Record<string, AreaDetail> = {
  "milton-keynes": {
    slug: "milton-keynes",
    name: "Milton Keynes",
    county: "Buckinghamshire",
    description: "Serving Milton Keynes and surrounding areas with professional landscaping services.",
    fullDescription:
      "As one of the UK's fastest-growing cities, Milton Keynes is home to a diverse range of properties, from modern estates to established neighbourhoods. Our landscaping services are perfectly suited to MK's unique mix of contemporary and traditional gardens, helping homeowners create stunning outdoor spaces that complement their homes.",
    nearbyAreas: ["bletchley", "woburn-sands", "woburn"],
    coordinates: { lat: 52.0406, lng: -0.7594 },
  },
  "eaton-bray": {
    slug: "eaton-bray",
    name: "Eaton Bray",
    county: "Bedfordshire",
    description: "Expert landscaping services in Eaton Bray and the surrounding villages.",
    fullDescription:
      "Nestled in the picturesque Chiltern Hills, Eaton Bray and its surrounding villages boast charming properties with gardens that deserve exceptional care. Our team brings expertise in working with the local clay and chalk soils, creating beautiful gardens that thrive in this unique landscape.",
    nearbyAreas: ["dunstable", "leighton-buzzard", "tring"],
    coordinates: { lat: 51.8685, lng: -0.5883 },
  },
  berkhamsted: {
    slug: "berkhamsted",
    name: "Berkhamsted",
    county: "Hertfordshire",
    description: "Premium landscaping and garden design services in Berkhamsted.",
    fullDescription:
      "Historic Berkhamsted, with its stunning high street and beautiful surrounding countryside, is home to many impressive properties. We specialise in creating gardens that complement the character of this market town, from contemporary designs for modern homes to traditional gardens for period properties.",
    nearbyAreas: ["tring"],
    coordinates: { lat: 51.7606, lng: -0.5647 },
  },
  dunstable: {
    slug: "dunstable",
    name: "Dunstable",
    county: "Bedfordshire",
    description: "Professional garden renovation and landscaping throughout Dunstable.",
    fullDescription:
      "Situated at the foot of the Chiltern Hills, Dunstable offers a wonderful mix of suburban and rural properties. Our landscaping services help Dunstable homeowners make the most of their outdoor spaces, whether creating low-maintenance gardens, installing patios for entertaining, or building garden rooms for extra living space.",
    nearbyAreas: ["eaton-bray", "leighton-buzzard"],
    coordinates: { lat: 51.8859, lng: -0.5217 },
  },
  woburn: {
    slug: "woburn",
    name: "Woburn",
    county: "Bedfordshire",
    description: "Bespoke landscaping services in the historic Woburn area.",
    fullDescription:
      "Famous for its abbey and safari park, Woburn is a beautiful village with properties ranging from historic cottages to modern family homes. Our team understands the importance of creating gardens that respect the area's heritage while meeting modern lifestyle needs.",
    nearbyAreas: ["woburn-sands", "milton-keynes", "bletchley"],
    coordinates: { lat: 51.9869, lng: -0.6183 },
  },
  bletchley: {
    slug: "bletchley",
    name: "Bletchley",
    county: "Buckinghamshire",
    description: "Complete garden transformation services across Bletchley.",
    fullDescription:
      "As an integral part of Milton Keynes, Bletchley combines rich history with modern development. From the Victorian terraces near the town centre to newer estates, we provide landscaping services that enhance every type of property, creating functional and beautiful outdoor spaces for families to enjoy.",
    nearbyAreas: ["milton-keynes", "woburn-sands", "leighton-buzzard"],
    coordinates: { lat: 51.9925, lng: -0.7317 },
  },
  "leighton-buzzard": {
    slug: "leighton-buzzard",
    name: "Leighton Buzzard",
    county: "Bedfordshire",
    description: "Expert garden rooms, patios, and fencing in Leighton Buzzard.",
    fullDescription:
      "This charming market town on the Grand Union Canal offers a wonderful quality of life, and our landscaping services help residents make the most of their outdoor spaces. Whether you're looking for a garden room home office, a new patio, or complete garden renovation, we deliver exceptional results throughout Leighton Buzzard.",
    nearbyAreas: ["dunstable", "eaton-bray", "bletchley"],
    coordinates: { lat: 51.9165, lng: -0.6617 },
  },
  "woburn-sands": {
    slug: "woburn-sands",
    name: "Woburn Sands",
    county: "Buckinghamshire",
    description: "Quality landscaping and garden services in Woburn Sands.",
    fullDescription:
      "Set on the edge of the Greensand Ridge, Woburn Sands enjoys a semi-rural setting while remaining well-connected. The sandy soils here require specific knowledge to create thriving gardens, and our team has the expertise to design and build outdoor spaces that flourish in these unique conditions.",
    nearbyAreas: ["woburn", "milton-keynes", "bletchley"],
    coordinates: { lat: 52.0153, lng: -0.6531 },
  },
  tring: {
    slug: "tring",
    name: "Tring",
    county: "Hertfordshire",
    description: "Professional garden renovation and outdoor living spaces in Tring.",
    fullDescription:
      "Nestled in the Chiltern Hills with the beautiful Tring Reservoirs nearby, this market town is home to stunning properties with gardens that deserve the best care. We help Tring homeowners create outdoor spaces that take advantage of the area's natural beauty while providing practical living areas for year-round enjoyment.",
    nearbyAreas: ["berkhamsted", "eaton-bray", "dunstable"],
    coordinates: { lat: 51.7961, lng: -0.6594 },
  },
};

export const getAreaBySlug = (slug: string): AreaDetail | undefined => {
  return areasData[slug];
};

export const getAllAreas = (): AreaDetail[] => {
  return Object.values(areasData);
};
