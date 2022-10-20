import styled from 'styled-components';

export const StyledFooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px 0;
`;

export const StyledFooterLinks = styled.ul`
  display: flex;
  gap: 30px;
  & a {
    text-decoration: none;
    color: ${props => props.theme.color}
  }
`;

export const StyledFooterLink = styled.li``;
