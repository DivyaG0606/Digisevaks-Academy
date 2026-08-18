import React from 'react';
import { Users, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { TextMaskReveal, FadeUp, StaggerContainer, StaggerItem } from './animations/MotionComponents';

export default function Testimonials() {
  const pillars = [
    {
      title: 'Interactive Classroom Environment',
      icon: Users,
      desc: 'Small batch sizes designed for hands-on mentorship, live Q&A, and immediate instructor feedback on your campaign builds.',
      badge: 'Mentorship Focus'
    },
    {
      title: 'Practical Campaign Evaluations',
      icon: Award,
      desc: 'Projects are evaluated based on actual campaign metrics, structure, and real-world applicability rather than theoretical written exams.',
      badge: '100% Practical'
    },
    {
      title: 'Structured Post-Course Support',
      icon: ShieldCheck,
      desc: 'Ongoing access to mentors, resume review sessions, and portfolio feedback as you apply for positions or pitch freelance clients.',
      badge: 'Career Preparation'
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-t border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2">
          <span className="text-[#FF1744] text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100 inline-block">
            Student Experience
          </span>
          <TextMaskReveal
            as="h2"
            className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight"
          >
            What You Can Expect
          </TextMaskReveal>
          <FadeUp delay={0.1}>
            <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
              Our commitment to delivering structured, agency-style digital marketing education in Pune.
            </p>
          </FadeUp>
        </div>

        {/* 3 Pillar Cards Grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <StaggerItem key={idx}>
                <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-200 transition-all flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white text-[#FF1744] border border-red-100 shadow-xs flex items-center justify-center group-hover:bg-[#FF1744] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-red-50 text-[#FF1744] border border-red-100">
                        {p.badge}
                      </span>
                    </div>

                    <h3 className="font-heading text-base sm:text-xl font-bold text-slate-900 group-hover:text-[#FF1744] transition-colors leading-snug">
                      {p.title}
                    </h3>

                    <p className="mt-2.5 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {p.desc}
                    </p>
                  </div>

                  <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-200/80 flex items-center space-x-2 text-[11px] sm:text-xs font-semibold text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 flex-shrink-0" />
                    <span>Standard Training Protocol</span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
}
