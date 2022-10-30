import React, { useState } from 'react';
import Footer from '@components/Footer/Footer';
import NavBar from '@components/NavBar/NavBar';
import { StyledLayoutWrapper } from './Layout.styled';
import { darkTheme, GlobalStyles, lightTheme } from 'styled/ThemeConfig';
import { ThemeProvider } from 'styled-components';

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
