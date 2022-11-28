import React from 'react';
import {
  StyledInput,
  StyledInputContainer,
  StyledLabel,
} from './DepositWithdrawInput.styled';

const DepositWithdrawInput = ({
  endAddOn,
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <StyledInputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {endAddOn}
    </StyledInputContainer>
  );
};

export default DepositWithdrawInput;
