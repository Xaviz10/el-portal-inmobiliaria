import React from 'react';
import useComponents from '../../components';
import useLayouts from '../../layouts';

const LandingPage = () => {
  const { PrimaryLayout } = useLayouts();
  const { HomeSection, LearnMoreSection } = useComponents();
  return (
    <PrimaryLayout>
      <HomeSection />
      <LearnMoreSection />
    </PrimaryLayout>
  );
};
export default LandingPage;
