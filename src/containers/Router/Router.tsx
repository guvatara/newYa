import React from 'react';
import { BrowserRouter } from 'react-router-dom';
/* Apps  */
import { Header, PageController, Footer } from '@containers';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <PageController />
      <Footer />
    </BrowserRouter>
  );
};
