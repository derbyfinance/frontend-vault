import React, { useState } from 'react';
import {
  StyledDarkThemeButtonContainer,
  StyledSwitcher,
} from './DarkThemeButton.styled';

const DarkThemeButton = ({toggleTheme, isDark}) => {

  const themeHandler = () => {
    toggleTheme();
  };

  return (
    <StyledDarkThemeButtonContainer onClick={themeHandler} isDark={isDark}>
      <StyledSwitcher isDark={isDark}/>
    </StyledDarkThemeButtonContainer>
  );
};

export default DarkThemeButton;
