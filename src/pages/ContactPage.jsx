import React from 'react';
import SEO from '../components/SEO';
import { getBreadcrumbSchema } from '../data/schemaData';
import ContactSection from '../components/ContactSection';
import { TextMaskReveal, FadeUp } from '../components/animations/MotionComponents';

export default function ContactPage() {
  return (
    <div className="py-6 sm:py-16 bg-white font-sans animate-fade-in">
      <SEO pageKey="contact" schema={getBreadcrumbSchema([{ name: 'Contact', url: '/contact' }])} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-10 text-center space-y-2">
        <span className="bg-[#FFF5F7] text-[#FF1744] border border-[#FF5C7A]/30 text-[10px] sm:text-xs font-heading font-bold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full uppercase tracking-wider shadow-xs inline-block">
          Reach Out To Us
        </span>

        <TextMaskReveal
          as="h1"
          className="font-heading text-2xl sm:text-4xl lg:text-6xl font-extrabold text-[#111111] tracking-tight leading-tight"
        >
          Contact & Free Demo Registration
        </TextMaskReveal>

        <FadeUp delay={0.1}>
          <p className="text-xs sm:text-base text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            Connect with our admissions team or reserve your seat for an upcoming free demo session.
          </p>
        </FadeUp>
      </div>

      <ContactSection showMap={true} />
    </div>
  );
}
