import React, { useState } from 'react';
import { X, Award, ShieldCheck, Sparkles, AlertTriangle, QrCode } from 'lucide-react';

export default function SampleCertificateModal({ isOpen, onClose, defaultCertType = 'master', onOpenDemo }) {
  const [activeType, setActiveType] = useState(defaultCertType);

  if (!isOpen) return null;

  const certData = {
    master: {
      id: 'DS-DEMO-MASTER-0000',
      badgeTitle: 'SAMPLE MASTER DIPLOMA',
      courseTitle: 'Digital Marketing & Performance Marketing Master Program',
      subTitle: 'Agency-Style Master Program with AI Tools & Live Projects',
      issueDate: 'DEMO ISSUE DATE',
      skills: ['Performance Marketing', 'Meta & Google Ads', 'SEO Mastery', 'AI Automation', 'GA4 Analytics'],
      sealText: 'DEMO SAMPLE SEAL',
      bgGradient: 'from-amber-500/10 via-red-500/5 to-amber-500/10'
    },
    web: {
      id: 'DS-DEMO-WEB-0000',
      badgeTitle: 'SAMPLE WEB CERTIFICATE',
      courseTitle: 'Website Designing & No-Code WordPress Development',
      subTitle: 'HTML5, CSS3, Elementor Pro & E-Commerce WooCommerce Setup',
      issueDate: 'DEMO ISSUE DATE',
      skills: ['WordPress Architecture', 'Elementor Page Builder', 'Responsive Web Design', 'WooCommerce Setup'],
      sealText: 'DEMO SAMPLE SEAL',
      bgGradient: 'from-red-500/10 via-rose-500/5 to-red-500/10'
    },
    graphic: {
      id: 'DS-DEMO-GRAPHIC-0000',
      badgeTitle: 'SAMPLE GRAPHIC CERTIFICATE',
      courseTitle: 'Graphic Design & Canva Pro Creative Mastery',
      subTitle: 'Brand Identity, Social Media Creatives & Ad Visuals',
      issueDate: 'DEMO ISSUE DATE',
      skills: ['Canva Pro Mastery', 'Social Creatives', 'Brand Guidelines', 'Ad Banners & Carousels'],
      sealText: 'DEMO SAMPLE SEAL',
      bgGradient: 'from-rose-500/10 via-[#FF1744]/5 to-rose-500/10'
    }
  };

  const currentCert = certData[activeType] || certData.master;

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-fade-in cursor-pointer"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92vh] bg-white border border-gray-200 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden cursor-default my-auto flex flex-col"
      >
        {/* Security Alert Header */}
        <div className="bg-amber-500 text-amber-950 px-3 py-1.5 text-center text-[10px] sm:text-xs font-heading font-extrabold flex items-center justify-center space-x-1.5 border-b border-amber-600/30 flex-shrink-0">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-950 flex-shrink-0" />
          <span className="truncate sm:whitespace-normal">WATERMARKED DEMO SPECIMEN — VOID & NOT VALID FOR OFFICIAL USE</span>
        </div>

        {/* Top Control Bar */}
        <div className="bg-slate-900 text-white p-3 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-slate-800 relative flex-shrink-0">
          <div className="flex items-center space-x-2.5 pr-8 sm:pr-0 w-full sm:w-auto">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#FF1744] text-white flex items-center justify-center shadow-md flex-shrink-0">
              <Award className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <h3 className="font-heading text-xs sm:text-lg font-bold text-white leading-tight truncate sm:whitespace-normal">
                Sample Certificate Specimen
              </h3>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium truncate">
                DIGISEVAKS Academy • Official Sample Specimen
              </p>
            </div>
          </div>

          {/* Type Selector Tabs - Horizontal Scroll on Mobile */}
          <div className="flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700 text-xs font-heading font-bold overflow-x-auto max-w-full w-full sm:w-auto space-x-1">
            <button
              onClick={() => setActiveType('master')}
              className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg transition-all whitespace-nowrap text-[11px] sm:text-xs ${
                activeType === 'master' ? 'bg-[#FF1744] text-white shadow-md' : 'text-slate-300 hover:text-white'
              }`}
            >
              Master Diploma
            </button>
            <button
              onClick={() => setActiveType('web')}
              className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg transition-all whitespace-nowrap text-[11px] sm:text-xs ${
                activeType === 'web' ? 'bg-[#FF1744] text-white shadow-md' : 'text-slate-300 hover:text-white'
              }`}
            >
              Web Design
            </button>
            <button
              onClick={() => setActiveType('graphic')}
              className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg transition-all whitespace-nowrap text-[11px] sm:text-xs ${
                activeType === 'graphic' ? 'bg-[#FF1744] text-white shadow-md' : 'text-slate-300 hover:text-white'
              }`}
            >
              Graphic Design
            </button>
          </div>

          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 sm:static p-1.5 text-slate-400 hover:text-white rounded-full bg-slate-800 hover:bg-slate-700 transition-colors z-20"
            title="Close Preview"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Security Info Bar */}
        <div className="bg-red-50 border-b border-red-200 px-4 py-2 flex items-center justify-between text-[10px] sm:text-xs text-[#FF1744] font-bold flex-shrink-0">
          <div className="flex items-center space-x-1.5 min-w-0">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF1744] flex-shrink-0" />
            <span className="truncate">Contains "DEMO SPECIMEN" Watermarks to prevent forgery</span>
          </div>
          <span className="hidden sm:inline text-[11px] text-gray-500 font-medium">
            Physical hard copy provided upon enrollment
          </span>
        </div>

        {/* Certificate Display Area with Touch Scroll Hint */}
        <div className="p-2 sm:p-6 bg-slate-100 overflow-x-auto relative flex-1">
          
          <div 
            id="printable-certificate"
            className={`min-w-[620px] sm:min-w-[680px] bg-white border-[8px] sm:border-[12px] border-double border-[#D50032] p-4 sm:p-10 rounded-xl shadow-xl relative select-none font-sans overflow-hidden bg-gradient-to-br ${currentCert.bgGradient} mx-auto`}
          >
            {/* LARGE HEAVY DIAGONAL WATERMARK STAMP */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 overflow-hidden">
              <div className="rotate-[-28deg] text-red-600/15 font-black text-4xl sm:text-6xl tracking-widest uppercase text-center select-none border-4 sm:border-8 border-dashed border-red-600/20 p-4 sm:p-6 rounded-2xl sm:rounded-3xl whitespace-nowrap">
                SAMPLE DEMO SPECIMEN<br />
                <span className="text-2xl sm:text-4xl text-gray-900/15">NOT VALID FOR OFFICIAL USE</span>
              </div>
            </div>

            {/* SECONDARY DIAGONAL WATERMARK PATTERN */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 sm:p-12 pointer-events-none z-20 opacity-10 select-none">
              <div className="rotate-[-25deg] text-[10px] sm:text-xs font-bold tracking-widest text-red-900 uppercase">SAMPLE DEMO SPECIMEN • SAMPLE DEMO SPECIMEN • SAMPLE DEMO SPECIMEN</div>
              <div className="rotate-[-25deg] text-[10px] sm:text-xs font-bold tracking-widest text-red-900 uppercase">VOID FOR EMPLOYMENT • VOID FOR ACADEMIC USE • DEMO COPY ONLY</div>
              <div className="rotate-[-25deg] text-[10px] sm:text-xs font-bold tracking-widest text-red-900 uppercase">SAMPLE DEMO SPECIMEN • SAMPLE DEMO SPECIMEN • SAMPLE DEMO SPECIMEN</div>
            </div>

            {/* Ornate Corner Accents */}
            <div className="absolute top-2 left-2 w-6 h-6 sm:w-8 sm:h-8 border-t-4 border-l-4 border-[#FF1744]" />
            <div className="absolute top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 border-t-4 border-r-4 border-[#FF1744]" />
            <div className="absolute bottom-2 left-2 w-6 h-6 sm:w-8 sm:h-8 border-b-4 border-l-4 border-[#FF1744]" />
            <div className="absolute bottom-2 right-2 w-6 h-6 sm:w-8 sm:h-8 border-b-4 border-r-4 border-[#FF1744]" />

            {/* Certificate Header */}
            <div className="flex items-center justify-between border-b-2 border-red-100 pb-3 mb-4 sm:mb-6 relative z-10">
              <div className="flex items-center space-x-3">
                <img src="/logo.png" alt="DIGISEVAKS Logo" className="h-9 sm:h-12 w-auto object-contain" />
                <div>
                  <h2 className="font-heading font-extrabold text-base sm:text-xl text-[#FF1744] tracking-tight">
                    DIGISEVAKS ACADEMY
                  </h2>
                  <span className="text-[9px] sm:text-[10px] text-gray-500 font-bold uppercase tracking-widest block">
                    An ISO 9001:2015 Certified Institute
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="bg-[#FFF5F7] text-[#FF1744] border border-[#FF5C7A]/30 text-[9px] sm:text-[10px] font-heading font-extrabold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase tracking-wider">
                  {currentCert.badgeTitle}
                </span>
                <span className="text-[10px] sm:text-[11px] text-gray-400 font-mono block mt-0.5">
                  ID: <strong className="text-gray-700">{currentCert.id}</strong>
                </span>
              </div>
            </div>

            {/* Certificate Content */}
            <div className="text-center my-4 sm:my-6 space-y-2 sm:space-y-3 relative z-10">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 font-bold">
                This is a sample specimen certificate awarded to
              </span>

              {/* Student Name Placeholder */}
              <div className="py-1">
                <div className="font-serif text-xl sm:text-4xl font-black text-red-600 tracking-wider inline-block border-b-2 border-[#FF1744]/40 px-4 sm:px-6 pb-1 bg-red-50/80 rounded-t-lg">
                  [ STUDENT NAME GOES HERE ]
                </div>
                <span className="text-[9px] sm:text-[10px] text-red-500 font-bold uppercase tracking-widest block mt-0.5">
                  ( DEMO SAMPLE SPECIMEN COPY )
                </span>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
                has successfully completed the prescribed course of study and practical evaluation for
              </p>

              {/* Program Name */}
              <div className="bg-[#FFF5F7] border border-[#FF5C7A]/30 rounded-xl sm:rounded-2xl py-2.5 px-4 sm:py-3 sm:px-6 max-w-2xl mx-auto shadow-xs">
                <h3 className="font-heading text-base sm:text-xl font-extrabold text-[#FF1744]">
                  {currentCert.courseTitle}
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-500 font-medium mt-0.5">
                  {currentCert.subTitle}
                </p>
              </div>

              {/* Key Skills Badges */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
                {currentCert.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="bg-white text-gray-700 text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded border border-gray-200 shadow-2xs">
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Signatures & Gold Seal */}
            <div className="mt-6 pt-4 sm:mt-8 sm:pt-6 border-t border-gray-200 grid grid-cols-3 items-end text-center relative z-10">
              
              {/* Verification & Issue Details */}
              <div className="text-left space-y-1">
                <div className="inline-flex items-center space-x-1.5 bg-gray-50 p-1 sm:p-1.5 rounded-lg border border-gray-200">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#FF1744]/10 text-[#FF1744] flex items-center justify-center rounded flex-shrink-0">
                    <QrCode className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <span className="text-[8px] sm:text-[9px] text-gray-400 font-bold uppercase block">DEMO QR CODE</span>
                    <span className="text-[9px] sm:text-[10px] text-gray-700 font-bold">digisevaks.com/verify</span>
                  </div>
                </div>
                <p className="text-[9px] sm:text-[10px] text-gray-500 font-medium pt-0.5">
                  Issue Date: <strong className="text-gray-800">{currentCert.issueDate}</strong>
                </p>
              </div>

              {/* Gold Embossed Seal Emblem */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-500 p-1 shadow-lg flex items-center justify-center relative">
                  <div className="w-full h-full rounded-full border-2 border-dashed border-amber-800/40 bg-gradient-to-tr from-amber-500 via-amber-300 to-yellow-400 flex flex-col items-center justify-center text-amber-950 p-1 text-center">
                    <Sparkles className="w-3.5 h-3.5 text-amber-900" />
                    <span className="text-[6px] sm:text-[7px] font-black uppercase tracking-tighter leading-tight mt-0.5">
                      DIGISEVAKS<br />DEMO SEAL
                    </span>
                  </div>
                </div>
                <span className="text-[8px] sm:text-[9px] font-bold text-red-600 tracking-wider uppercase mt-1">
                  {currentCert.sealText}
                </span>
              </div>

              {/* Signature */}
              <div className="text-right space-y-0.5 relative">
                <div className="font-serif italic font-bold text-gray-400 text-sm sm:text-xl text-right tracking-tight opacity-70">
                  [ DEMO SIGNATURE ]
                </div>
                <div className="w-24 sm:w-32 ml-auto border-b border-gray-400 my-0.5" />
                <p className="text-[9px] sm:text-[10px] font-heading font-extrabold text-gray-700 leading-tight">
                  Chief Industry Trainer
                </p>
                <p className="text-[8px] sm:text-[9px] text-red-500 font-bold uppercase">
                  ( DEMO SPECIMEN ONLY )
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="bg-slate-50 border-t border-gray-200 p-3 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
          <div className="text-[11px] sm:text-xs text-gray-600 text-center sm:text-left">
            <span className="font-bold text-[#FF1744]">Want your official hard copy certificate?</span> Join DIGISEVAKS Academy for physical certificates.
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
            <button
              onClick={() => {
                onClose();
                if (onOpenDemo) onOpenDemo('certificate');
              }}
              className="px-5 py-2.5 rounded-xl bg-[#FF1744] hover:bg-[#D50000] text-white font-heading font-bold text-xs shadow-md flex items-center space-x-1.5 transition-all w-full sm:w-auto justify-center cursor-pointer"
            >
              <Award className="w-4 h-4" />
              <span>Claim Certificate / Apply Now</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}


