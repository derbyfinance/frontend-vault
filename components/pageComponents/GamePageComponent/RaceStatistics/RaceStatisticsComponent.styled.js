import styled from 'styled-components';

export const StyleRaceStatistics = styled.div`
  width: 425px;
  height: 760px;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  margin: 0 0 0 30px;
`;
export const StyleYourRace = styled.div`
  padding: 15px 22px;
`;

export const StyleYourWallet = styled.div`
  padding: 15px 22px;
`;

export const StyledRaceStatisticsHeader = styled.div`
  color: ${({ theme }) => theme.colors.headerMain};
  font: ${({ theme }) => theme.fonts.slabMedium};
  font-size: 18px;
  line-height: 23px;
`;

export const StyledRaceWalletHeader = styled.div`
  color: #5f08ee;
  font: ${({ theme }) => theme.fonts.slabMedium};
  font-size: 18px;
  line-height: 23px;
  margin: 20px 0 0 0;
`;

export const StyledRaceStatisticsSub = styled.div`
  color: #a9a6ae;
  font-family: 'Roboto-Medium';
  font-size: 16px;
  line-height: 23px;
  margin: 5px 0 40px 0;
`;
export const StyledRaceStatisticsRow = styled.div`
  color: #160344;
  display: flex;
  justify-content: space-between;
  align-items: start;
  font-size: 16px;
  line-height: 23px;
  margin: 20px 0 0 0;
  padding: 0 0 15px 0;
  border-bottom: 1px solid ${({ border }) => (border ? '#e2e2e2' : '#fff')};
`;

export const StyledRaceStatisticsText = styled.div`
  color: #160344;
  font-size: 16px;
  display: flex;
  align-items: start;
  & div {
    font-size: 14px;
    color: #a9a6ae;
    margin: 2px 0 0 5px;
  }
  & span {
    font-family: 'Slab-Regular';
    margin: 0 0 0 7px;
  }
`;
export const StyledRaceStatisticsPerformanceText = styled.div`
  color: #160344;
  font-size: 16px;
  display: flex;
  align-items: center;
  & div {
    font-size: 14px;
    color: #a9a6ae;
    margin: 2px 0 0 5px;
  }
  & span {
    color: #26a17b;
  }
`;

export const StyledChangeLabel = styled.div`
  display: flex;
  color: #fff;
  padding: 2px 6px;
  gap: 4px;
  background-color: ${({ positive }) => (positive ? '#26A17B' : 'red')};
  border-radius: 6px;
  & div {
    font-size: 16px;
    line-height: 19px;
    color: #fff;
  }
`;

export const StyledMedalsRow = styled.div`
  display: flex;
  margin: 25px 0 0 0;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderMain};
  padding: 0 22px 22px;
`;
export const StyledMedalsRowTextContainer = styled.div`
  margin: 0 0 0 5px;
  opacity: ${({ disable }) => (disable ? '.3' : '1')};
  & div {
    font-size: 32px;
    & span {
      color: #160344;
      font-size: 16px;
    }
  }
  & span {
    color: #a9a6ae;
    font-size: 16px;
  }
`;
export const StyledMedalItem = styled.div`
  display: flex;
`;

export const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.gradientMain};
  color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: 8px;
  padding: 12px 20px;
  font: 'Slab-Medium';
  font-size: 16px;
  cursor: pointer;
  font-family: 'Roboto-Bold';
  border: none;
  outline: none;
  min-width: 208px;
  margin: 0px 0 0 175px;
`;
