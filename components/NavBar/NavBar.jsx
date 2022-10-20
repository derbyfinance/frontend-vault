import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DarkThemeButton from '../DarkThemeButton/DarkThemeButton';
import MainButton from '../MainButton/MainButton';
import {
  StyledNavBarContent,
  StyledNavBarWrapper,
  StyledNavLink,
  StyledNavLinks,
} from './NavBar.styled';

const NavBar = ({setTheme, isDark}) => {
  const router = useRouter();
  return (
    <StyledNavBarWrapper>
      <StyledNavBarContent>
        <Image
          src="/images/Logo1.svg"
          alt=""
          width="205"
          height="63"
          layout="fixed"
        />
        <StyledNavLinks isDark={isDark}>
          <StyledNavLink>
            <DarkThemeButton setTheme={setTheme} isDark={isDark}/>
          </StyledNavLink>
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
            <MainButton btnText="Connect Your Wallet" />
          </StyledNavLink>
        </StyledNavLinks>
      </StyledNavBarContent>
    </StyledNavBarWrapper>
  );
};

export default NavBar;
