import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingWidgets from './components/FloatingWidgets';
import DemoModal from './components/DemoModal';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import ProjectsPage from './pages/ProjectsPage';
import ToolsPage from './pages/ToolsPage';
import CertificatesPage from './pages/CertificatesPage';
import PlacementsPage from './pages/PlacementsPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import SampleCertificateModal from './components/SampleCertificateModal';
import SyllabusPage from './pages/SyllabusPage';
import EnquiryPage from './pages/EnquiryPage';
import AdmissionPage from './pages/AdmissionPage';
import CityLandingPage from './pages/CityLandingPage';
import { allCitiesFooterList } from './data/locationsData';

// Component to auto pop-up demo modal on every page open / route change
function AutoPageModalTrigger({ onOpenModal }) {
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      onOpenModal('demo');
    }, 600);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('demo');

  const [sampleCertOpen, setSampleCertOpen] = useState(false);
  const [sampleCertType, setSampleCertType] = useState('master');

  const handleOpenDemo = (type = 'demo') => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleOpenSampleCert = (certType = 'master') => {
    setSampleCertType(certType);
    setSampleCertOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <AutoPageModalTrigger onOpenModal={handleOpenDemo} />
      <div className="min-h-screen bg-white text-[#111111] font-sans flex flex-col justify-between selection:bg-[#FF1744] selection:text-white">
        
        {/* Navigation Bar */}
        <Navbar onOpenDemo={handleOpenDemo} />

        {/* Dynamic Route Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenDemo={handleOpenDemo} onOpenSampleCert={handleOpenSampleCert} />} />
            <Route path="/about" element={<AboutPage onOpenDemo={handleOpenDemo} />} />
            <Route path="/courses" element={<CoursesPage onOpenDemo={handleOpenDemo} />} />
            <Route path="/courses/digital-marketing/syllabus" element={<SyllabusPage onOpenDemo={handleOpenDemo} />} />
            <Route path="/enquiry" element={<EnquiryPage />} />
            <Route path="/admission-form" element={<AdmissionPage />} />
            <Route path="/admission" element={<AdmissionPage />} />
            <Route path="/projects" element={<ProjectsPage onOpenDemo={handleOpenDemo} />} />
            <Route path="/tools" element={<ToolsPage onOpenDemo={handleOpenDemo} />} />
            <Route path="/certificates" element={<CertificatesPage onOpenDemo={handleOpenDemo} onOpenSampleCert={handleOpenSampleCert} />} />
            <Route path="/placements" element={<PlacementsPage onOpenDemo={handleOpenDemo} />} />
            <Route path="/contact" element={<ContactPage onOpenDemo={handleOpenDemo} />} />
            <Route path="/blog" element={<BlogPage onOpenDemo={handleOpenDemo} />} />

            {/* City Landing Pages (Dynamically Registered Routes for All Cities) */}
            {allCitiesFooterList.map((cityItem, idx) => (
              <Route
                key={idx}
                path={cityItem.route}
                element={<CityLandingPage onOpenDemo={handleOpenDemo} locationSlugOverride={cityItem.slug} />}
              />
            ))}

            {/* Dynamic Catch-All Wildcard City Routes */}
            <Route path="/digital-marketing-courses-in-/*" element={<CityLandingPage onOpenDemo={handleOpenDemo} />} />
            <Route path="/digital-marketing-course-in-/*" element={<CityLandingPage onOpenDemo={handleOpenDemo} />} />

            <Route path="*" element={<Home onOpenDemo={handleOpenDemo} onOpenSampleCert={handleOpenSampleCert} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenDemo={handleOpenDemo} />

        {/* Floating WhatsApp & Scroll To Top Actions */}
        <FloatingWidgets />

        {/* Pop-Up Contact / Book Demo Modal */}
        <DemoModal 
          isOpen={modalOpen} 
          onClose={() => setModalOpen(false)} 
          type={modalType} 
        />

        {/* Pop-Up Sample Certificate Modal */}
        <SampleCertificateModal
          isOpen={sampleCertOpen}
          onClose={() => setSampleCertOpen(false)}
          defaultCertType={sampleCertType}
          onOpenDemo={handleOpenDemo}
        />
      </div>
    </Router>
  );
}
