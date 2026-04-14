// portfolioData.js

export const profile = {
  name: "Ji Hyun Yoon",
  title: "Sales Engineer",
  email: "wlgus1805@gmail.com",
  phone: "010-4008-8197",
  location: "Yongin-si, South Korea",
  linkedin: "https://www.linkedin.com/in/jihyun-yoon-a436101a3",
  github: "https://github.com/Evan-Yoon",
  githubDisplay: "github.com/Evan-Yoon",
  homepage: "https://evan-yoon.com/",
  homepageDisplay: "evan-yoon.com",
};

export const about = {
  intro: `I transitioned from HR into AI and software development, which allows me to understand both business problems and technical solutions.

I focus on building practical, real-world systems rather than isolated technical demos, and I approach every project with a clear question: "Does this actually solve a meaningful problem?"

My strength lies in connecting technical implementation with real user needs, and translating complex systems into clear, actionable value.`,
};

export const summary =
  "Problem-solving professional with 6+ years of experience across hospitality HR/GA operations and Blizzard Entertainment support, now expanding into applied AI and software prototyping through Intel AI for Future Workforce. Brings a strong blend of structured communication, issue triage, onboarding delivery, and hands-on product building across React, Capacitor, FastAPI, and Python. With a focus on customer-facing environments, I have a proven ability to simplify intricate user issues into effective workflows and practical solutions.";

export const experience = [
  {
    id: "exp-1",
    company: "Intel AI for Future Workforce Program",
    role: "AI / Software Development Trainee",
    period: "Nov 2025 – Present",
    location: "South Korea",
    bullets: [
      "Built multiple end-to-end AI-driven applications using React, Capacitor, FastAPI, and Supabase",
      "Focused on real-world problem-solving: accessibility navigation, HR automation, and AI recommendation systems",
    ],
  },
  {
    id: "exp-2",
    company: "Josun Hotels & Resorts",
    role: "HR / GA Agent",
    period: "Feb 2022 – Jul 2025",
    location: "Seoul, South Korea",
    bullets: [
      "Managed end-to-end recruitment for ~600 hires/year, raising hiring target attainment from 60% to 98%",
      "Reduced annual turnover from 50% to 15% through strengthened onboarding and follow-up processes",
      "Supported foreign employee visa administration, GA operations, and cross-department coordination",
    ],
  },
  {
    id: "exp-3",
    company: "Blizzard Entertainment",
    role: "Game Master",
    period: "May 2019 – Dec 2021",
    location: "Seoul, South Korea",
    bullets: [
      "Resolved gameplay, account, refund, and bug-related cases; improved customer satisfaction from 74% to 83%",
      "Recognized as Employee of the Month; authored 60+ Wowhead walkthroughs rated 5/5 by users",
    ],
  },
];

export const education = [
  {
    id: "edu-1",
    institution: "Hankuk University of Foreign Studies",
    degree: "B.A. in Public Administration",
    period: "Mar 2013 – Aug 2019",
  },
  {
    id: "edu-2",
    institution: "Intel AI for Future Workforce",
    degree: "Applied AI Training Program",
    period: "Nov 2025 – May 2026",
  },
];

export const certifications = [
  { id: "cert-1", name: "AWS Certified AI Practitioner",             year: "Mar 2026" },
  { id: "cert-2", name: "AWS Certified Cloud Practitioner",          year: "Feb 2026" },
  { id: "cert-3", name: "Computer Specialist in Spreadsheet & DB L1", year: "May 2019" },
];

export const languages = [
  { id: "lang-1", language: "Korean", level: "Native" },
  { id: "lang-2", language: "English", level: "Business Fluent — TOEIC 980, OPIc AL" },
];

export const skills = {
  technical:  "React, JavaScript / TypeScript, React Native, Capacitor, FastAPI, Python, Supabase, AWS S3, PostGIS, Git / GitHub",
  solutions:  "Issue triage, onboarding facilitation, technical documentation, workflow design, stakeholder communication, incident support",
  operations: "Recruitment operations, visa coordination, vendor management, process documentation, cross-functional follow-through",
};

export const strengths = [
  {
    category: "Problem Solving",
    items: [
      "Real-world problem identification",
      "End-to-end solution design",
      "MVP-driven development",
    ],
  },
  {
    category: "Technical",
    items: [
      "AI application integration",
      "Backend system design (FastAPI, Supabase)",
      "Mobile & Web integration",
    ],
  },
  {
    category: "Sales Engineering",
    items: [
      "Translating technical concepts into business value",
      "Customer-oriented solution thinking",
      "Use case-driven communication",
    ],
  },
];

