import React from 'react';
import {
  StyledInput,
  StyledInputContainer,
  StyledLabel,
} from './DepositWithdrawInput.styled';

const DepositWithdrawInput = ({ endAddOn, label, placeholder }) => {
  return (
    <StyledInputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput type="number" placeholder={placeholder} />
      {endAddOn}
    </StyledInputContainer>
  );
};

export default DepositWithdrawInput;
