import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('demo');

  const [sampleCertOpen, setSampleCertOpen] = useState(false);
  const [sampleCertType, setSampleCertType] = useState('master');

  // Auto pop-up "Book Free Demo Class" modal on page load / refresh
  useEffect(() => {
    const timer = setTimeout(() => {
      setModalType('demo');
      setModalOpen(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

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
            <Route path="/projects" element={<ProjectsPage onOpenDemo={handleOpenDemo} />} />
            <Route path="/tools" element={<ToolsPage onOpenDemo={handleOpenDemo} />} />
            <Route path="/certificates" element={<CertificatesPage onOpenDemo={handleOpenDemo} onOpenSampleCert={handleOpenSampleCert} />} />
            <Route path="/placements" element={<PlacementsPage onOpenDemo={handleOpenDemo} />} />
            <Route path="/contact" element={<ContactPage onOpenDemo={handleOpenDemo} />} />
            <Route path="/blog" element={<BlogPage onOpenDemo={handleOpenDemo} />} />
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
