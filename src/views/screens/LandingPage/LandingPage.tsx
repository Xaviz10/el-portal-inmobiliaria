import React from 'react';
import useComponents from '../../components';
import useLayouts from '../../layouts';

const LandingPage = () => {
  const { PrimaryLayout } = useLayouts();
  const { HomeSection } = useComponents();
  return (
    <PrimaryLayout>
      <HomeSection />
    </PrimaryLayout>
  );
};
export default LandingPage;
