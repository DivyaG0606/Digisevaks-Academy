import React from 'react';

export default function ToolsTicker() {
  const toolsList = [
    {
      name: 'HubSpot',
      renderIcon: () => (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="#FF7A59">
          <path d="M18.813 11.438a3.17 3.17 0 0 0-2.063-2.969V6.094a3.172 3.172 0 1 0-2.5 0v2.375a3.167 3.167 0 0 0-1.813 4.157l-4.562 2.687a3.167 3.167 0 1 0-1.25 2.163c0-.125.012-.25.038-.375l4.612-2.713a3.168 3.168 0 0 0 3.325.263l2.888 1.7a3.172 3.172 0 1 0 1.325-2.076l-2.888-1.7a3.172 3.172 0 0 0 2.888-3.163z" />
        </svg>
      )
    },
    {
      name: 'Figma',
      renderIcon: () => (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 38 57">
          <path fill="#F24E1E" d="M19 28.5a9.5 9.5 0 1 1 0-19 9.5 9.5 0 0 1 0 19z" />
          <path fill="#FF7262" d="M9.5 19A9.5 9.5 0 1 1 19 9.5 9.5 9.5 0 0 1 9.5 19z" />
          <path fill="#F24E1E" d="M9.5 0A9.5 9.5 0 0 0 0 9.5 9.5 9.5 0 0 0 9.5 19H19V0H9.5z" />
          <path fill="#A259FF" d="M9.5 38A9.5 9.5 0 0 0 0 28.5 9.5 9.5 0 0 0 9.5 19H19v19H9.5z" />
          <path fill="#1ABCFE" d="M9.5 57A9.5 9.5 0 0 0 19 47.5V38H9.5A9.5 9.5 0 0 0 0 47.5 9.5 9.5 0 0 0 9.5 57z" />
          <path fill="#0ACF83" d="M28.5 28.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19z" />
        </svg>
      )
    },
    {
      name: 'WordPress',
      renderIcon: () => (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="#21759B">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm.12 1.63a8.31 8.31 0 0 1 5.49 2.58l-2.6 7.12-2.73-7.46a8.38 8.38 0 0 1-.16-2.24zm-4.7 1A8.29 8.29 0 0 1 11.23 3.7l-4.14 11.31-2.22-6.07a8.33 8.33 0 0 1 2.55-5.31zm-3.79 8.37l3.19 8.7a8.38 8.38 0 0 1-3.19-8.7zm8.37 9a8.34 8.34 0 0 1-3.87-1l3.52-10.2 3.56 9.7a8.34 8.34 0 0 1-3.21 1.5z" />
        </svg>
      )
    },
    {
      name: 'Claude',
      renderIcon: () => (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="#D97706">
          <path d="M12 2L4.5 20.5h15L12 2zm0 5.2l4.8 11.8H7.2L12 7.2z" />
        </svg>
      )
    },
    {
      name: 'Gemini',
      renderIcon: () => (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="#8E75FF">
          <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
        </svg>
      )
    },
    {
      name: 'Shopify',
      renderIcon: () => (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="#95BF47">
          <path d="M15.34 2.87c-.12 0-.25.04-.37.12l-2.47 1.62-1.2-1.32c-.22-.24-.55-.38-.88-.38-.66 0-1.2.54-1.2 1.2v.06L7 4.96c-.39.11-.7.42-.81.81l-3 10.5c-.15.53.07 1.1.53 1.39l7.5 4.77c.24.15.51.23.78.23.27 0 .54-.08.78-.23l7.5-4.77c.46-.29.68-.86.53-1.39l-3-10.5c-.11-.39-.42-.7-.81-.81l-2.22-.79v-.06c0-.66-.54-1.2-1.2-1.2z" />
        </svg>
      )
    },
    {
      name: 'Google',
      renderIcon: () => (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" />
          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.15C3.26 21.3 7.31 24 12 24z" />
          <path fill="#FBBC05" d="M5.28 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.39l3.99-3.15z" />
          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.61l3.99 3.15c.95-2.85 3.6-4.96 6.72-4.96z" />
        </svg>
      )
    },
    {
      name: 'Meta',
      renderIcon: () => (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="#0668E1">
          <path d="M16.5 6c-1.8 0-3.3 1-4.5 2.5C10.8 7 9.3 6 7.5 6A5.5 5.5 0 0 0 2 11.5c0 4.5 5 9.5 10 12.5c5-3 10-8 10-12.5A5.5 5.5 0 0 0 16.5 6zM7.5 15.5c-2.2 0-4-1.8-4-4s1.8-4 4-4c1.4 0 2.6.7 3.3 1.8L9.2 11.4A4.01 4.01 0 0 0 7.5 15.5zm9 0c-1.7 0-3-.8-3.7-2l1.6-2.1c.5 1.1 1.6 1.8 2.8 1.8c2.2 0 4-1.8 4-4s-1.8-4-4-4c-1.4 0-2.6.7-3.3 1.8l1.6 2.1c.7-1.1 1.9-1.8 3.3-1.8a4 4 0 0 1 4 4c0 2.2-1.8 4-4 4z" />
        </svg>
      )
    },
    {
      name: 'Canva',
      renderIcon: () => (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="#00C4CC">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm-2-8a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" />
        </svg>
      )
    },
    {
      name: 'ChatGPT',
      renderIcon: () => (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="#10A37F">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729z" />
        </svg>
      )
    },
    {
      name: 'Semrush',
      renderIcon: () => (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="#FF642D">
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.16 16.32c-.48.48-1.26.48-1.74 0L12 12.84l-3.42 3.48c-.48.48-1.26.48-1.74 0-.48-.48-.48-1.26 0-1.74L10.26 11.1 6.84 7.68c-.48-.48-.48-1.26 0-1.74.48-.48 1.26-.48 1.74 0L12 9.36l3.42-3.42c.48-.48 1.26-.48 1.74 0 .48.48.48 1.26 0 1.74L13.74 11.1l3.42 3.48c.48.48.48 1.26 0 1.74z" />
        </svg>
      )
    },
    {
      name: 'Mailchimp',
      renderIcon: () => (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="#FFE01B">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      )
    }
  ];

  // Tripled array for smooth, infinite marquee loop without gaps
  const marqueeItems = [...toolsList, ...toolsList, ...toolsList];

  return (
    <section className="py-10 bg-white border-y border-gray-100 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <span className="text-[12px] font-heading font-extrabold uppercase tracking-[0.25em] text-gray-400">
          PLATFORMS & TOOLS OUR LEARNERS MASTER
        </span>
      </div>

      {/* Ticker Container with side fade gradients */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left Fade Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        
        {/* Right Fade Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="animate-marquee flex items-center space-x-12 sm:space-x-16 whitespace-nowrap py-3">
          {marqueeItems.map((tool, index) => (
            <div 
              key={index}
              className="flex items-center space-x-3.5 text-[#6B7280] hover:text-[#111111] transition-all duration-200 cursor-default group flex-shrink-0"
            >
              {/* Increased Brand Icon Size */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-115 transition-transform">
                {tool.renderIcon()}
              </div>

              {/* Brand Name */}
              <span className="font-heading font-bold text-lg sm:text-xl text-[#374151] group-hover:text-[#111111] tracking-tight">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
