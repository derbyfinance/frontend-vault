import styled from 'styled-components';

export const StyledDarkThemeButtonContainer = styled.div`
  position: relative;
  display: flex;
  width: 69px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.backgroundMainForToggle};
  border-radius: 28px;
  padding: 7px 6px;
  border: 1px solid ${({ theme }) => theme.colors.textMain};
`;

export const StyledSwitcher = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.backgroundMain};
  height: 25px;
  width: 25px;
  ${({ isDark }) => (isDark ? 'right: 6px;' : 'left: 6px;')}
  border-radius: 50%;
  align-self: center;
`;

export const StyledRowIcon = styled.div`
  left: 35px;
  position: relative;
  height: 24px;
  width: 24px;
`;

export const StyledRowIconLeft = styled.div`
  left: 3px;
  position: relative;
  height: 24px;
  width: 24px;
`;
