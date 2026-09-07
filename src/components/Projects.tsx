import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Sparkles, Layers } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { AMHARIC_PROJECTS, TRANSLATIONS } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  isDark: boolean;
}

const GithubIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

export const Projects: React.FC<ProjectsProps> = ({ isDark }) => {
  const { lang, isAmharic } = useLanguage();
  const t = TRANSLATIONS[lang];
  const [selectedCategoryKey, setSelectedCategoryKey] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const rawProjects = isAmharic ? AMHARIC_PROJECTS : PROJECTS;

  const categoryOptions = [
    { key: 'all', label: t.projects.filterAll },
    { key: 'mobile', label: t.projects.filterMobile, matchCategoryEn: 'Mobile Apps', matchCategoryAm: 'የሞባይል አፖች' },
    { key: 'web', label: t.projects.filterWeb, matchCategoryEn: 'Web Apps', matchCategoryAm: 'የዌብ አፖች' },
    { key: 'video', label: t.projects.filterVideo, matchCategoryEn: 'Video & Graphics', matchCategoryAm: 'ቪዲዮና ግራፊክስ' },
    { key: 'design', label: t.projects.filterDesign, matchCategoryEn: 'Design & UI', matchCategoryAm: 'ዲዛይንና UI' },
  ];

  const filteredProjects = selectedCategoryKey === 'all'
    ? rawProjects
    : rawProjects.filter((p) => {
        const catOpt = categoryOptions.find(c => c.key === selectedCategoryKey);
        if (!catOpt) return true;
        return p.category === catOpt.matchCategoryEn || p.category === catOpt.matchCategoryAm;
      });

  return (
    <section id="projects" className="py-20 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)] mb-3">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.projects.badge}</span>
            </div>
            <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              {t.projects.title}
            </h2>
            <p className={`mt-2 text-base sm:text-lg max-w-2xl ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {t.projects.subtitle}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categoryOptions.map((opt) => {
              const isSelected = selectedCategoryKey === opt.key;
              return (
                <button
                  key={opt.key}
                  id={`filter-cat-${opt.key}`}
                  onClick={() => setSelectedCategoryKey(opt.key)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer backdrop-blur-md ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                      : isDark
                      ? 'bg-slate-900/50 border border-cyan-500/20 text-slate-300 hover:text-cyan-200 hover:border-cyan-400/50'
                      : 'bg-white/80 border border-cyan-200 text-slate-600 hover:text-cyan-700 hover:border-cyan-300 shadow-2xs'
                  }`}
                >
                  {opt.label}
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
                      <GithubIcon className="w-3.5 h-3.5" />
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
                  <span>{t.projects.readCaseStudy}</span>
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
