import React from 'react';
import { Landmark, ShoppingCart, Smartphone, Store, ShieldCheck } from 'lucide-react';
import { TextMaskReveal, FadeUp, StaggerContainer, StaggerItem } from './animations/MotionComponents';

export default function LiveProjects() {
  const projects = [
    {
      title: 'BFSI & Banking Lead Generation Campaign',
      category: 'Financial Services & Loans',
      icon: Landmark,
      color: 'bg-blue-600',
      desc: 'Practice building Meta and Google Search ad funnels for home loans, credit cards, and investment products, working within realistic cost-per-lead targets.'
    },
    {
      title: 'E-Commerce Growth & ROAS Optimization',
      category: 'Fashion & Consumer Goods',
      icon: ShoppingCart,
      color: 'bg-emerald-600',
      desc: 'Set up a WooCommerce store, configure Meta Pixel tracking, and build catalog and Google Shopping campaigns focused on return on ad spend.'
    },
    {
      title: 'App Installation & User Acquisition',
      category: 'Tech & Mobile Apps',
      icon: Smartphone,
      color: 'bg-purple-600',
      desc: 'Run app install campaigns across Google App Campaigns and Meta, and set up in-app event tracking and retention flows.'
    },
    {
      title: 'Local Business & Healthcare SEO Strategy',
      category: 'Clinics & Regional Businesses',
      icon: Store,
      color: 'bg-red-600',
      desc: 'Optimize a Google Business Profile, build local SEO citations, and manage review strategy for service-based businesses like clinics and cafes.'
    }
  ];

  return (
    <section id="projects" className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2">
          <span className="text-red-600 text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-red-100 px-3 py-1 rounded-full border border-red-200 inline-block">
            Real Experience
          </span>
          <TextMaskReveal
            as="h2"
            className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight"
          >
            Real Industry Projects & Case Studies
          </TextMaskReveal>
          <FadeUp delay={0.1}>
            <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
              Work on realistic, industry-style campaign briefs modeled on how real agencies plan for banking, e-commerce, app, and local business clients.
            </p>
          </FadeUp>
        </div>

        {/* Grid of Project Cards - Compact & Refined */}
        <StaggerContainer staggerDelay={0.08} className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5">
          {projects.map((proj, idx) => {
            const Icon = proj.icon;
            return (
              <StaggerItem key={idx}>
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${proj.color} text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}>
                        <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {proj.category}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug group-hover:text-red-600 transition-colors">
                      {proj.title}
                    </h3>

                    <p className="mt-1.5 sm:mt-2 text-slate-600 text-[11px] sm:text-xs leading-relaxed font-normal">
                      {proj.desc}
                    </p>
                  </div>

                  <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-[11px] font-bold text-slate-500">
                    <span className="flex items-center space-x-1 text-emerald-600">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Practical Case Study</span>
                    </span>
                    <span>Portfolio Ready</span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
}
