import { useState } from 'react';
import ConnectWalletModal from '@components/Common/Modal/ConnectWalletModal/ConnectWalletModal';
import { Logo } from '@icons/index';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { useAccount } from 'wagmi';
import MainButton from '../../Common/MainButton/MainButton';
import DarkThemeButton from '../../DarkThemeButton/DarkThemeButton';
import ConnectedWalletAddress from './ConnectedWalletAddress/ConnectedWalletAddress';
import {
  DivMarginLeft,
  StyledNavBarContent,
  StyledNavBarWrapper,
  StyledNavLink,
  StyledNavLinks,
} from './NavBar.styled';

const NavBar = ({
  toggleTheme,
  isDark,
}: {
  toggleTheme: Function;
  isDark: boolean;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { isConnected, address } = useAccount();

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const router: NextRouter = useRouter();

  return (
    <StyledNavBarWrapper>
      <ConnectWalletModal isOpen={isOpen} onClose={closeModal} />
      <StyledNavBarContent>
        <StyledNavLinks>
          <Link href="/" passHref>
            <a>
              <Logo />
            </a>
          </Link>
          <DivMarginLeft />
          <StyledNavLink active={router.pathname === '/vaults'}>
            <Link href="/vaults">Vaults</Link>
          </StyledNavLink>
          <StyledNavLink active={router.pathname === '/game'}>
            <Link href="/game">Game</Link>
          </StyledNavLink>
          <StyledNavLink active={router.pathname === '/governance'}>
            <Link href="/governance">Governance</Link>
          </StyledNavLink>
          <StyledNavLink>
            <DarkThemeButton toggleTheme={toggleTheme} isDark={isDark} />
          </StyledNavLink>
        </StyledNavLinks>
        {isConnected ? (
          <ConnectedWalletAddress />
        ) : (
          <StyledNavLink>
            <MainButton onClick={openModal} btnText="Connect Your Wallet" />
          </StyledNavLink>
        )}
      </StyledNavBarContent>
    </StyledNavBarWrapper>
  );
};

export default NavBar;
