import styled from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const StyledColumnHeader = styled.th`
  text-align: left;
  font: ${({ theme }) => theme.font.robotoMedium};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textFaded};
`;

export const StyledRowItem = styled.tr`
  vertical-align: middle;
  border-collapse: collapse;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderMain};
`;

export const StyledRowCell = styled.td`
  font: ${({ theme }) => theme.font.robotoRegular};
  font-size: 18px;
  vertical-align: middle;
  padding: 12px;
  & div {
    display: flex;
    align-items: center;
    gap: 12px;
    font: ${({ theme }) => theme.font.slabMedium};
    font-size: 20px;
    & span {
      font: ${({ theme }) => theme.font.robotoMedium};

      font-size: 14px;
      color: ${({ theme }) => theme.colors.textFaded};
    }
  }
`;
