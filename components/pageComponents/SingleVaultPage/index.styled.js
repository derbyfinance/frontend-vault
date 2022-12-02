import styled, { ThemeConsumer } from 'styled-components';

export const StyledSingleVaultPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 19px;
`;

export const StyledSingleVaultPart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 38px;
`;

export const StyledHeaderText = styled.div`
  font: ${({theme}) => theme.fonts.robotoMedium};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textFaded};
`;

export const StyledHeaderVaultInfo = styled.h2`
  font: ${({theme}) => theme.fonts.slabMedium};
  font-size: 26px;
  color: #5F08EE;
`