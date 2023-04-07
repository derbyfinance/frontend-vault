import styled from 'styled-components';

export const StyledTableWrapper = styled.div``;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 50px 0 0 0;
`;

export const StyledColumnHeader = styled.th`
  text-transform: uppercase;
  font-family: 'Roboto-Regular';
  font-size: 16px;
  text-align: left;
  color: ${({ theme }) => theme.colors.textFaded};
  padding: 0 10px 0 0;
`;

export const StyledRowItem = styled.tr`
  vertical-align: middle;
  border-collapse: collapse;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderMain};
  &:hover {
    background: #f5f5f5;
  }
`;

export const StyleRowName = styled.div`
  font-family: 'Roboto-Medium';
  font-size: 18px;
`;

export const StyledRowCell = styled.td`
  font: 'Roboto-Regular';
  font-size: 18px;
  vertical-align: middle;
  padding: 25px 12px 25px 0px;
  & div {
    display: flex;
    align-items: center;
    font: 'Slab-Medium';
  }
`;
