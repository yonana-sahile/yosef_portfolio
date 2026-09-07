export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Mobile Apps' | 'Web Apps' | 'Video & Graphics' | 'Design & UI' | 'Full-Stack' | string;
  image: string;
  tags: string[];
  metrics: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  architecturalHighlights: string[];
  caseStudy: {
    problem: string;
    solution: string;
    techStackDetails: string;
    impact: string;
  };
}

export interface JourneyMilestone {
  id: string;
  period: string;
  title: string;
  institution: string;
  location: string;
  degreeOrLevel: string;
  description: string;
  highlights: string[];
  badgeText: string;
  iconType: 'primary' | 'secondary' | 'diploma' | 'university' | 'award';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Lead' | 'Academic' | 'Freelance';
  description: string;
  achievements: string[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    experienceYears: string;
    highlight?: string;
    iconName?: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  projectRelation: string;
}

export interface Article {
  id: string;
  title: string;
  snippet: string;
  readTime: string;
  date: string;
  tag: string;
  fullContent: string;
}
