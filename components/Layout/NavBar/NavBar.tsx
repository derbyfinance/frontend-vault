import { useState } from 'react';
import ConnectWalletModal from '@components/Common/Modal/ConnectWalletModal/ConnectWalletModal';
import { Logo } from '@icons/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAccount } from 'wagmi';
import MainButton from '../../Common/MainButton/MainButton';
import DarkThemeButton from '../../DarkThemeButton/DarkThemeButton';
import ConnectedWalletAddress from './ConnectedWalletAddress/ConnectedWalletAddress';
import {
  StyledNavBarContent,
  StyledNavBarWrapper,
  StyledNavLink,
  StyledNavLinks,
} from './NavBar.styled';

const NavBar = ({ toggleTheme, isDark }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { isConnected, address } = useAccount();

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const router = useRouter();

  return (
    <StyledNavBarWrapper>
      <ConnectWalletModal isOpen={isOpen} onClose={closeModal} />
      <StyledNavBarContent>
        <Link href="/" passHref>
          <a>
            <Logo />
          </a>
        </Link>
        <StyledNavLinks>
          {/* TO DO */}
          {/* <StyledNavLink>
            <DarkThemeButton toggleTheme={toggleTheme} isDark={isDark} />
          </StyledNavLink> */}
          <StyledNavLink active={router.pathname.includes('/vaults')}>
            <Link href="/vaults">Vault</Link>
          </StyledNavLink>
          <StyledNavLink active={router.pathname.includes('/game')}>
            <Link href="/game">Game</Link>
          </StyledNavLink>
          <StyledNavLink active={router.pathname.includes('/governance')}>
            <Link href="/governance">Governance</Link>
          </StyledNavLink>

          {isConnected ? (
            <ConnectedWalletAddress openModal={openModal} />
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
