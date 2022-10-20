import React, { useState } from 'react';
import {
  StyledDarkThemeButtonContainer,
  StyledSwitcher,
} from './DarkThemeButton.styled';

const DarkThemeButton = ({setTheme, isDark}) => {

  const themeHandler = () => {
    setTheme();
  };

  return (
    <StyledDarkThemeButtonContainer onClick={themeHandler} isDark={isDark}>
      <StyledSwitcher isDark={isDark} />
    </StyledDarkThemeButtonContainer>
  );
};

export default DarkThemeButton;
