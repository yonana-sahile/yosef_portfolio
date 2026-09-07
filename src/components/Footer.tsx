import React from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TRANSLATIONS } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  isDark: boolean;
}

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const TwitterIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const { lang, isAmharic } = useLanguage();
  const t = TRANSLATIONS[lang];

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
              {isAmharic ? 'ዮበ' : 'YB'}
            </div>
            <div>
              <div className={`font-display font-bold text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {isAmharic ? 'ዮሴፍ በጋሻው' : PERSONAL_INFO.name}
              </div>
              <div className="text-xs font-mono text-cyan-400/80">
                {isAmharic ? 'የደብረ ብርሃን ዩኒቨርሲቲ 4ኛ ዓመት የኮምፒውተር ሳይንስ ተማሪ' : '4th-Year Computer Science Senior · Debre Berhan University'}
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
              <GithubIcon className="w-4 h-4" />
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
              <LinkedinIcon className="w-4 h-4" />
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
              <TwitterIcon className="w-4 h-4" />
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
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} {isAmharic ? 'ዮሴፍ በጋሻው' : PERSONAL_INFO.name}. {t.footer.rights}
          </div>
          <div className="flex items-center gap-2 text-cyan-400/90">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
            <span>{isAmharic ? 'ደብረ ብርሃን እና ሰሜን ሸዋ፣ ኢትዮጵያ (UTC+3)' : 'Debre Berhan & North Shoa, Ethiopia (UTC+3)'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
