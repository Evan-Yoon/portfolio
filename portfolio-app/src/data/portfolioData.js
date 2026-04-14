export const profile = {
  name: 'Ji Hyun Yoon',
  role: 'Sales Engineer',
  email: 'wlgus1805@gmail.com',
  phone: '010-4008-8197',
  location: 'Yongin-si, South Korea',
  blogLabel: 'Blog',
  blogUrl: 'https://evan-yoon.com',
  blogDisplay: 'evan-yoon.com',
  githubLabel: 'GitHub',
  githubUrl: 'https://github.com/Evan-Yoon',
  githubDisplay: 'github.com/Evan-Yoon',
  linkedinLabel: 'LinkedIn',
  linkedinUrl: 'https://www.linkedin.com/in/jihyun-yoon-a436101a3',
  linkedinDisplay: 'linkedin.com/in/jihyun-yoon-a436101a3',
  photo: '/profile.jpg',
  tagline:
    'I design solutions that not only work technically, but solve real problems people actually face.',
}

export const hero = {
  aboutTitle: 'About Me',
  aboutLines: [
    'HR and customer support professional turned AI-focused solution builder.',
    'Focused on practical product delivery, applied AI, and customer-facing problem solving.',
  ],
  summaryPoints: [
    '6+ years across HR/GA operations and customer support',
    'Now building applied AI and product prototypes with real user value',
    'Strong at connecting business context with technical execution',
  ],
  sections: [
    {
      title: 'Experience',
      items: [
        {
          main: 'HR / GA Agent — Josun Hotels & Resorts',
          meta: 'Feb 2022 – Jul 2025',
          sub: 'Recruitment, onboarding, HR operations, GA coordination',
        },
        {
          main: 'Game Master — Blizzard Entertainment',
          meta: 'May 2019 – Dec 2021',
          sub: 'Customer issue resolution, live support, player communication',
        },
      ],
    },
    {
      title: 'Education',
      items: [
        {
          main: 'B.A. in Public Administration',
          meta: 'Hankuk University of Foreign Studies',
          sub: 'Mar 2013 – Aug 2019',
        },
      ],
    },
    {
      title: 'Training',
      items: [
        {
          main: 'Intel AI for Future Workforce',
          meta: 'Nov 2025 – May 2026',
          sub: 'Applied AI, prototyping, workflow design, product building',
        },
      ],
    },
    {
      title: 'Certifications',
      items: [
        {
          main: 'AWS Certified AI Practitioner',
          meta: 'Mar 2026',
          sub: '',
        },
        {
          main: 'AWS Certified Cloud Practitioner',
          meta: 'Feb 2026',
          sub: '',
        },
        {
          main: 'Computer Specialist in Spreadsheet & Database Level 1',
          meta: 'May 2019',
          sub: '',
        },
      ],
    },
  ],
}

