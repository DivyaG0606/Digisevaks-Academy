import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { getBreadcrumbSchema } from '../data/schemaData';
import {
  User, Mail, Phone, GraduationCap, Users, CreditCard, MapPin,
  BookOpen, CheckSquare, ShieldCheck, Sparkles, Send, CheckCircle2, Printer, FileText, ArrowRight
} from 'lucide-react';
import { TextMaskReveal, FadeUp, ScaleReveal } from '../components/animations/MotionComponents';
import { submitLead } from '../services/leadService';

export default function AdmissionPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [regId, setRegId] = useState('');

  const [formData, setFormData] = useState({
    applicantName: '',
    email: '',
    mobile: '',
    qualification: '',
    parentName: '',
    parentRelation: 'Father',
    parentMobile: '',
    aadhar: '',
    address: '',
    courseType: 'Offline & Classroom Digital Marketing Course',
    mode: 'Classroom (Karvenagar, Pune)',
    declaration: false
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.declaration) {
      alert("Please accept the declaration before submitting your admission form.");
      return;
    }

    setIsSubmitting(true);

    const generatedRegId = 'DIGI-ADM-' + Math.floor(100000 + Math.random() * 900000);
    setRegId(generatedRegId);

    // Send lead to Web3Forms / Google Sheets CRM
    try {
      await submitLead({
        name: formData.applicantName,
        phone: formData.mobile,
        email: formData.email,
        course: formData.courseType,
        mode: formData.mode,
        qualification: formData.qualification,
        parentName: formData.parentName,
        parentRelation: formData.parentRelation,
        parentMobile: formData.parentMobile,
        aadhar: formData.aadhar,
        address: formData.address,
        source: `Digital Marketing Admission Form [RegID: ${generatedRegId}]`
      });
    } catch (err) {
      console.error("Admission lead submission error:", err);
    }

    setIsSubmitting(false);
    setFormSubmitted(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="py-8 sm:py-16 bg-gray-50 min-h-screen font-sans animate-fade-in text-[#111111]">
      <SEO pageKey="admission" schema={getBreadcrumbSchema([{ name: 'Admission', url: '/admission' }])} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Form Header */}
        <div className="text-center space-y-3 mb-8 sm:mb-12">
          <span className="bg-red-50 text-[#FF1744] border border-red-200 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-xs inline-flex items-center space-x-2">

            <span>DIGISEVAKS Academy Admissions</span>
          </span>

          <TextMaskReveal
            as="h1"
            className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight"
          >
            Digital Marketing Admission Form <br className="hidden sm:block" />
            <span className="text-[#FF1744]">DIGISEVAKS Academy</span>
          </TextMaskReveal>

          <FadeUp delay={0.1}>
            <p className="text-xs sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
              Please fill in your authentic details to complete your registration for Pune's #1 Practical AI Digital Marketing Program.
            </p>
          </FadeUp>
        </div>

        {/* ---------------- SUCCESS CONFIRMATION SLIP ---------------- */}
        {formSubmitted ? (
          <ScaleReveal delay={0.1}>
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xl space-y-6 text-center print:shadow-none print:border-none">

              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-2">
                  ADMISSION FORM SUBMITTED SUCCESSFULLY
                </span>
                <h2 className="font-heading text-xl sm:text-3xl font-extrabold text-[#111111]">
                  Welcome to DIGISEVAKS Academy!
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Your admission registration request has been recorded. Our admissions officer will contact you shortly.
                </p>
              </div>

              {/* Registration Slip Details */}
              <div className="bg-red-50/60 p-5 sm:p-6 rounded-2xl border border-red-100 text-left space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between border-b border-red-200/60 pb-3">
                  <span className="font-bold text-gray-700">Registration ID:</span>
                  <span className="font-extrabold text-[#FF1744] font-heading">{regId}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <span className="text-gray-500 font-medium block">Applicant Name:</span>
                    <span className="font-bold text-[#111111]">{formData.applicantName}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 font-medium block">Mobile Number:</span>
                    <span className="font-bold text-[#111111]">{formData.mobile}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 font-medium block">Email:</span>
                    <span className="font-bold text-[#111111]">{formData.email}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 font-medium block">Highest Qualification:</span>
                    <span className="font-bold text-[#111111]">{formData.qualification || 'N/A'}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 font-medium block">Parent's Name:</span>
                    <span className="font-bold text-[#111111]">{formData.parentName} ({formData.parentRelation})</span>
                  </div>
                  <div>
                    <span className="text-gray-500 font-medium block">Parent's Mobile:</span>
                    <span className="font-bold text-[#111111]">{formData.parentMobile}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 font-medium block">Course Selected:</span>
                    <span className="font-bold text-[#FF1744]">{formData.courseType}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 font-medium block">Training Mode:</span>
                    <span className="font-bold text-[#111111]">{formData.mode}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="w-full sm:w-auto px-8 py-3 bg-[#FF1744] hover:bg-[#D50032] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all cursor-pointer"
                >
                  Submit Another Admission Form
                </button>
              </div>

            </div>
          </ScaleReveal>
        ) : (

          /* ---------------- OFFICIAL ADMISSION FORM ---------------- */
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xl space-y-8">
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* SECTION 1: APPLICANT PERSONAL DETAILS */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 border-b border-gray-200 pb-3">
                  <User className="w-5 h-5 text-[#FF1744]" />
                  <h2 className="font-heading text-lg sm:text-xl font-bold text-[#111111]">
                    1. Applicant Personal Details
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {/* Applicant's Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 block">
                      Applicant's Name <span className="text-[#FF1744]">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        name="applicantName"
                        required
                        value={formData.applicantName}
                        onChange={handleChange}
                        placeholder="Enter full name"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-[#FF1744] focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 block">
                      Email Address <span className="text-[#FF1744]">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@gmail.com"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-[#FF1744] focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Mobile */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 block">
                      Mobile Number <span className="text-[#FF1744]">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        name="mobile"
                        required
                        pattern="[0-9]{10}"
                        maxLength={10}
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-[#FF1744] focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Highest Qualification */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 block">
                      Highest Qualification <span className="text-[#FF1744]">*</span>
                    </label>
                    <div className="relative">
                      <GraduationCap className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                      <select
                        name="qualification"
                        required
                        value={formData.qualification}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-[#FF1744] focus:outline-none transition-all"
                      >
                        <option value="">Select Qualification</option>
                        <option value="B.Tech / B.E.">B.Tech / B.E.</option>
                        <option value="B.Com">B.Com</option>
                        <option value="BCA">BCA</option>
                        <option value="BBA">BBA</option>
                        <option value="B.Sc">B.Sc</option>
                        <option value="B.A.">B.A.</option>
                        <option value="MBA / PGDM">MBA / PGDM</option>
                        <option value="MCA / M.Tech">MCA / M.Tech</option>
                        <option value="12th Pass">12th Pass / Higher Secondary</option>
                        <option value="Diploma">Diploma Candidate</option>
                        <option value="Other">Other Qualification</option>
                      </select>
                    </div>
                  </div>

                </div>
              </div>

              {/* SECTION 2: PARENT & GUARDIAN DETAILS */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 border-b border-gray-200 pb-3">
                  <Users className="w-5 h-5 text-[#FF1744]" />
                  <h2 className="font-heading text-lg sm:text-xl font-bold text-[#111111]">
                    2. Parent / Guardian Details
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                  {/* Parent's Name */}
                  <div className="space-y-1.5 sm:col-span-1">
                    <label className="text-xs font-bold text-gray-700 block">
                      Parent's Name <span className="text-[#FF1744]">*</span>
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      required
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="Enter parent's full name"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-[#FF1744] focus:outline-none transition-all"
                    />
                  </div>

                  {/* Relation */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 block">
                      Relation <span className="text-[#FF1744]">*</span>
                    </label>
                    <select
                      name="parentRelation"
                      required
                      value={formData.parentRelation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-[#FF1744] focus:outline-none transition-all"
                    >
                      <option value="Father">Father</option>
                      <option value="Mother">Mother</option>
                      <option value="Spouse">Spouse</option>
                      <option value="Guardian">Guardian</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Parent's Mobile */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 block">
                      Parent's Mobile <span className="text-[#FF1744]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="parentMobile"
                      required
                      pattern="[0-9]{10}"
                      maxLength={10}
                      value={formData.parentMobile}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-[#FF1744] focus:outline-none transition-all"
                    />
                  </div>

                </div>
              </div>

              {/* SECTION 3: IDENTIFICATION & ADDRESS */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 border-b border-gray-200 pb-3">
                  <CreditCard className="w-5 h-5 text-[#FF1744]" />
                  <h2 className="font-heading text-lg sm:text-xl font-bold text-[#111111]">
                    3. Identification & Address
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {/* Aadhar No. */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 block">
                      Aadhar No. <span className="text-[#FF1744]">*</span>
                    </label>
                    <input
                      type="text"
                      name="aadhar"
                      required
                      pattern="[0-9]{12}"
                      maxLength={12}
                      value={formData.aadhar}
                      onChange={handleChange}
                      placeholder="12-digit Aadhar number"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-[#FF1744] focus:outline-none transition-all"
                    />
                  </div>

                  {/* Full Address */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-xs font-bold text-gray-700 block">
                      Address <span className="text-[#FF1744]">*</span>
                    </label>
                    <textarea
                      name="address"
                      required
                      rows={3}
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter permanent residential address (House No, Street, City, State, Pincode)"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-[#FF1744] focus:outline-none transition-all"
                    />
                  </div>

                </div>
              </div>

              {/* SECTION 4: COURSE SELECTION */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 border-b border-gray-200 pb-3">
                  <BookOpen className="w-5 h-5 text-[#FF1744]" />
                  <h2 className="font-heading text-lg sm:text-xl font-bold text-[#111111]">
                    4. Course Specialization & Mode
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {/* Course Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 block">
                      Course Type <span className="text-[#FF1744]">*</span>
                    </label>
                    <select
                      name="courseType"
                      required
                      value={formData.courseType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-[#FF1744] focus:outline-none transition-all font-semibold text-[#111111]"
                    >
                      <option value="Offline & Classroom Digital Marketing Course">Offline & Classroom Digital Marketing Course</option>
                      <option value="Online Digital Marketing Course">Online Digital Marketing Course</option>
                      <option value="Digital Marketing Course PCMC">Digital Marketing Course PCMC</option>
                      <option value="Advanced Performance Marketing Course">Advanced Performance Marketing Course</option>
                      <option value="Master AI Digital Marketing Program">Master AI Digital Marketing Program</option>
                    </select>
                  </div>

                  {/* Mode */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 block">
                      Training Mode <span className="text-[#FF1744]">*</span>
                    </label>
                    <select
                      name="mode"
                      required
                      value={formData.mode}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-[#FF1744] focus:outline-none transition-all font-semibold text-[#111111]"
                    >
                      <option value="Classroom (Karvenagar, Pune)">Classroom (Karvenagar, Pune Branch)</option>
                      <option value="Classroom (Thergaon, PCMC)">Classroom (Thergaon, PCMC Branch)</option>
                      <option value="Live Online Interactive">Live Online Interactive (Zoom / Google Meet)</option>
                    </select>
                  </div>

                </div>
              </div>

              {/* SECTION 5: DECLARATION */}
              <div className="pt-2 border-t border-gray-200 space-y-4">
                <label className="flex items-start space-x-3 cursor-pointer p-4 bg-red-50/50 rounded-2xl border border-red-100 hover:bg-red-50 transition-colors">
                  <input
                    type="checkbox"
                    name="declaration"
                    required
                    checked={formData.declaration}
                    onChange={handleChange}
                    className="w-4 h-4 mt-0.5 text-[#FF1744] accent-[#FF1744] rounded cursor-pointer"
                  />
                  <span className="text-xs text-gray-700 leading-relaxed font-medium">
                    I hereby declare that all the above information provided by me is true, complete, and accurate to the best of my knowledge. I agree to abide by the rules and regulations of DIGISEVAKS Academy.
                  </span>
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#FF1744] hover:bg-[#D50032] text-white font-heading font-extrabold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Admission Form...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Official Admission Form</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
