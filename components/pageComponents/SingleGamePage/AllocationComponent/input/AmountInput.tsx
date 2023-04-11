import { numberPrettier } from '@helpers/helperFunctions';
import React from 'react';
import {
  StyledInput,
  StyledInputContainer,
} from './AmountInput.styled';

const AmountInput = ({
  endAddOn,
  placeholder,
  value,
  onChange,
  onKeyDown
}) => {
  return (
    <StyledInputContainer>
      <StyledInput
        placeholder={placeholder}
        value={numberPrettier(value)}
        onKeyDown={onKeyDown}
        onChange={onChange}
      />
      {endAddOn}
    </StyledInputContainer>
  );
};

export default AmountInput;
