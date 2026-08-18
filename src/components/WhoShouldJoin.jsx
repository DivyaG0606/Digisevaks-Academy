import React from 'react';
import {
  GraduationCap,
  Briefcase,
  Store,
  Code2,
  Home,
  TrendingUp
} from 'lucide-react';
import { TextMaskReveal, StaggerContainer, StaggerItem } from './animations/MotionComponents';

export default function WhoShouldJoin({ onOpenDemo }) {
  const audiences = [
    {
      num: '01',
      title: 'Students',
      icon: GraduationCap,
      desc: 'Students can gain practical, in-demand skills early in their career. Learning digital marketing opens up job, freelance, and internship opportunities without needing a technical background.'
    },
    {
      num: '02',
      title: 'Job Seekers',
      icon: Briefcase,
      desc: 'Job seekers can enhance their resumes and increase employability by mastering digital marketing. LAND roles in agencies, startups, or corporate firms with strong growth potential.'
    },
    {
      num: '03',
      title: 'Small Business Owners',
      icon: Store,
      desc: 'Business owners can promote their products or services online without depending on agencies. Learn to run profitable ads, build websites, and grow social media organically.'
    },
    {
      num: '04',
      title: 'Freelancers',
      icon: Code2,
      desc: 'Freelancers can offer services like SEO, social media, and performance ads to clients worldwide, enjoying flexible income and remote work freedom.'
    },
    {
      num: '05',
      title: 'Housewives & Career Restart',
      icon: Home,
      desc: 'Restart your professional journey with digital marketing. It offers work-from-home flexibility, part-time options, and freelance opportunities to rebuild confidence.'
    },
    {
      num: '06',
      title: 'Marketing & Sales Pros',
      icon: TrendingUp,
      desc: 'Professionals in sales or traditional marketing can upgrade with digital marketing skills to achieve better campaign results and unlock promotions into modern digital roles.'
    }
  ];

  return (
    <section id="who-should-join" className="py-16 sm:py-20 bg-slate-50 border-t border-gray-200 font-sans relative overflow-hidden">

      {/* Background ambient pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-10 sm:mb-14 text-left sm:text-center max-w-3xl mx-auto space-y-2">
          <TextMaskReveal
            as="h2"
            className="font-heading text-2xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-tight"
          >
            <span className="text-[#111111] block sm:inline">WHO SHOULD </span>
            <span className="text-[#FF1744]">JOIN THIS COURSE?</span>
          </TextMaskReveal>

          {/* Underline Decorative Accent */}
          <div className="flex items-center space-x-2 pt-1 justify-start sm:justify-center">
            <div className="h-1 w-16 sm:w-20 bg-[#FF1744] rounded-full" />
            <div className="h-2 w-2 bg-[#FF1744] rounded-full" />
          </div>
        </div>

        {/* 6 Card Grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {audiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={idx}>
                <div
                  onClick={() => onOpenDemo && onOpenDemo('who_should_join')}
                  className="relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#FF1744]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer h-full"
                >
                  <div>
                    {/* Icon & Title Row */}
                    <div className="flex items-center space-x-3 mb-3.5">
                      <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#FF1744] text-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                        <Icon className="w-5.5 h-5.5 sm:w-7 sm:h-7 stroke-[2]" />
                      </div>
                      <h3 className="font-heading text-base sm:text-lg font-bold text-[#FF1744] leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    {/* Paragraph Content */}
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-6">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Right Number Badge */}
                  <div className="absolute bottom-0 right-0 bg-[#FF1744] text-white font-heading font-black text-[11px] sm:text-xs px-3 py-1 sm:px-4 sm:py-1.5 rounded-tl-xl shadow-xs group-hover:bg-[#D50000] transition-colors">
                    {item.num}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom Decorative Dots Divider */}
        <div className="flex items-center justify-center space-x-2 mt-10 sm:mt-14">
          <div className="w-12 h-0.5 bg-gray-200" />
          <div className="w-2 h-2 rounded-full bg-[#FF1744]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF1744]" />
          <div className="w-2 h-2 rounded-full bg-[#FF1744]" />
          <div className="w-12 h-0.5 bg-gray-200" />
        </div>

      </div>
    </section>
  );
}
