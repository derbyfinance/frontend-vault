import styled from 'styled-components';

export const StyledNavBarWrapper = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background: ${(props) => props.theme.background};
  padding: 64px 0 40px;
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
  & a {
    text-decoration: none;
    color: #000;
  }
`;
