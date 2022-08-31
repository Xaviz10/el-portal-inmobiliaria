import React from 'react';
import useComponents from '../../components';
import useLayouts from '../../layouts';

const LandingPage = () => {
  const { PrimaryLayout } = useLayouts();
  const { HomeSection, LearnMoreSection, ServicesSection } = useComponents();
  return (
    <PrimaryLayout>
      <HomeSection />
      <LearnMoreSection />
      <ServicesSection />
    </PrimaryLayout>
  );
};
export default LandingPage;
