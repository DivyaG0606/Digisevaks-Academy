import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();

console.log("==========================================");
console.log("RUNNING COMPLETE SEO IMPLEMENTATION VALIDATION");
console.log("==========================================");

let hasErrors = false;

// 1. Check robots.txt
const robotsPath = path.join(projectRoot, 'public', 'robots.txt');
if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  if (robotsContent.includes('Sitemap: https://digisevaksacademy.com/sitemap.xml')) {
    console.log("[PASS] robots.txt exists and contains valid sitemap directive.");
  } else {
    console.error("[FAIL] robots.txt missing sitemap directive.");
    hasErrors = true;
  }
} else {
  console.error("[FAIL] public/robots.txt does not exist.");
  hasErrors = true;
}

// 2. Check sitemap.xml
const sitemapPath = path.join(projectRoot, 'public', 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  if (sitemapContent.includes('<urlset') && sitemapContent.includes('https://digisevaksacademy.com/')) {
    console.log("[PASS] sitemap.xml exists and contains valid XML URLs.");
  } else {
    console.error("[FAIL] sitemap.xml does not contain expected XML structure.");
    hasErrors = true;
  }
} else {
  console.error("[FAIL] public/sitemap.xml does not exist.");
  hasErrors = true;
}

// 3. Check SEO Config & Schema Data files
const seoConfigPath = path.join(projectRoot, 'src', 'config', 'seoConfig.js');
if (fs.existsSync(seoConfigPath)) {
  console.log("[PASS] src/config/seoConfig.js exists.");
} else {
  console.error("[FAIL] src/config/seoConfig.js missing.");
  hasErrors = true;
}

const schemaDataPath = path.join(projectRoot, 'src', 'data', 'schemaData.js');
if (fs.existsSync(schemaDataPath)) {
  console.log("[PASS] src/data/schemaData.js exists.");
} else {
  console.error("[FAIL] src/data/schemaData.js missing.");
  hasErrors = true;
}

const seoComponentPath = path.join(projectRoot, 'src', 'components', 'SEO.jsx');
if (fs.existsSync(seoComponentPath)) {
  console.log("[PASS] src/components/SEO.jsx exists.");
} else {
  console.error("[FAIL] src/components/SEO.jsx missing.");
  hasErrors = true;
}

// 4. Verify Pages for SEO component integration
const pageFiles = [
  'Home.jsx', 'AboutPage.jsx', 'CoursesPage.jsx', 'SyllabusPage.jsx',
  'ProjectsPage.jsx', 'ToolsPage.jsx', 'CertificatesPage.jsx', 'PlacementsPage.jsx',
  'ContactPage.jsx', 'BlogPage.jsx', 'EnquiryPage.jsx', 'AdmissionPage.jsx',
  'CityLandingPage.jsx', 'NotFoundPage.jsx'
];

pageFiles.forEach(file => {
  const pagePath = path.join(projectRoot, 'src', 'pages', file);
  if (fs.existsSync(pagePath)) {
    const content = fs.readFileSync(pagePath, 'utf8');
    if (content.includes('<SEO')) {
      console.log(`[PASS] ${file} contains <SEO /> component.`);
    } else {
      console.error(`[FAIL] ${file} missing <SEO /> component.`);
      hasErrors = true;
    }
  } else {
    console.error(`[FAIL] Page file ${file} missing.`);
    hasErrors = true;
  }
});

// 5. Verify SampleCertificateModal H1 fix
const modalPath = path.join(projectRoot, 'src', 'components', 'SampleCertificateModal.jsx');
if (fs.existsSync(modalPath)) {
  const modalContent = fs.readFileSync(modalPath, 'utf8');
  if (modalContent.includes('<h1')) {
    console.error("[FAIL] SampleCertificateModal still contains <h1 tag.");
    hasErrors = true;
  } else {
    console.log("[PASS] SampleCertificateModal has zero <h1 tags (fixed).");
  }
}

console.log("==========================================");
if (!hasErrors) {
  console.log("ALL VERIFICATION TESTS PASSED SUCCESSFULLY!");
} else {
  console.error("SOME VERIFICATION TESTS FAILED!");
}
console.log("==========================================");
