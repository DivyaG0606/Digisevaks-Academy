import React from 'react';
import ToolCard from './ToolCard';
import {
  SiOpenai,
  SiCanva,
  SiGoogleads,
  SiMeta,
  SiGoogleanalytics,
  SiWordpress,
  SiElementor,
  SiSemrush,
  SiAhrefs,
  SiCapcut,
  SiGoogletagmanager,
  SiMailchimp,
  SiGooglemybusiness,
  SiClaude,
  SiCopydotai,
  SiHostinger,
  SiCpanel,
  SiMidjourney,
  SiDalle
} from './brandIcons';

export default function ToolsSection() {
  const toolsData = [
    {
      name: 'ChatGPT & OpenAI',
      description: 'AI Copywriting & Strategy',
      primaryIcon: SiOpenai,
      brandColor: '#10A37F',
      bgAccent: '#E6F7F2'
    },
    {
      name: 'Canva Pro & AI Magic',
      description: 'Graphic & Social Design',
      primaryIcon: SiCanva,
      brandColor: '#00C4CC',
      bgAccent: '#E6F9FA'
    },
    {
      name: 'Google Ads Manager',
      description: 'PPC, Search & Display Ads',
      primaryIcon: SiGoogleads,
      brandColor: '#4285F4',
      bgAccent: '#EBF3FE'
    },
    {
      name: 'Meta Business Suite',
      description: 'FB & Insta Performance Ads',
      primaryIcon: SiMeta,
      brandColor: '#0668E1',
      bgAccent: '#EBF1FF'
    },
    {
      name: 'Google Analytics 4 (GA4)',
      description: 'Analytics & Conversions',
      primaryIcon: SiGoogleanalytics,
      brandColor: '#E37400',
      bgAccent: '#FEF4E8'
    },
    {
      name: 'WordPress & Elementor',
      description: 'No-Code Web Architecture',
      primaryIcon: SiWordpress,
      secondaryIcon: SiElementor,
      brandColor: '#21759B',
      secondaryBrandColor: '#92003B',
      bgAccent: '#E9F3F8',
      secondaryBgAccent: '#FDF2F8'
    },
    {
      name: 'Midjourney & DALL-E',
      description: 'AI Visual & Banner Generation',
      primaryIcon: SiMidjourney,
      secondaryIcon: SiDalle,
      brandColor: '#2563EB',
      secondaryBrandColor: '#FF1744',
      bgAccent: '#EFF6FF',
      secondaryBgAccent: '#FFF5F7'
    },
    {
      name: 'Semrush & Ahrefs',
      description: 'SEO Keyword Research',
      primaryIcon: SiSemrush,
      secondaryIcon: SiAhrefs,
      brandColor: '#FF642D',
      secondaryBrandColor: '#0052CC',
      bgAccent: '#FFF0EB',
      secondaryBgAccent: '#EFF6FF'
    },
    {
      name: 'CapCut & AI Video Tools',
      description: 'Reels & Video Ad Editing',
      primaryIcon: SiCapcut,
      brandColor: '#111111',
      bgAccent: '#F3F4F6'
    },
    {
      name: 'Google Tag Manager',
      description: 'Tracking & Pixel Setup',
      primaryIcon: SiGoogletagmanager,
      brandColor: '#246FDB',
      bgAccent: '#E8F1FD'
    },
    {
      name: 'Mailchimp Automation',
      description: 'Email Funnels & CRM',
      primaryIcon: SiMailchimp,
      brandColor: '#FFE01B',
      bgAccent: '#FFFDE6'
    },
    {
      name: 'Google Business Profile',
      description: 'Local SEO & Google Business',
      primaryIcon: SiGooglemybusiness,
      brandColor: '#4285F4',
      bgAccent: '#EBF3FE'
    },
    {
      name: 'Claude & Copy.ai',
      description: 'Ad Copy & Content Prompts',
      primaryIcon: SiClaude,
      secondaryIcon: SiCopydotai,
      brandColor: '#D97706',
      secondaryBrandColor: '#2563EB',
      bgAccent: '#FEF3C7',
      secondaryBgAccent: '#EFF6FF'
    },
    {
      name: 'Hostinger & cPanel',
      description: 'Domain & Web Hosting',
      primaryIcon: SiHostinger,
      secondaryIcon: SiCpanel,
      brandColor: '#673DE6',
      secondaryBrandColor: '#FF6C2C',
      bgAccent: '#F0EAFF',
      secondaryBgAccent: '#FFF7ED'
    }
  ];

  return (
    <section id="tools" className="py-20 bg-white border-t border-gray-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-[#FF1744] text-xs font-heading font-bold uppercase tracking-widest bg-[#FFF5F7] border border-[#FF5C7A]/30 px-3.5 py-1.5 rounded-full shadow-xs inline-block">
            Software & Stack
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#111111] tracking-tight">
            Tools You'll Work With
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280] font-normal leading-relaxed">
            Get hands-on experience with the platforms and tools used across modern digital marketing workflows.
          </p>
        </header>

        {/* Tools Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {toolsData.map((tool, idx) => (
            <ToolCard key={idx} tool={tool} />
          ))}
        </div>

        {/* SEO Keyword Highlight Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2.5 bg-[#FFF5F7] border border-[#FF5C7A]/30 rounded-2xl px-6 py-4 shadow-xs text-xs sm:text-sm font-heading font-semibold text-[#111111] max-w-3xl mx-auto">
            <span className="bg-[#FF1744] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              +20 More Tools
            </span>
            <span className="text-[#374151]">
              Plus 20+ specialized AI tools, marketing automation engines, SEO research platforms & analytics software covered in live practical sessions.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
