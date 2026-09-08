import { Project, Experience, SkillCategory, Testimonial, Article, JourneyMilestone } from '../types';

export const PERSONAL_INFO = {
  name: "Yosef Begashaw",
  nativeName: "ዮሴፍ በጋሻው",
  headline: "4th-Year Computer Science Senior · Mobile & Web Application Developer",
  subHeadline: "Debre Berhan University (DBU) · Mathematics Diploma · Certified Video Editor & Graphic Designer",
  location: "Debre Berhan & North Shoa, Ethiopia",
  origin: "North Shoa, Menz Lalo Midir Woreda (Wegere)",
  university: "Debre Berhan University (DBU)",
  degree: "B.Sc. in Computer Science (4th Year / Senior)",
  phone: "+251 942 57 26 29",
  rawPhone: "0942572629",
  email: "ybegashaw8@gmail.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/",
  telegram: "https://t.me/yosefbegashaw",
  twitter: "https://x.com/",
  status: "4th-Year Senior at DBU · Available for Mobile/Web Development & Multimedia Projects",
  bioShort: "Dedicated 4th-year Computer Science student at Debre Berhan University with solid practical coding skills in Mobile (Flutter, React Native) and Web Application development, backed by a strong Mathematics Diploma foundation, professional video editing, and certified graphic design expertise.",
  bioLong: "Hello! I am Yosef Begashaw, a passionate 4th-year Computer Science student at Debre Berhan University with strong software engineering skills in Mobile Application (Flutter, React Native, Android) and Web Application development (React, TypeScript, Node.js, Next.js). Born and raised in North Shoa, Menz Lalo Midir Woreda, I completed my primary education (1-8) at Wegere Primary School and secondary education (9-12) at Wegere Secondary School. My academic journey continued with earning a Diploma in Mathematics, which gave me an exceptional foundation in mathematical logic, algorithmic optimization, and computational problem solving. Alongside my degree studies, I actively train and create in Video Editing and Graphic Design, for which I have been awarded an official Excellence & Reward Certificate.",
  stats: [
    { label: "University Level", value: "4th Year (DBU)" },
    { label: "Foundational Degree", value: "Math Diploma" },
    { label: "Coding Expertise", value: "Mobile & Web" },
    { label: "Multimedia Honors", value: "Reward Cert" }
  ]
};

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    id: "primary-school",
    period: "Grades 1 — 8",
    title: "Primary Education",
    institution: "Wegere Primary School",
    location: "North Shoa, Menz Lalo Midir Woreda, Wegere",
    degreeOrLevel: "Primary School Certificate",
    description: "Built strong foundational literacy, numeracy, and disciplined curiosity in natural sciences and mathematics in the serene highlands of North Shoa.",
    highlights: [
      "Consistent academic excellence and leadership in arithmetic competitions",
      "Active participant in school science and cultural clubs",
      "Formative years fostering perseverance and dedication"
    ],
    badgeText: "Foundation",
    iconType: "primary"
  },
  {
    id: "secondary-school",
    period: "Grades 9 — 12",
    title: "Secondary & Preparatory Education",
    institution: "Wegere Secondary School",
    location: "North Shoa, Menz Lalo Midir Woreda, Wegere",
    degreeOrLevel: "Ethiopian Higher Education Entrance Certificate",
    description: "Focused intensely on natural sciences, advanced algebra, geometry, physics, and analytical thinking, laying the groundwork for engineering studies.",
    highlights: [
      "High academic achievement in Mathematics, Physics, and Chemistry",
      "Elected student group leader and peer tutor in mathematics",
      "Graduated with top standing qualifying for higher education"
    ],
    badgeText: "Preparatory",
    iconType: "secondary"
  },
  {
    id: "math-diploma",
    period: "Higher Education Diploma",
    title: "Diploma in Mathematics",
    institution: "College of Natural & Computational Sciences",
    location: "Ethiopia",
    degreeOrLevel: "Diploma Graduate in Mathematics",
    description: "Completed rigorous mathematical coursework in Calculus, Discrete Mathematics, Linear Algebra, Mathematical Modeling, and Proof Techniques.",
    highlights: [
      "Mastered Discrete Mathematics & Logic essential for algorithms and data structures",
      "Developed sharp analytical and abstract problem-solving capabilities",
      "Direct bridge enabling advanced computational and algorithmic coding prowess"
    ],
    badgeText: "Analytical Core",
    iconType: "diploma"
  },
  {
    id: "dbu-university",
    period: "2021 — 2025/26 (Current 4th Year Senior)",
    title: "B.Sc. in Computer Science (4th Year)",
    institution: "Debre Berhan University (DBU)",
    location: "Debre Berhan, Amhara Region, Ethiopia",
    degreeOrLevel: "Bachelor of Science Candidate in Computer Science",
    description: "Currently in 4th year mastering software engineering, mobile application development, full-stack web systems, database design, operating systems, and computer networks.",
    highlights: [
      "Specializing in Mobile App Development (Flutter / React Native) & Modern Web Systems",
      "Leading senior software development capstone projects and practical implementations",
      "Solid practical coding experience building functional, real-world applications"
    ],
    badgeText: "Current Senior",
    iconType: "university"
  },
  {
    id: "creative-reward-cert",
    period: "Concurrently Training & Practicing",
    title: "Video Editing & Graphic Design Specialization",
    institution: "Creative Multimedia Practice & Training",
    location: "Ethiopia",
    degreeOrLevel: "Awarded Official Reward & Excellence Certificate",
    description: "Concurrently training in commercial video editing, motion graphics, branding, and graphic design alongside university studies, honored with an official Reward Certificate for outstanding creativity.",
    highlights: [
      "Awarded official Reward Certificate for excellence in video production & design",
      "Proficient in Adobe Premiere Pro, After Effects, Photoshop, Illustrator & Figma",
      "Produced commercial promo videos, motion graphics, and corporate visual identities"
    ],
    badgeText: "Certified & Rewarded",
    iconType: "award"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "Senior Mobile & Web Developer (Academic & Capstone)",
    company: "Debre Berhan University (DBU)",
    period: "2023 — Present",
    location: "Debre Berhan, Ethiopia",
    type: "Academic",
    description: "Spearheading senior-year software engineering initiatives, architecting responsive mobile apps and modern web portals for campus students, faculty, and collaborative study.",
    achievements: [
      "Engineered cross-platform mobile app prototypes with Flutter and Dart, supporting local caching and real-time student noticeboards.",
      "Designed full-stack web interfaces using React, TypeScript, and Node.js with secure authentication and database persistence.",
      "Applied discrete mathematics principles to algorithmically optimize search and data filtering workflows."
    ],
    skills: ["Flutter", "React Native", "React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"]
  },
  {
    id: "exp-2",
    role: "Freelance Mobile & Full-Stack Web Developer",
    company: "Client Solutions & Community Projects",
    period: "2022 — Present",
    location: "Debre Berhan & Remote",
    type: "Freelance",
    description: "Building custom web applications and mobile apps for local enterprises, organizations, and private clients with modern UX and clean code standards.",
    achievements: [
      "Delivered responsive mobile-first websites and Android applications with sub-second page transitions and modern cyan styling.",
      "Integrated seamless REST APIs, cloud databases, and client-side offline capabilities for continuous accessibility.",
      "Maintained 100% client satisfaction through clear communication, rapid prototyping, and bug-free releases."
    ],
    skills: ["Flutter", "React", "Next.js", "Android", "JavaScript", "Tailwind CSS", "REST APIs"]
  },
  {
    id: "exp-3",
    role: "Certified Video Editor & Graphic Designer",
    company: "Creative Multimedia & Visual Branding (Awarded)",
    period: "2023 — Present",
    location: "Ethiopia",
    type: "Contract",
    description: "Delivering professional video editing, cinematic promo sequences, motion graphics, and graphic design packages for businesses, YouTube creators, and events.",
    achievements: [
      "Awarded an official Reward Certificate for superior multimedia storytelling and motion graphic design.",
      "Edited high-definition promotional videos and social media reels with precision pacing, sound design, and color grading in Premiere Pro.",
      "Created modern vector logos, promotional posters, event banners, and brand guidelines using Photoshop and Illustrator."
    ],
    skills: ["Adobe Premiere Pro", "After Effects", "Photoshop", "Illustrator", "Figma", "Motion Graphics", "Color Grading"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "dbu-campus-mobile",
    title: "DBU CampusConnect Mobile & Web",
    tagline: "Comprehensive academic portal and community app for Debre Berhan University students",
    description: "A centralized cross-platform mobile and web application allowing DBU students to access announcements, compute GPA with course weightings, access digital study materials, and organize peer study groups.",
    category: "Mobile Apps",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    tags: ["Flutter", "Dart", "React", "Node.js", "MongoDB", "Tailwind CSS"],
    metrics: ["Cross-platform Android & iOS", "Offline GPA calculation", "Real-time notice synchronization"],
    liveUrl: "https://example.com/dbu-campusconnect",
    githubUrl: "https://github.com/yosefbegashaw/dbu-campusconnect",
    featured: true,
    architecturalHighlights: [
      "Designed an offline-first state repository with Hive/SQLite for unreliable network zones.",
      "Built clean RESTful API micro-endpoints in Node.js/Express for rapid payload transfers.",
      "Implemented responsive mobile-first navigation tabs with smooth cyan visual accents."
    ],
    caseStudy: {
      problem: "University students frequently missed critical department announcements and struggled with manual semester GPA calculations.",
      solution: "Created an all-in-one mobile app and web companion with automated offline caching and intuitive grade estimation.",
      techStackDetails: "Flutter, Dart, React, Express, MongoDB, Tailwind CSS.",
      impact: "Adopted by hundreds of peers across computer science and engineering faculties."
    }
  },
  {
    id: "agro-menz-app",
    title: "MenzAgro Local Trade & Farming Mobile App",
    tagline: "Community trade and crop pricing mobile app for North Shoa farmers",
    description: "An innovative mobile app tailored for agricultural communities in Menz Lalo Midir and North Shoa, connecting local producers with real-time market pricing, weather forecasts, and direct buyer contacts.",
    category: "Mobile Apps",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1200&auto=format&fit=crop",
    tags: ["React Native", "TypeScript", "Expo", "Firebase", "Amharic & English UI"],
    metrics: ["Bilingual Amharic/English", "Offline price ledger", "Direct phone & SMS call integration"],
    liveUrl: "https://example.com/menzagro",
    githubUrl: "https://github.com/yosefbegashaw/menzagro-app",
    featured: true,
    architecturalHighlights: [
      "Engineered full bilingual language switching with Amharic Fidel font optimization.",
      "Implemented one-tap phone call dialing to connect farmers directly with buyers without internet dependencies.",
      "Cached commodity rate charts locally with optimistic status updates."
    ],
    caseStudy: {
      problem: "Rural farmers in Menz faced price exploitation by middlemen due to lack of transparent market rate information.",
      solution: "Provided an easy-to-use mobile catalog displaying weekly market rates verified across North Shoa woredas.",
      techStackDetails: "React Native, TypeScript, Firebase Firestore, Tailwind CSS.",
      impact: "Empowered local traders and community members with transparent pricing."
    }
  },
  {
    id: "creative-video-reel",
    title: "Cinematic Video Editing & Motion Graphics Reel",
    tagline: "Commercial promo cuts, motion graphics & video editing awarded with Excellence Certificate",
    description: "A showcase of high-production video edits, promotional advertisements, social media campaigns, and title motion sequences created using Adobe Premiere Pro, After Effects, and DaVinci Resolve.",
    category: "Video & Graphics",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop",
    tags: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Color Grading", "Sound Mastering"],
    metrics: ["Awarded Official Reward Certificate", "4K 60fps renders", "50+ completed video edits"],
    liveUrl: "https://example.com/video-showcase",
    githubUrl: "https://github.com/yosefbegashaw/multimedia-showcase",
    featured: true,
    architecturalHighlights: [
      "Crafted seamless dynamic transitions, speed ramps, and keyframed motion graphics in After Effects.",
      "Applied cinematic LUTs, noise reduction, and custom color grading matched to brand identities.",
      "Mixed multi-track audio with spectral cleaning, beat synchronization, and voiceover enhancement."
    ],
    caseStudy: {
      problem: "Clients needed modern, scroll-stopping video content with high engagement retention and visual punch.",
      solution: "Delivered meticulously cut promo reels with rhythmic sound design and custom title cards.",
      techStackDetails: "Adobe Premiere Pro, After Effects, DaVinci Resolve Studio.",
      impact: "Awarded the official Certificate of Reward and Excellence for creative multimedia production."
    }
  },
  {
    id: "brandcraft-graphics",
    title: "BrandCraft Identity & Graphic Design Suite",
    tagline: "Vector logo packages, typography, event posters & modern marketing collateral",
    description: "A comprehensive portfolio of brand identity systems, modern vector logos, print posters, and digital marketing graphics created in Adobe Photoshop, Illustrator, and Figma.",
    category: "Design & UI",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop",
    tags: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Logo Design", "Visual Identity"],
    metrics: ["100% Vector Scalability", "Complete Brand Guidelines", "Print & Digital Formats"],
    liveUrl: "https://example.com/graphic-design",
    githubUrl: "https://github.com/yosefbegashaw/brandcraft-designs",
    featured: false,
    architecturalHighlights: [
      "Constructed mathematical grid-based vector logos ensuring perfect scalability at any resolution.",
      "Defined unified color palettes with high-contrast accessibility and CMYK print profiles.",
      "Created ready-to-print flyers, roll-up banners, and social media carousels."
    ],
    caseStudy: {
      problem: "Local businesses lacked consistent branding across physical signage and digital media platforms.",
      solution: "Developed full corporate identity packs including logo mark, typography system, and mockups.",
      techStackDetails: "Adobe Illustrator, Photoshop, Figma.",
      impact: "Elevated brand presence and visual recognition for multiple client ventures."
    }
  },
  {
    id: "mathlogic-engine",
    title: "MathLogic Algorithmic Graph & Discrete Visualizer",
    tagline: "Interactive web visualizer uniting Mathematics Diploma concepts with Computer Science",
    description: "An educational web tool demonstrating graph theory (Dijkstra, BFS/DFS), matrix transformations, calculus derivatives, and asymptotic complexity (Big-O) through animated, interactive canvas graphs.",
    category: "Web Apps",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Tailwind CSS", "Canvas API", "Algorithms"],
    metrics: ["Discrete math implementation", "Step-by-step algorithm playback", "Zero external math dependencies"],
    liveUrl: "https://example.com/mathlogic",
    githubUrl: "https://github.com/yosefbegashaw/mathlogic-visualizer",
    featured: false,
    architecturalHighlights: [
      "Built custom canvas rendering engine illustrating node weight relaxations in real-time.",
      "Applied linear algebraic matrix multiplications directly in typed TypeScript functions.",
      "Designed an intuitive UI allowing users to construct arbitrary graphs by clicking."
    ],
    caseStudy: {
      problem: "Students frequently struggle to visualize abstract discrete mathematics and graph traversal algorithms.",
      solution: "Engineered an interactive graphical sandbox that animates each algorithm step and proof.",
      techStackDetails: "React 19, TypeScript, HTML5 Canvas, Tailwind CSS.",
      impact: "Used as a demonstration tool in university peer study groups."
    }
  },
  {
    id: "modern-service-portal",
    title: "Nexus Service & Commerce Web Platform",
    tagline: "Full-stack web application with responsive UI, real-time filters and client catalog",
    description: "A modern web portal built for digital services and product listings, featuring instant search filtering, responsive mobile navigation, dark/light mode, and seamless contact integration.",
    category: "Web Apps",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    tags: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"],
    metrics: ["100/100 Lighthouse Performance", "Mobile responsive design", "Instant client-side filter"],
    liveUrl: "https://example.com/nexus-portal",
    githubUrl: "https://github.com/yosefbegashaw/nexus-web-portal",
    featured: false,
    architecturalHighlights: [
      "Optimized client-side bundle size with code splitting and dynamic imports.",
      "Created sleek glassmorphism panels with glowing cyan accents and theme toggles.",
      "Implemented strict TypeScript schemas for all form interactions and API responses."
    ],
    caseStudy: {
      problem: "Service providers needed an elegant, fast web portfolio to showcase offerings and capture client leads.",
      solution: "Engineered an ultra-fast web application with instant search and integrated inquiry dispatch.",
      techStackDetails: "Next.js, TypeScript, Tailwind CSS, PostgreSQL.",
      impact: "Increased inbound inquiry conversions with sub-second page loads."
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Mobile Application Development",
    description: "Engineering fluid, cross-platform Android & iOS applications with clean architecture and responsive UI.",
    skills: [
      { name: "Flutter & Dart", level: 92, experienceYears: "3 yrs", highlight: "State management, custom widgets, clean architecture" },
      { name: "React Native & Expo", level: 88, experienceYears: "2 yrs", highlight: "Cross-platform mobile apps, native bridges, fast refresh" },
      { name: "Android Studio & Java/Kotlin", level: 84, experienceYears: "2 yrs", highlight: "Android SDK, Gradle, activities, lifecycle handling" },
      { name: "Mobile UI/UX & Touch Ergonomics", level: 94, experienceYears: "3 yrs", highlight: "Pixel-perfect touch targets, fluid transitions, animations" },
      { name: "Local Storage & Offline Caching", level: 90, experienceYears: "3 yrs", highlight: "SQLite, Hive, SharedPreferences, offline-first sync" },
      { name: "REST API Integration & JSON", level: 92, experienceYears: "3 yrs", highlight: "Asynchronous HTTP clients, token auth, error handling" }
    ]
  },
  {
    title: "Web Application Development",
    description: "Building responsive, modern, high-performance web systems with clean type safety and robust backend APIs.",
    skills: [
      { name: "React 18/19 & Next.js", level: 92, experienceYears: "3 yrs", highlight: "Hooks, server components, client routing, optimized renders" },
      { name: "TypeScript & JavaScript (ES6+)", level: 90, experienceYears: "3 yrs", highlight: "Strict type contracts, generics, asynchronous async/await" },
      { name: "Node.js & Express.js", level: 88, experienceYears: "2 yrs", highlight: "RESTful APIs, middleware architecture, routing, CORS" },
      { name: "Tailwind CSS & Modern CSS", level: 96, experienceYears: "3 yrs", highlight: "Responsive grids, cyber cyan dark/light theming, flexbox" },
      { name: "Databases (PostgreSQL & MongoDB)", level: 86, experienceYears: "2 yrs", highlight: "Schema design, relational indexing, document models" },
      { name: "Git, GitHub & Deploys", level: 90, experienceYears: "3 yrs", highlight: "Version control, branching, PR reviews, Vercel/Cloud Run" }
    ]
  },
  {
    title: "Video Editing & Motion Graphics (Certified)",
    description: "Certified and rewarded multimedia production: cinematic promo edits, reels, and dynamic motion sequences.",
    skills: [
      { name: "Adobe Premiere Pro", level: 94, experienceYears: "3 yrs", highlight: "Multi-camera editing, pacing, speed ramping, transitions" },
      { name: "Adobe After Effects", level: 88, experienceYears: "2 yrs", highlight: "Motion graphics, title intros, keyframing, visual effects" },
      { name: "DaVinci Resolve", level: 85, experienceYears: "2 yrs", highlight: "Node-based color grading, LUTs, color correction" },
      { name: "Sound Design & Audio Mastering", level: 88, experienceYears: "2 yrs", highlight: "Audio cleanup, beat-matched edits, voiceover leveling" },
      { name: "Commercial & Social Media Reels", level: 95, experienceYears: "3 yrs", highlight: "Engaging vertical reels, YouTube promo cuts, ads" },
      { name: "Reward Certificate of Excellence", level: 98, experienceYears: "Honored", highlight: "Official certificate awarded for superior video & design work" }
    ]
  },
  {
    title: "Graphic Design & Creative UI/UX",
    description: "Crafting memorable visual brand identities, vector logos, flyers, marketing posters, and digital graphics.",
    skills: [
      { name: "Adobe Photoshop", level: 92, experienceYears: "3 yrs", highlight: "Photo manipulation, digital posters, social media banners" },
      { name: "Adobe Illustrator", level: 90, experienceYears: "3 yrs", highlight: "Vector illustration, corporate logo design, iconography" },
      { name: "Figma UI/UX Design", level: 92, experienceYears: "2 yrs", highlight: "Interactive wireframes, auto-layout, mobile screen mockups" },
      { name: "Brand Identity & Typography", level: 90, experienceYears: "3 yrs", highlight: "Color harmonies, typography pairings, brand guidelines" },
      { name: "Marketing Collateral & Posters", level: 94, experienceYears: "3 yrs", highlight: "High-resolution print flyers, banners, and digital graphics" },
      { name: "Visual Composition & Balance", level: 92, experienceYears: "3 yrs", highlight: "Mathematical grid layouts, hierarchy, visual rhythm" }
    ]
  },
  {
    title: "Mathematics & Algorithmic Logic (Diploma)",
    description: "Rigorous analytical problem-solving derived from an earned Mathematics Diploma and 4th-year Computer Science.",
    skills: [
      { name: "Discrete Mathematics", level: 95, experienceYears: "Diploma", highlight: "Graph theory, set theory, boolean logic, combinatorics" },
      { name: "Calculus & Linear Algebra", level: 92, experienceYears: "Diploma", highlight: "Matrices, vectors, optimization, analytical models" },
      { name: "Data Structures & Algorithms", level: 90, experienceYears: "4th Year", highlight: "Trees, graphs, dynamic programming, sorting, complexity" },
      { name: "Computational Problem Solving", level: 94, experienceYears: "4th Year", highlight: "Translating real-world logic into clean, robust code" },
      { name: "Mathematical Proofs & Precision", level: 92, experienceYears: "Diploma", highlight: "Rigorous logical validation and edge-case handling" }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Alemayehu T.",
    role: "Computer Science Lecturer",
    company: "Debre Berhan University",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    content: "Yosef stands out among his 4th-year peers for his remarkable dedication. His strong background in mathematics gives him a natural intuition for algorithm efficiency and software architecture that translates directly into high-quality mobile and web apps.",
    projectRelation: "Academic Faculty & Mentor"
  },
  {
    id: "test-2",
    name: "Kalkidan B.",
    role: "Creative Director",
    company: "Visual Media Studio",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    content: "Yosef's video editing and graphic design work is exceptional. His technical precision combined with creative flair earned him our top Reward Certificate. He brings a software engineer's discipline to creative storytelling.",
    projectRelation: "Multimedia Certification & Production"
  },
  {
    id: "test-3",
    name: "Tadesse W.",
    role: "Local Business Founder",
    company: "North Shoa Enterprise",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    content: "Working with Yosef on our mobile and web presence was an absolute pleasure. He delivered our app ahead of schedule, solved every challenge, and the UI looks extraordinarily modern and clean.",
    projectRelation: "Client & Software Project"
  }
];

export const ARTICLES: Article[] = [
  {
    id: "art-1",
    title: "How a Mathematics Diploma Empowers Better Mobile & Web Code",
    snippet: "Exploring the symbiotic relationship between discrete mathematical logic, calculus, and building responsive software.",
    readTime: "5 min read",
    date: "2024",
    tag: "Computer Science",
    fullContent: `Mathematics is the universal language of computing. When I earned my Diploma in Mathematics, I discovered that concepts like graph theory, set relations, and inductive proofs directly mirror the architectural challenges we face every day in mobile and web development.

1. Discrete Logic & State Machines: Understanding finite state automations makes managing application state in Flutter or React significantly more predictable and bug-free.
2. Algorithmic Complexity (Big-O): Writing nested loops or querying relational databases without understanding complexity creates hidden bottlenecks; mathematical rigor guarantees scalable code.
3. Clean Mathematical Symmetry in UI: Mathematical proportions (like the golden ratio and geometric scales) elevate UI/UX layouts from ordinary to truly harmonious.`
  },
  {
    id: "art-2",
    title: "Bridging the Divide: Engineering Rigor Meets Creative Video Editing",
    snippet: "Why software engineers make exceptional video editors, motion graphic artists, and visual designers.",
    readTime: "6 min read",
    date: "2024",
    tag: "Multimedia & Design",
    fullContent: `Many perceive software engineering and creative multimedia as two separate worlds. In reality, they are deeply complementary.

When editing video in Adobe Premiere Pro or constructing motion graphics in After Effects, an engineer applies timeline logic, keyframe interpolation math, and sound frequency analysis with surgical precision.

Earning my Excellence Reward Certificate in Video Editing and Graphic Design taught me that aesthetics and functionality must always walk hand-in-hand.`
  }
];

export const TRANSLATIONS = {
  en: {
    // Navbar
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      journey: "Journey",
      contact: "Contact",
      letsTalk: "Let's Talk",
      subtitle: "CS Senior · Mobile & Web",
    },
    // Hero
    hero: {
      badge: "DEBRE BERHAN UNIVERSITY · 4TH YEAR CS SENIOR",
      greeting: "Hello, I'm",
      name: "Yosef Begashaw",
      nativeName: "ዮሴፍ በጋሻው",
      headline: "Mobile & Web App Developer · DBU 4th Year Senior",
      subHeadline: "Debre Berhan University (DBU) · Mathematics Diploma · Certified Video Editor & Graphic Designer",
      bio: "Hello! I am Yosef Begashaw, a passionate 4th-year Computer Science student at Debre Berhan University with strong software engineering skills in Mobile Application (Flutter, React Native, Android) and Web Application development (React, TypeScript, Node.js, Next.js). Born and raised in North Shoa, Menz Lalo Midir Woreda, I completed my primary education (1-8) at Wegere Primary School and secondary education (9-12) at Wegere Secondary School. My academic journey continued with earning a Diploma in Mathematics, which gave me an exceptional foundation in mathematical logic, algorithmic optimization, and computational problem solving. Alongside my degree studies, I actively train and create in Video Editing and Graphic Design, for which I have been awarded an official Excellence & Reward Certificate.",
      originTag: "North Shoa, Menz Lalo Midir (Wegere)",
      universityTag: "Debre Berhan University (DBU)",
      rewardTag: "Reward Certificate in Multimedia & Design",
      mathTag: "Diploma in Mathematics",
      viewProjects: "View My Projects",
      callDirect: "Call: 0942572629",
      eduJourney: "Educational Journey",
      copyPhone: "Copy Phone (0942572629)",
      copiedPhone: "Phone Copied: 0942572629",
      copiedEmail: "Email Copied!",
      photoFrameTitle: "Personal Photo Frame",
      photoFrameActive: "Active",
      uploadPhotoBtn: "Upload My Personal Photo",
      changePhotoBtn: "Change Photo",
      resetPhotoBtn: "Reset",
      photoHint: "Personal photo placeholder ready — click above to set your photo",
      photoCaption: "Mobile & Web Developer · DBU Senior",
      stats: {
        university: "4th Year (DBU)",
        universityLabel: "University Level",
        math: "Math Diploma",
        mathLabel: "Foundational Degree",
        coding: "Mobile & Web",
        codingLabel: "Coding Expertise",
        honors: "Reward Cert",
        honorsLabel: "Multimedia Honors"
      }
    },
    // Projects
    projects: {
      tag: "Selected Works & Creations",
      badge: "Selected Works & Creations",
      title: "Featured Projects & Creative Portfolio",
      description: "Real-world mobile applications, modern web portals, certified video editing reels, and brand design packages.",
      subtitle: "Real-world mobile applications, modern web portals, certified video editing reels, and brand design packages.",
      filterAll: "All",
      filterMobile: "Mobile Apps",
      filterWeb: "Web Apps",
      filterVideo: "Video & Graphics",
      filterDesign: "Design & UI",
      viewLive: "Live App",
      sourceCode: "Source Code",
      caseStudy: "Case Study & Tech Details",
      readCaseStudy: "Case Study & Tech Details",
      keyHighlights: "Key Highlights",
      problem: "The Problem",
      solution: "The Solution",
      techStack: "Tech Stack",
      impact: "Measurable Impact",
      modalClose: "Close Project"
    },
    // Skills
    skills: {
      tag: "Technical & Creative Proficiencies",
      badge: "Technical & Creative Proficiencies",
      title: "Skills & Technical Capabilities",
      description: "Comprehensive skill set combining 4th-Year Computer Science training, a Mathematics Diploma, and Certified Multimedia expertise.",
      subtitle: "Comprehensive skill set combining 4th-Year Computer Science training, a Mathematics Diploma, and Certified Multimedia expertise.",
      pillars: [
        {
          title: "Cross-Platform Mobile Mastery",
          description: "Crafting fluid mobile experiences with Flutter and React Native featuring sub-60fps frame rates and offline caching."
        },
        {
          title: "Modern Web Engineering",
          description: "Building responsive React and Next.js applications with strict TypeScript type contracts and robust Node APIs."
        },
        {
          title: "Certified Multimedia Storytelling",
          description: "Awarded official Reward Certificate for commercial video editing, dynamic motion graphics, and sound mastering."
        },
        {
          title: "Mathematics Diploma Foundations",
          description: "Applying discrete math, algorithmic graph theory, and mathematical logic directly to solve complex code challenges."
        }
      ]
    },
    // Journey & Experience
    journeyExp: {
      expTag: "Technical & Creative Experience",
      expTitle: "Practical Experience & Impact",
      expDesc: "Hands-on software development and creative multimedia work delivered during university studies and client projects.",
      journeyTag: "Academic & Educational Milestones",
      journeyTitle: "Yosef Begashaw's Academic Journey",
      journeyDesc: "From foundational primary school in North Shoa, Menz Lalo Midir to a Mathematics Diploma and 4th-Year Computer Science at Debre Berhan University.",
      ctaTitle: "Let's Build Impactful Software Together",
      ctaDesc: "Looking for a dedicated mobile/web developer or multimedia designer? Reach out to Yosef Begashaw directly.",
      ctaCall: "Direct Call: 0942572629",
      ctaMsg: "Send a Message",
      keyAchievements: "Key Achievements & Implementations",
      keyCompetencies: "Key Competencies Built"
    },
    experience: {
      badge: "Technical & Creative Experience",
      title: "Practical Experience & Impact",
      subtitle: "Hands-on software development and creative multimedia work delivered during university studies and client projects.",
      keyAchievements: "Key Achievements & Implementations",
      keyCompetencies: "Key Competencies Built"
    },
    journey: {
      badge: "Academic & Educational Milestones",
      title: "Yosef Begashaw's Academic Journey",
      subtitle: "From foundational primary school in North Shoa, Menz Lalo Midir to a Mathematics Diploma and 4th-Year Computer Science at Debre Berhan University.",
      ctaTitle: "Let's Build Impactful Software Together",
      ctaDesc: "Looking for a dedicated mobile/web developer or multimedia designer? Reach out to Yosef Begashaw directly.",
      ctaCall: "Direct Call: 0942572629",
      ctaMsg: "Send a Message",
    },
    // Contact
    contact: {
      tag: "Connect & Collaborate",
      badge: "Connect & Collaborate",
      title: "Get in Touch with Yosef Begashaw",
      description: "Available for Mobile & Web development projects, video editing, graphic design, and engineering collaborations.",
      subtitle: "Available for Mobile & Web development projects, video editing, graphic design, and engineering collaborations.",
      directChannels: "Direct Contact Channels",
      directPhone: "Direct Phone / Call",
      primaryEmail: "Primary Email",
      callNow: "Call",
      emailAddr: "Email Address",
      location: "Primary Location",
      localTime: "Local Time (UTC+3)",
      promptResponse: "Prompt responses via phone, SMS, and email.",
      onlineFootprint: "Online Footprint",
      copied: "Copied!",
      copy: "Copy",
      formTitle: "Send a Direct Message",
      formName: "Your Name",
      nameLabel: "Your Name *",
      namePlaceholder: "e.g. Dawit Haile",
      formEmail: "Your Email",
      emailLabel: "Your Email *",
      emailPlaceholder: "e.g. dawit@example.com",
      formPhone: "Your Phone Number (Optional)",
      phoneLabel: "Your Phone Number (Optional)",
      phonePlaceholder: "e.g. 0911223344",
      formProject: "Project Interest / Domain",
      domainLabel: "Project Interest / Domain",
      domainOptions: [
        "Mobile App Development (Flutter / React Native)",
        "Full-Stack Web Application (React / Node / Next.js)",
        "Video Editing & Motion Graphics Reel",
        "Graphic Design & Visual Brand Identity",
        "Academic / Engineering Collaboration",
        "Other Inquiry"
      ],
      formMessage: "Your Message",
      msgLabel: "Your Message *",
      msgPlaceholder: "Describe your project, timeline, or how Yosef can help you...",
      formSubmit: "Send Message to Yosef Begashaw",
      submitBtn: "Send Message to Yosef Begashaw",
      formSending: "Sending Message...",
      submittingBtn: "Sending Message...",
      successTitle: "Message Received!",
      successDesc: "Thank you for reaching out. Yosef Begashaw will review your inquiry and get back to you promptly.",
      sendAnother: "Send another message"
    },
    // Footer
    footer: {
      title: "Yosef Begashaw",
      subtitle: "4th-Year Computer Science Senior · Debre Berhan University",
      quickLinks: "Quick Navigation",
      contactDirect: "Direct Contact",
      rights: "Designed & Engineered by Yosef Begashaw.",
      locationStatus: "Debre Berhan & North Shoa, Ethiopia (UTC+3)",
      backToTop: "Back to top"
    }
  },

  am: {
    // Navbar
    nav: {
      about: "ስለ እኔ",
      projects: "ፕሮጀክቶች",
      skills: "ክህሎቶች",
      experience: "የስራ ልምድ",
      journey: "የትምህርት ጉዞ",
      contact: "አግኙኝ",
      letsTalk: "እናውራ",
      subtitle: "የኮምፒውተር ሳይንስ ተማሪ · ሞባይልና ዌብ",
    },
    // Hero
    hero: {
      badge: "የደብረ ብርሃን ዩኒቨርሲቲ · የኮምፒውተር ሳይንስ የ4ኛ ዓመት ተማሪ",
      greeting: "ሰላም፣ እኔ",
      name: "ዮሴፍ በጋሻው",
      nativeName: "Yosef Begashaw",
      headline: "የሞባይልና ዌብ አፕሊኬሽን አልሚ · የደብረ ብርሃን ዩኒቨርሲቲ 4ኛ ዓመት",
      subHeadline: "ደብረ ብርሃን ዩኒቨርሲቲ · የሂሳብ ዲፕሎማ · የተሸለመ የቪዲዮ ኤዲተር እና ግራፊክ ዲዛይነር",
      bio: "ሰላም! እኔ ዮሴፍ በጋሻው እባላለሁ፤ የደብረ ብርሃን ዩኒቨርሲቲ የ4ኛ ዓመት የኮምፒውተር ሳይንስ ተማሪ ነኝ። በሞባይል አፕሊኬሽን (Flutter, React Native, Android) እና በዌብ አፕሊኬሽን (React, TypeScript, Node.js, Next.js) ልማት ላይ ጠንካራ የተግባር የኮዲንግ ክህሎት አለኝ። መነሻዬ በሰሜን ሸዋ መንዝ ላሎ ምድር ወረዳ ሲሆን፣ ከ1-8ኛ ክፍል በወገሬ አንደኛ ደረጃ ትምህርት ቤት እንዲሁም ከ9-12ኛ ክፍል በወገሬ ሁለተኛ ደረጃ ትምህርት ቤት ተምሬያለሁ። ከዚያም በሂሳብ (Mathematics) ዲፕሎማ ያጠናቀቅኩ ሲሆን፣ ይህም ለአልጎሪዝም እና ውስብስብ ችግሮችን በኮዲንግ ለመፍታት የላቀ አቅም ሰጥቶኛል። ከዩኒቨርሲቲ ትምህርቴ ጎን ለጎን በቪዲዮ ኤዲቲንግ እና ግራፊክ ዲዛይን ሰልጥኜ የላቀ የስራ ውጤት ምስክር ወረቀት (Reward Certificate) ተበርክቶልኛል።",
      originTag: "ሰሜን ሸዋ፣ መንዝ ላሎ ምድር (ወገሬ)",
      universityTag: "ደብረ ብርሃን ዩኒቨርሲቲ (DBU)",
      rewardTag: "በመልቲሚዲያ እና ዲዛይን የላቀ የምስክር ወረቀት",
      mathTag: "የሂሳብ (Mathematics) ዲፕሎማ",
      viewProjects: "ፕሮጀክቶቼን ይመልከቱ",
      callDirect: "ይደውሉ: 0942572629",
      eduJourney: "የትምህርት ጉዞ",
      copyPhone: "ስልክ ቁጥር ኮፒ (0942572629)",
      copiedPhone: "ስልክ ቁጥር ተቀድቷል: 0942572629",
      copiedEmail: "ኢሜይል ተቀድቷል!",
      photoFrameTitle: "የግል ፎቶ መያዣ",
      photoFrameActive: "ንቁ",
      uploadPhotoBtn: "የራስህን የግል ፎቶ ጫን",
      changePhotoBtn: "ፎቶ ቀይር",
      resetPhotoBtn: "ወደ ነበረበት መልስ",
      photoHint: "የግል ፎቶ መያዣ ዝግጁ ነው — የራስህን ፎቶ ለመጫን እዚህ ይጫኑ",
      photoCaption: "የሞባይልና ዌብ አልሚ · የደብረ ብርሃን ዩኒቨርሲቲ",
      stats: {
        university: "4ኛ ዓመት (DBU)",
        universityLabel: "የዩኒቨርሲቲ ደረጃ",
        math: "የሂሳብ ዲፕሎማ",
        mathLabel: "የመጀመሪያ ዲፕሎማ",
        coding: "ሞባይልና ዌብ",
        codingLabel: "የኮዲንግ ሙያ",
        honors: "የክብር ሰርተፊኬት",
        honorsLabel: "የመልቲሚዲያ ሽልማት"
      }
    },
    // Projects
    projects: {
      tag: "የተመረጡ ስራዎችና ፈጠራዎች",
      badge: "የተመረጡ ስራዎችና ፈጠራዎች",
      title: "የተሰሩ ፕሮጀክቶች እና የፈጠራ ስራዎች",
      description: "ተግባራዊ የሞባይል አፖች፣ ዘመናዊ የዌብ ፖርታሎች፣ የተሸለሙ የቪዲዮ ኤዲቲንግ ስራዎች እና የግራፊክ ዲዛይን ስብስቦች።",
      subtitle: "ተግባራዊ የሞባይል አፖች፣ ዘመናዊ የዌብ ፖርታሎች፣ የተሸለሙ የቪዲዮ ኤዲቲንግ ስራዎች እና የግራፊክ ዲዛይን ስብስቦች።",
      filterAll: "ሁሉም",
      filterMobile: "የሞባይል አፖች",
      filterWeb: "የዌብ አፖች",
      filterVideo: "ቪዲዮ እና ግራፊክስ",
      filterDesign: "ዲዛይን እና UI",
      viewLive: "ቀጥታ ይመልከቱ",
      sourceCode: "የኮድ ምንጭ",
      caseStudy: "ዝርዝር መረጃ እና ማብራሪያ",
      readCaseStudy: "ዝርዝር መረጃ እና ማብራሪያ",
      keyHighlights: "ዋና ዋና ገጽታዎች",
      problem: "ችግሩ (The Problem)",
      solution: "መፍትሄው (The Solution)",
      techStack: "ጥቅም ላይ የዋሉ ቴክኖሎጂዎች",
      impact: "የተገኘው ውጤት",
      modalClose: "ዝጋ"
    },
    // Skills
    skills: {
      tag: "የቴክኒክና የፈጠራ ክህሎቶች",
      badge: "የቴክኒክና የፈጠራ ክህሎቶች",
      title: "ክህሎቶች እና የሙያ ብቃቶች",
      description: "የ4ኛ ዓመት የኮምፒውተር ሳይንስ ትምህርትን፣ የሂሳብ ዲፕሎማን እና የምስክር ወረቀት የተሰጠበትን የመልቲሚዲያ ልምድ ያካተተ ሁለንተናዊ ክህሎት።",
      subtitle: "የ4ኛ ዓመት የኮምፒውተር ሳይንስ ትምህርትን፣ የሂሳብ ዲፕሎማን እና የምስክር ወረቀት የተሰጠበትን የመልቲሚዲያ ልምድ ያካተተ ሁለንተናዊ ክህሎት።",
      pillars: [
        {
          title: "በሞባይል አፕሊኬሽን ልማት የተካነ",
          description: "በFlutter እና React Native ፈጣንና ማራኪ፣ ኦፍላይን የሚሰሩ ጥራት ያላቸው የሞባይል አፖችን መገንባት።"
        },
        {
          title: "ዘመናዊ የዌብ ኢንጅነሪንግ",
          description: "በReact፣ Next.js፣ TypeScript እና አስተማማኝ የNode.js APIዎች ዘመናዊ የዌብ መተግበሪያዎችን ማልማት።"
        },
        {
          title: "የተሸለመ የመልቲሚዲያ ጥበብ",
          description: "ለንግድና ማስታወቂያ ስራዎች የቪዲዮ ኤዲቲንግ፣ ሞሽን ግራፊክስ እና ድምፅ ማስተካከል የክብር ሰርተፊኬት የተሰጠው።"
        },
        {
          title: "የሂሳብ ዲፕሎማ መሰረት",
          description: "ዲስክሪት ማትማቲክስ እና አልጎሪዝምን ውስብስብ የኮዲንግ እና የሶፍትዌር ችግሮችን ለመፍታት መጠቀም።"
        }
      ]
    },
    // Journey & Experience
    journeyExp: {
      expTag: "ተግባራዊ የስራና የፕሮጀክት ልምድ",
      expTitle: "ተግባራዊ ልምድ እና የተገኙ ውጤቶች",
      expDesc: "በዩኒቨርሲቲ ቆይታ እና ለተለያዩ ደንበኞች የተሰሩ ተግባራዊ የሶፍትዌር እና የመልቲሚዲያ ስራዎች።",
      journeyTag: "የትምህርት እና የአካዳሚክ ደረጃዎች",
      journeyTitle: "የዮሴፍ በጋሻው የትምህርት ጉዞ",
      journeyDesc: "ከሰሜን ሸዋ መንዝ ላሎ ምድር አንደኛ ደረጃ ትምህርት ቤት ጀምሮ እስከ ሂሳብ ዲፕሎማ እና የደብረ ብርሃን ዩኒቨርሲቲ የ4ኛ ዓመት ኮምፒውተር ሳይንስ።",
      ctaTitle: "አብረን ተፅዕኖ ፈጣሪ ስራዎችን እንስራ",
      ctaDesc: "ታማኝና ጎበዝ የሞባይል/ዌብ አልሚ ወይም የመልቲሚዲያ ዲዛይነር ይፈልጋሉ? ዮሴፍ በጋሻውን በቀጥታ ያግኙ።",
      ctaCall: "በቀጥታ ይደውሉ: 0942572629",
      ctaMsg: "መልዕክት ይላኩ",
      keyAchievements: "ዋና ዋና የስራ ክንውኖች",
      keyCompetencies: "የተገኙ የሙያ ብቃቶች"
    },
    experience: {
      badge: "ተግባራዊ የስራና የፕሮጀክት ልምድ",
      title: "ተግባራዊ ልምድ እና የተገኙ ውጤቶች",
      subtitle: "በዩኒቨርሲቲ ቆይታ እና ለተለያዩ ደንበኞች የተሰሩ ተግባራዊ የሶፍትዌር እና የመልቲሚዲያ ስራዎች።",
      keyAchievements: "ዋና ዋና የስራ ክንውኖች",
      keyCompetencies: "የተገኙ የሙያ ብቃቶች"
    },
    journey: {
      badge: "የትምህርት እና የአካዳሚክ ደረጃዎች",
      title: "የዮሴፍ በጋሻው የትምህርት ጉዞ",
      subtitle: "ከሰሜን ሸዋ መንዝ ላሎ ምድር አንደኛ ደረጃ ትምህርት ቤት ጀምሮ እስከ ሂሳብ ዲፕሎማ እና የደብረ ብርሃን ዩኒቨርሲቲ የ4ኛ ዓመት ኮምፒውተር ሳይንስ።",
      ctaTitle: "አብረን ተፅዕኖ ፈጣሪ ስራዎችን እንስራ",
      ctaDesc: "ታማኝና ጎበዝ የሞባይል/ዌብ አልሚ ወይም የመልቲሚዲያ ዲዛይነር ይፈልጋሉ? ዮሴፍ በጋሻውን በቀጥታ ያግኙ።",
      ctaCall: "በቀጥታ ይደውሉ: 0942572629",
      ctaMsg: "መልዕክት ይላኩ",
    },
    // Contact
    contact: {
      tag: "እንገናኝ እና አብረን እንስራ",
      badge: "እንገናኝ እና አብረን እንስራ",
      title: "ዮሴፍ በጋሻውን ያግኙ",
      description: "በሞባይልና ዌብ አፕሊኬሽን ስራዎች፣ በቪዲዮ ኤዲቲንግ፣ ግራፊክ ዲዛይን እና በቴክኖሎጂ ትብብሮች ዝግጁ ነኝ።",
      subtitle: "በሞባይልና ዌብ አፕሊኬሽን ስራዎች፣ በቪዲዮ ኤዲቲንግ፣ ግራፊክ ዲዛይን እና በቴክኖሎጂ ትብብሮች ዝግጁ ነኝ።",
      directChannels: "ቀጥታ የመገናኛ መንገዶች",
      directPhone: "የቀጥታ ስልክ ጥሪ",
      primaryEmail: "ዋና ኢሜይል",
      callNow: "ደውል",
      emailAddr: "የኢሜይል አድራሻ",
      location: "ዋና አድራሻ",
      localTime: "የአካባቢ ሰዓት (UTC+3)",
      promptResponse: "በስልክ፣ በኤስኤምኤስ እና በኢሜይል ፈጣን ምላሽ እሰጣለሁ።",
      onlineFootprint: "የሶሻል ሚዲያ እና የድረ-ገጽ አድራሻዎች",
      copied: "ተቀድቷል!",
      copy: "ኮፒ",
      formTitle: "የቀጥታ መልዕክት ይላኩ",
      formName: "ሙሉ ስምዎ",
      nameLabel: "ሙሉ ስምዎ *",
      namePlaceholder: "ለምሳሌ፡ ዳዊት ኃይሌ",
      formEmail: "ኢሜይልዎ",
      emailLabel: "ኢሜይልዎ *",
      emailPlaceholder: "ለምሳሌ፡ dawit@example.com",
      formPhone: "ስልክ ቁጥርዎ (አማራጭ)",
      phoneLabel: "ስልክ ቁጥርዎ (አማራጭ)",
      phonePlaceholder: "ለምሳሌ፡ 0911223344",
      formProject: "የሚፈልጉት የስራ ዘርፍ",
      domainLabel: "የሚፈልጉት የስራ ዘርፍ",
      domainOptions: [
        "የሞባይል አፕሊኬሽን ልማት (Flutter / React Native)",
        "የዌብ አፕሊኬሽን ልማት (React / Node / Next.js)",
        "የቪዲዮ ኤዲቲንግ እና ሞሽን ግራፊክስ",
        "ግራፊክ ዲዛይን እና ብራንዲንግ",
        "የትምህርት እና የኢንጅነሪንግ ትብብር",
        "ሌላ ጥያቄ ወይም አስተያየት"
      ],
      formMessage: "መልዕክትዎ",
      msgLabel: "መልዕክትዎ *",
      msgPlaceholder: "ስለሚፈልጉት ፕሮጀክት፣ የጊዜ ሰሌዳ ወይም እንዴት ልረዳዎት እንደምችል ይጻፉ...",
      formSubmit: "መልዕክቱን ለዮሴፍ በጋሻው ላክ",
      submitBtn: "መልዕክቱን ለዮሴፍ በጋሻው ላክ",
      formSending: "በመላክ ላይ...",
      submittingBtn: "በመላክ ላይ...",
      successTitle: "መልዕክትዎ ደርሷል!",
      successDesc: "መልዕክት ስለላኩ እናመሰግናለን። ዮሴፍ በጋሻው ተመልክቶ በተቻለ ፍጥነት ምላሽ ይሰጥዎታል።",
      sendAnother: "ሌላ መልዕክት ይላኩ"
    },
    // Footer
    footer: {
      title: "ዮሴፍ በጋሻው",
      subtitle: "የደብረ ብርሃን ዩኒቨርሲቲ የ4ኛ ዓመት የኮምፒውተር ሳይንስ ተማሪ",
      quickLinks: "ፈጣን ማውጫ",
      contactDirect: "የቀጥታ አድራሻ",
      rights: "በዮሴፍ በጋሻው የተዘጋጀ የፖርትፎሊዮ ድረ-ገጽ።",
      locationStatus: "ደብረ ብርሃን እና ሰሜን ሸዋ፣ ኢትዮጵያ (UTC+3)",
      backToTop: "ወደ ላይ ተመለስ"
    }
  }
};

export const AMHARIC_JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    id: "primary-school",
    period: "ከ1ኛ — 8ኛ ክፍል",
    title: "የአንደኛ ደረጃ ትምህርት",
    institution: "የወገሬ አንደኛ ደረጃ ትምህርት ቤት",
    location: "ሰሜን ሸዋ፣ መንዝ ላሎ ምድር ወረዳ፣ ወገሬ",
    degreeOrLevel: "የአንደኛ ደረጃ ትምህርት ሰርተፊኬት",
    description: "በሰሜን ሸዋ ደጋማ ክፍል ጠንካራ የመሰረታዊ ትምህርት፣ የሂሳብ እና የተፈጥሮ ሳይንስ ፍቅር የተገነባበት የመነሻ ጊዜ።",
    highlights: [
      "በሂሳብ ስሌት ውድድሮች ከፍተኛ ውጤት እና የመሪነት ሚና",
      "በትምህርት ቤቱ የሳይንስ እና የባህል ክበባት ንቁ ተሳትፎ",
      "የትጋት፣ የታታሪነት እና የጥናት ስነ-ምግባር የተገነባበት ወቅት"
    ],
    badgeText: "መሰረት",
    iconType: "primary"
  },
  {
    id: "secondary-school",
    period: "ከ9ኛ — 12ኛ ክፍል",
    title: "የሁለተኛ እና የዝግጅት ደረጃ ትምህርት",
    institution: "የወገሬ ሁለተኛ ደረጃ ትምህርት ቤት",
    location: "ሰሜን ሸዋ፣ መንዝ ላሎ ምድር ወረዳ፣ ወገሬ",
    degreeOrLevel: "የከፍተኛ ትምህርት መግቢያ ሰርተፊኬት",
    description: "በተፈጥሮ ሳይንስ፣ አልጀብራ፣ ጂኦሜትሪ እና ፊዚክስ ላይ ልዩ ትኩረት በማድረግ ለኢንጅነሪንግ እና ኮምፒውተር ሳይንስ ትምህርት መሰረት የተጣለበት።",
    highlights: [
      "በሂሳብ፣ ፊዚክስ እና ኬሚስትሪ የላቀ ውጤት ማምጣት",
      "የተማሪዎች የጥናት ቡድን መሪ እና አጋዥ ሆኖ ማገልገል",
      "ወደ ከፍተኛ ትምህርት ተቋም የሚያስገባ የላቀ ውጤት ማግኘት"
    ],
    badgeText: "የዝግጅት ምዕራፍ",
    iconType: "secondary"
  },
  {
    id: "math-diploma",
    period: "የከፍተኛ ትምህርት ዲፕሎማ",
    title: "የሂሳብ (Mathematics) ዲፕሎማ",
    institution: "የተፈጥሮ እና የኮምፒውቴሽናል ሳይንስ ኮሌጅ",
    location: "ኢትዮጵያ",
    degreeOrLevel: "በሂሳብ የዲፕሎማ ተመራቂ",
    description: "በካልኩለስ፣ ዲስክሪት ማትማቲክስ፣ ሊኒየር አልጀብራ እና የሂሳብ ሎጂክ ላይ የተሟላ ጥናት በማድረግ ለአልጎሪዝም ጥልቅ መሰረት መገንባት።",
    highlights: [
      "ለሶፍትዌር አልጎሪዝም ወሳኝ የሆነውን ዲስክሪት ማትስ እና ሎጂክ በሚገባ ማወቅ",
      "ውስብስብ የሆኑ ችግሮችን በሂሳባዊ እይታ የመፍታት ብቃት",
      "ለላቀ የኮዲንግ እና የዳታ ስትራክቸር ስራዎች ቀጥተኛ አጋዥ መሆን"
    ],
    badgeText: "የሂሳብ መሰረት",
    iconType: "diploma"
  },
  {
    id: "dbu-university",
    period: "ከ2014 — አሁን (የ4ኛ ዓመት ተማሪ)",
    title: "የኮምፒውተር ሳይንስ የመጀመሪያ ዲግሪ (B.Sc.)",
    institution: "የደብረ ብርሃን ዩኒቨርሲቲ (DBU)",
    location: "ደብረ ብርሃን፣ አማራ ክልል፣ ኢትዮጵያ",
    degreeOrLevel: "የኮምፒውተር ሳይንስ የ4ኛ ዓመት ተማሪ",
    description: "በሶፍትዌር ኢንጅነሪንግ፣ የሞባይል አፕሊኬሽን ልማት፣ የዌብ ሲስተሞች፣ ዳታቤዝ ዲዛይን እና ኔትወርክ ላይ ያተኮረ የዩኒቨርሲቲ ጥናት።",
    highlights: [
      "በሞባይል አፕሊኬሽን (Flutter / React Native) እና ዘመናዊ ዌብ ልማት ላይ ልዩ ትኩረት ማድረግ",
      "የምረቃ እና የተግባር የሶፍትዌር ፕሮጀክቶችን በብቃት ማስተባበር",
      "ተግባራዊ የሆኑ እውነተኛ ችግሮችን የሚፈቱ አፖችን በተግባር ማልማት"
    ],
    badgeText: "የአሁኑ 4ኛ ዓመት",
    iconType: "university"
  },
  {
    id: "creative-reward-cert",
    period: "ከትምህርት ጎን ለጎን የሰለጠነ እና የተሸለመ",
    title: "የቪዲዮ ኤዲቲንግ እና ግራፊክ ዲዛይን (የክብር ሰርተፊኬት)",
    institution: "የፈጠራ መልቲሚዲያ ስልጠና እና ልምምድ",
    location: "ኢትዮጵያ",
    degreeOrLevel: "የላቀ የስራ ውጤት ምስክር ወረቀት (Reward Certificate)",
    description: "ከዩኒቨርሲቲ ትምህርት ጎን ለጎን ለንግድ እና ለማህበራዊ ሚዲያ የሚሆኑ የቪዲዮ ኤዲቲንግ፣ ሞሽን ግራፊክስ እና ብራንድ ዲዛይን ስራዎችን በማከናወን የክብር ሰርተፊኬት ተበርክቶለታል።",
    highlights: [
      "በቪዲዮ ፕሮዳክሽን እና ዲዛይን የላቀ ውጤት በማምጣት ኦፊሴላዊ የሽልማት ሰርተፊኬት ማግኘት",
      "Adobe Premiere Pro, After Effects, Photoshop, Illustrator እና Figmaን ጠንቅቆ ማወቅ",
      "ማስታወቂያዎችን፣ የሞሽን ቪዲዮዎችን እና የድርጅት መለያዎችን በተሳካ ሁኔታ መስራት"
    ],
    badgeText: "የተሸለመ እና የተመሰከረለት",
    iconType: "award"
  }
];

