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
  phone: "+251 942 572 629",
  rawPhone: "0942572629",
  email: "sahileweldetsadik6@gmail.com",
  github: "https://github.com/yosefbegashaw",
  linkedin: "https://linkedin.com/in/yosefbegashaw",
  telegram: "https://t.me/yosefbegashaw",
  twitter: "https://x.com/yosefbegashaw",
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
