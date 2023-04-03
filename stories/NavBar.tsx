import { useState } from 'react';
import MainButton from '@components/Common/MainButton/MainButton';
import ConnectedWalletAddress from '@components/Layout/NavBar/ConnectedWalletAddress/ConnectedWalletAddress';
import WalletAddressButton from '@components/Layout/NavBar/ConnectedWalletAddress/WalletAddressButton/WalletAddressButton';
import Link from 'next/link';
import Logo from '../public/icons/Logo';
import ConnectWalletModal from './ConnectWalletModal';
import {
  StyledNavBarContent,
  StyledNavBarWrapper,
  StyledNavLink,
  StyledNavLinks,
} from './NavBar.styled';

const NavBar = ({ isConnected, open }) => {
  return (
    <StyledNavBarWrapper>
      <ConnectWalletModal
        walletDetected={false}
        isOpen={open}
        onClose={() => false}
      />
      <StyledNavBarContent>
        <a>
          <Logo />
        </a>
        <StyledNavLinks>
          <StyledNavLink active={false}>
            <Link href="/vaults">Vault</Link>
          </StyledNavLink>
          <StyledNavLink active={true}>
            <Link href="/game">Game</Link>
          </StyledNavLink>
          <StyledNavLink active={false}>
            <Link href="/governance">Governance</Link>
          </StyledNavLink>

          {isConnected ? (
            <WalletAddressButton address={'6289491Xukhwvewb'} open={false} />
          ) : (
            <StyledNavLink>
              <MainButton onClick={false} btnText="Connect Your Wallet" />
            </StyledNavLink>
          )}
        </StyledNavLinks>
      </StyledNavBarContent>
    </StyledNavBarWrapper>
  );
};

export default NavBar;
