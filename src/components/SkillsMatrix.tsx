import React, { useState } from 'react';
import {
  Smartphone,
  Globe,
  Video,
  Palette,
  Calculator,
  Award,
  Cpu,
  CheckCircle2
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { AMHARIC_SKILL_CATEGORIES, TRANSLATIONS } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';

interface SkillsMatrixProps {
  isDark: boolean;
}

export const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ isDark }) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const { lang, isAmharic } = useLanguage();
  const t = TRANSLATIONS[lang];

  const skillCategories = isAmharic ? AMHARIC_SKILL_CATEGORIES : SKILL_CATEGORIES;

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Smartphone className="w-4 h-4" />;
      case 1:
        return <Globe className="w-4 h-4" />;
      case 2:
        return <Video className="w-4 h-4" />;
      case 3:
        return <Palette className="w-4 h-4" />;
      case 4:
        return <Calculator className="w-4 h-4" />;
      default:
        return <Cpu className="w-4 h-4" />;
    }
  };

  const engineeringPillars = [
    {
      icon: <Smartphone className="w-5 h-5 text-cyan-400" />,
      title: isAmharic ? "ሁለንተናዊ የሞባይል መተግበሪያዎች" : "Cross-Platform Mobile Mastery",
      description: isAmharic
        ? "በFlutter እና React Native ለስላሳ እና ፈጣን የሆኑ፣ ከመስመር ውጭም የሚሰሩ የሞባይል አፖችን መስራት።"
        : "Crafting fluid mobile experiences with Flutter and React Native featuring sub-60fps frame rates and offline caching."
    },
    {
      icon: <Globe className="w-5 h-5 text-teal-400" />,
      title: isAmharic ? "ዘመናዊ የዌብ ምህንድስና" : "Modern Web Engineering",
      description: isAmharic
        ? "በReact፣ Next.js እና TypeScript አስተማማኝና ማራኪ የሆኑ የድረ-ገጽ አፕሊኬሽኖችን እና የNode.js አገልጋዮችን መገንባት።"
        : "Building responsive React and Next.js applications with strict TypeScript type contracts and robust Node APIs."
    },
    {
      icon: <Award className="w-5 h-5 text-emerald-400" />,
      title: isAmharic ? "ተሸላሚ የቪዲዮና መልቲሚዲያ ስራ" : "Certified Multimedia Storytelling",
      description: isAmharic
        ? "በቪዲዮ ኤዲቲንግ፣ በሞሽን ግራፊክስ እና በድምፅ ማስተካከያ ስራዎች ልዩ የማበረታቻ የምስክር ወረቀት የተሸለመ።"
        : "Awarded official Reward Certificate for commercial video editing, dynamic motion graphics, and sound mastering."
    },
    {
      icon: <Calculator className="w-5 h-5 text-amber-400" />,
      title: isAmharic ? "የሂሳብ ዲፕሎማ ጥልቅ መሰረት" : "Mathematics Diploma Foundations",
      description: isAmharic
        ? "የተጠናከረ የሂሳብ እውቀትን ውስብስብ የሆኑ የኮዲንግ እና የአልጎሪዝም ችግሮችን ለመፍታት በተግባር ማዋል ላይ የተካነ።"
        : "Applying discrete math, algorithmic graph theory, and mathematical logic directly to solve complex code challenges."
    }
  ];

  const currentCategory = skillCategories[activeCategoryIndex] || skillCategories[0];

  return (
    <section id="skills" className="py-20 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)] mb-3">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.skills.badge}</span>
          </div>
          <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {t.skills.title}
          </h2>
          <p className={`mt-2 text-base sm:text-lg ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {t.skills.subtitle}
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {skillCategories.map((cat, idx) => {
            const isActive = activeCategoryIndex === idx;
            return (
              <button
                key={cat.title}
                id={`skill-tab-${idx}`}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer backdrop-blur-md ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-102'
                    : isDark
                    ? 'bg-slate-900/60 border border-cyan-500/25 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/50'
                    : 'bg-white border border-cyan-200 text-slate-700 hover:bg-cyan-50 shadow-xs'
                }`}
              >
                <span className={isActive ? 'text-slate-950' : 'text-cyan-400'}>
                  {getCategoryIcon(idx)}
                </span>
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className={`p-6 sm:p-10 rounded-3xl border backdrop-blur-xl mb-16 transition-all duration-300 ${
          isDark ? 'bg-slate-900/50 border-cyan-500/25 shadow-[0_0_35px_rgba(6,182,212,0.12)]' : 'bg-white/90 border-cyan-300/80 shadow-md'
        }`}>
          <div className="max-w-3xl mb-8">
            <h3 className={`font-display text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {currentCategory.title}
            </h3>
            <p className={`text-sm sm:text-base ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {currentCategory.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className={`p-4 rounded-2xl border transition-all ${
                  isDark ? 'bg-slate-950/60 border-cyan-500/20 hover:border-cyan-400/40' : 'bg-slate-50 border-cyan-200 hover:border-cyan-400/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar with glowing cyan gradient */}
                <div className="w-full h-2 rounded-full bg-slate-800/60 overflow-hidden mb-2">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-200 shadow-[0_0_10px_rgba(6,182,212,0.7)] transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400">{skill.highlight}</span>
                  <span className="text-cyan-400/90 font-semibold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                    {skill.experienceYears}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering & Craft Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {engineeringPillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl border backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${
                isDark ? 'bg-slate-900/40 border-cyan-500/20 hover:border-cyan-400/50' : 'bg-white/80 border-cyan-200 hover:border-cyan-400/50 shadow-xs'
              }`}
            >
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4">
                {pillar.icon}
              </div>
              <h4 className={`font-display font-bold text-base mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {pillar.title}
              </h4>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

