import React from 'react';
import { Routes, Route } from 'react-router';
import useViews from '../../views';

const PublicRouting = () => {
  // Views
  const { useScreens } = useViews();
  const { Splash } = useScreens();
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
    </Routes>
  );
};

export default PublicRouting;
