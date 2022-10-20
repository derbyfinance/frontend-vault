import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import { StyledLayoutWrapper } from './Layout.styled';

const Layout = ({ children, ...props }) => {
  console.log(props, 'props');
  return (
    <StyledLayoutWrapper>
      <NavBar />
      {children}
      <Footer />
    </StyledLayoutWrapper>
  );
};

export default Layout;
