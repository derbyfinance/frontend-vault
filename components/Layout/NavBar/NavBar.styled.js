import styled from 'styled-components';

export const StyledNavBarWrapper = styled.nav`
  width: 100%;
  top: 0;
  background: ${({ theme }) => theme.colors.backgroundMain};
  padding: 30px 30px 40px;
  z-index: 20;
  font-size: 15px;
`;

export const StyledNavBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledNavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const StyledNavLink = styled.li`
  font-family: ${({ active }) => (active ? 'Slab-Medium' : 'Slab-Light')};
  font-size: 16px;
  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textMain};
    padding: 10px 12px;
    border-bottom: ${({ active, theme }) =>
      active ? `${theme.colors.borderTertiary} solid 3px` : 'none'};
      @media only screen and (max-width: 860px) {
        padding: 10px 6px;
      }
  }
`;

export const StyledConnectDisclaimer = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-top: 54px;
  & a {
    background: ${({ theme }) => theme.colors.gradientTwo};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-left: 4px;
  }
`;
