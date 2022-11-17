import React from 'react';
import {
  StyledBalance,
  StyledCoinName,
  StyledFlex,
  StyledFlexIcon,
  StyledIcon,
  StyledMax,
  StyledRightWrapper,
} from './DepositWithdrawRight.styled';

const DepositWithdrawRight = ({ coinIcon, coinName, balance, isMax }) => {
  // isMax = true;
  return (
    <StyledRightWrapper>
      <StyledFlex>
        <StyledMax>{isMax ? 'MAX' : null}</StyledMax>
        <div>
          <StyledFlexIcon>
            <StyledIcon>{coinIcon}</StyledIcon>
            <StyledCoinName>{coinName}</StyledCoinName>
          </StyledFlexIcon>
          <StyledBalance>Balance: {balance}</StyledBalance>
        </div>
      </StyledFlex>
    </StyledRightWrapper>
  );
};

export default DepositWithdrawRight;
