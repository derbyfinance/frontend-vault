import styled from 'styled-components';

export const StyledSingleVaultPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`;

export const StyledSingleVaultPart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledVaultInformation = styled.div`
  font: ${({ theme }) => theme.fonts.slabRegular};
  font-size: 26px;
  color: ${({ theme }) => theme.colors.vaultTitle};
`

export const StyledHeaderText = styled.div`
  font: ${({ theme }) => theme.fonts.robotoRegular};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textFaded};
  margin-bottom: 60px;

`;
