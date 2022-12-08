import React from 'react';
import { useLocation } from 'react-router-dom';
import { BackArrow } from '../BackArrow/BackArrow';
import { StyledHeader } from './style';

export const Header = () => {
  const { pathname } = useLocation();
  
  return (
    <StyledHeader>
      {pathname !== '/' && <BackArrow />}
      <p>cineflix</p>
    </StyledHeader>
  );
};