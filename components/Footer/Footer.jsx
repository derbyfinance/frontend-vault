import Link from 'next/link';
import React from 'react';
import { DiscordIcon, GithubIcon, TwitterIcon } from '../../public/svgs/SVG';
import {
  StyledFooterLink,
  StyledFooterLinks,
  StyledFooterWrapper,
} from './Footer.styled';

const Footer = ({isDark}) => {
  return (
    <StyledFooterWrapper>
      <StyledFooterLinks>
        <StyledFooterLink>
          <Link href="/first">Privacy policy</Link>
        </StyledFooterLink>
        <StyledFooterLink>
          <Link href="/second">User agreement</Link>
        </StyledFooterLink>
        <StyledFooterLink>
          <Link href="/third">Terms of use</Link>
        </StyledFooterLink>
      </StyledFooterLinks>
      <StyledFooterLinks>
        <StyledFooterLink>
          <Link href="#">
            <TwitterIcon isDark={isDark}/>
          </Link>
        </StyledFooterLink>
        <StyledFooterLink>
          <Link href="#">
              <DiscordIcon isDark={isDark}/>
          </Link>
        </StyledFooterLink>
        <StyledFooterLink>
          <Link href="#">
            <GithubIcon isDark={isDark}/>
          </Link>
        </StyledFooterLink>
      </StyledFooterLinks>
    </StyledFooterWrapper>
  );
};

export default Footer;
