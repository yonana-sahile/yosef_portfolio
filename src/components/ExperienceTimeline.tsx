import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle,
  GraduationCap,
  Award,
  School,
  BookOpen,
  Sparkles,
  ArrowUpRight,
  Phone
} from 'lucide-react';
import { EXPERIENCES, JOURNEY_MILESTONES, PERSONAL_INFO } from '../data/portfolioData';

interface ExperienceTimelineProps {
  isDark: boolean;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ isDark }) => {
  return (
    <div className="relative">
      {/* Experience Section */}
      <section id="experience" className="py-20 relative scroll-mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)] mb-3">
              <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
              <span>Technical &amp; Creative Experience</span>
            </div>
            <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Practical Experience &amp; Impact
            </h2>
            <p className={`mt-2 text-base sm:text-lg ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Hands-on engineering across mobile apps, full-stack web platforms, and certified video/graphic production.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-8 space-y-12">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="relative pl-6 sm:pl-10">

                {/* Timeline Marker Dot */}
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-cyan-400 ring-4 ring-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.8)]" />

                {/* Experience Card */}
                <div
                  id={`exp-card-${exp.id}`}
                  className={`p-6 sm:p-7 rounded-3xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
                    isDark
                      ? 'bg-slate-900/50 border-cyan-500/25 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.18)]'
                      : 'bg-white/85 border-cyan-300/80 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]'
                  }`}
                >
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className={`font-display text-xl font-bold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        {exp.role}
                      </h3>
                      <div className="text-sm font-mono font-semibold text-cyan-400 flex items-center gap-2 mt-0.5">
                        <span>{exp.company}</span>
                        <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full font-mono font-medium border backdrop-blur-xs ${
                        isDark ? 'bg-slate-950/70 border-cyan-500/30 text-cyan-300' : 'bg-cyan-50 border-cyan-200 text-cyan-800'
                      }`}>
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.period}
                      </span>
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs border backdrop-blur-xs ${
                        isDark ? 'bg-slate-950/50 border-cyan-500/20 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
                      }`}>
                        <MapPin className="w-3 h-3 text-cyan-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className={`text-sm leading-relaxed mb-4 ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2 mb-5">
                    {exp.achievements.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-cyan-500/20">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-mono border ${
                          isDark ? 'bg-slate-950/60 border-cyan-500/20 text-slate-300' : 'bg-white border-cyan-200 text-slate-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational & Life Journey Section */}
      <section id="journey" className="py-20 relative scroll-mt-16 border-t border-cyan-500/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)] mb-3">
              <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
              <span>Academic &amp; Educational Milestones</span>
            </div>
            <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Yosef Begashaw's Academic Journey
            </h2>
            <p className={`mt-2 text-base sm:text-lg ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              From foundational primary school in North Shoa, Menz Lalo Midir to a Mathematics Diploma and 4th-Year Computer Science at Debre Berhan University.
            </p>
          </div>

          {/* Stepped Journey Cards */}
          <div className="space-y-6">
            {JOURNEY_MILESTONES.map((milestone, idx) => {
              const getIcon = () => {
                switch (milestone.iconType) {
                  case 'primary':
                    return <School className="w-5 h-5 text-cyan-400" />;
                  case 'secondary':
                    return <BookOpen className="w-5 h-5 text-cyan-400" />;
                  case 'diploma':
                    return <Sparkles className="w-5 h-5 text-amber-400" />;
                  case 'university':
                    return <GraduationCap className="w-5 h-5 text-cyan-400" />;
                  case 'award':
                    return <Award className="w-5 h-5 text-emerald-400" />;
                  default:
                    return <GraduationCap className="w-5 h-5 text-cyan-400" />;
                }
              };

              return (
                <div
                  key={milestone.id}
                  id={`journey-step-${milestone.id}`}
                  className={`p-6 sm:p-7 rounded-3xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
                    milestone.iconType === 'award'
                      ? isDark
                        ? 'bg-gradient-to-r from-emerald-950/40 via-slate-900/60 to-cyan-950/40 border-emerald-500/40 shadow-[0_0_25px_rgba(16,185,129,0.15)]'
                        : 'bg-gradient-to-r from-emerald-50 via-white to-cyan-50 border-emerald-300 shadow-sm'
                      : milestone.iconType === 'university'
                      ? isDark
                        ? 'bg-gradient-to-r from-cyan-950/40 via-slate-900/60 to-slate-900/60 border-cyan-400/40 shadow-[0_0_25px_rgba(6,182,212,0.15)]'
                        : 'bg-gradient-to-r from-cyan-50 via-white to-white border-cyan-300 shadow-sm'
                      : isDark
                      ? 'bg-slate-900/50 border-cyan-500/25 hover:border-cyan-400/50'
                      : 'bg-white/85 border-cyan-300/70 shadow-xs'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${
                        milestone.iconType === 'award'
                          ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                          : milestone.iconType === 'diploma'
                          ? 'bg-amber-950/60 border-amber-500/40 text-amber-300'
                          : isDark
                          ? 'bg-cyan-950/60 border-cyan-500/40 text-cyan-300'
                          : 'bg-cyan-50 border-cyan-200 text-cyan-700'
                      }`}>
                        {getIcon()}
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${
                            milestone.iconType === 'award'
                              ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                              : milestone.iconType === 'diploma'
                              ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                              : 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
                          }`}>
                            {milestone.badgeText}
                          </span>
                          <span className="text-xs font-mono text-slate-400">
                            {milestone.period}
                          </span>
                        </div>

                        <h3 className={`font-display text-xl font-bold ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}>
                          {milestone.title}
                        </h3>

                        <div className="text-sm font-semibold text-cyan-400 font-mono mt-0.5">
                          {milestone.institution}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono self-start md:self-auto px-3 py-1 rounded-lg bg-slate-950/40 border border-cyan-500/20">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{milestone.location}</span>
                    </div>
                  </div>

                  <p className={`text-sm leading-relaxed mb-4 pl-0 md:pl-16 ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {milestone.description}
                  </p>

                  {/* Highlights list */}
                  <div className="pl-0 md:pl-16 space-y-2 pt-3 border-t border-cyan-500/15">
                    {milestone.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Direct CTA banner */}
          <div className={`mt-12 p-6 sm:p-8 rounded-3xl border text-center backdrop-blur-xl relative overflow-hidden ${
            isDark ? 'bg-cyan-950/30 border-cyan-500/30' : 'bg-cyan-50/70 border-cyan-300'
          }`}>
            <div className="relative z-10 max-w-xl mx-auto">
              <h3 className={`font-display text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Let's Build Impactful Software Together
              </h3>
              <p className={`text-sm mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Looking for a dedicated mobile/web developer or multimedia designer? Reach out to Yosef Begashaw directly.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`tel:${PERSONAL_INFO.rawPhone}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 hover:from-cyan-300 hover:to-teal-300 shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all font-display"
                >
                  <Phone className="w-4 h-4" />
                  <span>Direct Call: 0942572629</span>
                </a>
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border ${
                    isDark ? 'border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/15' : 'border-cyan-300 text-slate-700 hover:bg-cyan-100'
                  }`}
                >
                  <span>Send a Message</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
