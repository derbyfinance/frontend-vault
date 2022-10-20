import React, {useState} from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import { StyledLayoutWrapper } from './Layout.styled';

const Layout = ({ children }) => {
  const [isDark, setIsDark] = useState(false)
  const toggleTheme = () => setIsDark(!isDark)
  return (
    <StyledLayoutWrapper isDark={isDark} >
      <NavBar setTheme={toggleTheme} isDark={isDark}/>
      {children}
      <Footer isDark={isDark}/>
    </StyledLayoutWrapper>
  );
};

export default Layout;
