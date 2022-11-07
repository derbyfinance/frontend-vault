import styled from 'styled-components';

export const StyledSingleVaultPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const StyledSingleVaultPart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 38px;
`;

export const StyledHeaderText = styled.p`
  font-family: 'Roboto-Medium';
  font-size: 20px;
  color: ${({ theme }) => theme.textFaded};
`;
