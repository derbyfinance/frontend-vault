import React from 'react';
import { numberPrettier } from '@helpers/helperFunctions';
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
  onKeyDown,
}) => {
  return (
    <StyledInputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        placeholder={placeholder}
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
      />
      {endAddOn}
    </StyledInputContainer>
  );
};

export default DepositWithdrawInput;
