import ModalComponent from '@components/Modal/Modal';
import {
  StyledModalConnectOptions,
  StyledModalLogoAndText,
} from '@components/Modal/Modal.styled';
import SignIn from '@components/SignIn/SignIn';
import { DFConnectIcon, Logo } from '@icons/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import DarkThemeButton from '../DarkThemeButton/DarkThemeButton';
import MainButton from '../MainButton/MainButton';
import {
  StyledConnectDisclaimer,
  StyledNavBarContent,
  StyledNavBarWrapper,
  StyledNavLink,
  StyledNavLinks,
} from './NavBar.styled';

const NavBar = ({ toggleTheme, isDark }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const router = useRouter();

  return (
    <StyledNavBarWrapper>
      {modalIsOpen && (
        <ModalComponent modalIsOpen={modalIsOpen} closeModal={closeModal}>
          <StyledModalLogoAndText>
            <DFConnectIcon />
            <h3>Connect Wallet</h3>
            <h4>to start using Derby Finance</h4>
          </StyledModalLogoAndText>
          <StyledModalConnectOptions>
            <SignIn />
          </StyledModalConnectOptions>
          <StyledConnectDisclaimer>
            By connecting, I accept Derby Finance’s
            <a href="#">terms of Service </a>
          </StyledConnectDisclaimer>
        </ModalComponent>
      )}

      <StyledNavBarContent>
        <Link href="/" passHref>
          <a>
            <Logo />
          </a>
        </Link>
        <StyledNavLinks>
          <StyledNavLink>
            <DarkThemeButton toggleTheme={toggleTheme} isDark={isDark} />
          </StyledNavLink>
          <StyledNavLink active={router.pathname === '/vaults'}>
            <Link href="/vaults">Vault</Link>
          </StyledNavLink>
          <StyledNavLink active={router.pathname === '/game'}>
            <Link href="/game">Game</Link>
          </StyledNavLink>
          <StyledNavLink active={router.pathname === '/governance'}>
            <Link href="/governance">Governance</Link>
          </StyledNavLink>
          <StyledNavLink>
            <MainButton openModal={openModal} btnText="Connect Your Wallet" />
          </StyledNavLink>
        </StyledNavLinks>
      </StyledNavBarContent>
    </StyledNavBarWrapper>
  );
};

export default NavBar;
