import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, BookOpen, Briefcase, Phone, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFoundPage({ onOpenDemo }) {
  return (
    <>
      <SEO pageKey="notFound" noindex={true} />
      <div className="py-16 sm:py-24 bg-[#FFF5F7]/40 min-h-[75vh] flex items-center justify-center font-sans">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-6">
          
          <div className="w-20 h-20 rounded-3xl bg-red-100 text-[#FF1744] flex items-center justify-center mx-auto shadow-md">
            <Compass className="w-10 h-10 animate-bounce" />
          </div>

          <span className="bg-white text-[#FF1744] border border-[#FF5C7A]/30 text-xs font-heading font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-xs inline-block">
            Error 404 — Page Not Found
          </span>

          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
            Oops! This Page Seems Lost
          </h1>

          <p className="text-sm sm:text-base text-gray-600 max-w-lg mx-auto leading-relaxed">
            The page or course link you are looking for might have been renamed, removed, or is temporarily unavailable. Let's get you back on track!
          </p>

          {/* Useful Navigation Shortcut Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="px-6 py-3 bg-[#FF1744] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md hover:bg-[#D50032] transition-all inline-flex items-center space-x-2"
            >
              <Home className="w-4 h-4" />
              <span>Back to Homepage</span>
            </Link>

            <Link
              to="/courses"
              className="px-6 py-3 bg-white text-[#111111] border border-gray-300 text-xs sm:text-sm font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-all inline-flex items-center space-x-2"
            >
              <BookOpen className="w-4 h-4 text-[#FF1744]" />
              <span>Explore Courses</span>
            </Link>

            <Link
              to="/placements"
              className="px-6 py-3 bg-white text-[#111111] border border-gray-300 text-xs sm:text-sm font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-all inline-flex items-center space-x-2"
            >
              <Briefcase className="w-4 h-4 text-[#FF1744]" />
              <span>Placements</span>
            </Link>

            <button
              onClick={() => onOpenDemo && onOpenDemo('404_page')}
              className="px-6 py-3 bg-[#111827] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md hover:bg-gray-900 transition-all inline-flex items-center space-x-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#FF5C7A]" />
              <span>Book Free Demo</span>
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
