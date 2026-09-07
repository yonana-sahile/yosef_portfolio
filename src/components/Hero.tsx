import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  MapPin,
  Check,
  Copy,
  Phone,
  GraduationCap,
  Award,
  Terminal,
  Sparkles,
  Code,
  Laptop,
  Video,
  BookOpen,
  UserCheck
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import defaultPortraitImg from '../assets/yosef_begashaw.jpg';

interface HeroProps {
  isDark: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { lang, isAmharic } = useLanguage();
  const t = TRANSLATIONS[lang];

  // Typewriter phrases with custom dynamic glowing colors and metadata
  const typewriterPhrases = React.useMemo(() => {
    return isAmharic ? [
      {
        text: "ዮሴፍ በጋሻው (Yosef Begashaw)",
        role: "ሶፍትዌር ኢንጂነር / Software Engineer",
        colorClass: "from-cyan-400 via-teal-300 to-cyan-400 text-cyan-400",
        badgeBg: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300",
        glowColor: "rgba(6,182,212,0.35)",
        cursorColor: "bg-cyan-400 shadow-[0_0_10px_#22d3ee]",
        icon: "code"
      },
      {
        text: "የኮምፒውተር ሳይንስ ተማሪ (Computer Science Student)",
        role: "4ኛ ዓመት @ ደብረ ብርሃን ዩኒቨርሲቲ",
        colorClass: "from-emerald-400 via-green-300 to-teal-400 text-emerald-400",
        badgeBg: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
        glowColor: "rgba(16,185,129,0.35)",
        cursorColor: "bg-emerald-400 shadow-[0_0_10px_#34d399]",
        icon: "grad"
      },
      {
        text: "የሞባይልና ዌብ አፕሊኬሽን አልሚ (Mobile & Web Dev)",
        role: "Flutter · React · Next.js · Node.js",
        colorClass: "from-blue-400 via-sky-300 to-indigo-400 text-blue-400",
        badgeBg: "bg-blue-500/15 border-blue-500/30 text-blue-300",
        glowColor: "rgba(59,130,246,0.35)",
        cursorColor: "bg-blue-400 shadow-[0_0_10px_#60a5fa]",
        icon: "mobile"
      },
      {
        text: "የሂሳብ ዲፕሎማ ምሩቅ (Mathematics Diploma)",
        role: "ጥልቅ የሂሳብና የአልጎሪዝም መሰረት",
        colorClass: "from-amber-400 via-yellow-300 to-orange-400 text-amber-400",
        badgeBg: "bg-amber-500/15 border-amber-500/30 text-amber-300",
        glowColor: "rgba(245,158,11,0.35)",
        cursorColor: "bg-amber-400 shadow-[0_0_10px_#fbbf24]",
        icon: "math"
      },
      {
        text: "ተሸላሚ የቪዲዮና መልቲሚዲያ ባለሙያ (Multimedia Editor)",
        role: "የክብር የምስክር ወረቀት (Certified Editor)",
        colorClass: "from-fuchsia-400 via-purple-300 to-pink-400 text-fuchsia-400",
        badgeBg: "bg-fuchsia-500/15 border-fuchsia-500/30 text-fuchsia-300",
        glowColor: "rgba(217,70,239,0.35)",
        cursorColor: "bg-fuchsia-400 shadow-[0_0_10px_#e879f9]",
        icon: "video"
      }
    ] : [
      {
        text: "Yosef Begashaw",
        role: "Software Engineer & Builder",
        colorClass: "from-cyan-400 via-teal-300 to-cyan-400 text-cyan-400",
        badgeBg: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300",
        glowColor: "rgba(6,182,212,0.35)",
        cursorColor: "bg-cyan-400 shadow-[0_0_10px_#22d3ee]",
        icon: "code"
      },
      {
        text: "Computer Science Student",
        role: "4th-Year Senior @ Debre Berhan University",
        colorClass: "from-emerald-400 via-green-300 to-teal-400 text-emerald-400",
        badgeBg: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
        glowColor: "rgba(16,185,129,0.35)",
        cursorColor: "bg-emerald-400 shadow-[0_0_10px_#34d399]",
        icon: "grad"
      },
      {
        text: "Mobile & Web App Developer",
        role: "Flutter · React · Next.js · Node.js",
        colorClass: "from-blue-400 via-sky-300 to-indigo-400 text-blue-400",
        badgeBg: "bg-blue-500/15 border-blue-500/30 text-blue-300",
        glowColor: "rgba(59,130,246,0.35)",
        cursorColor: "bg-blue-400 shadow-[0_0_10px_#60a5fa]",
        icon: "mobile"
      },
      {
        text: "Mathematics Diploma Graduate",
        role: "Discrete Math & Logic Systems",
        colorClass: "from-amber-400 via-yellow-300 to-orange-400 text-amber-400",
        badgeBg: "bg-amber-500/15 border-amber-500/30 text-amber-300",
        glowColor: "rgba(245,158,11,0.35)",
        cursorColor: "bg-amber-400 shadow-[0_0_10px_#fbbf24]",
        icon: "math"
      },
      {
        text: "Certified Multimedia Editor",
        role: "Awarded Video & Motion Graphics Reel",
        colorClass: "from-fuchsia-400 via-purple-300 to-pink-400 text-fuchsia-400",
        badgeBg: "bg-fuchsia-500/15 border-fuchsia-500/30 text-fuchsia-300",
        glowColor: "rgba(217,70,239,0.35)",
        cursorColor: "bg-fuchsia-400 shadow-[0_0_10px_#e879f9]",
        icon: "video"
      }
    ];
  }, [isAmharic]);

