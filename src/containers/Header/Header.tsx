import React from 'react';
import { Navigation } from '../Navigation';
import { HeaderContainer } from './styled';

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Navigation />
    </HeaderContainer>
  );
};
