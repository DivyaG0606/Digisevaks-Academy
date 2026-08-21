import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getCourseSchema, getBreadcrumbSchema } from '../data/schemaData';
import { 
  Check, 
  ChevronDown, 
  Sparkles, 
  Download, 
  Layers, 
  Bot, 
  Megaphone, 
  Search, 
  Globe, 
  BarChart3, 
  Briefcase,
  BookOpen
} from 'lucide-react';
import { TextMaskReveal, FadeUp, StaggerContainer, StaggerItem } from '../components/animations/MotionComponents';

export default function CoursesPage({ onOpenDemo }) {
  const [openIdx, setOpenIdx] = useState(null);

  const courseSchemas = [getCourseSchema(), getBreadcrumbSchema([{ name: 'Courses', url: '/courses' }])];

  const modules = [
    {
      title: 'Module 1: Digital Marketing Foundations & Strategy',
      icon: Layers,
      topics: [
        'Fundamentals of Digital vs Traditional Marketing in India',
        'Customer Persona & Target Audience Mapping',
        'Marketing Funnels: Top, Middle & Bottom Funnel Strategies',
        'Competitor Analysis & Digital Footprint Audit'
      ]
    },
    {
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
      title: 'Module 3: Social Media Marketing & Organic Growth',
      icon: Megaphone,
      topics: [
        'Social Media Platform Algorithms & Growth Hacks',
        'Content Calendar Creation & Viral Hooks',
        'Social Media Audit & Organic Reach Optimization',
        'Community Building & Engagement Strategies'
      ]
    },
    {
      title: 'Module 4: Meta Ads (Facebook & Instagram Paid Marketing)',
      icon: Megaphone,
      topics: [
        'Meta Business Suite & Ads Manager Architecture',
        'Targeting Demographics, Interests & Behaviors in India',
        'Custom Audiences, Lookalike Audiences & Meta Pixel Setup',
        'Scaling Lead Gen & E-commerce Sales Campaigns'
      ]
    },
    {
      title: 'Module 5: WordPress No-Code Website Development',
      icon: Globe,
      topics: [
        'Domain, Hosting Setup & SSL Configuration',
        'WordPress Theme Customization & Elementor Builder',
        'Landing Page Design for High Lead Conversions',
        'E-commerce WooCommerce Integration & Payment Gateways'
      ]
    },
    {
      title: 'Module 6: Search Engine Optimization (SEO Mastery)',
      icon: Search,
      topics: [
        'Keyword Research & Intent Mapping (Semrush & Ahrefs)',
        'On-Page SEO: Headings, Meta Tags, Schema & Content Optimization',
        'Technical SEO: Site Speed, Sitemap, Core Web Vitals',
        'Off-Page SEO: High-Authority Link Building & Local SEO Pune'
      ]
    },
    {
      title: 'Module 7: Google Ads (Search, Display, YouTube PPC)',
      icon: BarChart3,
      topics: [
        'Google Ads Account Structure & Campaign Architecture',
        'PPC Keyword Match Types & Negative Keywords',
        'Creating High Quality Score Search Ads & YouTube Ads',
        'Conversion Tracking & Smart Bidding Strategies'
      ]
    },
    {
      title: 'Module 8: GA4, GTM & Performance Analytics',
      icon: BarChart3,
      topics: [
        'Google Analytics 4 (GA4) Custom Dashboards & Reports',
        'Google Tag Manager (GTM) Event & Conversion Tracking',
        'E-commerce Purchase & Funnel Attribution Modeling',
        'Data-Driven Campaign Optimization'
      ]
    },
    {
      title: 'Module 9: AI Prompt Engineering & Automation Tools',
      icon: Bot,
      topics: [
        'ChatGPT Advanced Prompting for Copywriting & Marketing',
        'AI Graphic Generation (Midjourney & Canva AI)',
        'Automating Email & Lead Workflows with AI Tools',
        'Building AI Marketing Agents & Chatbots'
      ]
    },
    {
      title: 'Module 10: Agency Setup, Freelancing & Career Placement',
      icon: Briefcase,
      topics: [
        'High-Ticket Client Acquisition & Pitching Strategy',
        'Pricing Agency Packages & Client Retainers',
        'Resume Preparation, Portfolio & LinkedIn Optimization',
        'Mock Interviews & 100% Placement Support in Pune'
      ]
    }
  ];

  return (
    <div className="py-8 sm:py-16 bg-[#FFF5F7] font-sans animate-fade-in">
      <SEO pageKey="courses" schema={courseSchemas} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2">
          <span className="bg-white text-[#FF1744] border border-[#FF5C7A]/30 text-[10px] sm:text-xs font-heading font-bold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full uppercase tracking-wider shadow-xs inline-block">
            SEO Optimized Syllabus
          </span>

          <TextMaskReveal
            as="h1"
            className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight"
          >
            AI Digital Marketing Course Modules in Pune
          </TextMaskReveal>

          <FadeUp delay={0.1}>
            <p className="text-xs sm:text-base text-[#6B7280] leading-relaxed">
              Master 10+ industry-aligned modules covering Performance Marketing, Meta Ads, Google Ads, SEO, WordPress, GA4 Analytics, and 50+ AI tools with 100% practical training.
            </p>
          </FadeUp>
        </div>

        {/* Modules Accordion List */}
        <StaggerContainer staggerDelay={0.05} className="max-w-4xl mx-auto space-y-2.5 sm:space-y-4">
          {modules.map((mod, idx) => {
            const Icon = mod.icon;
            const isOpen = openIdx === idx;
            return (
              <StaggerItem key={idx}>
                <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-xs overflow-hidden transition-all">
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full p-3.5 sm:p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 pr-2">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FFF5F7] text-[#FF1744] border border-[#FF5C7A]/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                      </div>
                      <span className="font-heading text-xs sm:text-base font-bold text-[#111111] leading-snug">
                        {mod.title}
                      </span>
                    </div>

                    <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#FF1744]' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-3.5 pb-4 pt-2 sm:px-6 sm:pb-6 border-t border-gray-100 bg-gray-50/50 animate-fade-in">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mt-1 sm:mt-3">
                        {mod.topics.map((t, tIdx) => (
                          <div key={tIdx} className="flex items-start space-x-2 text-[11px] sm:text-xs text-[#111111] font-medium leading-snug">
                            <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{t}</span>
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

        {/* Download Syllabus PDF Button */}
        <FadeUp delay={0.2} className="mt-8 sm:mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/courses/digital-marketing/syllabus"
            className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 bg-cta-red text-white font-heading font-bold rounded-xl shadow-saas hover:opacity-95 transition-all text-xs sm:text-sm inline-flex items-center justify-center space-x-2 active:scale-95 cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>View Complete Syllabus</span>
          </Link>
          <button
            onClick={() => onOpenDemo('brochure')}
            className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 bg-white text-[#111111] border border-gray-200 font-heading font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-all text-xs sm:text-sm inline-flex items-center justify-center space-x-2 active:scale-95 cursor-pointer"
          >
            <Download className="w-4 h-4 text-cta-red" />
            <span>Download Syllabus PDF</span>
          </button>
        </FadeUp>

      </div>
    </div>
  );
}
