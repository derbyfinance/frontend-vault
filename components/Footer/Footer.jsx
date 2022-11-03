import { Discord, Github, MediumFooter, Twitter } from '@icons/index';
import Link from 'next/link';
import React from 'react';
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
            href="https://twitter.com/derby_finance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter isDark={isDark} />
          </a>
        </StyledFooterLink>
        <StyledFooterLink>
          <a
            href="https://discord.gg/DyxRxs9mQ6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Discord isDark={isDark} />
          </a>
        </StyledFooterLink>
        <StyledFooterLink>
          <a
            href="https://derby-finance.gitbook.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github isDark={isDark} />
          </a>
        </StyledFooterLink>
        <StyledFooterLink>
          <a
            href="https://medium.com/derbyfinance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MediumFooter isDark={isDark} />
          </a>
        </StyledFooterLink>
      </StyledFooterLinks>
    </StyledFooterWrapper>
  );
};

export default Footer;
