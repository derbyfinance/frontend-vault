import Link from 'next/link';
import React from 'react';
import { DiscordIcon, GithubIcon, TwitterIcon } from '../../public/svgs/SVG';
import {
  StyledFooterLink,
  StyledFooterLinks,
  StyledFooterWrapper,
} from './Footer.styled';

const Footer = ({ isDark }) => {
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
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon isDark={isDark} />
          </a>
        </StyledFooterLink>
        <StyledFooterLink>
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiscordIcon isDark={isDark} />
          </a>
        </StyledFooterLink>
        <StyledFooterLink>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon isDark={isDark} />
          </a>
        </StyledFooterLink>
      </StyledFooterLinks>
    </StyledFooterWrapper>
  );
};

export default Footer;
