import styled from 'styled-components';

export const StyledFooterWrapper = styled.footer`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 40px 0 15px;
`;

export const StyledFooterLinks = styled.ul`
  display: flex;
  gap: 30px;
  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textMain};
  }
`;

export const StyledFooterLink = styled.li``;
