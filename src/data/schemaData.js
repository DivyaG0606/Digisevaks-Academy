// Structured JSON-LD Schema Generators for DIGISEVAKS Academy

import { siteConfig } from '../config/seoConfig';

/**
 * Returns Organization + EducationalOrganization + LocalBusiness Schema JSON-LD
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EducationalOrganization", "LocalBusiness"],
        "@id": `${siteConfig.domain}/#organization`,
        "name": siteConfig.siteName,
        "url": siteConfig.domain,
        "logo": {
          "@type": "ImageObject",
          "@id": `${siteConfig.domain}/#logo`,
          "url": `${siteConfig.domain}/logo.png`,
          "contentUrl": `${siteConfig.domain}/logo.png`,
          "caption": siteConfig.siteName
        },
        "image": `${siteConfig.domain}/logo.png`,
        "description": "AI-Powered Agency-Style Digital Marketing Academy in Pune offering practical training, live client projects, and placement assistance.",
        "telephone": ["+918459439131", "+918788165631"],
        "email": siteConfig.contactEmail,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": siteConfig.location.address,
          "addressLocality": siteConfig.location.city,
          "addressRegion": siteConfig.location.state,
          "postalCode": siteConfig.location.zip,
          "addressCountry": siteConfig.location.country
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": siteConfig.location.latitude,
          "longitude": siteConfig.location.longitude
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "19:00"
        },
        "sameAs": [
          "https://www.facebook.com/digisevaks/",
          "https://www.instagram.com/digisevaks.pune",
          "https://in.linkedin.com/company/digisevaks-media"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Marketing Training Programs in Pune",
          "itemListElement": [
            {
              "@type": "Course",
              "name": "Classroom Digital Marketing Master Course",
              "description": "100% in-person practical training with live agency client projects in Pune."
            },
            {
              "@type": "Course",
              "name": "Advanced Performance Marketing Course",
              "description": "Meta Ads, Google PPC Ads & GA4 analytics mastery."
            },
            {
              "@type": "Course",
              "name": "AI-Powered Digital Marketing & Automation Course",
              "description": "ChatGPT prompt engineering, Canva AI, and AI automation for digital marketers."
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.domain}/#website`,
        "url": siteConfig.domain,
        "name": siteConfig.siteName,
        "description": "Digital Marketing Course in Pune with Agency-Style Practical AI Training.",
        "publisher": {
          "@id": `${siteConfig.domain}/#organization`
        },
        "inLanguage": "en-US"
      }
    ]
  };
}

/**
 * Returns Course Schema JSON-LD
 */
export function getCourseSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Master AI & Agency-Style Digital Marketing Program",
    "description": "Comprehensive practical digital marketing training in Pune covering SEO, Meta Ads, Google Ads, GA4 Analytics, WordPress website development, and 50+ AI tools.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": siteConfig.siteName,
      "sameAs": siteConfig.domain
    },
    "hasCourseInstance": [
      {
        "@type": "CourseInstance",
        "courseMode": ["OnSite", "Online"],
        "duration": "P3M",
        "inLanguage": "en",
        "courseWorkload": "PT120H",
        "instructor": {
          "@type": "Person",
          "name": "Senior Agency Mentors & Technical Faculty"
        }
      }
    ],
    "educationalCredentialAwarded": "Official DIGISEVAKS Master Diploma & Google/Meta Certifications"
  };
}

/**
 * Returns BreadcrumbList Schema JSON-LD
 */
export function getBreadcrumbSchema(items = []) {
  const itemListElement = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": siteConfig.domain
    },
    ...items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 2,
      "name": item.name,
      "item": item.url.startsWith("http") ? item.url : `${siteConfig.domain}${item.url}`
    }))
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement
  };
}

/**
 * Returns FAQPage Schema JSON-LD
 */
export function getFaqSchema(faqs = []) {
  if (!faqs || faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q || faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a || faq.answer
      }
    }))
  };
}
