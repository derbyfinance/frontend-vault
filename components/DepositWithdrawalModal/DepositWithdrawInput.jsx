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
  type,
}) => {
  return (
    <StyledInputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {endAddOn}
    </StyledInputContainer>
  );
};

export default DepositWithdrawInput;
