import React, { useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Phone, Mail, Download, Menu, X, Sparkles, ChevronDown, BookOpen, Laptop, Target, Building2, UserCheck } from 'lucide-react';

export default function Navbar({ onOpenDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const activeClass = "text-[#FF1744] font-bold border-b-2 border-[#FF1744] pb-1";
  const inactiveClass = "text-[#111111] hover:text-[#FF1744] font-semibold transition-colors pb-1";

  const courseList = [
    { name: 'Classroom Digital Marketing Course', icon: BookOpen, desc: '100% In-person agency training' },
    { name: 'Practical Digital Marketing Course', icon: Laptop, desc: 'Agency-style practical mentorship' },
    { name: 'Advanced Performance Marketing Course', icon: Target, desc: 'Meta Ads, Google Ads & GA4 mastery' },
    { name: 'Corporate Digital Marketing Course', icon: Building2, desc: 'Upskilling for companies & teams' },
    { name: 'Digital Marketing Executive Program', icon: UserCheck, desc: 'Job-ready career transformation' },
    { name: 'Complete Course Syllabus', icon: BookOpen, desc: 'View official curriculum details', path: '/courses/digital-marketing/syllabus' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 font-heading">

      {/* Top Announcement Bar with Phone Numbers, Email, WhatsApp & Social Links */}
      <div className="bg-[#111827] text-white text-xs py-2 px-4">
        <div className="w-full pl-2 sm:pl-4 pr-2 sm:pr-4 flex flex-wrap items-center justify-between gap-2">

          {/* Admissions Open Badge & Tagline */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => navigate('/contact')}
              className="bg-[#FF1744] hover:bg-[#D50032] text-white font-bold px-2.5 py-0.5 rounded text-[10px] uppercase tracking-wider transition-all transform hover:scale-105 shadow-sm"
            >
              Admissions Open
            </button>
            <span className="hidden lg:inline text-gray-300 text-[11px]">
              🚀 AI-Powered Agency Style Digital Marketing Master Program
            </span>
          </div>

          {/* Contact Numbers, Email, WhatsApp & Social Media Links */}
          <div className="flex flex-wrap items-center space-x-3 sm:space-x-4 text-[11px]">

            {/* Phone Numbers */}
            <div className="flex items-center space-x-2 text-gray-300">
              <Phone className="w-3.5 h-3.5 text-[#FF1744]" />
              <a href="tel:+918459439131" className="hover:text-white transition-colors font-semibold">+91 84594 39131</a>
              <span className="text-gray-500">/</span>
              <a href="tel:+918788165631" className="hover:text-white transition-colors font-semibold">+91 87881 65631</a>
            </div>

            {/* Email Address */}
            <a
              href="mailto:digisevkswebsite@gmail.com"
              className="hidden md:flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#FF1744]" />
              <span className="font-semibold">digisevkswebsite@gmail.com</span>
            </a>

            {/* WhatsApp Direct Link */}
            <a
              href="https://wa.me/918459439131?text=Hello%20DIGISEVAKS%20Academy!%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20AI-Powered%20Digital%20Marketing%20courses%2C%20fees%2C%20batch%20timings%2C%20and%20free%20demo%20class.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
            >
              <svg className="w-3.5 h-3.5 fill-emerald-400" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Divider */}
            <span className="text-gray-600 hidden sm:inline">|</span>

            {/* Official Social Media Links */}
            <div className="flex items-center space-x-2.5">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/digisevaks/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 hover:text-[#FF1744] transition-colors p-0.5"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/digisevaks.pune"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-[#FF1744] transition-colors p-0.5"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://in.linkedin.com/company/digisevaks-media"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-[#FF1744] transition-colors p-0.5"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="w-full pl-4 sm:pl-5 pr-4 sm:pr-6 py-2 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center group py-0.5">
          <img
            src="/logo.png"
            alt="DIGISEVAKS Academy Logo"
            className="h-12 sm:h-15 md:h-18 w-auto object-contain max-h-18 transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-6 text-xs lg:text-sm font-semibold">
          <NavLink to="/" className={({ isActive }) => isActive ? activeClass : inactiveClass}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : inactiveClass}>About Us</NavLink>

          {/* Courses Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCoursesDropdownOpen(true)}
            onMouseLeave={() => setCoursesDropdownOpen(false)}
          >
            <button
              onClick={() => navigate('/courses')}
              className="flex items-center space-x-1 text-[#111111] hover:text-[#FF1744] font-semibold transition-colors pb-1 focus:outline-none"
            >
              <span>Courses</span>
              <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${coursesDropdownOpen ? 'rotate-180 text-[#FF1744]' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {coursesDropdownOpen && (
              <div className="absolute top-full left-0 w-[360px] bg-white border border-gray-200 rounded-2xl shadow-2xl p-4 space-y-2 animate-fade-in z-50">
                <div className="px-3 py-1.5 border-b border-gray-100 text-[10px] font-bold text-[#FF1744] uppercase tracking-wider mb-1">
                  Our Specializations
                </div>
                {courseList.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <Link
                      key={i}
                      to={c.path || "/courses"}
                      onClick={() => setCoursesDropdownOpen(false)}
                      className="flex items-start space-x-3.5 p-3 rounded-xl hover:bg-[#FFF5F7] transition-all duration-200 group border border-transparent hover:border-red-100"
                    >
                      <div className="p-2.5 rounded-xl bg-red-50 text-[#FF1744] group-hover:bg-[#FF1744] group-hover:text-white transition-all duration-200 shadow-sm flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#111111] group-hover:text-[#FF1744] transition-colors">{c.name}</div>
                        <div className="text-[11px] text-gray-500 mt-0.5 leading-snug">{c.desc}</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link 
            to="/about#why-choose-us" 
            className={location.pathname === '/about' && location.hash === '#why-choose-us' ? activeClass : inactiveClass}
          >
            Why Choose Us?
          </Link>
          <NavLink to="/placements" className={({ isActive }) => isActive ? activeClass : inactiveClass}>Placements & Reviews</NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? activeClass : inactiveClass}>Blog</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : inactiveClass}>Contact Us</NavLink>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={() => onOpenDemo('brochure')}
            className="px-3.5 py-2 text-xs font-semibold text-[#111111] bg-gray-100 hover:bg-gray-200 rounded-xl transition-all flex items-center space-x-1.5 border border-gray-200 active:scale-95"
          >
            <Download className="w-3.5 h-3.5 text-gray-600" />
            <span>Brochure</span>
          </button>

          <button
            onClick={() => onOpenDemo('demo')}
            className="px-4 py-2 text-xs font-semibold text-white bg-cta-red rounded-xl shadow-saas transition-all flex items-center space-x-1.5 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Book Free Demo</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
            setMobileCoursesOpen(false);
          }}
          className="xl:hidden p-2 rounded-lg text-[#111111] hover:bg-gray-100 focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-2 animate-fade-in">
          <Link to="/" onClick={() => { setMobileMenuOpen(false); setMobileCoursesOpen(false); }} className="block py-2 text-sm font-semibold text-[#111111] border-b border-gray-100">Home</Link>
          <Link to="/about" onClick={() => { setMobileMenuOpen(false); setMobileCoursesOpen(false); }} className="block py-2 text-sm font-semibold text-[#111111] border-b border-gray-100">About Us</Link>

          {/* Mobile Courses Collapsible Accordion */}
          <div className="border-b border-gray-100 py-1">
            <div className="flex items-center justify-between py-1.5 text-sm font-semibold text-[#111111]">
              <Link 
                to="/courses" 
                onClick={() => { setMobileMenuOpen(false); setMobileCoursesOpen(false); }}
                className="hover:text-[#FF1744]"
              >
                Courses & Specializations
              </Link>
              <button 
                onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                className="p-1.5 rounded-lg text-gray-500 hover:text-[#FF1744] hover:bg-red-50 focus:outline-none"
                aria-label="Toggle courses dropdown"
              >
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileCoursesOpen ? 'rotate-180 text-[#FF1744]' : ''}`} />
              </button>
            </div>

            {mobileCoursesOpen && (
              <div className="pl-3 pb-2 pt-1 space-y-2 text-xs border-l-2 border-red-100 ml-1 my-1 animate-fade-in">
                {courseList.map((c, idx) => (
                  <Link
                    key={idx}
                    to={c.path || "/courses"}
                    onClick={() => { setMobileMenuOpen(false); setMobileCoursesOpen(false); }}
                    className="block py-1 font-medium text-gray-700 hover:text-[#FF1744] transition-colors"
                  >
                    • {c.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/about#why-choose-us" onClick={() => { setMobileMenuOpen(false); setMobileCoursesOpen(false); }} className="block py-2 text-sm font-semibold text-[#111111] border-b border-gray-100">Why Choose Us?</Link>
          <Link to="/placements" onClick={() => { setMobileMenuOpen(false); setMobileCoursesOpen(false); }} className="block py-2 text-sm font-semibold text-[#111111] border-b border-gray-100">Placements & Reviews</Link>
          <Link to="/contact" onClick={() => { setMobileMenuOpen(false); setMobileCoursesOpen(false); }} className="block py-2 text-sm font-semibold text-[#111111] border-b border-gray-100">Branches</Link>
          <Link to="/blog" onClick={() => { setMobileMenuOpen(false); setMobileCoursesOpen(false); }} className="block py-2 text-sm font-semibold text-[#111111] border-b border-gray-100">Blog / Knowledge</Link>
          <Link to="/contact" onClick={() => { setMobileMenuOpen(false); setMobileCoursesOpen(false); }} className="block py-2 text-sm font-semibold text-[#111111]">Contact Us</Link>

          <div className="pt-3 flex flex-col space-y-2">
            <button
              onClick={() => { setMobileMenuOpen(false); setMobileCoursesOpen(false); onOpenDemo('demo'); }}
              className="w-full py-3 text-center font-bold text-white bg-cta-red rounded-xl shadow-md text-xs active:scale-95"
            >
              Book Free Demo Class
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
