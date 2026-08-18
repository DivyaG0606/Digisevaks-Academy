import React from 'react';

/**
 * Reusable ToolCard component displaying tool branding, title, description, and hover micro-interactions.
 * 
 * Props:
 * - tool: { name, description, primaryIcon, secondaryIcon, brandColor, bgAccent }
 */
export default function ToolCard({ tool }) {
  const PrimaryIcon = tool.primaryIcon;
  const SecondaryIcon = tool.secondaryIcon;

  return (
    <article className="group relative bg-white border border-gray-100 hover:border-[#FF1744]/30 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 flex flex-col justify-between h-full cursor-default overflow-hidden">
      {/* Background Subtle Gradient Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5F7]/0 via-[#FFF5F7]/0 to-[#FFF5F7]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative z-10 space-y-3">
        {/* Brand Icon Header */}
        <div className="flex items-center space-x-2">
          {/* Primary Icon Box */}
          <div 
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
            style={{ backgroundColor: tool.bgAccent || '#FFF5F7' }}
          >
            {PrimaryIcon && (
              <PrimaryIcon 
                size={26} 
                color={tool.brandColor || '#FF1744'} 
                className="transition-transform duration-300"
              />
            )}
          </div>

          {/* Optional Secondary Icon */}
          {SecondaryIcon && (
            <div 
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 flex-shrink-0"
              style={{ backgroundColor: tool.secondaryBgAccent || '#F9FAFB' }}
              title={tool.secondaryName || ''}
            >
              <SecondaryIcon 
                size={20} 
                color={tool.secondaryBrandColor || '#4B5563'} 
              />
            </div>
          )}
        </div>

        {/* Title and Short Description */}
        <div className="space-y-1">
          <h3 className="font-heading font-bold text-sm sm:text-base text-[#111111] group-hover:text-[#FF1744] transition-colors duration-200 tracking-tight leading-snug">
            {tool.name}
          </h3>
          <p className="text-xs text-[#6B7280] font-normal leading-relaxed">
            {tool.description}
          </p>
        </div>
      </div>
    </article>
  );
}
