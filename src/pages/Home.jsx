import React from 'react';
import SEO from '../components/SEO';
import { getOrganizationSchema } from '../data/schemaData';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import AboutVision from '../components/AboutVision';
import WhoShouldJoin from '../components/WhoShouldJoin';
import WhyChooseUs from '../components/WhyChooseUs';
import CourseModules from '../components/CourseModules';
import LiveProjects from '../components/LiveProjects';
import ToolsSection from '../components/ToolsSection';
import CertificatesSection from '../components/CertificatesSection';
import PlacementSection from '../components/PlacementSection';
import Testimonials from '../components/Testimonials';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';

export default function Home({ onOpenDemo, onOpenSampleCert }) {
  return (
    <div className="animate-fade-in">
      <SEO pageKey="home" schema={getOrganizationSchema()} />
      <Hero onOpenDemo={onOpenDemo} />
      <Stats />
      <AboutVision />
      <WhoShouldJoin onOpenDemo={onOpenDemo} />
      <WhyChooseUs />
      <CourseModules onOpenDemo={onOpenDemo} />
      <LiveProjects />
      <ToolsSection />
      <CertificatesSection onOpenDemo={onOpenDemo} onOpenSampleCert={onOpenSampleCert} />
      <PlacementSection onOpenDemo={onOpenDemo} />
      <Testimonials />
      <FaqSection />
      <ContactSection showMap={false} />
    </div>
  );
}
