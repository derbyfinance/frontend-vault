import React, { useState } from 'react';
import {
  StyledDarkThemeButtonContainer,
  StyledSwitcher,
} from './DarkThemeButton.styled';

const DarkThemeButton = () => {
  const [darkTheme, setIsDarkTheme] = useState(false);

  const themeHandler = () => {
    setIsDarkTheme(!darkTheme);
    console.log(darkTheme);
  };

  return (
    <StyledDarkThemeButtonContainer onClick={themeHandler}>
      <StyledSwitcher isDark={darkTheme} />
    </StyledDarkThemeButtonContainer>
  );
};

export default DarkThemeButton;
