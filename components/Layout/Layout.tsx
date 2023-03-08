import React, { FC, ReactNode, useEffect, useState } from 'react';
import Footer from '@components/Layout/Footer/Footer';
import NavBar from '@components/Layout/NavBar/NavBar';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme } from 'styled/ThemeConfig';
import useDeviceSize from '../../helpers/useDeviceSize';
import Disclaimer from './Disclaimer/Disclaimer';
import { ContainerWrapper, StyledLayoutWrapper } from './Layout.styled';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const toggleTheme = (): void => setIsDark(!isDark);

  const [width, height] = useDeviceSize();
  const [isBigger, setIsBigger] = useState<boolean>(true);

  useEffect(() => {
    if (width < 770) {
      setIsBigger(false);
    }
    if (width > 770) {
      setIsBigger(true);
    }
  }, [height, width]);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      {isBigger ? (
        <>
          <GlobalStyles />
          <NavBar toggleTheme={toggleTheme} isDark={isDark} />
          <StyledLayoutWrapper>
            <ContainerWrapper>{children}</ContainerWrapper>
            <Footer isDark={isDark} />
          </StyledLayoutWrapper>
        </>
      ) : (
        <Disclaimer></Disclaimer>
      )}
    </ThemeProvider>
  );
};

export default Layout;
