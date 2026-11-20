/**
 * ============================================================
 *  SITE CONFIGURATION — Edit this file to rebrand the template
 * ============================================================
 *
 *  Change the values below to customize the entire website.
 *  No other file needs to be touched for basic branding.
 */

var SITE_CONFIG = {

  /* ── Brand ─────────────────────────────────────────────── */
  brand: {
    name: "DUALFRAME",
    tagline: "Video Production • Photography • Social Media",
    logo: "assets/images/header-logo.png",                       // path to logo image, or null to use text
    favicon: null,                    // path to favicon
  },

  /* ── Theme Colors (CSS custom-property overrides) ──────── */
  theme: {
    primary: "#DC2626",            // red-600
    primaryDark: "#991B1B",            // red-800
    accent: "#EF4444",            // red-500
    textDark: "#171717",            // neutral-900
    textLight: "#FFFFFF",
    bgLight: "#FFFFFF",
    bgAlt: "#F5F5F5",            // neutral-100
    bgDark: "#0A0A0A",            // neutral-950
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
    subheadline: "Dual Frame Media turns brands into scroll-stopping stories — strategic campaigns, creator collaborations, and data-backed growth, all under one roof.",
    ctaPrimary: { text: "See the Work", href: "portfolio.html" },
    ctaSecondary: { text: "Book a Call", href: "contact.html" },
    backgroundImage: null,            // URL or null for gradient
  },

  /* ── Home Page Feature Cards (quick preview of services) ── */
  homeFeatures: {
    title: "What We Offer",
    subtitle: "Quick overview of our core capabilities",
    items: [
      { icon: "🎨", title: "Design", description: "Beautiful interfaces crafted with purpose.", link: "services.html" },
      { icon: "💻", title: "Development", description: "Scalable, high-performance web & mobile apps.", link: "services.html" },
      { icon: "☁️", title: "Cloud & Data", description: "Secure infrastructure and actionable insights.", link: "services.html" },
    ],
  },

  /* ── Home CTA Banner ───────────────────────────────────── */
  homeCTA: {
    headline: "Ready to Start Your Project?",
    subheadline: "Let's discuss how we can help you achieve your goals.",
    button: { text: "Let's Talk", href: "contact.html" },
  },

  /* ── About Page ────────────────────────────────────────── */
  about: {
    pageTitle: "About Us",
    pageSubtitle: "Learn more about who we are and what drives us",
    title: "Who We Are",
    description: "We are a team of passionate designers, developers, and strategists dedicated to building world-class digital products. With over a decade of experience, we turn ambitious ideas into reality.",
    mission: {
      title: "Our Mission",
      description: "To empower businesses with innovative technology solutions that create lasting value and drive meaningful growth in the digital age.",
    },
    vision: {
      title: "Our Vision",
      description: "To be the most trusted technology partner for businesses worldwide, known for exceptional quality, creativity, and results.",
    },
    values: [
      { icon: "💡", title: "Innovation", description: "We embrace new ideas and push boundaries." },
      { icon: "🤝", title: "Partnership", description: "Your success is our success — we're in this together." },
      { icon: "✨", title: "Excellence", description: "We hold ourselves to the highest standards." },
      { icon: "🔍", title: "Transparency", description: "Open communication at every step." },
    ],
    stats: [
      { value: "200+", label: "Projects Delivered" },
      { value: "50+", label: "Happy Clients" },
      { value: "10+", label: "Years Experience" },
      { value: "15", label: "Team Members" },
    ],
    team: [
      { name: "Alex Morgan", role: "CEO & Founder", avatar: null },
      { name: "Jordan Lee", role: "Lead Designer", avatar: null },
      { name: "Taylor Kim", role: "CTO", avatar: null },
      { name: "Casey Rivera", role: "Project Manager", avatar: null },
    ],
  },

  /* ── Services Page ─────────────────────────────────────── */
  services: {
    pageTitle: "Our Services",
    pageSubtitle: "End-to-end solutions tailored to your needs",
    items: [
      {
        icon: "🎨",
        title: "UI/UX Design",
        description: "Beautiful, intuitive interfaces designed with your users in mind. We focus on usability, accessibility, and aesthetics.",
        features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      },
      {
        icon: "💻",
        title: "Web Development",
        description: "High-performance, scalable websites and web applications built with modern technologies and best practices.",
        features: ["Frontend Development", "Backend Systems", "API Design", "CMS Integration"],
      },
      {
        icon: "📱",
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications that deliver seamless experiences on every device.",
        features: ["iOS & Android", "Cross-Platform", "App Store Optimization", "Push Notifications"],
      },
      {
        icon: "☁️",
        title: "Cloud Solutions",
        description: "Secure, reliable cloud infrastructure and DevOps services that keep your business running 24/7.",
        features: ["AWS / GCP / Azure", "CI/CD Pipelines", "Containerization", "Monitoring"],
      },
      {
        icon: "📊",
        title: "Data Analytics",
        description: "Turn raw data into actionable insights with our custom dashboards, reporting, and AI-driven analytics.",
        features: ["Custom Dashboards", "ETL Pipelines", "Machine Learning", "Business Intelligence"],
      },
      {
        icon: "🔒",
        title: "Cybersecurity",
        description: "Protect your digital assets with comprehensive security audits, monitoring, and incident response.",
        features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"],
      },
    ],
    process: {
      title: "Our Process",
      steps: [
        { number: "01", title: "Discovery", description: "We learn about your business, goals, and challenges." },
        { number: "02", title: "Strategy", description: "We craft a tailored plan and define the roadmap." },
        { number: "03", title: "Build", description: "We design and develop your solution iteratively." },
        { number: "04", title: "Launch", description: "We deploy, test, and ensure everything runs smoothly." },
      ],
    },
  },

  /* ── Portfolio Page ────────────────────────────────────── */
  portfolio: {
    pageTitle: "Our Work",
    pageSubtitle: "A selection of projects we're proud of",
    items: [
      {
        title: "E-Commerce Platform",
        category: "Web Development",
        description: "A full-featured online store with real-time inventory and AI-powered recommendations.",
        image: null,
        link: "#",
      },
      {
        title: "FinTech Dashboard",
        category: "UI/UX Design",
        description: "An intuitive financial dashboard for tracking portfolios and market trends.",
        image: null,
        link: "#",
      },
      {
        title: "Health & Fitness App",
        category: "Mobile App",
        description: "A cross-platform app with workout tracking, nutrition plans, and social features.",
        image: null,
        link: "#",
      },
      {
        title: "Cloud Migration",
        category: "Cloud Solutions",
        description: "Migrated a legacy on-prem infrastructure to a fully managed cloud environment.",
        image: null,
        link: "#",
      },
      {
        title: "AI Chatbot",
        category: "Data Analytics",
        description: "An intelligent customer support chatbot reducing ticket volume by 40%.",
        image: null,
        link: "#",
      },
      {
        title: "Security Overhaul",
        category: "Cybersecurity",
        description: "Complete security audit and remediation for a Fortune 500 financial services firm.",
        image: null,
        link: "#",
      },
    ],
  },

  /* ── Testimonials Page ─────────────────────────────────── */
  testimonials: {
    pageTitle: "Testimonials",
    pageSubtitle: "Hear from the people we've worked with",
    items: [
      {
        quote: "Working with this team was a game changer. They delivered beyond our expectations and on time.",
        author: "Sarah Johnson",
        role: "CEO, TechVentures",
        avatar: null,
      },
      {
        quote: "Their attention to detail and commitment to quality is unmatched. Highly recommended!",
        author: "Michael Chen",
        role: "CTO, DataFlow Inc.",
        avatar: null,
      },
      {
        quote: "They didn't just build us a product — they became a true partner in our growth journey.",
        author: "Emily Rodriguez",
        role: "Founder, GreenLeaf",
        avatar: null,
      },
      {
        quote: "Exceptional work from start to finish. The team was professional, responsive, and creative.",
        author: "David Park",
        role: "VP Engineering, Nexus",
        avatar: null,
      },
      {
        quote: "Our revenue increased 35% within six months of launching the platform they built for us.",
        author: "Lisa Wang",
        role: "COO, ShopSmart",
        avatar: null,
      },
      {
        quote: "The best technology investment we've ever made. Period.",
        author: "Robert Kim",
        role: "Director, BluePeak Capital",
        avatar: null,
      },
    ],
  },

  /* ── Contact Page ──────────────────────────────────────── */
  contact: {
    pageTitle: "Contact Us",
    pageSubtitle: "Have a project in mind? Let's talk about it.",
    email: "dualframemedia@gmail.com",
    phone: "+91 80974 88190",
    address: null,
    formAction: "https://formspree.io/f/xqpqdawb",                  // form submission URL or service endpoint
    formId: "xqpqdawb",                                             // Formspree Form ID
    socialLinks: [
      { platform: "Behance", url: "https://www.behance.net/hitennirmal1", icon: "bi-behance" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/hiten-nirmal-211536263?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: "bi-linkedin" },
      { platform: "WhatsApp", url: "https://wa.me/918097488190", icon: "bi-whatsapp" },
      { platform: "Instagram", url: "https://www.instagram.com/hiten_04?jplx=MWtqczdmNG9oNnAxYQ==", icon: "bi-instagram" },
    ],
    mapEmbed: null,  // Google Maps embed URL, or null to hide
  },

  /* ── Footer (shown on every page) ──────────────────────── */
  footer: {
    logo: "assets/images/footer-logo.png",
    description: "We craft digital experiences that drive growth and delight users. From concept to launch — your trusted technology partner.",
    copyright: "© 2026 DUALFRAME. All rights reserved.",
    socialLinks: [
      { platform: "Behance", url: "https://www.behance.net/hitennirmal1", icon: "bi-behance" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/hiten-nirmal-211536263?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: "bi-linkedin" },
      { platform: "WhatsApp", url: "https://wa.me/918097488190", icon: "bi-whatsapp" },
      { platform: "Instagram", url: "https://www.instagram.com/hiten_04?jplx=MWtqczdmNG9oNnAxYQ==", icon: "bi-instagram" },
    ],
    links: [
      { text: "Privacy Policy", href: "#" },
      { text: "Terms of Service", href: "#" },
      { text: "Sitemap", href: "#" },
    ],
  },
};
