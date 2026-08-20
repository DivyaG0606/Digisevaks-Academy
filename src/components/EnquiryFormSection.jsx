import React, { useState } from 'react';
import { Send, CheckCircle2, User, Phone, Mail, GraduationCap, Calendar, Briefcase, HelpCircle, Laptop, Sparkles } from 'lucide-react';
import { submitLead } from '../services/leadService';
import { TextMaskReveal, FadeUp, ScaleReveal } from './animations/MotionComponents';

export default function EnquiryFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialFormState = {
    fullName: '',
    contactNo: '',
    emailId: '',
    highestQualification: '',
    passingYear: '',
    coursePurpose: '',
    yearsOfExperience: '',
    nearestBranch: '',
    batchTime: '',
    courseType: '',
    introducedBy: '',
    laptopOrPc: '',
    basicComputerKnowledge: '',
    basicMsOfficeKnowledge: '',
    socialMediaAccounts: [],
    socialMediaTime: '',
    onlineShoppingExperience: '',
    whatDoYouKnowAboutDM: ''
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleCheckboxChange = (account) => {
    if (formData.socialMediaAccounts.includes(account)) {
      setFormData({
        ...formData,
        socialMediaAccounts: formData.socialMediaAccounts.filter((a) => a !== account)
      });
    } else {
      setFormData({
        ...formData,
        socialMediaAccounts: [...formData.socialMediaAccounts, account]
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation check for required unselected pill/radio fields
    if (!formData.highestQualification) {
      alert('Please select your Highest Qualification.');
      return;
    }
    if (!formData.passingYear) {
      alert('Please select your Year of Passing.');
      return;
    }
    if (!formData.coursePurpose) {
      alert('Please select your Course Purpose.');
      return;
    }
    if (!formData.nearestBranch) {
      alert('Please select your Nearest Branch.');
      return;
    }
    if (!formData.batchTime) {
      alert('Please select your Preferable Batch Time.');
      return;
    }
    if (!formData.courseType) {
      alert('Please select your Course Type (Online / Offline).');
      return;
    }
    if (!formData.laptopOrPc) {
      alert('Please select if you have your own Laptop / PC.');
      return;
    }
    if (!formData.basicComputerKnowledge) {
      alert('Please select if you have Basic Knowledge of Computer.');
      return;
    }

    setIsSubmitting(true);

    try {
      await submitLead({
        name: formData.fullName,
        phone: formData.contactNo,
        email: formData.emailId,
        course: `DIGISEVAKS Enquiry (${formData.courseType || 'Not specified'} - ${formData.nearestBranch || 'Not specified'})`,
        source: `Comprehensive Enquiry Form (${formData.introducedBy || 'Direct'})`,
        notes: JSON.stringify({
          highestQualification: formData.highestQualification,
          passingYear: formData.passingYear,
          coursePurpose: formData.coursePurpose,
          yearsOfExperience: formData.yearsOfExperience,
          nearestBranch: formData.nearestBranch,
          batchTime: formData.batchTime,
          courseType: formData.courseType,
          introducedBy: formData.introducedBy,
          laptopOrPc: formData.laptopOrPc,
          basicComputerKnowledge: formData.basicComputerKnowledge,
          basicMsOfficeKnowledge: formData.basicMsOfficeKnowledge,
          socialMediaAccounts: formData.socialMediaAccounts,
          socialMediaTime: formData.socialMediaTime,
          onlineShoppingExperience: formData.onlineShoppingExperience,
          whatDoYouKnowAboutDM: formData.whatDoYouKnowAboutDM
        })
      });
    } catch (err) {
      console.log('Enquiry Form submission log:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const branches = [
    'Karve Nagar, Pune',
    'Thergaon (PCMC)',
    'Chhatrapati Sambhajinagar',
    'Nagpur',
    'Nashik'
  ];

  const introducedOptions = [
    'Friends',
    'Google',
    'Social Media',
    'Email',
    'SMS',
    'Just Dial',
    'Banner/Hoarding',
    'Other'
  ];

  return (
    <section id="enquiry-form" className="py-12 sm:py-20 bg-gradient-to-b from-white via-[#FFF5F7]/40 to-white font-sans relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF1744]/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
          <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-[#FF5C7A]/30 text-[#FF1744] text-xs font-heading font-bold uppercase tracking-widest shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FF1744]" />
            <span>DIGISEVAKS ACADEMY ADMISSIONS</span>
          </span>

          <TextMaskReveal
            as="h2"
            className="font-heading text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight"
          >
            Course Enquiry Form
          </TextMaskReveal>

          <FadeUp delay={0.1}>
            <p className="text-xs sm:text-base text-[#6B7280] leading-relaxed">
              Please fill out your details below to get instant course counselling, batch schedules, branch details, and free demo class access.
            </p>
          </FadeUp>
        </div>

        {/* Main Form Container */}
        <div className="bg-white border border-gray-200/90 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF1744] via-[#D50032] to-[#FF5C7A]" />

          {submitted ? (
            <ScaleReveal delay={0.1}>
              <div className="text-center py-12 px-4 space-y-4 max-w-md mx-auto">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                </div>

                <h3 className="font-heading text-2xl font-black text-[#111111]">
                  Enquiry Submitted Successfully!
                </h3>

                <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                  Thank you, <strong className="text-[#111111]">{formData.fullName}</strong>. Our admissions team for the <span className="text-[#FF1744] font-bold">{formData.nearestBranch || 'nearest'}</span> branch will contact you shortly on <strong className="text-[#111111]">{formData.contactNo}</strong>.
                </p>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData(initialFormState);
                  }}
                  className="mt-4 px-6 py-3 bg-[#FF1744] text-white font-heading font-bold text-xs rounded-xl shadow-md hover:bg-[#D50032] transition-all cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </ScaleReveal>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* ---------------- 1. PERSONAL INFORMATION ---------------- */}
              <div className="space-y-5">
                <div className="flex items-center space-x-2 border-b border-gray-100 pb-2">
                  <User className="w-5 h-5 text-[#FF1744]" />
                  <h3 className="font-heading text-lg font-bold text-[#111111]">
                    1. Personal Information
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#111111] mb-1.5">
                      Full Name <span className="text-[#FF1744]">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#111111] text-xs sm:text-sm focus:outline-none focus:border-[#FF1744] transition-all"
                      />
                    </div>
                  </div>

                  {/* Contact No */}
                  <div>
                    <label className="block text-xs font-bold text-[#111111] mb-1.5">
                      Contact No <span className="text-[#FF1744]">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="Enter 10-digit mobile number"
                        value={formData.contactNo}
                        onChange={(e) => setFormData({ ...formData, contactNo: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#111111] text-xs sm:text-sm focus:outline-none focus:border-[#FF1744] transition-all"
                      />
                    </div>
                  </div>

                  {/* Email Id */}
                  <div>
                    <label className="block text-xs font-bold text-[#111111] mb-1.5">
                      Email Id <span className="text-[#FF1744]">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="yourname@gmail.com"
                        value={formData.emailId}
                        onChange={(e) => setFormData({ ...formData, emailId: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#111111] text-xs sm:text-sm focus:outline-none focus:border-[#FF1744] transition-all"
                      />
                    </div>
                  </div>

                  {/* Highest Qualification */}
                  <div>
                    <label className="block text-xs font-bold text-[#111111] mb-1.5">
                      Highest Qualification <span className="text-[#FF1744]">*</span>
                    </label>
                    <div className="relative">
                      <GraduationCap className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        required
                        value={formData.highestQualification}
                        onChange={(e) => setFormData({ ...formData, highestQualification: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#FF1744] transition-all ${
                          formData.highestQualification ? 'text-[#111111]' : 'text-gray-400'
                        }`}
                      >
                        <option value="" disabled>Select Qualification *</option>
                        <option value="10th / 12th">10th / 12th Standard</option>
                        <option value="Diploma">Diploma Candidate</option>
                        <option value="Graduate">Graduate (BA / B.Com / B.Sc / BCA / BBA / B.Tech)</option>
                        <option value="Post Graduate">Post Graduate (MA / M.Com / MCA / MBA / M.Tech)</option>
                        <option value="Other">Other Qualification</option>
                      </select>
                    </div>
                  </div>

                  {/* Year Of Passing */}
                  <div>
                    <label className="block text-xs font-bold text-[#111111] mb-1.5">
                      Year Of Passing <span className="text-[#FF1744]">*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        required
                        value={formData.passingYear}
                        onChange={(e) => setFormData({ ...formData, passingYear: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#FF1744] transition-all ${
                          formData.passingYear ? 'text-[#111111]' : 'text-gray-400'
                        }`}
                      >
                        <option value="" disabled>Select Passing Year *</option>
                        <option value="2026">2026 (Pursuing)</option>
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020 & Earlier">2020 & Earlier</option>
                      </select>
                    </div>
                  </div>

                  {/* If Working Years Of Experience */}
                  <div>
                    <label className="block text-xs font-bold text-[#111111] mb-1.5">
                      If Working, Years Of Experience
                    </label>
                    <div className="relative">
                      <Briefcase className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        value={formData.yearsOfExperience}
                        onChange={(e) => setFormData({ ...formData, yearsOfExperience: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#FF1744] transition-all ${
                          formData.yearsOfExperience ? 'text-[#111111]' : 'text-gray-400'
                        }`}
                      >
                        <option value="">Select Experience Level</option>
                        <option value="Fresher">Fresher / Student</option>
                        <option value="0 - 1 Year">0 - 1 Year Experience</option>
                        <option value="1 - 3 Years">1 - 3 Years Experience</option>
                        <option value="3 - 5 Years">3 - 5 Years Experience</option>
                        <option value="5+ Years">5+ Years Experience</option>
                      </select>
                    </div>
                  </div>

                </div>

                {/* Course Purpose (Job, Business, Freelancing, Skill Development) */}
                <div className="pt-2">
                  <label className="block text-xs font-bold text-[#111111] mb-2">
                    Course Purpose <span className="text-[#FF1744]">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {['Job', 'Business', 'Freelancing', 'Skill Development'].map((purpose) => (
                      <button
                        type="button"
                        key={purpose}
                        onClick={() => setFormData({ ...formData, coursePurpose: purpose })}
                        className={`py-2.5 px-3 rounded-xl text-xs font-heading font-bold border transition-all cursor-pointer text-center ${
                          formData.coursePurpose === purpose
                            ? 'bg-[#FF1744] text-white border-[#FF1744] shadow-sm'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                        }`}
                      >
                        {purpose}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Your Nearest Branch */}
                <div className="pt-2">
                  <label className="block text-xs font-bold text-[#111111] mb-2">
                    Your Nearest Branch <span className="text-[#FF1744]">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {branches.map((branch) => (
                      <label
                        key={branch}
                        className={`flex items-center space-x-2 p-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                          formData.nearestBranch === branch
                            ? 'bg-red-50 text-[#FF1744] border-[#FF5C7A]/50 font-bold'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        <input
                          type="radio"
                          name="nearestBranch"
                          value={branch}
                          checked={formData.nearestBranch === branch}
                          onChange={(e) => setFormData({ ...formData, nearestBranch: e.target.value })}
                          className="accent-[#FF1744]"
                        />
                        <span className="truncate">{branch}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Preferable Batch Time & Course Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  
                  {/* Preferable Batch Time */}
                  <div>
                    <label className="block text-xs font-bold text-[#111111] mb-2">
                      Preferable Batch Time <span className="text-[#FF1744]">*</span>
                    </label>
                    <div className="flex items-center space-x-3">
                      {["Weekday's batch", "Weekend batch"].map((batch) => (
                        <label
                          key={batch}
                          className={`flex-1 flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                            formData.batchTime === batch
                              ? 'bg-[#111827] text-white border-[#111827]'
                              : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                          }`}
                        >
                          <input
                            type="radio"
                            name="batchTime"
                            value={batch}
                            checked={formData.batchTime === batch}
                            onChange={(e) => setFormData({ ...formData, batchTime: e.target.value })}
                            className="accent-[#FF1744]"
                          />
                          <span>{batch}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Course Type */}
                  <div>
                    <label className="block text-xs font-bold text-[#111111] mb-2">
                      Course Type <span className="text-[#FF1744]">*</span>
                    </label>
                    <div className="flex items-center space-x-3">
                      {['Online', 'Offline'].map((type) => (
                        <label
                          key={type}
                          className={`flex-1 flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                            formData.courseType === type
                              ? 'bg-[#FF1744] text-white border-[#FF1744]'
                              : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                          }`}
                        >
                          <input
                            type="radio"
                            name="courseType"
                            value={type}
                            checked={formData.courseType === type}
                            onChange={(e) => setFormData({ ...formData, courseType: e.target.value })}
                            className="accent-[#FF1744]"
                          />
                          <span>{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

              {/* ---------------- 2. SOURCE / INTRODUCED BY ---------------- */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2 border-b border-gray-100 pb-2">
                  <HelpCircle className="w-5 h-5 text-[#FF1744]" />
                  <h3 className="font-heading text-lg font-bold text-[#111111]">
                    2. Who or what introduced you to us?
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {introducedOptions.map((opt) => (
                    <label
                      key={opt}
                      className={`flex items-center space-x-2 p-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                        formData.introducedBy === opt
                          ? 'bg-red-50 text-[#FF1744] border-[#FF5C7A]/50 font-bold'
                          : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      <input
                        type="radio"
                        name="introducedBy"
                        value={opt}
                        checked={formData.introducedBy === opt}
                        onChange={(e) => setFormData({ ...formData, introducedBy: e.target.value })}
                        className="accent-[#FF1744]"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* ---------------- 3. OTHER INFORMATION ---------------- */}
              <div className="space-y-5 pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2 border-b border-gray-100 pb-2">
                  <Laptop className="w-5 h-5 text-[#FF1744]" />
                  <h3 className="font-heading text-lg font-bold text-[#111111]">
                    3. Technical & Background Information
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Laptop / PC */}
                  <div>
                    <label className="block text-xs font-bold text-[#111111] mb-2">
                      Do you Have Your Own Laptop / PC? <span className="text-[#FF1744]">*</span>
                    </label>
                    <div className="flex items-center space-x-2">
                      {['Laptop', 'PC', 'Neither'].map((device) => (
                        <label
                          key={device}
                          className={`flex-1 flex items-center justify-center space-x-1.5 py-2 px-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                            formData.laptopOrPc === device
                              ? 'bg-[#111827] text-white border-[#111827]'
                              : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                          }`}
                        >
                          <input
                            type="radio"
                            name="laptopOrPc"
                            value={device}
                            checked={formData.laptopOrPc === device}
                            onChange={(e) => setFormData({ ...formData, laptopOrPc: e.target.value })}
                            className="accent-[#FF1744]"
                          />
                          <span>{device}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Basic Knowledge of Computer */}
                  <div>
                    <label className="block text-xs font-bold text-[#111111] mb-2">
                      Do you Have Basic Knowledge of Computer? <span className="text-[#FF1744]">*</span>
                    </label>
                    <div className="flex items-center space-x-2">
                      {['Yes', 'No'].map((ans) => (
                        <label
                          key={ans}
                          className={`flex-1 flex items-center justify-center space-x-1.5 py-2 px-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                            formData.basicComputerKnowledge === ans
                              ? 'bg-[#FF1744] text-white border-[#FF1744]'
                              : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                          }`}
                        >
                          <input
                            type="radio"
                            name="basicComputerKnowledge"
                            value={ans}
                            checked={formData.basicComputerKnowledge === ans}
                            onChange={(e) => setFormData({ ...formData, basicComputerKnowledge: e.target.value })}
                            className="accent-[#FF1744]"
                          />
                          <span>{ans}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Basic Knowledge of Microsoft Office */}
                  <div>
                    <label className="block text-xs font-bold text-[#111111] mb-2">
                      Do you Have Basic Knowledge of MS Office?
                    </label>
                    <div className="flex items-center space-x-2">
                      {['Yes', 'No'].map((ans) => (
                        <label
                          key={ans}
                          className={`flex-1 flex items-center justify-center space-x-1.5 py-2 px-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                            formData.basicMsOfficeKnowledge === ans
                              ? 'bg-[#111827] text-white border-[#111827]'
                              : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                          }`}
                        >
                          <input
                            type="radio"
                            name="basicMsOfficeKnowledge"
                            value={ans}
                            checked={formData.basicMsOfficeKnowledge === ans}
                            onChange={(e) => setFormData({ ...formData, basicMsOfficeKnowledge: e.target.value })}
                            className="accent-[#FF1744]"
                          />
                          <span>{ans}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Time Spent on Social Media */}
                  <div>
                    <label className="block text-xs font-bold text-[#111111] mb-2">
                      How much time do you spend on social media daily?
                    </label>
                    <select
                      value={formData.socialMediaTime}
                      onChange={(e) => setFormData({ ...formData, socialMediaTime: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs font-medium focus:outline-none focus:border-[#FF1744] ${
                        formData.socialMediaTime ? 'text-[#111111]' : 'text-gray-400'
                      }`}
                    >
                      <option value="">Select Daily Time Spent</option>
                      <option value="below 10 Min">Below 10 Minutes</option>
                      <option value="10 min 30 min">10 Min - 30 Minutes</option>
                      <option value="30 min above">30 Minutes & Above</option>
                    </select>
                  </div>

                </div>

                {/* Social Media Accounts */}
                <div>
                  <label className="block text-xs font-bold text-[#111111] mb-2">
                    Do you have any of the following social media accounts?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'Pinterest'].map((acc) => (
                      <label
                        key={acc}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                          formData.socialMediaAccounts.includes(acc)
                            ? 'bg-red-50 text-[#FF1744] border-[#FF5C7A]/50 font-bold'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.socialMediaAccounts.includes(acc)}
                          onChange={() => handleCheckboxChange(acc)}
                          className="accent-[#FF1744] rounded"
                        />
                        <span>{acc}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Online Shopping / Transactions */}
                <div>
                  <label className="block text-xs font-bold text-[#111111] mb-2">
                    Have you ever done any online shopping or digital transactions?
                  </label>
                  <div className="flex items-center space-x-3 max-w-xs">
                    {['Yes', 'No'].map((ans) => (
                      <label
                        key={ans}
                        className={`flex-1 flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                          formData.onlineShoppingExperience === ans
                            ? 'bg-[#111827] text-white border-[#111827]'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        <input
                          type="radio"
                          name="onlineShoppingExperience"
                          value={ans}
                          checked={formData.onlineShoppingExperience === ans}
                          onChange={(e) => setFormData({ ...formData, onlineShoppingExperience: e.target.value })}
                          className="accent-[#FF1744]"
                        />
                        <span>{ans}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* What do you know about Digital Marketing */}
                <div>
                  <label className="block text-xs font-bold text-[#111111] mb-1.5">
                    What do you know about Digital Marketing? <span className="text-gray-400 font-normal">(Answer in one sentence)</span>
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Briefly describe what you know or expect to learn..."
                    value={formData.whatDoYouKnowAboutDM}
                    onChange={(e) => setFormData({ ...formData, whatDoYouKnowAboutDM: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-gray-50 border border-gray-200 text-[#111111] text-xs sm:text-sm focus:outline-none focus:border-[#FF1744] transition-all resize-none"
                  />
                </div>

              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-gray-100">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-cta-red text-white font-heading font-extrabold text-sm sm:text-base rounded-2xl shadow-saas hover:opacity-95 transition-all flex items-center justify-center space-x-2 cursor-pointer active:scale-95 disabled:opacity-50"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{isSubmitting ? 'Submitting Enquiry...' : 'SUBMIT ENQUIRY FORM'}</span>
                </button>

                <p className="text-[11px] text-gray-400 text-center mt-3 font-medium">
                  🔒 Your information is confidential and will be used only for course admission counselling.
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
