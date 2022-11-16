import React, { useState } from 'react';
import Footer from '@components/Layout/Footer/Footer';
import NavBar from '@components/Layout/NavBar/NavBar';
import { StyledLayoutContainer, StyledLayoutWrapper } from './Layout.styled';
import { darkTheme, GlobalStyles, lightTheme } from 'styled/ThemeConfig';
import { ThemeProvider } from 'styled-components';

const Layout = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <StyledLayoutContainer>
        <StyledLayoutWrapper>
          <NavBar toggleTheme={toggleTheme} isDark={isDark} />
          {children}
          <Footer isDark={isDark} />
        </StyledLayoutWrapper>
      </StyledLayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;
