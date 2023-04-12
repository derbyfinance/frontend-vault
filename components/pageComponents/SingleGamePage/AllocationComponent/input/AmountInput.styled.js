import styled from 'styled-components';

export const StyledInputContainer = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.borderMain};
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 6px;
  border-radius: 6px;
  background-color: #fff;
  width: 581px;
  margin: 15px 0 0 0;
`;

export const StyledInput = styled.input`
  height: 40px;
  width: 500px;
  border: none;
  font: ${({ theme }) => theme.fonts.robotoLight};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textFaded};
  background-color: #fff;
`;
