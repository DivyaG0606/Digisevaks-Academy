const rawSyllabusModules = [
  {
    id: 1,
    title: "Digital Marketing Overview",
    category: "Foundation",
    topics: [
      "What is Marketing?",
      "How we do Marketing?",
      "What is Digital Marketing?",
      "Digital Marketing Platforms",
      "Digital Marketing vs Traditional Marketing",
      "Latest Digital Marketing Trends",
      "Why Digital Marketing is Important",
      "Use of AI in Digital Marketing",
      "Steps in Digital Marketing"
    ]
  },
  {
    id: 2,
    title: "Marketing Funnel & Branding",
    category: "Foundation",
    topics: [
      "Understanding Marketing Funnels",
      "Top of the Funnel (TOFU)",
      "Middle of the Funnel (MOFU)",
      "Bottom of the Funnel (BOFU)",
      "Brand Identity Basics",
      "Creating a Brand Strategy"
    ]
  },
  {
    id: 3,
    title: "Social Media Overview",
    category: "Social Media & Content Creation",
    topics: [
      "What is Social Media Marketing?",
      "Understanding Different Social Platforms",
      "Social Media Algorithms",
      "Developing a Social Media Strategy",
      "Social Media Guidelines"
    ]
  },
  {
    id: 4,
    title: "Facebook Mastery",
    category: "Social Media & Content Creation",
    topics: [
      "Facebook Page Creation & Optimization",
      "Facebook Algorithms",
      "Organic Growth Strategies on Facebook",
      "Facebook Groups & Communities"
    ]
  },
  {
    id: 5,
    title: "Instagram Mastery",
    category: "Social Media & Content Creation",
    topics: [
      "Instagram Profile Setup & Optimization",
      "Instagram Grid & Aesthetics",
      "Reels, Stories, and Highlights",
      "Hashtag Strategy & Organic Growth"
    ]
  },
  {
    id: 6,
    title: "Meta/Facebook & Instagram Advertising",
    category: "Paid Advertising",
    topics: [
      "Introduction to Meta Ads Manager",
      "Campaign Objectives & Structure",
      "Audience Targeting Strategies",
      "Budgeting & Bidding",
      "Ad Placements & Formats",
      "Analyzing Ad Performance"
    ]
  },
  {
    id: 7,
    title: "X / Twitter Mastery",
    category: "Social Media & Content Creation",
    topics: [
      "Twitter Profile Optimization",
      "Understanding Twitter Algorithm",
      "Tweeting Strategies & Threads",
      "Twitter Analytics"
    ]
  },
  {
    id: 8,
    title: "LinkedIn Mastery",
    category: "Social Media & Content Creation",
    topics: [
      "LinkedIn Profile Optimization",
      "Building a Professional Network",
      "B2B Lead Generation on LinkedIn",
      "LinkedIn Content Strategy",
      "LinkedIn Company Pages"
    ]
  },
  {
    id: 11,
    title: "Google Ads Search / PPC",
    category: "Paid Advertising",
    topics: [
      "Introduction to Search Engine Marketing",
      "Google Ads Account Setup",
      "Google Ads Dashboard Explanation",
      "Account Structure",
      "Campaign Setting",
      "Ad Group Setup",
      "Keyword Research Tools",
      "Keyword Match Type",
      "Understanding Ad Auction",
      "Quality Score",
      "Finding Keyword Ideas"
    ]
  },
  {
    id: 12,
    title: "Google Ads Campaign Types",
    category: "Paid Advertising",
    topics: [
      "Search Campaign",
      "Display Campaign",
      "Video Campaign (YouTube)",
      "Shopping Campaign",
      "Performance Max Campaign",
      "Demand Generation Campaign"
    ]
  },
  {
    id: 13,
    title: "Website Design (WordPress)",
    category: "Foundation",
    topics: [
      "Understanding Domain & Hosting",
      "WordPress Installation & Dashboard",
      "Themes & Plugins Selection",
      "Page Builders (Elementor)",
      "Landing Page Creation",
      "Website Security & Optimization"
    ]
  },
  {
    id: 14,
    title: "Ecommerce Marketing",
    category: "Monetization",
    topics: [
      "Basics of E-commerce",
      "WooCommerce Setup",
      "Product Listing & Optimization",
      "Driving Traffic to E-commerce Store",
      "Cart Abandonment Strategies"
    ]
  },
  {
    id: 15,
    title: "Remarketing",
    category: "Paid Advertising",
    topics: [
      "What is Remarketing",
      "Benefits of Remarketing Strategy",
      "Setting up Remarketing Tags",
      "Creating Custom Audiences"
    ]
  },
  {
    id: 16,
    title: "Conversion Tracking",
    category: "Analytics & Tracking",
    topics: [
      "Understanding Conversion Tracking",
      "Setting up Conversion Goals",
      "Tracking Pixels & Codes",
      "Analyzing Conversion Data"
    ]
  },
  {
    id: 17,
    title: "SEO",
    category: "SEO & Search",
    topics: [
      "Introduction to SEO",
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Off-Page SEO",
      "Link Building Strategies",
      "Local SEO",
      "SEO Auditing"
    ]
  },
  {
    id: 18,
    title: "Search Engine Marketing / PPC",
    category: "Paid Advertising",
    topics: [
      "Advanced PPC Strategies",
      "Competitor Ad Analysis",
      "Ad Copywriting Masterclass",
      "A/B Testing in PPC"
    ]
  },
  {
    id: 19,
    title: "Search Campaign",
    category: "Paid Advertising",
    topics: [
      "Creating a Search Campaign",
      "Ad Extensions",
      "Search Term Reports",
      "Bidding Strategies for Search"
    ]
  },
  {
    id: 20,
    title: "Display Campaign",
    category: "Paid Advertising",
    topics: [
      "Introduction to Google Display Network",
      "Display Ad Formats",
      "Targeting Options (Placements, Topics, Audiences)",
      "Optimizing Display Ads"
    ]
  },
  {
    id: 21,
    title: "Video Campaign (YouTube)",
    category: "Paid Advertising",
    topics: [
      "YouTube Ads Overview",
      "Skippable vs Non-Skippable Ads",
      "Bumper Ads & In-feed Ads",
      "Targeting in YouTube Campaigns"
    ]
  },
  {
    id: 22,
    title: "Shopping Campaign",
    category: "Paid Advertising",
    topics: [
      "Google Merchant Center Setup",
      "Product Data Feeds",
      "Creating Shopping Campaigns",
      "Optimizing Shopping Ads"
    ]
  },
  {
    id: 23,
    title: "Performance Max Campaign",
    category: "Paid Advertising",
    topics: [
      "What is Performance Max?",
      "Asset Groups Configuration",
      "Audience Signals",
      "Analyzing Performance Max Results"
    ]
  },
  {
    id: 24,
    title: "Demand Generation Campaign",
    category: "Paid Advertising",
    topics: [
      "Demand Gen Concepts",
      "Creating Demand Generation Campaigns",
      "Targeting Strategies",
      "Best Practices"
    ]
  },
  {
    id: 25,
    title: "Google Tag Manager",
    category: "Analytics & Tracking",
    topics: [
      "What, Why, and How GTM Works",
      "Account Setup",
      "Creating GTM Account",
      "Installing First Container",
      "Understanding GTM Interface and Workspace",
      "Tags",
      "Triggers",
      "Variables",
      "Implementing Google Analytics 4",
      "Custom Event Tracking",
      "Button Click Tracking",
      "Form Submission Tracking"
    ]
  },
  {
    id: 26,
    title: "Remarketing",
    category: "Analytics & Tracking",
    topics: [
      "What is Remarketing",
      "Benefits of Remarketing Strategy",
      "Custom Audience",
      "Lookalike Audience",
      "Step-by-Step Remarketing Campaign",
      "Facebook Ads Remarketing",
      "Google Ads Remarketing",
      "Pixel Code"
    ]
  },
  {
    id: 27,
    title: "YouTube Creator Journey",
    category: "Content, AI & Communication Marketing",
    topics: [
      "How to Create a YouTube Channel",
      "YouTube Keyword Research",
      "Content Publishing",
      "YouTube Ranking Factors",
      "YouTube Video Optimization",
      "YouTube Content Strategies",
      "YouTube Short Mastery",
      "How to be a Vlogger",
      "Generating Content Ideas Using AI",
      "Developing YouTube Growth Plan",
      "Using AI",
      "How to Create YouTube Studio",
      "Get Paid Through YouTube Channel",
      "Linking Google AdSense"
    ]
  },
  {
    id: 28,
    title: "YouTube Analytics",
    category: "Content, AI & Communication Marketing",
    topics: [
      "Understanding YouTube Studio Dashboard",
      "Analyzing Watch Time & Retention",
      "Audience Demographics",
      "Traffic Sources Analysis"
    ]
  },
  {
    id: 29,
    title: "Google AdSense",
    category: "Monetization",
    topics: [
      "Basics of Google AdSense",
      "AdSense Property Verification",
      "Different Types of Ads",
      "How to Earn Using AdSense",
      "Google AdSense Policy Overview",
      "Apply for AdSense Account",
      "Ad Control System"
    ]
  },
  {
    id: 30,
    title: "Affiliate Marketing",
    category: "Monetization",
    topics: [
      "What is Affiliate Marketing",
      "How to Apply for Affiliate Marketing Network",
      "How Affiliate Marketing Works",
      "Finding Niche",
      "Top Affiliate Marketing Networks",
      "Reports & ROI",
      "Amazon Affiliate Program",
      "Best Resources for Affiliate Marketing"
    ]
  },
  {
    id: 31,
    title: "Content Marketing",
    category: "Content, AI & Communication Marketing",
    topics: [
      "Introduction to Content Marketing",
      "Objective of Content Marketing",
      "Content Marketing 7-Step Strategy",
      "Building Process",
      "Types of Content",
      "How to Write Great Compelling Content",
      "Optimizing Content for Search Engines"
    ]
  },
  {
    id: 32,
    title: "Prompt Engineering",
    category: "Content, AI & Communication Marketing",
    topics: [
      "What is Prompt Engineering",
      "How to Write Great Prompts",
      "AI Tools for Prompt Engineering",
      "Strategies to Write Prompts"
    ]
  },
  {
    id: 33,
    title: "Email Marketing",
    category: "Content, AI & Communication Marketing",
    topics: [
      "Introduction to Email Marketing",
      "Importance of Email Marketing",
      "Popular Email Marketing Tools",
      "Email Marketing Goals",
      "Introduction to Email Tools",
      "Account Setup and Settings",
      "Email Marketing Strategies",
      "Creating a List",
      "Types of Email Marketing Campaigns"
    ]
  },
  {
    id: 34,
    title: "WhatsApp Marketing",
    category: "Content, AI & Communication Marketing",
    topics: [
      "WhatsApp Marketing Strategies",
      "WhatsApp Business Features",
      "Auto Replies",
      "WhatsApp Bulk Sending Software",
      "WhatsApp Business API"
    ]
  },
  {
    id: 35,
    title: "Influencer Marketing",
    category: "Influencer Marketing",
    topics: [
      "Types of Influencers and Collaboration",
      "Engagement Rate",
      "Influencer Types",
      "Campaign Planning Fundamentals",
      "Strategy & Campaign Management",
      "Finding Right Influencers for Brand",
      "Managing End-to-End Campaigns",
      "Pitching",
      "Briefing",
      "Execution",
      "Trends & Channels",
      "Pricing & Budget",
      "Measuring Success"
    ]
  },
  {
    id: 36,
    title: "Freelancing Mastery",
    category: "Freelancing & Client Acquisition",
    topics: [
      "Understanding Freelancing Business Model",
      "Identifying High-Demand Digital Marketing Services",
      "Selecting Niche",
      "Creating Packages",
      "Creating Deliverables for Clients",
      "Designing Attractive Service Packages",
      "Upselling and Cross-Selling Techniques",
      "Common Mistakes Most Freelancers Make"
    ]
  },
  {
    id: 37,
    title: "Freelancing Profile & Portfolio Creation",
    category: "Freelancing & Client Acquisition",
    topics: [
      "Building a Portfolio that Attracts Clients",
      "Building Trust Through Portfolio"
    ]
  },
  {
    id: 38,
    title: "Client Finding & Acquisition",
    category: "Freelancing & Client Acquisition",
    topics: [
      "Finding Local Businesses in Your City",
      "Google Maps",
      "Local Networking Strategy",
      "Different Strategies to Get Clients",
      "Organic Client Acquisition Methods",
      "Paid Client Acquisition Methods"
    ]
  },
  {
    id: 39,
    title: "Freelancing Selling / Client Pitching & Closing",
    category: "Freelancing & Client Acquisition",
    topics: [
      "How to Pitch Clients & Close",
      "Different Sales Strategies",
      "Client Closing Strategies"
    ]
  },
  {
    id: 40,
    title: "Freelancing Client Handling",
    category: "Freelancing & Client Acquisition",
    topics: [
      "Client Onboarding Process",
      "Setting Expectations with Clients",
      "Communication Channels with Client",
      "Managing Multiple Clients",
      "Building Long-Term Relationships",
      "Building a Team",
      "Agency Growth"
    ]
  },
  {
    id: 41,
    title: "Interview Preparation",
    category: "Career & Industry Exposure",
    topics: [
      "1-to-1 Personal Interview Session",
      "Improvements in Interview",
      "Interview Cracking Tips & Tricks",
      "Getting Ready to Crack Interview"
    ]
  },
  {
    id: 42,
    title: "Exclusive Guest Sessions",
    category: "Career & Industry Exposure",
    topics: [
      "Guest Sessions by Industry Experts",
      "Trending Digital Marketing Updates"
    ]
  }
];

export const syllabusModules = rawSyllabusModules.map((mod, idx) => ({
  ...mod,
  id: idx + 1
}));

export const specializations = [
  {
    id: 1,
    title: "META ADS",
    description: "Learn Facebook and Instagram advertising, campaign structure, audience targeting, remarketing, bidding and campaign strategy.",
    icon: "meta"
  },
  {
    id: 2,
    title: "GOOGLE ADS",
    description: "Learn Google Ads including Search, Display, YouTube, Shopping, Performance Max and Demand Generation campaigns.",
    icon: "google"
  },
  {
    id: 3,
    title: "SEO",
    description: "Learn keyword research, on-page SEO, technical SEO, off-page SEO, link building, local SEO and SEO auditing.",
    icon: "seo"
  }
];

export const courseHighlights = [
  { id: 1, text: "120+ Hours Training" },
  { id: 2, text: "50+ Real-Time Projects" },
  { id: 3, text: "Meta Ads Specialization" },
  { id: 4, text: "Google Ads Specialization" },
  { id: 5, text: "SEO Specialization" },
  { id: 6, text: "18+ Certificates" },
  { id: 7, text: "Placement Assistance" },
  { id: 8, text: "Industry Expert Sessions" }
];
