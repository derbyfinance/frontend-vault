import React, {useState} from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from '../../styled/ThemeConfig';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import { StyledLayoutWrapper } from './Layout.styled';

const Layout = ({ children }) => {
  const [isDark, setIsDark] = useState(false)
  const toggleTheme = () => setIsDark(!isDark)

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
    <StyledLayoutWrapper>
      <NavBar toggleTheme={toggleTheme} isDark={isDark}/>
      {children}
      <Footer isDark={isDark}/>
    </StyledLayoutWrapper>
    </ThemeProvider>
  );
};

export default Layout;
