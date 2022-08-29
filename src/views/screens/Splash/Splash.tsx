import React from 'react';
import useControllers from '../../../controllers';

const Splash = () => {
  // Hooks
  const { useScreenHooks } = useControllers();
  const { useSplash } = useScreenHooks();
  useSplash();
  return (
    <>
      <h1>Splash Test</h1>
    </>
  );
};

export default Splash;
