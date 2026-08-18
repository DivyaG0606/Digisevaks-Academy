import React from 'react';
import PlacementSection from '../components/PlacementSection';
import { TextMaskReveal, FadeUp } from '../components/animations/MotionComponents';

export default function PlacementsPage({ onOpenDemo }) {
  return (
    <div className="py-8 sm:py-16 bg-[#FFF5F7] font-sans animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-10 text-center space-y-2">
        <span className="bg-white text-[#FF1744] border border-[#FF5C7A]/30 text-[10px] sm:text-xs font-heading font-bold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full uppercase tracking-wider shadow-xs inline-block">
          Career Outcomes
        </span>

        <TextMaskReveal
          as="h1"
          className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight"
        >
          Placement & Career Support
        </TextMaskReveal>

        <FadeUp delay={0.1}>
          <p className="text-xs sm:text-base text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            From ATS resume building to mock interviews and guaranteed placement referrals with partner agencies.
          </p>
        </FadeUp>
      </div>

      <PlacementSection onOpenDemo={onOpenDemo} />
    </div>
  );
}
