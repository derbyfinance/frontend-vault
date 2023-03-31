import React from 'react';
import Link from 'next/link';
import Discord from '../public/icons/Discord';
import Github from '../public/icons/Github';
import MediumFooter from '../public/icons/MediumFooter';
import Twitter from '../public/icons/Twitter';
import {
  StyledFooterLink,
  StyledFooterLinks,
  StyledFooterWrapper,
} from './Footer.styled';

interface SocialLinksInterface {
  name: string;
  icon: JSX.Element;
  link: string;
}

const Footer = ({ isDark }) => {
  const socialLinks: SocialLinksInterface[] = [
    {
      name: 'Twitter',
      icon: <Twitter isDark={isDark} />,
      link: 'https://twitter.com/derby_finance',
    },
    {
      name: 'Discord',
      icon: <Discord isDark={isDark} />,
      link: 'https://discord.gg/DyxRxs9mQ6',
    },
    {
      name: 'Github',
      icon: <Github isDark={isDark} />,
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
