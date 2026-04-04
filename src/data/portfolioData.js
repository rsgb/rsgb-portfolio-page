export const profileImage = new URL(
  "../../assets/images/Rui portfolio site profile pic.png",
  import.meta.url
).href;

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups = [
  {
    icon: "code",
    title: "Languages & Frameworks",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS", "React"],
  },
  {
    icon: "frontend",
    title: "Frontend",
    skills: ["Responsive Design", "Component Architecture", "UI Implementation"],
  },
  {
    icon: "automation",
    title: "AI & Automation",
    skills: [
      "Workflow Automation",
      "Meeting Notes Pipelines",
      "Lead Generation Systems",
      "AI Assistant Setup",
    ],
  },
  {
    icon: "infrastructure",
    title: "Tools & Infrastructure",
    skills: ["Git", "GitHub", "Vite", "Node.js", "AWS", "Hetzner"],
  },
];

export const experienceItems = [
  {
    role: "AI Workflows & Business Automation",
    details:
      "Built automation systems for practical business needs: audio-to-meeting-notes pipelines, email-to-calendar sync, and lead-generation workflows that scrape, score, and organize prospects daily. Deployed and maintained on AWS and Hetzner for reliable remote access.",
  },
  {
    role: "Websites for Small Businesses & Freelancers",
    details:
      "Built websites and portfolio pages for clients in real estate, construction, and bodywork, each designed to present their business clearly and work well on any device.",
  },
  {
    role: "Open-Source Contributor - One Army",
    details:
      "Contributing frontend features and UI improvements to One Army’s community platform, an active open-source project built with React and maintained through collaborative development on GitHub.",
  },
];

export const projects = [
  {
    title: "Bodywork Portfolio",
    description:
      "A multilingual portfolio site for a bodywork therapist, with a contact form and a calm, professional feel designed to build trust with new clients.",
    tech: ["React", "Multilingual", "Contact Form"],
    github: "https://github.com/rsgb/elias-bodywork",
    image: new URL("../../assets/images/Bodywork/bodywork 1.png", import.meta.url)
      .href,
    images: [
      new URL("../../assets/images/Bodywork/bodywork 1.png", import.meta.url).href,
      new URL("../../assets/images/Bodywork/bodywork 2.png", import.meta.url).href,
      new URL("../../assets/images/Bodywork/bodywork 3.png", import.meta.url).href,
      new URL(
        "../../assets/images/Bodywork/mobile bodywork 1.webp",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/Bodywork/mobile bodywork 2.webp",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/Bodywork/mobile bodywork 3.webp",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/Bodywork/mobile bodywork 4.webp",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/Bodywork/mobile bodywork 5.webp",
        import.meta.url
      ).href,
    ],
  },
  {
    title: "Construction Business Website",
    description:
      "A business website for a small construction and renovation company, designed to present services clearly and make it easy for customers to get in touch.",
    tech: ["React", "Business Site", "Contact Integration"],
    github: "https://github.com/rsgb/obras-remodelacoes-spa",
    image: new URL(
      "../../assets/images/Construction/construction 1.png",
      import.meta.url
    ).href,
    images: [
      new URL(
        "../../assets/images/Construction/construction 1.png",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/Construction/construction 2.png",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/Construction/construction 3.png",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/Construction/construction 4.png",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/Construction/mobile construction 1.webp",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/Construction/mobile construction 2.webp",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/Construction/mobile construction 3.webp",
        import.meta.url
      ).href,
    ],
  },
  {
    title: "Real Estate Website",
    description:
      "A multilingual website for a real estate agent, focused on presenting properties clearly and projecting the professionalism clients expect.",
    tech: ["React", "Multilingual", "Property Listings"],
    github: "https://github.com/rsgb/paulo-braga-real-estate",
    image: new URL(
      "../../assets/images/Real Estate/real estate 1.png",
      import.meta.url
    ).href,
    images: [
      new URL(
        "../../assets/images/Real Estate/real estate 1.png",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/Real Estate/real estate 2.png",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/Real Estate/mobile real estate 1.webp",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/Real Estate/mobile real estate 2.webp",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/Real Estate/mobile real estate 3.webp",
        import.meta.url
      ).href,
    ],
  },
];

export const contactLinks = {
  email: "rui.bbb@gmail.com",
  linkedin: "linkedin.com/in/yourname",
  github: "github.com/rsgb",
};
