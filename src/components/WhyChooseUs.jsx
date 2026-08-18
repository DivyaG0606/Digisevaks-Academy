import React from 'react';
import { Check, Zap } from 'lucide-react';
import { TextMaskReveal, FadeUp, ScaleReveal } from './animations/MotionComponents';

export default function WhyChooseUs() {
  const comparison = [
    {
      feature: 'Training Methodology',
      digisevaks: 'Practical, project-based classes built around agency-style client briefs',
    },
    {
      feature: 'AI Integration',
      digisevaks: 'ChatGPT, Google Gemini, and Canva AI used throughout curriculum',
    },
    {
      feature: 'Live Projects',
      digisevaks: 'Client-style case studies across multiple industries',
    },
    {
      feature: 'Certifications',
      digisevaks: 'Module certificates plus an official printed diploma',
    },
    {
      feature: 'Mentorship',
      digisevaks: 'Direct mentor feedback on your actual project work',
    },
    {
      feature: 'Career Support',
      digisevaks: 'Resume building, portfolio development, mock interviews, and placement guidance',
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2">
          <span className="text-[#FF1744] text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100 inline-block">
            The DIGISEVAKS Advantage
          </span>
          <TextMaskReveal
            as="h2"
            className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight"
          >
            What Makes DIGISEVAKS Academy's Approach Different
          </TextMaskReveal>
          <FadeUp delay={0.1}>
            <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
              Built from the ground up for practical hands-on skill development.
            </p>
          </FadeUp>
        </div>

        {/* Comparison Table */}
        <ScaleReveal delay={0.15}>
          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 shadow-lg bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-3.5 sm:p-5 text-xs sm:text-sm font-bold w-1/3">What You Get</th>
                  <th className="p-3.5 sm:p-5 text-xs sm:text-sm font-bold w-2/3 bg-[#FF1744] text-white">
                    <div className="flex items-center space-x-1.5 sm:space-x-2">
                      <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 flex-shrink-0" />
                      <span>How It Works At DIGISEVAKS Academy</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {comparison.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    <td className="p-3.5 sm:p-5 font-bold text-slate-900 leading-snug">{row.feature}</td>
                    <td className="p-3.5 sm:p-5 font-medium text-slate-800 bg-red-50/40">
                      <div className="flex items-start space-x-2 text-slate-800 font-semibold leading-snug">
                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF1744] flex-shrink-0 stroke-[3] mt-0.5" />
                        <span>{row.digisevaks}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScaleReveal>

      </div>
    </section>
  );
}
