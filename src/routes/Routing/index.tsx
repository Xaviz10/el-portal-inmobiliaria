import React from 'react';
import PrivateRouting from '../PrivateRouting';
import PublicRouting from '../PublicRouting';

const Routing = () => {
  return (
    <>
      <PublicRouting />
      <PrivateRouting />
    </>
  );
};

export default Routing;