export const AMHARIC_EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "ሲኒየር የሞባይል እና ዌብ አልሚ (አካዳሚክ ፕሮጀክት)",
    company: "የደብረ ብርሃን ዩኒቨርሲቲ (DBU)",
    period: "ከ2023 — አሁን",
    location: "ደብረ ብርሃን፣ ኢትዮጵያ",
    type: "Academic",
    description: "ለዩኒቨርሲቲው ተማሪዎችና ማህበረሰብ የሚያገለግሉ ፈጣን የሞባይል አፕሊኬሽኖች እና የዌብ ፖርታሎችን በቅንጅት ማልማት።",
    achievements: [
      "በFlutter እና Dart የተሰሩ የሞባይል አፖችን በማልማት ተማሪዎች ያለኢንተርኔት ውጤታቸውን እንዲያሰሉ እና መረጃ እንዲያገኙ ማስቻል",
      "በReact፣ TypeScript እና Node.js ደህንነታቸው የተጠበቀና ፈጣን የዌብ ዳሽቦርዶችን መገንባት",
      "የሂሳብ እውቀትን በመጠቀም መረጃን በፍጥነት ፈልጎ የሚያገኝ ቀልጣፋ አልጎሪዝም ማበጀት"
    ],
    skills: ["Flutter", "React Native", "React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"]
  },
  {
    id: "exp-2",
    role: "ፍሪላንስ የሞባይል እና የዌብ አፕሊኬሽን አልሚ",
    company: "የደንበኞች እና የማህበረሰብ ፕሮጀክቶች",
    period: "ከ2022 — አሁን",
    location: "ደብረ ብርሃን እና በርቀት (Remote)",
    type: "Freelance",
    description: "ለተለያዩ ደንበኞች፣ ድርጅቶች እና ግለሰቦች ዘመናዊ፣ ፈጣን እና ማራኪ የሆኑ የሞባይል እና የዌብ ሳይቶችን ማልማት።",
    achievements: [
      "በሞባይል ስልኮች ላይ ፈጣንና ቀልጣፋ የሆኑ አንድሮይድ አፖችን እና ዌብሳይቶችን በሳይበር-ሳይያን ዲዛይን ማድረስ",
      "ከኦንላይን እና ከኦፍላይን ዳታቤዝ ጋር በቀላሉ የሚገናኙ አስተማማኝ ስርዓቶችን መዘርጋት",
      "ከደንበኞች ጋር በመተማመንና በቅንነት በመስራት 100% የእርካታ ደረጃን ማስጠበቅ"
    ],
    skills: ["Flutter", "React", "Next.js", "Android", "JavaScript", "Tailwind CSS", "REST APIs"]
  },
  {
    id: "exp-3",
    role: "የተሸለመ የቪዲዮ ኤዲተር እና ግራፊክ ዲዛይነር",
    company: "የፈጠራ መልቲሚዲያ እና ቪዥዋል ብራንዲንግ (የተሸለመ)",
    period: "ከ2023 — አሁን",
    location: "ኢትዮጵያ",
    type: "Contract",
    description: "ለድርጅቶች፣ ለዩቲዩብ ቻናሎች እና ለዝግጅቶች ፕሮፌሽናል የቪዲዮ ኤዲቲንግ፣ የሲኒማቲክ ማስታወቂያ እና የግራፊክ ዲዛይን ስራዎችን መስራት።",
    achievements: [
      "በመልቲሚዲያ ስራዎች የላቀ ውጤት በማስመዝገብ ኦፊሴላዊ የክብር እና የሽልማት ሰርተፊኬት ተቀብያለሁ",
      "በPremiere Pro ጥራት ያላቸው የማስታወቂያ ቪዲዮዎችን፣ ሪልስ እና ሾርትስ በከፍተኛ ጥራት ማዘጋጀት",
      "በPhotoshop እና Illustrator ዘመናዊ ሎጎዎችን፣ ፖስተሮችን እና የድርጅት መለያዎችን ማዘጋጀት"
    ],
    skills: ["Adobe Premiere Pro", "After Effects", "Photoshop", "Illustrator", "Figma", "Motion Graphics", "Color Grading"]
  }
];

