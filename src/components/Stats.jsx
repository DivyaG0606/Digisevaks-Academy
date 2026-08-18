import React from 'react';
import { Users, Award, BookOpen, Briefcase } from 'lucide-react';
import { FadeUp, AnimatedCounter } from './animations/MotionComponents';

export default function Stats() {
  const stats = [
    { value: 10000, suffix: '+', label: 'Students Trained', icon: Users, desc: 'Across Pune & Maharashtra' },
    { value: 100, suffix: '%', label: 'Practical Training', icon: BookOpen, desc: 'Agency-Style Live Briefs' },
    { value: 50, suffix: '+', label: 'AI Tools Covered', icon: Award, desc: 'ChatGPT, Canva AI & Ads' },
    { textValue: 'Structured', label: 'Placement Support', icon: Briefcase, desc: 'Resume Review & Mock Tests' },
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-12 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 font-sans">
      <FadeUp delay={0.1}>
        <div className="bg-[#FFF5F7] text-[#111111] py-4 sm:py-7 px-3 sm:px-6 rounded-2xl sm:rounded-3xl border border-[#FF5C7A]/30 shadow-lg shadow-[#FF1744]/5 backdrop-blur-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center p-1 sm:p-3 group">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white text-[#FF1744] border border-[#FF5C7A]/30 flex items-center justify-center mb-1.5 sm:mb-2 group-hover:scale-105 transition-transform shadow-xs">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  
                  <span className="font-stat text-xl sm:text-3xl lg:text-4xl font-bold text-[#111111] tracking-tight leading-none">
                    {stat.textValue ? (
                      stat.textValue
                    ) : (
                      <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                    )}
                  </span>
                  
                  <span className="font-heading text-xs sm:text-sm font-bold text-[#111111] mt-1 leading-tight">
                    {stat.label}
                  </span>
                  
                  <span className="text-[10px] sm:text-xs text-[#6B7280] mt-0.5 font-normal leading-tight">
                    {stat.desc}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
