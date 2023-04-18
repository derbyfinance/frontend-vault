import styled from 'styled-components';

export const StyledTableWrapper = styled.div``;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 50px 0 0 0;
`;

export const StyledColumnHeader = styled.th`
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
  font-size: 16px;
`;

export const StyledRowCell = styled.td`
  font: 'Roboto-Regular';
  font-size: 16px;
  vertical-align: middle;
  padding: 12px 12px 12px 0px;
  & div {
    display: flex;
    align-items: center;
    font: 'Slab-Medium';
  }
`;

export const StyledCircleBorder = styled.div`
  border: 1px solid #e2e2e2;
  height: 64px;
  border-radius: 1000%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px 0 0;
`;

export const StyledCircleAvatar = styled.div`
  width: 30px;
  border-radius: 50%;
  height: 30px;
  background-color: ${({ backgroundColor  }) => backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
