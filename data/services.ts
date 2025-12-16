import { ServiceDetail } from "@/types";

export const servicesData: Record<string, ServiceDetail> = {
  "garden-renovation": {
    slug: "garden-renovation",
    title: "Garden Renovation",
    shortDescription:
      "Complete garden transformations that bring your outdoor vision to life.",
    fullDescription:
      "Transform your tired, overgrown, or outdated garden into a stunning outdoor space that reflects your lifestyle. Our comprehensive garden renovation service covers everything from initial design concepts through to the final planting scheme, creating a garden you'll love for years to come.",
    timeline: "1-8 weeks depending on scope",
    features: [
      "Bespoke design consultation",
      "Complete clearance and preparation",
      "Soft landscaping and planting schemes",
      "Lawn installation (turf or seed)",
      "Garden structure installation",
      "Drainage solutions",
      "Lighting design and installation",
      "Irrigation systems",
    ],
    benefits: [
      "Increase your property value",
      "Create usable outdoor living space",
      "Low-maintenance design options",
      "Year-round visual interest",
      "Enhance privacy and security",
      "Support local wildlife",
    ],
    faqs: [
      {
        question: "How long does a garden renovation take?",
        answer:
          "The timeline depends on the scope of work. A small garden redesign might take 1-2 weeks, while a complete transformation of a larger garden could take 4-8 weeks. We'll provide a detailed timeline during your consultation.",
      },
      {
        question: "Do you provide design services?",
        answer:
          "Yes, we offer comprehensive garden design services. We'll work with you to understand your vision, lifestyle, and budget, then create a bespoke design that transforms your outdoor space.",
      },
      {
        question: "Can you work with my existing plants?",
        answer:
          "Absolutely. We can incorporate existing mature plants, trees, and features into your new garden design. We'll assess what can be retained and relocated during the planning phase.",
      },
      {
        question: "What happens to the garden waste?",
        answer:
          "We handle all waste removal as part of our service. Green waste is disposed of responsibly, and where possible, we recycle materials. The cost is included in your quote.",
      },
      {
        question: "Do you offer a guarantee on garden renovations?",
        answer:
          "Yes, we stand behind our workmanship. All hard landscaping elements come with our workmanship guarantee. We also provide aftercare advice for planted areas to help your garden thrive.",
      },
      {
        question: "What aftercare is needed after a garden renovation?",
        answer:
          "We provide detailed aftercare instructions for all new planting, including watering schedules and seasonal maintenance tips. New lawns require regular watering for the first few weeks. We're always happy to answer questions after the project is complete.",
      },
    ],
    image: "/images/services/garden-renovation.webp",
    gallery: [
      "/images/portfolio/garden-transformation.webp",
      "/images/portfolio/lawn-project.webp",
      "/images/portfolio/landscaping-1.webp",
    ],
  },
  "garden-rooms": {
    slug: "garden-rooms",
    title: "Garden Rooms",
    shortDescription:
      "Bespoke garden rooms for home offices, gyms, or relaxation spaces.",
    fullDescription:
      "Create additional living space without the hassle of a traditional extension. Our bespoke garden rooms are designed and built to your exact specifications, providing a versatile space for home offices, studios, gyms, or simply a peaceful retreat in your own garden.",
    timeline: "2-4 weeks from groundwork to completion",
    features: [
      "Bespoke design to your requirements",
      "Full insulation for year-round use",
      "Electrical installation included",
      "Double-glazed windows and doors",
      "Various cladding options",
      "Internal finishing to your specification",
      "Foundations and groundwork",
      "Planning guidance if required",
    ],
    benefits: [
      "Add value to your property",
      "No planning permission usually required",
      "Quick installation vs traditional builds",
      "Work from home in style",
      "Create dedicated hobby space",
      "Rental income potential",
    ],
    faqs: [
      {
        question: "Do I need planning permission for a garden room?",
        answer:
          "Most garden rooms fall under permitted development and don't require planning permission. However, this depends on size, height, and location. We'll advise you during the consultation and handle any planning applications if needed.",
      },
      {
        question: "How long does it take to build a garden room?",
        answer:
          "Typically, a standard garden room takes 2-4 weeks from groundwork to completion. More complex designs or those requiring planning permission may take longer.",
      },
      {
        question: "Can the garden room have electricity and heating?",
        answer:
          "Yes, all our garden rooms come with full electrical installation. We can include heating options such as underfloor heating, wall-mounted heaters, or air conditioning for year-round comfort.",
      },
      {
        question: "What sizes of garden room do you offer?",
        answer:
          "We build garden rooms in any size to suit your garden and requirements. Popular sizes range from compact 2.5m x 2.5m home offices to larger 6m x 4m living spaces. Everything is bespoke to your needs.",
      },
      {
        question: "What guarantee do you offer on garden rooms?",
        answer:
          "Our garden rooms come with a comprehensive workmanship guarantee covering the structure and installation. We use high-quality materials designed for longevity, and we're here to support you if any issues arise.",
      },
      {
        question: "How do I maintain my garden room?",
        answer:
          "Garden rooms require minimal maintenance. We recommend annual checks on seals and drainage, occasional cleaning of external cladding, and keeping gutters clear. We provide a full maintenance guide upon completion.",
      },
    ],
    image: "/images/services/garden-rooms.webp",
    gallery: [
      "/images/portfolio/garden-room-1.webp",
      "/images/portfolio/garden-room-2.webp",
      "/images/portfolio/garden-room-3.webp",
    ],
  },
  patios: {
    slug: "patios",
    title: "Patios",
    shortDescription:
      "Beautiful, durable patios crafted with premium materials.",
    fullDescription:
      "Create the perfect foundation for outdoor living with a professionally installed patio. Whether you're looking for a contemporary porcelain finish, traditional natural stone, or cost-effective block paving, we'll design and install a patio that complements your home and garden.",
    timeline: "3-5 days for most patios",
    features: [
      "Natural stone (sandstone, slate, limestone)",
      "Porcelain paving",
      "Block paving",
      "Concrete paving",
      "Pattern imprinted concrete",
      "Steps and raised areas",
      "Integrated lighting",
      "Drainage solutions",
    ],
    benefits: [
      "Extend your living space outdoors",
      "Low maintenance surfaces",
      "Durable for decades",
      "Increase property value",
      "Perfect for entertaining",
      "Multiple style options",
    ],
    faqs: [
      {
        question: "What patio material is best for my garden?",
        answer:
          "The best material depends on your style preference, budget, and usage. Natural stone offers timeless beauty, porcelain provides a contemporary look with minimal maintenance, while block paving is versatile and cost-effective. We'll help you choose during your consultation.",
      },
      {
        question: "How long will my new patio last?",
        answer:
          "A professionally installed patio should last 25+ years with proper maintenance. We use quality materials and proven installation techniques to ensure longevity.",
      },
      {
        question: "Do you remove the old patio?",
        answer:
          "Yes, we handle all removal and disposal of existing patios, decking, or surfaces. This is included in your quote, and we ensure responsible disposal of all waste materials.",
      },
      {
        question: "Can you install a patio on a slope?",
        answer:
          "Absolutely. We regularly work with sloped gardens, creating level terraced areas, steps, and retaining walls to make the most of uneven ground.",
      },
      {
        question: "What guarantee comes with a new patio?",
        answer:
          "All our patios come with a workmanship guarantee. Professionally installed patios using quality materials should last 25+ years. We're confident in our work and stand behind every installation.",
      },
      {
        question: "How do I care for my new patio?",
        answer:
          "Regular sweeping and occasional jet washing keeps most patios looking great. We recommend re-sanding joints on block paving every few years and applying sealant to natural stone if desired. We provide specific care instructions for your patio material.",
      },
    ],
    image: "/images/services/patios.webp",
    gallery: [
      "/images/portfolio/patio-1.webp",
      "/images/portfolio/patio-2.webp",
      "/images/portfolio/hot-tub-deck.webp",
    ],
  },
  fencing: {
    slug: "fencing",
    title: "Fencing",
    shortDescription:
      "Quality fencing solutions for security, privacy, and style.",
    fullDescription:
      "Define your boundaries with quality fencing that combines security, privacy, and aesthetics. From traditional closeboard panels to contemporary slatted designs, we supply and install fencing solutions that enhance your property and stand the test of time.",
    timeline: "1-2 days for most fencing projects",
    features: [
      "Closeboard/featherboard fencing",
      "Slatted contemporary fencing",
      "Traditional panel fencing",
      "Post and rail fencing",
      "Trellis and decorative panels",
      "Gate installation",
      "Concrete post options",
      "Gravel boards",
    ],
    benefits: [
      "Enhanced privacy and security",
      "Wind protection for gardens",
      "Define property boundaries",
      "Support climbing plants",
      "Variety of styles available",
      "Long-lasting with proper care",
    ],
    faqs: [
      {
        question: "What's the most durable type of fencing?",
        answer:
          "Closeboard fencing with concrete posts and gravel boards offers the best durability, typically lasting 20+ years. Slatted contemporary fencing with treated timber also provides excellent longevity.",
      },
      {
        question: "Do I need to notify my neighbour about new fencing?",
        answer:
          "While not legally required in most cases, we always recommend discussing fencing plans with neighbours. If the fence is on a boundary, both parties should ideally agree. We can advise on boundary matters during your consultation.",
      },
      {
        question: "How high can my fence be?",
        answer:
          "Standard garden fences can be up to 2 metres high without planning permission. Front garden fences are typically limited to 1 metre. Different rules apply near highways. We'll advise on regulations for your specific situation.",
      },
      {
        question: "Can you remove my old fence?",
        answer:
          "Yes, removal and disposal of existing fencing is included in our service. We'll clear the area completely before installing your new fence.",
      },
      {
        question: "What guarantee do you offer on fencing?",
        answer:
          "All our fencing comes with a workmanship guarantee. We use quality timber and concrete posts designed for longevity. Closeboard fencing with concrete posts typically lasts 20+ years with proper care.",
      },
      {
        question: "How do I maintain my new fence?",
        answer:
          "We recommend treating timber panels with preservative every 2-3 years to maximise lifespan. Keep the base clear of soil buildup, and check for any loose panels after storms. Concrete posts and gravel boards are maintenance-free.",
      },
    ],
    image: "/images/services/fencing.webp",
    gallery: [
      "/images/portfolio/fence-project-1.webp",
      "/images/portfolio/modern-fence.webp",
      "/images/portfolio/fence-installation.webp",
    ],
  },
};

export const getServiceBySlug = (slug: string): ServiceDetail | undefined => {
  return servicesData[slug];
};

export const getAllServices = (): ServiceDetail[] => {
  return Object.values(servicesData);
};
