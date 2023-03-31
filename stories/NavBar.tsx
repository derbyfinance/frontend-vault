import { useState } from 'react';
import MainButton from '@components/Common/MainButton/MainButton';
import { StyledAddressWrapper } from '@components/Layout/NavBar/ConnectedWalletAddress/ConnectedWalletAddress.styled';
import WalletAddressButton from '@components/Layout/NavBar/ConnectedWalletAddress/WalletAddressButton/WalletAddressButton';
import {
  StyledArrowContainer,
  StyledWalletAddressBtn,
} from '@components/Layout/NavBar/ConnectedWalletAddress/WalletAddressButton/WalletAddressButton.styled';
import ArrowDownComponent from '@components/UI/ArrowDownComponent';
import { hideMiddleCharacters } from '@helpers/helperFunctions';
import Image from 'next/image';
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
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => setIsOpen(false);

  return (
    <StyledNavBarWrapper>
      <ConnectWalletModal isOpen={open} onClose={closeModal} />
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
            <StyledWalletAddressBtn>
              <Image
                src="/stories/assets/MetamaskAvatar.svg"
                alt=""
                width={32}
                height={32}
              />
              <StyledAddressWrapper>
                {hideMiddleCharacters('w231241241241eewgweg332r2')}
              </StyledAddressWrapper>
              <StyledArrowContainer open={open}>
                <ArrowDownComponent open={open} />
              </StyledArrowContainer>
            </StyledWalletAddressBtn>
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
