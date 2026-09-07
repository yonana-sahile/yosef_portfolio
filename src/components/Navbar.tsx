import React, { useState, useEffect } from 'react';
import { Menu, X, Send, Moon, Sun, Languages } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { lang, toggleLanguage, isAmharic } = useLanguage();
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'projects', 'skills', 'experience', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: '#home', id: 'about' },
    { label: t.nav.projects, href: '#projects', id: 'projects' },
    { label: t.nav.skills, href: '#skills', id: 'skills' },
    { label: t.nav.experience, href: '#experience', id: 'experience' },
    { label: t.nav.journey, href: '#journey', id: 'journey' },
    { label: t.nav.contact, href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-slate-950/70 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-black/40 py-3'
            : 'bg-white/75 backdrop-blur-xl border-b border-cyan-500/25 shadow-sm shadow-cyan-500/5 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      {/* Decorative top ambient glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          id="brand-logo"
          className="flex items-center gap-2.5 group cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
        >
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-xl bg-cyan-400 opacity-60 blur-xs group-hover:opacity-100 transition duration-300" />
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-cyan-300 to-teal-300 text-slate-950 font-display font-black flex items-center justify-center text-lg shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:scale-105 transition-transform duration-200">
              YB
            </div>
          </div>
          <div className="flex flex-col">
            <span className={`font-display font-bold text-base tracking-tight transition-colors flex items-center gap-1.5 ${
              isDark ? 'text-white group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-cyan-600'
            }`}>
              {isAmharic ? PERSONAL_INFO.nativeName : PERSONAL_INFO.name}
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse" />
            </span>
            <span className="text-xs text-cyan-500/90 font-mono tracking-wider">
              {t.nav.subtitle}
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 xl:gap-11">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-1.5 py-1.5 text-[16px] lg:text-[17.5px] font-medium tracking-normal transition-colors duration-200 cursor-pointer group ${
                  isActive
                    ? 'text-cyan-400 font-bold'
                    : isDark
                    ? 'text-slate-200 hover:text-cyan-300'
                    : 'text-slate-700 hover:text-cyan-600'
                }`}
              >
                <span>{link.label}</span>
                {/* Cyan indicator underline */}
                <span
                  className={`absolute -bottom-1 left-0 right-0 h-[2.5px] rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 transition-all duration-300 ${
                    isActive
                      ? 'opacity-100 scale-x-100 shadow-[0_0_10px_rgba(6,182,212,0.85)]'
                      : 'opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-75'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3.5 sm:gap-4">
          {/* Language Switcher - Placed right next to Theme Toggle */}
          <button
            id="language-toggle-btn"
            onClick={toggleLanguage}
            title={isAmharic ? "Switch to English (ወደ እንግሊዝኛ ቀይር)" : "ወደ አማርኛ ቀይር (Switch to Amharic)"}
            aria-label="Toggle language (English / አማርኛ)"
            className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-sm font-semibold transition-all cursor-pointer backdrop-blur-md ${
              isDark
                ? 'bg-slate-900/70 border-cyan-500/25 text-cyan-300 hover:bg-cyan-500/15 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                : 'bg-white/80 border-cyan-200 text-slate-700 hover:bg-cyan-50 hover:text-cyan-800 shadow-xs'
            }`}
          >
            <Languages className="w-4 h-4 text-cyan-400" />
            <div className="flex items-center text-xs font-mono font-bold tracking-wider">
              <span className={lang === 'en' ? 'text-cyan-400 font-extrabold underline decoration-cyan-400 decoration-2 underline-offset-2' : 'text-slate-400 opacity-60'}>EN</span>
              <span className="text-slate-500 mx-1">/</span>
              <span className={lang === 'am' ? 'text-cyan-400 font-extrabold underline decoration-cyan-400 decoration-2 underline-offset-2' : 'text-slate-400 opacity-60'}>አማ</span>
            </div>
          </button>

          {/* Theme Toggle */}
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2.5 rounded-xl border transition-all cursor-pointer backdrop-blur-md ${
              isDark
                ? 'bg-slate-900/70 border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/15 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                : 'bg-white/80 border-cyan-200 text-slate-700 hover:bg-cyan-50 hover:text-cyan-800 shadow-xs'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4 text-cyan-300" /> : <Moon className="w-4 h-4 text-cyan-600" />}
          </button>

          {/* Contact Button */}
          <button
            id="contact-nav-btn"
            onClick={() => handleNavClick('#contact')}
            className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-[14.5px] font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] active:scale-98 transition-all cursor-pointer font-display"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{t.nav.letsTalk}</span>
          </button>
        </div>

        {/* Mobile menu button & actions */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Language Switcher - Next to Mobile Theme Toggle */}
          <button
            id="mobile-language-btn"
            onClick={toggleLanguage}
            title={isAmharic ? "Switch to English" : "ወደ አማርኛ ቀይር"}
            aria-label="Toggle language"
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg border text-xs font-bold cursor-pointer ${
              isDark ? 'bg-slate-900/80 border-cyan-500/30 text-cyan-300' : 'bg-slate-100 border-cyan-200 text-slate-800'
            }`}
          >
            <Languages className="w-3.5 h-3.5 text-cyan-400" />
            <span>{lang === 'en' ? 'አማ' : 'EN'}</span>
          </button>

          <button
            id="mobile-theme-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2 rounded-lg border ${
              isDark ? 'bg-slate-900/80 border-cyan-500/30 text-cyan-300' : 'bg-slate-100 border-cyan-200 text-slate-700'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg border ${
              isDark ? 'bg-slate-900/80 border-cyan-500/30 text-slate-200' : 'bg-slate-100 border-cyan-200 text-slate-800'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className={`md:hidden px-4 pt-3 pb-6 border-b transition-all ${
            isDark ? 'bg-slate-950/95 border-slate-800' : 'bg-white/95 border-slate-200'
          }`}
        >
          <div className="flex flex-col gap-2 mb-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left py-2.5 px-1 text-lg font-medium transition-colors cursor-pointer relative flex items-center justify-between ${
                    isActive
                      ? 'text-cyan-400 font-semibold'
                      : isDark
                      ? 'text-slate-300 hover:text-cyan-300'
                      : 'text-slate-700 hover:text-cyan-600'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.9)] animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-cyan-500/20">
            <button
              onClick={() => handleNavClick('#contact')}
              className="w-full py-2.5 px-4 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] flex items-center justify-center gap-2 font-display"
            >
              <Send className="w-4 h-4" />
              <span>{t.nav.letsTalk}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

