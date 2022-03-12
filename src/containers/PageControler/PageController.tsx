import React from 'react';
import { Route, Routes } from 'react-router-dom';
/* Apps  */
import { Main } from '@pages';

export const PageController: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  );
};
