import styled from 'styled-components';

export const StyledReusableTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const StyledColumnReusableHeader = styled.th`
  text-align: left;
  font: ${({ theme }) => theme.fonts.robotoMedium};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textFaded};
  padding-left: 10px;
`;

export const StyledReusableRowItem = styled.tr`
  vertical-align: middle;
  border-collapse: collapse;
  border-bottom: 1px solid #e2e2e2;
`;

export const StyledRowReusableCell = styled.td`
  font: ${({ theme }) => theme.fonts.robotoRegular};
  font-size: 16px;
  vertical-align: middle;
  text-align: left;
  padding: 12px;
  & div {
    display: flex;
    align-items: center;
    gap: 12px;
    font: ${({ theme }) => theme.fonts.slabMedium};
    font-size: 16px;
    & span {
      font: ${({ theme }) => theme.fonts.robotoMedium};
      font-size: 16px;
      color: ${({ theme }) => theme.colors.textFaded};
    }
  }
`;

export const StyledImageCont = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.borderMain};
  border-radius: 50%;
  padding: 20px;
`;
