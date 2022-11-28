import React, { useState } from 'react';
import Footer from '@components/Layout/Footer/Footer';
import NavBar from '@components/Layout/NavBar/NavBar';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme } from 'styled/ThemeConfig';
import { StyledLayoutContainer, StyledLayoutWrapper } from './Layout.styled';

const Layout = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <StyledLayoutWrapper>
        <NavBar toggleTheme={toggleTheme} isDark={isDark} />
        {children}
        <Footer isDark={isDark} />
      </StyledLayoutWrapper>
    </ThemeProvider>
  );
};

export default Layout;
