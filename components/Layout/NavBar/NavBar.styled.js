import styled from 'styled-components';

export const StyledNavBarWrapper = styled.nav`
  position: sticky;
  width: 100%;
  top: 0;
  background: ${({ theme }) => theme.colors.backgroundMain};
  padding: 64px 0 40px;
  z-index: 20;
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
  font-family: ${({ active }) => (active ? 'Roboto-Bold' : 'Roboto-Regular')};
  font-size: 20px;
  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textMain};
    padding: 10px 12px;
    border-bottom: ${({ active, theme }) =>
      active ? `${theme.colors.borderTertiary} solid 3px` : 'none'};
  }
  font-weight:${({ active }) => (active ? '700' : '400')};

`;

export const DivMarginLeft = styled.div`
  margin-left: 20px;
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
