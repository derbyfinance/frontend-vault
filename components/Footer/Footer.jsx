import Link from 'next/link';
import React from 'react';
import { DiscordIcon, GithubIcon, TwitterIcon } from '../../public/svgs/SVG';
import {
  StyledFooterLink,
  StyledFooterLinks,
  StyledFooterWrapper,
} from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooterWrapper>
      <StyledFooterLinks>
        <StyledFooterLink>
          <Link href="/first">First URL</Link>
        </StyledFooterLink>
        <StyledFooterLink>
          <Link href="/second">Second URL</Link>
        </StyledFooterLink>
        <StyledFooterLink>
          <Link href="/third">Third URL</Link>
        </StyledFooterLink>
      </StyledFooterLinks>
      <StyledFooterLinks>
        <StyledFooterLink>
          <Link href="#">
            <TwitterIcon />
          </Link>
        </StyledFooterLink>
        <StyledFooterLink>
          <Link href="#">
            <a>
              <DiscordIcon />
            </a>
          </Link>
        </StyledFooterLink>
        <StyledFooterLink>
          <Link href="#">
            <GithubIcon />
          </Link>
        </StyledFooterLink>
      </StyledFooterLinks>
    </StyledFooterWrapper>
  );
};

export default Footer;
