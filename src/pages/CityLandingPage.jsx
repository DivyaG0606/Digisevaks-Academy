import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getCityPageSeoConfig } from '../config/seoConfig';
import { getCourseSchema, getFaqSchema, getBreadcrumbSchema } from '../data/schemaData';
import { 
  Sparkles, CheckCircle2, Phone, Star, ShieldCheck, Award, 
  Users, Briefcase, ChevronDown, ChevronUp, MapPin, 
  ArrowRight, Send, Clock, Globe
} from 'lucide-react';
import { getCityData, allCitiesFooterList } from '../data/locationsData';
import { getCityLocalContent } from '../data/cityLocalContent';
import { syllabusModules } from '../data/syllabusData';
import { submitLead } from '../services/leadService';
import { TextMaskReveal } from '../components/animations/MotionComponents';

import NotFoundPage from './NotFoundPage';

export default function CityLandingPage({ onOpenDemo, locationSlugOverride }) {
  const params = useParams();
  const location = useLocation();

  // Extract slug from prop, params, or current URL pathname
  let extractedSlug =
    locationSlugOverride ||
    params.citySlug ||
    params.locationSlug ||
    params['*'] ||
    '';

  if (typeof extractedSlug === 'string') {
    extractedSlug = extractedSlug
      .replace(/^digital-marketing-courses?-in-/, '')
      .replace(/\/$/, '')
      .trim()
      .toLowerCase();
  }

  if (!extractedSlug) {
    const match = location.pathname.match(/\/digital-marketing-courses?-in-([^/]+)/);
    if (match?.[1]) {
      extractedSlug = match[1].toLowerCase().trim();
    }
  }

  const normalizedSlug = extractedSlug;

  // Check if slug belongs to a registered city
  const isValidCitySlug = Boolean(
    allCitiesFooterList.some((item) => {
      const routeSlug = item.route
        ?.replace(/^\/digital-marketing-courses?-in-/, '')
        .toLowerCase()
        .trim();
      return (
        routeSlug === normalizedSlug ||
        item.slug?.toLowerCase().trim() === normalizedSlug
      );
    }) || getCityData(normalizedSlug)?.slug?.toLowerCase() === normalizedSlug
  );

  // If invalid city slug, return proper NotFoundPage (404)
  if (!normalizedSlug || !isValidCitySlug) {
    return <NotFoundPage onOpenDemo={onOpenDemo} />;
  }

  const city = getCityData(normalizedSlug);

  if (!city) {
    return <NotFoundPage onOpenDemo={onOpenDemo} />;
  }

  const citySeo = getCityPageSeoConfig(city);
  const localContent = getCityLocalContent(normalizedSlug);

  const [activeTab, setActiveTab] = useState('jobseeker');
  const [openModuleId, setOpenModuleId] = useState(1);
  const [openFaqId, setOpenFaqId] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [leadForm, setLeadForm] = useState({
    name: '',
    phone: '',
    email: '',
    courseType: 'Classroom',
    coursePurpose: 'Job'
  });

  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  useEffect(() => {
    if (!city.reviews || city.reviews.length === 0) return;
    const interval = setInterval(() => {
      setActiveReviewIdx((prev) => (prev + 1) % city.reviews.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [city.reviews]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, normalizedSlug]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitLead({
        name: leadForm.name,
        phone: leadForm.phone,
        email: leadForm.email,
        course: `Digital Marketing Course (${city.name})`,
        source: `City Page (${city.slug})`,
        notes: `Course Type: ${leadForm.courseType}, Purpose: ${leadForm.coursePurpose}`
      });
      setFormSubmitted(true);
    } catch (err) {
      console.error('Lead submission failed:', err);
      alert('Unable to submit your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const defaultFaqs = [
    {
      id: 1,
      q: `Which digital marketing course is best in ${city.name}?`,
      a: `Master in AI Powered & Performance Driven Practical Digital Marketing Course is the best course provided by DIGISEVAKS Academy in ${city.name}. It is India's 1st 100% practical Digital Marketing Course providing agency-driven live campaign training and 100% placement assistance.`
    },
    {
      id: 2,
      q: `Can I do Digital Marketing course after 12th or Graduation in ${city.name}?`,
      a: `Yes! Graduates, 12th pass students, diploma holders, business owners, and housewives can enroll. No coding or prior experience is required.`
    },
    {
      id: 3,
      q: `What is the average salary package after completing the Digital Marketing course in ${city.name}?`,
      a: `Freshers can expect starting packages between ₹2.5 LPA to ₹5 LPA, while candidates with experience or performance marketing specialization earn up to ₹8 LPA+.`
    },
    {
      id: 4,
      q: `Do you provide internship & placement support in ${city.name}?`,
      a: `Yes, we offer a 3-Month Guaranteed Internship letter along with 100% Placement Assistance including HR mock interviews, resume optimization, and direct campus recruitment.`
    }
  ];

  const faqs = localContent && localContent.localFaqs 
    ? localContent.localFaqs.map((item, idx) => ({ id: idx + 1, q: item.q, a: item.a }))
    : defaultFaqs;

  const citySchemas = [
    getCourseSchema(),
    getFaqSchema(faqs),
    getBreadcrumbSchema([{ name: city.name, url: citySeo.canonical }])
  ];

  return (
    <div className="font-sans bg-white text-[#111111] animate-fade-in">
      <SEO
        title={citySeo.title}
        description={citySeo.description}
        canonical={citySeo.canonical}
        robots={citySeo.robots}
        keywords={citySeo.keywords}
        schema={citySchemas}
      />
      
      {/* ---------------- 1. HERO SECTION (Dark Navy / Purple Banner) ---------------- */}
      <section className="bg-[#111827] text-white pt-8 pb-14 sm:py-16 relative overflow-hidden font-sans">
        
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FF1744]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#D50032]/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Title & Bullet Points */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FF1744]/20 border border-[#FF1744]/40 text-[#FF5C7A] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#FF1744]" />
                <span>{citySeo.content?.badgeText || (city.physicalBranch ? "Official DIGISEVAKS Campus" : "Live Interactive Online Training")}</span>
              </div>

              <TextMaskReveal
                as="h1"
                className="font-heading text-3xl sm:text-5xl font-black leading-tight tracking-tight text-white"
              >
                {citySeo.content?.heroHeading || city.fullTitle}
              </TextMaskReveal>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
                &ldquo;{citySeo.content?.heroSubtitle || city.heroSubtitle}&rdquo;
              </p>

              <div className="p-3.5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-xs sm:text-sm text-[#FF5C7A] font-semibold flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-[#FF1744] flex-shrink-0" />
                <span>&ldquo;Enough With Theory, It&apos;s Time To Do Hands-On &amp; Practical Implementation&rdquo;</span>
              </div>

              {/* Bullet Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs sm:text-sm font-semibold text-gray-200">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF1744] flex-shrink-0" />
                  <span>India's No. 1 Top Rated Institute</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF1744] flex-shrink-0" />
                  <span>7000+ Placement Records</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF1744] flex-shrink-0" />
                  <span>Dedicated Technical Support Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF1744] flex-shrink-0" />
                  <span>100% Practical Implementation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF1744] flex-shrink-0" />
                  <span>Agency Driven Institute</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF1744] flex-shrink-0" />
                  <span>8+ Years Experienced Faculty</span>
                </div>
              </div>

              {/* Rating Badge */}
              <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-bold text-white">
                  Rating {city.rating} By <strong className="text-[#FF5C7A]">{city.studentsCount} Students</strong>
                </span>
              </div>

            </div>

            {/* Right Column: Lead Capture Card */}
            <div className="lg:col-span-5">
              <div className="bg-white text-[#111111] rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF1744] to-[#D50032]" />
                
                <h3 className="font-heading text-xl font-extrabold text-[#111111] text-center mb-1">
                  Fill The Form & Get Free Brochure
                </h3>
                <p className="text-xs text-center text-gray-500 mb-6">
                  {city.phone1} / {city.phone2}
                </p>

                {formSubmitted ? (
                  <div className="text-center py-8 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-lg text-gray-900">Brochure Request Received!</h4>
                    <p className="text-xs text-gray-600">
                      Our admissions counselor for {city.name} will call you back within 15 minutes.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-[#FF1744] font-bold underline cursor-pointer"
                    >
                      Submit Another Query
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Enter Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={leadForm.name}
                        onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 focus:outline-none focus:border-[#FF1744]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Enter Your Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={leadForm.phone}
                        onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 focus:outline-none focus:border-[#FF1744]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Enter Your Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@gmail.com"
                        value={leadForm.email}
                        onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 focus:outline-none focus:border-[#FF1744]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Course Type</label>
                        <select
                          value={leadForm.courseType}
                          onChange={(e) => setLeadForm({ ...leadForm, courseType: e.target.value })}
                          className="w-full px-2.5 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 focus:outline-none focus:border-[#FF1744]"
                        >
                          <option value="Classroom">Classroom</option>
                          <option value="Online Live">Online Live</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Purpose</label>
                        <select
                          value={leadForm.coursePurpose}
                          onChange={(e) => setLeadForm({ ...leadForm, coursePurpose: e.target.value })}
                          className="w-full px-2.5 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 focus:outline-none focus:border-[#FF1744]"
                        >
                          <option value="Job">Job Seeker</option>
                          <option value="Business">Business</option>
                          <option value="Freelance">Freelance</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-cta-red text-white font-heading font-extrabold text-xs sm:text-sm rounded-xl shadow-saas hover:opacity-95 transition-all flex items-center justify-center space-x-2 cursor-pointer active:scale-95 disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Sending Request...' : 'Get Course Brochure & Demo'}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* ---------------- 2. YELLOW HIGHLIGHT METRICS BAR ---------------- */}
      <section className="bg-[#FFCC00] text-[#111111] py-4 px-4 shadow-md font-sans border-y border-amber-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-center sm:text-left">
          
          <div className="flex items-center justify-center space-x-3 w-full sm:w-auto">
            <div className="w-10 h-10 rounded-full bg-[#111111] text-amber-400 flex items-center justify-center font-black text-sm">
              20K+
            </div>
            <div>
              <div className="font-extrabold text-sm">{city.studentsCount} Candidates Trained</div>
              <div className="text-[11px] text-gray-800 font-medium">Across India & Overseas</div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3 w-full sm:w-auto">
            <div className="w-10 h-10 rounded-full bg-[#FF1744] text-white flex items-center justify-center font-black text-sm">
              100%
            </div>
            <div>
              <div className="font-extrabold text-sm">100% Placement Assistance</div>
              <div className="text-[11px] text-gray-800 font-medium">Guaranteed HR Interviews</div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3 w-full sm:w-auto">
            <div className="w-10 h-10 rounded-full bg-[#111111] text-amber-400 flex items-center justify-center font-black text-sm">
              LIVE
            </div>
            <div>
              <div className="font-extrabold text-sm">100% Practical Implementation</div>
              <div className="text-[11px] text-gray-800 font-medium">Real Money Ad Campaigns</div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2 text-xs font-bold bg-[#111111] text-white px-4 py-2 rounded-xl w-full sm:w-auto">
            <Phone className="w-4 h-4 text-[#FF1744]" />
            <span>Call: {city.phone1} / {city.phone2}</span>
          </div>

        </div>
      </section>

      {/* ---------------- 3. AI POWERED OVERVIEW SECTION ---------------- */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-[#FF1744] font-bold text-xs uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100">
              AI POWERED & PERFORMANCE DRIVEN
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#111111]">
              Practical Digital Marketing Courses In {city.name}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              While focusing on providing critical practical knowledge with the hashtag <strong className="text-[#FF1744]">#SayNoToTheory</strong>, DIGISEVAKS Academy is now delivering industry-leading digital marketing training in {city.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <p>
                Get trained from India's top-ranked practical Digital Marketing training institute. Our course syllabus covers globally recognized <strong>50+ modules of Digital Marketing</strong> powered by generative AI tools like ChatGPT, Claude, Canva Pro AI, Meta Business Suite, and Google Analytics (GA4).
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 bg-gray-50 p-3.5 rounded-2xl border border-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-[#FF1744] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#111111]">Free Sub-Domain & Hosting:</strong> Each student is offered dedicated domain hosting to build live websites using WordPress & Elementor.
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-gray-50 p-3.5 rounded-2xl border border-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-[#FF1744] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#111111]">Award-Winning LMS Portal:</strong> Access placement notifications, training videos, study material, 60+ practical assignments, and technical quizzes 24/7.
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-gray-50 p-3.5 rounded-2xl border border-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-[#FF1744] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#111111]">Resume & HR Mock Preparation:</strong> 100% Placement assistance with direct hiring drives from 600+ partner agencies.
                  </div>
                </div>
              </div>
            </div>

            {/* Award Badge & Feature Video Mockup */}
            <div className="bg-gradient-to-br from-red-50 via-white to-red-50 p-6 sm:p-8 rounded-3xl border border-red-100 shadow-xl space-y-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#FF1744] text-white flex items-center justify-center mx-auto shadow-md">
                <Award className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="font-heading text-xl font-bold text-[#111111]">
                  Award-Winning Digital Marketing Institute
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Proud winner of the <strong>Pride of Maharashtra Awards 2026</strong> for Outstanding Digital Marketing Training Institute of the Year.
                </p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm text-left">
                <div className="text-xs font-bold text-[#FF1744] uppercase tracking-wider mb-1">
                  Location Address ({city.name})
                </div>
                <div className="text-xs text-gray-800 font-semibold leading-snug">
                  {city.address}
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenDemo?.('demo')}
                className="w-full py-3 bg-[#111827] hover:bg-[#1f2937] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
              >
                Book Free Demo Lecture at {city.name} Branch
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------- 3B. UNIQUE LOCATION INSIGHTS & INDUSTRY CONTEXT ---------------- */}
      {localContent && (
        <section className="py-12 sm:py-16 bg-slate-900 text-white font-sans">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[#FF1744] font-bold text-xs uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                  LOCAL INDUSTRY DEMAND ({localContent.city})
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                  Why Learn Digital Marketing in {localContent.city}?
                </h2>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {localContent.whyLearn}
                </p>

                {/* Local Connectivity Info */}
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-2">
                  <div className="text-xs font-bold text-[#FF5C7A] uppercase tracking-wider flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-[#FF1744]" />
                    <span>Campus Transit & Connectivity</span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {localContent.connectivity}
                  </p>
                </div>
              </div>

              {/* Local Industries & Salary Packages */}
              <div className="lg:col-span-5 bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 space-y-6">
                <div>
                  <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-3">
                    Top Hiring Industries in {city.name}
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {localContent.localIndustries?.map((ind, idx) => (
                      <div key={idx} className="flex items-center space-x-2.5 bg-white/5 p-2.5 rounded-xl text-xs text-gray-200 border border-white/5">
                        <CheckCircle2 className="w-4 h-4 text-[#FF1744] flex-shrink-0" />
                        <span>{ind}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-3">
                    Local Role Packages & Hiring Types
                  </h3>
                  <div className="space-y-2">
                    {localContent.careerOpportunities?.map((opp, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2.5 bg-white/5 rounded-xl text-xs border border-white/5">
                        <div>
                          <div className="font-bold text-white">{opp.role}</div>
                          <div className="text-[10px] text-gray-400">{opp.hiringType}</div>
                        </div>
                        <div className="font-extrabold text-[#FF5C7A] text-xs">{opp.avgSalary}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Local Batch Timings */}
            {localContent.batchInfo && (
              <div className="p-4 bg-[#FF1744]/10 rounded-2xl border border-[#FF1744]/30 text-xs text-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-[#FF1744] flex-shrink-0" />
                  <span><strong className="text-white">Local Batch Schedule:</strong> {localContent.batchInfo}</span>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenDemo?.('demo')}
                  className="px-4 py-2 bg-[#FF1744] hover:bg-[#D50032] text-white text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap"
                >
                  Reserve Batch Seat
                </button>
              </div>
            )}

          </div>
        </section>
      )}

      {/* ---------------- 5. TARGET AUDIENCE TABS ---------------- */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#111111]">
              Practical Digital Marketing Training For Everyone in {city.name}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Tailored learning tracks designed to meet individual career & business objectives.
            </p>
          </div>

          {/* Tab Selector Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {[
              { id: 'jobseeker', label: 'Job Seekers', icon: Briefcase },
              { id: 'professional', label: 'Working Professionals', icon: Users },
              { id: 'business', label: 'Business Owners', icon: Globe },
              { id: 'freelancer', label: 'Freelancers', icon: Globe }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#FF1744] text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Box */}
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-lg">
            {activeTab === 'jobseeker' && (
              <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
                <h3 className="font-heading text-xl font-bold text-[#111111]">
                  Job Seekers & Fresh Graduates in {city.name}
                </h3>
                <p>
                  The job market is shifting rapidly. Today, digital marketing skills are among the most demanded capabilities in India with over 1.5 lakh job vacancies created annually. Our course in {city.name} prepares you with hands-on projects, portfolio development, mock interviews, and guaranteed job placement calls.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                  <div className="bg-red-50 p-3.5 rounded-xl text-xs font-bold text-[#FF1744]">
                    ✓ 100% Job Placement Assistance
                  </div>
                  <div className="bg-red-50 p-3.5 rounded-xl text-xs font-bold text-[#FF1744]">
                    ✓ Live HR Mock Interviews
                  </div>
                  <div className="bg-red-50 p-3.5 rounded-xl text-xs font-bold text-[#FF1744]">
                    ✓ 3-Month Internship Certificate
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'professional' && (
              <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
                <h3 className="font-heading text-xl font-bold text-[#111111]">
                  Working Professionals & Career Changers
                </h3>
                <p>
                  Looking for a salary hike or switching from traditional roles to performance marketing? Learn high-paying skills in Meta Ads, Google PPC Ads, Google Analytics (GA4), and SEO automation to double your career growth.
                </p>
              </div>
            )}

            {activeTab === 'business' && (
              <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
                <h3 className="font-heading text-xl font-bold text-[#111111]">
                  Business Owners & Entrepreneurs in {city.name}
                </h3>
                <p>
                  Stop depending entirely on agencies! Learn how to generate high-quality leads, setup Facebook & Google ad campaigns, optimize conversion rates, and build a strong online brand identity for your business.
                </p>
              </div>
            )}

            {activeTab === 'freelancer' && (
              <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
                <h3 className="font-heading text-xl font-bold text-[#111111]">
                  Freelancers & Remote Workers
                </h3>
                <p>
                  Learn how to pitch international clients, create freelancing packages, deliver SEO/SMM services, and earn in USD from the comfort of your home in {city.name}.
                </p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ---------------- 6. UNIQUE TRAINING METHODOLOGY (3 Cards) ---------------- */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-[#FF1744] font-bold text-xs uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100">
              OUR METHODOLOGY
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#111111]">
              Unique Training Methodology at DIGISEVAKS Academy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#FF1744] flex items-center justify-center font-bold text-lg">
                01
              </div>
              <h3 className="font-heading text-lg font-bold text-[#111111]">
                In-Class Practical Implementation Training
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Working on real ad campaigns with actual budget allocation during class. Learn how to plan, execute, and optimize live digital marketing accounts.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#FF1744] flex items-center justify-center font-bold text-lg">
                02
              </div>
              <h3 className="font-heading text-lg font-bold text-[#111111]">
                Case Study & Assignments Based Learning
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Over 60+ industry case studies and practical assignments evaluated directly by senior digital marketing managers with personalized feedback.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#FF1744] flex items-center justify-center font-bold text-lg">
                03
              </div>
              <h3 className="font-heading text-lg font-bold text-[#111111]">
                Portfolio Creation & HR Evaluation
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Build an impressive live website, campaign reports, and portfolio to showcase to hiring managers and secure top salary packages.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ---------------- 7. COMPLETE 50+ MODULES SYLLABUS ACCORDION ---------------- */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-[#FF1744] text-xs font-bold uppercase tracking-widest">
              UPDATED 2026 CURRICULUM
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#111111]">
              Digital Marketing Courses In {city.name} Syllabus Details
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              50+ Globally Recognized Advanced Modules with AI Tools Mastery
            </p>
          </div>

          {/* Module Accordions */}
          <div className="space-y-3">
            {syllabusModules.slice(0, 15).map((mod) => {
              const isOpen = openModuleId === mod.id;
              return (
                <div
                  key={mod.id}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setOpenModuleId(isOpen ? null : mod.id)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-red-50/40 transition-colors focus:outline-none"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="w-7 h-7 rounded-lg bg-red-50 text-[#FF1744] flex items-center justify-center text-xs font-bold">
                        {mod.id}
                      </span>
                      <span className="font-heading text-sm font-bold text-[#111111]">
                        {mod.title}
                      </span>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#FF1744]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs text-gray-600 border-t border-gray-100 bg-gray-50/50">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                        {mod.topics.map((t, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF1744]" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-6">
            <Link
              to="/courses/digital-marketing/syllabus"
              className="inline-flex items-center space-x-2 text-xs font-bold text-[#FF1744] hover:underline"
            >
              <span>View Full 50+ Modules Syllabus Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ---------------- 9. STUDENT REVIEWS / TESTIMONIALS ---------------- */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#111111]">
              What Our Students Say About DIGISEVAKS Academy
            </h2>
          </div>

          {/* MOBILE VIEW: Auto-rotating Single Card Carousel (Changes every 2.5 seconds) */}
          <div className="block md:hidden max-w-md mx-auto">
            {city.reviews && city.reviews.length > 0 && (
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-md space-y-3 min-h-[220px] flex flex-col justify-between transition-all duration-300">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-1 text-amber-400">
                      {[...Array(city.reviews[activeReviewIdx % city.reviews.length]?.stars || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed italic">
                      &ldquo;{city.reviews[activeReviewIdx % city.reviews.length]?.text}&rdquo;
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-xs text-[#111111]">{city.reviews[activeReviewIdx % city.reviews.length]?.name}</div>
                      <div className="text-[11px] text-[#FF1744] font-medium">{city.reviews[activeReviewIdx % city.reviews.length]?.role}</div>
                    </div>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
                      {(activeReviewIdx % city.reviews.length) + 1} / {city.reviews.length}
                    </span>
                  </div>
                </div>

                {/* Carousel Dot Indicators */}
                <div className="flex items-center justify-center space-x-2 pt-1">
                  {city.reviews.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setActiveReviewIdx(dotIdx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        (activeReviewIdx % city.reviews.length) === dotIdx ? 'w-6 bg-[#FF1744]' : 'w-2 bg-gray-300'
                      }`}
                      aria-label={`Go to review ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* DESKTOP VIEW: Clean 3-Column Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
            {city.reviews.map((rev, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-200 shadow-md space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed italic">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100">
                  <div className="font-bold text-xs text-[#111111]">{rev.name}</div>
                  <div className="text-[11px] text-[#FF1744] font-medium">{rev.role}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------- 10. FREQUENTLY ASKED QUESTIONS (FAQs) ---------------- */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10 space-y-2">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#111111]">
              Frequently Asked Questions ({city.name})
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div key={faq.id} className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full p-4 flex items-center justify-between text-left font-bold text-xs sm:text-sm text-[#111111]"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#FF1744]" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-gray-600 border-t border-gray-100 pt-2 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
