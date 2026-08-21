import React from 'react';
import SEO from '../components/SEO';
import { getBreadcrumbSchema } from '../data/schemaData';
import LiveProjects from '../components/LiveProjects';

export default function ProjectsPage({ onOpenDemo }) {
  return (
    <div className="py-16 bg-white font-sans animate-fade-in">
      <SEO pageKey="projects" schema={getBreadcrumbSchema([{ name: 'Projects', url: '/projects' }])} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="bg-[#FFF5F7] text-[#FF1744] border border-[#FF5C7A]/30 text-xs font-heading font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
          Real Industry Experience
        </span>
        <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-[#111111] tracking-tight mt-4">
          Live Client Projects & Case Studies
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#6B7280] max-w-2xl mx-auto">
          Work on real-world briefs inspired by banks, e-commerce stores, healthcare providers, and mobile apps.
        </p>
      </div>

      <LiveProjects />
    </div>
  );
}
