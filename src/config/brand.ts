// src/config/brand.ts
export const brand = {
  /* =========================
     BASIC INFO
     ========================= */
  name: "Daniella Captures",
  tagline: "Florida Based Photographer",
  est: "EST. 2018",
  instagram: "@daniellacaptures",
  website: "www.daniellacaptures.com",
  email: "hello@daniellacaptures.com",
  location: "Florida, USA",

  /* =========================
     THEME (EDITORIAL / LUXURY - Daniela Naomi Style)
     ========================= */
 theme: {
  bg: "hsl(0 0% 100%)", // Pure white background
  accent: "hsl(0 0% 20%)", // Dark charcoal for accents
  text: "hsl(0 0% 10%)", // Almost black text
  muted: "hsl(0 0% 45%)", // Medium gray for muted text
  border: "hsl(0 0% 85%)", // Light gray borders
  subtle: "hsl(0 0% 97%)", // Very light gray for subtle backgrounds
},


  /* =========================
     HERO
     ========================= */
  hero: {
    eyebrow: "FLORIDA BASED PHOTOGRAPHER",
    title: "Capturing Stories\nThat Feel Timeless",
    subtitle:
      "Emotion-driven photography for love stories, editorial work, and personal brands.",
    cta: "Inquire Now",
  },

  /* =========================
     ABOUT
     ========================= */
  about: {
    heroTitle: "Hi, I’m Daniella",
    heroSubtitle: "Photographer, storyteller & creative",

    storyTitle: "Behind the Lens",
    storyP1:
      "Photography, for me, is about connection. It’s about capturing moments that feel honest, intentional, and timeless — the kind of images that still mean something years from now.",
    storyP2:
      "From weddings and editorials to personal brands, I work with creatives, couples, and entrepreneurs who value emotion, detail, and storytelling over trends.",

    mission:
      "To create imagery rooted in emotion, connection, and authenticity — allowing every story to feel personal and enduring.",
    vision:
      "To be a trusted creative partner for those who want photography that feels elevated, thoughtful, and true to who they are.",
    values:
      "Intentional storytelling, creative collaboration, emotional depth, attention to detail, and timeless aesthetics.",
  },

  /* =========================
     SERVICES
     ========================= */
  services: [
    "Weddings",
    "Editorial Photography",
    "Personal Branding",
    "Lifestyle Sessions",
  ],

  serviceCards: [
    {
      title: "Weddings",
      description:
        "Emotion-led wedding photography focused on genuine moments, connection, and timeless storytelling.",
      features: [
        "Full day coverage",
        "Intentional storytelling",
        "Timeless editing",
        "Personal experience",
      ],
    },
    {
      title: "Editorial Photography",
      description:
        "Editorial imagery for creatives, publications, and brands looking for elevated visual storytelling.",
      features: [
        "Creative direction",
        "Concept development",
        "High-end visuals",
        "Brand alignment",
      ],
    },
    {
      title: "Personal Branding",
      description:
        "Visual storytelling for entrepreneurs and creatives who want imagery that reflects who they truly are.",
      features: [
        "Brand-focused sessions",
        "Authentic portraits",
        "Content-ready imagery",
        "Creative guidance",
      ],
    },
    {
      title: "Lifestyle Sessions",
      description:
        "Relaxed lifestyle sessions capturing real moments, emotion, and connection.",
      features: [
        "Natural direction",
        "Comfortable experience",
        "Authentic moments",
        "Timeless edits",
      ],
    },
  ],

  /* =========================
     PROCESS
     ========================= */
  processSteps: [
    {
      step: "01",
      title: "Inquire",
      description: "Reach out and tell me about your vision and story.",
    },
    {
      step: "02",
      title: "Connect",
      description: "We’ll align on your goals, style, and creative direction.",
    },
    {
      step: "03",
      title: "Create",
      description: "Your session is photographed with intention and care.",
    },
    {
      step: "04",
      title: "Deliver",
      description: "You receive a timeless gallery crafted to last.",
    },
  ],

  /* =========================
     GALLERY
     ========================= */
  galleryCategories: [
    "All",
    "Weddings",
    "Editorial",
    "Branding",
    "Lifestyle",
  ],

  galleryProjects: [
    {
      id: "w-1",
      title: "Intimate Wedding",
      category: "Weddings",
      year: "2025",
      image: "/gallery/wedding-1.jpg",
    },
    {
      id: "e-1",
      title: "Editorial Portraits",
      category: "Editorial",
      year: "2025",
      image: "/gallery/editorial-1.jpg",
    },
    {
      id: "b-1",
      title: "Personal Brand Session",
      category: "Branding",
      year: "2025",
      image: "/gallery/branding-1.jpg",
    },
    {
      id: "l-1",
      title: "Lifestyle Session",
      category: "Lifestyle",
      year: "2025",
      image: "/gallery/lifestyle-1.jpg",
    },
  ],

  /* =========================
     STATS / SOCIAL PROOF
     ========================= */
  galleryStats: [
    { number: "7+", label: "Years Experience" },
    { number: "150+", label: "Stories Captured" },
    { number: "5★", label: "Client Reviews" },
    { number: "FL", label: "Based in Florida" },
  ],

  /* =========================
     CTA
     ========================= */
  ctas: {
    primary: "Inquire Now",
    secondary: "View Portfolio",
  },
};
