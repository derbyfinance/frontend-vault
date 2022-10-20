import styled from 'styled-components';

export const StyledFooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  min-width: 100%;
`;

export const StyledFooterLinks = styled.ul`
  display: flex;
  gap: 30px;
`;

export const StyledFooterLink = styled.li`
  & a {
    text-decoration: none;
    color: #000000;
  }
`;
