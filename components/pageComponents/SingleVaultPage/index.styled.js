import styled from 'styled-components';

export const StyledSingleVaultPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  padding: 0 24px;
  position:relative;
  width: 100%;


  &:hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #000;
    margin: 1em 0;
    padding: 0;
}
`;


export const StyledSingleVaultPart = styled.div`
  width: 100%;
  max-width:700px;
  display: flex;
  flex-direction: column;
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
  width: 95%;
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
