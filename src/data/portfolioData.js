export const profileImage = new URL(
  "../../assets/images/rsgb picture.png",
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
    skills: ["Responsive Layouts", "Multilingual Sites", "Contact Forms", "Dark Mode", "Accessible UI"],
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
    role: "AI & Automation Projects",
    details:
      "Built practical automations for business needs: an audio-to-meeting-notes pipeline, email-to-calendar sync, and a lead-generation workflow that scrapes, scores, and organizes prospects daily. Deployed and maintained on AWS and Hetzner for reliable remote access.",
  },
  {
    role: "Freelance Web Development",
    details:
      "Built websites and portfolio pages for clients in real estate, construction, and bodywork, each designed to present their business clearly and work well on any device.",
  },
  {
    role: "One Army",
    details:
      "Open-source contributor to One Army — the React platform behind Precious Plastic and other environmental projects. Ongoing UI and frontend feature work on GitHub.",
  },
];

export const projects = [
  {
    title: "Bodywork Portfolio",
    description:
      "A multilingual portfolio for a bodywork therapist. Built in React with a language switcher, a contact form wired to email, and a mobile-first layout — most of his prospective clients browse on their phones.",
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
      "A single-page site for a construction and renovation company. Structured around a clear services list and a prominent contact path, so first-time visitors can see what's offered and get in touch in one step.",
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
      "A multilingual site for a real estate agent. EN/PT/ES/FR language switching, and a layout tuned to look professional on both desktop and mobile — the two contexts where clients first meet an agent online.",
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
  github: "github.com/rsgb",
};
