import React from 'react';
import SEO from '../components/SEO';
import { getBreadcrumbSchema } from '../data/schemaData';
import ToolsSection from '../components/ToolsSection';

export default function ToolsPage() {
  return (
    <div className="py-16 bg-[#FFF5F7] font-sans animate-fade-in">
      <SEO pageKey="tools" schema={getBreadcrumbSchema([{ name: 'Tools Stack', url: '/tools' }])} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="bg-white text-[#FF1744] border border-[#FF5C7A]/30 text-xs font-heading font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
          Software & Stack
        </span>
        <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-[#111111] tracking-tight mt-4">
          Tools & Software You Will Master
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#6B7280] max-w-2xl mx-auto">
          Gain hands-on proficiency with ChatGPT, Canva Pro, Meta Ads Manager, GA4, WordPress, and GTM.
        </p>
      </div>

      <ToolsSection />
    </div>
  );
}
