import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Send,
  MapPin,
  Sparkles,
  Check,
  Copy,
  Phone,
  Mail,
  GraduationCap,
  Award,
  Camera,
  Upload,
  RefreshCw,
  UserCheck
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import defaultPortraitImg from '../assets/images/yosef_begashawu_portrait_1788810504121.jpg';

interface HeroProps {
  isDark: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [userPhoto, setUserPhoto] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load custom user photo from localStorage if set
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

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setUserPhoto(result);
          try {
            localStorage.setItem('yosef_profile_photo', result);
          } catch (err) {
            console.warn('Could not cache photo to localStorage', err);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    setUserPhoto(null);
    try {
      localStorage.removeItem('yosef_profile_photo');
    } catch {
      // Safe fallback
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
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

          {/* Right Column: Visual Portrait & Photo Placeholder with Live Upload */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">

              {/* Outer decorative glowing cyan halo */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-400/30 via-teal-400/20 to-cyan-300/30 blur-2xl -z-10" />

              {/* Main Transparent Card Container */}
              <div className={`p-4 sm:p-5 rounded-3xl border backdrop-blur-xl shadow-2xl transition-all ${
                isDark
                  ? 'bg-slate-900/70 border-cyan-500/30 shadow-[0_0_35px_rgba(6,182,212,0.18)]'
                  : 'bg-white/85 border-cyan-300/80 shadow-[0_0_35px_rgba(6,182,212,0.12)]'
              }`}>

                {/* Decorative Top Glowing Header Bar */}
                <div className="flex items-center justify-between mb-3 px-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                      Personal Photo Frame
                    </span>
                  </div>

                  {userPhoto && (
                    <button
                      onClick={handleResetPhoto}
                      className="text-[11px] font-mono text-slate-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                      title="Reset to default photo"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>Reset</span>
                    </button>
                  )}
                </div>

                {/* Portrait Frame */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-950 border-2 border-cyan-500/40 group shadow-inner">
                  <img
                    src={userPhoto || defaultPortraitImg}
                    alt="Yosef Begashaw"
                    className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Photo details on bottom of image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white pointer-events-none">
                    <div>
                      <div className="text-sm font-bold font-display flex items-center gap-1.5 drop-shadow-md">
                        <span>{PERSONAL_INFO.name}</span>
                        <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
                      </div>
                      <div className="text-[11px] font-mono text-cyan-300/90 drop-shadow-xs">
                        DBU 4th Year Computer Science
                      </div>
                    </div>

                    <div className="px-2 py-0.5 rounded-full bg-cyan-500/30 border border-cyan-400/50 text-[10px] font-mono font-semibold text-cyan-200 backdrop-blur-xs">
                      Active
                    </div>
                  </div>

                  {/* Click to Upload overlay button on hover */}
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 cursor-pointer text-white"
                  >
                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                      <Camera className="w-6 h-6 text-cyan-300" />
                    </div>
                    <span className="text-xs font-semibold text-cyan-200">
                      {userPhoto ? 'Change Photo' : 'Upload Your Photo'}
                    </span>
                    <span className="text-[10px] text-slate-300">Click or tap to select JPG/PNG</span>
                  </div>
                </div>

                {/* Hidden File Input for uploading custom photo */}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handlePhotoUpload}
                  accept="image/*"
                  className="hidden"
                />

                {/* Dedicated Photo Upload & Customization Control */}
                <div className="mt-3.5 pt-3 border-t border-cyan-500/20 flex items-center justify-between gap-2">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1 py-2 px-3 rounded-xl text-xs font-semibold font-mono flex items-center justify-center gap-2 bg-cyan-500/15 border border-cyan-500/35 text-cyan-300 hover:bg-cyan-500/25 hover:border-cyan-400 transition-all cursor-pointer shadow-xs"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>{userPhoto ? 'Update My Photo' : 'Upload My Personal Photo'}</span>
                  </button>

                  {userPhoto && (
                    <button
                      onClick={handleResetPhoto}
                      className="p-2 rounded-xl text-xs border border-slate-700 bg-slate-800/50 text-slate-300 hover:text-red-400 hover:border-red-500/40 transition-colors cursor-pointer"
                      title="Clear custom photo"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Status Notice */}
                <div className="mt-2 text-center text-[11px] text-slate-400 font-mono">
                  {userPhoto
                    ? '✓ Personal photo saved & active'
                    : 'Personal photo placeholder ready — click above to set your photo'}
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
