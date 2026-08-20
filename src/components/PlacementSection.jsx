import React, { useState, useEffect } from 'react';
import {
  Building, Users, Briefcase, Award, CheckCircle2,
  Sparkles, Star, PhoneCall, Download
} from 'lucide-react';
import { TextMaskReveal, FadeUp } from './animations/MotionComponents';

export default function PlacementSection({ onOpenDemo }) {
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReviewIdx((prev) => (prev + 1) % 6);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: '7,000+', label: 'Candidates Placed', desc: 'Across Pune, PCMC & Maharashtra' },
    { value: '500+', label: 'Hiring Partners', desc: 'Digital Agencies & Corporate IT Brands' },
    { value: '100%', label: 'Placement Assistance', desc: 'ATS Resume, HR Mock & Direct Referrals' },
    { value: '₹3.5 - ₹5.5 LPA', label: 'Average Salary Package', desc: 'Freshers & Executive Placements' },
  ];

  const steps = [
    {
      number: '01',
      title: 'Live Campaign & Portfolio Build',
      desc: 'Build dedicated WordPress websites, set up Meta Pixel & Google Analytics (GA4), and run real paid ad campaigns with live proof.'
    },
    {
      number: '02',
      title: 'ATS Resume & LinkedIn Optimization',
      desc: 'Craft an ATS-optimized resume highlighting live project metrics, ROI, 18+ certificates, and live URL portfolio links.'
    },
    {
      number: '03',
      title: 'Technical & HR Mock Interviews',
      desc: 'Undergo rigorous 1-on-1 mock interviews evaluated directly by agency digital directors with instant performance scoring.'
    },
    {
      number: '04',
      title: 'Direct Campus Placement Drives',
      desc: 'Get direct interview scheduling with 500+ partner digital agencies, e-commerce companies, and tech firms in Pune & Maharashtra.'
    },
    {
      number: '05',
      title: 'Offer Letter & Onboarding Support',
      desc: 'Receive expert guidance on selecting the right role, understanding job offers, and smooth onboarding.'
    }
  ];

  const placedStudents = [
    {
      name: "Vaishnavi Jadhav",
      role: "Digital Marketing Executive",
      branch: "Hadapsar, Pune",
      quote: "DIGISEVAKS Academy is the best digital marketing course in Hadapsar Pune with placement. Managing live Meta Ads & Google PPC budget campaigns gave me real agency experience to clear my interview on the first attempt!"
    },
    {
      name: "Aditya Kendre",
      role: "SEO Analyst",
      branch: "PCMC, Pune",
      quote: "Enrolling in this top SEO training course in PCMC Pune was the best decision. The technical SEO audits, keyword research, and live backlink building helped me clear multiple interviews at top digital marketing agencies in Thergaon & PCMC."
    },
    {
      name: "Swapnil Kulkarni",
      role: "Performance Marketer",
      branch: "Viman Nagar, Pune",
      quote: "Learning performance marketing, Google Search Ads, and Meta Ads Manager with real live project budget testing at DIGISEVAKS Academy Viman Nagar. The HR mock interviews helped me land a high-paying performance marketer role!"
    },
    {
      name: "Tanvi Patil",
      role: "Social Media Executive",
      branch: "Karve Nagar, Pune",
      quote: "Outstanding social media marketing course in Karve Nagar Pune! Hands-on Instagram Reels growth strategy, Canva Pro design, and 100% placement support helped me secure an immediate job after my 3-month agency internship."
    },
    {
      name: "Rahul Deshmukh",
      role: "Digital Marketing Strategist",
      branch: "Thergaon, PCMC",
      quote: "Comprehensive digital marketing course in Thergaon PCMC covering 50+ AI tools, GA4 analytics, and 360° campaign strategy. The DIGISEVAKS placement cell arranged direct campus interviews with top digital marketing agencies."
    },
    {
      name: "Pooja Shinde",
      role: "Google Ads Specialist",
      branch: "Nal Stop, Pune",
      quote: "The best Google Ads & Performance Marketing institute near Nal Stop & Kothrud Pune. Practical training with 1-on-1 mentor guidance allowed me to present live client campaign portfolio links during my final interview."
    }
  ];

  const partnerCategories = [
    'Digital Marketing Agencies',
    'E-Commerce & D2C Brands',
    'IT & Software Companies',
    'Media & Advertising Houses'
  ];

  return (
    <div id="placements" className="font-sans text-[#111111] bg-white">

      {/* ---------------- 1. STATS BANNER (Vibrant Brand Red / White Card Theme) ---------------- */}
      <section className="bg-gradient-to-r from-[#FF1744] via-[#D50032] to-[#B20029] text-white py-12 sm:py-16 relative overflow-hidden shadow-xl">

        {/* Decorative background glows */}
        <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-white/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="bg-white/20 text-white border border-white/40 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center space-x-2">

              <span>100% Placement Assistance Institute</span>
            </span>

            <TextMaskReveal
              as="h2"
              className="font-heading text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
            >
              Transform Your Skills Into A Career In Digital Marketing
            </TextMaskReveal>

            <p className="text-red-100 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
              Join Pune & Maharashtra's premier agency-driven Digital Marketing Institute. Over 7,000+ candidates placed in top marketing agencies and corporate brands.
            </p>
          </div>

          {/* 4 Stat Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((st, idx) => (
              <div key={idx} className="bg-white text-[#111111] p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-lg text-center hover:scale-105 transition-transform border border-red-100 flex flex-col justify-center">
                <div className="font-heading text-base sm:text-2xl lg:text-3xl font-black text-[#FF1744] tracking-tight whitespace-nowrap">
                  {st.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#111111] mt-1">
                  {st.label}
                </div>
                <div className="text-[11px] text-gray-500 mt-0.5 font-medium">
                  {st.desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ---------------- 2. 5-STEP PLACEMENT PREPARATION ROADMAP ---------------- */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-[#FF1744] text-xs font-bold uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100">
              OUR PLACEMENT SYSTEM
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#111111]">
              5-Step Structured Placement Assistance Process
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              How DIGISEVAKS Academy converts agency training into confirmed job offers.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {steps.map((st, idx) => (
              <div key={idx} className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex items-start space-x-4 sm:space-x-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#FF1744] text-white font-extrabold text-sm sm:text-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  {st.number}
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[#111111]">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ---------------- 3. RECENT PLACED STUDENTS SHOWCASE ---------------- */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-[#FF1744] text-xs font-bold uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100">
              STUDENT SUCCESS STORIES
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#111111]">
              Our Placed Students & Success Reviews
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Real candidates placed in top digital marketing agencies across Pune, PCMC & Maharashtra.
            </p>
          </div>

          {/* MOBILE VIEW: Auto-rotating Single Card Carousel (Changes every 2.5 seconds) */}
          <div className="block md:hidden max-w-md mx-auto">
            {placedStudents && placedStudents.length > 0 && (
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-md space-y-3 min-h-[220px] flex flex-col justify-between transition-all duration-300">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed italic">
                      "{placedStudents[activeReviewIdx % placedStudents.length]?.quote}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-xs text-[#111111]">{placedStudents[activeReviewIdx % placedStudents.length]?.name}</div>
                      <div className="text-[11px] text-[#FF1744] font-semibold">{placedStudents[activeReviewIdx % placedStudents.length]?.role}</div>
                    </div>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
                      {(activeReviewIdx % placedStudents.length) + 1} / {placedStudents.length}
                    </span>
                  </div>
                </div>

                {/* Carousel Dot Indicators */}
                <div className="flex items-center justify-center space-x-2 pt-1">
                  {placedStudents.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setActiveReviewIdx(dotIdx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        (activeReviewIdx % placedStudents.length) === dotIdx ? 'w-6 bg-[#FF1744]' : 'w-2 bg-gray-300'
                      }`}
                      aria-label={`Go to review ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* DESKTOP VIEW: Clean Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {placedStudents.map((st, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition-all space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed italic">
                    "{st.quote}"
                  </p>

                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-xs text-[#111111]">{st.name}</h4>
                    <div className="text-[11px] text-[#FF1744] font-semibold">{st.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ---------------- 4. 500+ HIRING PARTNERS GRID ---------------- */}
      <section className="py-14 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">

          <div className="max-w-2xl mx-auto space-y-2">
            <span className="text-[#FF1744] text-xs font-bold uppercase tracking-widest">
              RECRUITMENT NETWORK
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#111111]">
              500+ Top Hiring Partners & Agencies
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Our students get hired directly by leading performance marketing agencies, IT corporations, and e-commerce companies.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {partnerCategories.map((cat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-gray-200 text-center font-bold text-xs text-gray-800 shadow-xs">
                {cat}
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ---------------- 5. BOTTOM PLACEMENT CTA ---------------- */}
      <section className="py-14 sm:py-20 bg-[#FFF5F7] border-t border-[#FF5C7A]/20 text-[#111111]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="bg-white text-[#FF1744] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-[#FF5C7A]/30 inline-block shadow-xs">
            READY TO START YOUR CAREER?
          </span>

          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#111111] leading-tight">
            Book A Free Placement Counseling Session & Get Direct Job Referrals
          </h2>

          <p className="text-gray-600 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Connect with our dedicated placement cell in Pune & PCMC. Get expert advice on starting your digital marketing career.
          </p>

          <div className="flex justify-center pt-2">
            <button
              onClick={() => onOpenDemo('placement')}
              className="w-full sm:w-auto px-8 py-4 bg-[#FF1744] hover:bg-[#D50032] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center space-x-2 active:scale-95"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Talk to Placement Counselor</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
