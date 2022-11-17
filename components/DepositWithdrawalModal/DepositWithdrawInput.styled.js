import styled from 'styled-components';

export const StyledInputContainer = styled.div`
  display: flex;
  border: 2px solid ${({ theme }) => theme.colors.borderMain};
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 6px 6px;
  border-radius: 4px;
`;

export const StyledLabel = styled.div`
  position: absolute;
  left: 4px;
  top: -8px;
  background-color: ${({ theme }) => theme.colors.backgroundMain};
  padding: 0 4px;
  font: ${({ theme }) => theme.font.robotoMedium};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textFaded};
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  font: ${({ theme }) => theme.font.robotoLight};
  font-size: 24px;
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;
