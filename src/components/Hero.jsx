import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Star,
  Award,
  BrainCircuit,
  Rocket,
  Download,
  Target,
  Briefcase,
  TrendingUp,
  Zap,
  Users,
  ShieldCheck,
  Bot
} from 'lucide-react';

export default function Hero({ onOpenDemo }) {

  // Premium feature chips
  const featureChips = [
    { title: '100% Practical Training', desc: 'Agency-style live campaigns', icon: Sparkles },
    { title: 'AI Tools Integrated', desc: 'ChatGPT, Canva AI & prompt engineering', icon: Bot },
    { title: 'Live Client-Style Projects', desc: 'Real campaign briefs', icon: Target },
    { title: 'Placement Support', desc: 'Resume review & mock interviews', icon: Briefcase }
  ];

  // Trust badges
  const trustBadges = [
    { text: '4.9 Stars Rating', icon: Star, color: 'text-amber-400 fill-amber-400' },
    { text: '10,000+ Candidates Trained', icon: Users, color: 'text-[#FF1744]' },
    { text: '3 Specialized Certifications', icon: Award, color: 'text-purple-600' },
    { text: 'Meta & Google Ads Hands-On Training', icon: ShieldCheck, color: 'text-emerald-600' }
  ];

  return (
    <section className="relative pt-8 pb-16 md:py-20 bg-hero-radial bg-dot-pattern overflow-hidden border-b border-gray-200/80 font-sans">

      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FF1744]/8 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#FF5C7A]/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >

            {/* Top Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#FF5C7A]/30 text-[#FF1744] text-xs font-heading font-bold shadow-sm backdrop-blur-sm"
            >

              <span>AI-Powered • Agency-Style Practical Training in Pune</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#111111] tracking-[-1px] leading-[1.15]"
            >
              Practical Agency-Style <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#FF1744] via-[#D50032] to-[#FF5C7A] bg-clip-text text-transparent">
                AI & Digital Marketing
              </span> <br className="hidden sm:block" />
              Master Program
            </motion.h1>

            {/* Sub-headline description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-[#6B7280] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Learn digital marketing the way agencies actually run it — in Pune, through live client-style projects, hands-on AI tools, expert mentorship, and <span className="text-[#FF1744] font-bold">structured placement support</span>.
            </motion.p>

            {/* Feature Chips Grid */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 gap-3 max-w-xl mx-auto lg:mx-0 text-left pt-1"
            >
              {featureChips.map((chip, idx) => {
                const IconComponent = chip.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 p-3 rounded-xl bg-white/90 border border-gray-200/90 shadow-sm hover:border-[#FF1744]/40 hover:shadow-md transition-all duration-200 group cursor-default"
                  >
                    <div className="p-2 rounded-lg bg-[#FFF5F7] text-[#FF1744] group-hover:bg-[#FF1744] group-hover:text-white transition-colors flex-shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-heading text-xs font-bold text-[#111111] group-hover:text-[#FF1744] transition-colors">{chip.title}</h4>
                      <p className="text-[10px] text-[#6B7280] line-clamp-1">{chip.desc}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => onOpenDemo('hero')}
                className="w-full sm:w-auto h-[54px] px-8 font-heading font-bold text-white bg-cta-red rounded-xl shadow-lg shadow-[#FF1744]/25 hover:shadow-xl hover:shadow-[#FF1744]/40 hover:scale-[1.02] transition-all duration-200 flex items-center justify-center space-x-2.5 text-base active:scale-95 cursor-pointer"
              >
                <span>Book Free Demo Class</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onOpenDemo('brochure')}
                className="w-full sm:w-auto h-[54px] px-7 font-heading font-semibold text-[#111111] bg-white hover:bg-gray-50 border border-gray-300 rounded-xl shadow-sm transition-all duration-200 flex items-center justify-center space-x-2 text-base active:scale-95 cursor-pointer"
              >
                <Download className="w-4 h-4 text-gray-600" />
                <span>Download Syllabus</span>
              </button>
            </motion.div>

            {/* Trust Badges - Side by Side layout */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-4 border-t border-gray-200/80"
            >
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-[#6B7280]">
                {trustBadges.map((badge, index) => {
                  const BadgeIcon = badge.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-center space-x-1.5 px-2.5 py-1.5 rounded-full bg-white border border-gray-200/90 shadow-xs text-[11px] sm:text-xs font-semibold text-[#111111] text-center"
                    >
                      <BadgeIcon className={`w-3.5 h-3.5 flex-shrink-0 ${badge.color}`} />
                      <span className="leading-tight">{badge.text}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Enhanced Admission Card + Floating UI Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 relative mt-4 lg:-mt-16 xl:-mt-20"
          >

            {/* Background Red Ambient Glow behind card */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#FF1744]/20 via-[#FF5C7A]/15 to-transparent rounded-3xl blur-2xl -z-10" />

            {/* Floating UI Badge 1: Top Right (Meta & Google Ads ROI) */}
            <div className="absolute -top-5 -right-4 z-20 hidden sm:flex items-center space-x-2 px-3 py-2 rounded-2xl bg-white border border-emerald-200 shadow-lg text-xs font-bold text-emerald-700 animate-float-slow">
              <div className="p-1 rounded-lg bg-emerald-100 text-emerald-600">
                <TrendingUp className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[10px] text-gray-500 font-semibold">Meta & Google Ads</div>
                <div className="text-emerald-600 font-stat font-bold">Practical Hands-On Training</div>
              </div>
            </div>

            {/* Floating UI Badge 2: Bottom Left (AI Marketing Chip) */}
            <div className="absolute -bottom-5 -left-4 z-20 hidden sm:flex items-center space-x-2 px-3 py-2 rounded-2xl bg-white border border-[#FF5C7A]/40 shadow-lg text-xs font-bold text-[#111111] animate-float-reverse">
              <div className="p-1 rounded-lg bg-[#FFF5F7] text-[#FF1744]">
                <Zap className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[10px] text-gray-500 font-semibold">AI Automation</div>
                <div className="text-[#FF1744] font-stat font-bold">ChatGPT & Canva AI</div>
              </div>
            </div>

            {/* Main Admission Card */}
            <div className="relative bg-white rounded-3xl p-5 sm:p-7 text-[#111111] shadow-card-glow border border-gray-200/90 hover:border-[#FF5C7A]/40 transition-all duration-300">

              {/* Responsive Header: Prevents Badge Overlap on Mobile */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 border-b border-gray-100">
                <div className="flex items-center space-x-3 min-w-0">
                  <img src="/logo.png" alt="DIGISEVAKS Logo" className="h-9 sm:h-10 w-auto flex-shrink-0" />
                  <div className="min-w-0">
                    <h3 className="font-heading font-extrabold text-xs sm:text-sm text-[#111111]">DIGISEVAKS ACADEMY</h3>
                    <span className="text-[10px] text-[#FF1744] font-bold uppercase tracking-wider block">
                      Master Program Card
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-[#FFF5F7] text-[#FF1744] border border-[#FF5C7A]/30 uppercase whitespace-nowrap flex-shrink-0 shadow-2xs">
                  Batch Starting Soon
                </span>
              </div>

              {/* Card Body Details */}
              <div className="my-5 space-y-3.5">
                <div className="bg-[#FFF5F7] rounded-2xl p-3.5 border border-[#FF5C7A]/20">
                  <div className="text-[10px] font-bold text-[#FF1744] uppercase tracking-wider">Program Specialization</div>
                  <div className="font-heading text-sm font-extrabold text-[#111111] mt-0.5">
                    Agency Style Digital Marketing Mastery
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
                    <span className="text-[#6B7280] block text-[10px] font-semibold">Learning Mode</span>
                    <span className="font-bold text-[#111111] mt-0.5 block">Agency Classroom Lab</span>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
                    <span className="text-[#6B7280] block text-[10px] font-semibold">Live Projects</span>
                    <span className="font-bold text-emerald-600 mt-0.5 block">Client-Style Briefs</span>
                  </div>
                </div>

                <div className="bg-[#FFF5F7] rounded-xl p-3.5 border border-[#FF5C7A]/30 flex items-center space-x-3">
                  <Award className="w-5 h-5 text-[#FF1744] flex-shrink-0" />
                  <div>
                    <div className="text-xs font-heading font-bold text-[#111111]">Industry Recognized Certification</div>
                    <div className="text-[10px] text-[#6B7280]">Official DIGISEVAKS Master Diploma</div>
                  </div>
                </div>
              </div>

              {/* Action Button inside card */}
              <button
                onClick={() => onOpenDemo('hero_card')}
                className="w-full py-3.5 bg-cta-red text-white font-heading font-bold text-sm rounded-xl transition-all shadow-saas hover:opacity-95 flex items-center justify-center space-x-2 active:scale-95 cursor-pointer"
              >
                <Rocket className="w-4 h-4" />
                <span>Reserve Seat for Free Demo</span>
              </button>

              <p className="text-[11px] text-[#6B7280] text-center mt-3 font-medium">
                Limited seats available per batch for hands-on mentoring.
              </p>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
