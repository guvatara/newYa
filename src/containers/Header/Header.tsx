import React from 'react';
/* Apps  */
import { Navigation } from '@containers';
/* Local  */
import { HeaderContainer } from './styled';

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Navigation />
    </HeaderContainer>
  );
};
