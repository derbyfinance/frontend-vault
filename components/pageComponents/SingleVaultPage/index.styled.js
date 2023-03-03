import styled from 'styled-components';

export const StyledSingleVaultPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  padding: 0 32px;
  width: 100%;
  @media only screen and (max-width: 1130px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`;

export const StyledSingleVaultPart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1130px) {
    justify-content: center;
  // align-items: center;
  }
  @media only screen and (max-width: 1060px) {
    align-items: center;
  }
`;

export const StyledVaultInformation = styled.div`
  font: ${({ theme }) => theme.fonts.slabRegular};
  font-size: 26px;
  color: ${({ theme }) => theme.colors.vaultTitle};
`;

export const StyledHeaderText = styled.div`
  font: ${({ theme }) => theme.fonts.robotoMedium};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textFaded};
  margin-bottom: 30px;
`;

export const StyledPerformanceChart = styled.div`
  width: 99%;
`;

export const StyledChartTitleOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const StyledChartTitle = styled.div`
  font: ${({ theme }) => theme.fonts.slabRegular};
  font-size: 22px;
`;

export const StyledChartOptions = styled.ul`
  display: flex;
  font: ${({ theme }) => theme.fonts.slabMedium};
  font-size: 20px;

`;

export const StyledChartOption = styled.li`
  cursor: pointer;
  border-bottom: ${({ active, theme }) =>
    active ? `4px solid ${theme.colors.borderTertiary}` : 'none'};
  padding: 10px 20px;
`;

export const StyledKeyStatistics = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 64px;
`;
