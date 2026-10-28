export type Category =
  "Web Systems" | "AI & Automation" | "Academic" | "Mobile Apps";
export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
export type Project = {
  slug: string;
  title: string;
  coverTitle: string;
  context: string;
  summary: string;
  categories: Category[];
  featured: boolean;
  visibility: "public" | "private";
  status?: "in-progress" | "completed" | "archived";
  role?: string;
  stack: string[];
  stackNote?: string;
  cover?: ProjectImage;
  overview: string;
  problem?: string;
  contributions: string[];
  features: string[];
  plannedFeatures: string[];
  screenshots: ProjectImage[];
  repositoryUrl?: string;
  demoUrl?: string;
  lessons?: string[];
};

// Historical stacks describe project context, not confirmed release configurations.
// Omit unconfirmed implementation and contribution claims from public records.
export const projects: Project[] = [
  {
    slug: "ngitora",
    title: "Ngitora",
    coverTitle: "Ngitora",
    cover: {
      src: "/projects/ngitora/sign-in.png",
      alt: "Ngitora account sign-in and clinic workspace setup preview.",
      width: 1586,
      height: 992,
    },
    context: "Dental clinic management",
    summary:
      "A multi-tenant dental clinic management project focused on appointments, patient records, staff workflows, and automation.",
    categories: ["Web Systems", "AI & Automation"],
    featured: true,
    visibility: "public",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Redis", "n8n"],
    stackNote: "Technologies explored in the project plan.",
    overview:
      "Ngitora brings dental clinic workflows into a multi-tenant management concept, connecting appointment planning, patient records, and staff coordination. Automation is part of the project's direction.",
    problem:
      "The project is designed around the coordination of appointments, records, and staff across dental clinic branches.",
    contributions: [],
    features: [],
    plannedFeatures: [
      "Appointment schedules and branch workflows",
      "AI-assisted patient support and Messenger inquiries",
      "Email automation with n8n",
    ],
    screenshots: [
      {
        src: "/projects/ngitora/sign-in.png",
        alt: "Ngitora account sign-in and clinic workspace setup preview.",
        width: 1586,
        height: 992,
      },
      {
        src: "/projects/ngitora/plans.png",
        alt: "Ngitora private-beta plan comparison preview; billing and self-service subscriptions are not live.",
        width: 1586,
        height: 992,
      },
      {
        src: "/projects/ngitora/conversations.png",
        alt: "Ngitora development-mode shared inbox with a fictional conversation and human handoff controls.",
        width: 1586,
        height: 992,
      },
      {
        src: "/projects/ngitora/appointment-email.png",
        alt: "Ngitora appointment-request email preview showing a pending request awaiting clinic confirmation.",
        width: 1586,
        height: 992,
      },
      {
        src: "/projects/ngitora/email-workflow.png",
        alt: "Ngitora n8n appointment email workflow with event routing, duplicate prevention, and notification branches.",
        width: 1125,
        height: 835,
      },
    ],
  },
  {
    slug: "rhu-calasiao",
    title: "Patient Records Management System for RHU Calasiao",
    coverTitle: "RHU Calasiao",
    cover: {
      src: "/projects/rhu-calasiao/login.png",
      alt: "RHU Calasiao Patient Records Management System login screen.",
      width: 1586,
      height: 992,
    },
    context: "Patient records management",
    summary:
      "A patient records management project designed around RHU Calasiao's visit and service workflows.",
    categories: ["Web Systems"],
    featured: true,
    visibility: "public",
    stack: ["Laravel 12", "Breeze", "Spatie Permission", "SQLite"],
    stackNote:
      "Technologies described in the project notes; PostgreSQL-ready deployment is part of the proposed direction.",
    overview:
      "A patient records management project for the Rural Health Unit in Calasiao, organized around patient visits and the services involved in each encounter.",
    problem:
      "The project centers on keeping patient records connected across the RHU's visit and service workflows.",
    contributions: [],
    features: [],
    plannedFeatures: [
      "Patient registration and queue workflows",
      "Assessment and consultation records",
      "Laboratory, pharmacy, and referral workflows",
    ],
    screenshots: [
      {
        src: "/projects/rhu-calasiao/login.png",
        alt: "RHU Calasiao Patient Records Management System login screen.",
        width: 1586,
        height: 992,
      },
      {
        src: "/projects/rhu-calasiao/dashboard.png",
        alt: "RHU Calasiao dashboard with visit summaries and a patient visit table using fictional demo records.",
        width: 1586,
        height: 992,
      },
      {
        src: "/projects/rhu-calasiao/analytics.png",
        alt: "RHU Calasiao analytics view with date filters and a daily patient visits chart.",
        width: 1586,
        height: 992,
      },
      {
        src: "/projects/rhu-calasiao/reports.png",
        alt: "RHU Calasiao service activity report with service filters, report options, and a summary preview.",
        width: 1586,
        height: 992,
      },
    ],
  },
  {
    slug: "cooper",
    title: "Cooper Web App and Discord Bot",
    coverTitle: "Cooper",
    cover: {
      src: "/projects/cooper/sign-in.png",
      alt: "Cooper web application sign-in screen with email and password fields.",
      width: 1586,
      height: 992,
    },
    context: "Private internship project",
    summary:
      "An internal HR management web application connected to a Discord bot for staff workflows and notifications.",
    categories: ["Web Systems", "AI & Automation"],
    featured: true,
    visibility: "private",
    role: "Internship team contributor",
    stack: ["Laravel", "Filament", "Discord.js", "Docker", "AWS EC2"],
    stackNote: "Technologies described in the internship project notes.",
    overview:
      "Cooper is a private, team-based internship project at Outsoar PH. It connects an internal HR management web application with a Discord bot to support staff workflows and notifications.",
    problem:
      "The project supports internal staff coordination through connected web and Discord workflows.",
    contributions: [
      "Contributed to the web application and Discord bot as part of the internship team.",
      "Supported AWS EC2 deployments, monitoring, and production troubleshooting during the internship.",
      "Installed Uptime Kuma for company monitoring.",
    ],
    features: [],
    plannedFeatures: [],
    screenshots: [
      {
        src: "/projects/cooper/sign-in.png",
        alt: "Cooper web application sign-in screen with email and password fields.",
        width: 1586,
        height: 992,
      },
      {
        src: "/projects/cooper/dashboard.png",
        alt: "Cooper dashboard preview with attendance summaries, an attendance trend chart, and upcoming holidays.",
        width: 1586,
        height: 992,
      },
      {
        src: "/projects/cooper/discord-commands.png",
        alt: "Cooper Discord bot command menu preview with attendance, daily report, and project-assistant commands.",
        width: 1586,
        height: 992,
      },
      {
        src: "/projects/cooper/time-ins.png",
        alt: "Cooper time-in list preview with cutoff filters, export controls, and an empty attendance table.",
        width: 1586,
        height: 992,
      },
      {
        src: "/projects/cooper/schedules.png",
        alt: "Cooper schedules preview with holiday reminders, notification types, and recurrence settings.",
        width: 1586,
        height: 992,
      },
      {
        src: "/projects/cooper/leave-request.png",
        alt: "Cooper leave request form preview with leave type, dates, status, and notification steps.",
        width: 1586,
        height: 992,
      },
      {
        src: "/projects/cooper/discord-time-in.png",
        alt: "Cooper Discord bot time-in reminder preview with a clock-in button and web application shortcut.",
        width: 1586,
        height: 992,
      },
    ],
  },
  {
    slug: "tesda-support-system",
    title: "EIMSS — Education Information Management & Support System",
    coverTitle: "EIMSS",
    cover: {
      src: "/projects/tesda-support-system/sign-in.png",
      alt: "EIMSS El Nazareno account sign-in screen.",
      width: 1586,
      height: 992,
    },
    context: "Academic capstone · 2024–2025",
    summary:
      "An education information and support system for TESDA El Nazareno, developed as a capstone during 2024–2025.",
    categories: ["Academic", "Web Systems"],
    featured: false,
    visibility: "public",
    stack: ["Laravel", "Laravel Breeze", "MySQL"],
    stackNote: "Technologies described in the capstone notes.",
    overview:
      "EIMSS is an academic capstone developed during 2024–2025 for TESDA El Nazareno. It focuses on education information management and institutional support.",
    contributions: [],
    features: [],
    plannedFeatures: [],
    screenshots: [
      {
        src: "/projects/tesda-support-system/sign-in.png",
        alt: "EIMSS El Nazareno account sign-in screen.",
        width: 1586,
        height: 992,
      },
      {
        src: "/projects/tesda-support-system/dashboard.png",
        alt: "EIMSS dashboard preview with school summaries, enrollment charts, student competencies, and recent activity.",
        width: 1586,
        height: 992,
      },
      {
        src: "/projects/tesda-support-system/school-details.png",
        alt: "EIMSS school details preview with industry sectors, courses, and staff management tabs.",
        width: 1586,
        height: 992,
      },
      {
        src: "/projects/tesda-support-system/batches.png",
        alt: "EIMSS course batch list preview with search, sorting, training dates, and student capacity.",
        width: 1586,
        height: 992,
      },
      {
        src: "/projects/tesda-support-system/batch-details.png",
        alt: "EIMSS batch details preview with training information, enrolled test students, and assessment controls.",
        width: 1586,
        height: 992,
      },
      {
        src: "/projects/tesda-support-system/activity-logs.png",
        alt: "EIMSS activity log preview with search filters and sample administrator actions.",
        width: 1586,
        height: 992,
      },
      {
        src: "/projects/tesda-support-system/alumni.png",
        alt: "EIMSS alumni monitoring preview with test student records, status filters, and export controls.",
        width: 1586,
        height: 992,
      },
    ],
  },
  {
    slug: "incident-monitoring-system",
    title: "Incident Monitoring System",
    coverTitle: "Incident monitoring",
    cover: {
        src: "/projects/incident-monitoring-system/login.png",
        alt: "Incident Monitoring System login screen with email and password fields.",
        width: 1586,
        height: 992,
    },
    context: "Academic web project",
    summary:
      "A web project for recording incidents and supporting visitor and monitoring workflows.",
    categories: ["Academic", "Web Systems"],
    featured: false,
    visibility: "public",
    stack: ["Laravel 12", "Tailwind CSS", "Breeze", "SQLite"],
    stackNote:
      "Technologies described in the project notes; PostgreSQL was considered for deployment.",
    overview:
      "An academic web project centered on incident recording, visitor workflows, and monitoring. The project direction also includes role-based access and reporting.",
    contributions: [],
    features: [],
    plannedFeatures: [
      "Incident records with photos",
      "Visitor workflows and role-based access",
      "Analytics and PDF exports",
    ],
    screenshots: [
      {
        src: "/projects/incident-monitoring-system/login.png",
        alt: "Incident Monitoring System login screen with email and password fields.",
        width: 1586,
        height: 992,
      },
      {
        src: "/projects/incident-monitoring-system/dashboard.png",
        alt: "Incident Monitoring System dashboard with incident summaries and visitor tables using fictional demo records.",
        width: 1586,
        height: 992,
      },
      {
        src: "/projects/incident-monitoring-system/analytics.png",
        alt: "Incident Monitoring System analytics with incident trends, status charts, and visitor activity.",
        width: 1586,
        height: 992,
      },
    ],
  },
  {
    slug: "jodate",
    title: "Jodate — Birthday Reminder",
    coverTitle: "Jodate",
    cover: {
      src: "/projects/jodate/birthdays.png",
      alt: "Jodate birthday list with search, relationship filters, favorites, and upcoming birthdays.",
      width: 1586,
      height: 992,
    },
    context: "Birthday reminder project",
    summary:
      "A Flutter birthday reminder project designed to help users keep track of birthdays.",
    categories: ["Mobile Apps"],
    featured: false,
    visibility: "public",
    stack: ["Flutter", "Dart", "SQLite", "Hive"],
    stackNote:
      "Previously discussed technologies for the offline-first project direction.",
    overview:
      "Jodate is a birthday reminder project built around keeping track of important dates. Its planned direction prioritizes offline use and local storage, with optional encrypted backup.",
    contributions: [],
    features: [],
    plannedFeatures: [
      "Offline-first birthday tracking with local storage",
      "Optional encrypted backup",
    ],
    screenshots: [
      {
        src: "/projects/jodate/birthdays.png",
        alt: "Jodate birthday list with search, relationship filters, favorites, and upcoming birthdays.",
        width: 1586,
        height: 992,
      },
      {
        src: "/projects/jodate/calendar.png",
        alt: "Jodate calendar view with birthday markers and a selected date.",
        width: 1586,
        height: 992,
      },
      {
        src: "/projects/jodate/add-birthday.png",
        alt: "Jodate Add Birthday form with relationship, gift notes, favorites, and reminder preferences.",
        width: 1586,
        height: 992,
      },
    ],
  },
  {
    slug: "tudu",
    title: "Tudu — Task Management App",
    coverTitle: "Tudu",
    cover: {
        src: "/projects/tudu/splash.png",
        alt: "Tudu splash screen with the app logo and Your cozy space for focus tagline.",
        width: 1586,
        height: 992,
    },
    context: "Task management project",
    summary:
      "A Flutter task management project for organizing tasks and reminders.",
    categories: ["Mobile Apps"],
    featured: false,
    visibility: "public",
    stack: ["Flutter", "Dart", "Material 3", "Provider", "Hive", "SQLite"],
    stackNote:
      "Previously discussed technologies; Hive and SQLite were considered for local storage.",
    overview:
      "Tudu explores task and reminder organization in Flutter, with a Material 3 interface direction. The project notes discuss Provider, local storage, notifications, and audio support.",
    contributions: [],
    features: [],
    plannedFeatures: [
      "Local task and reminder storage",
      "Notification and audio support",
    ],
    screenshots: [
      {
        src: "/projects/tudu/splash.png",
        alt: "Tudu splash screen with the app logo and Your cozy space for focus tagline.",
        width: 1586,
        height: 992,
      },
      {
        src: "/projects/tudu/today.png",
        alt: "Tudu Today dashboard with task progress, quick actions, and today's highlights.",
        width: 1586,
        height: 992,
      },
      {
        src: "/projects/tudu/tasks.png",
        alt: "Tudu Tasks view with status filters, labels, priorities, and tasks grouped by day.",
        width: 1586,
        height: 992,
      },
      {
        src: "/projects/tudu/notes.png",
        alt: "Tudu Notes view with pinned notes and labeled note cards.",
        width: 1586,
        height: 992,
      },
    ],
  },
];

const slugs = projects.map(({ slug }) => slug);
if (
  new Set(slugs).size !== slugs.length ||
  slugs.some((slug) => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))
) {
  throw new Error(
    "Project slugs must be unique and use lowercase hyphenated words.",
  );
}
export const categories = [
  ...new Set(projects.flatMap(({ categories }) => categories)),
];
export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
