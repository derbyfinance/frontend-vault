import React from 'react';
import {
  StyledInput,
  StyledInputContainer,
  StyledLabel,
} from './DepositWithdrawInput.styled';

const DepositWithdrawInput = ({ right, label, placeholder }) => {
  return (
    <StyledInputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput type="number" placeholder={placeholder} />
      {right}
    </StyledInputContainer>
  );
};

export default DepositWithdrawInput;
