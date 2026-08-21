import fs from 'fs';
import path from 'path';

// Load Location Data and Sitemap
import { allCitiesFooterList, getCityData } from '../src/data/locationsData.js';
import { cityLocalContent } from '../src/data/cityLocalContent.js';
import { indexableSlugs } from '../src/config/seoConfig.js';

console.log('==================================================');
console.log('🔍 DIGISEVAKS ACADEMY — AUTOMATED LOCATION SEO VALIDATOR');
console.log('==================================================\n');

let errorCount = 0;
let warningCount = 0;

const slugSet = new Set();
const titleSet = new Set();
const descSet = new Set();

console.log(`📌 Auditing Total Registered Locations: ${allCitiesFooterList.length}`);

// 1. Audit Slug Uniqueness & Basic Attributes
allCitiesFooterList.forEach((city, index) => {
  const slug = city.slug;
  if (!slug) {
    console.error(`❌ ERROR: Location at index ${index} missing slug.`);
    errorCount++;
    return;
  }

  if (slugSet.has(slug)) {
    console.error(`❌ ERROR: Duplicate location slug found: "${slug}"`);
    errorCount++;
  } else {
    slugSet.add(slug);
  }

  const fullData = getCityData(slug);
  if (!fullData) {
    console.error(`❌ ERROR: getCityData("${slug}") returned undefined.`);
    errorCount++;
  }
});

// 2. Audit Class-A and Class-B Indexable Locations
console.log(`\n📌 Auditing Indexable Slugs Set Count: ${indexableSlugs.size}`);

indexableSlugs.forEach((slug) => {
  const city = getCityData(slug);
  if (!city) {
    console.error(`❌ ERROR: Indexable slug "${slug}" not found in locationsData.`);
    errorCount++;
    return;
  }

  const local = cityLocalContent[slug] || cityLocalContent[city.cityId];

  // Title check
  const title = local?.seoTitle || `${city.fullTitle} | Digisevaks Academy`;
  if (titleSet.has(title)) {
    console.warn(`⚠️ WARNING: Duplicate SEO Title found for "${slug}": "${title}"`);
    warningCount++;
  } else {
    titleSet.add(title);
  }

  // Description check
  const desc = local?.metaDescription || city.metaDescription;
  if (descSet.has(desc)) {
    console.warn(`⚠️ WARNING: Duplicate Meta Description found for "${slug}"`);
    warningCount++;
  } else {
    descSet.add(desc);
  }
});

// 3. Audit Sitemap File Synchronization
const sitemapPath = path.resolve('public/sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemapXml = fs.readFileSync(sitemapPath, 'utf-8');
  console.log(`\n📌 Auditing public/sitemap.xml synchronization...`);

  // Count location URLs in sitemap
  const locationMatches = sitemapXml.match(/<loc>https:\/\/digisevaksacademy\.com\/digital-marketing-courses-in-[^<]+<\/loc>/g) || [];
  console.log(`   - Location URLs found in sitemap: ${locationMatches.length}`);

  if (locationMatches.length !== indexableSlugs.size) {
    console.error(`❌ ERROR: Sitemap location URL count (${locationMatches.length}) does NOT match indexableSlugs count (${indexableSlugs.size})!`);
    errorCount++;
  } else {
    console.log(`   ✅ Sitemap XML location count matches indexableSlugs count perfectly (${locationMatches.length} URLs).`);
  }

  // Verify no Class-C slug is in sitemap
  allCitiesFooterList.forEach((city) => {
    const isIndexable = indexableSlugs.has(city.slug) || indexableSlugs.has(city.route.replace(/^\/digital-marketing-courses?-in-/, ''));
    const url = `https://digisevaksacademy.com${city.route}`;
    if (!isIndexable && sitemapXml.includes(url)) {
      console.error(`❌ ERROR: Non-indexable (Class-C) city URL "${url}" is present in public/sitemap.xml!`);
      errorCount++;
    }
  });
} else {
  console.error(`❌ ERROR: public/sitemap.xml file missing!`);
  errorCount++;
}

console.log('\n==================================================');
console.log(`RESULTS: ${errorCount} Errors, ${warningCount} Warnings`);
console.log('==================================================');

if (errorCount > 0) {
  process.exit(1);
} else {
  console.log('🎉 LOCATION SEO VALIDATION PASSED SUCCESSFULLY!');
}
