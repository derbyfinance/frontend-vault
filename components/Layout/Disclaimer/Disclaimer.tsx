import { FC } from 'react';
import {
  StyledButton,
  StyledButtonOutlined,
  StyledTextNone,
  StyledTextWrapper,
} from './Disclaimer.styled';

const Disclaimer: FC = () => {
  return (
    <StyledTextNone>
      <StyledTextWrapper>
        The vaults of Derby Finance are currently only accessible from larger
        screens. Join our discord for future updates
      </StyledTextWrapper>
      <a href="https://discord.gg/DyxRxs9mQ6" target="_blank" rel="noreferrer">
        <StyledButton>Join Discord</StyledButton>
      </a>
      <a href="https://derby.finance" target="_blank" rel="noreferrer">
        <StyledButtonOutlined onClick={null}>Back to home</StyledButtonOutlined>
      </a>
    </StyledTextNone>
  );
};

export default Disclaimer;
