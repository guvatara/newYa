import React from 'react';
/* Apps  */
import { Router } from '@containers';
/* Local  */
import { AppContainer } from './styled';

export const App: React.FC = () => {
  return (
    <AppContainer>
      <Router />
    </AppContainer>
  );
};
