import styled from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const StyledColumnHeader = styled.th`
  text-align: left;
  font-size: 16px;
  font-family: Roboto-Medium;
  font-weight: 500;
  color: ${({ theme }) => theme.textFaded};
`;

export const StyledRowItem = styled.tr`
  vertical-align: middle;
  border-collapse: collapse;
  border-bottom: 1px solid ${({ theme }) => theme.borderMain};
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
    font-size: 20px;
    & span {
      font-family: Roboto-Medium;
      font-size: 14px;
      color: ${({ theme }) => theme.textFaded};
    }
  }
`;
