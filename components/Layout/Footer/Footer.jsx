import { Discord, Github, MediumFooter, Twitter } from '@icons/index';
import Link from 'next/link';
import React from 'react';
import {
  StyledFooterLink,
  StyledFooterLinks,
  StyledFooterWrapper,
} from './Footer.styled';

const Footer = ({ isDark }) => {
  const socialLinks = [
    {
      name: 'Twitter',
      icon: <Twitter />,
      link: 'https://twitter.com/derby_finance',
    },
    {
      name: 'Discord',
      icon: <Discord />,
      link: 'https://discord.gg/DyxRxs9mQ6',
    },
    {
      name: 'Github',
      icon: <Github />,
      link: 'https://derby-finance.gitbook.io/',
    },
    {
      name: 'Medium',
      icon: <MediumFooter />,
      link: 'https://medium.com/derbyfinance',
    },
  ];
  {
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
          {socialLinks.map(({ icon, link, name }) => (
            <StyledFooterLink key={name}>
              <a href={link} target="_blank" rel="noreferrer">
                {icon}
              </a>
            </StyledFooterLink>
          ))}
        </StyledFooterLinks>
      </StyledFooterWrapper>
    );
  }
};

export default Footer;
