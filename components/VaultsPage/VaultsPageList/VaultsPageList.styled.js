import styled, { css } from 'styled-components';

export const StyledCoinsListContainer = styled.div``;

export const StyledCoinsListHeader = styled.h2`
  color: #fe5e76;
  margin-bottom: 30px;
`;

export const StyledCoinsListTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const StyledCoinsList = styled.div`
  width: 100%;
`;

export const StyledCoinsListTh = styled.th`
  text-align: left;
  font-size: 16px;
  color: #a9a6ae;
`;

export const StyledCoinsListTD = styled.td`
  font-family: Roboto-Regular;
  font-size: 18px;
  vertical-align: middle;
  padding: 12px;
  & div {
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: Slab-Medium;
    font-size: 26px;
    & span {
      font-family: Roboto-Medium;
      font-size: 14px;
      color: #a9a6ae;
    }
  }
`;

export const StyledCoinsListItemTr = styled.tr`
  vertical-align: middle;
  border-collapse: collapse;
  border-bottom: 1px solid #e2e2e2;
`;

export const StyledTitleTd = styled.td``;
