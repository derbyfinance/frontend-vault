import React, { useState, useEffect } from 'react';
import Footer from '@components/Layout/Footer/Footer.tsx';
import NavBar from '@components/Layout/NavBar/NavBar.tsx';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme } from 'styled/ThemeConfig';
import { StyledLayoutContainer, StyledLayoutWrapper , ContainerWrapper, StyledTextNone} from './Layout.styled';
import useDeviceSize from '../../helpers/useDeviceSize';

const Layout = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(!isDark);

  const [width , height ] = useDeviceSize();
  const [isBigger, setIsBigger] = useState()


  useEffect(()=>{
    if(width < 770){
      setIsBigger(false);
    }
    if(width > 770){
      setIsBigger(true);
    }
  },[height, width]);

  return (
    isBigger? <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <NavBar toggleTheme={toggleTheme} isDark={isDark} />

      <StyledLayoutWrapper>
        <ContainerWrapper>
        {children}
        </ContainerWrapper>

        <Footer isDark={isDark} />
      </StyledLayoutWrapper>
    </ThemeProvider>:<StyledTextNone>"Do not supported for this screen"</StyledTextNone>
  );
};

export default Layout;
