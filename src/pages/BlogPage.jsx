import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  BookOpen, 
  Sparkles, 
  Phone, 
  ArrowRight, 
  Calendar, 
  Clock, 
  User, 
  X, 
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import { TextMaskReveal, FadeUp, ScaleReveal } from '../components/animations/MotionComponents';

export default function BlogPage({ onOpenDemo }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = [
    'All',
    'Beginner Guide',
    'AI & Marketing',
    'Google Ads',
    'SEO',
    'Paid Advertising',
    'Freelancing',
    'Career',
    'Website Designing',
    'Academy'
  ];

  // 54 SEO-Optimized Pillar Articles (6 per category across 9 niches)
  const allBlogs = [
    // 1. Beginner Guide (6 articles)
    {
      id: 1,
      title: 'The Complete Digital Marketing Roadmap for Beginners in 2026',
      category: 'Beginner Guide',
      keywords: ['Digital Marketing Course in Pune', 'Learn Digital Marketing', 'Digital Marketing Roadmap'],
      desc: 'Start your digital marketing journey with a step-by-step roadmap covering SEO, Google Ads, Meta Ads, Content Marketing, Analytics, AI tools, and freelancing. Learn exactly what skills companies expect.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      date: 'Aug 04, 2026',
      readTime: '6 min read',
      author: 'DIGISEVAKS Editorial'
    },
    {
      id: 2,
      title: 'What is Digital Marketing? A Practical Step-by-Step Overview',
      category: 'Beginner Guide',
      keywords: ['What is Digital Marketing', 'Digital Marketing Basics', 'Digital Marketing Pune'],
      desc: 'Understand the fundamental channels of modern online marketing including search engines, social media, email campaigns, and performance funnels.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
      date: 'Aug 02, 2026',
      readTime: '5 min read',
      author: 'Senior Instructor'
    },
    {
      id: 3,
      title: '10 Crucial Marketing Terms Every Beginner Must Master First',
      category: 'Beginner Guide',
      keywords: ['Marketing Terminology', 'CTR CPA ROAS Meaning', 'Digital Marketing Concepts'],
      desc: 'Master essential metrics like CTR, CPA, ROAS, Impression Share, CAC, LTV, and Conversion Rate to speak like an agency professional.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 29, 2026',
      readTime: '4 min read',
      author: 'DIGISEVAKS Faculty'
    },
    {
      id: 4,
      title: 'Classroom vs Online Digital Marketing Training: Which is Better?',
      category: 'Beginner Guide',
      keywords: ['Classroom Digital Marketing Training Pune', 'Offline vs Online Course'],
      desc: 'Discover why 100% agency-style practical classroom training in Pune delivers 3x higher placement success than pre-recorded online videos.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 25, 2026',
      readTime: '7 min read',
      author: 'Academy Director'
    },
    {
      id: 5,
      title: 'How to Build Your First Portfolio Project Without Any Prior Experience',
      category: 'Beginner Guide',
      keywords: ['Digital Marketing Portfolio', 'Fresher Resume Project', 'Live Client Case Study'],
      desc: 'Learn how to create live client case studies, ad mockups, and SEO audits that impress top hiring managers during interviews.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 20, 2026',
      readTime: '5 min read',
      author: 'Career Mentor'
    },
    {
      id: 6,
      title: 'The Essential Skills Matrix Required by Digital Marketing Agencies',
      category: 'Beginner Guide',
      keywords: ['Digital Marketing Skills Pune', 'Agency Job Skills 2026'],
      desc: 'Explore the technical, analytical, creative, and AI skills that top advertising agencies look for when hiring freshers in Pune.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 15, 2026',
      readTime: '6 min read',
      author: 'Agency Founder'
    },

    // 2. AI & Marketing (6 articles)
    {
      id: 7,
      title: 'Top 50 AI Tools Every Digital Marketer Should Learn in 2026',
      category: 'AI & Marketing',
      keywords: ['AI Tools for Digital Marketing', 'ChatGPT Marketing Course', 'Canva AI Training'],
      desc: 'Explore the most powerful AI tools including ChatGPT, Canva AI, Google Gemini, Midjourney, and automation platforms that boost ROI.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      date: 'Aug 05, 2026',
      readTime: '8 min read',
      author: 'AI Specialist'
    },
    {
      id: 8,
      title: 'How to Write Converting Prompts for Ad Copy & Social Posts Using ChatGPT',
      category: 'AI & Marketing',
      keywords: ['ChatGPT Prompt Engineering', 'AI Content Writing', 'Ad Copy AI'],
      desc: 'Master prompt engineering strategies to write high-converting Facebook ad copy, Google Search headlines, and email newsletters instantly.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
      date: 'Aug 01, 2026',
      readTime: '6 min read',
      author: 'Copywriting Lead'
    },
    {
      id: 9,
      title: 'Canva AI & Graphic Automation for Performance Marketers',
      category: 'AI & Marketing',
      keywords: ['Canva AI Graphic Design', 'Social Media Creatives AI', 'Canva Course Pune'],
      desc: 'Create high-CTR ad creatives, Reels templates, and brand graphics in minutes using Canva AI features and Magic Studio.',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 27, 2026',
      readTime: '5 min read',
      author: 'Design Mentor'
    },
    {
      id: 10,
      title: 'Predictive Analytics & GA4 AI Insights for Performance Advertising',
      category: 'AI & Marketing',
      keywords: ['GA4 AI Analytics', 'Google Analytics 4 Course', 'Predictive ROI'],
      desc: 'Harness Google Analytics 4 AI modeling to predict customer churn, identify top-converting channels, and optimize ad spend allocation.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 22, 2026',
      readTime: '7 min read',
      author: 'Analytics Lead'
    },
    {
      id: 11,
      title: 'Midjourney & AI Image Generation for Viral Social Media Campaigns',
      category: 'AI & Marketing',
      keywords: ['Midjourney Marketing', 'AI Ad Creatives', 'Visual AI Tools'],
      desc: 'Generate photorealistic brand assets, product mockups, and campaign concepts using Midjourney and DALL-E 3.',
      image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 18, 2026',
      readTime: '6 min read',
      author: 'Creative Director'
    },
    {
      id: 12,
      title: 'Automating Lead Follow-ups & WhatsApp Nurturing with AI Chatbots',
      category: 'AI & Marketing',
      keywords: ['WhatsApp Automation', 'AI Chatbot Marketing', 'Lead Nurturing AI'],
      desc: 'Build automated WhatsApp workflows and AI chatbots to convert cold website traffic into booked demo appointments automatically.',
      image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 12, 2026',
      readTime: '5 min read',
      author: 'Automation Expert'
    },

    // 3. Google Ads (6 articles)
    {
      id: 13,
      title: 'How to Become a Google Ads Expert and Build a High-Paying Career',
      category: 'Google Ads',
      keywords: ['Google Ads Course Pune', 'PPC Training Institute', 'Google Ads Certification'],
      desc: 'Learn campaign setup, keyword bidding strategies, conversion tracking, Performance Max, and search campaign optimization.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      date: 'Aug 03, 2026',
      readTime: '7 min read',
      author: 'PPC Specialist'
    },
    {
      id: 14,
      title: 'Mastering Performance Max Campaigns in 2026: Best Practices',
      category: 'Google Ads',
      keywords: ['Performance Max Google Ads', 'PMax Campaign Optimization'],
      desc: 'Unlock maximum conversions across Search, Display, YouTube, Gmail, and Discover using Google’s flagship PMax AI campaigns.',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 30, 2026',
      readTime: '6 min read',
      author: 'Google Ads Lead'
    },
    {
      id: 15,
      title: 'Negative Keyword Strategy: How to Save 30% of Wasteful Ad Spend',
      category: 'Google Ads',
      keywords: ['Google Ads Negative Keywords', 'PPC Cost Saving', 'Google Ads ROI'],
      desc: 'Stop paying for irrelevant clicks. Learn how to audit search terms reports and build comprehensive negative keyword lists.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 24, 2026',
      readTime: '5 min read',
      author: 'Senior PPC Consultant'
    },
    {
      id: 16,
      title: 'Google Display Network (GDN) & Remarketing Strategies That Scale',
      category: 'Google Ads',
      keywords: ['Google Remarketing Ads', 'Display Advertising Pune', 'GDN Campaign'],
      desc: 'Re-engage dropped website visitors with high-impact banner ads and dynamic product remarketing across top news & blog websites.',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 19, 2026',
      readTime: '6 min read',
      author: 'Media Planner'
    },
    {
      id: 17,
      title: 'How to Crack Official Google Ads Certification Exams on First Attempt',
      category: 'Google Ads',
      keywords: ['Google Ads Certification Free', 'Google Ads Exam Preparation'],
      desc: 'Free step-by-step study guide and practice quiz questions to pass Google Search, Display, and Video certification exams.',
      image: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 14, 2026',
      readTime: '4 min read',
      author: 'Certification Mentor'
    },
    {
      id: 18,
      title: 'YouTube Video Ads Guide: From Scriptwriting to Audience Targeting',
      category: 'Google Ads',
      keywords: ['YouTube Ads Course', 'In-Feed Video Ads', 'YouTube Monetization'],
      desc: 'Create captivating 15-second hook scripts and target high-converting audiences using Google Video campaign setups.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 08, 2026',
      readTime: '7 min read',
      author: 'Video Ads Strategist'
    },

    // 4. SEO (6 articles)
    {
      id: 19,
      title: 'SEO in 2026: The Complete Beginner to Advanced Ranking Guide',
      category: 'SEO',
      keywords: ['SEO Course in Pune', 'Search Engine Optimization', 'Local SEO Pune'],
      desc: 'Master on-page SEO, off-page backlinks, technical audits, Google Search Console, and AI-powered SEO ranking strategies.',
      image: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=800&q=80',
      date: 'Aug 04, 2026',
      readTime: '9 min read',
      author: 'Head of SEO'
    },
    {
      id: 20,
      title: 'Local SEO Masterclass: Rank #1 on Google Maps in Pune',
      category: 'SEO',
      keywords: ['Local SEO Pune', 'Google My Business Ranking', 'GMB Optimization'],
      desc: 'Optimize your Google Business Profile, collect 5-star reviews, build local citations, and drive walk-in customers to your business.',
      image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 31, 2026',
      readTime: '6 min read',
      author: 'Local SEO Expert'
    },
    {
      id: 21,
      title: 'Technical SEO Audit Blueprint: Fixing Crawl Errors & Core Web Vitals',
      category: 'SEO',
      keywords: ['Technical SEO Audit', 'Core Web Vitals', 'Page Speed Optimization'],
      desc: 'Learn how to resolve 404 errors, canonical tag issues, XML sitemaps, mobile responsiveness, and page load speed for higher indexing.',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 26, 2026',
      readTime: '8 min read',
      author: 'Technical SEO Auditor'
    },
    {
      id: 22,
      title: 'Keyword Research Strategy Using Semrush & Ahrefs in 2026',
      category: 'SEO',
      keywords: ['Keyword Research Course', 'Semrush Tutorial', 'Ahrefs SEO'],
      desc: 'Uncover high-intent commercial keywords, search volume metrics, keyword difficulty, and competitor content gaps.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 21, 2026',
      readTime: '7 min read',
      author: 'Content SEO Strategist'
    },
    {
      id: 23,
      title: 'Ethical Link Building Tactics That Build Domain Authority Safely',
      category: 'SEO',
      keywords: ['Link Building Course', 'Guest Blogging SEO', 'Backlink Building'],
      desc: 'Acquire high-authority editorial backlinks through digital PR, guest posting, broken link recovery, and unlinked brand mentions.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 16, 2026',
      readTime: '6 min read',
      author: 'SEO Outreach Lead'
    },
    {
      id: 24,
      title: 'Schema Markup & Structured Data (JSON-LD) for Rich Snippets',
      category: 'SEO',
      keywords: ['Schema Markup Guide', 'JSON-LD Rich Snippets', 'Structured Data SEO'],
      desc: 'Implement schema code for FAQs, reviews, local business details, and courses to stand out on Google Search Results.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 10, 2026',
      readTime: '5 min read',
      author: 'Schema Developer'
    },

    // 5. Paid Advertising (6 articles)
    {
      id: 25,
      title: 'Meta Ads vs Google Ads: Which One Should You Learn First?',
      category: 'Paid Advertising',
      keywords: ['Meta Ads Training Pune', 'Facebook Ads Course', 'Paid Media Strategy'],
      desc: 'Compare Meta Facebook/Instagram Ads and Google PPC based on audience intent, campaign objectives, ad spend budget, and ROI.',
      image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80',
      date: 'Aug 02, 2026',
      readTime: '7 min read',
      author: 'Media Buyer Lead'
    },
    {
      id: 26,
      title: 'How to Scaling Instagram & Facebook Ads to ₹1 Lakh/Day Budget',
      category: 'Paid Advertising',
      keywords: ['Scale Meta Ads', 'Facebook Ad Creative Strategy', 'ROAS Optimization'],
      desc: 'Learn vertical and horizontal scaling techniques, ABO vs CBO budgets, custom audiences, and dynamic creative testing.',
      image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 28, 2026',
      readTime: '8 min read',
      author: 'Performance Marketer'
    },
    {
      id: 27,
      title: 'High-Converting E-commerce Ad Funnels for D2C Brands',
      category: 'Paid Advertising',
      keywords: ['E-commerce Ads Funnel', 'D2C Marketing Pune', 'Shopify Facebook Ads'],
      desc: 'Build full-funnel paid campaigns from cold prospecting Reels ads to retargeting abandoned cart visitors with discount offers.',
      image: 'https://images.unsplash.com/photo-1556742049-0a670868a2ee?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 23, 2026',
      readTime: '6 min read',
      author: 'D2C Specialist'
    },
    {
      id: 28,
      title: 'LinkedIn B2B Ads Masterclass: Generating Qualified Corporate Leads',
      category: 'Paid Advertising',
      keywords: ['LinkedIn Ads Training', 'B2B Lead Generation Pune', 'Corporate Ads'],
      desc: 'Target job titles, company industries, and decision-makers on LinkedIn with Sponsored Content, Lead Gen Forms, and InMail.',
      image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 17, 2026',
      readTime: '7 min read',
      author: 'B2B Marketing Consultant'
    },
    {
      id: 29,
      title: 'Ad Copywriting Secrets That Double Your Click-Through Rate (CTR)',
      category: 'Paid Advertising',
      keywords: ['Ad Copywriting Guide', 'High CTR Ad Copy', 'Persuasive Marketing Copy'],
      desc: 'Master emotional hooks, problem-agitate-solve formulas, social proof triggers, and call-to-action phrasing for ad copy.',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 11, 2026',
      readTime: '5 min read',
      author: 'Lead Copywriter'
    },
    {
      id: 30,
      title: 'Conversion Rate Optimization (CRO): Turning Clicks into Paying Customers',
      category: 'Paid Advertising',
      keywords: ['CRO Course Pune', 'Conversion Rate Optimization', 'Landing Page CTR'],
      desc: 'Optimize your landing pages with heatmap analysis, A/B testing headline variations, frictionless forms, and trust badges.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 06, 2026',
      readTime: '6 min read',
      author: 'CRO Specialist'
    },

    // 6. Freelancing (6 articles)
    {
      id: 31,
      title: 'How to Start Freelancing as a Digital Marketer and Earn $2000+/Month',
      category: 'Freelancing',
      keywords: ['Freelancing Career Guide', 'Digital Marketing Freelancer', 'Upwork Fiverr Course'],
      desc: 'Learn how to create a high-converting profile, price your retainer packages, land US/UK clients, and build a remote business.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      date: 'Aug 03, 2026',
      readTime: '7 min read',
      author: 'Freelance Growth Coach'
    },
    {
      id: 32,
      title: 'Cold Outreach Mastery: How to Pitch Clients on LinkedIn & Email',
      category: 'Freelancing',
      keywords: ['Cold Email Strategy', 'Pitching Clients Freelance', 'Digital Agency Pitch'],
      desc: 'Step-by-step templates for auditing local business websites and sending personalized video proposals that close deals.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 29, 2026',
      readTime: '6 min read',
      author: 'Agency Founder'
    },
    {
      id: 33,
      title: 'How to Price Your Digital Marketing Monthly Retainer Packages',
      category: 'Freelancing',
      keywords: ['Digital Marketing Retainer Pricing', 'Freelancer Hourly Rate'],
      desc: 'Discover value-based pricing models for SEO, Meta Ads management, content creation, and monthly analytics reporting.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 24, 2026',
      readTime: '5 min read',
      author: 'Senior Strategist'
    },
    {
      id: 34,
      title: 'Building a Personal Brand on LinkedIn to Attract Inbound Leads',
      category: 'Freelancing',
      keywords: ['LinkedIn Personal Branding', 'Inbound Lead Generation', 'Organic Branding'],
      desc: 'Optimize your LinkedIn headline, share insightful case studies daily, and positioning yourself as an industry authority.',
      image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 18, 2026',
      readTime: '6 min read',
      author: 'Brand Consultant'
    },
    {
      id: 35,
      title: 'Freelancer Legal Contracts, Invoicing, and International Payments',
      category: 'Freelancing',
      keywords: ['Freelancer Contract Template', 'PayPal Stripe Wise Invoicing'],
      desc: 'Protect yourself with client service agreements, scope-of-work contracts, and tax-compliant payment gateway setups.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 13, 2026',
      readTime: '5 min read',
      author: 'Legal & Finance Advisor'
    },
    {
      id: 36,
      title: 'Scaling from Solo Freelancer to Micro Digital Agency Owner',
      category: 'Freelancing',
      keywords: ['Scale Freelance to Agency', 'Outsourcing Team', 'Digital Agency Blueprint'],
      desc: 'Learn when and how to hire sub-contractors, delegate tasks, build standard operating procedures (SOPs), and scale revenue.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 07, 2026',
      readTime: '7 min read',
      author: 'Agency Founder'
    },

    // 7. Career (6 articles)
    {
      id: 37,
      title: 'Why Practical Agency Training Is Better Than Theory-Based Learning',
      category: 'Career',
      keywords: ['Practical Digital Marketing Jobs', 'Digital Marketing Salary Pune', 'Agency Internship'],
      desc: 'Understand why live client projects, agency lab workflows, and hands-on campaign management prepare you 10x faster.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      date: 'Aug 04, 2026',
      readTime: '6 min read',
      author: 'Career Mentor'
    },
    {
      id: 38,
      title: 'Digital Marketing Career Roles, Salary Packages & Growth Options in 2026',
      category: 'Career',
      keywords: ['Digital Marketing Salary Pune', 'SEO Executive Salary', 'Performance Marketer Jobs'],
      desc: 'Comprehensive breakdown of entry-level to manager salaries for SEO Analysts, PPC Specialists, Social Media Leads, and CMOs.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 30, 2026',
      readTime: '7 min read',
      author: 'Placement Director'
    },
    {
      id: 39,
      title: 'How to Crack Technical Mock Interviews at Top Pune IT & Marketing Companies',
      category: 'Career',
      keywords: ['Digital Marketing Interview Questions', 'Mock Interview Guide'],
      desc: 'Review the top 30 most frequently asked interview questions on Google Analytics, ad metrics, budget planning, and strategy.',
      image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 25, 2026',
      readTime: '6 min read',
      author: 'HR & Placement Lead'
    },
    {
      id: 40,
      title: 'Crafting an ATS-Proof Resume & Live Case Study Portfolio',
      category: 'Career',
      keywords: ['ATS Resume Digital Marketing', 'Marketing Portfolio Builder'],
      desc: 'Format your resume to pass automated ATS filters and embed interactive links to live websites, ad graphics, and GSC reports.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 19, 2026',
      readTime: '5 min read',
      author: 'Career Coach'
    },
    {
      id: 41,
      title: 'Career Switcher Guide: Moving from Non-Tech/Sales into Digital Marketing',
      category: 'Career',
      keywords: ['Career Switch Digital Marketing', 'Marketing Job Transition Pune'],
      desc: 'How working professionals from retail, BPO, administration, and sales can transition seamlessly into high-growth digital marketing roles.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 15, 2026',
      readTime: '6 min read',
      author: 'Senior Counselor'
    },
    {
      id: 42,
      title: 'Corporate Digital Marketing Upskilling for Business Leaders & Team Leads',
      category: 'Career',
      keywords: ['Corporate Marketing Training Pune', 'Business Executive Marketing'],
      desc: 'Empower company teams and founders to oversee agency partners, audit ad campaigns, and drive internal digital transformation.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 09, 2026',
      readTime: '6 min read',
      author: 'Corporate Trainer'
    },

    // 8. Website Designing (6 articles)
    {
      id: 43,
      title: 'Website Designing for Digital Marketers: Why Every Marketer Needs WordPress',
      category: 'Website Designing',
      keywords: ['Website Designing Course Pune', 'WordPress Training', 'Elementor Landing Page'],
      desc: 'Discover why landing page creation, WordPress Elementor design, speed optimization, and UI layout improve ad campaign conversion rates.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      date: 'Aug 01, 2026',
      readTime: '7 min read',
      author: 'WordPress Developer'
    },
    {
      id: 44,
      title: 'High-Converting Landing Page Design Principles for Meta & Google Ads',
      category: 'Website Designing',
      keywords: ['Landing Page Design Course', 'Conversion Landing Page', 'Elementor Pro'],
      desc: 'Design distraction-free sales pages with clear headlines, social proof testimonials, bulleted benefits, and fast form submissions.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 27, 2026',
      readTime: '6 min read',
      author: 'UI/UX Designer'
    },
    {
      id: 45,
      title: 'E-commerce Store Setup Using WooCommerce & Shopify in 2026',
      category: 'Website Designing',
      keywords: ['WooCommerce Setup Pune', 'Shopify Store Designing', 'E-commerce Website'],
      desc: 'Step-by-step setup for adding products, configuring payment gateways (Razorpay/UPI), tax settings, and mobile responsiveness.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 22, 2026',
      readTime: '8 min read',
      author: 'E-commerce Specialist'
    },
    {
      id: 46,
      title: 'Website Speed Optimization: How to Achieve 90+ PageSpeed Scores',
      category: 'Website Designing',
      keywords: ['WordPress Speed Optimization', 'WP Rocket Cache', 'WebP Image Compression'],
      desc: 'Compress images, enable browser caching, clean up bloated database files, and use Cloudflare CDN for lightning-fast loading.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 17, 2026',
      readTime: '5 min read',
      author: 'Web Performance Lead'
    },
    {
      id: 47,
      title: 'Mobile-First Website Design: Ensuring Flawless Display Across Devices',
      category: 'Website Designing',
      keywords: ['Mobile First Web Design', 'Responsive UI Design', 'Mobile UX Marketing'],
      desc: 'With 85%+ of ad traffic browsing on smartphones, learn mobile-responsive breakpoints, touch targets, and instant form pop-ups.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 11, 2026',
      readTime: '6 min read',
      author: 'Frontend Developer'
    },
    {
      id: 48,
      title: 'Website Security 101: SSL, Malware Scanning & Daily Backups',
      category: 'Website Designing',
      keywords: ['WordPress Security Course', 'SSL Certificate Setup', 'Website Backup'],
      desc: 'Protect client websites against hacking attempts, brute-force logins, and malware infections using Wordfence & automated backups.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 05, 2026',
      readTime: '5 min read',
      author: 'Security Specialist'
    },

    // 9. Academy (6 articles)
    {
      id: 49,
      title: 'How DIGISEVAKS Academy Prepares You for a Successful Digital Career',
      category: 'Academy',
      keywords: ['Best Digital Marketing Institute in Pune', 'DIGISEVAKS Academy Review', 'Placement Support Pune'],
      desc: 'Discover how DIGISEVAKS Academy combines AI learning, live client campaigns, expert mentorship, and 100% placement support in Pune.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
      date: 'Aug 05, 2026',
      readTime: '6 min read',
      author: 'Academy Director'
    },
    {
      id: 50,
      title: 'Inside DIGISEVAKS Agency Lab: 100% Hands-On Classroom Experience',
      category: 'Academy',
      keywords: ['DIGISEVAKS Karvenagar Campus', 'Digital Marketing Agency Lab'],
      desc: 'Take a virtual tour of our Karvenagar, Pune campus equipped with high-speed internet, agency workstations, and live campaign labs.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      date: 'Aug 01, 2026',
      readTime: '5 min read',
      author: 'Campus Head'
    },
    {
      id: 51,
      title: 'Student Success Stories: From Beginners to High-Paid Agency Professionals',
      category: 'Academy',
      keywords: ['DIGISEVAKS Placement Reviews', 'Student Career Transformation'],
      desc: 'Read real case studies of DIGISEVAKS alumni who transformed their careers and secured placements in top Pune & MNC marketing agencies.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 26, 2026',
      readTime: '7 min read',
      author: 'Alumni Lead'
    },
    {
      id: 52,
      title: 'Official Google, Meta & DIGISEVAKS Master Diploma Certifications',
      category: 'Academy',
      keywords: ['Digital Marketing Certifications Pune', 'Official Diploma Certificate'],
      desc: 'Learn about the 15+ industry certifications you earn during our Master Program that add immense value to your resume.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 20, 2026',
      readTime: '4 min read',
      author: 'Certification Head'
    },
    {
      id: 53,
      title: 'Flexible Morning, Evening & Weekend Batches at Karvenagar Pune',
      category: 'Academy',
      keywords: ['Weekend Digital Marketing Batch Pune', 'Flexible Class Timings'],
      desc: 'Choose from convenient batch schedules tailored specifically for college students, working professionals, and entrepreneurs.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 15, 2026',
      readTime: '4 min read',
      author: 'Admissions Office'
    },
    {
      id: 54,
      title: '1-on-1 Mentorship & Lifetime Learning Support Community',
      category: 'Academy',
      keywords: ['Lifetime Support Digital Marketing', 'Mentor Guidance Pune'],
      desc: 'Our commitment doesn’t end when the course finishes. Get ongoing doubts resolution, campaign audits, and alumni network support forever.',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
      date: 'Jul 10, 2026',
      readTime: '5 min read',
      author: 'Chief Mentor'
    }
  ];

  const handleCategorySelect = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(6);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setVisibleCount(6);
  };

  // Filter Blogs based on active tab and search query
  const filteredBlogs = allBlogs.filter((blog) => {
    const matchesCategory = activeCategory === 'All' || blog.category === activeCategory;
    const matchesSearch = 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Slice articles according to incremental pagination
  const visibleBlogs = filteredBlogs.slice(0, visibleCount);

  // JSON-LD Schema for Blog Page SEO
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "DIGISEVAKS Academy Knowledge Hub & SEO Guides",
    "description": "Learn Digital Marketing, AI Tools, Google Ads, Meta Ads, SEO, and Freelancing from Pune's #1 Agency Academy.",
    "url": "https://digisevaksacademy.com/blog",
    "publisher": {
      "@type": "EducationalOrganization",
      "name": "DIGISEVAKS Academy Pune",
      "logo": "https://digisevaksacademy.com/logo.png"
    }
  };

  return (
    <div className="py-6 sm:py-12 bg-[#FFF5F7]/50 font-sans animate-fade-in min-h-screen">
      
      {/* Inject Google SEO Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">

        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white border border-[#FF5C7A]/30 text-[#FF1744] text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FF1744]" />
            <span>DIGISEVAKS Knowledge Hub</span>
          </div>

          <TextMaskReveal
            as="h1"
            className="font-heading text-2xl sm:text-4xl lg:text-6xl font-extrabold text-[#111111] tracking-tight leading-tight"
          >
            Learn Digital Marketing from <br className="hidden sm:block" />
            <span className="text-[#FF1744]">Industry Experts</span>
          </TextMaskReveal>

          <FadeUp delay={0.1}>
            <p className="text-xs sm:text-base text-[#6B7280] leading-relaxed max-w-3xl mx-auto font-normal">
              Stay updated with the latest trends in AI-powered marketing, SEO, Google Ads, Meta Ads, content strategy, freelancing, career growth, and real-world agency insights.
            </p>
          </FadeUp>

          {/* Search Input Bar */}
          <div className="pt-2 sm:pt-4 max-w-xl mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                placeholder="Search topics: Google Ads, SEO, AI tools..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-white border border-gray-200 text-[#111111] text-xs sm:text-sm focus:outline-none focus:border-[#FF1744] shadow-md transition-all placeholder-gray-400"
              />
              {searchQuery && (
                <button 
                  onClick={() => { setSearchQuery(''); setVisibleCount(6); }}
                  className="absolute right-3.5 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 gap-1.5 sm:gap-2 scrollbar-none">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => handleCategorySelect(cat)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-heading font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#FF1744] text-white shadow-md scale-105'
                  : 'bg-white text-gray-700 hover:bg-[#FFF5F7] hover:text-[#FF1744] border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Grid Count Badge */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-3">
          <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-bold text-gray-600">
            <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF1744]" />
            <span>Showing {visibleBlogs.length} of {filteredBlogs.length} Articles</span>
            {activeCategory !== 'All' && (
              <span className="bg-[#FFF5F7] text-[#FF1744] px-2 py-0.5 rounded-full text-[10px] border border-[#FF5C7A]/20">
                {activeCategory}
              </span>
            )}
          </div>

          {searchQuery && (
            <span className="text-[10px] sm:text-xs text-gray-500 truncate max-w-[150px] sm:max-w-none">
              Results for "<strong className="text-[#111111]">{searchQuery}</strong>"
            </span>
          )}
        </div>

        {/* 54 Blog Cards Responsive Grid */}
        {filteredBlogs.length === 0 ? (
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-center space-y-3 max-w-md mx-auto shadow-xs border border-gray-200">
            <Filter className="w-10 h-10 text-gray-300 mx-auto" />
            <h3 className="font-heading text-base font-bold text-[#111111]">No Articles Found</h3>
            <p className="text-xs text-gray-500">Try searching for a different keyword or select another category tab above.</p>
            <button 
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); setVisibleCount(6); }}
              className="px-4 py-2 bg-[#FF1744] text-white font-heading font-bold text-xs rounded-xl shadow-xs hover:opacity-90 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {visibleBlogs.map((blog) => (
                <div 
                  key={blog.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full animate-fade-in"
                >
                  <div>
                    {/* Featured Image with Zoom Animation */}
                    <div className="relative h-40 sm:h-52 overflow-hidden bg-gray-100">
                      <img 
                        src={blog.image} 
                        alt={blog.title}
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80";
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/95 backdrop-blur-md text-[#FF1744] text-[10px] font-heading font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-2xs">
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-3.5 sm:p-6 space-y-2 sm:space-y-3">
                      {/* Meta: Date & Read Time */}
                      <div className="flex items-center space-x-3 text-[10px] sm:text-xs text-gray-400 font-medium">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3 text-[#FF1744]" />
                          <span>{blog.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3 text-[#FF1744]" />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>

                      {/* Blog Title */}
                      <h3 className="font-heading text-sm sm:text-lg font-extrabold text-[#111111] group-hover:text-[#FF1744] transition-colors leading-snug line-clamp-2">
                        {blog.title}
                      </h3>

                      {/* SEO Description */}
                      <p className="text-[11px] sm:text-xs text-[#6B7280] leading-relaxed line-clamp-2 sm:line-clamp-3">
                        {blog.desc}
                      </p>

                      {/* SEO Target Keywords */}
                      <div className="pt-1 flex flex-wrap gap-1">
                        {blog.keywords.map((kw, kIdx) => (
                          <span key={kIdx} className="bg-gray-100 text-gray-600 text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded font-semibold">
                            #{kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Read Action */}
                  <div className="p-3.5 pt-0 sm:p-6 sm:pt-0">
                    <button 
                      onClick={() => setSelectedBlog(blog)}
                      className="w-full py-2.5 px-3 rounded-xl bg-gray-50 hover:bg-[#FFF5F7] text-[#111111] hover:text-[#FF1744] font-heading font-bold text-[11px] sm:text-xs border border-gray-200 hover:border-[#FF5C7A]/40 transition-all flex items-center justify-between group/btn cursor-pointer"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FF1744] group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>
              ))}
            </div>

            {/* YouTube-Style Batch Pagination (Load More Button) */}
            {visibleCount < filteredBlogs.length && (
              <div className="text-center pt-4 sm:pt-6">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-3.5 bg-white text-[#FF1744] hover:bg-[#FFF5F7] border-2 border-[#FF1744] font-heading font-extrabold text-xs sm:text-sm rounded-xl shadow-md transition-all inline-flex items-center justify-center space-x-2 cursor-pointer active:scale-95"
                >
                  <span>Load More Articles ({filteredBlogs.length - visibleCount} remaining)</span>
                  <ChevronDown className="w-4 h-4 text-[#FF1744] animate-bounce" />
                </button>
              </div>
            )}
          </>
        )}

        {/* Bottom CTA Banner */}
        <ScaleReveal delay={0.1}>
          <div className="bg-[#111827] text-white rounded-2xl sm:rounded-3xl p-5 sm:p-12 shadow-2xl border border-gray-800 text-center space-y-4 sm:space-y-6">
            <div className="max-w-3xl mx-auto space-y-2 sm:space-y-3">
              <span className="bg-[#FF1744] text-white text-[10px] sm:text-[11px] font-heading font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                Practical Training & Career Support
              </span>
              <h2 className="font-heading text-xl sm:text-4xl font-extrabold text-white leading-tight">
                Ready to Turn Theory into High-Paying Skills?
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Book a FREE demo class at DIGISEVAKS Academy Karvenagar Pune campus and learn directly from agency leads.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-1">
              <button 
                onClick={() => onOpenDemo('blog_footer')}
                className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 bg-[#FF1744] hover:bg-[#D50032] text-white font-heading font-extrabold text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Free Demo Class</span>
              </button>

              <a 
                href="tel:+918459439131"
                className="w-full sm:w-auto px-6 py-3.5 sm:px-7 sm:py-4 bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center space-x-2 border border-white/20"
              >
                <Phone className="w-4 h-4 text-[#FF5C7A]" />
                <span>Call Admissions: +91 84594 39131</span>
              </a>
            </div>
          </div>
        </ScaleReveal>

      </div>

      {/* Article Reader Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-4 sm:p-8 space-y-4 sm:space-y-6 relative shadow-2xl border border-gray-200">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedBlog(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-6">
              <span className="bg-[#FFF5F7] text-[#FF1744] border border-[#FF5C7A]/30 text-[10px] sm:text-[11px] font-heading font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block">
                {selectedBlog.category}
              </span>

              <h2 className="font-heading text-lg sm:text-3xl font-extrabold text-[#111111] leading-tight">
                {selectedBlog.title}
              </h2>

              <div className="flex flex-wrap items-center gap-3 text-[10px] sm:text-xs text-gray-500 pt-0.5">
                <div className="flex items-center space-x-1">
                  <User className="w-3 h-3 text-[#FF1744]" />
                  <span>{selectedBlog.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3 text-[#FF1744]" />
                  <span>{selectedBlog.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-[#FF1744]" />
                  <span>{selectedBlog.readTime}</span>
                </div>
              </div>
            </div>

            {/* Featured Modal Image */}
            <div className="rounded-xl sm:rounded-2xl overflow-hidden h-44 sm:h-64 bg-gray-100">
              <img 
                src={selectedBlog.image} 
                alt={selectedBlog.title} 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80";
                }}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Detailed Body */}
            <div className="space-y-3 text-xs sm:text-sm text-[#6B7280] leading-relaxed">
              <p className="font-semibold text-[#111111]">
                {selectedBlog.desc}
              </p>

              <p>
                Digital Marketing in 2026 demands practical execution rather than theoretical slides. At DIGISEVAKS Academy, learners work on live client campaigns, performance ads budgets, and AI-driven automation workflows to gain real agency experience.
              </p>

              <div className="bg-[#FFF5F7] rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border border-[#FF5C7A]/20 space-y-1.5">
                <h4 className="font-heading text-[11px] sm:text-xs font-extrabold text-[#FF1744] uppercase tracking-wider flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Key Skills Covered in This Guide:</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] sm:text-xs font-bold text-[#111111] pt-1">
                  {selectedBlog.keywords.map((kw, i) => (
                    <li key={i} className="flex items-center space-x-1.5">
                      <span className="text-[#FF1744]">•</span>
                      <span>{kw}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Bottom CTAs */}
            <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button 
                onClick={() => { setSelectedBlog(null); onOpenDemo('blog_modal'); }}
                className="w-full sm:w-auto py-3 px-5 bg-[#FF1744] hover:bg-[#D50032] text-white font-heading font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Book Free Demo Class</span>
              </button>

              <button 
                onClick={() => setSelectedBlog(null)}
                className="text-[11px] font-bold text-gray-500 hover:text-gray-800"
              >
                Close Article Preview
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
