import styled from 'styled-components';

export const StyledFooterWrapper = styled.footer`
  margin: 100px 0 0 0;
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 40px 30px 15px;
`;

export const StyledFooterLinks = styled.ul`
  display: flex;
  gap: 30px;
  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textMain};
  }
`;

export const StyledFooterLink = styled.li`
  font-family: 'Roboto-Regular';
`;
