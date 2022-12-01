import styled from 'styled-components';

export const StyledInputContainer = styled.div`
  display: flex;
  border: 2px solid ${({ theme }) => theme.colors.borderMain};
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 6px;
  border-radius: 4px;
`;

export const StyledLabel = styled.div`
  position: absolute;
  left: 4px;
  top: -8px;
  background-color: ${({ theme }) => theme.colors.backgroundMain};
  padding: 0 4px;
  font: ${({ theme }) => theme.fonts.robotoMedium};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textFaded};
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  font: ${({ theme }) => theme.fonts.robotoLight};
  font-size: 24px;
`;
