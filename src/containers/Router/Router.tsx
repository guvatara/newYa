import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { App } from '../../App/App';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
