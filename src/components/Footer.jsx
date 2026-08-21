import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { allCitiesFooterList } from '../data/locationsData';

export default function Footer({ onOpenDemo }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const CityInterlinkingBlock = () => (
    <div className="space-y-6">
      {/* Tier 1: Official Offline Classroom Campuses */}
      <div className="space-y-2">
        <div className="text-[11px] font-bold text-[#FF5C7A] uppercase tracking-wider flex items-center space-x-2">
          <MapPin className="w-3.5 h-3.5 text-[#FF1744]" />
          <span>Official Offline Classroom Campuses:</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-bold text-white">
          <Link to="/digital-marketing-courses-in-karve-nagar-pune" className="px-3 py-1 bg-[#FF1744]/20 border border-[#FF1744]/40 rounded-lg hover:bg-[#FF1744] hover:text-white transition-all text-[#FF5C7A] flex items-center space-x-1.5">
            <span>Karve Nagar (Headquarters)</span>
          </Link>
          <span className="text-gray-600">•</span>
          <Link to="/digital-marketing-courses-in-pimpri-chinchwad" className="px-3 py-1 bg-[#FF1744]/20 border border-[#FF1744]/40 rounded-lg hover:bg-[#FF1744] hover:text-white transition-all text-[#FF5C7A] flex items-center space-x-1.5">
            <span>PCMC (Chinchwad Campus)</span>
          </Link>
        </div>
      </div>

      {/* Tier 2: Pune & PCMC Online Live Training Localities */}
      <div className="space-y-2">
        <div className="text-[11px] font-bold text-gray-300 uppercase tracking-wider">
          Pune & PCMC Online Live Batches & Localities:
        </div>
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs text-gray-400">
          <Link to="/digital-marketing-courses-in-thergaon-pcmc" className="hover:text-[#FF5C7A] transition-colors">Thergaon PCMC</Link>
          <span className="text-gray-600">•</span>
          <Link to="/digital-marketing-courses-in-hadapsar" className="hover:text-[#FF5C7A] transition-colors">Hadapsar</Link>
          <span className="text-gray-600">•</span>
          <Link to="/digital-marketing-courses-in-viman-nagar" className="hover:text-[#FF5C7A] transition-colors">Viman Nagar</Link>
          <span className="text-gray-600">•</span>
          <Link to="/digital-marketing-courses-in-nal-stop" className="hover:text-[#FF5C7A] transition-colors">Nal Stop Metro Hub</Link>
          <span className="text-gray-600">•</span>
          <Link to="/digital-marketing-courses-in-kothrud-pune" className="hover:text-[#FF5C7A] transition-colors">Kothrud</Link>
          <span className="text-gray-600">•</span>
          <Link to="/digital-marketing-courses-in-baner-pune" className="hover:text-[#FF5C7A] transition-colors">Baner</Link>
          <span className="text-gray-600">•</span>
          <Link to="/digital-marketing-courses-in-wakad-pune" className="hover:text-[#FF5C7A] transition-colors">Wakad</Link>
          <span className="text-gray-600">•</span>
          <Link to="/digital-marketing-courses-in-hinjewadi-pune" className="hover:text-[#FF5C7A] transition-colors">Hinjewadi IT Park</Link>
          <span className="text-gray-600">•</span>
          <Link to="/digital-marketing-courses-in-akurdi-pcmc" className="hover:text-[#FF5C7A] transition-colors">Akurdi</Link>
          <span className="text-gray-600">•</span>
          <Link to="/digital-marketing-courses-in-bhosari-pcmc" className="hover:text-[#FF5C7A] transition-colors">Bhosari</Link>
        </div>
      </div>

      {/* Tier 3: Maharashtra & National Online Live Interactive Batches */}
      <div className="space-y-2">
        <div className="text-[11px] font-bold text-gray-300 uppercase tracking-wider">
          Maharashtra & India Online Live Interactive Batches:
        </div>
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs text-gray-400">
          <Link to="/digital-marketing-courses-in-chhatrapati-sambhajinagar" className="hover:text-[#FF5C7A] transition-colors font-semibold text-gray-200">Chhatrapati Sambhajinagar</Link>
          <span className="text-gray-600">•</span>
          <Link to="/digital-marketing-courses-in-nagpur" className="hover:text-[#FF5C7A] transition-colors font-semibold text-gray-200">Nagpur</Link>
          <span className="text-gray-600">•</span>
          <Link to="/digital-marketing-courses-in-nashik" className="hover:text-[#FF5C7A] transition-colors font-semibold text-gray-200">Nashik</Link>
          <span className="text-gray-600">•</span>
          <Link to="/digital-marketing-courses-in-kolhapur" className="hover:text-[#FF5C7A] transition-colors">Kolhapur</Link>
          <span className="text-gray-600">•</span>
          <Link to="/digital-marketing-courses-in-sangli" className="hover:text-[#FF5C7A] transition-colors">Sangli</Link>
          <span className="text-gray-600">•</span>
          <Link to="/digital-marketing-courses-in-satara" className="hover:text-[#FF5C7A] transition-colors">Satara</Link>
          <span className="text-gray-600">•</span>
          <Link to="/digital-marketing-courses-in-karad" className="hover:text-[#FF5C7A] transition-colors">Karad</Link>
          <span className="text-gray-600">•</span>
          <Link to="/digital-marketing-courses-in-solapur" className="hover:text-[#FF5C7A] transition-colors">Solapur</Link>
          <span className="text-gray-600">•</span>
          <Link to="/digital-marketing-courses-in-ahmednagar" className="hover:text-[#FF5C7A] transition-colors">Ahmednagar</Link>
          <span className="text-gray-600">•</span>
          <Link to="/digital-marketing-courses-in-jalgaon" className="hover:text-[#FF5C7A] transition-colors">Jalgaon</Link>
          <span className="text-gray-600">•</span>
          <Link to="/digital-marketing-courses-in-dhule" className="hover:text-[#FF5C7A] transition-colors">Dhule</Link>
          <span className="text-gray-600">•</span>
          <Link to="/digital-marketing-courses-in-latur" className="hover:text-[#FF5C7A] transition-colors">Latur</Link>
        </div>
      </div>

      {/* Tier 3: Online Live Interactive Training Cities */}
      <div className="space-y-2">
        <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
          Online Live Interactive Batches Across India:
        </div>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-gray-500">
          {allCitiesFooterList.slice(20).map((cityItem, idx) => (
            <React.Fragment key={idx}>
              <Link to={cityItem.route} className="hover:text-gray-300 transition-colors">
                {cityItem.name}
              </Link>
              {idx < allCitiesFooterList.length - 21 && <span className="text-gray-700">|</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <footer className="bg-[#111827] text-white border-t border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        
        {/* City Interlinking Section (Rendered once inside Footer across all pages) */}
        <div className="pb-8 mb-10 border-b border-gray-800">
          <CityInterlinkingBlock />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">

          {/* Col 1: Brand & Socials */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-3.5 sm:space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/logo.png" alt="DIGISEVAKS Logo" className="h-9 sm:h-10 w-auto bg-white p-1 rounded-lg flex-shrink-0" />
              <div className="flex flex-col">
                <span className="font-heading text-lg sm:text-xl font-extrabold text-white leading-tight">DIGISEVAKS ACADEMY</span>
                <span className="text-[9px] sm:text-[10px] text-[#FF5C7A] font-bold uppercase tracking-widest mt-0.5">
                  AI-Powered Agency Institute
                </span>
              </div>
            </Link>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              AI-Powered, Agency-Style Digital Marketing Academy in Pune. 100% practical training, real client-style live projects, and structured career support.
            </p>

            {/* Official Social Links */}
            <div className="pt-1">
              <span className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">Connect With Us</span>
              <div className="flex items-center space-x-2.5">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/digisevaks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-[#FF1744] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/digisevaks.pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-[#FF1744] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://in.linkedin.com/company/digisevaks-media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-[#FF1744] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918459439131?text=Hello%20DIGISEVAKS%20Academy!%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20AI-Powered%20Digital%20Marketing%20courses%2C%20fees%2C%20batch%20timings%2C%20and%20free%20demo%20class.%20Please%20guide%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Pages */}
          <div>
            <h4 className="font-heading text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-3">Explore Pages</h4>
            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li><Link to="/" className="hover:text-[#FF5C7A] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#FF5C7A] transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-[#FF5C7A] transition-colors">Course Programs</Link></li>
              <li><Link to="/projects" className="hover:text-[#FF5C7A] transition-colors">Live Projects</Link></li>
              <li><Link to="/tools" className="hover:text-[#FF5C7A] transition-colors">50+ AI Tools</Link></li>
              <li><Link to="/placements" className="hover:text-[#FF5C7A] transition-colors">Placements & Reviews</Link></li>
              <li><Link to="/blog" className="hover:text-[#FF5C7A] transition-colors">Blog / Guides</Link></li>
              <li><Link to="/contact" className="hover:text-[#FF5C7A] transition-colors">Contact & Branches</Link></li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <h4 className="font-heading text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-3">Our Specializations</h4>
            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li><Link to="/courses" className="hover:text-[#FF5C7A] transition-colors">• Online Digital Marketing Course</Link></li>
              <li><Link to="/courses" className="hover:text-[#FF5C7A] transition-colors">• Offline & Classroom Digital Marketing Course</Link></li>
              <li><Link to="/digital-marketing-courses-in-pimpri-chinchwad" className="hover:text-[#FF5C7A] transition-colors">• Digital Marketing Course PCMC</Link></li>
              <li><Link to="/courses" className="hover:text-[#FF5C7A] transition-colors">• Advanced Performance Marketing Course</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact Support */}
          <div>
            <h4 className="font-heading text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-3">Support & Admissions</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#FF1744] flex-shrink-0" />
                <div className="flex items-center space-x-1 flex-wrap">
                  <a href="tel:+918459439131" className="hover:text-white transition-colors">+91 84594 39131</a>
                  <span>/</span>
                  <a href="tel:+918788165631" className="hover:text-white transition-colors">87881 65631</a>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#FF1744] flex-shrink-0" />
                <a href="mailto:digisevkswebsite@gmail.com" className="hover:text-white transition-colors break-all">digisevkswebsite@gmail.com</a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF1744] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">Sai Malhar Apartment, Swastik Colony, Karvenagar, Pune 411052</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Google Map Embed */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 mb-3.5">
            <div>
              <h4 className="font-heading text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Campus Location Map</h4>
              <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5">Sai Malhar Apartment, Swastik Colony, Karvenagar, Pune 411052</p>
            </div>
            <a
              href="https://maps.google.com/?q=Digisevaks+Academy+Karvenagar+Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#FF5C7A] font-bold hover:underline flex items-center space-x-1"
            >
              <span>Get Google Maps Directions</span>
              <span>→</span>
            </a>
          </div>

          <div className="w-full h-40 sm:h-52 rounded-xl sm:rounded-2xl overflow-hidden border border-gray-800 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.9347579506457!2d73.8226602!3d18.486614199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa92a10063cff22b7%3A0x6ddfc9f6e87ba932!2sDigisevaks%20Academy!5e0!3m2!1sen!2sin!4v1786095716387!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="DIGISEVAKS Academy Google Maps Footer Location"
            />
          </div>
        </div>

        {/* City Location Links Grid (Shown on ALL pages) */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <CityInterlinkingBlock />
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} DIGISEVAKS Academy. All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <button onClick={() => onOpenDemo && onOpenDemo('brochure')} className="hover:text-gray-300 cursor-pointer">Download Syllabus</button>
            <button onClick={() => onOpenDemo && onOpenDemo('footer')} className="hover:text-gray-300 cursor-pointer">Book Free Demo</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
