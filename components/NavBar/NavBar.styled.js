import styled from 'styled-components';

export const StyledNavBarWrapper = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
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
  & a {
    text-decoration: none;
    color: ${(props) => props.theme.textMain};
  }
`;

export const StyledNavLink = styled.li`
  font-weight: ${({ active }) => (active ? 600 : 300)};
`;

export const StyledConnectDisclaimer = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.textPrimary};
  margin: 0;
  & a {
    background: linear-gradient(90deg, #fe5e76 50%, #f13abc 90.54%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;
