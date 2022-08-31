import React from 'react';
import { Routes, Route } from 'react-router';
import useViews from '../../views';

const PublicRouting = () => {
  // Views
  const { useScreens } = useViews();
  const { LandingPage } = useScreens();
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default PublicRouting;
