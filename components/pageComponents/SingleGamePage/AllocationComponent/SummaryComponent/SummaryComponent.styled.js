import styled from 'styled-components';

export const SummaryComponentWrapper = styled.div`
  width: 100%;
  padding: 30px 0;
  border-top: 1px solid #e2e2e2;
`;

export const StyleItemContainer = styled.div`
  width: 100%;
  height: 80px;
  background: rgba(39, 117, 201, 0.13);
  border: 1px solid #d9e7f5;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  margin: 10px 0 20px 0;
`;

export const StyleItemTools = styled.div`
  display: flex;
`;

export const StyleItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyleIconsContainer = styled.div`
  position: relative;
`;

export const StyleIcon = styled.div`
  position: absolute;
  top: 15px;
  left: 18px;
  width: 24px;
`;

export const StyleToolIcon = styled.div`
  margin: 0 0 0 10px;
  cursor: pointer;
`;

export const StyleItemName = styled.div`
  margin: 0 0 0 30px;
  display: flex;
  & div {
    font-family: 'Slab-Medium';
    font-size: 20px;
    line-height: 24px;
    display: flex;
    color: #160344;
  }
  & span {
    margin: 5px 0 0 10px;
    font-family: 'Slab-Regular';
    font-size: 16px;
    line-height: 18px;
    display: flex;
    color: #2775c9;
  }
`;

export const StyleItemPrice = styled.div`
  font-family: 'Roboto-Medium';
  margin: 0 20px 0 10px;
  display: flex;
  & div {
    font-size: 18px;
    line-height: 24px;
    display: flex;
    color: #160344;
  }
  & span {
    margin: 5px 0 0 5px;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    color: #2775c9;
  }
`;

export const StyledBuyButton = styled.button`
  background: ${({ theme }) => theme.colors.gradientMain};
  color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  font-family: 'Slab-Medium';
  border: none;
  outline: none;
  float: right;
`;