import React, { useState } from 'react';
import SEO from '../components/SEO';
import { getCourseSchema, getBreadcrumbSchema } from '../data/schemaData';
import { Download, Search, CheckCircle, Target, Globe, BookOpen, Layers, Sparkles, Plus, Minus, FileText, ArrowRight } from 'lucide-react';
import { syllabusModules, specializations, courseHighlights } from '../data/syllabusData';
import { TextMaskReveal, FadeUp, StaggerContainer, StaggerItem } from '../components/animations/MotionComponents';

export default function SyllabusPage({ onOpenDemo }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedModules, setExpandedModules] = useState([]);

  // Extract unique categories
  const categories = ['All', ...new Set(syllabusModules.map(m => m.category))];

  const syllabusSchemas = [
    getCourseSchema(),
    getBreadcrumbSchema([
      { name: 'Courses', url: '/courses' },
      { name: 'Syllabus', url: '/courses/digital-marketing/syllabus' }
    ])
  ];

  // Filter modules based on search and category
  const filteredModules = syllabusModules.filter(module => {
    const matchesCategory = activeCategory === 'All' || module.category === activeCategory;
    const matchesSearch = 
      module.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      module.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const toggleModule = (id) => {
    if (expandedModules.includes(id)) {
      setExpandedModules(expandedModules.filter(mId => mId !== id));
    } else {
      setExpandedModules([...expandedModules, id]);
    }
  };

  const expandAll = () => {
    setExpandedModules(filteredModules.map(m => m.id));
  };

  const collapseAll = () => {
    setExpandedModules([]);
  };

  return (
    <>
      <SEO pageKey="syllabus" schema={syllabusSchemas} />
      <div className="bg-[#FFF5F7] min-h-screen font-sans pb-20">
        
        {/* HERO SECTION */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-50 to-transparent opacity-50 pointer-events-none" />
          
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <FadeUp delay={0.1}>
              <span className="inline-block py-1.5 px-4 rounded-full bg-red-100 text-cta-red text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 shadow-sm border border-red-200">
                Beginner to Advance Growth Program
              </span>
            </FadeUp>
            
            <TextMaskReveal as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111111] mb-6 tracking-tight leading-tight font-heading">
              Master Digital Marketing <br className="hidden sm:block"/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cta-red to-pink-600">from Beginner to Advanced</span>
            </TextMaskReveal>
            
            <FadeUp delay={0.2} className="max-w-3xl mx-auto">
              <p className="text-base sm:text-lg text-gray-600 mb-10 leading-relaxed">
                An implementation-based Digital Marketing Growth Program covering SEO, Meta Ads, Google Ads, Social Media, Analytics, AI, Content Marketing, Freelancing and more.
              </p>
            </FadeUp>

            {/* Course Metadata Cards */}
            <FadeUp delay={0.3}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                  <div className="text-2xl font-black text-cta-red mb-1">2.5</div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wide">Months</div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                  <div className="text-2xl font-black text-cta-red mb-1">120+</div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wide">Hours</div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                  <div className="text-2xl font-black text-cta-red mb-1">50+</div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wide">Real-Time Projects</div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                  <div className="text-2xl font-black text-cta-red mb-1">35+</div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wide">Core Modules</div>
                </div>
              </div>
            </FadeUp>

            {/* CTA Buttons */}
            <FadeUp delay={0.4} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => {
                  document.getElementById('curriculum-section').scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-4 bg-cta-red text-white font-bold rounded-xl shadow-saas hover:opacity-90 transition-all text-sm flex items-center justify-center active:scale-95 cursor-pointer"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Full Syllabus
              </button>
              
              <button 
                onClick={() => onOpenDemo('brochure')}
                className="w-full sm:w-auto px-8 py-4 bg-white text-[#111111] border border-gray-200 font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-all text-sm flex items-center justify-center active:scale-95 cursor-pointer"
              >
                <Download className="w-5 h-5 mr-2 text-cta-red" />
                Download Syllabus PDF
              </button>
            </FadeUp>
          </div>
        </section>

        {/* COURSE HIGHLIGHTS */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] font-heading mb-4">Program Highlights</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {courseHighlights.map((highlight) => (
              <div key={highlight.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-3 hover:shadow-md transition-shadow">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-sm font-semibold text-gray-800 leading-snug">{highlight.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 3 SPECIALIZATIONS */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#111827] text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading mb-4 text-white">3 Core Specializations</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Master the most in-demand digital marketing skills to accelerate your career or business growth.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {specializations.map((spec) => (
                <div key={spec.id} className="bg-gray-800 border border-gray-700 p-8 rounded-2xl relative overflow-hidden group hover:border-cta-red/50 transition-all">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cta-red/20 to-transparent rounded-bl-full opacity-50" />
                  
                  <div className="w-12 h-12 bg-gray-700/50 rounded-xl flex items-center justify-center mb-6 text-cta-red">
                    {spec.icon === 'meta' && <Layers className="w-6 h-6" />}
                    {spec.icon === 'google' && <Target className="w-6 h-6" />}
                    {spec.icon === 'seo' && <Globe className="w-6 h-6" />}
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading mb-3 text-white tracking-wide">{spec.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{spec.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPLETE CURRICULUM */}
        <section id="curriculum-section" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] font-heading mb-4">Complete Curriculum</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our 35+ Core Modules & Additional Learning Sessions designed to make you an industry-ready expert.</p>
          </div>

          {/* Search & Filter */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 mb-8 sticky top-16 sm:top-20 z-40">
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search syllabus topics (e.g. SEO, AI, Google Ads)..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cta-red/20 focus:border-cta-red transition-all text-sm text-gray-800"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex space-x-2 overflow-x-auto pb-1 md:pb-0 hide-scrollbar">
                {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCategory(cat)}
                    className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeCategory === cat ? 'bg-cta-red text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Expand/Collapse Controls */}
          <div className="flex justify-end space-x-4 mb-4">
            <button onClick={expandAll} className="text-xs font-bold text-cta-red hover:underline focus:outline-none">Expand All</button>
            <button onClick={collapseAll} className="text-xs font-bold text-gray-500 hover:underline focus:outline-none">Collapse All</button>
          </div>

          {/* Accordion */}
          <div className="space-y-3 sm:space-y-4">
            {filteredModules.length > 0 ? (
              filteredModules.map((module) => {
                const isExpanded = expandedModules.includes(module.id);
                return (
                  <div key={module.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <button 
                      onClick={() => toggleModule(module.id)}
                      className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors focus:outline-none"
                    >
                      <div className="flex items-start space-x-4 pr-4">
                        <div className="hidden sm:flex flex-shrink-0 w-10 h-10 bg-red-50 text-cta-red font-bold font-heading rounded-lg items-center justify-center">
                          {module.id}
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                            {module.category}
                          </div>
                          <h3 className="text-sm sm:text-base font-bold text-[#111111] leading-snug font-heading">
                            Module {module.id}: {module.title}
                          </h3>
                        </div>
                      </div>
                      <div className="flex-shrink-0 text-gray-400 p-1 bg-gray-100 rounded-full">
                        {isExpanded ? <Minus className="w-4 h-4 text-cta-red" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>
                    
                    {isExpanded && (
                      <div className="px-4 sm:px-6 pb-5 pt-1 border-t border-gray-100 bg-gray-50/50">
                        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mt-4">
                          {module.topics.map((topic, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <Sparkles className="w-3.5 h-3.5 text-cta-red flex-shrink-0 mt-0.5 opacity-70" />
                              <span className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border border-gray-200 border-dashed">
                <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-800">No modules found</h3>
                <p className="text-gray-500 text-sm">Try adjusting your search or category filter.</p>
                <button 
                  onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                  className="mt-4 px-4 py-2 bg-gray-100 text-gray-700 font-bold text-xs rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* PDF CTA SECTION */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-cta-red text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/public/pattern.svg')] opacity-10" />
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading mb-4">Want the Complete Curriculum?</h2>
            <p className="text-red-100 text-base sm:text-lg mb-10 max-w-2xl mx-auto">
              Download the official DigiSevaks Academy Digital Marketing syllabus and explore the complete course structure offline.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => onOpenDemo('brochure')}
                className="w-full sm:w-auto px-8 py-4 bg-white text-cta-red font-bold rounded-xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center text-sm"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Syllabus PDF
              </button>
              
              <button 
                onClick={() => onOpenDemo('demo')}
                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center text-sm"
              >
                Enquire Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
