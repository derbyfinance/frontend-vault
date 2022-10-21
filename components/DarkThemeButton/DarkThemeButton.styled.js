import styled from 'styled-components';

export const StyledDarkThemeButtonContainer = styled.div`
  position: relative;
  display: flex;
  width: 49px;
  height: 25px;
  background-color: ${({isDark}) => isDark ? '#000' : '#fff'};
  border-radius: 28px;
  padding: 7px 6px;
  border: 1px solid ${({isDark}) => isDark ? '#fff;' : '#000;'}
`;

export const StyledSwitcher = styled.div`
  position: absolute;
  background-color: ${({isDark}) => isDark ? '#fff' : '#000'};
  height: 17px;
  width: 17px;
  ${({ isDark }) => (isDark ? 'right: 6px;' : 'left: 6px;')}
  border-radius: 50%;
  align-self: center;
`;
