import moon from '@icons/moon.svg';
import sun from '@icons/sun.svg';
import Image from 'next/image';
import {
  StyledDarkThemeButtonContainer,
  StyledRowIconMoon,
  StyledRowIconSun,
  StyledSwitcher,
} from './DarkThemeButton.styled';

const DarkThemeButton = ({ toggleTheme, isDark } : { toggleTheme : Function, isDark : boolean }) => {
  return (
    <StyledDarkThemeButtonContainer onClick={toggleTheme} isDark={isDark}>
      {isDark ? (
        <StyledRowIconSun>
          <Image src={sun} />
        </StyledRowIconSun>
      ) : null}
      <StyledSwitcher isDark={isDark} />
      {!isDark ? (
        <StyledRowIconMoon>
          <Image src={moon} />
        </StyledRowIconMoon>
      ) : null}
    </StyledDarkThemeButtonContainer>
  );
};

export default DarkThemeButton;
