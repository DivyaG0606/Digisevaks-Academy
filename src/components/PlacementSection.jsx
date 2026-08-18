import React from 'react';
import { Building } from 'lucide-react';
import { TextMaskReveal, FadeUp, ScaleReveal } from './animations/MotionComponents';

export default function PlacementSection({ onOpenDemo }) {
  const steps = [
    { title: 'Resume & Portfolio Building', desc: 'Build an ATS-friendly resume featuring your live agency-style project work.' },
    { title: 'LinkedIn Profile Optimization', desc: 'Optimize your headline, keywords, and portfolio to attract recruiters.' },
    { title: 'Mock Interviews & Technical Q&A', desc: 'Practice interview rounds with feedback from experienced mentors.' },
    { title: 'Placement Guidance & Referrals', desc: 'Get guidance on where to apply, with referrals shared where available through our network.' }
  ];

  return (
    <section id="placements" className="py-10 sm:py-20 bg-[#FF1744] text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column - Steps & CTA */}
          <div className="lg:col-span-6 space-y-3.5 sm:space-y-4">
            <span className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full border border-white/30 inline-block">
              Career Transformation
            </span>

            <TextMaskReveal
              as="h2"
              className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
            >
              Career Support & Placement Guidance
            </TextMaskReveal>

            <FadeUp delay={0.1}>
              <p className="text-xs sm:text-base text-white/90 leading-relaxed font-normal">
                Our career support continues through resume building, mock interviews, and job-search guidance — helping you present your skills with confidence.
              </p>
            </FadeUp>

            {/* 4 Steps */}
            <div className="pt-1 space-y-2 sm:space-y-3">
              {steps.map((s, idx) => (
                <FadeUp key={idx} delay={0.1 + idx * 0.05}>
                  <div className="flex items-start space-x-2.5 sm:space-x-4 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white text-slate-900 border border-white/40 shadow-xs hover:shadow-md transition-shadow">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#FF1744] text-white font-bold text-xs sm:text-sm flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-base font-bold text-slate-900 leading-snug">{s.title}</h4>
                      <p className="text-[10px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* CTA Button */}
            <FadeUp delay={0.3} className="pt-2">
              <button
                onClick={() => onOpenDemo('placement')}
                className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 bg-slate-900 hover:bg-slate-800 text-white font-extrabold rounded-xl shadow-lg hover:shadow-xl transition-all text-xs sm:text-sm cursor-pointer active:scale-95 flex items-center justify-center"
              >
                Talk to Placement Counselor
              </button>
            </FadeUp>
          </div>

          {/* Right Column - Overview Box */}
          <div className="lg:col-span-6">
            <ScaleReveal delay={0.2}>
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-white/20 shadow-2xl text-center space-y-3.5 sm:space-y-6">
                <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-[#FF1744] text-white flex items-center justify-center mx-auto shadow-md">
                  <Building className="w-5 h-5 sm:w-8 sm:h-8" />
                </div>

                <div>
                  <h3 className="text-base sm:text-2xl font-black text-slate-900">Career Preparation</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-medium">
                    Graduates prepare for roles across digital agencies, corporate marketing teams, e-commerce brands, and freelancing.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2.5 sm:gap-4 text-left pt-2.5 sm:pt-4 border-t border-slate-100">
                  <div className="bg-white p-2.5 sm:p-4 rounded-xl border border-slate-200 shadow-2xs hover:border-[#FF1744]/40 transition-all">
                    <span className="text-xs sm:text-base font-bold text-slate-900 block leading-tight">Structured Mentorship</span>
                    <span className="text-[10px] sm:text-xs text-slate-500 block mt-0.5 font-medium">Hands-On Guidance</span>
                  </div>
                  <div className="bg-white p-2.5 sm:p-4 rounded-xl border border-slate-200 shadow-2xs hover:border-[#FF1744]/40 transition-all">
                    <span className="text-xs sm:text-base font-bold text-slate-900 block leading-tight">Portfolio Support</span>
                    <span className="text-[10px] sm:text-xs text-slate-500 block mt-0.5 font-medium">Live Campaign Links</span>
                  </div>
                </div>
              </div>
            </ScaleReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
