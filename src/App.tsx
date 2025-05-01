import React from 'react';
import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import AdvantagesSection from './components/sections/AdvantagesSection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <AdvantagesSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
}

export default App;