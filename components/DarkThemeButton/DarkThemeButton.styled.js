import styled from 'styled-components';

export const StyledDarkThemeButtonContainer = styled.div`
  position: relative;
  display: flex;
  width: 69px;
  height: 40px;
  background-color: #000;
  border-radius: 28px;
  padding: 7px 6px;
`;

export const StyledSwitcher = styled.div`
  position: absolute;
  background-color: white;
  height: 25px;
  width: 25px;
  ${({ isDark }) => (isDark ? 'left: 6px;' : 'right: 6px;')}
  border-radius: 50%;
  align-self: center;
`;
