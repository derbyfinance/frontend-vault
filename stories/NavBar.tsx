import MainButton from '@components/Common/MainButton/MainButton';
import ConnectedWalletAddress from '@components/Layout/NavBar/ConnectedWalletAddress/ConnectedWalletAddress';
import Link from 'next/link';
import Logo from '../public/icons/Logo';
import {
  StyledNavBarContent,
  StyledNavBarWrapper,
  StyledNavLink,
  StyledNavLinks,
} from './NavBar.styled';

const NavBar = ({ isConnected }) => {
  return (
    <StyledNavBarWrapper>
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
            <ConnectedWalletAddress openModal={() => false} />
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