import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Sparkles, Filter, Layers } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

// Standalone SVG component for GitHub icon
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-3.5 h-3.5"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface ProjectsProps {
  isDark: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ isDark }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'Mobile Apps', 'Web Apps', 'Video & Graphics', 'Design & UI'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)] mb-3">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Selected Works &amp; Creations</span>
            </div>
            <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Featured Projects &amp; Creative Portfolio
            </h2>
            <p className={`mt-2 text-base sm:text-lg max-w-2xl ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Real-world mobile applications, modern web portals, certified video editing reels, and brand design packages.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  id={`filter-cat-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer backdrop-blur-md ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                      : isDark
                      ? 'bg-slate-900/50 border border-cyan-500/20 text-slate-300 hover:text-cyan-200 hover:border-cyan-400/50'
                      : 'bg-white/80 border border-cyan-200 text-slate-600 hover:text-cyan-700 hover:border-cyan-300 shadow-2xs'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className={`group flex flex-col rounded-3xl border overflow-hidden backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 ${
                isDark
                  ? 'bg-slate-900/50 border-cyan-500/25 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.22)]'
                  : 'bg-white/80 border-cyan-300/70 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.18)]'
              }`}
            >
              {/* Card Image */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-950 border-b border-cyan-500/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Decorative Top Accent Line on Image */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent pointer-events-none" />

                {/* Overlay tags */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider backdrop-blur-md bg-slate-950/80 text-cyan-300 border border-cyan-500/40 shadow-sm">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider backdrop-blur-md bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 flex items-center gap-1 shadow-[0_0_10px_rgba(6,182,212,0.4)]">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Direct quick action buttons on hover */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-xl backdrop-blur-md bg-slate-950/80 text-cyan-300 hover:text-white hover:bg-cyan-500/20 border border-cyan-500/30 transition-all shadow-sm"
                      title="GitHub Source"
                    >
                      <GithubIcon />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-xl backdrop-blur-md bg-slate-950/80 text-cyan-300 hover:text-white hover:bg-cyan-500/20 border border-cyan-500/30 transition-all shadow-sm"
                      title="Live Link"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className={`font-display text-xl font-bold mb-1 tracking-tight group-hover:text-cyan-400 transition-colors ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {project.title}
                  </h3>

                  <p className="text-xs font-mono font-medium text-cyan-400 mb-3">
                    {project.tagline}
                  </p>

                  <p className={`text-sm leading-relaxed line-clamp-3 mb-4 ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Impact Metric Pill */}
                  <div className={`p-2.5 rounded-xl border text-xs font-semibold mb-4 flex items-center gap-2 backdrop-blur-xs ${
                    isDark ? 'bg-cyan-950/40 border-cyan-500/30 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.1)]' : 'bg-cyan-50/80 border-cyan-200 text-cyan-800'
                  }`}>
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.8)] animate-pulse" />
                    <span className="truncate">{project.metrics[0]}</span>
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium border backdrop-blur-xs ${
                          isDark
                            ? 'bg-slate-950/60 border-cyan-500/20 text-slate-300 hover:border-cyan-400/40'
                            : 'bg-white/80 border-cyan-200 text-slate-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 text-[11px] font-mono text-cyan-400/80 font-medium">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Trigger Deep Dive */}
                <button
                  id={`project-deep-dive-${project.id}`}
                  onClick={() => setActiveProject(project)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold border backdrop-blur-md flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    isDark
                      ? 'border-cyan-500/30 bg-slate-900/60 text-cyan-200 hover:bg-cyan-500/15 hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                      : 'border-cyan-300 bg-white/80 text-slate-700 hover:bg-cyan-50 hover:border-cyan-400'
                  }`}
                >
                  <span>Read Architecture Deep Dive</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        isDark={isDark}
      />
    </section>
  );
};
