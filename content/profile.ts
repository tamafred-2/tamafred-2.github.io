type Profile = {
  name: string;
  title: string;
  location: string;
  introduction: string;
  about: string;
  githubUrl: string;
  avatarSrc: string;
  portrait: { src: string; alt: string; width: number; height: number };
  contacts: {
    label: string;
    value: string;
    icon: "code" | "briefcase" | "chat" | "globe" | "mail";
    href?: string;
  }[];
  resume?: { url: string; label: string };
};

export const profile: Profile = {
  name: "Alfred Tamayo",
  avatarSrc: "/images/alfred-avatar.webp",
  portrait: {
    src: "/images/alfred-profile.webp",
    alt: "Alfred Tamayo wearing a dark suit and white shirt",
    width: 680,
    height: 680,
  },
  title: "Full Stack Developer",
  location: "Lives in Calasiao, Pangasinan; currently based in Taytay, Rizal, Philippines",
  introduction:
    "I build web applications and explore AI-assisted development and automation. My work includes management systems, developer tools, and practical projects built around real workflows.",
  about:
    "I'm an Information Technology graduate from Pangasinan State University — San Carlos Campus, with a major in Web and Mobile Technologies. During my internship at Outsoar PH, I contributed to custom development and took on deployment and monitoring responsibilities. I use AI tools proficiently to support development, debugging, research, and documentation, and continue to deepen my understanding of the systems I build.",
  githubUrl: "https://github.com/tamafred-2",
  contacts: [
    {
      label: "GitHub",
      value: "tamafred-2",
      icon: "code",
      href: "https://github.com/tamafred-2/",
    },
    {
      label: "LinkedIn",
      value: "Alfred Tamayo",
      icon: "briefcase",
      href: "https://www.linkedin.com/in/alfred-tamayo-94411b401/",
    },
    { label: "Discord", value: "virtuosoooo4", icon: "chat" },
    {
      label: "Facebook",
      value: "Alfred Tamayo",
      icon: "globe",
      href: "https://www.facebook.com/alfredtamayo2",
    },
    {
      label: "Email",
      value: "qi.virtuoso2@gmail.com",
      icon: "mail",
      href: "mailto:qi.virtuoso2@gmail.com",
    },
    {
      label: "Email",
      value: "tamafred2@gmail.com",
      icon: "mail",
      href: "mailto:tamafred2@gmail.com",
    },
  ],
};

export const certificates = [
  {
    title: "Build with AI 2026 – Baguio",
    issuer: "Google Developer Groups Baguio",
    type: "Participation",
    date: "2026-05-09",
    dateLabel: "May 9, 2026",
    description:
      "Attended and participated in Build with AI at the University of the Cordilleras, Baguio City.",
    pdf: "/certificates/build-with-ai-2026-baguio.pdf",
    preview: "/certificates/build-with-ai-2026-baguio.png",
    width: 842,
    height: 595,
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    type: "Course completion",
    date: "2025-12-15",
    dateLabel: "December 15, 2025",
    description:
      "Completed Introduction to Cybersecurity through the Cisco Networking Academy program.",
    pdf: "/certificates/introduction-to-cybersecurity.pdf",
    preview: "/certificates/introduction-to-cybersecurity.png",
    width: 930,
    height: 630,
  },
  {
    title: "Computer Hardware Basics",
    issuer: "DICT-ITU DTC Initiative · Cisco Networking Academy",
    type: "Course completion",
    date: "2025-10-12",
    dateLabel: "October 12, 2025",
    description:
      "Completed Computer Hardware Basics, offered by the DICT-ITU DTC Initiative through Cisco Networking Academy.",
    pdf: "/certificates/computer-hardware-basics.pdf",
    preview: "/certificates/computer-hardware-basics.png",
    width: 930,
    height: 630,
  },
];

export const education = {
  degree: "BS Information Technology",
  major: "Web and Mobile Technologies",
  university: "Pangasinan State University — San Carlos Campus",
  recognition: "Two-time Dean's Lister",
  portraits: [
    {
      src: "/images/alfred-graduation.webp",
      alt: "Alfred Tamayo in his graduation gown at Pangasinan State University",
      width: 800,
      height: 1200,
      caption: "Graduation gown",
    },
    {
      src: "/images/alfred-graduation-barong.webp",
      alt: "Alfred Tamayo wearing a barong and Pangasinan State University sash",
      width: 800,
      height: 1200,
      caption: "Barong and university sash",
    },
  ],
  seniorHigh: {
    track: "TVL ICT",
    school: "Calasiao Comprehensive National High School",
  },
};

export const experience = {
  company: "Outsoar PH",
  title: "Custom Development & DevOps Intern",
  location: "San Carlos City",
  period: "February–May 2026",
  description:
    "Team-based custom development, with deployment and monitoring responsibilities.",
  contributions: [
    "Contributed to Cooper, an internal HR management web application and Discord bot.",
    "Supported AWS EC2 deployments, monitoring, and production troubleshooting.",
    "Installed Uptime Kuma for company monitoring.",
    "Served as team leader for one week, coordinating tasks and supporting team progress.",
  ],
  article: {
    url: "https://outsoar.ph/blogs/alfred-devops-internship/",
    title: "The Things I Learned Beyond Coding",
    description:
      "My internship reflection on development, DevOps, teamwork, and leadership, published on the official Outsoar PH blog.",
  },
};

export const skills = [
  {
    name: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "React",
      "Next.js",
    ],
  },
  {
    name: "Backend",
    items: ["PHP", "Laravel", "Filament", "Node.js", "NestJS"],
  },
  { name: "Data", items: ["MySQL", "SQLite", "PostgreSQL", "Prisma", "Redis"] },
  {
    name: "Development & Deployment",
    items: [
      "VS Code",
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "AWS EC2",
      "Postman",
      "Uptime Kuma",
    ],
  },
  {
    name: "AI & Automation",
    items: [
      "AI-assisted development",
      "Codex",
      "Claude",
      "Gemini / Antigravity",
      "GitHub Copilot",
      "n8n",
    ],
  },
];
