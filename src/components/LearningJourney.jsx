import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Rocket, BookOpen, Laptop, ShieldCheck, ArrowRight } from 'lucide-react';
import { TextMaskReveal, FadeUp, StaggerContainer, StaggerItem } from './animations/MotionComponents';

export default function LearningJourney({ onOpenDemo }) {
  const steps = [
    {
      step: '01',
      title: 'Foundations & Strategy',
      desc: 'Master marketing principles, customer personas, AI prompt engineering, and digital campaign planning.',
      icon: BookOpen,
      color: 'bg-blue-600'
    },
    {
      step: '02',
      title: 'Hands-On Tool Practice',
      desc: 'Build web funnels with WordPress & Elementor, design creatives in Canva Pro, and set up Meta Pixel tracking.',
      icon: Laptop,
      color: 'bg-purple-600'
    },
    {
      step: '03',
      title: 'Live Campaign Execution',
      desc: 'Launch live agency-style Meta and Google Ads campaigns, work with real budgets, and optimize ROAS.',
      icon: Rocket,
      color: 'bg-[#FF1744]'
    },
    {
      step: '04',
      title: 'Portfolio & Placement',
      desc: 'Assemble your live project portfolio, polish your ATS resume, participate in mock interviews, and earn diplomas.',
      icon: ShieldCheck,
      color: 'bg-emerald-600'
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#FF5C7A] text-xs font-heading font-bold uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 inline-block">
            Step-By-Step Workflow
          </span>
          <TextMaskReveal 
            as="h2"
            className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight"
          >
            Your Practical Learning Journey
          </TextMaskReveal>
          <FadeUp delay={0.1}>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              From beginner foundations to live agency campaign execution in 4 structured phases.
            </p>
          </FadeUp>
        </div>

        {/* Steps Grid */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <StaggerItem key={idx}>
                <div className="bg-slate-800/80 rounded-3xl p-6 border border-slate-700/80 shadow-xl hover:border-[#FF1744]/50 transition-all flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-extrabold text-slate-400 font-mono tracking-wider bg-slate-900 px-3 py-1 rounded-full border border-slate-700">
                        PHASE {s.step}
                      </span>
                      <div className={`w-10 h-10 rounded-xl ${s.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#FF5C7A] transition-colors">
                      {s.title}
                    </h3>

                    <p className="mt-2 text-xs text-slate-400 leading-relaxed font-normal">
                      {s.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-700/60 text-xs font-semibold text-emerald-400 flex items-center space-x-1.5">
                    <span>100% Practical Evaluation</span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom Call to Action */}
        <FadeUp delay={0.2} className="mt-12 text-center">
          <button
            onClick={() => onOpenDemo('journey')}
            className="px-8 py-3.5 bg-cta-red hover:bg-[#D50032] text-white font-heading font-bold text-sm rounded-xl shadow-lg transition-all inline-flex items-center space-x-2 active:scale-95 cursor-pointer"
          >
            <span>Start Your Learning Journey</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </FadeUp>

      </div>
    </section>
  );
}