export const projects = [
  {
    id: "proj-1",
    title: "WalkMate – AI Navigation for Visually Impaired",
    subtitle: "AI-powered real-world navigation with hazard detection",

    summary:
      "A mobility support solution designed to improve pedestrian safety by combining real-time AI detection with navigation logic.",

    problem:
      "Traditional navigation apps fail to detect real-world obstacles such as scooters or street hazards, creating safety risks for visually impaired users.",

    solution:
      "Integrated YOLO-based object detection with GPS-based navigation. Replaced compass-dependent UX with direction-vector logic to improve stability and usability. Built a reporting pipeline that automatically sends hazard data to the backend.",

    tech: [
      "React",
      "Capacitor",
      "FastAPI",
      "Supabase (PostGIS)",
      "TFLite",
      "AWS S3",
    ],

    contribution:
      "Led overall architecture design across mobile, backend, and admin systems. Designed GPS direction calculation logic and improved navigation reliability.",

    impact:
      "Demonstrates how AI can be applied to real-world accessibility problems and extended into smart-city infrastructure.",

    color: "#3b82f6",
  },

  {
    id: "proj-2",
    title: "Onboarding Assistant – HR-focused AI Assistant",
    subtitle: "AI-powered onboarding support for enterprise environments",

    summary:
      "A mobile-first onboarding assistant designed to reduce confusion and repetitive HR workload for new employees.",

    problem:
      "New employees often struggle with onboarding due to scattered information and repetitive manual guidance from HR teams.",

    solution:
      "Built a React Native app with FAQ cards, checklist system, and AI chatbot integration. Implemented fallback logic to ensure usability even when AI responses fail.",

    tech: ["React Native (Expo)", "Node.js", "Express", "OpenAI API"],

    contribution:
      "Designed the full user flow based on real HR experience and implemented chatbot integration with stable UX fallback logic.",

    impact:
      "Reduces onboarding friction and HR workload, demonstrating a clear B2B SaaS use case for AI-driven automation.",

    color: "#22c55e",
  },

  {
    id: "proj-3",
    title: "Wedding AI – Data-driven Vendor Recommendation",
    subtitle: "AI-assisted decision-making for complex user choices",

    summary:
      "A recommendation system that helps users navigate complex wedding planning decisions using structured data and AI filtering.",

    problem:
      "Wedding preparation involves fragmented information and inconsistent pricing, making decision-making difficult.",

    solution:
      "Built a RAG-based system using Supabase and vector embeddings. Implemented AI-powered filtering by region, budget, and category to generate optimized recommendations.",

    tech: ["Supabase", "PostgreSQL", "pgvector", "Python", "OpenAI API"],

    contribution:
      "Designed database schema and embedding pipeline. Implemented filtering logic for extracting structured conditions from user queries.",

    impact:
      "Shows how AI can support decision-making in complex marketplaces and recommendation systems.",

    color: "#a855f7",
  },

  {
    id: "proj-4",
    title: "Salary Calculator – Shift-based Pay Optimization Tool",
    subtitle: "Business rule-driven salary calculation system",

    summary:
      "A mobile app designed to simplify complex salary calculations for shift workers such as nurses.",

    problem:
      "Shift-based salary structures include complex rules, making manual calculation error-prone and time-consuming.",

    solution:
      "Built a Flutter app with customizable calculation rules for different work conditions. Implemented shift pattern handling and reporting features.",

    tech: ["Flutter", "Dart", "In-app Purchase"],

    contribution:
      "Designed the rule-based calculation system and implemented premium feature structure with monetization logic.",

    impact:
      "Demonstrates the ability to translate complex business rules into scalable product logic for real-world use.",

    color: "#f97316",
  },
];

export const seFit = {
  intro:
    "I bring a unique combination of HR domain experience and AI-driven development, allowing me to understand both business challenges and technical solutions. I focus on building solutions that are practical, scalable, and clearly valuable to end users.",

  points: [
    {
      id: "se-1",
      label: "Technical Credibility",
      description:
        "Built multiple end-to-end applications using AI, backend, and mobile technologies, enabling deep technical discussions.",
    },
    {
      id: "se-2",
      label: "Customer-Centric Thinking",
      description:
        "HR background helps identify real business pain points and translate them into practical solutions.",
    },
    {
      id: "se-3",
      label: "Problem Framing",
      description:
        "Focus on defining the right problem before proposing solutions, ensuring relevance and impact.",
    },
    {
      id: "se-4",
      label: "Solution Communication",
      description:
        "Able to explain complex systems clearly to both technical and non-technical stakeholders.",
    },
  ],
};

export const contact = {
  note: "Feel free to reach out if you are looking for someone who can bridge technical solutions with real-world business needs.",
};
