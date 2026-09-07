import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Mail, Heart, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`pt-16 pb-12 border-t backdrop-blur-xl relative z-10 transition-colors ${
      isDark ? 'bg-slate-950/70 border-cyan-500/20 text-slate-400' : 'bg-white/80 border-cyan-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-cyan-500/15">

          {/* Brand */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-teal-300 to-cyan-500 text-slate-950 font-display font-black flex items-center justify-center text-sm shadow-[0_0_18px_rgba(6,182,212,0.4)] ring-1 ring-cyan-300/50">
              YB
            </div>
            <div>
              <div className={`font-display font-bold text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {PERSONAL_INFO.name}
              </div>
              <div className="text-xs font-mono text-cyan-400/80">
                4th-Year Computer Science Senior · Debre Berhan University
              </div>
            </div>
          </div>

          {/* Social Links & Phone */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${PERSONAL_INFO.rawPhone}`}
              className={`p-2.5 rounded-xl border backdrop-blur-md transition-all ${
                isDark
                  ? 'border-cyan-500/30 bg-slate-900/60 text-cyan-300 hover:text-white hover:border-cyan-400/70 hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  : 'border-cyan-200 bg-white text-slate-700 hover:text-cyan-600 shadow-2xs'
              }`}
              title="Call 0942572629"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className={`p-2.5 rounded-xl border backdrop-blur-md transition-all ${
                isDark
                  ? 'border-cyan-500/30 bg-slate-900/60 text-cyan-300 hover:text-white hover:border-cyan-400/70 hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  : 'border-cyan-200 bg-white text-slate-700 hover:text-cyan-600 shadow-2xs'
              }`}
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`p-2.5 rounded-xl border backdrop-blur-md transition-all ${
                isDark
                  ? 'border-cyan-500/30 bg-slate-900/60 text-cyan-300 hover:text-white hover:border-cyan-400/70 hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  : 'border-cyan-200 bg-white text-slate-700 hover:text-cyan-600 shadow-2xs'
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.twitter}
              target="_blank"
              rel="noreferrer"
              className={`p-2.5 rounded-xl border backdrop-blur-md transition-all ${
                isDark
                  ? 'border-cyan-500/30 bg-slate-900/60 text-cyan-300 hover:text-white hover:border-cyan-400/70 hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  : 'border-cyan-200 bg-white text-slate-700 hover:text-cyan-600 shadow-2xs'
              }`}
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className={`p-2.5 rounded-xl border backdrop-blur-md transition-all ${
                isDark
                  ? 'border-cyan-500/30 bg-slate-900/60 text-cyan-300 hover:text-white hover:border-cyan-400/70 hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  : 'border-cyan-200 bg-white text-slate-700 hover:text-cyan-600 shadow-2xs'
              }`}
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            id="footer-back-to-top"
            onClick={scrollToTop}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold border backdrop-blur-md transition-all cursor-pointer ${
              isDark
                ? 'border-cyan-500/30 bg-slate-900/70 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400/80 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                : 'border-cyan-300 bg-white text-slate-700 hover:bg-cyan-50 shadow-2xs'
            }`}
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-cyan-400/90">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
            <span>Debre Berhan &amp; North Shoa, Ethiopia (UTC+3)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
