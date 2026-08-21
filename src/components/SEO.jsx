import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoConfig, siteConfig } from '../config/seoConfig';

export default function SEO({
  pageKey,
  title,
  description,
  canonical,
  robots,
  keywords,
  ogImage,
  ogType,
  noindex = false,
  schema = null
}) {
  // Extract preset from config if pageKey is provided
  const preset = pageKey && seoConfig[pageKey] ? seoConfig[pageKey] : {};

  const finalTitle = title || preset.title || siteConfig.siteName;
  const finalDescription = description || preset.description || "";
  const finalCanonical = canonical || preset.canonical || siteConfig.domain;
  const finalRobots = noindex ? "noindex, nofollow" : (robots || preset.robots || "index, follow");
  const finalKeywords = keywords || preset.keywords || "";
  const finalOgImage = ogImage || preset.ogImage || siteConfig.defaultOgImage;
  const finalOgType = ogType || preset.ogType || "website";

  return (
    <Helmet>
      {/* Standard HTML Meta Tags */}
      <html lang="en" />
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      {finalDescription && <meta name="description" content={finalDescription} />}
      {finalKeywords && <meta name="keywords" content={finalKeywords} />}
      <meta name="robots" content={finalRobots} />
      <meta name="author" content={siteConfig.author} />
      <link rel="canonical" href={finalCanonical} />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content={finalOgType} />
      <meta property="og:site_name" content={siteConfig.siteName} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:title" content={finalTitle} />
      {finalDescription && <meta property="og:description" content={finalDescription} />}
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter / X Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteConfig.twitterHandle} />
      <meta name="twitter:title" content={finalTitle} />
      {finalDescription && <meta name="twitter:description" content={finalDescription} />}
      <meta name="twitter:image" content={finalOgImage} />

      {/* Dynamic JSON-LD Structured Data Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
