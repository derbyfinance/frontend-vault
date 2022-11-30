import { ArrowRight } from '@icons/index';
import React from 'react';
import {
  StyledConnectLeftContainer,
  StyledConnectVia,
} from './StyledConnectVia.styled';

const ConnectVia = ({ svg, walletName, clickHandler }) => {
  return (
    <StyledConnectVia onClick={clickHandler}>
      <StyledConnectLeftContainer>
        {svg}
        <span>{walletName}</span>
      </StyledConnectLeftContainer>
      <ArrowRight />
    </StyledConnectVia>
  );
};

export default ConnectVia;