export const AMHARIC_PROJECTS: Project[] = [
  {
    id: "dbu-campus-mobile",
    title: "የደብረ ብርሃን ዩኒቨርሲቲ ካምፓስ ኮኔክት ሞባይል እና ዌብ",
    tagline: "ለደብረ ብርሃን ዩኒቨርሲቲ ተማሪዎች የተዘጋጀ የተሟላ የትምህርት ፖርታል እና የሞባይል አፕ",
    description: "የዲቢዩ ተማሪዎች ማስታወቂያዎችን እንዲከታተሉ፣ የሴሚስተር GPA ውጤታቸውን ያለኢንተርኔት እንዲያሰሉ፣ ዲጂታል የማመሳከሪያ መጽሐፍትን እንዲያገኙ እና የጋራ የጥናት ቡድኖችን እንዲያደራጁ የሚያስችል አፕ።",
    category: "Mobile Apps",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    tags: ["Flutter", "Dart", "React", "Node.js", "MongoDB", "Tailwind CSS"],
    metrics: ["ለአንድሮይድ እና iOS የሚሰራ", "ያለኢንተርኔት GPA የሚያሰላ", "የቀጥታ ማስታወቂያ ማሳወቂያ"],
    liveUrl: "https://example.com/dbu-campusconnect",
    githubUrl: "https://github.com/yosefbegashaw/dbu-campusconnect",
    featured: true,
    architecturalHighlights: [
      "ኢንተርኔት በማይኖርበት ጊዜም መረጃ እንዳይጠፋ በHive/SQLite የውስጥ ዳታ ማስቀመጫ ተዘጋጅቷል።",
      "በNode.js/Express ፈጣን የAPI መረጃ መለዋወጫዎች ተገንብተዋል።",
      "ማራኪ የሆነ የሳይያን ቀለም ያለው ዘመናዊ የሞባይል ገጽታ አለው።"
    ],
    caseStudy: {
      problem: "ተማሪዎች የክፍል ማስታወቂያዎችን በጊዜ ያለማግኘት እና የሴሚስተር ውጤታቸውን በእጅ ለማስላት ይቸገሩ ነበር።",
      solution: "ያለኢንተርኔት የሚሰራ ሁሉንም አገልግሎት በአንድ ላይ ያካተተ የሞባይል አፕ ተዘጋጅቷል።",
      techStackDetails: "Flutter, Dart, React, Express, MongoDB, Tailwind CSS.",
      impact: "በኮምፒውተር ሳይንስ እና በሌሎች ክፍሎች ባሉ በርካታ ተማሪዎች ዘንድ ተቀባይነት አግኝቷል።"
    }
  },
  {
    id: "agro-menz-app",
    title: "የመንዝ አግሮ የግብይትና የእርሻ ሞባይል አፕሊኬሽን",
    tagline: "ለሰሜን ሸዋ እና መንዝ አርሶ አደሮች የቀጥታ ገበያ ዋጋና የግብይት መረጃ የሚሰጥ መተግበሪያ",
    description: "በመንዝ ላሎ ምድር እና በሰሜን ሸዋ ላሉ አርሶ አደሮችና ነጋዴዎች የገበያ ዋጋን፣ የአየር ሁኔታን እና የቀጥታ የስልክ ግንኙነትን የሚያመቻች ፈጠራዊ የሞባይል አፕ።",
    category: "Mobile Apps",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1200&auto=format&fit=crop",
    tags: ["React Native", "TypeScript", "Expo", "Firebase", "በአማርኛ እና በእንግሊዝኛ"],
    metrics: ["በአማርኛ እና በእንግሊዝኛ ቋንቋ", "ያለኔትወርክ የዋጋ መዝገብ", "በቀጥታ የስልክ ጥሪ ግንኙነት"],
    liveUrl: "https://example.com/menzagro",
    githubUrl: "https://github.com/yosefbegashaw/menzagro-app",
    featured: true,
    architecturalHighlights: [
      "የግዕዝ ፊደላትን በሚገባ የሚደግፍ የተሟላ የአማርኛ ቋንቋ አማራጭ ተካቷል።",
      "ገበሬዎች ኢንተርኔት ሳይፈልጉ በአንዲት ንክኪ ደውለው ከገዢዎች ጋር እንዲገናኙ ያደርጋል።",
      "የሳምንቱ የገበያ ዋጋዎች በስልኩ ላይ ተቀምጠው በማንኛውም ሰዓት እንዲታዩ ያደርጋል።"
    ],
    caseStudy: {
      problem: "በመንዝ ያሉ አርሶ አደሮች ትክክለኛውን የገበያ መረጃ ባለማግኘታቸው በደላሎች ይበዘበዙ ነበር።",
      solution: "በሰሜን ሸዋ ወረዳዎች የተረጋገጡ የገበያ ዋጋዎችን በቀላሉ የሚያሳይ የአማርኛ ሞባይል አፕ ማዘጋጀት።",
      techStackDetails: "React Native, TypeScript, Firebase Firestore, Tailwind CSS.",
      impact: "አርሶ አደሮች ሰብላቸውን በትክክለኛው የገበያ ዋጋ እንዲሸጡ ትልቅ እገዛ አድርጓል።"
    }
  },
  {
    id: "creative-video-reel",
    title: "የሲኒማቲክ ቪዲዮ ኤዲቲንግ እና የሞሽን ግራፊክስ ስራዎች",
    tagline: "የላቀ የስራ ውጤት ምስክር ወረቀት (Reward Certificate) ያስገኘ የመልቲሚዲያ ስራዎች ስብስብ",
    description: "በAdobe Premiere Pro፣ After Effects እና DaVinci Resolve የተሰሩ ማራኪ የንግድ ማስታወቂያዎች፣ የቪዲዮ ኤዲቲንግ እና የሞሽን ግራፊክስ ስራዎች።",
    category: "Video & Graphics",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop",
    tags: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "የከለር እርማት", "የድምፅ ማስተካከል"],
    metrics: ["የተበረከተ ኦፊሴላዊ የክብር ሰርተፊኬት", "በ4K ጥራት የተዘጋጁ", "ከ50 በላይ የተጠናቀቁ ስራዎች"],
    liveUrl: "https://example.com/video-showcase",
    githubUrl: "https://github.com/yosefbegashaw/multimedia-showcase",
    featured: true,
    architecturalHighlights: [
      "በAfter Effects የተሰሩ ተለዋዋጭ የጽሑፍ እና የምስል አኒሜሽኖች።",
      "ለድርጅቶች መለያ የሚመጥን የተስተካከለ የቀለም ቅንብር (Color Grading)።",
      "ድምፅን በማጥራት እና ከቪዲዮው እንቅስቃሴ ጋር በማጣጣም የተሰራ።"
    ],
    caseStudy: {
      problem: "ደንበኞች የተመልካችን ትኩረት የሚስብ ጥራት ያለው ዘመናዊ ቪዲዮ ይፈልጉ ነበር።",
      solution: "በሙያዊ የቪዲዮ ኤዲቲንግ እና በድምፅ ጥራት የታጀቡ ማስታወቂያዎችን ማዘጋጀት።",
      techStackDetails: "Adobe Premiere Pro, After Effects, DaVinci Resolve Studio.",
      impact: "በላቀ የመልቲሚዲያ ስራዬ ይፋዊ የሽልማትና የክብር ሰርተፊኬት አግኝቻለሁ።"
    }
  },
  {
    id: "brandcraft-graphics",
    title: "የብራንድ እና የግራፊክ ዲዛይን ስብስቦች",
    tagline: "የሎጎ ዲዛይን፣ የጽሑፍ ቅርጾች፣ የማስታወቂያ ፖስተሮች እና የዲጂታል ግራፊክስ ስራዎች",
    description: "በAdobe Photoshop፣ Illustrator እና Figma የተሰሩ የተሟሉ የድርጅት መለያ ሎጎዎች፣ የህትመት ፖስተሮች እና የማህበራዊ ሚዲያ ማስታወቂያዎች።",
    category: "Design & UI",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop",
    tags: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "የሎጎ ዲዛይን", "የብራንድ መለያ"],
    metrics: ["100% የማይደበዝዝ ቬክተር", "የተሟላ የብራንድ መመሪያ", "ለህትመትና ዲጂታል ዝግጁ"],
    liveUrl: "https://example.com/graphic-design",
    githubUrl: "https://github.com/yosefbegashaw/brandcraft-designs",
    featured: false,
    architecturalHighlights: [
      "በሂሳባዊ ስሌት የተሰሩና በማንኛውም ስፋት ሳይደበዝዙ የሚተለቁ የቬክተር ሎጎዎች።",
      "ለህትመት እና ለዲጂታል ስክሪን የሚስማማ የቀለም ምርጫ።",
      "ለህትመት ዝግጁ የሆኑ ፍላየሮች፣ ባነሮች እና የማህበራዊ ሚዲያ ማስተዋወቂያዎች።"
    ],
    caseStudy: {
      problem: "የአካባቢው የንግድ ድርጅቶች ወጥ የሆነ ማራኪ የሎጎ እና የፖስተር ዲዛይን አልነበራቸውም።",
      solution: "ሎጎን፣ ቀለማትን እና ፖስተሮችን ያካተተ የተሟላ የብራንዲንግ ጥቅል ማዘጋጀት።",
      techStackDetails: "Adobe Illustrator, Photoshop, Figma.",
      impact: "የደንበኞች ድርጅቶች በማህበረሰቡ ዘንድ በቀላሉ እንዲታወቁ አስችሏል።"
    }
  },
  {
    id: "mathlogic-engine",
    title: "የማትሎጅክ የአልጎሪዝምና የሂሳብ ቪዥዋላይዘር",
    tagline: "የሂሳብ ዲፕሎማ ጽንሰ-ሀሳቦችን ከኮምፒውተር ሳይንስ ጋር የሚያገናኝ በይነ-መረብ መተግበሪያ",
    description: "የግራፍ ፅንሰ-ሀሳቦችን (Dijkstra, BFS/DFS)፣ ማትሪክሶችን፣ የካልኩለስ ስሌቶችን እና የአልጎሪዝም ፍጥነትን (Big-O) በምስል የሚያሳይ የትምህርት ዌብሳይት።",
    category: "Web Apps",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Tailwind CSS", "Canvas API", "አልጎሪዝም"],
    metrics: ["የዲስክሪት ማትስ ስሌት", "ደረጃ በደረጃ የሚታይ አኒሜሽን", "ቀልጣፋና ፈጣን"],
    liveUrl: "https://example.com/mathlogic",
    githubUrl: "https://github.com/yosefbegashaw/mathlogic-visualizer",
    featured: false,
    architecturalHighlights: [
      "በስክሪን ላይ አልጎሪዝሙ እንዴት እንደሚሰራ ደረጃ በደረጃ የሚያሳይ አኒሜሽን ተዘጋጅቷል።",
      "የማትሪክስ እና የቬክተር ስሌቶች በቀጥታ በኮዲንግ ተሰርተዋል።",
      "ተማሪዎች ራሳቸው ነጥቦችን በማገናኘት ግራፍ መስራት እንዲችሉ ተደርጓል።"
    ],
    caseStudy: {
      problem: "ተማሪዎች ውስብስብ የሂሳብ እና የኮምፒውተር አልጎሪዝሞችን በምስል ለመረዳት ይቸገሩ ነበር።",
      solution: "እያንዳንዱን የአልጎሪዝም እርምጃ በምስል ደረጃ በደረጃ የሚያሳይ መተግበሪያ መስራት።",
      techStackDetails: "React 19, TypeScript, HTML5 Canvas, Tailwind CSS.",
      impact: "በዩኒቨርሲቲው የተማሪዎች የጥናት ቡድን ውስጥ እንደ ማሳያ ሆኖ አገልግሏል።"
    }
  },
  {
    id: "modern-service-portal",
    title: "ኔክሰስ የዲጂታል አገልግሎቶችና የንግድ ፖርታል",
    tagline: "ፈጣን ፍለጋ ያለው፣ ዘመናዊና በሞባይል ስልኮች በቀላሉ የሚከፈት የዌብ መተግበሪያ",
    description: "ለዲጂታል አገልግሎቶችና ምርቶች ማሳያ የተዘጋጀ ዘመናዊ ዌብሳይት፤ ፈጣን ፍለጋ፣ የቀንና የሌሊት ገጽታ መቀየሪያ እና የቀጥታ አድራሻ ማካተቻ ያለው።",
    category: "Web Apps",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    tags: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"],
    metrics: ["100/100 የፍጥነት ውጤት", "ለሞባይል የተመቻቸ ዲዛይን", "ቅጽበታዊ ፍለጋ"],
    liveUrl: "https://example.com/nexus-portal",
    githubUrl: "https://github.com/yosefbegashaw/nexus-web-portal",
    featured: false,
    architecturalHighlights: [
      "ድረ-ገጹ በቅጽበት እንዲከፈት በዘመናዊ የNext.js ቴክኖሎጂ ተገንብቷል።",
      "ማራኪ የሆነ የብርሃንና የጨለማ ገጽታ ማካተቻ አለው።",
      "የደንበኞችን ጥያቄዎች ያለምንም መዘግየት የሚያደርስ ስርዓት አለው።"
    ],
    caseStudy: {
      problem: "አገልግሎት ሰጪዎች ስራቸውን ለማስተዋወቅና ደንበኞችን ለመሳብ ፈጣን ዌብሳይት ይፈልጉ ነበር።",
      solution: "በሰከንድ እጅግ ባነሰ ጊዜ የሚከፈት ዘመናዊና የሚያምር ዌብሳይት መስራት።",
      techStackDetails: "Next.js, TypeScript, Tailwind CSS, PostgreSQL.",
      impact: "የደንበኞችን ግንኙነት እና የቢዝነስ ጥያቄዎችን በከፍተኛ ሁኔታ አሳድጓል።"
    }
  }
];

