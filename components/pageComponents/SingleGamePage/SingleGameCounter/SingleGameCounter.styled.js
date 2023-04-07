import styled from 'styled-components';

export const CounterWrapper = styled.div`
  width: 800px;
  height: 200px;
  color: ${({ theme }) => theme.colors.textSecondary};
  background: #2775c9;
  border-radius: 6px;
  border: ${({ theme }) => theme.colors.borderMain} 1px solid;
  padding: 28px 35px;
  display: flex;
  justify-content: space-between;
  margin: 0 0 60px 0;
`;

export const StyleCountdownCircle = styled.div`
  display: flex;
  align-items: center;
`;

export const StyleInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;

export const StyleInfoItems = styled.div`
  display: flex;
`;

export const StyleInfoItem = styled.div`
  margin: 0 10px;
  display: flex;
  align-items: start;
`;
export const StyleInfoItemText = styled.div`
  margin: 0 0 0 5px;
  font-size: 24px;
  line-height: 28px;
`;
export const StyleInfoItemTextDesc = styled.div`
  font-size: 10px;
  line-height: 12px;
`;

export const StyleTimer = styled.div`
  margin: 0 0 0 20px;
  flex-direction: column;
  & div {
    font-size: 28px;
    line-height: 33px;
  }
`;

export const StyleTimerText = styled.div`
  font-family: 'Slab-Medium';

  font-size: 24px;
  line-height: 32px;
`;