  // Typewriter state management
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    const currentPhrase = typewriterPhrases[phraseIndex % typewriterPhrases.length].text;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.substring(0, currentText.length + 1));
          setTypingSpeed(75);
        } else {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1900);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentPhrase.substring(0, currentText.length - 1));
          setTypingSpeed(38);
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % typewriterPhrases.length);
          setTypingSpeed(80);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, typingSpeed, typewriterPhrases]);

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
                {t.hero.badge}
              </span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="font-display font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl mb-4">
              <span className={isDark ? 'text-white' : 'text-slate-900'}>
                {t.hero.greeting}{' '}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-200 drop-shadow-[0_0_25px_rgba(6,182,212,0.3)]">
                {isAmharic ? t.hero.name : PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Bio */}
            <p className={`text-base sm:text-lg leading-relaxed mb-6 max-w-2xl ${
              isDark ? 'text-slate-300/90' : 'text-slate-700'
            }`}>
              {t.hero.bio}
            </p>

            {/* Location & Academic Origin Pill */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm mb-7 font-mono">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{t.hero.universityTag}</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{t.hero.originTag}</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                <Award className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{t.hero.rewardTag}</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-300">
                <span>∑</span>
                <span>{t.hero.mathTag}</span>
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
                <span>{t.hero.viewProjects}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Direct Call / Contact button */}
              <a
                id="hero-call-btn"
                href={`tel:${PERSONAL_INFO.rawPhone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm border backdrop-blur-md bg-cyan-500/15 border-cyan-400/60 text-cyan-200 hover:bg-cyan-500/25 hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{t.hero.callDirect}</span>
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
                <span>{t.hero.eduJourney}</span>
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
                    <span>{t.hero.copiedPhone}</span>
                  </>
                ) : (
                  <>
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{t.hero.copyPhone}</span>
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
                    <span>{t.hero.copiedEmail}</span>
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

          {/* Right Column: Visual Portrait & Live Terminal */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">

              {/* Outer decorative glowing cyan halo */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-400/30 via-teal-400/20 to-cyan-300/30 blur-2xl -z-10" />

              {/* Main Card Container */}
              <div className={`p-4 sm:p-5 rounded-3xl border backdrop-blur-xl shadow-2xl transition-all ${
                isDark
                  ? 'bg-slate-900/70 border-cyan-500/30 shadow-[0_0_35px_rgba(6,182,212,0.18)]'
                  : 'bg-white/85 border-cyan-300/80 shadow-[0_0_35px_rgba(6,182,212,0.12)]'
              }`}>

                {/* Decorative Top Header Bar */}
                <div className="flex items-center justify-between mb-3 px-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                      {t.hero.photoFrameTitle}
                    </span>
                  </div>
                </div>

                {/* Portrait Frame with Pointer Cursor */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-950 border-2 border-cyan-500/40 group shadow-inner cursor-pointer">
                  <img
                    src={defaultPortraitImg}
                    alt={isAmharic ? t.hero.name : PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                    referrerPolicy="no-referrer"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Photo details on bottom of image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white pointer-events-none">
                    <div>
                      <div className="text-sm font-bold font-display flex items-center gap-1.5 drop-shadow-md">
                        <span>{isAmharic ? t.hero.name : PERSONAL_INFO.name}</span>
                        <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
                      </div>
                      <div className="text-[11px] font-mono text-cyan-300/90 drop-shadow-xs">
                        {t.hero.photoCaption}
                      </div>
                    </div>

                    <div className="px-2 py-0.5 rounded-full bg-cyan-500/30 border border-cyan-400/50 text-[10px] font-mono font-semibold text-cyan-200 backdrop-blur-xs">
                      {t.hero.photoFrameActive}
                    </div>
                  </div>
                </div>

                {/* Animated Typewriter Console Under Photo */}
                <div
                  className={`mt-4 p-3.5 rounded-2xl border transition-all duration-500 relative overflow-hidden backdrop-blur-md ${
                    isDark
                      ? 'bg-slate-950/80 border-cyan-500/30 shadow-[0_0_25px_rgba(6,182,212,0.15)]'
                      : 'bg-slate-900/95 border-cyan-400/40 shadow-[0_0_25px_rgba(6,182,212,0.12)]'
                  }`}
                  style={{
                    borderColor: typewriterPhrases[phraseIndex % typewriterPhrases.length].glowColor
                  }}
                >
                  {/* Subtle top indicator bar */}
                  <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-800/80">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-400/80" />
                      <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
                      <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
                      <span className="ml-1.5 text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase flex items-center gap-1">
                        <Terminal className="w-3 h-3 text-cyan-400" />
                        <span>Live Bio / የዮሴፍ መገለጫ</span>
                      </span>
                    </div>

                    {/* Progress Indicator Dots */}
                    <div className="flex items-center gap-1">
                      {typewriterPhrases.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setPhraseIndex(idx);
                            setCurrentText('');
                            setIsDeleting(false);
                          }}
                          className={`h-1.5 rounded-full transition-all cursor-pointer ${
                            (phraseIndex % typewriterPhrases.length) === idx
                              ? 'w-4 bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]'
                              : 'w-1.5 bg-slate-700 hover:bg-slate-500'
                          }`}
                          title={`Switch to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Live Typewriter Output Area */}
                  <div className="min-h-[52px] flex flex-col justify-center">
                    <div className="flex items-baseline gap-1.5 flex-wrap">
                      <span className="text-cyan-400 font-mono font-bold text-xs shrink-0 select-none">
                        &gt;
                      </span>

                      {/* Animated Typed Text */}
                      <span
                        className={`font-display font-extrabold text-sm sm:text-base tracking-tight bg-gradient-to-r bg-clip-text text-transparent drop-shadow-sm transition-colors duration-300 ${
                          typewriterPhrases[phraseIndex % typewriterPhrases.length].colorClass
                        }`}
                      >
                        {currentText || '\u00A0'}
                      </span>

                      {/* Blinking Cursor */}
                      <span
                        className={`inline-block w-2 h-4 sm:h-5 rounded-xs animate-pulse align-middle shrink-0 ml-0.5 ${
                          typewriterPhrases[phraseIndex % typewriterPhrases.length].cursorColor
                        }`}
                      />
                    </div>

                    {/* Subtitle Role / Institution Badge */}
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-mono font-semibold border transition-all duration-300 ${
                        typewriterPhrases[phraseIndex % typewriterPhrases.length].badgeBg
                      }`}>
                        {(() => {
                          const iconType = typewriterPhrases[phraseIndex % typewriterPhrases.length].icon;
                          if (iconType === 'code') return <Code className="w-3 h-3 shrink-0" />;
                          if (iconType === 'grad') return <GraduationCap className="w-3 h-3 shrink-0" />;
                          if (iconType === 'mobile') return <Laptop className="w-3 h-3 shrink-0" />;
                          if (iconType === 'math') return <BookOpen className="w-3 h-3 shrink-0" />;
                          if (iconType === 'video') return <Video className="w-3 h-3 shrink-0" />;
                          return <Sparkles className="w-3 h-3 shrink-0" />;
                        })()}
                        <span className="truncate">
                          {typewriterPhrases[phraseIndex % typewriterPhrases.length].role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
