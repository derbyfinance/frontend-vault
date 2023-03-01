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

  @media only screen and (max-width: 1010px) {
    width: 50px;
    height: 30px;
  }
`;

export const StyledSwitcher = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.backgroundMain};
  height: 25px;
  width: 25px;
  ${({ isDark }) => (isDark ? 'right: 6px;' : 'left: 6px;')}
  border-radius: 50%;
  align-self: center;

  @media only screen and (max-width: 1010px) {
    height: 18px;
    width: 18px;
  }
`;

export const StyledRowIconMoon = styled.div`
  left: 35px;
  position: relative;
  height: 24px;
  width: 24px;

  @media only screen and (max-width: 1010px) {
    bottom: 1px;
    left: 24px;
    width: 14px;
  }
`;

export const StyledRowIconSun = styled.div`
  left: 3px;
  position: relative;
  height: 24px;
  width: 24px;

  @media only screen and (max-width: 1010px) {
    left: 0px;
    width: 14px;
  }
`;
