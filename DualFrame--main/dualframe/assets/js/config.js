/**
 * ============================================================
 *  SITE CONFIGURATION — Dual Frame Media
 * ============================================================
 *
 *  Video Production • Photography • Social Media Creative Agency
 */

var SITE_CONFIG = {
  /* ── Brand ─────────────────────────────────────────────── */
  brand: {
    name: "DUALFRAME",
    tagline: "Video Production • Photography • Social Media",
    logo: "assets/images/logo-dark.png", // path to logo image
    favicon: null, // path to favicon
  },

  /* ── Theme Colors (CSS custom-property overrides) ──────── */
  theme: {
    primary: "#DC2626", // red-600
    primaryDark: "#991B1B", // red-800
    accent: "#EF4444", // red-500
    textDark: "#171717", // neutral-900
    textLight: "#FFFFFF",
    bgLight: "#FFFFFF",
    bgAlt: "#F5F5F5", // neutral-100
    bgDark: "#0A0A0A", // neutral-950
  },

  /* ── Navigation (shown on every page) ──────────────────── */
  navigation: [
    { text: "Home", href: "index.html", icon: "🏠" },
    { text: "About", href: "about.html", icon: "👥" },
    { text: "Services", href: "services.html", icon: "⚡" },
    { text: "Portfolio", href: "portfolio.html", icon: "💼" },
  ],
  navCTA: { text: "Start a Project", href: "contact.html" },

  /* ── Hero Section (Home page) ──────────────────────────── */
  hero: {
    headline: "YOU DREAM IT,<br><span>WE FRAME IT.</span>",
    subheadline:
      "Dual Frame Media turns brands into scroll-stopping stories — strategic campaigns, creator collaborations, and high-impact visual production, all under one roof.",
    ctaPrimary: { text: "See the Work", href: "portfolio.html" },
    ctaSecondary: { text: "Book a Call", href: "contact.html" },
    backgroundImage: null,
  },

  /* ── Home Page Feature Cards (quick preview of services) ── */
  homeFeatures: {
    title: "What We Create",
    subtitle:
      "From concept to final cut — visual storytelling built to captivate",
    items: [
      {
        icon: "🎥",
        title: "Video Production",
        description:
          "Cinematic brand films, commercial spots, high-energy reels, and product videos crafted with studio precision.",
        link: "services.html",
      },
      {
        icon: "📸",
        title: "Photography",
        description:
          "Editorial product photography, lifestyle shoots, and creative visual campaigns tailored to your brand identity.",
        link: "services.html",
      },
      {
        icon: "📱",
        title: "Social Media",
        description:
          "End-to-end social strategy, short-form viral video production, creator management, and performance-driven content.",
        link: "services.html",
      },
    ],
  },

  /* ── Home CTA Banner ───────────────────────────────────── */
  homeCTA: {
    headline: "Have a Story That Needs Framing?",
    subheadline:
      "Let's collaborate to bring your brand's vision to life through stunning video and photography.",
    button: { text: "Start a Project", href: "contact.html" },
  },

  /* ── About Page ────────────────────────────────────────── */
  about: {
    pageTitle: "About Dual Frame Media",
    pageSubtitle: "We turn bold concepts into unforgettable visual experiences",
    title: "Crafting Visuals That Command Attention",
    description:
      "Dual Frame Media is a creative video production, photography, and social media agency. We merge cinematic artistry with modern digital culture to produce compelling visual content that engages audiences, builds cult-like communities, and accelerates brand growth.",
    mission: {
      title: "Our Mission",
      description:
        "To elevate brand storytelling through cinematic video production, striking photography, and trend-setting social content that drives real cultural impact.",
    },
    vision: {
      title: "Our Vision",
      description:
        "To be the creative studio of choice for world-class brands and visionary creators looking to frame their legacy with authenticity and flair.",
    },
    values: [
      {
        icon: "🎬",
        title: "Cinematic Excellence",
        description:
          "Every frame is composed with purpose, precision, and passion.",
      },
      {
        icon: "⚡",
        title: "Agile Creativity",
        description:
          "Fast turnaround times tailored for fast-moving social media landscapes.",
      },
      {
        icon: "🤝",
        title: "Collaborative Spirit",
        description:
          "We treat our clients as creative partners from script to screen.",
      },
      {
        icon: "📈",
        title: "Audience Impact",
        description:
          "Content engineered not just to look good, but to captivate and convert.",
      },
    ],
    stats: [
      { value: "250+", label: "Videos Produced" },
      { value: "120M+", label: "Views Generated" },
      { value: "99%", label: "Client Satisfaction" },
      { value: "50+", label: "Brands Elevated" },
    ],
    team: [
      {
        name: "Hiten Nirmal",
        role: "Creative Director & Founder",
        avatar: null,
      },
      {
        name: "Production Crew",
        role: "Cinematography & Lighting",
        avatar: null,
      },
      {
        name: "Post-Production Lead",
        role: "Editing & Color Grading",
        avatar: null,
      },
      {
        name: "Social Strategist",
        role: "Content & Distribution",
        avatar: null,
      },
    ],
  },

  /* ── Services Page ─────────────────────────────────────── */
  services: {
    pageTitle: "Our Creative Services",
    pageSubtitle:
      "Full-spectrum visual production and social growth for modern brands",
    items: [
      {
        icon: "🎥",
        title: "Commercial & Brand Films",
        description:
          "Cinematic storytelling designed to build emotional resonance, launch flagship products, and position your brand at the pinnacle of your industry.",
        features: [
          "Storyboarding & Scriptwriting",
          "Cinematic 4K/6K Filming",
          "Professional Lighting & Sound",
          "Custom Sound Design & Color Grade",
        ],
      },
      {
        icon: "📸",
        title: "Commercial Photography",
        description:
          "Crisp, studio-grade product photography, evocative lifestyle shoots, and creative campaign imagery ready for e-commerce, digital ads, and billboards.",
        features: [
          "Studio Product Photography",
          "Lifestyle & On-Location Shoots",
          "Creative Art Direction",
          "High-End Retouching",
        ],
      },
      {
        icon: "📱",
        title: "Social Media Content & Reels",
        description:
          "High-volume, scroll-stopping short-form video production engineered specifically for Instagram Reels, TikTok, and YouTube Shorts.",
        features: [
          "Trending Audio & Formats",
          "Rapid Batch Production",
          "Hook & Retention Optimization",
          "Captioning & Motion Graphics",
        ],
      },
      {
        icon: "🚁",
        title: "Aerial & Drone Videography",
        description:
          "Licensed drone pilots capturing breathtaking landscape, automotive, and architectural perspectives from above.",
        features: [
          "4K Aerial Footage",
          "Dynamic FPV Drone Racing & Tracking",
          "Architectural Perspectives",
          "Automotive Tracking",
        ],
      },
      {
        icon: "🎨",
        title: "Post-Production & VFX",
        description:
          "Seamless editing, Hollywood-grade color correction, 2D/3D motion design, and audio mastering that give your films an undeniable polish.",
        features: [
          "Color Grading & LUT Mastery",
          "Sound Design & Audio Mastering",
          "Motion Graphics & Titles",
          "VFX & Compositing",
        ],
      },
      {
        icon: "📊",
        title: "Creative Strategy & Campaigns",
        description:
          "Strategic campaign planning, brand messaging alignment, content roadmaps, and distribution guidance to ensure your media achieves peak reach.",
        features: [
          "Creative Brief Development",
          "Campaign Roadmapping",
          "Audience Analysis",
          "Multi-Platform Distribution Strategy",
        ],
      },
    ],
    process: {
      title: "How We Bring Ideas to Life",
      steps: [
        {
          number: "01",
          title: "Pre-Production",
          description:
            "Concept development, storyboarding, shot lists, location scouting, and talent casting.",
        },
        {
          number: "02",
          title: "Production",
          description:
            "On-set filming and photography using cinema-grade cameras, lighting, and audio equipment.",
        },
        {
          number: "03",
          title: "Post-Production",
          description:
            "Precision editing, color grading, sound design, motion graphics, and collaborative feedback.",
        },
        {
          number: "04",
          title: "Delivery",
          description:
            "Final high-resolution master exports tailored for digital ads, web, social, and broadcast.",
        },
      ],
    },
  },

  /* ── Portfolio Page ────────────────────────────────────── */
  portfolio: {
    pageTitle: "Our Work",
    pageSubtitle:
      "A selection of cinematic films, photography campaigns, and viral reels",
    items: [
      {
        title: "Urban Moto Chronicles",
        category: "Cinematic Film",
        description:
          "High-octane motorcycle cinematography capturing the energy of city streets at twilight.",
        image: "assets/images/urban-moto-chronicles.jpg",
        link: "portfolio.html",
      },
      {
        title: "Monochrome Studio Series",
        category: "Commercial Photography",
        description:
          "Minimalist studio product photography emphasizing texture, glass reflections, and clean lighting.",
        image: "assets/images/trumpet.jpg",
        link: "portfolio.html",
      },
      {
        title: "Pulse Streetwear Campaign",
        category: "Social Media & Reels",
        description:
          "Fast-paced, stylized vertical video series generating over 2.4M views on Instagram.",
        image: "assets/images/portrait.jpg",
        link: "portfolio.html",
      },
      {
        title: "Horizon Travel Documentary",
        category: "Documentary Video",
        description:
          "A cinematic visual journey through rugged landscapes featuring 4K aerial drone sequences.",
        image: null,
        link: "portfolio.html",
      },
      {
        title: "Artisan Coffee Roasters",
        category: "Brand Story",
        description:
          "A sensory exploration of artisanal coffee making, from raw beans to espresso pour.",
        image: null,
        link: "portfolio.html",
      },
      {
        title: "Velocita Automotive Showcase",
        category: "Automotive Film",
        description:
          "Precision tracking shots and aggressive sound design highlighting bespoke luxury vehicles.",
        image: null,
        link: "portfolio.html",
      },
    ],
  },

  /* ── Testimonials Page ─────────────────────────────────── */
  testimonials: {
    pageTitle: "Client Stories",
    pageSubtitle:
      "What creators and brands say about working with Dual Frame Media",
    items: [
      {
        quote:
          "Dual Frame Media took our brand's visual identity to a completely new level. The commercial they produced exceeded all our expectations.",
        author: "Aman Sharma",
        role: "Founder, Apex Apparel",
        avatar: null,
      },
      {
        quote:
          "Their cinematic eye and attention to lighting and sound design is phenomenal. The Reels they shot for us doubled our engagement in weeks.",
        author: "Rhea Mehta",
        role: "Marketing Director, Vibe Studio",
        avatar: null,
      },
      {
        quote:
          "Working with Hiten and the team was effortless. Highly professional from pre-production planning to final delivery.",
        author: "Karan Singhania",
        role: "Creative Producer",
        avatar: null,
      },
      {
        quote:
          "The product photography series was breathtaking. Crisp, vibrant, and delivered right on deadline.",
        author: "Pooja Patel",
        role: "Head of Growth, Lumina Goods",
        avatar: null,
      },
      {
        quote:
          "They don't just shoot video — they understand pacing, audience psychology, and what makes people stop scrolling.",
        author: "Vikram Malhotra",
        role: "Brand Strategist, Nexus Media",
        avatar: null,
      },
      {
        quote:
          "The best creative investment we've made for our social campaigns. Highly recommended for any brand wanting to stand out.",
        author: "Siddharth Rao",
        role: "Director, Elevate Brands",
        avatar: null,
      },
    ],
  },

  /* ── Contact Page ──────────────────────────────────────── */
  contact: {
    pageTitle: "Start a Project",
    pageSubtitle: "Have a project in mind? Let's frame your story together.",
    email: "dualframemedia@gmail.com",
    phone: "+91 80974 88190",
    address: null,
    formAction: "https://api.web3forms.com/submit", // form submission URL (Web3Forms endpoint)
    accessKey: "dce98cb2-680c-451f-867a-58067a6888aa", // Web3Forms access key
    socialLinks: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/hiten_04?jplx=MWtqczdmNG9oNnAxYQ%3D%3D",
        icon: "bi-instagram",
        svg: `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
      },
      {
        platform: "Behance",
        url: "https://www.behance.net/hitennirmal1",
        icon: "bi-behance",
        svg: `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.976 3-3.468 0-5.75-2.783-5.75-6.042 0-3.376 2.308-6.083 5.642-6.083 3.42 0 5.358 2.593 5.358 5.766 0 .445-.045.981-.077 1.292h-8.084c.063 1.956 1.341 3.267 3.328 3.267 1.542 0 2.502-.693 3.011-1.2l1.548 1zm-2.883-4.103c-.048-1.554-1.077-2.674-2.613-2.674-1.488 0-2.49 1.054-2.673 2.674h5.286zm-14.843 7.103h-6v-16h6.136c3.218 0 5.166 1.554 5.166 4.198 0 1.63-.872 2.92-2.193 3.513 1.83.606 2.891 2.052 2.891 4.025 0 2.766-2.148 4.264-6 4.264zm-3.158-9.458h3.045c1.479 0 2.373-.679 2.373-1.895 0-1.161-.871-1.776-2.327-1.776h-3.091v3.671zm0 6.643h3.295c1.678 0 2.716-.761 2.716-2.174 0-1.343-1.026-2.094-2.693-2.094h-3.318v4.268z"/></svg>`,
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/hiten-nirmal-211536263?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        icon: "bi-linkedin",
        svg: `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
      },
      {
        platform: "WhatsApp",
        url: "https://wa.me/918097488190",
        icon: "bi-whatsapp",
        svg: `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`,
      },
    ],
    mapEmbed: null,
  },

  /* ── Footer (shown on every page) ──────────────────────── */
  footer: {
    logo: "assets/images/logo-light.png",
    description:
      "Dual Frame Media turns brands into scroll-stopping stories — strategic campaigns, creator collaborations, and high-impact visual production, all under one roof.",
    copyright: "© 2026 DUALFRAME. All rights reserved.",
    links: [
      { text: "Privacy Policy", href: "privacy.html" },
      { text: "Terms of Service", href: "terms.html" },
      { text: "Start a Project", href: "contact.html" },
    ],
  },
};
