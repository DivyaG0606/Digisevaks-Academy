import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone } from 'lucide-react';
import { submitLead } from '../services/leadService';

export default function DemoModal({ isOpen, onClose, type = 'demo' }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'Classroom Digital Marketing Course'
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Submit lead to Email & Google Sheets
      await submitLead({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        course: formData.course,
        source: type === 'brochure' ? 'Brochure Download Modal' : type === 'certificate' ? 'Certificate Guidance Modal' : 'Demo Modal'
      });

      // 2. Download Brochure PDF if applicable
      if (type === 'brochure') {
        const link = document.createElement('a');
        link.href = '/documents/MASTER-PRACTICAL-DIGITAL-MARKETING.pdf';
        link.download = 'MASTER-PRACTICAL-DIGITAL-MARKETING.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (err) {
      console.log('Submission error:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', course: 'Classroom Digital Marketing Course' });
      onClose();
    }, 4000);
  };

  const getTitle = () => {
    if (type === 'brochure') return 'Download Course Syllabus & Prospectus';
    if (type === 'certificate') return 'Certificate & Career Guidance';
    return 'Book Your Free Live Demo Class';
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-fade-in cursor-pointer"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[360px] sm:max-w-[400px] bg-white border border-gray-200 rounded-3xl p-4 sm:p-5 text-[#111111] shadow-2xl cursor-default"
      >
        
        {/* Close Button with high z-index */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 text-gray-400 hover:text-[#111111] rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header with right padding to clear the close button */}
        <div className="flex items-center space-x-2.5 mb-2.5 pr-8">
          <img src="/logo.png" alt="DIGISEVAKS Logo" className="h-7 sm:h-8 w-auto object-contain flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <h3 className="font-heading text-sm sm:text-base font-bold text-[#111111] leading-tight break-words">
              {getTitle()}
            </h3>
            <span className="text-[9px] sm:text-[10px] text-[#FF1744] font-bold uppercase tracking-wider block mt-0.5">
              DIGISEVAKS ACADEMY
            </span>
          </div>
        </div>

        {/* Direct Helpline Numbers Banner */}
        <div className="flex items-center justify-between px-2.5 py-1.5 bg-red-50/80 rounded-xl border border-red-100 mb-3 text-[11px] font-medium text-gray-700 shadow-2xs">
          <div className="flex items-center space-x-1">
            <Phone className="w-3 h-3 text-[#FF1744] flex-shrink-0" />
            <span className="font-bold text-[#111111] text-[10px] sm:text-[11px]">Helpline:</span>
          </div>
          <div className="flex items-center space-x-1 font-bold text-[#FF1744] text-[10px] sm:text-[11px]">
            <a href="tel:+918459439131" className="hover:underline transition-colors">+91 84594 39131</a>
            <span className="text-gray-300">/</span>
            <a href="tel:+918788165631" className="hover:underline transition-colors">+91 87881 65631</a>
          </div>
        </div>

        {submitted ? (
          <div className="my-4 text-center py-5 bg-[#FFF5F7] border border-[#FF5C7A]/40 rounded-2xl space-y-2">
            <CheckCircle2 className="w-10 h-10 text-[#FF1744] mx-auto" />
            <h4 className="font-heading text-base font-bold text-[#111111]">
              {type === 'brochure' ? 'Syllabus Downloading!' : 'Application Received!'}
            </h4>
            <p className="text-xs text-[#6B7280]">
              {type === 'brochure' 
                ? 'Your course prospectus is downloading automatically. Our admissions team will contact you shortly.'
                : 'Our admissions team will contact you shortly via Call / WhatsApp.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-2.5 mt-2">
            <div>
              <label className="block text-[11px] font-bold text-[#111111] mb-0.5">
                Full Name <span className="text-[#FF1744]">*</span>
              </label>
              <input 
                type="text"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-[#111111] text-xs sm:text-sm focus:outline-none focus:border-[#FF1744] placeholder-gray-400 font-sans"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#111111] mb-0.5">
                Phone / WhatsApp Number <span className="text-[#FF1744]">*</span>
              </label>
              <input 
                type="tel"
                required
                placeholder="+91 84594 39131"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-[#111111] text-xs sm:text-sm focus:outline-none focus:border-[#FF1744] placeholder-gray-400 font-sans"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#111111] mb-0.5">
                Email Address <span className="text-[#FF1744]">*</span>
              </label>
              <input 
                type="email"
                required
                placeholder="yourname@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-[#111111] text-xs sm:text-sm focus:outline-none focus:border-[#FF1744] placeholder-gray-400 font-sans"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#111111] mb-0.5">
                Select Program Mode <span className="text-[#FF1744]">*</span>
              </label>
              <select
                required
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-[#111111] text-xs sm:text-sm focus:outline-none focus:border-[#FF1744]"
              >
                <option value="Classroom Digital Marketing Course">Classroom Digital Marketing Course</option>
                <option value="Practical Digital Marketing Course">Practical Digital Marketing Course</option>
                <option value="Advanced Performance Marketing Course">Advanced Performance Marketing Course</option>
                <option value="Corporate Digital Marketing Course">Corporate Digital Marketing Course</option>
                <option value="Digital Marketing Executive Program">Digital Marketing Executive Program</option>
              </select>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 bg-cta-red text-white font-heading font-bold text-xs sm:text-sm rounded-xl shadow-saas hover:opacity-95 transition-all flex items-center justify-center space-x-2 active:scale-95 disabled:opacity-50 cursor-pointer mt-3"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? 'Submitting Application...' : 'Submit & Reserve Seat'}</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
