import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { TextMaskReveal, FadeUp, StaggerContainer, StaggerItem } from './animations/MotionComponents';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: 'Why is DIGISEVAKS Academy called an AI-Powered Agency Style Institute?',
      a: 'Unlike traditional courses that focus heavily on theoretical slides, our curriculum integrates AI tools (like ChatGPT and Canva AI) directly into practical, agency-style project briefs.'
    },
    {
      q: 'Do I get a Printed Hard Copy Certificate?',
      a: 'Yes. Upon completing the course modules and capstone evaluation, you receive specialized module certificates and an official printed hard-copy diploma.'
    },
    {
      q: 'What is the eligibility requirement to join?',
      a: 'No prior technical or coding background is required. Anyone with basic computer and internet familiarity — including students, graduates, job seekers, business owners, or homemakers — can enroll.'
    },
    {
      q: 'What is the training methodology and batch format?',
      a: 'We focus on practical, project-based classroom training with hands-on practice at our campus in Pune.'
    },
    {
      q: 'How does placement support work?',
      a: 'Our team guides you through ATS resume creation, portfolio assembly, LinkedIn profile optimization, mock interviews, and job opportunity referrals.'
    }
  ];

  return (
    <section id="faq" className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2">
          <span className="text-red-600 text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-red-100 px-3 py-1 rounded-full border border-red-200 inline-block">
            Got Questions?
          </span>
          <TextMaskReveal
            as="h2"
            className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight"
          >
            Frequently Asked Questions
          </TextMaskReveal>
          <FadeUp delay={0.1}>
            <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
              Find answers to common queries about our courses, certificates, and placement.
            </p>
          </FadeUp>
        </div>

        {/* FAQ Accordion List */}
        <StaggerContainer staggerDelay={0.06} className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <StaggerItem key={idx}>
                <div
                  className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full p-3.5 sm:p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-base font-bold text-slate-900 pr-3 leading-snug">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180 text-red-600' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-3.5 pb-4 pt-1 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
}
