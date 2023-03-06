import { FC } from 'react';
import Discord from '@icons/Discord';
import {
  StyledButton,
  StyledTextNone,
  StyledTextWrapper,
} from '../Layout.styled';

const Disclaimer: FC = () => {
  return (
    <StyledTextNone>
      <StyledTextWrapper>
        {' '}
        The Derby Finance application is currently only optimized for larger
        screens (desktop, laptop, tablet). Apologies for the inconvenience{' '}
      </StyledTextWrapper>
      <a href="https://discord.gg/DyxRxs9mQ6" target="_blank" rel="noreferrer">
        <StyledButton onClick={null}>
          <Discord isDark={true} />
          Join Discord
        </StyledButton>
      </a>
      <StyledButton onClick={null}>Back to website</StyledButton>
    </StyledTextNone>
  );
};

export default Disclaimer;
