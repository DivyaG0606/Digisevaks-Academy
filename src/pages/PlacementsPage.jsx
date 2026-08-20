import React, { useEffect } from 'react';
import PlacementSection from '../components/PlacementSection';
import { TextMaskReveal, FadeUp } from '../components/animations/MotionComponents';

export default function PlacementsPage({ onOpenDemo }) {
  useEffect(() => {
    document.title = "100% Placement Assistance Digital Marketing Course Pune | DIGISEVAKS Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Get 100% Placement Assistance, ATS resume building, HR mock interviews, and direct agency referrals with DIGISEVAKS Academy Pune & PCMC. 7,500+ candidates placed!");
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-6 sm:py-12 bg-white font-sans animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center space-y-2">
        <span className="bg-red-50 text-[#FF1744] border border-[#FF5C7A]/30 text-[10px] sm:text-xs font-heading font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-xs inline-block">
          100% PLACEMENT ASSISTANCE PROGRAM
        </span>

        <TextMaskReveal
          as="h1"
          className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight"
        >
          Digital Marketing Placement & Career Success Hub
        </TextMaskReveal>

        <FadeUp delay={0.1}>
          <p className="text-xs sm:text-base text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
            From ATS resume optimization to 1-on-1 agency mock interviews and direct campus hiring drives with 600+ top marketing partners.
          </p>
        </FadeUp>
      </div>

      <PlacementSection onOpenDemo={onOpenDemo} />
    </div>
  );
}
