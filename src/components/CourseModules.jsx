import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Download,
  Layers,
  Bot,
  Megaphone,
  Search,
  Globe,
  BarChart3,
  Briefcase
} from 'lucide-react';
import { TextMaskReveal, FadeUp, StaggerContainer, StaggerItem } from './animations/MotionComponents';

export default function CourseModules({ onOpenDemo }) {
  const [openModule, setOpenModule] = useState(null);

  const modules = [
    {
      id: '01',
      title: 'Module 1: Digital Marketing Foundations & Strategy',
      icon: Layers,
      topics: [
        'Fundamentals of Digital vs Traditional Marketing',
        'Customer Persona & Target Audience Mapping',
        'Marketing Funnels: Top, Middle & Bottom Funnel Strategies',
        'Competitor Analysis & Digital Footprint Audit'
      ]
    },
    {
      id: '02',
      title: 'Module 2: Branding & Canva Graphic Design',
      icon: Sparkles,
      topics: [
        'Brand Identity, Color Psychology & Typography',
        'Canva Pro Masterclass for Social Creatives & Banners',
        'Designing High-Converting Ad Visuals & Carousels',
        'Creating Brand Toolkits & Visual Assets'
      ]
    },
    {
      id: '03',
      title: 'Module 3: Social Media Marketing & Content Strategy',
      icon: Megaphone,
      topics: [
        'Social Media Platform Algorithms & Growth Hacks',
        'Content Calendar Creation & Viral Hooks',
        'Social Media Audit & Organic Reach Optimization',
        'Community Building & Engagement Strategies'
      ]
    },
    {
      id: '04',
      title: 'Module 4: Meta Ads (Facebook & Instagram Paid Ads)',
      icon: Megaphone,
      topics: [
        'Meta Business Suite & Ads Manager Architecture',
        'Targeting Demographics, Interests & Behaviors',
        'Custom Audiences, Lookalike Audiences & Pixel Setup',
        'Scaling Lead Gen & E-commerce Sales Campaigns'
      ]
    },
    {
      id: '05',
      title: 'Module 5: WordPress No-Code Website Development',
      icon: Globe,
      topics: [
        'Domain, Hosting Setup & SSL Configuration',
        'WordPress Theme Customization & Elementor Builder',
        'Landing Page Design for High Conversions',
        'E-commerce WooCommerce Integration & Payment Gateways'
      ]
    },
    {
      id: '06',
      title: 'Module 6: Search Engine Optimization (SEO)',
      icon: Search,
      topics: [
        'Keyword Research & Intent Mapping (Semrush & Ahrefs)',
        'On-Page SEO: Headings, Meta Tags, Schema & Content',
        'Technical SEO: Site Speed, Sitemap, Core Web Vitals',
        'Off-Page SEO: Quality Link Building & Authority'
      ]
    },
    {
      id: '07',
      title: 'Module 7: Google Ads (Search, Display, YouTube)',
      icon: BarChart3,
      topics: [
        'Google Ads Account Structure & Campaign Types',
        'PPC Keyword Match Types & Negative Keywords',
        'Creating High Quality Score Search Ads & YouTube Ads',
        'Conversion Tracking & Smart Bidding Strategies'
      ]
    },
    {
      id: '08',
      title: 'Module 8: GA4, GTM & Analytics Mastery',
      icon: BarChart3,
      topics: [
        'Google Analytics 4 (GA4) Custom Dashboards & Reports',
        'Google Tag Manager (GTM) Event & Conversion Tracking',
        'E-commerce Purchase & Funnel Attribution Modeling',
        'Data-Driven Campaign Optimization'
      ]
    },
    {
      id: '09',
      title: 'Module 9: AI Prompt Engineering & Automation',
      icon: Bot,
      topics: [
        'ChatGPT Advanced Prompting for Copywriting & Strategy',
        'AI Graphic Generation (Midjourney & Canva AI)',
        'Automating Email & Lead Workflows with AI',
        'Building AI Marketing Agents & Chatbots'
      ]
    },
    {
      id: '10',
      title: 'Module 10: Freelancing, Agency Growth & Career Mastery',
      icon: Briefcase,
      topics: [
        'High-Ticket Client Acquisition & Cold Emailing',
        'Pricing Your Agency Packages & Proposals',
        'Resume Preparation, Portfolio & LinkedIn Optimization',
        'Mock Interviews & Guaranteed Placement Support'
      ]
    }
  ];

  return (
    <section id="modules" className="py-14 sm:py-20 bg-[#FFF0F2] font-sans border-y border-red-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2.5">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white border border-red-200 text-[#FF1744] text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest shadow-xs">
            <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF1744]" />
            <span>Comprehensive 100% Practical Curriculum</span>
          </div>

          <TextMaskReveal
            as="h2"
            className="font-heading text-2xl sm:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight"
          >
            Complete Course <span className="text-[#FF1744]">Modules</span>
          </TextMaskReveal>

          <FadeUp delay={0.1}>
            <p className="text-xs sm:text-lg text-gray-600 leading-relaxed font-normal">
              Master 10+ core modules covering strategy, paid ads, SEO, AI tools, no-code web development, and agency freelancing.
            </p>
          </FadeUp>
        </div>

        {/* Modules Accordion Grid */}
        <StaggerContainer staggerDelay={0.05} className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {modules.map((mod, idx) => {
            const Icon = mod.icon;
            const isOpen = openModule === idx;
            return (
              <StaggerItem key={idx}>
                <div className="transition-all duration-300 rounded-xl sm:rounded-2xl">
                  {/* Module Header Button */}
                  <button
                    onClick={() => setOpenModule(isOpen ? null : idx)}
                    className={`w-full p-3.5 sm:p-6 text-left flex items-center justify-between rounded-xl sm:rounded-2xl transition-all duration-300 ${isOpen
                        ? 'bg-[#FF1744] text-white shadow-xl shadow-red-600/30'
                        : 'bg-white border border-red-100/80 text-[#111111] shadow-xs hover:shadow-md hover:border-[#FF1744]/40'
                      }`}
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 pr-2">
                      <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 font-heading font-bold text-xs sm:text-sm transition-all duration-300 ${isOpen
                          ? 'bg-white text-[#FF1744] shadow-md'
                          : 'bg-red-50 text-[#FF1744] border border-red-100'
                        }`}>
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center space-x-2 mb-0.5">
                          <span className={`text-[9px] sm:text-[10px] font-heading font-extrabold uppercase px-2 py-0.5 rounded-full tracking-wider ${isOpen ? 'bg-white/20 text-white' : 'bg-red-50 text-[#FF1744]'
                            }`}>
                            Module {mod.id}
                          </span>
                        </div>
                        <span className={`text-xs sm:text-lg font-heading font-extrabold transition-colors leading-snug block truncate sm:whitespace-normal ${isOpen ? 'text-white' : 'text-[#111111]'
                          }`}>
                          {mod.title.replace(/^Module \d+:\s*/, '')}
                        </span>
                      </div>
                    </div>

                    <div className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'bg-white text-[#FF1744] rotate-180 shadow-md' : 'bg-gray-100 text-gray-500'
                      }`}>
                      <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </button>

                  {/* Expanded Unique Card Body */}
                  {isOpen && (
                    <div className="mt-2 bg-white rounded-xl sm:rounded-2xl border-2 border-[#FF1744] p-3.5 sm:p-6 shadow-lg animate-fade-in space-y-3 sm:space-y-4">

                      {/* Header outcome tag */}
                      <div className="flex items-center justify-between pb-2.5 border-b border-red-100">
                        <div className="inline-flex items-center space-x-1.5 bg-red-50 text-[#FF1744] text-[10px] sm:text-xs font-heading font-bold px-2.5 py-1 rounded-lg border border-red-100">
                          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span>Practical Agency Skills & Deliverables</span>
                        </div>
                        <span className="text-xs text-gray-400 font-medium hidden sm:inline">
                          4 Core Industry Topics
                        </span>
                      </div>

                      {/* Topic cards grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {mod.topics.map((topic, tIdx) => (
                          <div
                            key={tIdx}
                            className="bg-gray-50/80 hover:bg-[#FFF5F7] border border-gray-200/80 hover:border-red-200 p-2.5 sm:p-3.5 rounded-lg sm:rounded-xl transition-all duration-200 flex items-start space-x-2.5 group"
                          >
                            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-red-100 text-[#FF1744] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#FF1744] group-hover:text-white transition-colors duration-200">
                              <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                            </div>
                            <span className="text-[11px] sm:text-sm text-gray-800 font-semibold group-hover:text-[#111111] transition-colors leading-snug">
                              {topic}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Syllabus Download CTA */}
        <FadeUp delay={0.2} className="mt-10 sm:mt-12 text-center">
          <button
            onClick={() => onOpenDemo('brochure')}
            className="inline-flex items-center space-x-2.5 bg-[#FF1744] hover:bg-[#D50000] text-white font-heading font-bold px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl shadow-lg shadow-red-600/30 hover:shadow-red-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all text-xs sm:text-sm uppercase tracking-wide cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Detailed Syllabus PDF</span>
          </button>
        </FadeUp>

      </div>
    </section>
  );
}
