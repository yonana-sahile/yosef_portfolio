import React from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, BarChart3, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isDark: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, isDark }) => {
  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="project-modal-card"
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border backdrop-blur-2xl shadow-2xl transition-all ${
          isDark
            ? 'bg-slate-900/80 border-cyan-500/30 text-slate-100 shadow-[0_0_50px_rgba(6,182,212,0.25)]'
            : 'bg-white/90 border-cyan-300 text-slate-900 shadow-[0_0_50px_rgba(6,182,212,0.15)]'
        }`}
      >
        {/* Top Glowing Decorative Line */}
        <div className="sticky top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-300 to-cyan-400 z-20" />

        {/* Close Button */}
        <button
          id="project-modal-close"
          onClick={onClose}
          className={`absolute top-5 right-5 z-20 p-2.5 rounded-full border backdrop-blur-md transition-all cursor-pointer ${
            isDark
              ? 'bg-slate-950/70 border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/20 hover:text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]'
              : 'bg-white/80 border-cyan-300 text-slate-700 hover:bg-cyan-50 hover:text-cyan-800'
          }`}
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Hero banner image */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent flex items-end p-6 sm:p-8">
            <div>
              <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 mb-2.5 inline-block shadow-[0_0_12px_rgba(6,182,212,0.4)]">
                {project.category}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {project.title}
              </h3>
              <p className="text-cyan-300/90 font-mono text-xs sm:text-sm mt-1">
                {project.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Key Metrics Pill Row */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-cyan-400" />
              <span>Production Impact &amp; Metrics</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.metrics.map((metric, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl border backdrop-blur-md font-semibold text-sm flex items-center gap-2 ${
                    isDark
                      ? 'bg-cyan-950/30 border-cyan-500/30 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.1)]'
                      : 'bg-cyan-50/80 border-cyan-200 text-cyan-800'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study Section */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Architectural Problem &amp; Engineering Solution</span>
            </h4>

            <div
              className={`p-4 rounded-2xl border backdrop-blur-md ${
                isDark ? 'bg-slate-950/60 border-cyan-500/20' : 'bg-slate-50 border-cyan-200'
              }`}
            >
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 mb-1">
                The Challenge
              </div>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                {project.caseStudy.problem}
              </p>
            </div>

            <div
              className={`p-4 rounded-2xl border backdrop-blur-md ${
                isDark ? 'bg-slate-950/60 border-cyan-500/20' : 'bg-slate-50 border-cyan-200'
              }`}
            >
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-1">
                The Engineering Solution
              </div>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                {project.caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Architectural Highlights */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Key Architectural Highlights</span>
            </h4>
            <ul className="space-y-2.5">
              {project.architecturalHighlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.8)] mt-2 shrink-0" />
                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3">
              Technologies &amp; Libraries Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold border backdrop-blur-md ${
                    isDark
                      ? 'bg-slate-950/60 border-cyan-500/25 text-cyan-200 hover:border-cyan-400/50'
                      : 'bg-white border-cyan-200 text-slate-800 shadow-2xs'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-4 border-t border-cyan-500/20 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all font-display"
              >
                <span>Launch Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border backdrop-blur-md transition-all ${
                  isDark
                    ? 'border-cyan-500/30 bg-slate-900/60 text-cyan-200 hover:bg-cyan-500/15 hover:border-cyan-400/60'
                    : 'border-cyan-300 bg-white text-slate-800 hover:bg-cyan-50'
                }`}
              >
                {/* SVG Github Icon */}
                <svg
                  className="w-4 h-4 fill-current text-cyan-400"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>View Source on GitHub</span>
              </a>
            )}
            <button
              onClick={onClose}
              className={`ml-auto px-5 py-2.5 rounded-xl text-sm font-medium border backdrop-blur-md transition-all cursor-pointer ${
                isDark
                  ? 'border-cyan-500/20 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/40 hover:bg-cyan-500/10'
                  : 'border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
