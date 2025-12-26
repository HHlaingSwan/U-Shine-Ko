// Sample data - this should come from your data source
export const Data = [
  {
    id: 1,
    title: "Design System Case Study",
    category: "designSystem",
    tag: "Design System",
    subtitle: "Building a scalable design system for modern applications",
    imageUrl: "/project-images/weday/weday-cover.png", // Replace with actual design system cover image
    contentBlocks: [
      {
        id: 1,
        image: "/project-images/weday/weday-cover.png",
        title: "Color System",
        description:
          "A comprehensive color palette designed for accessibility and brand consistency across all platforms and use cases.",
      },
      {
        id: 2,
        image: "/project-images/weday/weday-cover.png",
        title: "Typography Scale",
        description:
          "A harmonious typography system that ensures readability and visual hierarchy across all content types.",
      },
      {
        id: 3,
        image: "/project-images/weday/weday-cover.png",
        title: "Component Library",
        description:
          "Reusable UI components built with consistency, accessibility, and scalability in mind.",
      },
      {
        id: 4,
        image: "/project-images/weday/weday-cover.png",
        title: "Spacing System",
        description:
          "An 8pt grid-based spacing system that creates rhythm and consistency throughout the interface.",
      },
    ],
    logos: [
      {
        id: 1,
        title: "Primary Logo",
        description:
          "The main logo used for light backgrounds and primary brand applications.",
        images: {
          light: "/project-images/weday/weday-cover.png",
          dark: "/project-images/weday/weday-cover.png",
        },
      },
      {
        id: 2,
        title: "Secondary Logo",
        description:
          "Alternative logo variant for specialized use cases and secondary applications.",
        images: {
          light: "/project-images/weday/weday-cover.png",
          dark: "/project-images/weday/weday-cover.png",
        },
      },
    ],
  },

  {
    id: 2,
    title: "Branding & Logo Design",
    category: "brandingLogo",
    tag: "Branding & Logo",
    subtitle: "Crafting a unique brand identity through strategic logo design",
    imageUrl: "/project-images/BFF/Landingpage/cover.png", // Replace with actual branding cover image
    contentBlocks: [
      {
        id: 1,
        image: "/project-images/BFF/Landingpage/1.png",
        title: "Logo Concept",
        description:
          "Initial concepts and sketches exploring different directions for the brand identity.",
      },
      {
        id: 2,
        image: "/project-images/BFF/Landingpage/2.png",
        title: "Color Palette",
        description:
          "A vibrant and energetic color palette reflecting the brand's personality.",
      },
      {
        id: 3,
        image: "/project-images/BFF/Landingpage/3.png",
        title: "Typography",
        description:
          "A modern and clean typography system for brand communications.",
      },
    ],
    logos: [
      {
        id: 1,
        title: "Final Logo",
        description: "The final approved logo design for the brand.",
        images: {
          light: "/project-images/BFF/app/cover.png",
          dark: "/project-images/BFF/app/cover.png",
        },
      },
    ],
  },
];
