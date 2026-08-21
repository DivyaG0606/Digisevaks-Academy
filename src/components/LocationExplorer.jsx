import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Search, Sparkles, Building2, Monitor, ChevronRight } from 'lucide-react';
import { allCitiesFooterList, getCityData } from '../data/locationsData';

// Grouping cities logically by region for structured navigation
const REGION_CATEGORIES = [
  {
    id: 'pune-pcmc',
    name: 'Pune & PCMC',
    slugs: ['karve-nagar-pune', 'pimpri-chinchwad', 'hadapsar', 'thergaon-pcmc', 'viman-nagar', 'nal-stop', 'kothrud-pune', 'baner-pune', 'wakad-pune', 'hinjewadi-pune', 'akurdi-pcmc', 'bhosari-pcmc']
  },
  {
    id: 'mumbai-mmr',
    name: 'Mumbai & MMR',
    slugs: ['mumbai', 'navi-mumbai', 'thane', 'kalyan-dombivli', 'panvel', 'vasai-virar', 'mira-bhayandar', 'andheri', 'borivali', 'ghatkopar']
  },
  {
    id: 'marathwada',
    name: 'Marathwada',
    slugs: ['chhatrapati-sambhajinagar', 'nanded', 'latur', 'parbhani', 'beed', 'jalna', 'osmanabad-dharashiv']
  },
  {
    id: 'vidarbha-north',
    name: 'Vidarbha & North MH',
    slugs: ['nagpur', 'nashik', 'amravati', 'akola', 'chandrapur', 'yavatmal', 'jalgaon', 'dhule', 'ahmednagar-ahilyanagar']
  },
  {
    id: 'western-konkan',
    name: 'Western MH & Konkan',
    slugs: ['kolhapur', 'sangli', 'satara', 'karad', 'solapur', 'ratnagiri']
  },
  {
    id: 'national',
    name: 'Other Major Indian Cities',
    slugs: ['ahmedabad', 'surat', 'indore', 'bhopal', 'jaipur', 'delhi-ncr', 'bengaluru', 'hyderabad']
  }
];

export default function LocationExplorer({ currentSlug }) {
  const [activeRegion, setActiveRegion] = useState('pune-pcmc');
  const [searchQuery, setSearchQuery] = useState('');

  const currentCategory = REGION_CATEGORIES.find(cat => cat.id === activeRegion) || REGION_CATEGORIES[0];

  // Filter cities by active category or search query
  const filteredSlugs = searchQuery.trim() !== ''
    ? allCitiesFooterList
        .filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase().trim()))
        .map(c => c.slug)
    : currentCategory.slugs;

  return (
    <section className="py-14 sm:py-20 bg-slate-950 text-white font-sans relative overflow-hidden border-t border-slate-800">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-[#FF1744]/10 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FF1744]/20 border border-[#FF1744]/40 text-[#FF5C7A] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#FF1744]" />
            <span>NATIONWIDE TRAINING NETWORK</span>
          </div>
          
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white">
            Attend Live Digital Marketing Training From Your City
          </h2>
          
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            DIGISEVAKS Academy offers official classroom campuses and interactive live online training across Maharashtra & India with 100% placement support.
          </p>

          {/* Search Box */}
          <div className="pt-4 max-w-md mx-auto relative">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search your city or location (e.g. Parbhani, Beed, Latur)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/15 rounded-2xl text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#FF1744] transition-all"
              />
            </div>
          </div>
        </div>

        {/* Region Selector Tabs (Hidden when searching) */}
        {searchQuery.trim() === '' && (
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-white/10 pb-6">
            {REGION_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveRegion(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-2 ${
                  activeRegion === cat.id
                    ? 'bg-[#FF1744] text-white shadow-lg shadow-[#FF1744]/20'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                <span>{cat.name}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-black/30 text-white/80">
                  {cat.slugs.length}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* City Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSlugs.map((slug) => {
            const city = getCityData(slug);
            if (!city) return null;

            const isCurrent = slug === currentSlug;
            const isPhysical = city.physicalBranch;

            return (
              <Link
                key={slug}
                to={city.route}
                className={`p-4 rounded-2xl border transition-all duration-300 group flex flex-col justify-between space-y-3 ${
                  isCurrent
                    ? 'bg-[#FF1744]/15 border-[#FF1744] text-white'
                    : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/30 text-gray-200'
                }`}
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <MapPin className={`w-4 h-4 ${isPhysical ? 'text-[#FF1744]' : 'text-cyan-400'}`} />
                      <span className="font-heading font-bold text-xs sm:text-sm text-white group-hover:text-[#FF5C7A] transition-colors">
                        {city.name}
                      </span>
                    </div>

                    {isPhysical ? (
                      <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        <Building2 className="w-3 h-3" />
                        <span>Campus</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                        <Monitor className="w-3 h-3" />
                        <span>Online</span>
                      </span>
                    )}
                  </div>

                  <p className="text-[11px] text-gray-400 line-clamp-1">
                    Digital Marketing Course in {city.name}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-semibold text-gray-300 group-hover:text-white">
                  <span>Explore Course</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#FF1744] group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center text-xs text-gray-400 space-y-1">
          <p>
            <strong className="text-white">Truthful Location Commitment:</strong> Classroom campus training is conducted exclusively at our 2 official branch locations: <strong className="text-[#FF5C7A]">Karve Nagar (HQ)</strong> and <strong className="text-[#FF5C7A]">PCMC (Chinchwad Campus)</strong>. All other regional and national locations feature 100% Live Interactive Online Batches with real-money ad budget labs and dedicated placement support.
          </p>
        </div>

      </div>
    </section>
  );
}
