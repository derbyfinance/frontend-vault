import React, { useState } from 'react';
import {
  StyledDarkThemeButtonContainer,
  StyledSwitcher,
} from './DarkThemeButton.styled';

const DarkThemeButton = ({toggleTheme, isDark}) => {

  return (
    <StyledDarkThemeButtonContainer onClick={toggleTheme} isDark={isDark}>
      <StyledSwitcher isDark={isDark}/>
    </StyledDarkThemeButtonContainer>
  );
};

export default DarkThemeButton;
