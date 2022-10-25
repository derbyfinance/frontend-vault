import styled from 'styled-components';

export const StyledNavBarWrapper = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background: ${(props) => props.theme.background};
  padding: 64px 0 40px;
  z-index: 100;
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
    color: ${(props) => props.theme.color};
  }
`;

export const StyledNavLink = styled.li`
  font-weight: ${({ active }) => (active ? 600 : 300)};
`;
