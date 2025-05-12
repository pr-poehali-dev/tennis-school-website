
import React from 'react';
import Header from '../components/tennis-school/Header';
import HeroSection from '../components/tennis-school/HeroSection';
import FeaturesSection from '../components/tennis-school/FeaturesSection';
import CoachesSection from '../components/tennis-school/CoachesSection';
import TestimonialsSection from '../components/tennis-school/TestimonialsSection';
import CtaSection from '../components/tennis-school/CtaSection';
import Footer from '../components/tennis-school/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CoachesSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
