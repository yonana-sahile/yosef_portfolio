import React, { useState, useEffect } from 'react';
import {
  Mail,
  Send,
  MapPin,
  Clock,
  Copy,
  Check,
  Sparkles,
  CheckCircle2,
  Phone
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TRANSLATIONS } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';

interface ContactSectionProps {
  isDark: boolean;
}

const GithubIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const LinkedinIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export const ContactSection: React.FC<ContactSectionProps> = ({ isDark }) => {
  const { lang, isAmharic } = useLanguage();
  const t = TRANSLATIONS[lang];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Mobile App Development (Flutter/React Native)',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [localTime, setLocalTime] = useState('');

  // Live Debre Berhan / Addis Ababa (UTC+3) Clock
  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Africa/Addis_Ababa',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }).format(new Date());
        setLocalTime(timeStr);
      } catch {
        setLocalTime('12:00 PM (EAT)');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);

    // Save locally to persist messages during demo
    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem('user_messages') || '[]');
        existing.push({
          ...formData,
          date: new Date().toISOString()
        });
        localStorage.setItem('user_messages', JSON.stringify(existing));
      } catch {
        // Safe fallback
      }

      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)] mb-3">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {t.contact.title}
          </h2>
          <p className={`mt-2 text-base sm:text-lg ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Column: Direct Info & Phone Card */}
          <div className="lg:col-span-5 space-y-6">

            {/* Quick Contact Card */}
            <div className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-xl transition-all ${
              isDark ? 'bg-slate-900/50 border-cyan-500/25 shadow-[0_0_30px_rgba(6,182,212,0.12)]' : 'bg-white/85 border-cyan-300/70 shadow-xs'
            }`}>
              <h3 className={`font-display text-xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {t.contact.directChannels}
              </h3>

              {/* Direct Phone Item */}
              <div className={`p-4 rounded-2xl border backdrop-blur-md mb-4 flex items-center justify-between gap-3 ${
                isDark ? 'bg-slate-950/60 border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.15)]' : 'bg-cyan-50/70 border-cyan-300'
              }`}>
                <div className="overflow-hidden">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{t.contact.directPhone}</span>
                  </div>
                  <a
                    href={`tel:${PERSONAL_INFO.rawPhone}`}
                    className="text-base sm:text-lg font-bold font-mono text-cyan-300 hover:text-cyan-200 hover:underline truncate block mt-0.5"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                  <div className="text-[11px] text-slate-400 font-mono">
                    {isAmharic ? 'የስልክ ቁጥር: ' : 'Local: '}{PERSONAL_INFO.rawPhone}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={`tel:${PERSONAL_INFO.rawPhone}`}
                    className="p-2.5 rounded-xl border font-bold text-xs bg-cyan-400 text-slate-950 hover:bg-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.4)] transition-all cursor-pointer flex items-center gap-1"
                    title={isAmharic ? "አሁን ይደውሉ" : "Call Now"}
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{isAmharic ? "ይደውሉ" : "Call"}</span>
                  </a>

                  <button
                    id="contact-copy-phone-btn"
                    onClick={handleCopyPhone}
                    className={`p-2.5 rounded-xl border shrink-0 transition-all cursor-pointer backdrop-blur-sm ${
                      copiedPhone
                        ? 'bg-cyan-400/20 border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                        : isDark
                        ? 'bg-slate-900 border-cyan-500/30 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/60'
                        : 'bg-white border-cyan-300 text-slate-700 hover:bg-cyan-50 shadow-xs'
                    }`}
                    title="Copy phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-cyan-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Email item with 1-click copy */}
              <div className={`p-4 rounded-2xl border backdrop-blur-md mb-4 flex items-center justify-between gap-3 ${
                isDark ? 'bg-slate-950/60 border-cyan-500/25' : 'bg-slate-50 border-cyan-200'
              }`}>
                <div className="overflow-hidden">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400/80 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{t.contact.primaryEmail}</span>
                  </div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs sm:text-sm font-semibold text-cyan-400 hover:underline truncate block mt-0.5"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                <button
                  id="contact-copy-email-btn"
                  onClick={handleCopyEmail}
                  className={`p-2.5 rounded-xl border shrink-0 transition-all cursor-pointer backdrop-blur-sm ${
                    copiedEmail
                      ? 'bg-cyan-400/20 border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                      : isDark
                      ? 'bg-slate-900 border-cyan-500/30 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/60'
                      : 'bg-white border-cyan-300 text-slate-700 hover:bg-cyan-50 shadow-xs'
                  }`}
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-cyan-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Live Location & Local Time */}
              <div className={`p-4 rounded-2xl border backdrop-blur-md space-y-3 ${
                isDark ? 'bg-slate-950/60 border-cyan-500/25' : 'bg-slate-50 border-cyan-200'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className={`text-xs font-semibold ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                      {isAmharic ? 'ደብረ ብርሃን እና ሰሜን ሸዋ፣ ኢትዮጵያ' : 'Debre Berhan & North Shoa, Ethiopia'}
                    </span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded-md font-mono bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-bold">
                    UTC+3 (EAT)
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-cyan-500/15">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-400 shrink-0 animate-pulse" />
                    <span className="text-xs text-slate-400">{t.contact.localTime}</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    {localTime || 'Loading...'}
                  </span>
                </div>
              </div>

              {/* Status Pill */}
              <div className="mt-5 flex items-center gap-2 text-xs text-slate-400">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{t.contact.promptResponse}</span>
              </div>

              {/* Online footprint */}
              <div className="mt-6 pt-6 border-t border-cyan-500/20">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400/80 mb-3">
                  {t.contact.onlineFootprint}
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border backdrop-blur-md transition-all ${
                      isDark
                        ? 'bg-slate-950/70 border-cyan-500/30 text-slate-200 hover:bg-cyan-500/15 hover:border-cyan-400/60 hover:text-cyan-300'
                        : 'bg-white border-cyan-200 text-slate-700 hover:bg-cyan-50'
                    }`}
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border backdrop-blur-md transition-all ${
                      isDark
                        ? 'bg-slate-950/70 border-cyan-500/30 text-slate-200 hover:bg-cyan-500/15 hover:border-cyan-400/60 hover:text-cyan-300'
                        : 'bg-white border-cyan-200 text-slate-700 hover:bg-cyan-50'
                    }`}
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-xl relative transition-all ${
              isDark
                ? 'bg-slate-900/50 border-cyan-500/25 shadow-[0_0_35px_rgba(6,182,212,0.12)]'
                : 'bg-white/85 border-cyan-300/80 shadow-md'
            }`}>

              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-cyan-400/20 border-2 border-cyan-400 flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className={`font-display text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {t.contact.successTitle}
                  </h3>
                  <p className={`text-sm max-w-md ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {t.contact.successDesc}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        projectType: 'Mobile App Development (Flutter/React Native)',
                        message: ''
                      });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-all cursor-pointer shadow-xs"
                  >
                    {t.contact.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-cyan-400/90 mb-2">
                        {t.contact.formName} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={isAmharic ? "ሙሉ ስምዎ" : "Abebe Kebede"}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none ${
                          isDark
                            ? 'bg-slate-950/70 border-cyan-500/25 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                            : 'bg-white border-cyan-200 text-slate-900 placeholder-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'
                        }`}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-cyan-400/90 mb-2">
                        {t.contact.formEmail} *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none ${
                          isDark
                            ? 'bg-slate-950/70 border-cyan-500/25 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                            : 'bg-white border-cyan-200 text-slate-900 placeholder-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-cyan-400/90 mb-2">
                        {t.contact.formPhone}
                      </label>
                      <input
                        type="tel"
                        placeholder="09..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none ${
                          isDark
                            ? 'bg-slate-950/70 border-cyan-500/25 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                            : 'bg-white border-cyan-200 text-slate-900 placeholder-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'
                        }`}
                      />
                    </div>

                    {/* Project Interest */}
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-cyan-400/90 mb-2">
                        {t.contact.formProject}
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none cursor-pointer ${
                          isDark
                            ? 'bg-slate-950/90 border-cyan-500/25 text-white focus:border-cyan-400'
                            : 'bg-white border-cyan-200 text-slate-900 focus:border-cyan-500'
                        }`}
                      >
                        <option value="Mobile App Development (Flutter/React Native)">
                          {isAmharic ? "የሞባይል መተግበሪያ (Flutter / React Native)" : "Mobile App Development (Flutter / React Native)"}
                        </option>
                        <option value="Full-Stack Web Application (React/Node/Next)">
                          {isAmharic ? "የድረ-ገጽ ሲስተም (React / Node / Next)" : "Full-Stack Web Application (React / Node / Next)"}
                        </option>
                        <option value="Video Editing & Motion Graphics">
                          {isAmharic ? "የቪዲዮ ኤዲቲንግ እና ሞሽን ግራፊክስ" : "Video Editing & Motion Graphics"}
                        </option>
                        <option value="Graphic Design & Visual Identity">
                          {isAmharic ? "ግራፊክ ዲዛይን እና ቪዥዋል ብራንዲንግ" : "Graphic Design & Visual Identity"}
                        </option>
                        <option value="Academic Collaboration / Other">
                          {isAmharic ? "የትምህርት ትብብር / ሌላ" : "Academic Collaboration / Other"}
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-cyan-400/90 mb-2">
                      {t.contact.formMessage} *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder={isAmharic ? "ስለ ፕሮጀክትዎ፣ የሞባይል/ዌብ አፕ ሃሳብዎ ወይም ስራዎ እዚህ ይግለጹ..." : "Describe your project, app idea, or opportunity..."}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none ${
                        isDark
                          ? 'bg-slate-950/70 border-cyan-500/25 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                          : 'bg-white border-cyan-200 text-slate-900 placeholder-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'
                      }`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-display font-bold text-sm bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 hover:from-cyan-300 hover:to-teal-300 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>{t.contact.formSending}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.contact.formSubmit}</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
