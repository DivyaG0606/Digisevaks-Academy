import React from 'react';
import EnquiryFormSection from '../components/EnquiryFormSection';

export default function EnquiryPage() {
  React.useEffect(() => {
    document.title = "Enquiry Form | DIGISEVAKS Academy Admission";
  }, []);

  return (
    <div className="animate-fade-in font-sans bg-white">
      <EnquiryFormSection />
    </div>
  );
}
