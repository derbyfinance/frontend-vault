import styled from 'styled-components';

export const StyledNavBarWrapper = styled.nav`
  position: sticky;
  width: 100%;
  top: 0;
  background: ${(props) => props.theme.backgroundMain};
  padding: 64px 0 40px;
  z-index: 10;
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
  font-weight: ${({ active }) => (active ? 600 : 300)};
  font-family: ${({ active }) => (active ? 'Slab-Medium' : 'Slab-Light')};
  & a {
    text-decoration: none;
    font-family: Slab-Light;
    color: ${(props) => props.theme.textMain};
    padding: 10px 12px;
    border-bottom: ${({ active, theme }) =>
      active ? `${theme.borderTertiary} solid 3px` : 'none'};
  }
`;

export const StyledConnectDisclaimer = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.textPrimary};
  margin-top: 54px;
  & a {
    background: linear-gradient(90deg, #fe5e76 50%, #f13abc 90.54%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-left: 4px;
  }
`;
