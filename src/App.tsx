import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('yosef_portfolio_theme');
      if (savedTheme) return savedTheme === 'dark';
      return true; // Default to modern sleek dark theme
    }
    return true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('yosef_portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('yosef_portfolio_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <LanguageProvider>
      <div className={`min-h-screen relative transition-colors duration-300 overflow-x-hidden ${
        isDark ? 'bg-[#030b14] text-slate-100' : 'bg-[#f4fafb] text-slate-900'
      }`}>
        {/* Decorative Fixed Cyan Grid and Ambient Glows */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Subtle Tech Cyber Grid */}
          <div className={`absolute inset-0 bg-cyan-grid opacity-30 ${isDark ? 'mix-blend-screen' : 'mix-blend-multiply opacity-20'}`} />

          {/* Top-Center Vibrant Cyan Radial Aurora */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-cyan-500/20 via-cyan-400/10 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse duration-10000" />

          {/* Floating Cyan Orb Left */}
          <div className="absolute top-[28%] -left-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

          {/* Floating Cyan / Teal Orb Right */}
          <div className="absolute top-[55%] -right-32 w-[420px] h-[420px] bg-teal-400/15 rounded-full blur-[110px] pointer-events-none" />

          {/* Bottom Ambient Glow */}
          <div className="absolute bottom-10 left-1/3 w-[500px] h-[350px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
        </div>

        {/* Navigation */}
        <Navbar
          isDark={isDark}
          toggleTheme={toggleTheme}
        />

        {/* Main Content */}
        <main id="main-content" className="relative z-10">
          <Hero isDark={isDark} />

          <Projects isDark={isDark} />

          <SkillsMatrix isDark={isDark} />

          <ExperienceTimeline isDark={isDark} />

          <ContactSection isDark={isDark} />
        </main>

        {/* Footer */}
        <Footer isDark={isDark} />
      </div>
    </LanguageProvider>
  );
}

