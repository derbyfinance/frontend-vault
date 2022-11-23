import React from 'react';
import {
  StyledBalance,
  StyledFlex,
  StyledFlexIcon,
  StyledMax,
  StyledRightWrapper,
} from './DepositWithdrawInputAdornment.styled';

const DepositWithdrawInputAdornment = ({
  coinIcon,
  coinName,
  balance,
  isMax,
}) => {
  isMax = true;
  return (
    <StyledRightWrapper>
      <StyledFlex>
        <StyledMax>{isMax ? 'MAX' : null}</StyledMax>
        <div>
          <StyledFlexIcon>
            <div>{coinIcon}</div>
            <div>{coinName}</div>
          </StyledFlexIcon>
          <StyledBalance>Balance: {balance}</StyledBalance>
        </div>
      </StyledFlex>
    </StyledRightWrapper>
  );
};

export default DepositWithdrawInputAdornment;
