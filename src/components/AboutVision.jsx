import React from 'react';
import { Target, Compass, Sparkles, Building2 } from 'lucide-react';
import { TextMaskReveal, FadeUp, ScaleReveal } from './animations/MotionComponents';

export default function AboutVision() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-14 sm:mb-20">
          <FadeUp className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-widest">
              <Building2 className="w-4 h-4" />
              <span>Agency-Style Training Institute</span>
            </div>

            <TextMaskReveal 
              as="h2"
              className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight"
            >
              We Don't Just Teach Courses. <br />
              <span className="text-red-600">We Build Practical Marketing Skills.</span>
            </TextMaskReveal>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              DIGISEVAKS Academy was founded on a simple idea: replace outdated, theory-heavy education with practical, agency-style training.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Employers don't hire people who can define a marketing funnel — they hire people who can launch a Meta Ads campaign, improve SEO rankings, read Google Analytics data, and use AI tools like ChatGPT to get real work done faster. That's what this program is built around.
            </p>

            <div className="pt-2 space-y-2.5">
              {[
                'Work on live, agency-style campaign briefs with real budget-planning exercises',
                'Learn AI tools and prompt engineering strategies used in real marketing workflows',
                'Earn certifications tied to actual project work, including a printed diploma',
                'Get direct mentorship from trainers with hands-on agency experience'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-800 font-semibold">
                  <div className="mt-0.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-red-600 text-white flex items-center justify-center flex-shrink-0 text-[10px] sm:text-xs">
                    ✓
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Red Featured Card - Compact on Mobile */}
          <div className="lg:col-span-6">
            <ScaleReveal delay={0.15}>
              <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#FF1744] via-[#E60033] to-[#B70025] p-5 sm:p-8 text-white shadow-xl overflow-hidden border border-[#FF5C7A]/40">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="relative z-10 space-y-4 sm:space-y-6">
                  {/* Card Header */}
                  <div className="flex items-center space-x-3 sm:space-x-4 pb-4 sm:pb-6 border-b border-white/20">
                    <img src="/logo.png" alt="DIGISEVAKS Logo" className="h-9 sm:h-12 w-auto bg-white p-1 rounded-xl shadow-md flex-shrink-0" />
                    <div>
                      <h3 className="text-base sm:text-xl font-heading font-extrabold text-white tracking-wide leading-tight">DIGISEVAKS ACADEMY</h3>
                      <p className="text-[10px] sm:text-xs text-red-100 font-semibold tracking-wider uppercase mt-0.5">Empowering Digital Practitioners</p>
                    </div>
                  </div>

                  {/* 2 Grid Pill Items */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 text-left">
                    <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-sm border border-white/80">
                      <span className="text-[10px] sm:text-xs text-gray-500 block font-semibold">Training Model</span>
                      <span className="text-xs sm:text-base font-bold text-[#111111] mt-0.5 block">100% Practical</span>
                    </div>
                    <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-sm border border-white/80">
                      <span className="text-[10px] sm:text-xs text-gray-500 block font-semibold">Curriculum Focus</span>
                      <span className="text-xs sm:text-base font-bold text-[#FF1744] mt-0.5 block">AI + Agency Ads</span>
                    </div>
                  </div>

                  {/* Bottom Text Box */}
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm border border-white/80">
                    <h4 className="text-xs sm:text-sm font-bold text-[#111111] mb-1.5 flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-[#FF1744] flex-shrink-0" />
                      <span>Why Agency-Style Training Works</span>
                    </h4>
                    <p className="text-[11px] sm:text-xs text-gray-700 leading-relaxed font-medium">
                      Training on real, client-style campaigns gives students the practical experience to contribute meaningfully from day one — whether that's at an agency, in-house marketing team, or their own business.
                    </p>
                  </div>
                </div>
              </div>
            </ScaleReveal>
          </div>
        </div>

        {/* Vision & Mission Cards - Slightly smaller on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          <FadeUp delay={0.1}>
            <div className="bg-gradient-to-br from-white to-[#FFF5F7] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-red-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-[#FF1744] text-white flex items-center justify-center mb-3 sm:mb-6 shadow-lg shadow-red-600/20">
                <Compass className="w-5 h-5 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-[#111111]">Our Vision</h3>
              <p className="mt-2 sm:mt-3 text-gray-600 leading-relaxed text-xs sm:text-base">
                To become a trusted, AI-integrated digital marketing academy in Pune — known for practical, industry-relevant training that prepares students, entrepreneurs, and professionals for real marketing work.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="bg-gradient-to-br from-white to-[#FFF5F7] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-red-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-[#FF1744] text-white flex items-center justify-center mb-3 sm:mb-6 shadow-lg shadow-red-600/20">
                <Target className="w-5 h-5 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-[#111111]">Our Mission</h3>
              <p className="mt-2 sm:mt-3 text-gray-600 leading-relaxed text-xs sm:text-base">
                To make practical, affordable digital marketing education accessible — through hands-on mentor guidance, agency-style project work, and structured career support.
              </p>
            </div>
          </FadeUp>
        </div>

      </div>
    </section>
  );
}
