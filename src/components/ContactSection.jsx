import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Navigation } from 'lucide-react';
import { submitLead } from '../services/leadService';
import { TextMaskReveal, FadeUp, ScaleReveal } from './animations/MotionComponents';

export default function ContactSection({ showMap = true }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'Classroom Digital Marketing Course'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitLead({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        course: formData.course,
        source: 'Contact Section Form'
      });
    } catch (err) {
      console.log('Submission error:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', course: 'Classroom Digital Marketing Course' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-6 sm:py-16 bg-[#FFF5F7] border-t border-gray-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">

          {/* Left Contact Info */}
          <div className="lg:col-span-6 space-y-3.5 sm:space-y-6">
            <span className="bg-white text-[#FF1744] border border-[#FF5C7A]/30 text-[10px] sm:text-xs font-heading font-bold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full uppercase tracking-wider shadow-xs inline-block">
              Contact & Location
            </span>

            <TextMaskReveal
              as="h2"
              className="font-heading text-xl sm:text-3xl lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight"
            >
              Visit Our Academy Campus
            </TextMaskReveal>

            <FadeUp delay={0.1}>
              <p className="text-[#6B7280] text-xs sm:text-base leading-relaxed font-normal">
                Have questions about batch timings, practical modules, or placement guidance? Reach out to our admissions team or visit our Karvenagar academy campus.
              </p>
            </FadeUp>

            <div className="space-y-3.5 sm:space-y-5 pt-1">
              {/* Phone & WhatsApp */}
              <FadeUp delay={0.15}>
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-white text-[#FF1744] border border-[#FF5C7A]/30 flex items-center justify-center flex-shrink-0 shadow-xs">
                    <Phone className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xs sm:text-sm font-bold text-[#111111]">Call / WhatsApp Support</h4>
                    <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#FF1744] mt-0.5 flex-wrap">
                      <a href="tel:+918459439131" className="hover:underline">+91 84594 39131</a>
                      <span className="text-gray-400">/</span>
                      <a href="tel:+918788165631" className="hover:underline">+91 87881 65631</a>
                    </div>
                    <span className="text-[10px] sm:text-xs text-[#6B7280]">Mon - Sat (9:00 AM - 7:00 PM IST)</span>
                  </div>
                </div>
              </FadeUp>

              {/* Email */}
              <FadeUp delay={0.2}>
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-white text-[#FF1744] border border-[#FF5C7A]/30 flex items-center justify-center flex-shrink-0 shadow-xs">
                    <Mail className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xs sm:text-sm font-bold text-[#111111]">Official Email</h4>
                    <a href="mailto:digisevkswebsite@gmail.com" className="text-xs sm:text-sm font-bold text-[#111111] hover:text-[#FF1744] transition-colors mt-0.5 block break-all">
                      digisevkswebsite@gmail.com
                    </a>
                    <span className="text-[10px] sm:text-xs text-[#6B7280]">Quick responses within 2 hours</span>
                  </div>
                </div>
              </FadeUp>

              {/* Address */}
              <FadeUp delay={0.25}>
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-white text-[#FF1744] border border-[#FF5C7A]/30 flex items-center justify-center flex-shrink-0 shadow-xs">
                    <MapPin className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xs sm:text-sm font-bold text-[#111111]">DIGISEVAKS Academy Address</h4>
                    <p className="text-[11px] sm:text-xs text-[#111111] font-semibold mt-0.5 leading-relaxed">
                      Sai Malhar Apartment, Swastik Colony Rd, near Sainath Khanawal / Cummins College Rd, Karvenagar, Pune, MH 411052
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>

          {/* Right Lead Capture Form */}
          <div className="lg:col-span-6 w-full">
            <ScaleReveal delay={0.2}>
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-[#111111] shadow-xl border border-gray-200">
                <h3 className="font-heading text-base sm:text-2xl font-bold text-[#111111] mb-1">Book Your Free Demo Class</h3>
                <p className="text-[11px] sm:text-xs text-[#6B7280] mb-3 sm:mb-6">
                  Fill in your details below. All fields marked with <span className="text-[#FF1744] font-bold">*</span> are mandatory.
                </p>

                {submitted ? (
                  <div className="bg-[#FFF5F7] border border-[#FF5C7A]/40 rounded-2xl p-5 text-center space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-[#FF1744] mx-auto" />
                    <h4 className="font-heading text-base font-bold text-[#111111]">Registration Successful!</h4>
                    <p className="text-xs text-[#6B7280]">
                      Thank you! Our admission counselor will call you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-[#111111] mb-1">
                        Full Name <span className="text-[#FF1744]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#111111] text-xs sm:text-sm focus:outline-none focus:border-[#FF1744] placeholder-gray-400 font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-[#111111] mb-1">
                        Phone / WhatsApp Number <span className="text-[#FF1744]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 84594 39131"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#111111] text-xs sm:text-sm focus:outline-none focus:border-[#FF1744] placeholder-gray-400 font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-[#111111] mb-1">
                        Email Address <span className="text-[#FF1744]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#111111] text-xs sm:text-sm focus:outline-none focus:border-[#FF1744] placeholder-gray-400 font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-[#111111] mb-1">
                        Select Program Mode <span className="text-[#FF1744]">*</span>
                      </label>
                      <select
                        required
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#111111] text-xs sm:text-sm focus:outline-none focus:border-[#FF1744]"
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
                      className="w-full py-3 sm:py-4 bg-cta-red text-white font-heading font-bold text-xs sm:text-sm rounded-xl shadow-saas hover:opacity-95 transition-all flex items-center justify-center space-x-2 active:scale-95 cursor-pointer disabled:opacity-50 mt-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Submitting Application...' : 'Submit & Reserve Seat'}</span>
                    </button>
                  </form>
                )}
              </div>
            </ScaleReveal>
          </div>

        </div>

        {/* Embedded Google Map Section */}
        {showMap && (
          <FadeUp delay={0.2}>
            <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-8 shadow-xl border border-gray-200 space-y-3">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 pb-2.5 border-b border-gray-100">
                <div>
                  <div className="inline-flex items-center space-x-1 text-[10px] sm:text-xs font-bold text-[#FF1744] uppercase tracking-wider">
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Google Maps Location</span>
                  </div>
                  <h3 className="font-heading text-sm sm:text-xl font-extrabold text-[#111111] mt-0.5">
                    Find DIGISEVAKS Academy on Google Maps
                  </h3>
                </div>

                <a
                  href="https://maps.google.com/?q=Digisevaks+Academy+Karvenagar+Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-3.5 py-2 bg-gray-100 hover:bg-[#FF1744] text-[#111111] hover:text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center space-x-1.5 border border-gray-200 cursor-pointer"
                >
                  <span>Get Directions</span>
                  <Navigation className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="w-full overflow-hidden rounded-xl sm:rounded-2xl border border-gray-200 shadow-inner h-[220px] sm:h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.9347579506457!2d73.8226602!3d18.486614199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa92a10063cff22b7%3A0x6ddfc9f6e87ba932!2sDigisevaks%20Academy!5e0!3m2!1sen!2sin!4v1786095716387!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="DIGISEVAKS Academy Google Maps Location"
                />
              </div>
            </div>
          </FadeUp>
        )}

      </div>
    </section>
  );
}
