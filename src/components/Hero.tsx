import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  MapPin,
  Check,
  Copy,
  Phone,
  GraduationCap,
  Award
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import defaultPortraitImg from '../assets/yosef_begashaw.jpg';

interface HeroProps {
  isDark: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [userPhoto, setUserPhoto] = useState<string | null>(null);

  // Load custom user photo from localStorage if available
  useEffect(() => {
    try {
      const savedPhoto = localStorage.getItem('yosef_profile_photo');
      if (savedPhoto) {
        setUserPhoto(savedPhoto);
      }
    } catch {
      // Safe fallback
    }
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.rawPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background ambient decorative cyan lighting */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden -z-10 opacity-70">
        <div className={`absolute top-0 left-1/4 w-80 h-80 rounded-full blur-3xl ${isDark ? 'bg-cyan-500/20' : 'bg-cyan-300/40'}`} />
        <div className={`absolute top-12 right-1/4 w-88 h-88 rounded-full blur-3xl ${isDark ? 'bg-teal-400/15' : 'bg-teal-200/40'}`} />
        <div className={`absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-cyan-400/10' : 'bg-cyan-100/50'}`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Live Availability Pill */}
            <div
              id="availability-pill"
              className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border mb-6 backdrop-blur-md transition-all ${
                isDark
                  ? 'bg-cyan-950/40 border-cyan-500/40 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                  : 'bg-cyan-50/80 border-cyan-300 text-cyan-800 shadow-xs'
              }`}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span>
              </span>
              <span className="font-mono text-[11px] sm:text-xs tracking-wider uppercase">
                DEBRE BERHAN UNIVERSITY · 4TH YEAR CS SENIOR
              </span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="font-display font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl mb-3">
              <span className={isDark ? 'text-white' : 'text-slate-900'}>
                Hello, I'm{' '}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-200 drop-shadow-[0_0_25px_rgba(6,182,212,0.3)]">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Sub-Headline & Role */}
            <h2 className={`text-lg sm:text-xl font-semibold mb-4 font-display flex flex-wrap items-center gap-2 ${
              isDark ? 'text-cyan-300/90' : 'text-cyan-800'
            }`}>
              <span className="text-cyan-400 font-mono text-base">&gt;</span>
              <span>Mobile &amp; Web App Developer</span>
              <span className="text-slate-500">•</span>
              <span className="text-sm font-normal text-slate-400">DBU 4th Year Senior</span>
            </h2>

            {/* Bio */}
            <p className={`text-base sm:text-lg leading-relaxed mb-6 max-w-2xl ${
              isDark ? 'text-slate-300/90' : 'text-slate-700'
            }`}>
              {PERSONAL_INFO.bioLong}
            </p>

            {/* Location & Academic Origin Pill */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm mb-7 font-mono">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Debre Berhan University (DBU)</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>North Shoa (Menz Lalo Midir / Wegere)</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                <Award className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Reward Certificate in Multimedia &amp; Design</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-6 w-full sm:w-auto">
              {/* Explore projects */}
              <button
                id="hero-explore-projects-btn"
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] active:scale-98 transition-all cursor-pointer font-display"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Direct Call / Contact button */}
              <a
                id="hero-call-btn"
                href={`tel:${PERSONAL_INFO.rawPhone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm border backdrop-blur-md bg-cyan-500/15 border-cyan-400/60 text-cyan-200 hover:bg-cyan-500/25 hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call: {PERSONAL_INFO.rawPhone}</span>
              </a>

              {/* Academic Journey */}
              <button
                id="hero-journey-btn"
                onClick={() => scrollToSection('journey')}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm border backdrop-blur-md transition-all cursor-pointer ${
                  isDark
                    ? 'border-cyan-500/30 bg-slate-900/60 text-slate-200 hover:bg-cyan-500/15 hover:border-cyan-400/60'
                    : 'border-cyan-300 bg-white/90 text-slate-800 hover:bg-cyan-50 shadow-xs'
                }`}
              >
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Educational Journey</span>
              </button>
            </div>

            {/* Quick Copy Info Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleCopyPhone}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all cursor-pointer ${
                  copiedPhone
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                    : isDark
                    ? 'bg-slate-900/60 border-cyan-500/20 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300'
                    : 'bg-white border-cyan-200 text-slate-700 hover:bg-cyan-50'
                }`}
                title="Copy phone number"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Phone Copied: 0942572629</span>
                  </>
                ) : (
                  <>
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Copy Phone (0942572629)</span>
                  </>
                )}
              </button>

              <button
                onClick={handleCopyEmail}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all cursor-pointer ${
                  copiedEmail
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                    : isDark
                    ? 'bg-slate-900/60 border-cyan-500/20 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300'
                    : 'bg-white border-cyan-200 text-slate-700 hover:bg-cyan-50'
                }`}
                title="Copy email"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{PERSONAL_INFO.email}</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Hover Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md group cursor-pointer">

              {/* Outer decorative glowing cyan halo - gets stronger on hover */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-400/30 via-teal-400/20 to-cyan-300/30 blur-2xl -z-10 group-hover:from-cyan-400/60 group-hover:to-teal-300/50 group-hover:blur-3xl transition-all duration-500" />

              {/* Main Container - Moves forward (-translate-y-2 & scale-102) on hover */}
              <div className={`p-3 sm:p-4 rounded-3xl border backdrop-blur-xl shadow-2xl transform transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02] ${
                isDark
                  ? 'bg-slate-900/70 border-cyan-500/30 shadow-[0_0_35px_rgba(6,182,212,0.18)] group-hover:border-cyan-400 group-hover:shadow-[0_0_50px_rgba(6,182,212,0.4)]'
                  : 'bg-white/85 border-cyan-300/80 shadow-[0_0_35px_rgba(6,182,212,0.12)] group-hover:border-cyan-400 group-hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]'
              }`}>

                {/* Portrait Frame - Image zooms slightly inside the frame on hover */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-950 border-2 border-cyan-500/40 group-hover:border-cyan-400 transition-colors duration-500 shadow-inner">
                  <img
                    src={userPhoto || defaultPortraitImg}
                    alt="Personal Portrait"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108"
                    referrerPolicy="no-referrer"
                  />
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
