import React, { PropsWithChildren } from 'react';
import useComponents from '../../components';

const PrimaryLayout: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  const { Header, Footer } = useComponents();
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default PrimaryLayout;
