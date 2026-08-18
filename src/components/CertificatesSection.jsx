import React from 'react';
import { Award, ShieldCheck, Sparkles, Check, ExternalLink, ArrowRight } from 'lucide-react';
import { TextMaskReveal, FadeUp, ScaleReveal, StaggerContainer, StaggerItem } from './animations/MotionComponents';

export default function CertificatesSection({ onOpenDemo, onOpenSampleCert }) {
  const certificates = [
    {
      id: 1,
      key: 'graphic',
      title: 'Graphic Design Certificate',
      type: 'Official Hard Copy Certificate',
      isFeatured: false,
      badge: 'Certified Graphic Designer',
      iconBg: 'from-[#FF1744] to-[#D50032]',
      badgeBg: 'bg-[#FFF5F7] text-[#FF1744] border-[#FF5C7A]/30',
      skills: ['Canva Pro Mastery', 'Social Media Creatives', 'Brand Guidelines', 'Ad Banners & Carousels'],
      desc: 'Issued upon successful evaluation of Canva & Graphic Design practical module assignments.'
    },
    {
      id: 2,
      key: 'web',
      title: 'Website Designing Certificate',
      type: 'Official Hard Copy Certificate',
      isFeatured: false,
      badge: 'Certified Web Developer',
      iconBg: 'from-[#FF1744] to-[#D50032]',
      badgeBg: 'bg-[#FFF5F7] text-[#FF1744] border-[#FF5C7A]/30',
      skills: ['HTML5 & CSS3', 'WordPress Development', 'Elementor Page Builder', 'E-commerce Setup'],
      desc: 'Issued after building and deploying a live fully-functional responsive website project.'
    },
    {
      id: 3,
      key: 'master',
      title: 'Digital Marketing Master Program',
      type: '🏆 Premium Hard Copy Diploma',
      isFeatured: true,
      badge: 'Official DIGISEVAKS Certification',
      iconBg: 'from-[#FF1744] via-[#D50032] to-[#FF5C7A]',
      badgeBg: 'bg-[#FFF5F7] text-[#FF1744] border-[#FF5C7A]/40',
      skills: [
        'Printed Hard Copy Certificate',
        'Signed by Chief Industry Trainer',
        'Unique Verification ID Number',
        'Premium Gold Foil Embossed Finish',
        'Physical Framable Master Diploma'
      ],
      desc: 'Awarded to students upon successful completion of the full Agency-Style Master Program & Capstone Project.'
    }
  ];

  return (
    <section id="certificates" className="py-14 sm:py-24 bg-gradient-to-b from-white via-[#FFF5F7]/30 to-white relative overflow-hidden font-sans border-t border-gray-100">

      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#FF1744]/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2.5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white border border-[#FF5C7A]/30 text-[#FF1744] text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest shadow-xs">
            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF1744]" />
            <span>Valuable Industry Credentials</span>
          </div>

          <TextMaskReveal
            as="h2"
            className="font-heading text-2xl sm:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight"
          >
            Certificates You Will Receive
          </TextMaskReveal>

          <FadeUp delay={0.1}>
            <p className="text-xs sm:text-lg text-[#6B7280] leading-relaxed font-normal">
              Boost your resume and LinkedIn profile with industry-recognized physical certifications. Earn specialized module certificates and an official <span className="text-[#FF1744] font-bold">Printed Hard Copy Master Diploma</span>.
            </p>
          </FadeUp>
        </div>

        {/* Certificate Cards Grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 items-stretch">
          {certificates.map((cert) => (
            <StaggerItem key={cert.id} className="h-full">
              <div
                className={`relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 transition-all duration-300 flex flex-col justify-between h-full group ${cert.isFeatured
                  ? 'border-2 border-[#FF1744] shadow-xl sm:scale-[1.02] md:-translate-y-2 z-20 ring-4 sm:ring-8 ring-[#FF1744]/10 bg-gradient-to-b from-white via-white to-[#FFF5F7]/40'
                  : 'border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-gray-300'
                  }`}
              >
                {/* Featured Badge for Master Diploma */}
                {cert.isFeatured && (
                  <div className="absolute -top-3.5 sm:-top-4 left-1/2 -translate-x-1/2 bg-cta-red text-white font-heading font-extrabold text-[10px] sm:text-xs px-3.5 py-1 sm:px-5 sm:py-1.5 rounded-full uppercase tracking-wider shadow-md flex items-center space-x-1 whitespace-nowrap z-30">
                    <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span>Most Valuable • Master Diploma</span>
                  </div>
                )}

                <div>
                  {/* Top Card Icon & Type Badge */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-tr ${cert.iconBg} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                      <Award className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>

                    <span className={`text-[10px] sm:text-[11px] font-heading font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border ${cert.badgeBg}`}>
                      {cert.type}
                    </span>
                  </div>

                  {/* Title & Qualification Subtext */}
                  <h3 className="font-heading text-lg sm:text-2xl font-extrabold text-[#111111] leading-snug group-hover:text-[#FF1744] transition-colors">
                    {cert.title}
                  </h3>

                  <div className="mt-1.5 text-[11px] sm:text-xs font-semibold text-[#6B7280] flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span className="text-[#111111] font-bold">{cert.badge}</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-[#6B7280] leading-relaxed font-normal">
                    {cert.desc}
                  </p>

                  {/* Key Features List */}
                  <div className="mt-4 pt-4 sm:mt-6 sm:pt-6 border-t border-gray-100 space-y-2">
                    <span className="text-[10px] sm:text-[11px] font-heading font-bold uppercase tracking-wider text-gray-400 block mb-2">
                      Key Features:
                    </span>
                    {cert.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-[#111111] font-medium">
                        <div className="mt-0.5 w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="mt-6 pt-4 sm:mt-8 sm:pt-6 border-t border-gray-100">
                  <button
                    onClick={() => onOpenSampleCert ? onOpenSampleCert(cert.key) : onOpenDemo('certificate')}
                    className={`w-full py-3 px-3.5 rounded-xl text-xs sm:text-sm font-heading font-bold transition-all flex items-center justify-center space-x-2 active:scale-95 cursor-pointer ${cert.isFeatured
                      ? 'bg-cta-red text-white shadow-saas hover:opacity-95'
                      : 'bg-[#111827] text-white hover:bg-gray-800'
                      }`}
                  >
                    <span>View Sample Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom Official Guarantee Banner */}
        <ScaleReveal delay={0.2}>
          <div className="mt-12 sm:mt-16 bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 max-w-4xl mx-auto shadow-lg flex flex-col sm:flex-row items-center justify-between gap-5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#FF1744]" />

            <div className="flex items-center space-x-3 sm:space-x-4 pl-1 sm:pl-2">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#FFF5F7] text-[#FF1744] border border-[#FF5C7A]/30 flex items-center justify-center flex-shrink-0 shadow-sm">
                <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <h4 className="font-heading text-base sm:text-lg font-bold text-[#111111]">
                  Official DIGISEVAKS Academy Guarantee
                </h4>
                <p className="text-xs sm:text-sm text-[#6B7280] mt-0.5 leading-relaxed">
                  All Official Printed Hard Copy Certificates & Diplomas are awarded and dispatched directly after successful completion of the course modules.
                </p>
              </div>
            </div>

            <button
              onClick={() => onOpenDemo('certificate')}
              className="w-full sm:w-auto px-6 py-3 sm:px-7 sm:py-3.5 bg-cta-red text-white text-xs font-heading font-bold rounded-xl shadow-md hover:opacity-95 transition-all whitespace-nowrap cursor-pointer active:scale-95 flex items-center justify-center space-x-2"
            >
              <span>Claim Your Spot Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScaleReveal>

      </div>
    </section>
  );
}