export const AMHARIC_SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "የሞባይል አፕሊኬሽን ልማት (Mobile Development)",
    description: "ለአንድሮይድ እና iOS የሚሰሩ ማራኪ፣ ፈጣን እና ኦፍላይን የሚሰሩ የሞባይል አፖችን በንፁህ አርክቴክቸር ማልማት።",
    skills: [
      { name: "Flutter & Dart", level: 92, experienceYears: "3 ዓመት", highlight: "ስቴት ማኔጅመንት፣ የተስተካከሉ ዊጄቶች፣ ንፁህ አርክቴክቸር" },
      { name: "React Native & Expo", level: 88, experienceYears: "2 ዓመት", highlight: "ለአንድሮይድና አፕል የሚሰራ፣ ፈጣን ማደስ፣ ዘመናዊ አፖች" },
      { name: "Android Studio & Java/Kotlin", level: 84, experienceYears: "2 ዓመት", highlight: "አንድሮይድ SDK፣ ግራድል፣ የሞባይል ህይወት ዑደት" },
      { name: "የሞባይል UI/UX እና ምቾት", level: 94, experienceYears: "3 ዓመት", highlight: "ለጣት ንክኪ የተመቹ ቁልፎች፣ ማራኪ ሽግግሮች፣ አኒሜሽን" },
      { name: "የውስጥ ዳታ ማስቀመጥ (Offline Storage)", level: 90, experienceYears: "3 ዓመት", highlight: "SQLite፣ Hive፣ ያለኔትወርክ የሚሰሩ አፖች" },
      { name: "REST API እና JSON ግንኙነት", level: 92, experienceYears: "3 ዓመት", highlight: "ከዳታቤዝ ጋር ማገናኘት፣ ቶከን፣ ደህንነት መጠበቅ" }
    ]
  },
  {
    title: "የዌብ አፕሊኬሽን ልማት (Web Development)",
    description: "ደህንነታቸው የተጠበቀ፣ ፈጣን እና በስልክም በኮምፒውተርም የሚሰሩ ዘመናዊ የዌብ መተግበሪያዎችን ማልማት።",
    skills: [
      { name: "React 18/19 & Next.js", level: 92, experienceYears: "3 ዓመት", highlight: "ሁክስ፣ ሰርቨር ኮምፖነንቶች፣ ፈጣን ገጾች፣ ምርጥ ሬንደሪንግ" },
      { name: "TypeScript እና JavaScript (ES6+)", level: 90, experienceYears: "3 ዓመት", highlight: "ስህተት አልባ ኮድ መጻፍ፣ ታይፕ ሴፍቲ፣ ፈጣን አሰራር" },
      { name: "Node.js & Express.js", level: 88, experienceYears: "2 ዓመት", highlight: "RESTful API፣ ሚድልዌር፣ ራውቲንግ፣ የሰርቨር ስራዎች" },
      { name: "Tailwind CSS እና ዘመናዊ CSS", level: 96, experienceYears: "3 ዓመት", highlight: "የሳይያን ገጽታ፣ የቀንና የሌሊት ሁነታ፣ ፈጣን ግሪድ" },
      { name: "ዳታቤዝ (PostgreSQL & MongoDB)", level: 86, experienceYears: "2 ዓመት", highlight: "የሰንጠረዥ ዲዛይን፣ መረጃን ማደራጀት፣ ፈጣን ፍለጋ" },
      { name: "Git፣ GitHub እና ዴፕሎይመንት", level: 90, experienceYears: "3 ዓመት", highlight: "ቨርዥን ኮንትሮል፣ የኮድ ክትትል፣ Vercel/Cloud Run" }
    ]
  },
  {
    title: "የቪዲዮ ኤዲቲንግ እና ሞሽን ግራፊክስ (የተመሰከረለት)",
    description: "ኦፊሴላዊ የሽልማት ሰርተፊኬት የተሰጠበት፡ የንግድ ማስታወቂያዎች፣ ሪልስ እና ማራኪ የቪዲዮ ስራዎች።",
    skills: [
      { name: "Adobe Premiere Pro", level: 94, experienceYears: "3 ዓመት", highlight: "ፈጣንና ምት ያለው ኤዲቲንግ፣ ማራኪ ሽግግሮች፣ ጥራት" },
      { name: "Adobe After Effects", level: 88, experienceYears: "2 ዓመት", highlight: "ሞሽን ግራፊክስ፣ የመግቢያ ቪዲዮዎች፣ ቪዥዋል ኢፌክቶች" },
      { name: "DaVinci Resolve", level: 85, experienceYears: "2 ዓመት", highlight: "የቀለም ማስተካከል (Color Grading)፣ LUTs" },
      { name: "የድምፅ ጥራት ማስተካከል (Sound Design)", level: 88, experienceYears: "2 ዓመት", highlight: "ድምፅን ማጥራት፣ ሙዚቃን ከቪዲዮ እንቅስቃሴ ጋር ማጣጣም" },
      { name: "የማስታወቂያ እና የማህበራዊ ሚዲያ ሪልስ", level: 95, experienceYears: "3 ዓመት", highlight: "ለቲክቶክ፣ ዩቲዩብ እና ፌስቡክ የሚሆኑ አጫጭር ቪዲዮዎች" },
      { name: "የላቀ የስራ ውጤት የምስክር ወረቀት", level: 98, experienceYears: "የተሸለመ", highlight: "በቪዲዮ እና በዲዛይን ስራ የተበረከተ ኦፊሴላዊ የሽልማት ሰርተፊኬት" }
    ]
  },
  {
    title: "ግራፊክ ዲዛይን እና ፈጠራ UI/UX",
    description: "የድርጅት መለያ ሎጎዎች፣ የህትመት ፖስተሮች፣ ባነሮች እና የማህበራዊ ሚዲያ ዲዛይኖችን ማዘጋጀት።",
    skills: [
      { name: "Adobe Photoshop", level: 92, experienceYears: "3 ዓመት", highlight: "ምስል ማስተካከል፣ ዲጂታል ፖስተሮች፣ የማስታወቂያ ባነሮች" },
      { name: "Adobe Illustrator", level: 90, experienceYears: "3 ዓመት", highlight: "የማይደበዝዙ ቬክተር ሎጎዎች፣ አዶዎች፣ የድርጅት መለያዎች" },
      { name: "Figma UI/UX ዲዛይን", level: 92, experienceYears: "2 ዓመት", highlight: "የሞባይል እና የዌብ ስክሪን ዲዛይኖች፣ ፕሮቶታይፕ" },
      { name: "የብራንድ መለያ እና የጽሑፍ ቅርጾች", level: 90, experienceYears: "3 ዓመት", highlight: "የቀለም ስምምነት፣ የፎንት አመራረጥ፣ የብራንድ ደንቦች" },
      { name: "የማስታወቂያ ፖስተሮች እና ባነሮች", level: 94, experienceYears: "3 ዓመት", highlight: "ከፍተኛ ጥራት ያላቸው ለህትመት ዝግጁ የሆኑ ፍላየሮች" },
      { name: "የእይታ ቅንብር እና ሚዛን", level: 92, experienceYears: "3 ዓመት", highlight: "በሂሳባዊ ስሌት የተዋቡ ሚዛናዊ የዲዛይን ስራዎች" }
    ]
  },
  {
    title: "ሂሳብ እና አልጎሪዝም ሎጂክ (ዲፕሎማ)",
    description: "ከሂሳብ ዲፕሎማ እና ከኮምፒውተር ሳይንስ የተገኘ ጥልቅ የትንታኔ እና የችግር ፈቺነት አቅም።",
    skills: [
      { name: "ዲስክሪት ማትማቲክስ (Discrete Math)", level: 95, experienceYears: "ዲፕሎማ", highlight: "የግራፍ ፅንሰ-ሀሳብ፣ ሴት ቲዮሪ፣ ቡሊያን ሎጂክ" },
      { name: "ካልኩለስ እና ሊኒየር አልጀብራ", level: 92, experienceYears: "ዲፕሎማ", highlight: "ማትሪክስ፣ ቬክተሮች፣ የሂሳብ ሞዴሊንግ" },
      { name: "ዳታ ስትራክቸር እና አልጎሪዝም", level: 90, experienceYears: "4ኛ ዓመት", highlight: "ዛፎች፣ ግራፎች፣ ዳይናሚክ ፕሮግራሚንግ፣ የኮድ ፍጥነት" },
      { name: "ችግርን በኮምፒውተር የመፍታት ብቃት", level: 94, experienceYears: "4ኛ ዓመት", highlight: "እውነተኛ ችግሮችን ወደ ንጹህ እና ፈጣን ኮድ መተርጎም" },
      { name: "የሂሳብ ማረጋገጫዎች እና ጥንቃቄ", level: 92, experienceYears: "ዲፕሎማ", highlight: "ስህተት የሌለው ጥብቅ የሎጂክ ማረጋገጫ" }
    ]
  }
];
