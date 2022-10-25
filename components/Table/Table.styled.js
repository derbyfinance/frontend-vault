import styled from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const StyledColumnHeader = styled.th`
  text-align: left;
  font-size: 16px;
  color: #a9a6ae;
`;

export const StyledRowItem = styled.tr`
  vertical-align: middle;
  border-collapse: collapse;
  border-bottom: 1px solid #e2e2e2;
`;

export const StyledRowCell = styled.td`
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
