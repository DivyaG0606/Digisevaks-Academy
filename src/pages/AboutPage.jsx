import React from 'react';
import SEO from '../components/SEO';
import { getBreadcrumbSchema } from '../data/schemaData';
import {
  Compass,
  Award,
  CheckCircle2,
  Phone,
  Check,
  MapPin,
  ArrowRight
} from 'lucide-react';
import WhyChooseUs from '../components/WhyChooseUs';
import { TextMaskReveal, FadeUp, ScaleReveal, StaggerContainer, StaggerItem } from '../components/animations/MotionComponents';

export default function AboutPage({ onOpenDemo }) {

  const stats = [
    { value: '10,000+', label: 'Candidates Trained', desc: 'Successful alumni across India' },
    { value: '100%', label: 'Placement Support', desc: 'Dedicated career cell & interviews' },
    { value: '100%', label: 'Practical Training', desc: 'No theory slides, 100% live campaigns' },
    { value: '50+', label: 'Advanced AI Tools', desc: 'ChatGPT, Canva AI, Midjourney & GA4' },
  ];

  const whyChooseUs = [
    { title: '100% Job Support & Placement', desc: 'Dedicated placement cell with resume building and mock interviews.' },
    { title: 'Lifetime Learning Support', desc: 'Get lifetime access to updated course study materials & alumni community.' },
    { title: 'Max 15 Students Per Batch', desc: 'Small batch size ensures personal 1-on-1 mentor attention.' },
    { title: 'Hands-On Live Projects', desc: 'Work directly on real client budgets and live agency assignments.' },
    { title: 'ISO 9001:2015 Certified', desc: 'Officially certified training institute recognized by industry leaders.' },
    { title: 'Full Day Practice Lab Facility', desc: 'Unlimited access to our high-speed practical lab facilities.' },
    { title: 'Flexible Morning & Weekend Batches', desc: 'Tailored for college students, working professionals & entrepreneurs.' },
    { title: 'Build Your Own Website', desc: 'Develop and launch your own functional website by the end of training.' },
  ];

  return (
    <div className="py-6 sm:py-12 bg-white font-sans animate-fade-in">
      <SEO pageKey="about" schema={getBreadcrumbSchema([{ name: 'About Us', url: '/about' }])} />

      {/* Header Banner */}
      <div className="bg-hero-radial bg-dot-pattern py-10 sm:py-16 border-b border-gray-200 text-center px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <span className="bg-[#FFF5F7] text-[#FF1744] border border-[#FF5C7A]/30 text-[10px] sm:text-xs font-heading font-bold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full uppercase tracking-wider shadow-xs mb-4 inline-block">
            About DIGISEVAKS Academy
          </span>

          <TextMaskReveal
            as="h1"
            className="font-heading text-2xl sm:text-4xl lg:text-6xl font-extrabold text-[#111111] tracking-tight leading-tight mb-3"
          >
            Pune's #1 AI-Powered <br className="hidden sm:block" />
            <span className="text-[#FF1744] inline-block my-1">Practical Digital Marketing</span> <br className="hidden sm:block" />
            Master Training Institute
          </TextMaskReveal>

          <FadeUp delay={0.1}>
            <p className="text-xs sm:text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed mb-6 font-normal">
              "Enough with Theory, Time to do Hands-on Practical. Join us now!"
            </p>
          </FadeUp>

          <FadeUp delay={0.2} className="pt-1 flex flex-wrap justify-center gap-2.5">
            <a
              href="tel:+918459439131"
              className="inline-flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white border border-gray-300 text-[11px] sm:text-xs font-bold text-[#111111] hover:border-[#FF1744] hover:text-[#FF1744] transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF1744] flex-shrink-0" />
              <span>Admissions: +91 84594 39131 / 87881 65631</span>
            </a>

            <div className="inline-flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white border border-gray-300 text-[11px] sm:text-xs font-bold text-[#111111] shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#FF1744] flex-shrink-0" />
              <span>Swastik Colony, Karvenagar, Pune 411052</span>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Stats Counter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-5 sm:-mt-8 relative z-20">
        <ScaleReveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 shadow-card-glow border border-gray-200">
            {stats.map((s, idx) => (
              <div key={idx} className="text-center p-2 sm:p-4 border-r last:border-r-0 border-gray-100">
                <div className="font-stat text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#FF1744]">{s.value}</div>
                <div className="font-heading text-xs sm:text-sm font-bold text-[#111111] mt-0.5 leading-snug">{s.label}</div>
                <div className="text-[10px] sm:text-xs text-[#6B7280] mt-0.5 leading-tight">{s.desc}</div>
              </div>
            ))}
          </div>
        </ScaleReveal>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 space-y-12 sm:space-y-24">

        {/* Story & Who Are We Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-3.5 sm:space-y-6">
            <span className="text-[10px] sm:text-xs font-bold text-[#FF1744] uppercase tracking-wider">Who Are We?</span>
            
            <TextMaskReveal
              as="h2"
              className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight"
            >
              1st Practical AI Digital Marketing Training Institute in Pune
            </TextMaskReveal>

            <FadeUp delay={0.1}>
              <p className="text-[#6B7280] text-xs sm:text-base leading-relaxed">
                DIGISEVAKS Academy is your stepping stone for an illustrious career in the field of Digital Marketing. We help in building careers with the help of our intensive and practical-oriented agency training program.
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-[#6B7280] text-xs sm:text-base leading-relaxed">
                Our practical approach bridges the gap between theoretical knowledge and the actual skills required to work in the corporate agency world. All you need to bring with you is the will to learn and succeed — the rest is taken care of by our industry experts!
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-bold text-[#111111] bg-[#FFF5F7] p-2.5 sm:p-3 rounded-xl border border-[#FF5C7A]/30">
                <Check className="w-3.5 h-3.5 text-[#FF1744] flex-shrink-0" />
                <span>Expert Faculty (8+ Years Experience)</span>
              </div>
              <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-bold text-[#111111] bg-[#FFF5F7] p-2.5 sm:p-3 rounded-xl border border-[#FF5C7A]/30">
                <Check className="w-3.5 h-3.5 text-[#FF1744] flex-shrink-0" />
                <span>Agency-Style Classroom Training</span>
              </div>
              <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-bold text-[#111111] bg-[#FFF5F7] p-2.5 sm:p-3 rounded-xl border border-[#FF5C7A]/30">
                <Check className="w-3.5 h-3.5 text-[#FF1744] flex-shrink-0" />
                <span>Lifetime Practice Support</span>
              </div>
              <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-bold text-[#111111] bg-[#FFF5F7] p-2.5 sm:p-3 rounded-xl border border-[#FF5C7A]/30">
                <Check className="w-3.5 h-3.5 text-[#FF1744] flex-shrink-0" />
                <span>Google & Meta Certifications</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenDemo('about')}
                className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 bg-cta-red text-white font-heading font-bold text-xs sm:text-sm rounded-xl shadow-saas hover:opacity-95 transition-all flex items-center justify-center space-x-2 cursor-pointer active:scale-95"
              >
                <span>Enroll Now For Best Digital Marketing Course</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <ScaleReveal delay={0.2}>
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="DIGISEVAKS Practical Digital Marketing Classroom in Pune"
                  className="w-full h-[240px] sm:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4 sm:p-8">
                  <div className="text-white space-y-0.5">
                    <div className="text-[10px] sm:text-xs font-bold text-[#FF5C7A] uppercase tracking-wider">Agency Style Lab Training</div>
                    <div className="font-heading text-sm sm:text-xl font-bold">100% Practical Implementation on Live Agency Clients</div>
                  </div>
                </div>
              </div>
            </ScaleReveal>
          </div>
        </div>

        {/* Motive & Dream Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5">
          <FadeUp delay={0.1}>
            <div className="bg-[#FFF5F7] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#FF5C7A]/30 shadow-2xs space-y-2 sm:space-y-3 h-full">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#FF1744] text-white flex items-center justify-center shadow-xs">
                <Compass className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-[#111111]">Our Motive — True "Digital India"</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                The motive behind DIGISEVAKS Academy is to train potential individuals and shape them into high-performing digital marketing professionals. We take real initiative to make a true "Digital India" by equipping candidates with in-demand AI skills, campaign analytics, and performance advertising.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="bg-[#FFF5F7] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#FF5C7A]/30 shadow-2xs space-y-2 sm:space-y-3 h-full">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#FF1744] text-white flex items-center justify-center shadow-xs">
                <Award className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-[#111111]">Our Dream & Industry Certifications</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                We dream of nurturing quality digital marketing professionals who stand apart from the crowd. We award official DIGISEVAKS Master Diplomas along with Google & Meta certifications that speak for a thousand words in interviews!
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Where Do We Differ From Others? (Why Choose Us?) */}
        <div id="why-choose-us" className="space-y-8 sm:space-y-12 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="bg-white text-[#FF1744] border border-[#FF5C7A]/30 text-[10px] sm:text-xs font-heading font-bold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full uppercase tracking-wider inline-block">
              Why Join Us?
            </span>
            <TextMaskReveal
              as="h2"
              className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight"
            >
              Where Do We Differ From Others?
            </TextMaskReveal>
            <FadeUp delay={0.1}>
              <p className="text-xs sm:text-base text-[#6B7280]">
                Discover why DIGISEVAKS Academy is the most trusted choice for digital marketing aspirants in Pune.
              </p>
            </FadeUp>
          </div>

          <StaggerContainer staggerDelay={0.05} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {whyChooseUs.map((item, idx) => (
              <StaggerItem key={idx}>
                <div
                  className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-gray-200 shadow-xs hover:shadow-xl hover:border-[#FF1744]/40 transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#FFF5F7] text-[#FF1744] flex items-center justify-center font-bold font-stat text-xs sm:text-sm mb-3">
                      0{idx + 1}
                    </div>
                    <h4 className="font-heading text-xs sm:text-base font-bold text-[#111111] mb-1.5">{item.title}</h4>
                    <p className="text-[11px] sm:text-xs text-[#6B7280] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Interactive Feature Comparison Table */}
          <WhyChooseUs />
        </div>

        {/* Team of Trainers / Faculty Section */}
        <FadeUp delay={0.1}>
          <div className="bg-[#FFF5F7] rounded-2xl sm:rounded-3xl p-5 sm:p-12 border border-[#FF5C7A]/30 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              <span className="text-[10px] sm:text-xs font-bold text-[#FF1744] uppercase tracking-wider">Expert Mentorship</span>
              <h3 className="font-heading text-lg sm:text-3xl font-extrabold text-[#111111]">
                Team of Trainers & Industry Heavyweights
              </h3>
              <p className="text-[#6B7280] text-xs sm:text-base leading-relaxed">
                We have on board industry-experienced trainers who bring years of real agency domain experience. Our faculty shares real-time nuances of working on live corporate clients, ensuring each individual understands concepts to the core through interactive sessions.
              </p>
              <div className="pt-1 flex flex-wrap gap-2 sm:gap-4 text-[11px] sm:text-xs font-bold text-[#111111]">
                <div className="flex items-center space-x-1.5 bg-white px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border border-gray-200 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 flex-shrink-0" />
                  <span>6+ Years Agency Experience</span>
                </div>
                <div className="flex items-center space-x-1.5 bg-white px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border border-gray-200 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 flex-shrink-0" />
                  <span>Interactive Q&A Sessions</span>
                </div>
                <div className="flex items-center space-x-1.5 bg-white px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border border-gray-200 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 flex-shrink-0" />
                  <span>1-on-1 Mentorship</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                  alt="DIGISEVAKS Expert Trainers Mentoring Students"
                  className="w-full h-[200px] sm:h-[280px] object-cover"
                />
              </div>
            </div>
          </div>
        </FadeUp>

        {/* CTA Banner */}
        <ScaleReveal delay={0.1}>
          <div className="bg-cta-red rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-center text-white space-y-4 sm:space-y-6 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto space-y-3 sm:space-y-4">
              <h3 className="font-heading text-xl sm:text-4xl font-extrabold leading-tight">
                Get Trained at DIGISEVAKS Academy & Be The Most Sought-After Digital Professional
              </h3>
              <p className="text-white/90 text-xs sm:text-base leading-relaxed">
                Enroll now for the best AI-Powered Digital Marketing Course in Pune. Limited seats available per batch for personalized mentoring!
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <button
                  onClick={() => onOpenDemo('about_cta')}
                  className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 bg-white text-[#FF1744] font-heading font-bold text-xs sm:text-sm rounded-xl shadow-lg hover:bg-gray-100 transition-all cursor-pointer active:scale-95"
                >
                  Book Free Demo Class
                </button>

                <a
                  href="tel:+918459439131"
                  className="w-full sm:w-auto px-6 py-3.5 sm:px-7 sm:py-4 bg-[#111827] text-white font-heading font-semibold text-xs sm:text-sm rounded-xl hover:bg-gray-900 transition-all flex items-center justify-center space-x-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FF5C7A]" />
                  <span>Call Admissions: +91 84594 39131</span>
                </a>
              </div>
            </div>
          </div>
        </ScaleReveal>

      </div>
    </div>
  );
}