export const projects = [
  {
    id: 'proj-1',
    indexLabel: 'Project 01',
    category: 'Accessibility / AI / Mobile',
    title: 'WalkMate',
    subtitle: 'AI Navigation for Visually Impaired',
    opening:
      'A mobility support solution designed to improve pedestrian safety by combining real-time AI detection with route guidance.',
    problem:
      'Traditional navigation apps can guide routes, but they do not recognize real-world obstacles such as scooters, bollards, or street hazards. For visually impaired users, that gap becomes a direct safety issue.',
    solution:
      'WalkMate combines obstacle detection and navigation in one mobile experience. Instead of relying on unstable compass-heavy behavior, it uses direction-vector logic for clearer guidance and sends detected hazard data to the backend for reporting and follow-up.',
    highlights: [
      'Real-time hazard detection during walking',
      'Direction-vector navigation instead of compass-heavy UX',
      'Automatic hazard reporting pipeline with image + location',
    ],
    contribution: [
      'Led the overall mobile / backend / admin architecture.',
      'Designed GPS direction calculation logic and navigation flow.',
      'Connected detection, reporting, and data flow end to end.',
    ],
    tech: ['React', 'Capacitor', 'FastAPI', 'Supabase (PostGIS)', 'TFLite', 'AWS S3'],
    impact:
      'Demonstrates how AI can solve a real accessibility problem and scale into public safety or smart-city use cases.',
    accent: '#2f61e7',
    soft: '#eef4ff',
    softStrong: '#dde8ff',
  },
  {
    id: 'proj-2',
    indexLabel: 'Project 02',
    category: 'B2B SaaS / HR / AI Assistant',
    title: 'Onboarding Assistant',
    subtitle: 'HR-focused AI Assistant',
    opening:
      'A mobile-first onboarding assistant built to reduce confusion, repetitive HR work, and fragmented information for new employees.',
    problem:
      'New hires often receive information in scattered documents and repeated verbal guidance. That creates friction for employees and recurring manual workload for HR teams.',
    solution:
      'This product combines FAQ cards, checklist flows, and AI chatbot support in one onboarding experience. It also includes fallback logic so the product remains usable even when AI responses fail.',
    highlights: [
      'FAQ, checklist, and chatbot in one onboarding flow',
      'Built from real HR pain points, not hypothetical use cases',
      'Fallback UX designed for reliability during AI failure',
    ],
    contribution: [
      'Defined the full user flow based on real onboarding operations.',
      'Implemented chatbot integration and fallback interaction logic.',
      'Positioned the product as a clear B2B SaaS use case.',
    ],
    tech: ['React Native (Expo)', 'Node.js', 'Express', 'OpenAI API'],
    impact:
      'Shows how AI can reduce operational friction and create measurable value in HR-facing enterprise workflows.',
    accent: '#20b15a',
    soft: '#eef9f2',
    softStrong: '#dcf3e4',
  },
  {
    id: 'proj-3',
    indexLabel: 'Project 03',
    category: 'Recommendation / Data / AI',
    title: 'Wedding AI',
    subtitle: 'Data-driven Vendor Recommendation',
    opening:
      'A recommendation system that helps users make better wedding planning decisions through structured data, filtering, and AI-assisted guidance.',
    problem:
      'Wedding planning is full of fragmented information, inconsistent pricing, and difficult comparisons. That makes vendor selection slow, stressful, and opaque.',
    solution:
      'The system uses Supabase, vector embeddings, and AI-powered filtering by category, region, and budget to turn vague user requests into structured recommendation flows.',
    highlights: [
      'RAG-based recommendation architecture',
      'Natural language filters converted into structured search conditions',
      'Designed for high-friction, high-choice decision-making',
    ],
    contribution: [
      'Designed schema and embedding pipeline across vendor data.',
      'Implemented structured filter extraction from user queries.',
      'Positioned the product as an AI-assisted decision support tool.',
    ],
    tech: ['Supabase', 'PostgreSQL', 'pgvector', 'Python', 'OpenAI API'],
    impact:
      'Demonstrates how AI supports complex marketplace decisions where users need clarity, comparison, and confidence.',
    accent: '#a25be8',
    soft: '#f6efff',
    softStrong: '#eadcff',
  },
  {
    id: 'proj-4',
    indexLabel: 'Project 04',
    category: 'Business Logic / Mobile / Productivity',
    title: 'Salary Calculator',
    subtitle: 'Shift-based Pay Optimization Tool',
    opening:
      'A mobile app built to simplify salary calculation for shift workers who deal with overtime, night pay, holiday pay, and organization-specific rules.',
    problem:
      'Shift-based salary structures are difficult to calculate manually because each workplace can apply different combinations of night shifts, overtime, and holiday rules.',
    solution:
      'The product provides customizable pay rules, shift pattern handling, and reporting features so workers can understand complex payroll logic without manually reconstructing formulas every month.',
    highlights: [
      'Rule-driven pay calculation for real working conditions',
      'Shift pattern handling and reporting features',
      'Productized premium feature structure with monetization logic',
    ],
    contribution: [
      'Designed the rule-based calculation system.',
      'Defined premium feature structure and access gating.',
      'Turned operational complexity into usable product logic.',
    ],
    tech: ['Flutter', 'Dart', 'In-app Purchase'],
    impact:
      'Shows the ability to translate complicated business rules into scalable, understandable product logic for real-world users.',
    accent: '#f27b2f',
    soft: '#fff3eb',
    softStrong: '#ffe4d1',
  },
]