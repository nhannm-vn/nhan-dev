export const profile = {
  name: "Nguyễn Minh Nhân",
  role: "Software Engineer",
  initials: "",
  email: "hello@armanvega.dev",
  location: "Remote · Worldwide",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    resume: "/resume.pdf",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { label: "Projects Completed", value: 32, suffix: "+" },
  { label: "Technologies", value: 28, suffix: "+" },
  { label: "GitHub Contributions", value: 1400, suffix: "+" },
  { label: "Certificates", value: 9, suffix: "" },
];

export const timeline = [
  {
    year: "2021",
    title: "Started BSc in Information Technology",
    desc: "Began my degree with a focus on software architecture, databases, and distributed systems.",
  },
  {
    year: "2022",
    title: "First Full Stack Applications",
    desc: "Shipped production web apps with React and Node.js, learning REST design and clean architecture.",
  },
  {
    year: "2023",
    title: "Backend & Cloud Specialization",
    desc: "Went deep into NestJS, ASP.NET Core, Docker, Nginx and Linux server administration.",
  },
  {
    year: "2024",
    title: "AI-Powered Products & Mobile",
    desc: "Built AI-driven features and cross-platform mobile apps with React Native.",
  },
];

export const techStack: {
  category: string;
  items: string[];
}[] = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "ASP.NET Core",
      "ASP.NET MVC",
      "REST API",
      "JWT",
      "Authentication",
    ],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MariaDB", "MongoDB", "MySQL Server"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "Nginx", "Linux", "Oracle Linux", "Cloud Server"],
  },
  {
    category: "Architecture",
    items: ["Monolithic", "Modular Monolith", "RESTful Architecture"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Swagger"],
  },
];

export type Project = {
  title: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  demo: string;
  github: string;
  caseStudy: string;
  accent: string;
};

export const projects: Project[] = [
  {
    title: "Nova Commerce",
    tagline: "Modular monolith e-commerce platform",
    description:
      "A high-performance commerce backend with NestJS, PostgreSQL and Redis caching, serving a React storefront with sub-100ms API responses.",
    image: "/projects/project-commerce.png",
    tags: ["NestJS", "PostgreSQL", "React", "Docker"],
    demo: "#",
    github: "#",
    caseStudy: "#",
    accent: "from-violet/30 to-blue/20",
  },
  {
    title: "Atlas Cloud",
    tagline: "Self-hosted deployment dashboard",
    description:
      "A cloud control panel to deploy containers on Linux servers with Nginx reverse proxy, live logs and one-click SSL provisioning.",
    image: "/projects/project-cloud.png",
    tags: ["Node.js", "Docker", "Nginx", "Linux"],
    demo: "#",
    github: "#",
    caseStudy: "#",
    accent: "from-cyan/30 to-green/20",
  },
  {
    title: "Lumen AI",
    tagline: "AI-powered writing assistant",
    description:
      "An AI product that streams structured responses, with a polished React UI, authentication, and usage analytics dashboards.",
    image: "/projects/project-ai.png",
    tags: ["Next.js", "TypeScript", "AI", "JWT"],
    demo: "#",
    github: "#",
    caseStudy: "#",
    accent: "from-blue/30 to-violet/20",
  },
  {
    title: "Pulse Mobile",
    tagline: "Cross-platform fitness companion",
    description:
      "A React Native app with offline sync, real-time workout tracking and a NestJS backend powering personalized insights.",
    image: "/projects/project-mobile.png",
    tags: ["React Native", "NestJS", "MongoDB", "REST API"],
    demo: "#",
    github: "#",
    caseStudy: "#",
    accent: "from-green/30 to-cyan/20",
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Freelance & Contract",
    period: "2023 — Present",
    desc: "Designing and shipping end-to-end products: REST APIs, databases, and modern React frontends for clients across fintech and SaaS.",
  },
  {
    role: "Backend Developer (Intern)",
    company: "TechForge Labs",
    period: "2023",
    desc: "Built modular NestJS services, optimized PostgreSQL queries, and containerized deployments with Docker and Nginx.",
  },
  {
    role: "Junior Web Developer",
    company: "Bright Studio",
    period: "2022",
    desc: "Developed responsive interfaces with React and Tailwind, integrating authentication flows and third-party APIs.",
  },
  {
    role: "IT Student & Open Source",
    company: "University",
    period: "2021",
    desc: "Started the IT degree and began contributing to open-source projects while building personal side projects.",
  },
];

export const services = [
  {
    title: "Backend APIs",
    desc: "Robust, well-documented REST APIs with authentication, validation and clean architecture.",
    icon: "Server",
  },
  {
    title: "Enterprise Systems",
    desc: "Scalable modular monoliths built with NestJS and ASP.NET Core for demanding workloads.",
    icon: "Building2",
  },
  {
    title: "Mobile Apps",
    desc: "Cross-platform mobile experiences with React Native, offline support and native feel.",
    icon: "Smartphone",
  },
  {
    title: "Full Stack Websites",
    desc: "Complete web products from database to pixel-perfect, animated frontends.",
    icon: "Globe",
  },
  {
    title: "Cloud Deployment",
    desc: "Containerized deployments on Linux with Docker, Nginx reverse proxies and SSL.",
    icon: "Cloud",
  },
  {
    title: "Database Design",
    desc: "Normalized, performant schemas across PostgreSQL, MongoDB and MySQL.",
    icon: "Database",
  },
];

export const testimonials = [
  {
    quote:
      "Arman delivered a rock-solid backend ahead of schedule. The API design was clean, documented and a joy to integrate with.",
    name: "Sarah Chen",
    title: "CTO, Finlytic",
  },
  {
    quote:
      "One of the rare engineers who cares equally about architecture and polish. The final product felt premium end to end.",
    name: "Marcus Reid",
    title: "Product Lead, Nova",
  },
  {
    quote:
      "From database design to deployment, everything was handled with precision. Our app has been running flawlessly since launch.",
    name: "Elena Popescu",
    title: "Founder, PulseFit",
  },
];
