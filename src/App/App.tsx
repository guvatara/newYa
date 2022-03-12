import React from 'react';
import { Header } from '@containers';

import { AppContainer } from './styled';

export const App: React.FC = () => {
  const Anything = '1234';
  const Nuuke = (name: string) => <strong>{name}</strong>;

  return (
    <AppContainer>
      <Header />
      {Nuuke('Bo1221ooo')}
      {Anything}
    </AppContainer>
  );
};
