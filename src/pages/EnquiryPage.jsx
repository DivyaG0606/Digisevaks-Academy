import React from 'react';
import SEO from '../components/SEO';
import { getBreadcrumbSchema } from '../data/schemaData';
import EnquiryFormSection from '../components/EnquiryFormSection';

export default function EnquiryPage() {
  return (
    <div className="animate-fade-in font-sans bg-white">
      <SEO pageKey="enquiry" schema={getBreadcrumbSchema([{ name: 'Course Enquiry', url: '/enquiry' }])} />
      <EnquiryFormSection />
    </div>
  );
}
