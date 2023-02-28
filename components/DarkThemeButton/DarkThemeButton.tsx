import moon from '@icons/moon.svg';
import sun from '@icons/sun.svg';
import Image from 'next/image';
import {
  StyledDarkThemeButtonContainer,
  StyledRowIcon,
  StyledRowIconLeft,
  StyledSwitcher,
} from './DarkThemeButton.styled';

const DarkThemeButton = ({ toggleTheme, isDark } : { toggleTheme : Function, isDark : boolean }) => {
  return (
    <StyledDarkThemeButtonContainer onClick={toggleTheme} isDark={isDark}>
      {isDark ? (
        <StyledRowIconLeft>
          <Image src={sun} />
        </StyledRowIconLeft>
      ) : null}
      <StyledSwitcher isDark={isDark} />
      {!isDark ? (
        <StyledRowIcon>
          <Image src={moon} />
        </StyledRowIcon>
      ) : null}
    </StyledDarkThemeButtonContainer>
  );
};

export default DarkThemeButton;
