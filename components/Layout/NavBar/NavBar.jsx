import { useState } from 'react';
import ConnectWalletModal from '@components/Common/Modal/ConnectWalletModal/ConnectWalletModal';
import { Logo } from '@icons/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MainButton from '../../Common/MainButton/MainButton';
import DarkThemeButton from '../../DarkThemeButton/DarkThemeButton';
import {
  StyledNavBarContent,
  StyledNavBarWrapper,
  StyledNavLink,
  StyledNavLinks,
} from './NavBar.styled';
import { useAccount } from 'wagmi';
import ConnectedWalletAddress from './ConnectedWalletAddress/ConnectedWalletAddress';

const NavBar = ({ toggleTheme, isDark }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { isConnected, address } = useAccount();

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const router = useRouter();

  return (
    <StyledNavBarWrapper>
      <ConnectWalletModal
        isOpen={isOpen}
        openModal={openModal}
        onClose={closeModal}
      />
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

          {isConnected ? (
            <ConnectedWalletAddress />
          ) : (
            <StyledNavLink>
              <MainButton onClick={openModal} btnText="Connect Your Wallet" />
            </StyledNavLink>
          )}
        </StyledNavLinks>
      </StyledNavBarContent>
    </StyledNavBarWrapper>
  );
};

export default NavBar;
