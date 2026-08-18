import React from 'react';
import CertificatesSection from '../components/CertificatesSection';

export default function CertificatesPage({ onOpenDemo, onOpenSampleCert }) {
  return (
    <div className="py-16 bg-white font-sans animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
        <span className="bg-[#FFF5F7] text-[#FF1744] border border-[#FF5C7A]/30 text-xs font-heading font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
          Official Credentials
        </span>
        <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-[#111111] tracking-tight mt-4">
          Certificates You Will Receive
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#6B7280] max-w-2xl mx-auto">
          Earn specialized Soft Copy Certificates and an official <span className="text-[#FF1744] font-bold">Printed Hard Copy Master Diploma</span>.
        </p>
      </div>

      <CertificatesSection onOpenDemo={onOpenDemo} onOpenSampleCert={onOpenSampleCert} />
    </div>
  );
}
